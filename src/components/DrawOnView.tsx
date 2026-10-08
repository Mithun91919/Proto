"use client";

import { useEffect, useRef } from "react";

/**
 * Draws a section's boundary line once, as the section arrives. Rendered
 * inside the section; it finds that section, holds its line back only if the
 * section is still below the fold, and releases it on first sight. Nothing is
 * hidden without script, and a section already in view is never held back.
 *
 * A section the reader jumps past, with the chapter rail or an anchor, is
 * never "seen" by an observer, so a scroll check releases it as well: a line
 * that stayed hidden above the reader would be missing when they scrolled back.
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

    let frame = 0;
    const release = () => {
      section.classList.add("is-drawn");
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
    const check = () => {
      frame = 0;
      if (section.getBoundingClientRect().top < window.innerHeight * 0.88) release();
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(check);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) release();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(section);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={ref} aria-hidden="true" hidden />;
}
