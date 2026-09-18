import Image from "next/image";
import type { CSSProperties } from "react";

export type HeroStackScreen = {
  src: string;
  /** True pixel dimensions — same discipline as `StackedScreens`. */
  width: number;
  height: number;
  /** Only the front screen carries alt text; the rest are depth. */
  alt?: string;
  route?: string;
};

type HeroScreenStackProps = {
  screens: HeroStackScreen[];
  /** Describes the deck as a whole, for the single image role. */
  label: string;
};

/**
 * The hero's fanned deck — `StackedScreens`' picture without its text panel
 * or its controls, because the hero already has a copy column and a deck in
 * an opener is something to look at rather than operate.
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
  const deck = screens.slice(0, 4);

  return (
    <div
      className="ds-hero-stack"
      role="img"
      aria-label={label}
      style={{ "--stack-depth": deck.length - 1 } as CSSProperties}
    >
      {deck.map((screen, i) => (
        <div
          key={screen.src}
          className={`ds-hero-stack-card${i === 0 ? " is-primary" : ""}`}
          style={{ "--pos": i, zIndex: deck.length - i } as CSSProperties}
          aria-hidden={i > 0}
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
                alt={i === 0 ? (screen.alt ?? "") : ""}
                priority={i === 0}
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
