"use client";

import { useEffect, useRef } from "react";

/**
 * Draws a section's boundary line once, as the section arrives. Rendered
 * inside the section; it finds that section, holds its line back only if the
 * section is still below the fold, and releases it on first sight. Nothing is
 * hidden without script, and a section already in view is never held back.
 */
export function DrawOnView() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = ref.current?.closest<HTMLElement>("section");
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) return;

    section.classList.add("is-armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        section.classList.add("is-drawn");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref} aria-hidden="true" hidden />;
}
