import Image from "next/image";
import { HeroScreenStack, type HeroStackScreen } from "./HeroScreenStack";
import type { ReactNode } from "react";

export type CaseStudyHeroProps = {
  headline: ReactNode;
  /** One line under the headline saying what the product is and who opens
      it — the thing a reader who has never heard of it needs first. */
  standfirst?: string;
  meta: { label: string; value: string }[];
  /** Hero art. Sits in its own column beside the copy, bottom-aligned to
      the band floor. Omit and the copy takes the full width. */
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  /**
   * How the art behaves. `panel` gives it its own column, bottom-aligned
   * to the band floor — right for a product screenshot, which has to be
   * read. `backdrop` lets it fill the band with the copy over it — right
   * for campaign art, which is atmosphere rather than something to study,
   * and which these projects composed with a dark copy area already in it.
   */
  artMode?: "panel" | "backdrop";
  /** Mono footnote over the art, e.g. "UI as shipped. Mock data, some names
      changed — internal work." Required on any case study whose client work
      is internal: it says what is real (the interface) and what was altered
      to show it (the data, some product names). */
  figureNote?: string;
  /** A fanned deck instead of one screen. Only for openers that have several
      real screens — the perspective is earned by quantity, not applied as
      styling to a single mock. Ignored in `backdrop` mode. */
  stack?: HeroStackScreen[];
  /** The back link, placed above everything. */
  children?: ReactNode;
};

/**
 * The case-study opener: a full-bleed dark band with the copy on the left
 * and the art in its own column on the right, running down to the band's
 * floor.
 *
 * Replaces the old `SceneBanner` hero, where the art was a background
 * behind a scrim and the copy sat on top of it. That treatment suited an
 * atmospheric photo and suited nothing else — product screens went muddy
 * under the scrim, and a case study with no asset yet had to render a
 * "Hero image pending" placeholder as its opening statement. Here the art
 * is a sibling of the copy, so a missing one costs a column rather than
 * the whole band. `SceneBanner` is untouched and still serves the
 * mid-page banners in bb-daily, store-support and supply-chain.
 *
 * One value for the band's bottom padding and for the art's negative
 * margin, so the two cannot drift: the padding protects the copy, and
 * cancelling it lets the art reach the floor, where `.ds-pull`'s own
 * overflow clips the bleed.
 */
const FLOOR = "clamp(5rem, 9vw, 8rem)";

export function CaseStudyHero({
  headline,
  standfirst,
  meta,
  src,
  alt = "",
  width,
  height,
  figureNote,
  stack,
  artMode = "panel",
  children,
}: CaseStudyHeroProps) {
  const hasStack = Boolean(stack?.length) && artMode !== "backdrop";
  const hasArt = Boolean(src) || hasStack;
  const backdrop = Boolean(src) && artMode === "backdrop";
  // A phone composite stands on the band's floor; a desktop mock should not.
  // Pinned to the bottom, a 1.62:1 dashboard left 350px of the column empty
  // above it, because the column is sized for artwork that is nearly square.
  // The artefact's own proportions decide it — they are already declared.
  const wideArt = hasStack || (width ?? 2400) / (height ?? 1380) >= 1.2;

  const copy = (
    <div>
      <span className="ds-pull-dots" aria-hidden />
      <h1
        className={`display-title ${hasArt ? "max-w-[18ch]" : "max-w-[24ch]"}`}
        style={{
          color: "var(--ds-dark-ink)",
          fontSize: hasArt ? "clamp(2rem, 3.4vw, 2.9rem)" : "clamp(2rem, 4.2vw, 3.1rem)",
          lineHeight: 1.06,
          letterSpacing: "-0.015em",
        }}
      >
        {headline}
      </h1>
      {standfirst ? (
        <p className="mt-6 max-w-[46ch] text-base leading-7" style={{ color: "var(--ds-dark-muted)" }}>
          {standfirst}
        </p>
      ) : null}
      {meta.length ? (
        <dl className="ds-scene-banner-meta">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="ds-eyebrow" style={{ color: "#8fb3bc" }}>
                {item.label}
              </dt>
              <dd style={{ margin: 0, color: "var(--ds-dark-ink)" }}>{item.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {/* A disclosure is a footnote. Set across the top of the band in mono
          caps it had the position of a kicker and read as a caveat on the
          work; under the meta it reads as one more fact about it. */}
      {figureNote ? (
        <p
          className="mt-7 flex max-w-[56ch] items-start gap-2.5 text-[0.8rem] leading-6"
          style={{ color: "#6f929c" }}
        >
          <svg
            className="mt-[4px] shrink-0"
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            aria-hidden
          >
            <circle cx="8" cy="8" r="6.6" />
            <path d="M8 7.3v4.1" strokeLinecap="round" />
            <circle cx="8" cy="4.8" r="0.8" fill="currentColor" stroke="none" />
          </svg>
          <span>{figureNote}</span>
        </p>
      ) : null}
    </div>
  );

  if (backdrop) {
    return (
      <div className="ds-pull ds-cs-hero ds-cs-hero-backdrop">
        <Image
          className="ds-cs-hero-art"
          src={src as string}
          alt={alt}
          fill
          priority
          sizes="100vw"
        />
        <span className="ds-cs-hero-scrim" aria-hidden />
        <div className="ds-pull-inner relative w-full">
          {children ? <div className="mb-5">{children}</div> : null}
          <div className="max-w-[46rem]">{copy}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="ds-pull ds-cs-hero">
      <div className="ds-pull-inner" style={hasArt && !wideArt ? { paddingBottom: FLOOR } : undefined}>
        {children ? <div className="mb-5">{children}</div> : null}

        {hasArt ? (
          <div className="grid items-stretch gap-10 lg:grid-cols-[0.82fr_1.4fr] lg:gap-12">
            {/* Top-aligned, not centred. The row is sized by the art's
                margin box, which is taller than the copy, so centring
                split the difference into ~36px of dead space above the
                dot marker and the same again below the meta. Aligning to
                the top starts the copy on the art's own top line; the
                slack that is left sits under the meta, where the evidence
                card overlaps it. */}
            <div className="flex items-start">{copy}</div>
            <div
              className={`relative flex justify-center ${wideArt ? "items-center" : "items-end"}`}
              // The negative margin exists so floor-standing art can reach
              // past the band's padding. Centred art has no floor to reach,
              // and the pull would drag it below the optical middle.
              style={wideArt ? undefined : { marginBottom: `calc(${FLOOR} * -1)` }}
            >
              {hasStack ? (
                <div style={{ width: "92%", maxWidth: "46rem" }}>
                  <HeroScreenStack screens={stack as HeroStackScreen[]} label={alt} />
                </div>
              ) : (
                <Image
                  src={src as string}
                  alt={alt}
                  width={width ?? 2400}
                  height={height ?? 1380}
                  priority
                  sizes="(max-width: 1024px) 78vw, 44vw"
                  /* 85%, not a smaller max-width: the column is narrower than
                     the old 52rem cap at most widths, so the cap was not the
                     binding constraint and lowering it would have done nothing
                     until the viewport got very wide. */
                  style={{ width: "85%", height: "auto", maxWidth: "44.2rem" }}
                />
              )}
            </div>
          </div>
        ) : (
copy
        )}
      </div>
    </div>
  );
}
