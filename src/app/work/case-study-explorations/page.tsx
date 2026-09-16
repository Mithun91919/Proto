import type { Metadata } from "next";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";

/**
 * Internal comparison — four full openings (hero through overview) for
 * Store Support, each a different composition of the same real content,
 * built around what the UXfolio benchmark research says a strong open
 * does: show the stakes early, make the reasoning visible, and let a
 * skimmer triage fast.
 *
 * Every panel is independent. `MiniHero` and `WhyWhatHow` are leaf
 * components — neither renders the other, and neither renders a
 * `Variation`, so there is no recursion risk like the deleted
 * summary-options page had. `<img>` (not next/image) throughout, so this
 * stays a text/layout comparison rather than re-triggering image
 * optimisation for four more copies of the hero.
 *
 * Not linked from anywhere and noindexed. Delete once a direction is
 * picked.
 */

export const metadata: Metadata = {
  title: "Intro variations — internal comparison",
  robots: { index: false, follow: false },
};

const HERO_IMG = "/work/store-support/hero-composite.png";

const HEADLINE = "One app for everything that breaks in a store — and a way to fix it before raising a ticket.";

const STATEMENT = (
  <>
    The product collected tickets. <span style={{ color: "var(--accent-deep)" }}>It did not prevent them</span>.
  </>
);

const BODY = [
  "A freezer drifting out of temperature in frozen foods. A forklift down in the back room. A handheld that will not scan at the register, or a pharmacy system that will not log in. Different trades, different teams — and to the associate who found them, the same event: something stopped working and the shift is still running.",
  "Support was built around reporting it: choose a category, fill a form, submit. Troubleshooting was thin, search was a dead end, and the form arrived before anyone had tried the obvious fix — so the shortest path through the product led straight to a ticket.",
  "FixIt puts all of it behind one front door — equipment and technology, alarms and tickets — and puts the fix in front of the form.",
];

const WHY_WHAT_HOW = [
  { label: "Why", detail: "Store associates lost shift time to broken equipment and devices they could not report from the floor." },
  { label: "What", detail: "One app spanning facilities and technology, with self-resolution ahead of ticket creation." },
  { label: "How", detail: "Card sorting for the taxonomy, guided troubleshooting as step one of two, and a tracked work-order loop." },
];

function VariationLabel({ code, name, note }: { code: string; name: string; note: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline gap-4">
      <span
        className="rounded-md border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em]"
        style={{ color: "var(--ink-soft)", borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)" }}
      >
        {code}
      </span>
      <h2 className="display-title text-[var(--ink)]" style={{ fontSize: "1.35rem" }}>
        {name}
      </h2>
      <p className="body-sm max-w-[58ch]" style={{ color: "var(--ink-soft)" }}>
        {note}
      </p>
    </div>
  );
}

function QuickFacts() {
  return (
    <div
      className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-lg px-6 py-4 font-mono text-[0.72rem] uppercase tracking-[0.1em]"
      style={{ background: "var(--ds-solid-bg)", border: "1px solid var(--ds-solid-border)", color: "var(--ink-soft)" }}
    >
      <span>UX Designer</span>
      <span aria-hidden style={{ opacity: 0.4 }}>·</span>
      <span>Walmart Global Tech</span>
      <span aria-hidden style={{ opacity: 0.4 }}>·</span>
      <span>2020–2021</span>
      <span aria-hidden style={{ opacity: 0.4 }}>·</span>
      <span style={{ color: "var(--accent-deep)" }}>~580K devices, one app</span>
    </div>
  );
}

function MiniHero() {
  return (
    <div className="ds-env-dark overflow-hidden rounded-2xl" style={{ background: "var(--ds-dark)" }}>
      <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:p-10">
        <div>
          <p className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>
            FixIt · Store Support Platform · Walmart Global Tech
          </p>
          <h3 className="display-title mt-4 max-w-[22ch]" style={{ color: "var(--ds-dark-ink)", fontSize: "1.7rem", lineHeight: 1.15 }}>
            {HEADLINE}
          </h3>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.1em]" style={{ color: "var(--ds-dark-muted)" }}>
            <span>Role · UX Designer</span>
            <span>Year · 2020–2021</span>
            <span>Sector · Frontline ops</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMG} alt="" className="w-full rounded-xl" style={{ height: "auto" }} />
      </div>
    </div>
  );
}

