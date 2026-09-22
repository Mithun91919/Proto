"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * The scrolling viewport inside a `BrowserMockup`, with the scroll trap taken
 * out of it.
 *
 * A tall capture held to a fixed height needs its own scroller, and a nested
 * scroller in the middle of an article traps the page: Chrome latches a wheel
 * gesture to whatever scroller is under the pointer and keeps it there, so a
 * reader who scrolls to the bottom of the screenshot finds the page itself
 * stops moving until they shift the pointer off the figure.
 *
 * `overscroll-behavior` does not fix it. That property governs whether scroll
 * *chains* once a boundary is reached; latching happens before that question
 * is asked, and it was measured doing so here — pointer inside the frame with
 * the inner scroller already at its end moved the page 0px, while the same
 * gesture beside the frame moved it 500.
 *
 * So the boundary is handled directly: at either end, take the wheel event and
 * move the window by the same delta. The figure keeps its own scroll, and the
 * page never stops.
 */
export function ScrollFrame({
  maxHeight,
  children,
}: {
  maxHeight?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      // A 1px tolerance: scrollTop is fractional on scaled displays and an
      // exact comparison leaves the last subpixel permanently stuck.
      const atTop = el.scrollTop <= 0;
      const atEnd = el.scrollTop >= el.scrollHeight - el.clientHeight - 1;
      const leaving = (atEnd && event.deltaY > 0) || (atTop && event.deltaY < 0);
      if (!leaving) return;
      event.preventDefault();
      // `behavior: "instant"` because the document sets `scroll-behavior:
      // smooth`. Under it each scrollBy retargets the animation already in
      // flight from wherever it has reached, so successive wheel ticks
      // collapse instead of accumulating — four ticks moved the page 28px
      // where they should have moved it several hundred. Forwarding a wheel
      // delta is not a jump to somewhere; it is the scroll itself, 1:1.
      window.scrollBy({ top: event.deltaY, behavior: "instant" });
    };

    // Not passive: the whole point is to preventDefault at the boundary.
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={ref}
      className="ds-frame-scroll"
      style={maxHeight ? ({ "--frame-max-height": maxHeight } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
