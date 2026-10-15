"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * A twenty-second film of the Portfolio Management case, drawn in dots: five
 * places the plan lived, flowing into one platform of five categories, then
 * a single pulse that carries a goal to the work and out into the results.
 *
 * It is one pure function of time. `draw(t)` paints the whole frame, so the
 * film can be replayed, paused on its last frame for reduced motion, and
 * never drifts out of step with itself. It plays once as it comes into view,
 * then rests; Replay is the reader's. Nothing loops.
 *
 * Words and figures are the case study's own: the five places, the five
 * categories, the chain, and the three verified metrics, with the page's
 * attribution under them.
 */

const BEFORE = ["Who works on what", "Products and projects", "Initiatives and budgets", "Goals", "Work, in Jira"];
const AFTER = ["People", "Product", "Initiative", "Portfolio", "Manager"];
const CHAIN = ["Goal", "Initiative", "Product", "Person", "Jira epic", "Work"];
const CAPTIONS = [
  "Five places, each keeping its own copy.",
  "One platform, five categories, one name for each thing.",
  "A goal now links to the work behind it.",
  "What changed",
];
const CAP_AT = [0, 5800, 11800, 17600];
const END = 23000;

/* A scene "begins" when its change starts and "rests" on its last frame.
   The arrows play a scene from its beginning to its rest, then wait. */
const BEGIN_AT = [0, 5200, 11000, 16200];
const REST_AT = [5200, 10900, 16200, END];

/* On the auto-play the platform holds still for a beat once its wave has
   passed, so the picture can be read before the film moves on. */
const HOLD_AT = 10600;
const HOLD_MS = 2200;

const sceneAt = (t: number) => {
  let s = 0;
  for (let i = 1; i < BEGIN_AT.length; i++) if (t > BEGIN_AT[i]) s = i;
  return s;
};

