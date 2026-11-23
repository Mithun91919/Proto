"use client";

import { createContext, useContext, useEffect, useId, useState, type KeyboardEvent, type ReactNode } from "react";
import { PagingArrows } from "./PagingArrows";
import { GlassPanel } from "./primitives/GlassPanel";

export type Slide = {
  /** Short name, used in the accessible label and the dot's tooltip. */
  label: string;
  content: ReactNode;
};

/** How long each slide holds while the deck plays itself. */
const SLIDE_MS = 7000;

export const SlideActive = createContext(true);

/**
 * Renders its children only while its slide is the one showing. For things
 * that should not run unseen, such as a video: every slide stays mounted so it
 * can slide out as the next slides in, and without this a clip on a slide that
 * has left would keep playing behind the one that replaced it.
 */
export function WhenActive({ children }: { children: ReactNode }) {
  return useContext(SlideActive) ? <>{children}</> : null;
}

/**
 * A summary read as slides: one idea fills the frame at a time, and a chevron
 * or the arrow keys step to the next. For a reader who wants the shape of a
 * case study at a glance rather than a scroll through its sections.
 *
 * Reuses the paging pair and the dot rail every other paged figure on the site
 * already has (`PagingArrows`, `.ds-artboard-dots`), so the control is the same
 * one everywhere it appears.
 *
 * Every slide is mounted in the same grid cell, so the frame is as tall as the
 * tallest slide and does not change height as you page. A slide that is behind
 * the current one waits off to the left and one ahead waits to the right, so
 * moving forward slides the old one out to the left as the new one comes in
 * from the right, and moving back does the reverse. Only the current slide is
 * in the accessibility tree and the tab order (`inert`).
 *
 * The play button advances on a timer, and is for the reader to start: the deck
 * never plays on its own. It stops at the last slide, and pressing it there
 * starts again from the first. Paging by hand while it plays keeps it playing,
 * with the clock restarted. Under `prefers-reduced-motion` the slides still
 * change, without the slide.
 *
 * Paging does not wrap. At the first slide "previous" does nothing and at the
 * last "next" does nothing, because a deck has a start and an end.
 */
export function SlideDeck({
  slides,
  label,
  action,
}: {
  slides: Slide[];
  label: string;
  /** Something to set at the far end of the controls row, such as a way on to the full page. */
  action?: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const id = useId();
  const last = slides.length - 1;

  const go = (next: number) => setIndex(Math.min(last, Math.max(0, next)));

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (index < last) setIndex(index + 1);
      else setPlaying(false);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [playing, index, last]);

  function togglePlay() {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (index === last) setIndex(0);
    setPlaying(true);
  }

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
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKeyDown}
      className="ds-slidedeck"
    >
      <GlassPanel className="ds-slidedeck-frame rounded-3xl">
        {/* Not announced while playing: a slide read out every seven seconds
            would talk over whatever the reader is doing. */}
        <div className="ds-slidedeck-stack" aria-live={playing ? "off" : "polite"}>
          {slides.map((slide, i) => {
            const state = i === index ? "is-active" : i < index ? "is-past" : "is-future";
            return (
              <div
                key={slide.label}
                id={`${id}-${i}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}: ${slide.label}`}
                aria-hidden={i === index ? undefined : true}
                inert={i !== index}
                className={`ds-slide ${state}`}
              >
                <SlideActive.Provider value={i === index}>{slide.content}</SlideActive.Provider>
              </div>
            );
          })}
        </div>
      </GlassPanel>

      <div className="ds-slidedeck-bar">
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
          emphasize={playing ? null : index === 0 ? "next" : index === last ? "prev" : null}
        />
        <button
          type="button"
          className={`ds-paging-arrow ds-slide-play${playing ? " is-emphasized" : ""}`}
          aria-pressed={playing}
          aria-label={playing ? "Pause slides" : index === last ? "Play slides again from the start" : "Play slides"}
          title={playing ? "Pause" : "Play"}
          onClick={togglePlay}
        >
          {playing ? (
            <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor" aria-hidden>
              <rect x="0.5" y="0" width="2.6" height="10" rx="0.6" />
              <rect x="5.9" y="0" width="2.6" height="10" rx="0.6" />
            </svg>
          ) : (
            <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor" aria-hidden>
              <path d="M1 0.8v8.4a.5.5 0 0 0 .76.43l6.6-4.2a.5.5 0 0 0 0-.86L1.76.37A.5.5 0 0 0 1 .8Z" />
            </svg>
          )}
        </button>
        <span className="ds-artboard-count" aria-hidden="true">
          {index + 1} / {slides.length}
        </span>
      </div>
        {action ? <div className="ds-slidedeck-action">{action}</div> : null}
      </div>
    </div>
  );
}
