"use client";

import { useId, useState } from "react";
import { ArtboardFigure } from "./ArtboardFigure";
import type { Hotspot } from "./ImageHotspots";

export type ArtboardSlide = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Doubles as the accessible name of this slide's dot. */
  caption: string;
  /** Callouts layered over this slide's artboard. */
  hotspots?: Hotspot[];
};

type ArtboardCarouselProps = {
  slides: ArtboardSlide[];
  /** Names the set for screen readers, e.g. "Operations app workflows". */
  label: string;
};

/**
 * Several artboards in one slot, paged by dots.
 *
 * Deliberately *not* a scrolling filmstrip. The previous carousel sized every
 * item to a fixed height and scrolled horizontally, which made a wide artboard
 * overflow the viewport and — once centred — pushed the first item into
 * negative scrollLeft where no browser could reach it. Here exactly one slide
 * occupies the slot and the dots swap it, so there is no scroll origin to get
 * wrong and each artboard still renders whole at full width.
 *
 * Inactive slides are unmounted, so their images are never fetched until the
 * reader asks for them.
 */
export function ArtboardCarousel({ slides, label }: ArtboardCarouselProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  if (slides.length === 0) return null;
  const current = slides[active];

  const step = (delta: number) => {
    setActive((i) => (i + delta + slides.length) % slides.length);
  };

  return (
    <div className="ds-artboard-carousel" role="group" aria-roledescription="carousel" aria-label={label}>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        <ArtboardFigure
          key={current.src}
          src={current.src}
          width={current.width}
          height={current.height}
          alt={current.alt}
          caption={current.caption}
          hotspots={current.hotspots}
        />
      </div>

      <div
        className="ds-artboard-dots"
        role="tablist"
        aria-label={label}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            step(1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(-1);
          }
        }}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-controls={`${baseId}-panel-${i}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className={`ds-artboard-dot${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="sr-only">{`${i + 1} of ${slides.length}: ${slide.caption}`}</span>
          </button>
        ))}
        <span className="ds-artboard-count" aria-hidden>
          {active + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