const SPREAD: [number, number][] = [[0.12, 0.6], [0.3, 0.3], [0.5, 0.64], [0.7, 0.32], [0.88, 0.58]];
const RING: [number, number][] = [[0.5, 0.17], [0.2, 0.46], [0.8, 0.46], [0.3, 0.76], [0.7, 0.76]];
const HUB: [number, number] = [0.5, 0.47];
const PER = 15;
const N = PER * 5;
const METRICS = [
  { to: 800, fmt: (n: number) => `${n}+ hrs`, label: "reclaimed every week" },
  { to: 6, fmt: (n: number) => `${n}K+`, label: "monthly users" },
  { to: 100, fmt: (n: number) => `$${n}K`, label: "saved a year on licences" },
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
const inOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const out = (p: number) => 1 - Math.pow(1 - p, 3);
const hash = (i: number, s = 1) => {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return x - Math.floor(x);
};
const quad = (a: number, c: number, b: number, p: number) => (1 - p) * (1 - p) * a + 2 * (1 - p) * p * c + p * p * b;

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeReduced(notify: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", notify);
  return () => mq.removeEventListener("change", notify);
}

type Palette = { accent: string; ink: string; soft: string; line: string; border: string; card: string; font: string };

export function PlatformExplainer() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const palette = useRef<Palette | null>(null);
  const raf = useRef(0);
  const [scene, setScene] = useState(0);
  const [done, setDone] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );

  const draw = useCallback((t: number) => {
    const cv = canvas.current;
    const pal = palette.current;
    if (!cv || !pal) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const W = cv.clientWidth;
    const H = cv.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) {
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const px = (f: [number, number]): [number, number] => [f[0] * W, f[1] * H];
    const hub = px(HUB);
    const R = 3;
    const gap = 10;

    const dot = (x: number, y: number, a: number, r = R, color = pal.accent) => {
      if (a <= 0.01) return;
      ctx.globalAlpha = a;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };
    const text = (s: string, x: number, y: number, size: number, color: string, a: number, weight = 400) => {
      if (a <= 0.01) return;
      ctx.globalAlpha = a;
      ctx.fillStyle = color;
      ctx.font = `${weight} ${size}px ${pal.font}`;
      ctx.fillText(s, x, y);
    };

    /* ── the chain's geometry, used by scenes 3 and 4 ── */
    const lineY = H * 0.44;
    const x0 = W * 0.08;
    const x1 = W * 0.92;
    const nodeX = (k: number) => x0 + ((x1 - x0) * k) / 5;
    const pulseP = out(seg(t, 12700, 16200));
    const pulseX = x0 + (x1 - x0) * pulseP;

    /* ── dots: five places → five categories → the chain's own line ── */
    const toRing = seg(t, 5200, 6900);
    const toLine = seg(t, 11000, 12700);
    const lineFade = 1 - 0.65 * seg(t, 12700, 13500);
    const hideDots = 1 - seg(t, 16800, 17400);

    for (let i = 0; i < N; i++) {
      const k = Math.floor(i / PER);
      const j = i % PER;
      const ox = ((j % 5) - 2) * gap;
      const oy = (Math.floor(j / 5) - 1) * gap;
      const a0 = px(SPREAD[k]);
      const b0 = px(RING[k]);
      const d = hash(i) * 0.3;
      const p1 = inOut(clamp((toRing - d) / (1 - d)));
      const side = (hash(i, 2) - 0.5) * 120;
      const cx = (a0[0] + b0[0]) / 2 + side;
      const cy = (a0[1] + b0[1]) / 2 - 40 - hash(i, 3) * 40;
      let x = quad(a0[0], cx, b0[0], p1) + ox;
      let y = quad(a0[1], cy, b0[1], p1) + oy;
      // a quiet drift while the five places still sit apart
      const drift = 1 - toRing;
      x += Math.sin(t / 900 + hash(i, 4) * 6) * 2.2 * drift;
      y += Math.cos(t / 1100 + hash(i, 5) * 6) * 2.2 * drift;

      let alpha = out(seg(t, 150 + k * 260 + j * 20, 900 + k * 260 + j * 20));
      if (toLine > 0) {
        const d2 = hash(i, 6) * 0.35;
        const p2 = inOut(clamp((toLine - d2) / (1 - d2)));
        const tx = x0 + ((x1 - x0) * (i + 0.5)) / N;
        const ty = lineY;
        const sx = x;
        const sy = y;
        const mx = (sx + tx) / 2;
        const my = Math.min(sy, ty) - 30 - hash(i, 7) * 40;
        x = quad(sx, mx, tx, p2);
        y = quad(sy, my, ty, p2);
      }
      // a wave of light runs through the platform while it holds
      const wave = seg(t, 7600, 10600);
      const dist = Math.hypot(x - hub[0], y - hub[1]);
      const shine = wave > 0 && wave < 1 ? Math.max(0, 1 - Math.abs(wave * 520 - dist) / 70) : 0;
      alpha *= (toLine > 0 ? lineFade : 1) * hideDots;
      dot(x, y, clamp(alpha * (0.78 + 0.22 * shine)), R + shine * 1.2);
    }

    /* ── labels and spokes of scene 1–2 ── */
    const fadeBefore = 1 - seg(t, 5200, 5700);
    const showAfter = seg(t, 6500, 7100);
    const placesAlpha = 1 - seg(t, 11000, 11700);
    for (let k = 0; k < 5; k++) {
      const a0 = px(SPREAD[k]);
      const b0 = px(RING[k]);
      const p1 = inOut(toRing);
      const cx = a0[0] + (b0[0] - a0[0]) * p1;
      const cy = a0[1] + (b0[1] - a0[1]) * p1;
      const ly = cy + 2 * gap + 12;
      const appear = out(seg(t, 700 + k * 260, 1300 + k * 260));
      text(BEFORE[k], cx, ly, 12.5, pal.soft, appear * fadeBefore * placesAlpha);
      text(AFTER[k], cx, ly, 13, pal.accent, showAfter * placesAlpha * (1 - seg(t, 16800, 17300)), 600);
    }

    // hub and spokes
    const hubIn = out(seg(t, 6300, 7200));
    const hubOut = 1 - seg(t, 11000, 11800);
    if (hubIn > 0 && hubOut > 0) {
      const rr = 46 * (0.6 + 0.4 * hubIn);
      for (let k = 0; k < 5; k++) {
        const b0 = px(RING[k]);
        const ang = Math.atan2(b0[1] - hub[1], b0[0] - hub[0]);
        const sp = out(seg(t, 6700 + k * 130, 7600 + k * 130));
        const sx = hub[0] + Math.cos(ang) * (rr + 4);
        const sy = hub[1] + Math.sin(ang) * (rr + 4);
        const ex = b0[0] - Math.cos(ang) * 46;
        const ey = b0[1] - Math.sin(ang) * 30;
        ctx.globalAlpha = 0.5 * hubOut;
        ctx.strokeStyle = pal.accent;
        ctx.lineWidth = 1;
        ctx.setLineDash([1, 5]);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + (ex - sx) * sp, sy + (ey - sy) * sp);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      // ripple
      const rp = seg(t, 6500, 8000);
      if (rp > 0 && rp < 1) {
        ctx.globalAlpha = 0.35 * (1 - rp) * hubOut;
        ctx.strokeStyle = pal.accent;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(hub[0], hub[1], rr + rp * 90, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = hubIn * hubOut;
      ctx.fillStyle = pal.card;
      ctx.strokeStyle = pal.accent;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(hub[0], hub[1], rr, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      text("Pfolio", hub[0], hub[1], 15, pal.accent, hubIn * hubOut, 600);
    }

    /* ── the chain: a pulse carries a goal to the work ── */
    const chainIn = out(seg(t, 12300, 13100));
    const chainOut = 1 - seg(t, 16800, 17400);
    if (chainIn > 0 && chainOut > 0) {
      // the line the pulse has already drawn
      ctx.globalAlpha = chainIn * chainOut;
      ctx.strokeStyle = pal.accent;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x0, lineY);
      ctx.lineTo(pulseX, lineY);
      ctx.stroke();
      for (let k = 0; k < 6; k++) {
        const nx = nodeX(k);
        const age = pulseX >= nx - 2 ? 1 : 0;
        const ig = age;
        const lit = age * chainIn * chainOut;
        // ripple off a node as the pulse reaches it
        if (age) {
          const tHit = 12700 + 3500 * (1 - Math.pow(1 - clamp((nx - x0) / (x1 - x0)), 1 / 3));
          const rp = seg(t, tHit, tHit + 700);
          if (rp > 0 && rp < 1) {
            ctx.globalAlpha = 0.45 * (1 - rp) * chainOut;
            ctx.strokeStyle = pal.accent;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(nx, lineY, 9 + rp * 38, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = chainIn * chainOut;
        ctx.fillStyle = ig ? pal.accent : pal.card;
        ctx.strokeStyle = ig ? pal.accent : pal.border;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(nx, lineY, ig ? 8 : 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        text(CHAIN[k], nx, lineY + 30, 13, lit ? pal.ink : pal.soft, chainIn * chainOut, lit ? 600 : 400);
      }
      // the pulse and its trail
      if (t > 12700 && t < 17400) {
        for (let q = 0; q < 16; q++) {
          const back = q * 10;
          const tx = pulseX - back;
          if (tx < x0) continue;
          dot(tx, lineY, (1 - q / 16) * 0.95 * chainOut, 7 - q * 0.35);
        }
        // a halo on the head of the pulse
        ctx.globalAlpha = 0.28 * chainOut;
        ctx.strokeStyle = pal.accent;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(pulseX, lineY, 13, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    /* ── the work becomes results: three streams into three cards ── */
    const cardW = Math.min(180, W * 0.26);
    const cardH = 92;
    const cy0 = H * 0.3;
    METRICS.forEach((m, c) => {
      const cxm = W * (0.2 + c * 0.3);
      const start = 16300 + c * 220;
      const land = start + 1100;
      // stream of dots from the Work node
      const flight = (t - start) / (land - start);
      if (flight > 0 && flight < 1.4) {
        for (let q = 0; q < 9; q++) {
          const pq = clamp(flight - q * 0.045);
          if (pq <= 0 || pq >= 1) continue;
          const e = inOut(pq);
          const sx = x1;
          const sy = lineY;
          const tx = cxm;
          const ty = cy0;
          const mx = (sx + tx) / 2 + 20;
          const my = Math.min(sy, ty) - 70 - c * 14;
          dot(quad(sx, mx, tx, e), quad(sy, my, ty, e), 0.9 * (1 - q / 11), 4 - q * 0.25);
        }
      }
      const show = out(seg(t, land - 150, land + 600));
      if (show > 0) {
        const rise = (1 - show) * 12;
        ctx.globalAlpha = show;
        ctx.fillStyle = pal.card;
        ctx.strokeStyle = pal.border;
        ctx.lineWidth = 1;
        const rx = cxm - cardW / 2;
        const ry = cy0 - cardH / 2 + rise;
        ctx.beginPath();
        ctx.roundRect(rx, ry, cardW, cardH, 12);
        ctx.fill();
        ctx.stroke();
        const cnt = out(seg(t, land, land + 1400));
        text(m.fmt(Math.round(m.to * cnt)), cxm, ry + 36, 28, pal.ink, show, 500);
        text(m.label, cxm, ry + 68, 13, pal.soft, show);
        // a settle ripple on arrival
        const rp = seg(t, land, land + 700);
        if (rp > 0 && rp < 1) {
          ctx.globalAlpha = 0.4 * (1 - rp);
          ctx.strokeStyle = pal.accent;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(rx - rp * 8, ry - rp * 8, cardW + rp * 16, cardH + rp * 16, 12 + rp * 6);
          ctx.stroke();
        }
      }
    });

    /* ── caption ── */
    let ci = 0;
    for (let c = 0; c < CAP_AT.length; c++) if (t >= CAP_AT[c]) ci = c;
    const into = seg(t, CAP_AT[ci], CAP_AT[ci] + 450);
    const next = ci < CAP_AT.length - 1 ? 1 - seg(t, CAP_AT[ci + 1] - 350, CAP_AT[ci + 1]) : 1;
    text(CAPTIONS[ci], W / 2, H - 28, 15.5, pal.ink, into * next, 600);
    ctx.globalAlpha = 1;
  }, []);

  const tNow = useRef(0);

  /* Plays internal time from `from` to `to`, then waits. `hold` adds the
     pause on the platform, for the auto-play only. */
  const run = useCallback(
    (from: number, to: number, hold = false) => {
      window.cancelAnimationFrame(raf.current);
      setDone(false);
      setPlaying(true);
      const start = performance.now();
      const tick = (now: number) => {
        let t = from + (now - start);
        if (hold && from < HOLD_AT && t > HOLD_AT) t = t - HOLD_AT < HOLD_MS ? HOLD_AT : t - HOLD_MS;
        t = Math.min(to, t);
        tNow.current = t;
        draw(t);
        setScene(sceneAt(t));
        if (t < to) {
          raf.current = window.requestAnimationFrame(tick);
        } else {
          setPlaying(false);
          setDone(to >= END);
        }
      };
      raf.current = window.requestAnimationFrame(tick);
    },
    [draw],
  );

  const seek = useCallback(
    (t: number) => {
      window.cancelAnimationFrame(raf.current);
      setPlaying(false);
      tNow.current = t;
      draw(t);
      setScene(sceneAt(t));
      setDone(t >= END);
    },
    [draw],
  );

  const play = useCallback(() => run(0, END, true), [run]);

  const goTo = useCallback(
    (target: number) => {
      if (target < 0 || target > 3) return;
      const current = sceneAt(tNow.current);
      if (target === current + 1 || (target === current && playing)) run(BEGIN_AT[target], REST_AT[target]);
      else seek(REST_AT[target]);
    },
    [run, seek, playing],
  );

  // colours come from the page's own tokens, read once the stage is mounted
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const cs = getComputedStyle(el);
    const get = (name: string, fallback: string) => cs.getPropertyValue(name).trim() || fallback;
    palette.current = {
      accent: get("--ds-accent-deep", "#155e75"),
      ink: get("--ink", "#0c171c"),
      soft: get("--ink-soft", "#243942"),
      line: get("--line", "#cbd5da"),
      border: get("--ds-solid-border", "#d5dde0"),
      card: "#ffffff",
      font: cs.fontFamily || "sans-serif",
    };
    if (reduced) {
      tNow.current = END;
      draw(END);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          play();
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    const ro = new ResizeObserver(() => draw(tNow.current));
    ro.observe(el);
    return () => {
      io.disconnect();
      ro.disconnect();
      window.cancelAnimationFrame(raf.current);
    };
  }, [reduced, draw, play]);

  const current = reduced ? 3 : scene;
  const atEnd = reduced || done;

  return (
    <div ref={wrap} className="ds-xp">
      <p className="ds-xp-lead">
        Five tools that each kept their own copy of the plan became one platform, where a goal now links to the
        work behind it.
      </p>
      <div className="ds-xp-stage">
        <canvas
          ref={canvas}
          className="ds-xp-canvas"
          role="img"
          aria-label="Animated explainer: five separate places become one platform of five categories. A pulse then carries a goal through initiative, product, person and Jira epic to the work. The results are 800+ hours reclaimed every week, 6K+ monthly users and $100K saved a year on licences."
        />
        {!reduced ? (
          <>
            <button
              type="button"
              className="ds-xp-arrow is-prev"
              aria-label="Previous scene"
              disabled={!started || current === 0}
              onClick={() => goTo(current - 1)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="ds-xp-arrow is-next"
              aria-label="Next scene"
              disabled={!started || current === 3}
              onClick={() => goTo(current + 1)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        ) : null}
      </div>
      <div className="ds-xp-foot">
        <span className="ds-xp-steps">
          {CAPTIONS.map((c, i) => (
            <button
              key={c}
              type="button"
              className={`ds-xp-step${current > i || atEnd ? " is-done" : current === i ? " is-cur" : ""}`}
              aria-label={`Scene ${i + 1}: ${c}`}
              aria-current={current === i ? "step" : undefined}
              disabled={reduced || !started}
              onClick={() => goTo(i)}
            />
          ))}
        </span>
        <span className="ds-note">
          Hours are reported by the product managers. Savings come from retiring redundant licences.
        </span>
        {!reduced ? (
          <button type="button" className="ds-xp-replay" onClick={play} disabled={!started}>
            Replay
          </button>
        ) : null}
      </div>
    </div>
  );
}
