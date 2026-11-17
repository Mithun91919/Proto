"use client";

import { useEffect, useRef } from "react";

type ClipFigureProps = {
  /** Unconverted QuickTime source — no `type`, so the browser sniffs the codec. */
  mov?: string;
  mp4?: string;
  webm?: string;
  /**
   * Must be a frame from the clip itself. A landscape poster behind a
   * portrait clip gets cropped to a meaningless vertical strip, and becomes
   * the permanent state if the video never decodes.
   */
  poster?: string;
  alt: string;
  caption?: string;
  /**
   * True pixel dimensions. Optional, but worth passing: they reserve the
   * right-shaped box before metadata loads, so the clip doesn't shift layout
   * on arrival. `object-fit: contain` means a wrong pair letterboxes rather
   * than crops.
   */
  width?: number;
  height?: number;
  /**
   * `standalone` centres the clip in its own band. `beside` shortens it so it
   * can sit next to a column of text — a portrait clip below a paragraph
   * leaves most of the page width empty. `fill` takes the width of whatever
   * slot it is placed in, for a row of equal tiles.
   */
  variant?: "standalone" | "beside" | "fill";
};

type ClipVideoProps = {
  mov?: string;
  mp4?: string;
  webm?: string;
  poster?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * The playing part of a clip, without a figure or caption around it: muted,
 * looping, started only while on screen, and held on its poster under
 * `prefers-reduced-motion`. `ClipFigure` wraps it for portrait phone
 * recordings; `BrowserMockup` wraps it for a desktop recording, so a screen
 * recording and a screenshot of the same product get the same frame.
 */
export function ClipVideo({ mov, mp4, webm, poster, alt, width, height, className }: ClipVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) void video.play().catch(() => {});
          else video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
      poster={poster}
      muted
      loop
      playsInline
      /* `metadata`, not `none`: without intrinsic dimensions a height-sized
         video falls back to the browser's default 300px width and renders
         at the wrong ratio until the file loads. */
      preload="metadata"
      aria-label={alt}
    >
      {webm ? <source src={webm} type="video/webm" /> : null}
      {mp4 ? <source src={mp4} type="video/mp4" /> : null}
      {mov ? <source src={mov} /> : null}
    </video>
  );
}

/**
 * A portrait screen recording (~0.54). Sized by height, not width — a phone
 * clip stretched to a full-bleed container renders thousands of pixels tall,
 * which is what made the old full-width treatment unusable.
 *
 * Holds on the poster frame under `prefers-reduced-motion`, and only plays
 * while on screen so a long page isn't decoding several clips at once.
 */
export function ClipFigure({
  mov,
  mp4,
  webm,
  poster,
  alt,
  caption,
  width,
  height,
  variant = "standalone",
}: ClipFigureProps) {
  return (
    <figure
      className={`ds-clip${variant === "beside" ? " ds-clip-beside" : ""}${variant === "fill" ? " ds-clip-fill" : ""}`}
    >
      <ClipVideo
        className="ds-clip-video"
        mov={mov}
        mp4={mp4}
        webm={webm}
        poster={poster}
        alt={alt}
        width={width}
        height={height}
      />
      {caption ? (
        <figcaption className="ds-media-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
