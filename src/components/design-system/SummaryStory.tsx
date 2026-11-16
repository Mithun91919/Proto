import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { ArtboardCarousel, type ArtboardSlide } from "./ArtboardCarousel";
import { CaseStudyFigure } from "./CaseStudy";
import { MetricGlyph } from "./MetricGlyph";
import { ProofStrip, type ProofStripItem } from "./ProofStrip";
import { GlassPanel } from "./primitives/GlassPanel";
import type { MetricMarkName } from "./dotPatterns";
import { getProject } from "@/content/projects";
import { metricGlyph } from "@/components/FeaturedWorkCard";

/** A label, one line and one sentence of the page's own words. */
export type SummaryBeat = { label: string; lead: string; detail: string };

export type SummaryCarousel = {
  /** The small label above the title. */
  eyebrow: string;
  title: string;
  description: string;
  /** Names the set for screen readers. */
  label: string;
  slides: ArtboardSlide[];
  /** Screens of a full page are shown scrolled in a browser frame, and other
      art, such as phone screens or campaign work, flat. Defaults to the frame. */
  scrollable?: boolean;
};

/** The three marks, in the order the beats come: the problem, what was built, what I did. */
const BEAT_GLYPHS: MetricMarkName[] = ["field", "funnel", "modules"];

const SECTION = "mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14";

/**
 * What a case study's summary shows under its opener: the problem, the
 * solution and what I did as three short cards; the page's key visual, either
 * its screens paged through in a carousel or one figure the page supplies; and
 * what changed. Each piece is optional, so a page shows only what it has.
 *
 * Every line is the case study's own wording, cut down. Nothing here is new.
 */
export function SummaryStory({
  slug,
  beats,
  carousel,
  figure,
  figureLabel,
  results,
  resultsLabel = "What changed",
  caveat,
}: {
  /** The project, so a page with no figures of its own shows its record's. */
  slug?: string;
  /** Problem, solution, what I did, in that order. */
  beats: [SummaryBeat, SummaryBeat, SummaryBeat];
  carousel?: SummaryCarousel;
  /** A single key visual, for a page whose story is one figure and not a set of screens. */
  figure?: ReactNode;
  /** The small label above `figure`. */
  figureLabel?: string;
  /** Figures already on the page, as the same proof strip. */
  results?: ProofStripItem[];
  resultsLabel?: string;
  /** Says what a figure is and is not, as on the page. */
  caveat?: string;
}) {
  const items: ProofStripItem[] | undefined =
    results ??
    (slug
      ? getProject(slug)?.metrics.slice(0, 3).map((m) => ({ value: m.value, label: m.label, glyph: metricGlyph(m) }))
      : undefined);

  return (
    <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
      <section className="pt-16 md:pt-20">
        <Reveal className="ds-stagger grid grid-cols-1 gap-4 md:grid-cols-3">
          {beats.map((beat, i) => (
            <GlassPanel key={beat.label} variant="soft" className="rounded-2xl p-7">
              <MetricGlyph name={BEAT_GLYPHS[i]} size={5} gap={3} />
              <p className="eyebrow mt-6" style={{ color: "var(--ds-accent-deep)" }}>
                {beat.label}
              </p>
              <p className="display-title mt-3 text-[var(--ink)]" style={{ fontSize: "1.35rem", lineHeight: 1.3 }}>
                {beat.lead}
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-[var(--ink-soft)]">{beat.detail}</p>
            </GlassPanel>
          ))}
        </Reveal>
      </section>

      {carousel ? (
        <section className={SECTION}>
          <Reveal>
            {carousel.scrollable === false ? (
              <>
                {/* Wide, flat art does not fit beside a column of text, so the
                    heading sits above it and the art runs the full width. */}
                <p className="eyebrow">{carousel.eyebrow}</p>
                <h2 className="display-title display-section mt-3 text-[var(--ink)]">{carousel.title}</h2>
                <p className="body-text mt-4 max-w-[58ch]">{carousel.description}</p>
                <div className="mt-10">
                  <ArtboardCarousel label={carousel.label} slides={carousel.slides} />
                </div>
              </>
            ) : (
              <ArtboardCarousel
                layout="split"
                eyebrow={carousel.eyebrow}
                title={carousel.title}
                description={carousel.description}
                label={carousel.label}
                scrollable
                maxHeight="44rem"
                slides={carousel.slides}
              />
            )}
          </Reveal>
        </section>
      ) : null}

      {figure ? (
        <section className={SECTION}>
          <CaseStudyFigure label={figureLabel}>{figure}</CaseStudyFigure>
        </section>
      ) : null}

      {items?.length ? (
        <section className={SECTION}>
          <Reveal>
            <p className="eyebrow mb-6">{resultsLabel}</p>
            <ProofStrip items={items} />
            {caveat ? <p className="mt-4 text-[0.85rem] text-[var(--muted)]">{caveat}</p> : null}
          </Reveal>
        </section>
      ) : null}
    </div>
  );
}
