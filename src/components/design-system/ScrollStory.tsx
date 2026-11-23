"use client";

import { Fragment, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChapterProgress } from "./ChapterProgress";
import { SlideActive } from "./SlideDeck";

export type StoryStep = {
  /** Short name, for the accessible label and the dot's tooltip. */
  label: string;
  /** The words, on the left of the pinned card. */
  text: ReactNode;
  /** The picture, on the right of it. */
  visual: ReactNode;
};

/**
 * A story advanced by scrolling, told in one pinned card. The card holds still
 * on the screen while the page scrolls past it, and what is inside it changes
 * from step to step: the old step fades and lifts away as the next settles in,
 * the same change the slide deck makes when you press next.
 *
 * Words and picture change together, in one place. An earlier version let the
 * words scroll at the reader's speed while the picture on its side swapped in
 * one jump, and the two disagreed, which read as jarring. Here nothing moves
 * with the scroll itself; the scroll only decides when the next step arrives.
 *
 * How much scroll each step takes is set by `stepVh`, in screen heights. The
 * step is worked out from how far through the track the reader is, and no scroll
 * is captured or slowed: this is a tall block with a `position: sticky` child.
 * The site's own left-hand rail shows where you are while the card is pinned, and jumps to a step when pressed.
 *
 * Every step stays in the page for everyone: the ones not showing are only
 * transparent, not hidden, so a screen reader reads the whole story in order.
 * Each step is given `SlideActive`, so the dot animations that play when a slide
 * arrives play when a step does. Under `prefers-reduced-motion` the steps change
 * without moving.
 */
export function ScrollStory({
  steps,
  label,
  stepVh = 60,
}: {
  steps: StoryStep[];
  label: string;
  stepVh?: number;
}) {
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const last = steps.length - 1;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      // Each step owns an equal share of the track; the last one holds to its end.
      const index = Math.min(last, Math.floor(progress * steps.length));
      setActive((current) => (current === index ? current : index));
      // The rail is shown only while the card is pinned, so it does not hang over the rest of the page.
      const inView = rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.75;
      setPinned((current) => (current === inView ? current : inView));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [last, steps.length]);

  const jumpTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const total = track.offsetHeight - window.innerHeight;
      const top = track.getBoundingClientRect().top + window.scrollY;
      // Land just inside the step's share, not on the edge it shares with the one before.
      const target = top + ((index + 0.5) / steps.length) * total;
      const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: target, behavior: calm ? "auto" : "smooth" });
    },
    [steps.length],
  );

  return (
    <div
      ref={trackRef}
      className="ds-story-track"
      role="group"
      aria-label={label}
      style={{ height: `calc(${steps.length * stepVh}vh + 100vh)` }}
    >
      <ChapterProgress
        numbered
        chapters={steps.map((step, i) => ({ id: `step-${i}`, label: step.label }))}
        activeId={pinned ? `step-${active}` : null}
        onSelect={(id) => jumpTo(Number(id.replace("step-", "")))}
      />
      <div className="ds-story-pin">
        <div className="ds-story-inner">
          <div className="ds-story-stack">
            {steps.map((step, i) => (
              <div
                key={step.label}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${steps.length}: ${step.label}`}
                className={`ds-slide ds-slide-vert ${i === active ? "is-active" : i < active ? "is-past" : "is-future"}`}
              >
                <SlideActive.Provider value={i === active}>
                  <div className="ds-slide-grid has-shot">
                    {/* Keyed, because both halves arrive from a server component and
                        React cannot vouch for their keys when they sit side by side. */}
                    <div key="text">{step.text}</div>
                    <Fragment key="visual">{step.visual}</Fragment>
                  </div>
                </SlideActive.Provider>
              </div>
            ))}
          </div>

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
