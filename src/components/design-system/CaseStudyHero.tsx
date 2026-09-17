import Image from "next/image";
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
  /** Mono footnote over the art, e.g. "Reconstructed · placeholder data".
      Required by CLAUDE.md wherever the visual is a rebuild rather than a
      screenshot of the live product. */
  figureNote?: string;
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
  artMode = "panel",
  children,
}: CaseStudyHeroProps) {
  const hasArt = Boolean(src);
  const backdrop = hasArt && artMode === "backdrop";

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
    </div>
  );

  if (backdrop) {
    return (
      <div className="ds-pull ds-cs-hero-backdrop">
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
          {children ? <div className="mb-10">{children}</div> : null}
          <div className="max-w-[46rem]">{copy}</div>
          {figureNote ? (
            <p
              className="absolute right-0 top-0 font-mono text-[0.62rem] uppercase tracking-[0.16em]"
              style={{ color: "color-mix(in oklab, var(--ds-mint) 62%, transparent)" }}
            >
              {figureNote}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="ds-pull">
      <div className="ds-pull-inner" style={hasArt ? { paddingBottom: FLOOR } : undefined}>
        {children ? <div className="mb-10">{children}</div> : null}

        {hasArt ? (
          <div className="grid items-stretch gap-10 lg:grid-cols-[0.82fr_1.4fr] lg:gap-12">
            <div className="flex items-center">{copy}</div>
            <div
              className="relative flex items-end justify-center"
              style={{ marginBottom: `calc(${FLOOR} * -1)` }}
            >
              <Image
                src={src as string}
                alt={alt}
                width={width ?? 2400}
                height={height ?? 1380}
                priority
                sizes="(max-width: 1024px) 92vw, 52vw"
                style={{ width: "100%", height: "auto", maxWidth: "52rem" }}
              />
              {figureNote ? (
                <p
                  className="absolute right-0 top-0 font-mono text-[0.62rem] uppercase tracking-[0.16em]"
                  style={{ color: "color-mix(in oklab, var(--ds-mint) 62%, transparent)" }}
                >
                  {figureNote}
                </p>
              ) : null}
            </div>
          </div>
        ) : (
          copy
        )}
      </div>
    </div>
  );
}
