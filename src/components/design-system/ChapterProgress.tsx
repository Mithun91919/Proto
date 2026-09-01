"use client";

import { useEffect, useRef, useState } from "react";

export type ChapterRef = { id: string; label: string };

type ChapterProgressProps = { chapters: ChapterRef[] };

/**
 * J2 · Chapter progress — a fixed rail showing where the reader is.
 *
 * The one place dots take a genuine UI role rather than an explanatory one.
 * State is carried by fill and size as well as colour (B8: colour can't be
 * the only cue), and each node is a real link, so the rail is operable by
 * keyboard and not just a decoration that tracks scroll.
 *
 * Hidden below `lg`: the guide calls for a compact top indicator on mobile,
 * and a half-height rail crowding a phone screen would be worse than none.
 */
export function ChapterProgress({ chapters }: ChapterProgressProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ratios = useRef(new Map<string, number>());

  useEffect(() => {
    const nodes = chapters
      .map((c) => document.getElementById(c.id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        // Whichever chapter occupies most of the viewport wins, so passing
        // a short section doesn't briefly steal the marker.
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios.current) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        if (best) setActiveId(best);
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.85], rootMargin: "-12% 0px -40% 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [chapters]);

  const activeIndex = chapters.findIndex((c) => c.id === activeId);

  return (
    <nav className={`ds-progress${activeId ? " is-active" : ""}`} aria-label="Chapters">
      <ol className="ds-glass-soft ds-scroll-rail">
        {chapters.map((chapter, i) => {
          const state = activeIndex < 0 ? "" : i < activeIndex ? " done" : i === activeIndex ? " current" : "";
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className="ds-progress-item"
                aria-current={i === activeIndex ? "true" : undefined}
              >
                <span className={`ds-scroll-node${state}`} aria-hidden />
                <span className="ds-progress-label">{chapter.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
