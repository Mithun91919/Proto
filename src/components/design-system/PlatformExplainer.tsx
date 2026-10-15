"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * A film of the Portfolio Management case, drawn in dots on the dark ground.
 *
 * 1. Plan and work were kept apart, in four external tools, each with a
 *    licence, and the work itself in Jira.
 * 2. Pfolio replaced the four with one platform. Jira stays, and feeds actual
 *    headcount in through its API.
 * 3. People, their work, initiatives and goals are linked in one set of
 *    records.
 * 4. Decisions are documented in Manager, where requests are made and
 *    approved.
 * 5. The results.
 *
 * It is one pure function of time: `draw(t)` paints the whole frame, so the
 * film can be replayed, stepped with the arrows, and rest on its last frame
 * for reduced motion. It plays once as it comes into view, then waits.
 * Nothing loops. No tool is named; "Jira" is already named on the page.
 */

const TOOLS = ["People tool", "Product tool", "Initiative tool", "Goal tool", "Jira"];
const AFTER = ["People", "Product", "Initiative", "Portfolio", "Jira"];
const CHAIN = ["Goal", "Initiative", "Product", "Person", "Jira epic", "Work"];
const SOURCES = ["Email", "Slack", "In person"];
const LEDGER = ["Product request", "Initiative request", "Pillar request"];

const SCENES = [
  {
    title: "Plan and work were kept apart, in four separate tools.",
    detail:
      "Who works on what, products and projects, initiatives and budgets, and goals each lived in an external tool, and each tool carried its own licence. The work itself was tracked in Jira.",
  },
  {
    title: "Pfolio replaced the four tools with one platform.",
    detail:
      "People, Product, Initiative and Portfolio now hold in one place what the four tools did. Planned headcount is entered in Pfolio, and actual headcount comes from Jira through its API.",
  },
  {
    title: "People, their work, initiatives and goals are now linked.",
    detail:
      "A goal links to an initiative, an initiative to a product, a product to a person, and each product and initiative to the Jira epic its work is tagged to. The records are entered and managed by people.",
  },
  {
    title: "Decisions are documented in Manager.",
    detail:
      "Requests used to run across email, Slack and conversations. Product, initiative, application and pillar requests are now made and approved in Manager, each with its own status, so the decision and the action sit together.",
  },
  {
    title: "The result: 800+ hours a week reclaimed.",
    detail:
      "6K+ monthly users, and $100K* a year saved by retiring redundant licences. *Average yearly cost. The hours are reported by the product managers.",
  },
];

const HUES = ["#5eead4", "#7dd3fc", "#fcd34d", "#fda4af", "#a8bcc4"];
const METRIC_HUES = ["#5eead4", "#7dd3fc", "#fcd34d"];

/* A scene "begins" when its change starts and "rests" on its last frame.
   The arrows play a scene from its beginning to its rest, then wait. */
const END = 28200;
const BEGIN_AT = [0, 5600, 11400, 17000, 22200];
const REST_AT = [5600, 11200, 16800, 22000, END];

/* On the auto-play the platform holds still for a beat once Jira's headcount
   has flowed in, so the picture can be read before the film moves on. */
const HOLD_AT = 11000;
const HOLD_MS = 1600;

