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
 * The live case study's hero meta, verbatim — the four rows the page
 * passes plus the three classification axes `CaseStudyShell` appends
 * from `projects.ts` and `work-filters.ts`. Dropped in here unedited so
 * the two formats can be compared side by side and the rows worth
 * keeping picked off; several duplicate what the eyebrow, standfirst and
 * compact meta already say.
 */
const LIVE_META = [
  { label: "Role", value: "UX Designer" },
  { label: "Client", value: "Walmart Global Tech" },
  { label: "Year", value: "2020–2021" },
  { label: "Discipline", value: "Frontline operations · Mobile product" },
  { label: "Sector", value: "Frontline ops" },
  { label: "Platform", value: "Mobile" },
  { label: "Craft", value: "Research · UX · UI" },
];

/** `lead` is the claim, `detail` the evidence. Reading only the three
    leads should still tell the story. */
const BEATS = [
  {
    label: "Problem",
    lead: (
      <>
        Reporting a fault <span className="ds-accent-deep-text">cost more than fixing it</span>.
      </>
    ),
    detail:
      "An associate who found a cooler failing had to track down a manager with a desktop. Troubleshooting was thin, search dead-ended, and the form arrived before anyone had tried the obvious fix.",
  },
  {
    label: "Task",
    lead: (
      <>
        Redesign frontline support, <span className="ds-accent-deep-text">end to end</span>.
      </>
    ),
    detail:
      "One mobile experience covering both halves of the floor — the building and the technology inside it — for associates supporting ~580K devices, and for the support teams receiving what they send.",
  },
  {
    label: "What I did",
    lead: (
      <>
        Put the fix <span className="ds-accent-deep-text">in front of the form</span>.
      </>
    ),
    detail:
      "Rebuilt the taxonomy from card sorting with associates, made guided resolution step one of two, and gave work orders a loop they could track, annotate and escalate — so a ticket became the fallback, not the first move.",
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
  const meta = ["UX Designer", "Mobile & web", "2020–2021"];
  return (
    <div className="ds-pull">
      <div className="ds-pull-inner" style={{ paddingBottom: HERO_FLOOR }}>
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.82fr_1.4fr] lg:gap-12">
          <div className="flex items-center">
            <div>
              <span className="ds-pull-dots" aria-hidden />
              <p className="ds-eyebrow ds-pull-eyebrow">Store Support Platform · Walmart Global Tech</p>
              <h2
                className="display-title max-w-[18ch]"
                style={{
                  color: "var(--ds-dark-ink)",
                  fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.015em",
                }}
              >
                FixIt — One app for{" "}
                <span style={{ color: "var(--ds-mint)" }}>everything that breaks</span>.
              </h2>
              {/* Standfirst — what it is, who opens it, and the condition
                  they are in when they do. The highest-value line here
                  for someone who has never heard of the product. */}
              <p className="mt-6 max-w-[42ch] text-base leading-7" style={{ color: "var(--ds-dark-muted)" }}>
                The app Walmart store associates open when something in the store stops working — a cooler,
                a forklift, a handheld, the network. Used mid-shift, on the floor, by someone who just wants
                to get back to the job. Designed for them, for new starters still learning the store, and
                for the support desks receiving what they send.
              </p>
              <div
                className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[0.62rem] uppercase tracking-[0.1em]"
                style={{ color: "var(--ds-dark-muted)" }}
              >
                {meta.map((m, i) => (
                  <span key={m} className="flex items-center gap-4">
                    {i > 0 ? (
                      <span
                        aria-hidden
                        className="inline-block h-1 w-1 rounded-full"
                        style={{ background: "var(--ds-mint)", opacity: 0.55 }}
                      />
                    ) : null}
                    {m}
                  </span>
                ))}
              </div>
              <p className="mt-5 max-w-[44ch] text-[0.88rem] leading-6" style={{ color: "var(--ds-dark-muted)" }}>
                Picked the product up mid-flight from the previous designer, working with product,
                engineering and the associates themselves.
              </p>

              {/* The live hero's meta block, exactly as `SceneBanner`
                  renders it — same `dl`, same classes, same colours — so
                  this is a like-for-like comparison against the compact
                  row above rather than a restyled version of it. */}
              <dl className="ds-scene-banner-meta">
                {LIVE_META.map((item) => (
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
        {BEATS.map((b, i) => (
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
