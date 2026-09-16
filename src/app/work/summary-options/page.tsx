import type { Metadata } from "next";
import { DotGrid } from "@/components/design-system/primitives/DotGrid";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { FeaturedGlyph } from "@/components/design-system/FeaturedGlyph";

/**
 * Internal comparison — three ways to open a case study, on real FixIt
 * content so the copy load is honest rather than lorem.
 *
 * The question behind it: the overview should let someone decide whether
 * to read on, and today it states the solution instead of the problem.
 * Everything below shares the same statement and the same body prose;
 * only the summary panel in the sticky left column changes.
 *
 * Not linked from anywhere and noindexed. Delete once a direction is
 * picked.
 */

export const metadata: Metadata = {
  title: "Summary treatments — internal comparison",
  robots: { index: false, follow: false },
};

/** Rewritten from the authored systemMap, which claims "Faster support
    paths" — a speed claim the web draft does not support. */
const SYSTEM_MAP = [
  {
    label: "Before",
    detail:
      "Support started at a manager's desktop, behind a category list written for the help desk.",
    // Scattered: many problems, no route through.
    dots: [1, 0.2, 1, 0.2, 0.2, 1, 1, 0.2, 0.2],
  },
  {
    label: "Intervention",
    detail: "One app on the floor. The likely fix comes first; the ticket is step two.",
    // Funnelling into a single channel.
    dots: [1, 1, 1, 0.2, 1, 0.2, 0.2, 1, 0.2],
  },
  {
    label: "After",
    detail: "A ticket became the fallback, not the first move.",
    // Resolved to one point.
    dots: [0.2, 0.2, 0.2, 0.2, 1, 0.2, 0.2, 0.2, 0.2],
  },
];

const WHY_WHAT_HOW = [
  {
    label: "Why",
    detail: "Store associates lost shift time to broken equipment and devices they could not report from the floor.",
  },
  {
    label: "What",
    detail: "One app spanning facilities and technology, with self-resolution ahead of ticket creation.",
  },
  {
    label: "How",
    detail: "Card sorting for the taxonomy, guided troubleshooting as step one of two, and a tracked work-order loop.",
  },
];

const BODY = [
  "A freezer drifting out of temperature in frozen foods. A forklift down in the back room. A handheld that will not scan at the register, or a pharmacy system that will not log in. Different trades, different teams — and to the associate who found them, the same event: something stopped working and the shift is still running.",
  "Support was built around reporting it: choose a category, fill a form, submit. Troubleshooting was thin, search was a dead end, and the form arrived before anyone had tried the obvious fix.",
  "FixIt puts all of it behind one front door — equipment and technology, alarms and tickets — and puts the fix in front of the form.",
];

function Statement() {
  return (
    <p
      className="display-title mt-4 max-w-[18ch] text-[var(--ink)]"
      style={{ fontSize: "clamp(1.6rem, 2.1vw, 2.3rem)", lineHeight: 1.12 }}
    >
      The product collected tickets.{" "}
      <span className="text-[var(--accent-deep)]">It did not prevent them</span>.
    </p>
  );
}

/** The real CaseStudyOverview grid, so each option is judged at the size
    and measure it would actually run at. */
function Frame({
  code,
  name,
  tradeoff,
  panel,
}: {
  code: string;
  name: string;
  tradeoff: string;
  panel: React.ReactNode;
}) {
  return (
    <section className="ds-section-boundary pt-14 md:pt-20">
      <div className="mb-10 flex flex-wrap items-baseline gap-4">
        <span
          className="rounded-md border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em]"
          style={{ color: "var(--ink-soft)", borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)" }}
        >
          {code}
        </span>
        <h2 className="display-title text-[var(--ink)]" style={{ fontSize: "1.35rem" }}>
          {name}
        </h2>
        <p className="body-sm max-w-[52ch]" style={{ color: "var(--ink-soft)" }}>
          {tradeoff}
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="md:sticky md:top-28">{panel}</div>
        <div className="space-y-5">
          {BODY.map((p) => (
            <p key={p} className="body-text">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SummaryOptionsPage() {
  return (
    <div className="ds-scope mx-auto w-full max-w-[85rem] px-5 pb-32 md:px-8">
      <header className="pt-14">
        <p className="eyebrow">Internal · not linked</p>
        <h1 className="display-title mt-4 max-w-[24ch]" style={{ fontSize: "2.6rem", lineHeight: 1.06 }}>
          Three ways to open a case study.
        </h1>
        <p className="mt-6 max-w-[62ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
          Same statement, same body prose, same measure. Only the summary panel changes, so the comparison
          is about the panel and nothing else. Content is real FixIt copy.
        </p>
      </header>

      {/* ── A ─────────────────────────────────────────────────────────── */}
      <Frame
        code="A"
        name="System Map, in dots"
        tradeoff="Uses the site's declared motif and the per-project data already in projects.ts. Density carries the change: scattered, funnelled, resolved."
        panel={
          <>
            <div className="flex items-center gap-3">
              <p className="eyebrow">Overview</p>
              <span aria-hidden className="opacity-70">
                <FeaturedGlyph shape="resolve" />
              </span>
            </div>
            <Statement />
            <div className="mt-7 flex flex-col">
              {SYSTEM_MAP.map((step, i) => (
                <div
                  key={step.label}
                  className={`grid grid-cols-[auto_1fr] items-start gap-4 py-4 ${i > 0 ? "ds-rule" : ""}`}
                >
                  <DotGrid cols={3} dots={step.dots} size={5} gap={3} className="mt-1" />
                  <div>
                    <p className="ds-eyebrow">{step.label}</p>
                    <p className="body-sm mt-1.5" style={{ color: "var(--ink-soft)" }}>
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />

      {/* ── B ─────────────────────────────────────────────────────────── */}
      <Frame
        code="B"
        name="Why / What / How"
        tradeoff="Most conventional and the fastest to scan. The labels are generic, so it reads the same on every project — a form rather than an argument."
        panel={
          <>
            <p className="eyebrow">Overview</p>
            <Statement />
            <dl className="mt-7">
              {WHY_WHAT_HOW.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[3.5rem_1fr] items-baseline gap-5 py-4 ${i > 0 ? "ds-rule" : ""}`}
                >
                  <dt className="ds-eyebrow">{row.label}</dt>
                  <dd className="body-sm m-0" style={{ color: "var(--ink-soft)" }}>
                    {row.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        }
      />

      {/* ── C ─────────────────────────────────────────────────────────── */}
      <Frame
        code="C"
        name="Compact synopsis"
        tradeoff="The useful half of the “AI summary” pattern — short and visually distinct — with no attribution label. Cheapest to write, but adds a panel without adding structure."
        panel={
          <>
            <p className="eyebrow">Overview</p>
            <Statement />
            <GlassPanel variant="soft" className="mt-7 rounded-2xl p-6">
              <p className="ds-eyebrow">In short</p>
              <p className="body-sm mt-3" style={{ color: "var(--ink-soft)" }}>
                Store associates lost shift time to equipment and devices they could not report from the
                floor. I redesigned frontline support as one mobile app spanning facilities and technology,
                and moved self-resolution ahead of ticket creation — so a ticket became the fallback rather
                than the first move.
              </p>
              <p className="ds-note mt-4">3 min read · Walmart Global Tech · 2020–2021</p>
            </GlassPanel>
          </>
        }
      />
    </div>
  );
}
