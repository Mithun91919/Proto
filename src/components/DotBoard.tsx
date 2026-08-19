"use client";

import { useEffect, useRef } from "react";

/**
 * Flip-dot board. Dots pour in from above and stack up from the bottom into a
 * dot-screen image, hold, then drain away and repeat. The source is either a
 * photograph (which can cross-fade in on hover) or lettering.
 *
 * Prefer the `HeroPortrait` and `DotText` wrappers over using this directly.
 */

const DISC_RATIO = 0.48;

/** Ink follows the darkest tones: hair and jacket draw, the face stays open. */
const TONE_FROM = 0.5;
const TONE_TO = 0.02;

/** Text: a cell inks once a glyph covers at least this much of it. */
const TEXT_THRESHOLD = 0.5;
/** Source pixels per grid cell when rasterising glyphs. */
const TEXT_SUPERSAMPLE = 8;

const FALL_MS = 3500;
const ENTRY_STAGGER_MS = 8000;
const EXIT_STAGGER_MS = 2800;
const HOLD_MS = 4000;
const HOVER_SPEED = 0.06;

const ENTRY_MS = FALL_MS + ENTRY_STAGGER_MS;
const EXIT_MS = FALL_MS + EXIT_STAGGER_MS;
const CYCLE_MS = ENTRY_MS + HOLD_MS + EXIT_MS;

export type DotBoardProps = {
  className?: string;
  /** Width / height of the rendered board. */
  aspect?: number;
  /** Cell size in CSS pixels — larger reads coarser. */
  pitch?: number;
  /** Photograph to render. Omit when using `text`. */
  src?: string;
  /** Crop tightness into the subject. */
  zoom?: number;
  focusY?: number;
  /** Lettering to render instead of a photograph. Newlines break lines. */
  text?: string;
  /** Cross-fade to the photograph on hover or focus. */
  revealOnHover?: boolean;
  /** Maximum opacity of the photograph at full hover (0–1). Default 1. */
  maxPhotoAlpha?: number;
  /**
   * Selector for an ancestor that drives the reveal. Use when the canvas sits
   * behind other content and so never receives the pointer itself.
   */
  hoverScope?: string;
  /** Decorative instances are hidden from assistive tech and not focusable. */
  decorative?: boolean;
  label?: string;
};

type Dot = {
  x: number;
  y: number;
  radius: number;
  entryFrom: number;
  entryDelay: number;
  exitDelay: number;
};

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
const easeInCubic = (t: number) => t * t * t;
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function readToken(element: Element, name: string, fallback: string) {
  const value = getComputedStyle(element).getPropertyValue(name).trim();
  return value || fallback;
}

