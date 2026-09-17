import type { Metadata } from "next";
import { MetricGlyph } from "@/components/design-system/MetricGlyph";

/**
 * Internal working draft of the Store Support case-study intro.
 *
 * Was a six-way comparison plus a recommendation; the direction is
 * settled, so the losing five and the poster variant are gone (they are
 * in git history if a decision needs re-reading). What is left is the
 * one arrangement being refined: a full-bleed dark hero with the screens
 * beside the copy and running to the band floor, and an evidence card
 * overlapping that floor by ~10%.
 *
 * `.ds-pull` only reaches the viewport edge as a direct section child,
 * so the label sits in a contained wrapper, the hero is a bare sibling,
 * and a second contained wrapper holds everything after it. Nesting a
 * `.ds-pull` inside a `max-w` div just makes it 100% of that div.
 *
 * `<img>`, not next/image: this is a layout draft, and there is no
 * reason to push the hero through image optimisation for it.
 *
 * Not linked from anywhere and noindexed.
 */

export const metadata: Metadata = {
  title: "Case-study intro — working draft",
  robots: { index: false, follow: false },
};

const HERO_IMG = "/work/store-support/hero-composite.png";

/**
 * Three beats, each with one job, because the earlier copy had them
 * blurred — "What" was describing the solution, which left the task
 * unstated and made "How" carry both the method and the result.
 *
 *   Why  — the problem, stated as the associate experienced it
 *   What — the task: what the work actually had to deliver
 *   How  — what I did, ending on what it changed
 */
const WHY_WHAT_HOW = [
  {
    label: "Why",
    detail:
      "When something broke mid-shift, reporting it meant finding a manager and a desktop. Troubleshooting was thin and search was a dead end, so the shortest path through the product was a form — and a ticket got raised before anyone had tried the obvious fix.",
  },
  {
    label: "What",
    detail:
      "Redesign frontline support end to end: one mobile experience covering both halves of the floor — facilities and technology — for associates across a ~580K-device footprint.",
  },
  {
    label: "How",
    detail:
      "Rebuilt the taxonomy from card sorting with associates, moved guided resolution ahead of the ticket as step one of two, and closed the loop with work orders they could track, annotate and escalate. A ticket became the fallback rather than the first move.",
  },
];

/**
 * Glyphs are the S2b semantic marks, read off METRIC_MARK_MEANINGS rather
 * than picked for looks: population, reach, volume. That is also the
 * mapping PROJECT_METRIC_GLYPHS already stores for store-support.
 */
const METRICS = [
  { value: "~5.9K", label: "daily users", glyph: "field" },
  { value: "~580K", label: "device footprint", glyph: "ring" },
  { value: "7K+", label: "weekly searches", glyph: "bars" },
] as const;

const BODY = [
  "A freezer drifting out of temperature in frozen foods. A forklift down in the back room. A handheld that will not scan at the register, or a pharmacy system that will not log in. Different trades, different teams — and to the associate who found them, the same event: something stopped working and the shift is still running.",
  "FixIt puts all of it behind one front door — equipment and technology, alarms and tickets — and puts the fix in front of the form.",
];

/** The band's bottom padding, and the negative margin that cancels it for
    the screens. One value, so they cannot drift apart. */
const HERO_FLOOR = "clamp(5rem, 9vw, 8rem)";

