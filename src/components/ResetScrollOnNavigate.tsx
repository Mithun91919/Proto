"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Puts a client-side navigation at the very top of the page.
 *
 * The App Router scrolls `#main-content` to the top of the viewport after a
 * navigation. That element sits at document y=71, directly under the sticky
 * header, so arriving from a scrolled page landed at scrollY 72 with the
 * case-study back link hidden behind the header. `scroll-margin-top` does
 * not help: whatever the router uses to scroll does not honour it — measured
 * at 72 with the margin applied.
 *
 * So this corrects it outright, on the frame after the router's own scroll.
 *
 * Two things it deliberately leaves alone:
 * - a URL carrying a hash, so the chapter rail and the skip link still land
 *   on their target
 * - back and forward, so the browser's scroll restoration survives. A reader
 *   returning to /work should find the row they left from, not the top.
 */
export function ResetScrollOnNavigate() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const cameFromHistory = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      cameFromHistory.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    // A first render is a full page load, where the browser already has the
    // right position — the top, a restored one, or a deep link's anchor.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (cameFromHistory.current) {
      cameFromHistory.current = false;
      return;
    }
    if (window.location.hash) return;

    const frame = requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
