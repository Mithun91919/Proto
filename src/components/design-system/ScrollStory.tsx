"use client";

import { Fragment, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChapterProgress } from "./ChapterProgress";
import { SlideActive } from "./SlideDeck";

/** How long each step is given before the card moves on to the next, in ms: the change itself is about 620. */
const STEP_MS = 640;

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
 * The card never skips a step. A hard flick of a trackpad can cover several
 * steps' worth of scroll at once, and showing only the last would drop the ones
 * between. So the scroll only sets the step the card is heading for, and the
 * card moves toward it one step at a time, each given its full change before the
 * next begins. A flick past three steps shows them go by in order and settles
 * on the right one. Pressing a dot in the rail is the exception: it asked for
 * that step, so the card goes straight there.
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
  stepVh = 70,
}: {
  steps: StoryStep[];
  label: string;
  stepVh?: number;
}) {
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  /** The step the scroll position points at; the card walks toward it. */
  const targetRef = useRef(0);
  /** The step the card is showing, readable from timers without a stale value. */
  const shownRef = useRef(0);
  const walkTimer = useRef<number | null>(null);
  /** While set, scroll is a jump the reader asked for through the rail, and is not followed step by step. */
  const lockedUntil = useRef(0);
  const last = steps.length - 1;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const calm = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const show = (index: number) => {
      shownRef.current = index;
      setActive(index);
    };

    // Move one step toward the target, then wait out the change before the next.
    const walk = () => {
      walkTimer.current = null;
      const from = shownRef.current;
      const to = targetRef.current;
      if (from === to) return;
      show(from + Math.sign(to - from));
      if (shownRef.current !== to) walkTimer.current = window.setTimeout(walk, calm() ? 0 : STEP_MS);
    };

    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      // The rail is shown only while the card is pinned, so it does not hang over the rest of the page.
      const inView = rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.75;
      setPinned((current) => (current === inView ? current : inView));
      if (performance.now() < lockedUntil.current) return;
      // Each step owns an equal share of the track; the last one holds to its end.
      targetRef.current = Math.min(last, Math.floor(progress * steps.length));
      if (walkTimer.current === null) walk();
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
      if (walkTimer.current !== null) window.clearTimeout(walkTimer.current);
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
      // The reader asked for this step: show it now and ignore the scroll that gets there,
      // which passes through the steps between.
      if (walkTimer.current !== null) {
        window.clearTimeout(walkTimer.current);
        walkTimer.current = null;
      }
      lockedUntil.current = performance.now() + (calm ? 100 : 1400);
      targetRef.current = index;
      shownRef.current = index;
      setActive(index);
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