const SPREAD: [number, number][] = [[0.1, 0.58], [0.27, 0.28], [0.46, 0.66], [0.64, 0.3], [0.9, 0.6]];
const RING: [number, number][] = [[0.45, 0.15], [0.15, 0.47], [0.28, 0.82], [0.62, 0.82], [0.9, 0.47]];
const HUB: [number, number] = [0.45, 0.47];
const PER = 15;
const N = PER * 5;
const METRICS = [
  { to: 800, fmt: (n: number) => `${n}+ hrs`, label: "reclaimed every week" },
  { to: 6, fmt: (n: number) => `${n}K+`, label: "monthly users" },
  { to: 100, fmt: (n: number) => `$${n}K*`, label: "average yearly licence cost saved" },
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

const sceneAt = (t: number) => {
  let s = 0;
  for (let i = 1; i < BEGIN_AT.length; i++) if (t > BEGIN_AT[i]) s = i;
  return s;
};

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeReduced(notify: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", notify);
  return () => mq.removeEventListener("change", notify);
}

type Palette = { accent: string; ink: string; soft: string; border: string; card: string; solid: string; font: string };

export function PlatformExplainer() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const palette = useRef<Palette | null>(null);
  const raf = useRef(0);
  const tNow = useRef(0);
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
    const text = (s: string, x: number, y: number, size: number, color: string, a: number, weight = 400, align: CanvasTextAlign = "center") => {
      if (a <= 0.01) return;
      ctx.globalAlpha = a;
      ctx.fillStyle = color;
      ctx.textAlign = align;
      ctx.font = `${weight} ${size}px ${pal.font}`;
      ctx.fillText(s, x, y);
      ctx.textAlign = "center";
    };
    const box = (x: number, y: number, w: number, h: number, r: number, a: number, stroke: string, fill = pal.solid) => {
      if (a <= 0.01) return;
      ctx.globalAlpha = a;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, r);
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.fillStyle = pal.card;
      ctx.fill();
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    /* ── the chain's geometry, used by scene 3 and the results ── */
    const lineY = H * 0.46;
    const x0 = W * 0.08;
    const x1 = W * 0.92;
    const nodeX = (k: number) => x0 + ((x1 - x0) * k) / 5;
    const PULSE_AT = 13300;
    const pulseP = out(seg(t, PULSE_AT, PULSE_AT + 3500));
    const pulseX = x0 + (x1 - x0) * pulseP;

    /* ── dots: four tools and Jira → the platform → the chain's own line ── */
    const toRing = seg(t, 5600, 7400);
    const toLine = seg(t, 11400, 13100);
    const lineFade = 1 - 0.65 * seg(t, PULSE_AT, PULSE_AT + 800);
    const hideDots = 1 - seg(t, 17000, 17600);

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
      const drift = 1 - toRing;
      x += Math.sin(t / 900 + hash(i, 4) * 6) * 2.2 * drift;
      y += Math.cos(t / 1100 + hash(i, 5) * 6) * 2.2 * drift;

      let alpha = out(seg(t, 150 + k * 260 + j * 20, 900 + k * 260 + j * 20));
      if (toLine > 0) {
        const d2 = hash(i, 6) * 0.35;
        const p2 = inOut(clamp((toLine - d2) / (1 - d2)));
        const tx = x0 + ((x1 - x0) * (i + 0.5)) / N;
        const ty = lineY;
        const mx = (x + tx) / 2;
        const my = Math.min(y, ty) - 30 - hash(i, 7) * 40;
        const sx = x;
        const sy = y;
        x = quad(sx, mx, tx, p2);
        y = quad(sy, my, ty, p2);
      }
      const wave = seg(t, 7800, 10400);
      const dist = Math.hypot(x - hub[0], y - hub[1]);
      const shine = wave > 0 && wave < 1 && k < 4 ? Math.max(0, 1 - Math.abs(wave * 520 - dist) / 70) : 0;
      alpha *= (toLine > 0 ? lineFade : 1) * hideDots;
      dot(x, y, clamp(alpha * (0.85 + 0.15 * shine)), R + shine * 1.2, HUES[k]);
    }

    /* ── labels, licence tags, spokes and the Jira line ── */
    const fadeBefore = 1 - seg(t, 5600, 6100);
    const showAfter = seg(t, 7000, 7600);
    const placesAlpha = 1 - seg(t, 11400, 12000);
    for (let k = 0; k < 5; k++) {
      const a0 = px(SPREAD[k]);
      const b0 = px(RING[k]);
      const p1 = inOut(toRing);
      const cx = a0[0] + (b0[0] - a0[0]) * p1;
      const cy = a0[1] + (b0[1] - a0[1]) * p1;
      const ly = cy + 2 * gap + 12;
      const appear = out(seg(t, 700 + k * 260, 1300 + k * 260));
      if (k < 4) {
        text(TOOLS[k], cx, ly, 12.5, pal.soft, appear * fadeBefore * placesAlpha);
        text(AFTER[k], cx, ly, 13, HUES[k], showAfter * placesAlpha, 600);
        // the licence each tool carried, which falls away as the tool is replaced
        const tag = out(seg(t, 1700 + k * 220, 2300 + k * 220));
        const fall = inOut(seg(t, 5700 + k * 90, 6500 + k * 90));
        const tagA = tag * (1 - fall);
        if (tagA > 0.01) {
          const tx = a0[0] + 34;
          const ty = a0[1] - 30 + fall * 46;
          ctx.globalAlpha = tagA;
          ctx.strokeStyle = HUES[2];
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(tx, ty, 8, 0, Math.PI * 2);
          ctx.stroke();
          text("$", tx, ty + 0.5, 10, HUES[2], tagA, 600);
          text("licence", tx + 14, ty, 11, pal.soft, tagA, 400, "left");
        }
      } else {
        text("Jira", cx, ly, 12.5, HUES[4], appear * placesAlpha, 500);
      }
    }

    // hub, spokes, ripple, and the Jira API line
    const hubIn = out(seg(t, 7000, 8000));
    const hubOut = 1 - seg(t, 11400, 12000);
    if (hubIn > 0 && hubOut > 0) {
      const rr = 46 * (0.6 + 0.4 * hubIn);
      for (let k = 0; k < 4; k++) {
        const b0 = px(RING[k]);
        const ang = Math.atan2(b0[1] - hub[1], b0[0] - hub[0]);
        const sp = out(seg(t, 7400 + k * 130, 8300 + k * 130));
        const sx = hub[0] + Math.cos(ang) * (rr + 4);
        const sy = hub[1] + Math.sin(ang) * (rr + 4);
        const ex = b0[0] - Math.cos(ang) * 46;
        const ey = b0[1] - Math.sin(ang) * 30;
        ctx.globalAlpha = 0.65 * hubOut;
        ctx.strokeStyle = HUES[k];
        ctx.lineWidth = 1;
        ctx.setLineDash([1, 5]);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + (ex - sx) * sp, sy + (ey - sy) * sp);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      const rp = seg(t, 7200, 8700);
      if (rp > 0 && rp < 1) {
        ctx.globalAlpha = 0.35 * (1 - rp) * hubOut;
        ctx.strokeStyle = pal.accent;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(hub[0], hub[1], rr + rp * 90, 0, Math.PI * 2);
        ctx.stroke();
      }
      // Jira stays outside; its actual headcount comes in over the API
      const jira = px(RING[4]);
      const apiIn = out(seg(t, 8500, 9300));
      if (apiIn > 0) {
        const jx = jira[0] - 52;
        const hx = hub[0] + rr + 6;
        ctx.globalAlpha = 0.7 * hubOut * apiIn;
        ctx.strokeStyle = HUES[4];
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 5]);
        ctx.beginPath();
        ctx.moveTo(jx, jira[1]);
        ctx.lineTo(jx + (hx - jx) * apiIn, jira[1]);
        ctx.stroke();
        ctx.setLineDash([]);
        text("Actual headcount, through the Jira API", (jx + hx) / 2, jira[1] - 16, 11.5, pal.soft, apiIn * hubOut);
        for (let q = 0; q < 4; q++) {
          const pp = seg(t, 9400 + q * 380, 10300 + q * 380);
          if (pp > 0 && pp < 1) dot(jx + (hx - jx) * inOut(pp), jira[1], 0.95 * hubOut, 3.2, HUES[4]);
        }
      }
      ctx.globalAlpha = hubIn * hubOut;
      ctx.fillStyle = pal.solid;
      ctx.strokeStyle = pal.accent;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(hub[0], hub[1], rr, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      text("Pfolio", hub[0], hub[1], 15, pal.accent, hubIn * hubOut, 600);
    }

    /* ── scene 3: the chain, a pulse carries a goal to the work ── */
    const chainIn = out(seg(t, 12300, 13100));
    const chainOut = 1 - seg(t, 17000, 17600);
    if (chainIn > 0 && chainOut > 0) {
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
        const lit = pulseX >= nx - 2 ? 1 : 0;
        if (lit) {
          const tHit = PULSE_AT + 3500 * (1 - Math.pow(1 - clamp((nx - x0) / (x1 - x0)), 1 / 3));
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
        ctx.fillStyle = lit ? pal.accent : pal.solid;
        ctx.strokeStyle = lit ? pal.accent : pal.border;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(nx, lineY, lit ? 8 : 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        text(CHAIN[k], nx, lineY + 30, 13, lit ? pal.ink : pal.soft, chainIn * chainOut, lit ? 600 : 400);
      }
      if (t > PULSE_AT && t < PULSE_AT + 4000) {
        for (let q = 0; q < 16; q++) {
          const tx = pulseX - q * 10;
          if (tx < x0) continue;
          dot(tx, lineY, (1 - q / 16) * 0.95 * chainOut, 7 - q * 0.35);
        }
        ctx.globalAlpha = 0.28 * chainOut;
        ctx.strokeStyle = pal.accent;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(pulseX, lineY, 13, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    /* ── scene 4: Manager, where requests are made and approved ── */
    const mgr: [number, number] = [W * 0.44, H * 0.5];
    const mw = 150;
    const mh = 84;
    const mgrIn = out(seg(t, 17500, 18300));
    const mgrOut = 1 - seg(t, 22500, 23100);
    if (mgrIn > 0 && mgrOut > 0) {
      const A = mgrIn * mgrOut;
      const srcX = W * 0.1;
      SOURCES.forEach((label, r) => {
        const sy = H * (0.27 + r * 0.23);
        const sIn = out(seg(t, 17600 + r * 200, 18200 + r * 200));
        text(label, srcX, sy + 22, 12.5, pal.soft, sIn * mgrOut);
        // the request dots, travelling into Manager
        for (let q = 0; q < 5; q++) {
          const s0 = 18300 + r * 300 + q * 140;
          const pp = seg(t, s0, s0 + 1000);
          const rest = sIn * mgrOut;
          if (pp <= 0) dot(srcX - 18 + q * 9, sy, 0.9 * rest, 3, pal.soft);
          else if (pp < 1) {
            const e = inOut(pp);
            const ex = mgr[0] - mw / 2;
            const ey = mgr[1] + (r - 1) * 16;
            dot(quad(srcX + 18, (srcX + ex) / 2, ex, e), quad(sy, sy + (ey - sy) * 0.2, ey, e), 0.9 * mgrOut, 3, pal.soft);
          }
        }
      });
      // the box itself, with a ripple as requests arrive
      const rip = seg(t, 19000, 19800);
      if (rip > 0 && rip < 1) {
        ctx.globalAlpha = 0.35 * (1 - rip) * mgrOut;
        ctx.strokeStyle = pal.accent;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(mgr[0] - mw / 2 - rip * 12, mgr[1] - mh / 2 - rip * 12, mw + rip * 24, mh + rip * 24, 12 + rip * 6);
        ctx.stroke();
      }
      box(mgr[0] - mw / 2, mgr[1] - mh / 2, mw, mh, 12, A, pal.accent);
      text("Manager", mgr[0], mgr[1] - 6, 16, pal.accent, A, 600);
      text("requests and approvals", mgr[0], mgr[1] + 16, 11.5, pal.soft, A);
      // the record it leaves: each request with its own status
      const lx = W * 0.64;
      const lw = Math.min(W * 0.3, 250);
      LEDGER.forEach((label, r) => {
        const ly = H * (0.3 + r * 0.2);
        const land = 20200 + r * 420;
        const seen = out(seg(t, land - 150, land + 450));
        // a dot leaves Manager for this row
        const fp = seg(t, land - 900, land);
        if (fp > 0 && fp < 1) {
          const e = inOut(fp);
          dot(quad(mgr[0] + mw / 2, (mgr[0] + mw / 2 + lx) / 2, lx, e), quad(mgr[1], (mgr[1] + ly) / 2, ly, e), 0.95 * mgrOut, 3.2, pal.accent);
        }
        if (seen > 0) {
          const rise = (1 - seen) * 8;
          box(lx, ly - 15 + rise, lw, 30, 8, seen * mgrOut, pal.border);
          text(label, lx + 14, ly + rise, 12.5, pal.ink, seen * mgrOut, 400, "left");
          text("Approved", lx + lw - 14, ly + rise, 12, pal.accent, seen * mgrOut, 600, "right");
        }
      });
    }

    /* ── scene 5: the work becomes results ── */
    const cardW = Math.min(180, W * 0.26);
    const cardH = 92;
    const cy0 = H * 0.3;
    METRICS.forEach((m, c) => {
      const cxm = W * (0.2 + c * 0.3);
      const start = 22200 + c * 220;
      const land = start + 1100;
      const flight = (t - start) / (land - start);
      if (flight > 0 && flight < 1.4) {
        for (let q = 0; q < 9; q++) {
          const pq = clamp(flight - q * 0.045);
          if (pq <= 0 || pq >= 1) continue;
          const e = inOut(pq);
          const sx = mgr[0] + mw / 2;
          const sy = mgr[1];
          const mx = (sx + cxm) / 2;
          const my = Math.min(sy, cy0) - 60 - c * 14;
          dot(quad(sx, mx, cxm, e), quad(sy, my, cy0, e), 0.9 * (1 - q / 11), 4 - q * 0.25, METRIC_HUES[c]);
        }
      }
      const show = out(seg(t, land - 150, land + 600));
      if (show > 0) {
        const rise = (1 - show) * 12;
        const rx = cxm - cardW / 2;
        const ry = cy0 - cardH / 2 + rise;
        box(rx, ry, cardW, cardH, 12, show, METRIC_HUES[c]);
        const cnt = out(seg(t, land, land + 1400));
        text(m.fmt(Math.round(m.to * cnt)), cxm, ry + 36, 28, METRIC_HUES[c], show, 600);
        text(m.label, cxm, ry + 68, 13, pal.soft, show);
        const rp = seg(t, land, land + 700);
        if (rp > 0 && rp < 1) {
          ctx.globalAlpha = 0.4 * (1 - rp);
          ctx.strokeStyle = METRIC_HUES[c];
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(rx - rp * 8, ry - rp * 8, cardW + rp * 16, cardH + rp * 16, 12 + rp * 6);
          ctx.stroke();
        }
      }
    });
    ctx.globalAlpha = 1;
  }, []);

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
      if (target < 0 || target >= SCENES.length) return;
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
      accent: get("--ds-mint", "#5eead4"),
      ink: get("--ds-dark-ink", "#eaf3f5"),
      soft: get("--ds-dark-muted", "#8fb3bc"),
      border: "rgba(234, 243, 245, 0.22)",
      card: "rgba(234, 243, 245, 0.06)",
      solid: get("--ds-dark", "#0c1f26"),
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

  const last = SCENES.length - 1;
  const current = reduced ? last : scene;
  const atEnd = reduced || done;

  return (
    <div ref={wrap} className="ds-xp ds-env-dark">
      <div className="ds-xp-stage">
        <canvas
          ref={canvas}
          className="ds-xp-canvas"
          role="img"
          aria-label="Animated explainer: plan and work were kept apart in four external tools, each with a licence. Pfolio replaced them with one platform of People, Product, Initiative and Portfolio, with Jira feeding in actual headcount. People, work, initiatives and goals are linked, and decisions are documented in Manager. The results are 800+ hours reclaimed every week, 6K+ monthly users and $100K average yearly licence cost saved."
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
              disabled={!started || current === last}
              onClick={() => goTo(current + 1)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        ) : null}
      </div>

      <div className="ds-xp-text" aria-live="polite">
        <p className="ds-xp-eyebrow">
          Scene {current + 1} of {SCENES.length}
        </p>
        <p className="ds-xp-title" key={`t${current}`}>
          {SCENES[current].title}
        </p>
        <p className="ds-xp-detail" key={`d${current}`}>
          {SCENES[current].detail}
        </p>
      </div>

      <div className="ds-xp-foot">
        <span className="ds-xp-steps">
          {SCENES.map((sc, i) => (
            <button
              key={sc.title}
              type="button"
              className={`ds-xp-step${current > i || atEnd ? " is-done" : current === i ? " is-cur" : ""}`}
              aria-label={`Scene ${i + 1}: ${sc.title}`}
              aria-current={current === i ? "step" : undefined}
              disabled={reduced || !started}
              onClick={() => goTo(i)}
            />
          ))}
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
