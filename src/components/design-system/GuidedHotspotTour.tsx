"use client";

import { useState } from "react";
import Image from "next/image";
import { PagingArrows } from "./PagingArrows";

export type TourStop = {
  /** Position over the screenshot, in % of its width / height. */
  x: number;
  y: number;
  title: string;
  body: string;
};

type GuidedHotspotTourProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  stops: TourStop[];
  label: string;
};

/**
 * M8 · Guided hotspot tour — one dense screen, several things to explain,
 * one at a time. `ImageHotspots` lets a reader open any callout in any
 * order; this is for the opposite case, where the callouts build on each
 * other and showing all of them at once is noise. Only the current stop's
 * marker is active — the rest sit dimmed and small until their turn.
 */
export function GuidedHotspotTour({ src, width, height, alt, stops, label }: GuidedHotspotTourProps) {
  const [active, setActive] = useState(0);
  const stop = stops[active];
  const stepBy = (delta: number) => setActive((a) => (a + delta + stops.length) % stops.length);

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_18rem] md:items-start" role="group" aria-label={label}>
      <div className="ds-frame">
        <div className="ds-framebody relative">
          <Image src={src} width={width} height={height} alt={alt} sizes="(max-width: 900px) 100vw, 900px" className="block h-auto w-full" />
          {stops.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`ds-tour-dot${i === active ? " is-active" : ""}`}
              style={{ top: `${s.y}%`, left: `${s.x}%` }}
              onClick={() => setActive(i)}
              aria-current={i === active}
              aria-label={`${i + 1} of ${stops.length}: ${s.title}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
          {active + 1} of {stops.length}
        </p>
        <h4 className="display-title mt-3" style={{ fontSize: "1.3rem" }}>
          {stop.title}
        </h4>
        <p className="ds-note mt-3">{stop.body}</p>
        <div className="mt-6">
          <PagingArrows onPrev={() => stepBy(-1)} onNext={() => stepBy(1)} label="stop" />
        </div>
      </div>
    </div>
  );
}
