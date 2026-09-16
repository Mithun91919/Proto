import type { Metadata } from "next";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";

/**
 * Internal comparison — one recommendation, then every full-bleed opening
 * (hero through overview) tested to get there, for Store Support.
 *
 * Every hero is full-bleed now, not just the later options — `.ds-pull`
 * (the site's own full-bleed mechanism) only breaks out to the viewport
 * edge as a direct section child, so each section here puts its label
 * text in a contained wrapper, the hero as a bare sibling, then a second
 * contained wrapper for whatever follows. Nesting a `.ds-pull` inside a
 * `max-w` div (the mistake in an earlier pass here) just makes it 100%
 * of that div, not the viewport.
 *
 * Every leaf component (`FullBleedHero`, `PosterHero`, `WhyWhatHowPanel`,
 * `WhyWhatHowAndMetrics`, `QuickFacts`) is independent — none renders
 * another, and none renders a section, so there is no recursion risk
 * like the deleted summary-options page had. `<img>` (not next/image)
 * throughout, so this stays a layout comparison rather than
 * re-triggering image optimisation for every copy of the hero.
 *
 * Not linked from anywhere and noindexed. Delete once a direction is
 * picked.
 */

export const metadata: Metadata = {
  title: "Intro variations — internal comparison",
  robots: { index: false, follow: false },
};

const HERO_IMG = "/work/store-support/hero-composite.png";

/** Store Support's own accent from projects.ts — reused here rather than
    a fresh pick, so the poster ties back to that project's real colour
    identity instead of an arbitrary brand hue. */
const PROJECT_ACCENT = "#4A3428";

const HEADLINE = "One app for everything that breaks in a Walmart store.";

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

function FullBleedHero() {
  return (
    <div className="ds-pull">
      <div className="ds-pull-inner">
        <span className="ds-pull-dots" aria-hidden />
        <p className="ds-eyebrow ds-pull-eyebrow">FixIt · Store Support Platform · Walmart Global Tech</p>
        <h3
          className="display-title max-w-[24ch]"
          style={{ color: "var(--ds-dark-ink)", fontSize: "clamp(2rem, 4.2vw, 3.1rem)", lineHeight: 1.08 }}
        >
          {HEADLINE}
        </h3>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.1em]" style={{ color: "var(--ds-dark-muted)" }}>
          <span>Role · UX Designer</span>
          <span>Year · 2020–2021</span>
          <span>Sector · Frontline ops</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMG} alt="" className="mt-10 w-full rounded-xl" style={{ maxWidth: "60rem" }} />
      </div>
    </div>
  );
}

/** A brand-poster hero — solid colour field, a dot-field texture, bold
    type, corner-anchored labels. Reuses the exact radial-gradient dot
    texture technique `.ds-scene-banner-empty` already uses for a
    photo-less hero band, just scaled up and tinted white-on-colour
    instead of mint-on-dark, plus the project's own accent as the field
    instead of `--ds-dark` — a scaled reference to the reference image
    (a Firefox campaign poster: solid colour, a scattered geometric dot
    pattern, bold type bottom-left, wordmark top-right, URL bottom-right). */
function PosterHero() {
  return (
    <div className="ds-pull" style={{ background: PROJECT_ACCENT }}>
      <div
        className="ds-pull-inner"
        style={{
          backgroundImage: "radial-gradient(color-mix(in oklab, white 24%, transparent) 1.8px, transparent 2px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.9)" }}>
            FixIt
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.65)" }}>
            Walmart Global Tech
          </p>
        </div>
        <h3
          className="display-title mt-14 max-w-[16ch]"
          style={{ color: "#fff", fontSize: "clamp(2.3rem, 5.6vw, 4.1rem)", lineHeight: 1.03 }}
        >
          {HEADLINE}
        </h3>
        <div
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t pt-6 font-mono text-[0.68rem] uppercase tracking-[0.1em]"
          style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.65)" }}
        >
          <span>UX Designer · 2020–2021 · Frontline ops</span>
          <span>fixit.walmart</span>
        </div>
      </div>
    </div>
  );
}

/** Reasoning and scale as one card, not two separate blocks — modelled on
    how Ramotion's own case studies pair an "About" paragraph with a
    plain fact column (Length / Products / Team) rather than folding
    everything into one dense mixed panel: Why/What/How stacked on the
    left reads as prose-weight reasoning, the metrics on the right read
    as a plain fact list, and a single vertical rule is the only thing
    joining them. */
