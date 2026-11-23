"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { MetricGlyph } from "./MetricGlyph";
import { GlassPanel } from "./primitives/GlassPanel";
import type { MetricMarkName } from "./dotPatterns";

export type ResultItem = { value: string; label: string; glyph: MetricMarkName };

const DURATION_MS = 1400;

/** Splits "$100K", "800+ hrs", "3,500+ days" or "50%" into what comes before the number, the number, and what follows. */
function parse(value: string) {
  const m = /^(\D*?)([\d,]+(?:\.\d+)?)(.*)$/.exec(value);
  if (!m) return null;
  return { prefix: m[1], number: Number(m[2].replace(/,/g, "")), digits: m[2], suffix: m[3] };
}

/**
 * A figure that counts up to its value as it arrives. The words around the
 * number (`$`, `K`, `+ hrs`) are shown at once and only the digits move, so the
 * reader is never reading a half-finished sentence. Starts when mounted, so
 * wrap it in whatever limits when it should run. Under `prefers-reduced-motion`
 * it simply shows the figure.
 *
 * The full figure is the accessible name; the counting digits are hidden from
 * assistive tech so a screen reader does not announce every step.
 */
function CountUp({ value }: { value: string }) {
  const parts = parse(value);
  const [shown, setShown] = useState(() => (parts ? 0 : null));
  const frame = useRef(0);

  useEffect(() => {
    if (!parts) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(parts.number);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(parts.number * eased));
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
    // `parts` is derived from `value`, which does not change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!parts) return <>{value}</>;
  const text = (shown ?? 0).toLocaleString("en-US");
  return (
    <>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {parts.prefix}
        {text}
        {parts.suffix}
      </span>
    </>
  );
}

/**
 * The results as a two-by-two of tiles, each a dot glyph, a figure that counts
 * up, and a line saying what it is. The tiles rise in one after another, and
 * the figures start counting as each lands. Meant for the right-hand side of a
 * slide, where a single row of four would be too tight.
 */
export function ResultsGrid({ items }: { items: ResultItem[] }) {
  return (
    <ul className="ds-results-grid">
      {items.map((item, i) => (
        <li key={item.label} className="ds-results-tile" style={{ "--i": i } as CSSProperties}>
          <GlassPanel variant="soft" className="h-full rounded-2xl p-7">
            <MetricGlyph name={item.glyph} size={5} gap={3} />
            <p
              className="display-title mt-5"
              style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "var(--ds-accent)", lineHeight: 1.05 }}
            >
              <CountUp value={item.value} />
            </p>
            <p className="ds-eyebrow mt-3">{item.label}</p>
          </GlassPanel>
        </li>
      ))}
    </ul>
  );
}
