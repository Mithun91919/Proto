"use client";

import { useEffect, useRef, useState } from "react";
import type { ChapterRef } from "./ChapterProgress";

/**
 * Where the reader is in a long case study: a thin line along the foot of the
 * screen with a piece for each chapter, sized by how long that chapter really
 * is, filling as they read, with a small light at the leading edge and the
 * chapter's number and name at its left. The same bar the summaries use at the
 * foot of their story, in the same hairline style.
 *
 * It is feedback, not a control, so it is hidden from assistive technology and
 * takes no clicks; the chapter rail beside the page is the way to jump. It
 * appears once the first chapter is reached and goes when the last one ends, so
 * it never sits over the hero or the closing statement. Over a dark band it
 * takes the light colours, as the header does.
 *
 * Fills are written straight to the elements on scroll, not through state, so
 * scrolling does not re-render; only a change of chapter does.
 */
export function ChapterBar({ chapters }: { chapters: ChapterRef[] }) {
  const [current, setCurrent] = useState(0);
  const [shown, setShown] = useState(false);
  const [tone, setTone] = useState<"light" | "dark">("light");
  const fills = useRef<(HTMLSpanElement | null)[]>([]);
  const segs = useRef<(HTMLSpanElement | null)[]>([]);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.4;
      const tops = chapters.map((c) => {
        const el = document.getElementById(c.id);
        return el ? el.getBoundingClientRect().top + window.scrollY : null;
      });
      const lastEl = document.getElementById(chapters[chapters.length - 1].id);
      const lastEnd = lastEl ? lastEl.getBoundingClientRect().bottom + window.scrollY : 0;
      const present = tops.map((t, i) => (t === null ? -1 : i)).filter((i) => i >= 0);
      if (present.length === 0) return;

      // Each chapter runs from its own top to the next chapter's top.
      let now = present[0];
      present.forEach((i, k) => {
        const start = tops[i] as number;
        const nextIndex = present[k + 1];
        const end = nextIndex === undefined ? lastEnd : (tops[nextIndex] as number);
        const span = Math.max(1, end - start);
        const fill = Math.min(1, Math.max(0, (marker - start) / span));
        const el = fills.current[i];
        if (el) el.style.width = `${fill * 100}%`;
        const seg = segs.current[i];
        if (seg) {
          seg.style.flexGrow = String(span);
          seg.classList.toggle("is-current", marker >= start && marker < end);
        }
        if (marker >= start) now = i;
      });
      setCurrent((c) => (c === now ? c : now));
      const first = tops[present[0]] as number;
      setShown(marker >= first && marker < lastEnd);

      const rect = bar.current?.getBoundingClientRect();
      if (rect) {
        const under = document
          .elementsFromPoint(window.innerWidth / 2, rect.top + rect.height / 2)
          .find((el) => el.closest(".ds-pull, .ds-env-dark"));
        setTone(under ? "dark" : "light");
      }
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
  }, [chapters]);

  return (
    <div ref={bar} className={`ds-chapter-bar${shown ? " is-shown" : ""}`} data-tone={tone} aria-hidden="true">
      <span className="ds-story-count">
        {String(current + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")} · {chapters[current]?.label}
      </span>
      <div className="ds-story-segments">
        {chapters.map((c, i) => (
          <span
            key={c.id}
            ref={(el) => {
              segs.current[i] = el;
            }}
            className="ds-story-seg"
            style={{ flex: "1 1 0" }}
          >
            <span
              ref={(el) => {
                fills.current[i] = el;
              }}
              className="ds-story-seg-fill"
              style={{ width: "0%" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
