"use client";

import { useState } from "react";
import Image from "next/image";
import { PagingArrows } from "./PagingArrows";

export type RailScreen = {
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

type HeroThumbnailRailProps = {
  screens: RailScreen[];
  label: string;
};

/**
 * M14 · Hero + thumbnail rail — the plain, standard gallery pattern every
 * App Store listing and product page already uses: one large screen, a
 * row of small thumbnails to jump between the rest. Deliberately the
 * least novel component in this family — that's the point. It doesn't
 * need a fan, a lean, or a perspective to justify itself; it works
 * because it's the shape people already know how to read.
 *
 * Same text panel, dot rail, and `PagingArrows` as `StackedScreens` and
 * `CoverflowRow`, so switching to this pattern for a project doesn't cost
 * any of the surrounding furniture — only the hero/hero-media shape changes.
 */
export function HeroThumbnailRail({ screens, label }: HeroThumbnailRailProps) {
  const [active, setActive] = useState(0);
  const screen = screens[active];
  const stepBy = (delta: number) => setActive((a) => (a + delta + screens.length) % screens.length);

  return (
    <div className="grid gap-10 lg:grid-cols-[27rem_1fr] lg:items-center" role="group" aria-label={label}>
      <div>
        <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
          {screen.route ?? `${active + 1} of ${screens.length}`}
        </p>
        <h4 className="display-title mt-3" style={{ fontSize: "1.5rem" }}>
          {screen.title}
        </h4>
        <p className="ds-note mt-3 max-w-[40ch]">{screen.description}</p>

        <div className="ds-artboard-dots" style={{ marginTop: "1.75rem", justifyContent: "flex-start" }}>
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
          <PagingArrows onPrev={() => stepBy(-1)} onNext={() => stepBy(1)} label="screen" />
        </div>
      </div>

      <div>
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
              key={screen.src}
              src={screen.src}
              width={screen.width}
              height={screen.height}
              alt={screen.alt}
              sizes="(max-width: 900px) 100vw, 46rem"
              className="block h-auto w-full"
            />
          </div>
        </div>

        <div className="ds-rail mt-4" role="tablist" aria-label={`${label} — thumbnails`}>
          {screens.map((s, i) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`ds-rail-thumb${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${s.title}`}
            >
              <Image src={s.src} width={s.width} height={s.height} alt="" sizes="6rem" className="block h-auto w-full" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