function WhyWhatHowAndMetrics() {
  return (
    <div className="rounded-2xl p-8 md:p-12" style={{ border: "1px solid var(--ds-solid-border)", background: "var(--ds-solid-bg)" }}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_auto_0.8fr] md:gap-12">
        <dl className="space-y-7">
          {WHY_WHAT_HOW.map((row) => (
            <div key={row.label}>
              <dt className="ds-eyebrow">{row.label}</dt>
              <dd className="body-text m-0 mt-2">{row.detail}</dd>
            </div>
          ))}
        </dl>

        <div aria-hidden className="hidden md:block" style={{ width: 1, background: "var(--ds-solid-border)" }} />

        <dl className="space-y-6">
          {[
            { value: "~5.9K", label: "daily users" },
            { value: "~580K", label: "device footprint" },
            { value: "7K+", label: "weekly searches" },
          ].map((m) => (
            <div key={m.label}>
              <dt className="display-title" style={{ fontSize: "1.7rem", color: "var(--accent-deep)" }}>
                {m.value}
              </dt>
              <dd className="ds-eyebrow m-0 mt-1">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
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
          One recommendation, then the comparisons behind it.
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
          The picture below is the actual answer — full-bleed, poster-referenced, Why/What/How and the
          metrics sharing one card. Everything under &quot;The comparisons&quot; is the working that got here,
          kept for reference, not seven equal options to choose between.
        </p>
      </header>

      {/* ── Recommended ─────────────────────────────────────────────────── */}
      <section className="pt-14">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <div className="mb-8 flex flex-wrap items-baseline gap-4">
            <span
              className="rounded-md px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em]"
              style={{ color: "#fff", background: "var(--accent-deep)" }}
            >
              Recommended
            </span>
            <p className="body-sm max-w-[58ch]" style={{ color: "var(--ink-soft)" }}>
              Full-bleed poster hero (built from the Firefox reference, on Store Support&apos;s own accent) —
              headline stated plainly, product and client as corner labels, no sidebar. Directly under it,
              reasoning and scale share one card at equal visual weight — Ramotion&apos;s prose-plus-fact-list
              split, not a strip of metrics bolted onto a Why/What/How sidebar.
            </p>
          </div>
        </div>
        <PosterHero />
        <div className="mx-auto mt-12 w-full max-w-[85rem] px-5 md:px-8">
          <WhyWhatHowAndMetrics />
          <div className="mt-10 max-w-[70rem] space-y-5">
            {BODY.map((p) => (
              <p key={p} className="body-text">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-28 w-full max-w-[85rem] px-5 md:px-8">
        <p className="eyebrow">The comparisons</p>
        <h2 className="display-title mt-4 max-w-[40ch]" style={{ fontSize: "1.6rem" }}>
          Six ways this got tested — kept for reference, not for picking from again.
        </h2>
      </div>

      {/* ── 1 · Shipped baseline ────────────────────────────────────────── */}
      <section className="pt-20">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <VariationLabel
            code="1"
            name="Shipped baseline"
            note="Hero, then the statement with Why/What/How underneath. What's live on Store Support today — full-bleed here too, so it's a fair comparison against the rest."
          />
        </div>
        <FullBleedHero />
        <div className="mx-auto w-full max-w-[70rem] px-5 md:px-8">
          <OverviewGrid panel={<WhyWhatHowPanel />} />
        </div>
      </section>

      {/* ── 2 · Scale first ─────────────────────────────────────────────── */}
      <section className="pt-24">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <VariationLabel
            code="2"
            name="Scale first"
            note="Same as the baseline, with the ProofStrip inserted between the hero and the overview — the size of the problem lands before the argument does."
          />
        </div>
        <FullBleedHero />
        <div className="mx-auto w-full max-w-[70rem] px-5 md:px-8">
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
        </div>
      </section>

      {/* ── 3 · Insight-led ─────────────────────────────────────────────── */}
      <section className="pt-24">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <VariationLabel
            code="3"
            name="Insight-led"
            note="Drops Why/What/How for a single named insight, placed where a reader has just finished the statement — the research's “what insight revealed the problem” framing, made visible instead of implied."
          />
        </div>
        <FullBleedHero />
        <div className="mx-auto w-full max-w-[70rem] px-5 md:px-8">
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
        </div>
      </section>

      {/* ── 4 · Triage first ────────────────────────────────────────────── */}
      <section className="pt-24">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <VariationLabel
            code="4"
            name="Triage first"
            note="A one-line quick-facts strip ahead of everything, then the full-bleed hero, then scale, then the baseline overview — every signal a three-second skim needs, in order, before the reader decides to keep going."
          />
          <QuickFacts />
        </div>
        <FullBleedHero />
        <div className="mx-auto w-full max-w-[70rem] px-5 md:px-8 md:pb-4">
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
        </div>
      </section>

      {/* ── 5 · Insight, spoken ─────────────────────────────────────────── */}
      <section className="pt-28">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <VariationLabel
            code="5"
            name="Insight, full-bleed"
            note="Same insight as option 3, given a full-width dark moment instead of sitting in the sidebar — for comparison against how loud that reasoning should be. (This one was already full-bleed — the other four weren't, which is the gap this pass closes.)"
          />
        </div>
        <PullStatement eyebrow="What the card sort found" mark="connection">
          The floor doesn&apos;t think in support categories. It thinks in problems — a department, a
          device, a person to call.
        </PullStatement>
      </section>

      {/* ── 6 · Full-bleed hero, evidence as one section ─────────────────── */}
      <section className="pt-28">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <VariationLabel
            code="6"
            name="Full-bleed hero, dark ground"
            note="The same evidence card as the recommendation above, but on the site's standard dark full-bleed band instead of the project's own accent colour and dot texture — the step right before bringing the poster reference in. Kept to show why the colour field reads stronger than the default dark."
          />
        </div>
        <FullBleedHero />
        <div className="mx-auto mt-12 w-full max-w-[85rem] px-5 md:px-8">
          <WhyWhatHowAndMetrics />
          <div className="mt-10 max-w-[70rem] space-y-5">
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
