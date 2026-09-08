"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { PagingArrows } from "./PagingArrows";

export type CoverflowScreen = {
  src: string;
  width: number;
  height: number;
  alt: string;
  route?: string;
  title: string;
  description: string;
};

type CoverflowRowProps = {
  screens: CoverflowScreen[];
  label: string;
};

/**
 * M13 · Coverflow row — the same "many real screens, one primary" idea as
 * `StackedScreens`, laid out as a horizontal row in perspective instead of
 * a diagonal fan. The centred screen sits flat and full size; neighbours
 * tilt away in 3D and shrink the further they are from centre. Arrows or
 * clicking a neighbour shifts which one is centred.
 */
export function CoverflowRow({ screens, label }: CoverflowRowProps) {
  const [active, setActive] = useState(0);
  const screen = screens[active];
  const stepBy = (delta: number) => setActive((a) => (a + delta + screens.length) % screens.length);

  return (
    <div role="group" aria-label={label}>
      <div className="ds-coverflow">
        {screens.map((screen, i) => {
          const offset = i - active;
          const isCentre = offset === 0;
          // Capped the same way `StackedScreens` caps its fan depth: past
          // three positions from centre, every further screen sits at the
          // same offset and fades out, so 8+ screens don't sprawl the row
          // wider with each one added.
          const clamped = Math.max(-3, Math.min(3, offset));
          const isHidden = Math.abs(offset) > 3;
          return (
            <button
              key={screen.title}
              type="button"
              className={`ds-coverflow-item${isCentre ? " is-centre" : ""}${isHidden ? " is-hidden" : ""}`}
              style={{ "--offset": clamped, "--abs": Math.abs(clamped), zIndex: 100 - Math.abs(clamped) } as CSSProperties}
              onClick={() => setActive(i)}
              aria-current={isCentre || undefined}
              aria-label={isCentre ? undefined : `Bring ${screen.title} to the centre`}
              tabIndex={isCentre ? -1 : 0}
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
                    sizes="(max-width: 900px) 90vw, 42rem"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-8 max-w-[34rem] text-center">
        <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
          {screen.route ?? `${active + 1} of ${screens.length}`}
        </p>
        <h4 className="display-title mt-3" style={{ fontSize: "1.3rem" }}>
          {screen.title}
        </h4>
        <p className="ds-note mt-3">{screen.description}</p>

        <div className="ds-artboard-dots mt-6" style={{ justifyContent: "center" }}>
          {screens.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-current={active === i}
              aria-label={`Show ${s.title}`}
              className={`ds-artboard-dot${active === i ? " is-active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
          <span className="ds-artboard-count" aria-hidden>
            {active + 1} / {screens.length}
          </span>
        </div>

        <div className="mt-4 flex justify-center">
          <PagingArrows onPrev={() => stepBy(-1)} onNext={() => stepBy(1)} label="screen" />
        </div>
      </div>
    </div>
  );
}
