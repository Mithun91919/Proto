"use client";

import { useState } from "react";
import Image from "next/image";

export type SpineScreen = {
  src: string;
  width: number;
  height: number;
  alt: string;
  route?: string;
  title: string;
};

type BookshelfSpinesProps = {
  screens: SpineScreen[];
  label: string;
};

/**
 * M13 · Bookshelf spines — `StackedScreens`' fanned deck taken to its
 * literal next step: screens sit closed, as narrow labelled spines side by
 * side, the way books actually sit on a shelf rather than leaned in a
 * pile. Click a spine (or tab to it and press enter) and it swings open
 * to full size while the rest compress back — one open book on the shelf
 * at a time, browsed rather than fanned through.
 */
export function BookshelfSpines({ screens, label }: BookshelfSpinesProps) {
  const [open, setOpen] = useState(0);

  return (
    <div className="ds-shelf" role="tablist" aria-label={label}>
      {screens.map((screen, i) => {
        const isOpen = i === open;
        return (
          <button
            key={screen.title}
            type="button"
            role="tab"
            aria-selected={isOpen}
            className={`ds-shelf-spine${isOpen ? " is-open" : ""}`}
            onClick={() => setOpen(i)}
          >
            {isOpen ? (
              <div className="ds-frame ds-shelf-frame">
                {screen.route ? (
                  <div className="ds-framebar">
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
                      <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
                      <span className="block h-2 w-2 rounded-full" style={{ background: "var(--color-surface-2)" }} />
                    </span>
                    <span
                      className="flex-1 truncate rounded-md border px-2.5 py-1 font-mono text-[0.6rem]"
                      style={{ borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)", color: "var(--muted)" }}
                    >
                      {screen.route}
                    </span>
                  </div>
                ) : null}
                <div className="ds-framebody">
                  <Image
                    key={screen.src}
                    src={screen.src}
                    width={screen.width}
                    height={screen.height}
                    alt={screen.alt}
                    sizes="(max-width: 900px) 100vw, 60rem"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            ) : (
              <span className="ds-shelf-spine-label">{screen.title}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