function WhyWhatHowPanel() {
  return (
    <dl className="mt-7">
      {WHY_WHAT_HOW.map((row, i) => (
        <div key={row.label} className={`grid grid-cols-[3.5rem_1fr] items-baseline gap-5 py-4 ${i > 0 ? "ds-rule" : ""}`}>
          <dt className="ds-eyebrow">{row.label}</dt>
          <dd className="body-sm m-0" style={{ color: "var(--ink-soft)" }}>
            {row.detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function OverviewGrid({ panel }: { panel: React.ReactNode }) {
  return (
    <div className="mt-9 grid grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
      <div>
        <p className="eyebrow">Overview</p>
        <p className="display-title mt-4 max-w-[16ch] text-[var(--ink)]" style={{ fontSize: "clamp(1.5rem, 2vw, 2.1rem)", lineHeight: 1.14 }}>
          {STATEMENT}
        </p>
        {panel}
      </div>
      <div className="space-y-5">
        {BODY.map((p) => (
          <p key={p} className="body-text">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyExplorationsPage() {
  return (
    <div className="ds-scope pb-32">
      <header className="mx-auto w-full max-w-[85rem] px-5 pt-14 md:px-8">
        <p className="eyebrow">Internal · not linked</p>
        <h1 className="display-title mt-4 max-w-[30ch]" style={{ fontSize: "2.4rem", lineHeight: 1.08 }}>
          Four ways to open the same case study.
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
          Same headline, same statement, same body prose, same hero image throughout — only the composition
          changes. Grounded in what the UXfolio benchmark research says a strong open does: state the
          problem before the solution, make the reasoning visible, and let a skimmer triage fast.
        </p>
      </header>

      {/* ── 1 · Shipped baseline ────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[70rem] px-5 pt-20 md:px-8">
        <VariationLabel
          code="1"
          name="Shipped baseline"
          note="Hero, then the statement with Why/What/How underneath. What's live on Store Support today."
        />
        <MiniHero />
        <OverviewGrid panel={<WhyWhatHowPanel />} />
      </section>

      {/* ── 2 · Scale first ─────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[70rem] px-5 pt-24 md:px-8">
        <VariationLabel
          code="2"
          name="Scale first"
          note="Same as the baseline, with the ProofStrip inserted between the hero and the overview — the size of the problem lands before the argument does."
        />
        <MiniHero />
        <div className="mt-8">
          <ProofStrip
            items={[
              { value: "~5.9K", label: "daily users", glyph: "field" },
              { value: "~580K", label: "device footprint", glyph: "bars" },
              { value: "7K+", label: "weekly searches", glyph: "ring" },
            ]}
          />
        </div>
        <OverviewGrid panel={<WhyWhatHowPanel />} />
      </section>

      {/* ── 3 · Insight-led ─────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[70rem] px-5 pt-24 md:px-8">
        <VariationLabel
          code="3"
          name="Insight-led"
          note="Drops Why/What/How for a single named insight, placed where a reader has just finished the statement — the research's “what insight revealed the problem” framing, made visible instead of implied."
        />
        <MiniHero />
        <OverviewGrid
          panel={
            <div className="mt-7">
              <p className="ds-eyebrow">What the card sort found</p>
              <p className="body-sm mt-2" style={{ color: "var(--ink-soft)" }}>
                The floor doesn&apos;t think in support categories. It thinks in problems — a department, a
                device, a person to call.
              </p>
            </div>
          }
        />
      </section>

      {/* ── 4 · Triage first ────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[70rem] px-5 pt-24 md:px-8 md:pb-4">
        <VariationLabel
          code="4"
          name="Triage first"
          note="A one-line quick-facts strip ahead of everything, then scale, then the baseline overview — every signal a three-second skim needs, in order, before the reader decides to keep going."
        />
        <QuickFacts />
        <MiniHero />
        <div className="mt-8">
          <ProofStrip
            items={[
              { value: "~5.9K", label: "daily users", glyph: "field" },
              { value: "~580K", label: "device footprint", glyph: "bars" },
              { value: "7K+", label: "weekly searches", glyph: "ring" },
            ]}
          />
        </div>
        <OverviewGrid panel={<WhyWhatHowPanel />} />
      </section>

      {/* ── 5 · Insight, spoken ─────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[85rem] px-5 pt-28 md:px-8">
        <VariationLabel
          code="5"
          name="Insight, full-bleed"
          note="Same insight as option 3, given a full-width dark moment instead of sitting in the sidebar — for comparison against how loud that reasoning should be."
        />
        <PullStatement eyebrow="What the card sort found" mark="connection">
          The floor doesn&apos;t think in support categories. It thinks in problems — a department, a
          device, a person to call.
        </PullStatement>
      </section>
    </div>
  );
}
