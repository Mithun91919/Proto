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
 *
 * That boundary logic assumes there is real scroll room between the two
 * ends. Some captures are tall enough at their true pixel size to need
 * `scrollable`, but once scaled down to the column's width barely clear
 * `maxHeight` — or don't clear it at all, and land exactly at it. For those,
 * `atTop` and `atEnd` are both true on every single wheel event, so every
 * tick forwards straight to the page: not a leak in the forwarding, but a
 * true report that there is nothing left to reveal. Measured on this page,
 * one capture had 33px of real scroll room and two others had none at all
 * — same `scrollable` markup, same "Scroll to explore" hint over an image
 * already shown whole. `data-has-overflow` records which is which, set
 * after layout since the answer depends on the rendered column width no
 * prop here knows in advance, so the hint (a sibling, not a child — see
 * `BrowserMockup`) can stay hidden over a capture with nothing to scroll to.
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

    // `scrollHeight` only reflects the true render once the image has taken
    // its layout space; Next/Image reserves that immediately from its own
    // width/height props, but a ResizeObserver on the content — not on `el`
    // itself, whose own box is pinned to `maxHeight` and never changes — is
    // the cheap way to stay correct if that space is ever wrong on first
    // paint rather than trusting a single measurement taken once on mount.
    const content = el.firstElementChild;
    const updateOverflow = () => {
      el.dataset.hasOverflow = el.scrollHeight > el.clientHeight + 1 ? "true" : "false";
    };
    updateOverflow();
    const observer = content ? new ResizeObserver(updateOverflow) : null;
    observer?.observe(content as Element);

    return () => {
      el.removeEventListener("wheel", onWheel);
      observer?.disconnect();
    };
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
