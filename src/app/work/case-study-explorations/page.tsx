import type { Metadata } from "next";
import { MetricGlyph } from "@/components/design-system/MetricGlyph";
import { DotGrid } from "@/components/design-system/primitives/DotGrid";

/**
 * Working draft of the Store Support case-study intro. Layout B won the
 * three-way comparison; A and C are in git history.
 *
 * What B still got wrong, and what this pass fixes:
 *
 * - The card was two unrelated blocks stacked in a plain box. The
 *   metrics now sit in their own tinted band running the full width of
 *   the card — as its footer, so the argument leads and the figures
 *   close it as evidence rather than opening as a claim.
 * - Problem / Task / What I did is a sequence, but three equal columns
 *   made it a set. They are numbered now and chained by a dotted rule —
 *   the site's own Before → Intervention → After motif, drawn in the dot
 *   language rather than asserted.
 * - Lead and detail were too close in weight, so each column greyed out.
 *   The lead is up to 1.35rem and the detail is smaller and quieter.
 * - The caveat floated between the two blocks. It belongs to the
 *   figures, so it now lives inside their band.
 *
 * Every component here is a leaf — none renders another. That is the
 * rule that got broken once and hung the dev server.
 *
 * Not linked from anywhere and noindexed.
 */

export const metadata: Metadata = {
  title: "Case-study intro — working draft",
  robots: { index: false, follow: false },
};

const HERO_IMG = "/work/store-support/hero-composite.png";
const HERO_FLOOR = "clamp(5rem, 9vw, 8rem)";

/**
 * Chosen from the live hero's seven rows. Client is gone — the eyebrow
 * already named Walmart Global Tech — and Sector is gone because
 * Discipline said the same thing one word longer.
 *
 * Two values edited rather than taken verbatim, both fixing a
 * contradiction the two blocks only exposed once they sat together:
 *
 * - Discipline drops "· Mobile product". With Platform as its own row
 *   that was the same fact twice, and the two disagreed.
 * - Platform reads "Mobile & web", not the "Mobile" work-filters.ts
 *   stores. The approved focus covers the web dashboard redesign and
 *   the design-system migration, so mobile alone understates it — the
 *   filter data is still wrong, and fixing it is a site-wide edit.
 */
const HERO_META = [
  { label: "Role", value: "UX Designer" },
  { label: "Year", value: "2020–2021" },
  { label: "Discipline", value: "Frontline operations" },
  { label: "Platform", value: "Mobile & web" },
  { label: "Craft", value: "Research · UX · UI" },
];

/** `lead` is the claim, `detail` the evidence. Reading only the three
    leads should still tell the story. */
/**
 * Rewritten against the copy guide (K). Its "write this, not that"
 * examples are plain and enumerative — "Portfolio planning was split
 * across separate systems for people, products, initiatives..." — and
 * these were aphorisms: a ratio claim ("cost more than fixing it"), an
 * imperative ("put the fix in front of the form"), and filler ("end to
 * end"). Every lead now states the fact and takes its emphasis from a
 * real noun, and "What I did" uses the first person the guide asks for.
 */
const BEATS = [
  {
    label: "Problem",
    lead: (
      <>
        Reporting a fault meant finding{" "}
        <span className="ds-accent-deep-text">a manager and a desktop</span>.
      </>
    ),
    detail:
      "An associate who found a cooler failing could not report it from the floor. There was little troubleshooting guidance, search returned an unstructured list with no next step, and the form came before anyone had tried the obvious fix.",
  },
  {
    label: "Task",
    lead: (
      <>
        Redesign frontline support across <span className="ds-accent-deep-text">mobile and web</span>.
      </>
    ),
    detail:
      "One experience covering both the building and the technology inside it, for associates supporting ~580K devices and for the central support teams receiving their tickets.",
  },
  {
    label: "What I did",
    lead: (
      <>
        I put guided resolution <span className="ds-accent-deep-text">before the ticket form</span>.
      </>
    ),
    detail:
      "I rebuilt the issue taxonomy from card sorts with associates, made resolution step one of two in the submit flow, and gave work orders a loop they could track, annotate and escalate.",
  },
];

/** S2b semantic marks, read off METRIC_MARK_MEANINGS: population, reach,
    volume — the mapping PROJECT_METRIC_GLYPHS already stores for this
    project. */
const METRICS = [
  { value: "~5.9K", label: "daily users", glyph: "field" },
  { value: "~580K", label: "devices supported", glyph: "ring" },
  { value: "7K+", label: "searches a week", glyph: "bars" },
] as const;

/**
 * The mark above each beat, per C1: a dot earns its place through
 * quantity, grouping, connection, state or change — and three identical
 * bars earned none of it.
 *
 * These read left to right as the state of the system at that beat, which
 * is the site's own Before → Intervention → After motif drawn rather
 * than asserted:
 *
 *   Problem     gaps — disconnected, nothing joining up
 *   Task        converging — pulling toward one centre, not there yet
 *   What I did  continuous — one unbroken run
 *
 * Rendered through DotGrid, the system's single dot renderer, rather
 * than a hand-rolled gradient.
 */
