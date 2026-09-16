import type { Metadata } from "next";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";

/**
 * Internal comparison — three ways to apply the "context before solution,
 * make the reasoning visible" pattern from the UXfolio benchmark research
 * (blog.uxfol.io/ux-portfolio-examples) on top of the Why/What/How
 * overview already shipped on Store Support.
 *
 * Every panel below is independent — no shared local component renders
 * another panel, so there is no recursion risk like the deleted
 * /work/summary-options had.
 *
 * Not linked from anywhere and noindexed. Delete once a direction is
 * picked.
 */

export const metadata: Metadata = {
  title: "Case-study patterns — internal comparison",
  robots: { index: false, follow: false },
};

export default function CaseStudyExplorationsPage() {
  return (
    <div className="ds-scope pb-32">
      <header className="mx-auto w-full max-w-[85rem] px-5 pt-14 md:px-8">
        <p className="eyebrow">Internal · not linked</p>
        <h1 className="display-title mt-4 max-w-[30ch]" style={{ fontSize: "2.4rem", lineHeight: 1.08 }}>
          Three more ways to make the reasoning visible.
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
          The research behind the Why/What/How overview (already shipped on Store Support) also called out
          two things that pattern doesn&apos;t cover on its own: showing scale before the argument, so a
          reader knows the stakes early, and naming the insight that produced a decision, not just the
          decision itself. These three options try that on real Store Support content.
        </p>
      </header>

      {/* ── A · Outcome-first strip ─────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[85rem] px-5 pt-20 md:px-8">
        <div className="flex flex-wrap items-baseline gap-4">
          <span
            className="rounded-md border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em]"
            style={{ color: "var(--ink-soft)", borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)" }}
          >
            A
          </span>
          <h2 className="display-title text-[var(--ink)]" style={{ fontSize: "1.35rem" }}>
            Scale, right after the hero
          </h2>
          <p className="body-sm max-w-[56ch]" style={{ color: "var(--ink-soft)" }}>
            A ProofStrip between the hero and the overview — the reader knows the size of the problem before
            reading a word of the argument. Doesn&apos;t reveal the fix, only the stakes.
          </p>
        </div>
        <div className="mt-8">
          <ProofStrip
            items={[
              { value: "~5.9K", label: "daily users", glyph: "field" },
              { value: "~580K", label: "device footprint", glyph: "bars" },
              { value: "7K+", label: "weekly searches", glyph: "ring" },
            ]}
          />
        </div>
      </section>

      {/* ── B · Insight-led decision callout ────────────────────────────── */}
      <section className="mx-auto w-full max-w-[85rem] px-5 pt-24 md:px-8">
        <div className="flex flex-wrap items-baseline gap-4">
          <span
            className="rounded-md border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em]"
            style={{ color: "var(--ink-soft)", borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)" }}
          >
            B
          </span>
          <h2 className="display-title text-[var(--ink)]" style={{ fontSize: "1.35rem" }}>
            Name the insight, then the decision
          </h2>
          <p className="body-sm max-w-[56ch]" style={{ color: "var(--ink-soft)" }}>
            The research&apos;s cause-and-effect framing (&quot;what insight revealed the problem, how was it
            interpreted&quot;) as a short pull-quote sitting between a chapter&apos;s heading and its body —
            an insight, not a restated headline.
          </p>
        </div>
        <div className="mt-9">
          <PullStatement eyebrow="What the card sort found" mark="connection">
            The floor doesn&apos;t think in support categories. It thinks in problems — a department, a
            device, a person to call.
          </PullStatement>
        </div>
      </section>

      {/* ── C · Quick-facts strip above the hero ────────────────────────── */}
      <section className="mx-auto w-full max-w-[85rem] px-5 pt-24 md:px-8">
        <div className="flex flex-wrap items-baseline gap-4">
          <span
            className="rounded-md border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em]"
            style={{ color: "var(--ink-soft)", borderColor: "var(--ds-solid-border)", background: "var(--ds-solid-bg)" }}
          >
            C
          </span>
          <h2 className="display-title text-[var(--ink)]" style={{ fontSize: "1.35rem" }}>
            Orient in one line, before the headline
          </h2>
          <p className="body-sm max-w-[56ch]" style={{ color: "var(--ink-soft)" }}>
            A one-line strip above the hero headline — role, client, timeframe, and the single number that
            matters — for a reader deciding in three seconds whether to keep reading. Sits above the hero
            rather than replacing its Role/Client/Year meta, which stays for the reader who does keep going.
          </p>
        </div>
        <div
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-lg px-6 py-4 font-mono text-[0.72rem] uppercase tracking-[0.1em]"
          style={{ background: "var(--ds-solid-bg)", border: "1px solid var(--ds-solid-border)", color: "var(--ink-soft)" }}
        >
          <span>UX Designer</span>
          <span aria-hidden style={{ opacity: 0.4 }}>
            ·
          </span>
          <span>Walmart Global Tech</span>
          <span aria-hidden style={{ opacity: 0.4 }}>
            ·
          </span>
          <span>2020–2021</span>
          <span aria-hidden style={{ opacity: 0.4 }}>
            ·
          </span>
          <span style={{ color: "var(--accent-deep)" }}>~580K devices, one app</span>
        </div>
      </section>
    </div>
  );
}