export function DotBoard({
  className,
  aspect = 4 / 5,
  pitch = 7,
  src,
  zoom = 1.35,
  focusY = 0.42,
  text,
  revealOnHover = true,
  maxPhotoAlpha = 1,
  hoverScope,
  decorative = false,
  label,
}: DotBoardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Lettering has no photograph behind it, so there is nothing to reveal.
    const canHover =
      revealOnHover && !text && Boolean(src) &&
      window.matchMedia("(hover: hover)").matches;

    const ink = readToken(canvas, "--portrait-ink", "#0e7490");

    let dots: Dot[] = [];
    let frame: number | null = null;
    let cycleStart = 0;
    let visible = false;
    let hover = 0;
    let hoverTarget = 0;
    let width = 0;
    let height = 0;
    let crop = { x: 0, y: 0, w: 0, h: 0 };
    let disposed = false;

    const image = new Image();
    image.decoding = "async";

    const measureCrop = () => {
      const baseW = Math.min(image.naturalWidth, image.naturalHeight * aspect);
      const baseH = baseW / aspect;
      const w = baseW / zoom;
      const h = baseH / zoom;
      crop = {
        x: (image.naturalWidth - w) / 2,
        y: Math.min(
          Math.max(0, image.naturalHeight * focusY - h / 2),
          image.naturalHeight - h,
        ),
        w,
        h,
      };
    };

    /**
     * Rasterise lettering dark-on-light at cell-aligned positions.
     *
     * Every glyph is placed in a box that is a whole number of grid cells wide
     * and starts on a cell boundary. Without that, each letter lands at its own
     * sub-cell offset and a symmetric glyph like H samples unevenly — four
     * columns on one stem, three on the other.
     */
    const drawTextSource = (columns: number, rows: number) => {
      const cell = TEXT_SUPERSAMPLE;
      const source = document.createElement("canvas");
      source.width = columns * cell;
      source.height = rows * cell;
      const sourceCtx = source.getContext("2d");
      if (!sourceCtx) return null;

      sourceCtx.fillStyle = "#ffffff";
      sourceCtx.fillRect(0, 0, source.width, source.height);
      sourceCtx.fillStyle = "#000000";

      const family = readToken(canvas, "--font-display", "sans-serif");
      const lines = (text ?? "").split("\n");
      // Heavier weight widens the stems, so a one-cell rounding error is a
      // smaller share of each stroke.
      const setFont = (size: number) => {
        sourceCtx.font = `700 ${size}px ${family}`;
      };
      const snap = (value: number) => Math.max(cell, Math.round(value / cell) * cell);
      const advance = (character: string) =>
        snap(sourceCtx.measureText(character).width);
      const lineWidth = (line: string) =>
        [...line].reduce((total, character) => total + advance(character), 0);

      let size = source.height / (lines.length * 1.25);
      setFont(size);
      const maxWidth = source.width * 0.88;
      const widest = Math.max(...lines.map(lineWidth));
      if (widest > maxWidth) {
        size *= maxWidth / widest;
        setFont(size);
      }

      sourceCtx.textAlign = "center";
      sourceCtx.textBaseline = "middle";

      const lineHeight = snap(size * 1.2);
      const blockHeight = lineHeight * lines.length;
      const top = snap((source.height - blockHeight) / 2);

      lines.forEach((line, index) => {
        let x = snap((source.width - lineWidth(line)) / 2);
        const y = top + lineHeight * index + lineHeight / 2;
        for (const character of line) {
          const step = advance(character);
          // Centred in its own snapped box, so symmetric glyphs stay symmetric
          // about either a cell boundary or a cell centre.
          sourceCtx.fillText(character, x + step / 2, y);
          x += step;
        }
      });

      return source;
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width <= 0 || height <= 0) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.max(1, Math.round(width / pitch));
      const rows = Math.max(1, Math.round(height / pitch));
      const cellW = width / columns;
      const cellH = height / rows;
      const maxRadius = Math.min(cellW, cellH) * DISC_RATIO;

      const sampler = document.createElement("canvas");
      sampler.width = columns;
      sampler.height = rows;
      const sampleCtx = sampler.getContext("2d");
      if (!sampleCtx) return;

      if (text) {
        // Area-average the supersampled glyphs so each cell's value is true
        // coverage rather than a point sample.
        const source = drawTextSource(columns, rows);
        if (!source) return;
        sampleCtx.imageSmoothingEnabled = true;
        sampleCtx.imageSmoothingQuality = "high";
        sampleCtx.drawImage(source, 0, 0, columns, rows);
      } else {
        sampleCtx.drawImage(
          image,
          crop.x,
          crop.y,
          crop.w,
          crop.h,
          0,
          0,
          columns,
          rows,
        );
      }
      const { data } = sampleCtx.getImageData(0, 0, columns, rows);

      // Auto-level so the tone curve lands consistently whatever the source.
      const luminances = new Float32Array(columns * rows);
      let min = 1;
      let max = 0;
      for (let i = 0; i < luminances.length; i++) {
        const index = i * 4;
        const luminance =
          (0.2126 * data[index] +
            0.7152 * data[index + 1] +
            0.0722 * data[index + 2]) /
          255;
        luminances[i] = luminance;
        if (luminance < min) min = luminance;
        if (luminance > max) max = luminance;
      }
      const range = Math.max(0.0001, max - min);

      dots = [];
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const normalised = (luminances[row * columns + column] - min) / range;
          // Text wants uniform stems, so it thresholds instead of tapering
          // edge cells the way a photograph does.
          const radius = text
            ? normalised < TEXT_THRESHOLD
              ? maxRadius
              : 0
            : maxRadius * smoothstep(TONE_FROM, TONE_TO, normalised);
          // Blank cells never draw, so keep them out of the loop entirely.
          if (radius < 0.16) continue;

          const rowRatio = row / Math.max(1, rows - 1);
          dots.push({
            x: cellW * (column + 0.5),
            y: cellH * (row + 0.5),
            radius,
            entryFrom: -30 - Math.random() * 140,
            // Lowest rows settle first so the image stacks up from the floor.
            entryDelay: (1 - rowRatio) * ENTRY_STAGGER_MS,
            // Drains from the bottom up, like the floor opening.
            exitDelay: (1 - rowRatio) * EXIT_STAGGER_MS,
          });
        }
      }
    };

    const draw = (now: number) => {
      if (!cycleStart) cycleStart = now;
      const elapsed = now - cycleStart;
      const t = reducedMotion ? ENTRY_MS : elapsed % CYCLE_MS;

      ctx.clearRect(0, 0, width, height);

      const boardAlpha = 1 - hover;
      if (boardAlpha > 0.001) {
        ctx.fillStyle = ink;
        for (const dot of dots) {
          let y = dot.y;
          let alpha = 1;

          if (t < ENTRY_MS) {
            const progress = clamp01((t - dot.entryDelay) / FALL_MS);
            if (progress <= 0) continue;
            y = dot.entryFrom + (dot.y - dot.entryFrom) * easeOutCubic(progress);
            alpha = Math.min(1, progress * 2.5);
          } else if (t >= ENTRY_MS + HOLD_MS) {
            const exitT = t - (ENTRY_MS + HOLD_MS);
            const progress = clamp01((exitT - dot.exitDelay) / FALL_MS);
            y = dot.y + (height + 40 - dot.y) * easeInCubic(progress);
            alpha = 1 - progress;
          }

          if (alpha <= 0.01) continue;
          ctx.globalAlpha = alpha * boardAlpha;
          ctx.beginPath();
          ctx.arc(dot.x, y, dot.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!text && src && hover > 0.001) {
        ctx.globalAlpha = hover * maxPhotoAlpha;
        ctx.drawImage(image, crop.x, crop.y, crop.w, crop.h, 0, 0, width, height);
      }
      ctx.globalAlpha = 1;

      const hoverSettled = Math.abs(hoverTarget - hover) < 0.002;
      if (hoverSettled) hover = hoverTarget;
      else hover += (hoverTarget - hover) * (reducedMotion ? 1 : HOVER_SPEED);

      // Loop only while on screen and unresolved; keep going mid cross-fade.
      const looping = visible && !reducedMotion && hover < 0.999;
      frame = looping || !hoverSettled ? requestAnimationFrame(draw) : null;
    };

    const request = () => {
      if (frame === null && !disposed) frame = requestAnimationFrame(draw);
    };

    const onEnter = () => {
      if (!canHover) return;
      hoverTarget = 1;
      request();
    };
    const onLeave = () => {
      if (!canHover) return;
      hoverTarget = 0;
      // Restart the pour once the photo fades out.
      cycleStart = 0;
      request();
    };

    let resizeTimer: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        build();
        cycleStart = 0;
        request();
      }, 150);
    };

    const start = () => {
      if (disposed) return;
      build();
      canvas.dataset.ready = "true";
      request();
    };

    if (text) {
      // Wait for the display face, otherwise the letterforms sample as fallback.
      const fonts = document.fonts;
      if (fonts) fonts.ready.then(start);
      else start();
    } else if (src) {
      image.onload = () => {
        if (disposed) return;
        measureCrop();
        start();
      };
      image.src = src;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (visible) request();
      },
      { threshold: 0.15 },
    );
    observer.observe(canvas);

    const revealTrigger: HTMLElement =
      (hoverScope ? canvas.closest<HTMLElement>(hoverScope) : null) ?? canvas;

    revealTrigger.addEventListener("pointerenter", onEnter);
    revealTrigger.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("focus", onEnter);
    canvas.addEventListener("blur", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      disposed = true;
      if (frame !== null) cancelAnimationFrame(frame);
      window.clearTimeout(resizeTimer);
      observer.disconnect();
      revealTrigger.removeEventListener("pointerenter", onEnter);
      revealTrigger.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("focus", onEnter);
      canvas.removeEventListener("blur", onLeave);
      window.removeEventListener("resize", onResize);
      image.onload = null;
    };
  }, [aspect, pitch, src, zoom, focusY, text, revealOnHover, maxPhotoAlpha, hoverScope]);

  const interactive = Boolean(src) && revealOnHover && !text && !decorative;

  return (
    <figure
      className={`hero-portrait${className ? ` ${className}` : ""}`}
      aria-hidden={decorative || undefined}
    >
      <div className="hero-portrait-board">
        <canvas
          ref={canvasRef}
          className="hero-portrait-canvas"
          style={{ aspectRatio: aspect }}
          role={decorative ? "presentation" : "img"}
          aria-label={decorative ? undefined : label}
          tabIndex={interactive ? 0 : undefined}
        />
      </div>
      {decorative || text || !src ? null : (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={label ?? ""}
            className="hero-portrait-fallback"
            style={{ aspectRatio: aspect }}
          />
        </noscript>
      )}
    </figure>
  );
}
