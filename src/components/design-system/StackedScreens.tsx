"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { PagingArrows } from "./PagingArrows";

export type StackScreen = {
  src: string;
  /** True pixel dimensions — same discipline as `ArtboardFigure`. */
  width: number;
  height: number;
  alt: string;
  route?: string;
  /** Shown in the text panel while this screen is primary. */
  title: string;
  description: string;
};

type StackedScreensProps = {
  screens: StackScreen[];
  label: string;
  /**
   * Break out of the page's reading column to a near-full-viewport bound —
   * the same technique `ArtboardFigure`'s wide layout uses — instead of
   * being squeezed to the column's width. A real UI mockup needs the room;
   * leave it off only inside a layout that's already full-width itself.
   */
  fullBleed?: boolean;
};

/**
 * M6 · Stacked screens — a fanned deck instead of a grid or a carousel.
 * One primary screen sits full-size at the front-right, paired with a text
 * panel that follows whichever screen is currently primary; the rest
 * recede behind it, leaning back and to the left like a stack of books
 * tipped against a shelf.
 *
 * Four ways to bring a screen forward, all driving the same state: click a
 * peeking card directly, click its dot in the rail (the same paging
 * language `ArtboardCarousel` uses elsewhere, so a row of dots means the
 * same thing everywhere on the site), step with the prev/next arrows
 * beside the dots, or tab to a card and press enter.
 *
 * The fan depth is capped rather than growing per screen — past four
 * layers back, every further card sits at the same offset, thickening
 * into a bound stack instead of sprawling wider with each screen added.
 * That is what makes this hold up at 8+ screens instead of only reading
 * well at three.
 */
export function StackedScreens({ screens, label, fullBleed = false }: StackedScreensProps) {
  const [order, setOrder] = useState(() => screens.map((_, i) => i));
  const active = screens[order[0]];

  const bringToFront = (screenIndex: number) => {
    setOrder((prev) => {
      if (prev[0] === screenIndex) return prev;
      return [screenIndex, ...prev.filter((i) => i !== screenIndex)];
    });
  };

  const stepBy = (delta: number) => {
    bringToFront((order[0] + delta + screens.length) % screens.length);
  };

  return (
    <div
      className={`grid gap-10 lg:grid-cols-[27rem_1fr] lg:items-center${fullBleed ? " ds-stack-breakout" : ""}`}
      role="group"
      aria-label={label}
    >
      <div>
        <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
          {active.route ?? `${order[0] + 1} of ${screens.length}`}
        </p>
        <h4 className="display-title mt-3" style={{ fontSize: "1.5rem" }}>
          {active.title}
        </h4>
        <p className="ds-note mt-3 max-w-[40ch]">{active.description}</p>

        <div className="ds-artboard-dots" style={{ marginTop: "1.75rem", justifyContent: "flex-start" }}>
          {screens.map((screen, i) => (
            <button
              key={screen.title}
              type="button"
              aria-current={order[0] === i}
              aria-label={`Show ${screen.title}`}
              className={`ds-artboard-dot${order[0] === i ? " is-active" : ""}`}
              onClick={() => bringToFront(i)}
            />
          ))}
          <span className="ds-artboard-count" aria-hidden>
            {order[0] + 1} / {screens.length}
          </span>
          <PagingArrows onPrev={() => stepBy(-1)} onNext={() => stepBy(1)} label="screen" />
        </div>
      </div>

      <div className="ds-stack" style={{ "--stack-depth": Math.min(screens.length, 4) } as CSSProperties}>
        {order.map((screenIndex, position) => {
          const screen = screens[screenIndex];
          const isPrimary = position === 0;
          return (
            <button
              key={screen.title}
              type="button"
              className={`ds-stack-card${isPrimary ? " is-primary" : ""}`}
              style={{ "--pos": Math.min(position, 4), zIndex: screens.length - position } as CSSProperties}
              onClick={() => bringToFront(screenIndex)}
              aria-current={isPrimary || undefined}
              aria-label={isPrimary ? undefined : `Bring ${screen.title} to the front`}
              tabIndex={isPrimary ? -1 : 0}
            >
              <div className="ds-frame">
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
                    src={screen.src}
                    width={screen.width}
                    height={screen.height}
                    alt={screen.alt}
                    sizes="(max-width: 700px) 90vw, 46rem"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
