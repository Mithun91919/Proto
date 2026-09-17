import type { Metadata } from "next";
import { CompactNumeral } from "@/components/design-system/CompactNumeral";
import { MetricGlyph } from "@/components/design-system/MetricGlyph";

/**
 * Internal working draft of the Store Support case-study intro.
 *
 * The hero is settled. What is being chosen here is the evidence card
 * under it — three layouts of identical copy, so the comparison is about
 * the design and nothing else.
 *
 * What was wrong with the previous card: three paragraphs of near-equal
 * length at one weight and one colour, inside a plain rounded box. No
 * entry point, nothing scannable, 622px tall for three ideas. The copy
 * now leads each beat with a short declarative line and demotes the
 * supporting sentence, so the three lead lines alone carry the argument.
 *
 * `.ds-pull` only reaches the viewport edge as a direct section child, so
 * each section puts label text in a contained wrapper and the hero as a
 * bare sibling. Every component below is a leaf — none renders another —
 * which is the rule that got broken last time and hung the dev server.
 *
 * Not linked from anywhere and noindexed.
 */

export const metadata: Metadata = {
  title: "Intro card — three layouts",
  robots: { index: false, follow: false },
};

const HERO_IMG = "/work/store-support/hero-composite.png";
const HERO_FLOOR = "clamp(5rem, 9vw, 8rem)";

/**
 * Why = the problem, What = the task, How = what I did and what changed.
 * `lead` is the claim; `detail` is the evidence for it. Reading only the
 * three leads should still tell the story.
 */
/**
 * Problem / Task / What I did — "Why/What/How" made a reader work out
 * which beat was which, and "What" kept reading as "what was built".
 *
 * `lead` is the claim, `detail` the evidence. Reading only the three
 * leads should still tell the story. Details name a concrete object
 * where they can (a cooler, a forklift): a stranger has no picture of a
 * Walmart back room, and abstractions like "an operational tool" leave
 * them without one.
 */
const BEATS = [
  {
    label: "Problem",
    lead: "Reporting a fault cost more than fixing it.",
    detail:
      "An associate who found a cooler failing had to track down a manager with a desktop. Troubleshooting was thin, search dead-ended, and the form arrived before anyone had tried the obvious fix.",
  },
  {
    label: "Task",
    lead: "Redesign frontline support, end to end.",
    detail:
      "One mobile experience covering both halves of the floor — the building and the technology inside it — for associates supporting ~580K devices, and for the support teams receiving what they send.",
  },
  {
    label: "What I did",
    lead: "Put the fix in front of the form.",
    detail:
      "Rebuilt the taxonomy from card sorting with associates, made guided resolution step one of two, and gave work orders a loop they could track, annotate and escalate — so a ticket became the fallback, not the first move.",
  },
];

const METRICS = [
  { value: "~5.9K", label: "daily users", glyph: "field" },
  { value: "~580K", label: "devices supported", glyph: "ring" },
  { value: "7K+", label: "searches a week", glyph: "bars" },
] as const;

const CAVEAT = "Scale of the experience during the documented period — not a resolution claim.";

