import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CaseStudyFigure } from "@/components/design-system/CaseStudy";
import { ConfidentialNote } from "@/components/design-system/ConfidentialNote";
import { FullWidthStatement } from "@/components/design-system/FullWidthStatement";
import { GlyphSectionRow } from "@/components/design-system/GlyphSectionRow";
import { PlatformExplainer } from "@/components/design-system/PlatformExplainer";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { SpecList } from "@/components/design-system/SpecList";

/**
 * A summary designed as a page of its own, not as the case study with its
 * chapters hidden. Preview only: unlinked, and not indexed.
 *
 * Read top to bottom in about a minute: what it is, whether it worked, why it
 * was needed, what was built, what I did, and the film that shows the platform
 * working. Every line is the case study's own wording; nothing here is new.
 */
export const metadata: Metadata = {
  title: "Portfolio Management Platform — Summary",
  robots: { index: false, follow: false },
};

export default function PortfolioManagementSummaryV2() {
  return (
    <div className="ds-scope">
      <div className="mx-auto w-full max-w-[80rem] px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
        <div className="page-hero hero-in">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] md:gap-16">
            <Reveal>
              <p className="eyebrow">Summary · Portfolio Management Platform</p>
              <h1 className="display-title display-hero mt-4 max-w-[18ch] text-[var(--ink)]">
                From a goal to the work,{" "}
                <span className="text-[var(--accent-deep)]">in one place</span>.
              </h1>
              <p className="mt-8 max-w-[44ch] text-lg leading-8 text-[var(--ink-soft)]">
                Where Walmart’s product organisation plans its portfolio, and sees the work behind it.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <SpecList
                facts={[
                  { label: "Role", value: "Senior UX Designer" },
                  { label: "Client", value: "Walmart Global Tech" },
                  { label: "Year", value: "2023–Present" },
                  { label: "Discipline", value: "Enterprise platform · Product design" },
                ]}
              />
            </Reveal>
          </div>
        </div>

        <section className="mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14">
          <Reveal>
            <p className="eyebrow mb-6">What changed</p>
            <ProofStrip
              items={[
                { value: "800+ hrs", label: "reclaimed every week", glyph: "field" },
                { value: "3,500+ days", label: "of manual effort eliminated in 2025", glyph: "layers" },
                { value: "$100K", label: "average yearly licence cost saved", glyph: "drop" },
                { value: "50%", label: "fewer support tickets", glyph: "bars" },
              ]}
            />
            <p className="mt-4 text-[0.85rem] text-[var(--muted)]">
              Hours are reported by the product managers. Licence figure is the average yearly cost saved by retiring
              redundant licences.
            </p>
          </Reveal>
        </section>

        <section className="mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14">
          <GlyphSectionRow glyph="field" heading="People were the only link between the plan and the work.">
            <p className="text-[1.08rem] leading-8 text-[var(--ink-soft)]">
              Leaders guessed at progress each quarter. Engineers searched across platforms for one answer. Data quality
              champions and finance chased approvals through email and Slack, and every change needed a ticket.
            </p>
          </GlyphSectionRow>
        </section>

        <section className="mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14">
          <GlyphSectionRow glyph="funnel" heading="The platform became the link.">
            <p className="text-[1.08rem] leading-8 text-[var(--ink-soft)]">
              Pfolio replaced four external tools with one platform. A goal connects to an initiative, a product and a
              person, then to the Jira epic (the group of tickets) the work is tagged to. Planned headcount sits beside
              actual headcount from Jira, so a blocked team shows up.
            </p>
          </GlyphSectionRow>
        </section>

        <section className="mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14">
          <GlyphSectionRow glyph="modules" heading="Three product managers, three engineering teams, one designer.">
            <p className="text-[1.08rem] leading-8 text-[var(--ink-soft)]">
              I ran the sessions that set the problem, designed a sprint ahead of each team, and got every product
              manager to plan for the whole product, not only their piece.
            </p>
          </GlyphSectionRow>
        </section>

        <section className="mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14">
          <Reveal>
            <CaseStudyFigure label="The case at a glance">
              <PlatformExplainer />
            </CaseStudyFigure>
          </Reveal>
        </section>

        <section className="mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14">
          <Reveal>
            <FullWidthStatement bare>A plan is only as good as its link to the work.</FullWidthStatement>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/work/portfolio-management" className="button button-primary">
                Read the full case study →
              </Link>
              <ConfidentialNote />
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
