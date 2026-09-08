"use client";

import { useState } from "react";
import Image from "next/image";

export type ScrubStep = {
  route: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
};

type TimelineScrubberProps = {
  steps: ScrubStep[];
  label: string;
};

/**
 * M11 · Timeline scrubber — a seek bar instead of discrete hotspots
 * (`BrowserFlow`) or a dot rail (`ArtboardCarousel`). Dragging the handle
 * scrubs continuously through a flow's real screens, which reads closer
 * to dragging through a recording than clicking between fixed points —
 * useful when the point is the progression itself, not any one step.
 */
export function TimelineScrubber({ steps, label }: TimelineScrubberProps) {
  const [index, setIndex] = useState(0);
  const step = steps[index];

  return (
    <div role="group" aria-label={label}>
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
        <div className="ds-framebody">
          <Image
            key={step.src}
            src={step.src}
            width={step.width}
            height={step.height}
            alt={step.alt}
            sizes="(max-width: 900px) 100vw, 900px"
            className="block h-auto w-full"
          />
        </div>
      </div>

      <div className="ds-scrubber mt-6">
        <div className="ds-scrubber-ticks" aria-hidden>
          {steps.map((s, i) => (
            <span key={s.route} className={`ds-scrubber-tick${i <= index ? " is-passed" : ""}`} />
          ))}
        </div>
        <input
          type="range"
          min={0}
          max={steps.length - 1}
          step={1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="ds-scrubber-input"
          aria-label={`${label} — scrub through steps`}
        />
      </div>
      <p className="ds-scrubber-label mt-2">
        {index + 1} / {steps.length} — {step.label}
      </p>
    </div>
  );
}
