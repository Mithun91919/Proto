"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Holds the later, reference-heavy sections of a long page behind one button.
 * The first sections tell a visitor what the system is; the rest are for
 * someone who wants the detail, and they sit collapsed so the page opens at a
 * length a person will actually read.
 *
 * A link to anything inside the collapsed part opens it first, and then scrolls
 * to its target, so the "Start here" cards and the jump chips still work.
 * Collapsed sections are `hidden`, so their images are not fetched until opened.
 */
export function ProgressiveSections({
  children,
  sections,
}: {
  children: ReactNode;
  /** The names shown beside the button, so a visitor knows what is behind it. */
  sections: string[];
}) {
  const [open, setOpen] = useState(false);
  const holder = useRef<HTMLDivElement>(null);
  const pending = useRef<string | null>(null);

  useEffect(() => {
    const reveal = (id: string) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (el && holder.current?.contains(el)) {
        pending.current = id;
        setOpen(true);
      }
    };
    const fromHash = () => reveal(window.location.hash.slice(1));
    fromHash();
    const onClick = (event: MouseEvent) => {
      const a = (event.target as Element | null)?.closest?.('a[href^="#"]');
      const href = a?.getAttribute("href");
      if (href) reveal(href.slice(1));
    };
    window.addEventListener("hashchange", fromHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (open && pending.current) {
      document.getElementById(pending.current)?.scrollIntoView();
      pending.current = null;
    }
  }, [open]);

  return (
    <>
      <div ref={holder} hidden={!open}>
        {children}
      </div>
      {open ? null : (
        <div className="mx-auto max-w-[70rem] px-5 pt-14 md:px-8">
          <div className="ds-rule py-10">
            <p className="eyebrow">The rest is reference</p>
            <p className="mt-3 max-w-[62ch] text-base leading-7" style={{ color: "var(--ink-soft)" }}>
              {sections.join(" · ")}.
            </p>
            <button
              type="button"
              className="button button-secondary mt-6"
              aria-expanded={false}
              onClick={() => setOpen(true)}
            >
              Show the other {sections.length} sections
            </button>
          </div>
        </div>
      )}
    </>
  );
}