function Hero() {
  // "Frontline ops" is internal vocabulary; platform is what a
  // stranger actually wants to know here.
  const meta = ["UX Designer", "Mobile app", "2020–2021"];
  return (
    <div className="ds-pull">
      <div className="ds-pull-inner" style={{ paddingBottom: HERO_FLOOR }}>
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.82fr_1.4fr] lg:gap-12">
          <div className="flex items-center">
            <div>
              <span className="ds-pull-dots" aria-hidden />
              <p className="ds-eyebrow ds-pull-eyebrow">FixIt · Store Support Platform · Walmart Global Tech</p>
              <h2
                /* "...in a Walmart store" is gone: the eyebrow already
                   names Walmart and the standfirst names the associates,
                   so it was the third mention in four lines — and at this
                   column width it pushed the headline to four ragged
                   lines with "everything" stranded alone. */
                className="display-title max-w-[18ch]"
                style={{
                  color: "var(--ds-dark-ink)",
                  fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.015em",
                }}
              >
                One app for <span style={{ color: "var(--ds-mint)" }}>everything that breaks</span>.
              </h2>
              {/* Standfirst. The single highest-value line for a cold
                  reader: what it is, who opens it, and the condition
                  they are in when they do. */}
              <p
                className="mt-6 max-w-[42ch] text-base leading-7"
                style={{ color: "var(--ds-dark-muted)" }}
              >
                The app Walmart store associates open when something in the store stops working — a cooler,
                a forklift, a handheld, the network. Used mid-shift, on the floor, by someone who just wants
                to get back to the job.
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

const CARD_SHELL: React.CSSProperties = {
  border: "1px solid var(--ds-solid-border)",
  background: "var(--paper)",
  boxShadow: "0 28px 60px -32px rgb(6 17 21 / 0.55)",
};

/** A · Editorial rows. The beats run full width as numbered rows (S6's
    dot numeral), lead line at display scale, detail demoted beneath.
    Metrics become a footer strip rather than a side column, so the
    reasoning gets the whole measure. */
function CardEditorial({ pull }: { pull: string }) {
  return (
    <div className="relative z-[1] rounded-2xl p-8 md:p-12" style={{ ...CARD_SHELL, marginTop: pull }}>
      <div className="flex flex-col">
        {BEATS.map((b, i) => (
          <div
            key={b.label}
            className={`grid grid-cols-1 gap-4 py-7 md:grid-cols-[4.5rem_0.95fr_1.05fr] md:gap-10 ${i > 0 ? "ds-rule" : ""}`}
          >
            <div className="flex items-start gap-3 pt-1">
              <CompactNumeral value={`0${i + 1}`} />
            </div>
            <div>
              <p className="ds-eyebrow" style={{ color: "var(--accent-deep)" }}>
                {b.label}
              </p>
              <p className="display-title mt-2.5" style={{ fontSize: "1.3rem", lineHeight: 1.25 }}>
                {b.lead}
              </p>
            </div>
            <p className="body-sm m-0 md:pt-8" style={{ color: "var(--ink-soft)" }}>
              {b.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="ds-rule mt-4 grid grid-cols-1 gap-8 pt-9 sm:grid-cols-3">
        {METRICS.map((m) => (
          <div key={m.label} className="flex items-center gap-4">
            <span aria-hidden>
              <MetricGlyph name={m.glyph} size={5} gap={3} />
            </span>
            <span>
              <span
                className="display-title block"
                style={{ fontSize: "1.55rem", lineHeight: 1, color: "var(--accent-deep)" }}
              >
                {m.value}
              </span>
              <span className="ds-eyebrow mt-1.5 block">{m.label}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="ds-note mt-7">{CAVEAT}</p>
    </div>
  );
}

/** B · Three columns. Scale lands first as a strip across the top, then
    the beats sit side by side so they read as parallel rather than as a
    stack of paragraphs. The most compact of the three. */
function CardColumns({ pull }: { pull: string }) {
  return (
    <div className="relative z-[1] rounded-2xl p-8 md:p-12" style={{ ...CARD_SHELL, marginTop: pull }}>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {METRICS.map((m) => (
          <div key={m.label} className="flex items-center gap-4">
            <span aria-hidden>
              <MetricGlyph name={m.glyph} size={5} gap={3} />
            </span>
            <span>
              <span
                className="display-title block"
                style={{ fontSize: "1.55rem", lineHeight: 1, color: "var(--accent-deep)" }}
              >
                {m.value}
              </span>
              <span className="ds-eyebrow mt-1.5 block">{m.label}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="ds-note mt-5">{CAVEAT}</p>

      <div className="ds-rule mt-10 grid grid-cols-1 gap-10 pt-10 md:grid-cols-3 md:gap-12">
        {BEATS.map((b) => (
          <div key={b.label}>
            <p className="ds-eyebrow" style={{ color: "var(--accent-deep)" }}>
              {b.label}
            </p>
            <p className="display-title mt-3" style={{ fontSize: "1.25rem", lineHeight: 1.28 }}>
              {b.lead}
            </p>
            <p className="body-sm mt-3.5" style={{ color: "var(--ink-soft)" }}>
              {b.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** C · Dark continuation. The card carries the hero's ground down instead
    of interrupting it — one dark block from headline to evidence, the
    light page resuming only at the body copy. Leads in mint. */
function CardDark({ pull }: { pull: string }) {
  return (
    <div
      className="relative z-[1] rounded-2xl p-8 md:p-12"
      style={{
        marginTop: pull,
        background: "var(--ds-dark)",
        border: "1px solid rgb(234 243 245 / 0.12)",
        boxShadow: "0 28px 60px -32px rgb(6 17 21 / 0.8)",
      }}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.35fr_auto_0.75fr] md:gap-14">
        <dl className="space-y-8">
          {BEATS.map((b) => (
            <div key={b.label}>
              <dt className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>
                {b.label}
              </dt>
              <dd className="m-0">
                <span
                  className="display-title mt-2.5 block"
                  style={{ fontSize: "1.3rem", lineHeight: 1.25, color: "var(--ds-dark-ink)" }}
                >
                  {b.lead}
                </span>
                <span className="body-sm mt-2.5 block" style={{ color: "var(--ds-dark-muted)" }}>
                  {b.detail}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <div aria-hidden className="hidden md:block" style={{ width: 1, background: "rgb(234 243 245 / 0.12)" }} />

        <dl className="space-y-8">
          {METRICS.map((m) => (
            <div key={m.label}>
              <div className="mb-3" aria-hidden>
                <MetricGlyph name={m.glyph} size={5} gap={3} />
              </div>
              <dt
                className="display-title"
                style={{ fontSize: "1.9rem", lineHeight: 1, letterSpacing: "-0.01em", color: "var(--ds-mint)" }}
              >
                {m.value}
              </dt>
              <dd className="ds-eyebrow m-0 mt-2" style={{ color: "var(--ds-dark-muted)" }}>
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p
        className="mt-10 border-t pt-5 font-mono text-[0.62rem] uppercase tracking-[0.1em]"
        style={{ borderColor: "rgb(234 243 245 / 0.12)", color: "var(--ds-dark-muted)" }}
      >
        {CAVEAT}
      </p>
    </div>
  );
}

function Label({ code, name, note }: { code: string; name: string; note: string }) {
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

/* Each card is a different height, so the pull that reads as ~10% of it
   is different too. Measured per layout rather than shared. */
const PULL_A = "clamp(-4.75rem, -5.1vw, -2.75rem)";
const PULL_B = "clamp(-3.25rem, -3.3vw, -1.75rem)";
const PULL_C = "clamp(-4.25rem, -4.4vw, -2.5rem)";

export default function IntroCardVariationsPage() {
  return (
    <div className="ds-scope pb-32">
      <header className="mx-auto w-full max-w-[85rem] px-5 pt-14 md:px-8">
        <p className="eyebrow">Internal · not linked</p>
        <h1 className="display-title mt-4 max-w-[28ch]" style={{ fontSize: "2.4rem", lineHeight: 1.08 }}>
          Three layouts for the evidence card.
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
          Same hero, same copy in all three — only the card changes. Read cold, the intro had a gap before
          any of these layouts could help: nothing said what FixIt is or who opens it, so a first-time
          reader met &quot;reporting a fault&quot; with no idea who was reporting, from where, or on what. The
          hero now carries that line, the beats are Problem / Task / What I did, and each opens with a
          claim so the three leads alone tell the story.
        </p>
      </header>

      <section className="pt-14">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <Label
            code="A"
            name="Editorial rows"
            note="Numbered rows across the full measure — claim on the left, evidence on the right, scale as a footer strip. The most editorial, and the only one where the three beats read as a sequence."
          />
        </div>
        <Hero />
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <CardEditorial pull={PULL_A} />
        </div>
      </section>

      <section className="pt-28">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <Label
            code="B"
            name="Scale first, then three columns"
            note="Metrics land as a strip across the top, then the beats sit side by side as parallel ideas rather than a stack. The most compact — roughly half the height of the old card."
          />
        </div>
        <Hero />
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <CardColumns pull={PULL_B} />
        </div>
      </section>

      <section className="pt-28">
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <Label
            code="C"
            name="Dark continuation"
            note="The card carries the hero's ground down rather than interrupting it — one dark block from headline to evidence, with the light page resuming at the body copy. Strongest as a single opening moment; the heaviest on the eye."
          />
        </div>
        <Hero />
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-8">
          <CardDark pull={PULL_C} />
        </div>
      </section>
    </div>
  );
}
