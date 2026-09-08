"use client";

import { useState } from "react";
import Image from "next/image";
import { PagingArrows } from "./PagingArrows";

export type FlowHotspot = {
  /** Position over the screenshot, in % of its width / height. */
  x: number;
  y: number;
  label: string;
  /** Index into `steps` this hotspot advances to. */
  next: number;
};

export type FlowStep = {
  route: string;
  src: string;
  /** The file's true pixel dimensions — same discipline as `ArtboardFigure`. */
  width: number;
  height: number;
  alt: string;
  hotspots?: FlowHotspot[];
};

type BrowserFlowProps = {
  steps: FlowStep[];
  /** Names the whole flow for screen readers, e.g. "Operations app walkthrough". */
  label: string;
};

/**
 * S3b · Browser flow — a clickable prototype built from real screenshots
 * instead of a recorded walkthrough. Each hotspot swaps in a different real
 * image rather than opening a note in place, so clicking through the
 * screens is the demonstration: no video to record, host, or keep in sync
 * with the product it shows.
 *
 * Step dots beneath the frame let a reader jump directly to any point
 * without replaying the whole path — the same dot-paging control
 * `ArtboardCarousel` uses, so "a row of dots pages through several views"
 * stays one pattern across the site rather than two similar-looking ones.
 */
export function BrowserFlow({ steps, label }: BrowserFlowProps) {
  const [active, setActive] = useState(0);
  if (steps.length === 0) return null;
  const step = steps[active];
  const stepBy = (delta: number) => setActive((a) => (a + delta + steps.length) % steps.length);

  return (
    <div role="group" aria-roledescription="interactive prototype" aria-label={label}>
      <div className="ds-frame">
        <div className="ds-framebar">
          <span className="flex gap-1.5" aria-hidden>
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
            <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
          </span>
          <span
            className="flex-1 truncate rounded-md border px-2.5 py-1 font-mono text-[0.6rem]"
            style={{ borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)", color: "var(--muted)" }}
          >
            {step.route}
          </span>
        </div>

        <div className="ds-framebody relative">
          <Image
            key={step.src}
            src={step.src}
            width={step.width}
            height={step.height}
            alt={step.alt}
            sizes="(max-width: 900px) 100vw, 900px"
            className="block h-auto w-full"
          />
          {step.hotspots?.map((h) => (
            <button
              key={h.label}
              type="button"
              className="ds-callout-dot ds-hotspot-dot"
              style={{ top: `${h.y}%`, left: `${h.x}%` }}
              onClick={() => setActive(h.next)}
              aria-label={h.label}
            >
              <span aria-hidden>→</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="ds-artboard-dots" role="tablist" aria-label={`${label} — jump to step`} style={{ marginTop: 0 }}>
          {steps.map((s, i) => (
            <button
              key={s.route}
              type="button"
              role="tab"
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              className={`ds-artboard-dot${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="sr-only">{`${i + 1} of ${steps.length}: ${s.route}`}</span>
            </button>
          ))}
          <span className="ds-artboard-count" aria-hidden>
            {active + 1} / {steps.length}
          </span>
          <PagingArrows onPrev={() => stepBy(-1)} onNext={() => stepBy(1)} label="step" />
        </div>

        {active !== 0 ? (
          <button
            type="button"
            className="font-mono text-[0.68rem] uppercase tracking-[0.08em] transition hover:opacity-70"
            style={{ color: "var(--muted)" }}
            onClick={() => setActive(0)}
          >
            Restart ↺
          </button>
        ) : null}
      </div>
    </div>
  );
}
