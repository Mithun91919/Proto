"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { PagingArrows } from "./PagingArrows";
import { GlassPanel } from "./primitives/GlassPanel";

export type Slide = {
  /** Short name, used in the accessible label and the dot's tooltip. */
  label: string;
  content: ReactNode;
};

/**
 * A summary read as slides: one idea fills the frame at a time, and a chevron
 * or the arrow keys step to the next. For a reader who wants the shape of a
 * case study at a glance rather than a scroll through its sections.
 *
 * Reuses the paging pair and the dot rail every other paged figure on the site
 * already has (`PagingArrows`, `.ds-artboard-dots`), so the control is the same
 * one everywhere it appears. Only the active slide is in the accessibility tree
 * and the tab order; the rest are `hidden`.
 *
 * Paging does not wrap. At the first slide "previous" does nothing and at the
 * last "next" does nothing, because a deck has a start and an end.
 */
export function SlideDeck({ slides, label }: { slides: Slide[]; label: string }) {
  const [index, setIndex] = useState(0);
  const regionRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const last = slides.length - 1;

  const go = (next: number) => setIndex(Math.min(last, Math.max(0, next)));

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(last);
    }
  }

  return (
    <div
      ref={regionRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKeyDown}
      className="ds-slidedeck"
    >
      <GlassPanel className="ds-slidedeck-frame rounded-3xl">
        <div aria-live="polite">
          {slides.map((slide, i) => (
            <div
              key={slide.label}
              id={`${id}-${i}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${slide.label}`}
              hidden={i !== index}
              className="ds-slide"
            >
              {slide.content}
            </div>
          ))}
        </div>
      </GlassPanel>

      <div className="ds-artboard-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            className={`ds-artboard-dot${i === index ? " is-active" : ""}`}
            aria-label={`Go to slide ${i + 1}: ${slide.label}`}
            aria-current={i === index ? "true" : undefined}
            aria-controls={`${id}-${i}`}
            title={slide.label}
            onClick={() => go(i)}
          />
        ))}
        <PagingArrows
          label="slide"
          onPrev={() => go(index - 1)}
          onNext={() => go(index + 1)}
          emphasize={index === 0 ? "next" : index === last ? "prev" : null}
        />
        <span className="ds-artboard-count" aria-hidden="true">
          {index + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
