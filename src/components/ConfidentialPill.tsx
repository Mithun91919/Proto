"use client";

import { useEffect, useRef, useState } from "react";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";

/**
 * The confidentiality note, kept in the header on a case study so it stays in
 * view the whole way down instead of scrolling away with the hero.
 */
export function ConfidentialPill() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onScroll = () => setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <GlassPanel variant="lift" className="nav-dock pointer-events-auto">
        <button
          type="button"
          className="nav-pill-button"
          aria-expanded={open}
          aria-controls="confidential-note"
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
            <circle cx="8" cy="8" r="6.6" />
            <path d="M8 7.3v4.1" strokeLinecap="round" />
            <circle cx="8" cy="4.8" r="0.8" fill="currentColor" stroke="none" />
          </svg>
          Confidential
        </button>
      </GlassPanel>
      {open ? (
        <div id="confidential-note" role="note" className="confidential-note">
          Confidential internal work. This is a glimpse of the work, not all of it: some detail is confidential, and
          some names and data have been replaced. I can talk through the decisions and what changed in an interview.
        </div>
      ) : null}
    </div>
  );
}
