"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SlideActive } from "./SlideDeck";

export type StoryStep = {
  /** Short name, for the accessible label. */
  label: string;
  /** The words, in the column that scrolls. */
  text: ReactNode;
  /** The picture, in the column that stays put while the words go by. */
  visual: ReactNode;
};

/**
 * A story told by scrolling: the words of each step scroll past on the left
 * while one picture stays in view on the right and changes to match the step
 * that is in the middle of the screen.
 *
 * Scrolling is left alone: nothing is pinned by script and no scroll is
 * captured. The picture's column is `position: sticky`, and an observer only
 * notes which step is across the middle of the window. That is also why it
 * works with a trackpad, the keyboard and a scrollbar without a word of
 * instruction.
 *
 * Every picture is mounted in the same place and only the current one is shown
 * and reachable (`inert`), the way the slide deck does it, and each is given
 * `SlideActive`, so the same dot animations that play when a slide arrives play
 * when a step does. Every step's words stay in the page for everyone, whether
 * or not it is the current one. Under `prefers-reduced-motion` the pictures
 * change without moving.
 */
export function ScrollStory({ steps, label }: { steps: StoryStep[]; label: string }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        }
      },
      // A thin band across the middle of the window: the step across it is the one being read.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ds-story" role="group" aria-label={label}>
      <div className="ds-story-text">
        {steps.map((step, i) => (
          <section
            key={step.label}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            data-step={i}
            aria-label={`${i + 1} of ${steps.length}: ${step.label}`}
            className={`ds-story-step${i === active ? " is-active" : ""}`}
          >
            {step.text}
          </section>
        ))}
      </div>
      <div className="ds-story-visual">
        <div className="ds-story-stack">
          {steps.map((step, i) => (
            <div
              key={step.label}
              aria-hidden={i === active ? undefined : true}
              inert={i !== active}
              className={`ds-slide ds-slide-vert ${i === active ? "is-active" : i < active ? "is-past" : "is-future"}`}
            >
              <SlideActive.Provider value={i === active}>{step.visual}</SlideActive.Provider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Renders its children once they have scrolled into view, and keeps them. For
 * things that should start when the reader reaches them, such as a figure that
 * counts up: it begins on arrival and not while still off the bottom of the page.
 */
export function WhenInView({ children, minHeight }: { children: ReactNode; minHeight?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // `minHeight` holds the room open so the page does not jump when the content arrives.
  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {seen ? children : null}
    </div>
  );
}
