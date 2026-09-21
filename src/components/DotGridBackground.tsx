"use client";

import { useEffect } from "react";
import { DotGrid } from "interactive-dot-grid";

const SPACING = 22;

/**
 * Cursor-reactive layer on top of the static CSS dot grid. Dots are invisible
 * at rest and bloom as the pointer nears them, so content reads as if it is
 * sitting on the grid rather than floating above it.
 */
export function DotGridBackground() {
  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!canHover || reducedMotion) return;

    const root = document.documentElement;
    const color =
      getComputedStyle(root).getPropertyValue("--dot-cursor-rgb").trim() ||
      "8, 145, 178";

    // Tuning notes, since these are the only numbers that decide whether the
    // effect reads at all. `maxAlpha` is the one that matters: at 0.15 the
    // brightest dot under the cursor was 15% of a mid teal on an off-white
    // ground, which is close to invisible on a bright screen. `baseAlpha`
    // stays near zero on purpose — the grid should be felt only around the
    // pointer, not printed across the page.
    const grid = new DotGrid({
      spacing: SPACING,
      dotMin: 1.15,
      dotMax: 6,
      radiusEffect: 190,
      baseAlpha: 0.05,
      maxAlpha: 0.32,
      color,
      smoothing: 0.14,
      zIndex: -1,
    });

    // Mirror the library's centring maths onto the CSS grid.
    const syncOrigin = () => {
      const columns = Math.max(1, Math.floor(window.innerWidth / SPACING));
      const rows = Math.max(1, Math.floor(window.innerHeight / SPACING));
      const x = (window.innerWidth - (columns - 1) * SPACING) / 2;
      const y = (window.innerHeight - (rows - 1) * SPACING) / 2;
      root.style.setProperty("--dot-origin-x", `${x}px`);
      root.style.setProperty("--dot-origin-y", `${y}px`);
    };

    const syncPlayback = () => {
      if (document.hidden) grid.stop();
      else grid.start();
    };

    syncOrigin();
    window.addEventListener("resize", syncOrigin);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      window.removeEventListener("resize", syncOrigin);
      document.removeEventListener("visibilitychange", syncPlayback);
      grid.destroy();
      root.style.removeProperty("--dot-origin-x");
      root.style.removeProperty("--dot-origin-y");
    };
  }, []);

  return null;
}