const BEAT_MARKS: Record<string, number[]> = {
  Problem: [1, 0.14, 1, 0.14, 1],
  Task: [0.4, 0.7, 1, 0.7, 0.4],
  "What I did": [1, 1, 1, 1, 1],
};

function Hero() {
  return (
    <div className="ds-pull">
      <div className="ds-pull-inner" style={{ paddingBottom: HERO_FLOOR }}>
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.82fr_1.4fr] lg:gap-12">
          <div className="flex items-center">
            <div>
              <span className="ds-pull-dots" aria-hidden />
              <h2
                className="display-title max-w-[18ch]"
                style={{
                  color: "var(--ds-dark-ink)",
                  fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.015em",
                }}
              >
                Store associate app: fix{" "}
                <span style={{ color: "var(--ds-mint)" }}>everything that breaks</span>.
              </h2>
              {/* Standfirst — what it is, who opens it, and the condition
                  they are in when they do. The highest-value line here
                  for someone who has never heard of the product. */}
              <p className="mt-6 max-w-[42ch] text-base leading-7" style={{ color: "var(--ds-dark-muted)" }}>
                A cooler, a forklift, a handheld, the store network — associates report and fix it here,
                mid-shift and on the floor. Built for them, for new starters still learning the store, and
                for the central support desks receiving what they send.
              </p>
              {/* `SceneBanner`'s own meta markup — same `dl`, same
                  classes, same colours — so the draft hero and the live
                  one stay a single format rather than two. */}
              <dl className="ds-scene-banner-meta">
                {HERO_META.map((item) => (
                  <div key={item.label}>
                    <dt className="ds-eyebrow" style={{ color: "#8fb3bc" }}>
                      {item.label}
                    </dt>
                    <dd style={{ margin: 0, color: "var(--ds-dark-ink)" }}>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-end justify-center" style={{ marginBottom: `calc(${HERO_FLOOR} * -1)` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMG} alt="" className="w-full" style={{ maxWidth: "52rem", marginInline: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EvidenceCard() {
  return (
    <div
      className="relative z-[1] overflow-hidden rounded-2xl"
      style={{
        border: "1px solid var(--ds-solid-border)",
        // Opaque, not the translucent surface token: it sits over the
        // dark band, which would otherwise grey the text through it.
        background: "var(--paper)",
        boxShadow: "0 28px 60px -32px rgb(6 17 21 / 0.55)",
        marginTop: "clamp(-3.25rem, -3.4vw, -1.9rem)",
      }}
    >
      {/* The argument, as a numbered chain. */}
      <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-3 md:gap-10 md:p-12">
        {BEATS.map((b) => (
          <div key={b.label}>
            <span aria-hidden className="block">
              <DotGrid cols={5} dots={BEAT_MARKS[b.label]} size={5} gap={4} />
            </span>
            <p
              className="font-mono uppercase"
              style={{
                marginTop: "1.35rem",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                color: "var(--accent-deep)",
              }}
            >
              {b.label}
            </p>
            <p className="display-title mt-2.5" style={{ fontSize: "1.35rem", lineHeight: 1.24 }}>
              {b.lead}
            </p>
            <p className="mt-3.5 text-[0.93rem] leading-6" style={{ color: "var(--ink-soft)" }}>
              {b.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Scale, as the card's footer. Tinted so the card reads as two
          deliberate parts; `overflow-hidden` on the shell lets this run
          edge to edge without fighting the border radius. */}
      <div
        className="px-8 py-7 md:px-12 md:py-8"
        style={{
          background: "color-mix(in oklab, var(--ds-accent) 7%, var(--paper))",
          borderTop: "1px solid var(--ds-solid-border)",
        }}
      >
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.label} className="flex items-center gap-4">
              <span aria-hidden>
                <MetricGlyph name={m.glyph} size={5} gap={3} />
              </span>
              <span>
                <span
                  className="display-title block"
                  style={{ fontSize: "1.6rem", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--accent-deep)" }}
                >
                  {m.value}
                </span>
                <span className="ds-eyebrow mt-1.5 block">{m.label}</span>
              </span>
            </div>
          ))}
        </div>
        {/* Belongs to the figures, so it sits with them rather than
            floating between the two zones. */}
        <p className="ds-note mt-5">
          Scale of the experience during the documented period — not a resolution claim.
        </p>
      </div>
    </div>
  );
}

export default function CaseStudyIntroPage() {
  return (
    <div className="ds-scope pb-32">
      <header className="mx-auto w-full max-w-[85rem] px-5 pt-14 md:px-8">
        <p className="eyebrow">Internal · not linked</p>
        <h1 className="display-title mt-4 max-w-[26ch]" style={{ fontSize: "2.4rem", lineHeight: 1.08 }}>
          The case-study intro.
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
          The argument leads as a numbered chain — Problem, Task, What I did — with scale closing the card
          as evidence rather than opening it as a claim. The other two layouts are gone; this is the one
          being refined.
        </p>
      </header>

      <section className="pt-14">
        <Hero />
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <EvidenceCard />
        </div>
      </section>
    </div>
  );
}
