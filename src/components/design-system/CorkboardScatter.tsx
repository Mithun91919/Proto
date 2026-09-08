"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";

export type ScatterScreen = {
  src: string;
  width: number;
  height: number;
  alt: string;
  route?: string;
  title: string;
  /** Fixed per-card tilt and position offset, in degrees / % — not
      derived, so the scatter reads as deliberately placed rather than
      randomised on every render. */
  rotate: number;
  x: number;
  y: number;
};

type CorkboardScatterProps = {
  screens: ScatterScreen[];
  label: string;
};

/**
 * M16 · Corkboard scatter — screens pinned at varied angles like photos
 * tacked to a board, the loosest of the `StackedScreens` siblings. Where
 * that component and its other siblings all read as a considered product
 * shot, this reads as a process wall — useful for a case study that wants
 * to show the mess of exploration rather than a tidy final set. Click a
 * screen to lift it off the board to the front.
 */
export function CorkboardScatter({ screens, label }: CorkboardScatterProps) {
  const [front, setFront] = useState(0);

  return (
    <div className="ds-corkboard" role="group" aria-label={label}>
      {screens.map((screen, i) => {
        const isFront = i === front;
        return (
          <button
            key={screen.title}
            type="button"
            className={`ds-cork-card${isFront ? " is-front" : ""}`}
            style={
              {
                "--rotate": `${screen.rotate}deg`,
                left: `${screen.x}%`,
                top: `${screen.y}%`,
                zIndex: isFront ? screens.length + 1 : i,
              } as CSSProperties
            }
            onClick={() => setFront(i)}
            aria-current={isFront || undefined}
            aria-label={isFront ? undefined : `Bring ${screen.title} to the front`}
            tabIndex={isFront ? -1 : 0}
          >
            <span className="ds-cork-pin" aria-hidden />
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
                  sizes="(max-width: 700px) 80vw, 24rem"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
