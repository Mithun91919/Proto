"use client";

import { useState } from "react";
import Image from "next/image";
import type { CSSProperties } from "react";

export type HeroStackScreen = {
  src: string;
  /** True pixel dimensions — same discipline as `StackedScreens`. */
  width: number;
  height: number;
  /** Describes the screen. Used as the image's alt while it leads. */
  alt?: string;
  /** Short name for the control that brings this screen forward, e.g.
      "the sign-in screen". Falls back to its position. */
  name?: string;
  route?: string;
};

type HeroScreenStackProps = {
  screens: HeroStackScreen[];
  /** Describes the deck as a whole, for the single image role. */
  label: string;
};

/**
 * The hero's fanned deck — `StackedScreens`' picture and its click, without
 * its text panel, dots, count or arrows. The hero already carries a headline,
 * a standfirst and a six-row meta table; M6's panel would put a second title
 * beside all of that, describing the same project twice.
 *
 * So the card is the whole affordance: click one behind to bring it forward.
 * Nothing is added to the opener except the looking.
 *
 * It earns the perspective the same way M6 does: by showing that there are
 * several real screens and which one leads. A single screen tilted for style
 * would be the thing C1 rules out for dots — a mark that carries no quantity,
 * grouping, connection, state or change.
 *
 * Four screens is the cap. Past that the fan stops widening and only the
 * front three read anyway.
 */
export function HeroScreenStack({ screens, label }: HeroScreenStackProps) {
  const capped = screens.slice(0, 4);
  const [order, setOrder] = useState(() => capped.map((_, i) => i));
  const bringToFront = (i: number) =>
    setOrder((prev) => (prev[0] === i ? prev : [i, ...prev.filter((p) => p !== i)]));
  const deck = order.map((i) => capped[i]);
  // One ratio for the whole deck, taken from the screen that leads. Fanning
  // three different shapes was the mistake in the first pass: a 1.32 screen
  // behind a 1.62 one hung 76px below it, which reads as misalignment rather
  // than depth. The layout sizes the cards; the images crop into them.
  const ratio = deck[0] ? deck[0].width / deck[0].height : 16 / 10;

  return (
    <div
      className="ds-hero-stack"
      role="group"
      aria-label={label}
      style={{ "--stack-depth": deck.length - 1, "--deck-ratio": ratio } as CSSProperties}
    >
      {deck.map((screen, i) => (
        <button
          key={screen.src}
          type="button"
          className={`ds-hero-stack-card${i === 0 ? " is-primary" : ""}`}
          style={{ "--pos": i, zIndex: deck.length - i } as CSSProperties}
          onClick={() => bringToFront(order[i])}
          // The front screen is already forward, so it is not a control.
          tabIndex={i === 0 ? -1 : 0}
          aria-label={i === 0 ? undefined : `Bring ${screen.name ?? `screen ${order[i] + 1}`} to the front`}
          aria-current={i === 0 || undefined}
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
            <div className="ds-framebody" style={{ aspectRatio: "var(--deck-ratio)" }}>
              <Image
                src={screen.src}
                width={screen.width}
                height={screen.height}
                alt={i === 0 ? (screen.alt ?? "") : ""}
                priority={i === 0}
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="block h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
