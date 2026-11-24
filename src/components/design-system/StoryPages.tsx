"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { SlideActive } from "./SlideDeck";
import type { StoryStep } from "./ScrollStory";

/**
 * The same steps as `ScrollStory`, told as ordinary full-screen pages instead
 * of one pinned card: each step fills the screen, and the page scrolls past it
 * like any other. Nothing is pinned and nothing holds a swipe, so the reader's
 * scrolling is left entirely to the browser.
 *
 * A step is "on" while at least half of it is on the screen, which is what
 * starts its dot motion and any clip, and starts them again on each return.
 * Until a step has been reached it is transparent, so it settles in as it
 * arrives.
 */
export function StoryPages({ steps, label }: { steps: StoryStep[]; label: string }) {
  const [on, setOn] = useState<boolean[]>(() => steps.map(() => false));
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setOn((current) => {
          const next = [...current];
          for (const entry of entries) {
            const i = refs.current.indexOf(entry.target as HTMLElement);
            if (i >= 0) next[i] = entry.isIntersecting;
          }
          return next;
        });
      },
      { threshold: 0.5 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ds-story-track ds-story-pages" role="group" aria-label={label}>
      {steps.map((step, i) => (
        <section
          key={step.label}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="ds-story-page"
          aria-label={`${i + 1} of ${steps.length}: ${step.label}`}
        >
          <div className={`ds-slide ds-slide-vert ${on[i] ? "is-active" : "is-future"}`}>
            <SlideActive.Provider value={on[i]}>
              <div className="ds-slide-grid has-shot">
                <div key="text">{step.text}</div>
                <Fragment key="visual">{step.visual}</Fragment>
              </div>
            </SlideActive.Provider>
          </div>
        </section>
      ))}
    </div>
  );
}