function Hero() {
  const meta = ["UX Designer", "2020–2021", "Frontline ops"];

  return (
    <div className="ds-pull">
      <div className="ds-pull-inner" style={{ paddingBottom: HERO_FLOOR }}>
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.82fr_1.4fr] lg:gap-12">
          <div className="flex items-center">
            <div>
              <span className="ds-pull-dots" aria-hidden />
              <p className="ds-eyebrow ds-pull-eyebrow">FixIt · Store Support Platform · Walmart Global Tech</p>
              {/* D2 applies on the dark ground too — one emphasis per
                  title, and it has to be the mint: --accent-deep is the
                  light-ground ink and goes muddy here. */}
              <h2
                className="display-title max-w-[15ch]"
                style={{
                  color: "var(--ds-dark-ink)",
                  fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.015em",
                }}
              >
                One app for <span style={{ color: "var(--ds-mint)" }}>everything that breaks</span> in a
                Walmart store.
              </h2>
              {/* Values without their label prefixes — with them the row
                  wrapped and stranded a separator dot at the head of the
                  second line. */}
              <div
                className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[0.62rem] uppercase tracking-[0.1em]"
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
            </div>
          </div>

          {/* Bottom-aligned and pulled past the band's padding so the
              screens reach the floor; .ds-pull's overflow:hidden clips
              the bleed. The padding is there to protect the copy, not to
              hold the image up. */}
          <div className="flex items-end justify-center" style={{ marginBottom: `calc(${HERO_FLOOR} * -1)` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMG} alt="" className="w-full" style={{ maxWidth: "52rem", marginInline: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Reasoning and scale at equal weight in one card, joined by a single
    rule — rather than a strip of metrics bolted onto a Why/What/How
    sidebar. Overlaps the hero band by ~10% of its own height. */
function EvidenceCard() {
  return (
    <div
      className="relative z-[1] rounded-2xl p-8 md:p-12"
      style={{
        border: "1px solid var(--ds-solid-border)",
        // Opaque, not the translucent surface token: it sits over the
        // dark band, which would otherwise bleed through and grey the text.
        background: "var(--paper)",
        boxShadow: "0 28px 60px -32px rgb(6 17 21 / 0.55)",
        // ~10% of the card's own height. Retuned after the three beats
        // grew: a fixed pull does not track content, so this is measured
        // against the current card (~620px at desktop), not guessed.
        marginTop: "clamp(-4.5rem, -4.65vw, -2.5rem)",
      }}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.35fr_auto_0.75fr] md:gap-12">
        <dl className="space-y-8">
          {WHY_WHAT_HOW.map((row) => (
            <div key={row.label}>
              {/* Accent on the label so the three beats scan as a set
                  before any one of them is read. */}
              <dt className="ds-eyebrow" style={{ color: "var(--accent-deep)" }}>
                {row.label}
              </dt>
              <dd className="body-text m-0 mt-2.5" style={{ maxWidth: "52ch", color: "var(--ink-soft)" }}>
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>

        <div aria-hidden className="hidden md:block" style={{ width: 1, background: "var(--ds-solid-border)" }} />

        <dl className="space-y-8">
          {METRICS.map((m) => (
            <div key={m.label}>
              <div className="mb-3" aria-hidden>
                <MetricGlyph name={m.glyph} size={5} gap={3} />
              </div>
              <dt
                className="display-title"
                style={{
                  fontSize: "1.9rem",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  color: "var(--accent-deep)",
                }}
              >
                {m.value}
              </dt>
              <dd className="ds-eyebrow m-0 mt-2">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      {/* The figures are scale, not proof the redesign resolved anything —
          the web draft has no approved post-launch resolution data. */}
      <p className="ds-note mt-10 border-t pt-5" style={{ borderColor: "var(--ds-solid-border)" }}>
        Scale of the experience during the documented period — not a resolution claim.
      </p>
    </div>
  );
}

export default function CaseStudyIntroDraftPage() {
  return (
    <div className="ds-scope pb-32">
      <header className="mx-auto w-full max-w-[85rem] px-5 pt-14 md:px-8">
        <p className="eyebrow">Internal · not linked</p>
        <h1 className="display-title mt-4 max-w-[26ch]" style={{ fontSize: "2.4rem", lineHeight: 1.08 }}>
          The case-study intro, being refined.
        </h1>
        <p className="mt-6 max-w-[66ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
          One arrangement now, not six. Why states the problem, What states the task, How states what I did
          and what it changed — the three were blurred before, with What describing the solution and How
          carrying both method and result.
        </p>
      </header>

      <section className="pt-14">
        <Hero />
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <EvidenceCard />
          <div className="mt-12 max-w-[70rem] space-y-5">
            {BODY.map((p) => (
              <p key={p} className="body-text">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
