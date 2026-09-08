"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";

export type FanScreen = {
  src: string;
  width: number;
  height: number;
  alt: string;
  route?: string;
  title: string;
};

type RadialFanProps = {
  screens: FanScreen[];
  label: string;
};

/**
 * M15 · Radial fan — a hand of cards held fanned open, pivoting from one
 * point rather than `StackedScreens`' diagonal lean. Every card's edge is
 * visible at once instead of mostly hidden behind the front one, at the
 * cost of each being smaller — the right trade when the point is "here is
 * the whole set" rather than "here is one screen, with more behind it."
 * Click any card (or its dot) to rotate it to the centred, upright,
 * front-most position.
 */
export function RadialFan({ screens, label }: RadialFanProps) {
  const [active, setActive] = useState(0);
  const spread = 44; // total degrees the fan spans
  const step = screens.length > 1 ? spread / (screens.length - 1) : 0;

  return (
    <div role="group" aria-label={label}>
      <div className="ds-fan">
        {screens.map((screen, i) => {
          const isActive = i === active;
          const angle = (i - (screens.length - 1) / 2) * step;
          return (
            <button
              key={screen.title}
              type="button"
              className={`ds-fan-card${isActive ? " is-active" : ""}`}
              style={{ "--angle": `${angle}deg`, zIndex: isActive ? screens.length + 1 : screens.length - i } as CSSProperties}
              onClick={() => setActive(i)}
              aria-current={isActive || undefined}
              aria-label={isActive ? undefined : `Bring ${screen.title} to the front`}
              tabIndex={isActive ? -1 : 0}
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
                    sizes="(max-width: 900px) 90vw, 34rem"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="ds-eyebrow mt-6 text-center" style={{ color: "var(--muted)" }}>
        {screens[active].title}
      </p>
    </div>
  );
}
