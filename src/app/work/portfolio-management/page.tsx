import type { Metadata } from "next";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { DotFlow } from "@/components/design-system/DotFlow";
import { MediaPlaceholder } from "@/components/design-system/MediaPlaceholder";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudyOverview,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";

/**
 * Portfolio Management Platform — on the locked case-study template.
 *
 * Prose verbatim from `projects/portfolio-management/web/*.md`.
 *
 * This project has no assets at all. Where the draft asks for a diagram, it
 * reconstructs in the dot/model language — a drawing invents nothing. Where
 * the draft asks for product imagery, a `MediaPlaceholder` states what is
 * needed and holds the space at the right ratio.
 */

export const metadata: Metadata = {
  title: "Portfolio Management Platform — Replacing five portfolio tools with one connected platform",
  description:
    "A 0-to-1 enterprise platform that consolidated five disconnected portfolio systems into one connected product.",
};

const MIGRATION = ["Legacy systems", "New modules alongside", "Reconcile data", "Retire legacy"];
const FEEDBACK_LOOP = ["Product", "Users", "Issue", "Release change"];
const DATA_PATH = ["Portfolio data", "Structured product model", "UI / conversational output"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The problem" },
  { id: "three-jobs", label: "Three jobs" },
  { id: "migration", label: "Migration" },
  { id: "pilot", label: "The pilot" },
  { id: "upstream", label: "Upstream" },
  { id: "outcomes", label: "What changed" },
];

export default function PortfolioManagementPage() {
  const onward = getProject("api-lifecycle");

  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        eyebrow: "Portfolio Management Platform · Walmart Global Tech",
        headline: "Replacing five portfolio tools with one connected platform.",
        meta: [
          { label: "Role", value: "UX Designer → Senior UX Designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2022–Present" },
          { label: "Discipline", value: "Enterprise platform · Product design" },
        ],
      }}
      next={
        onward
          ? { href: `/work/${onward.slug}`, number: onward.number, label: onward.label, title: onward.title }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyOverview
            statement={
              <>
                Five systems, <span className="text-[var(--accent-deep)]">one operating model</span>.
              </>
            }
            note="Design lead for the platform."
            body={[
              "Portfolio planning had grown across several disconnected systems. People, products, initiatives, intake, management workflows, and strategic goals lived in different places, which meant teams spent time reconciling information before they could use it.",
              "I helped shape a 0-to-1 platform that brought those workflows into one connected product and then evolved it over multiple years as legacy systems were migrated and retired.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "6K+", label: "monthly users", glyph: "field" },
                { value: "5 → 1", label: "platform consolidation", glyph: "ring" },
                { value: "6", label: "connected modules", glyph: "bars" },
              ]}
            />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="video"
              needs="A short loop of the connected product experience, used as the page hero."
              source="Draft beat: MEDIA — HERO"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="problem">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The problem"
            heading="Five tools had become one organisational problem"
            body={[
              "The original challenge looked like a collection of product problems: duplicated data, different workflows, inconsistent terminology, and teams moving between systems to understand the same portfolio.",
              "The deeper issue was that the organisation did not have one operating model for the work.",
              "Instead of treating the project as five replacement screens, we designed around the jobs the portfolio needed to support.",
            ]}
          />
          <CaseStudyFigure rule label="Before and after the consolidation">
            <BeforeAfterModel
              before={{
                heading: "Disconnected tools",
                body: "Five systems holding overlapping portfolio data, each with its own workflow and terminology.",
                lineWidths: [88, 62, 74, 45, 68],
              }}
              after={{
                heading: "One connected platform",
                body: "Six modules on a shared portfolio model, so the same information means the same thing everywhere.",
                lineWidths: [100],
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="three-jobs">
          <CaseStudyChapter
            eyebrow="The structure"
            heading="We organised the platform around three jobs"
            body={[
              "The six modules became easier to understand when they were grouped around what people were trying to accomplish.",
              "Understand the portfolio: People, Products, and Initiatives created a shared view of who owned what, how work was organised, and where investment was going.",
              "Operate the portfolio: Management and Intake workflows supported the recurring work of maintaining data, requesting changes, reviewing information, and keeping the portfolio current.",
              "Align the portfolio: Goals connected strategic themes to measurable work so leaders could move from portfolio visibility toward execution and accountability.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="diagram"
              ratio={16 / 9}
              needs="The three-job model with the six modules nested underneath — Understand (People, Products, Initiatives), Operate (Management, Intake), Align (Goals)."
              source="Draft beat: VISUAL — THREE-JOB MODEL"
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="The architecture" mark="connection">
          Each part needed to work independently while contributing to the same portfolio model.
        </PullStatement>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="migration" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Migration"
            heading="We designed the bridge, not only the destination"
            body={[
              "A replacement platform could not ask thousands of users to abandon established workflows overnight.",
              "The migration therefore happened in stages. New modules were introduced while legacy systems were still active, data and workflows were reconciled, and older tools were retired only when the replacement path was ready.",
              "That made migration part of the product design problem: users needed to understand where work had moved, what had changed, and which system was now authoritative.",
            ]}
          />
          <CaseStudyFigure rule label="The staged migration">
            <DotFlow stages={MIGRATION} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="pilot">
          <CaseStudyChapter
            eyebrow="The pilot"
            heading="Putting the product in front of users changed how we shipped it"
            body={[
              "We used frequent demos, research sessions, and live pilot feedback to expose the product before decisions became expensive to reverse.",
              "One pilot, internally called Break Dance, surfaced details that polished mockups had hidden — internal field terminology appearing in the interface, draft persistence problems, and validation behaviour that became frustrating in real work.",
              "Those sessions changed both the product and the release loop. Feedback moved closer to implementation, and design decisions were tested against the experience people actually used rather than only the one we intended to ship.",
            ]}
          />
          <CaseStudyFigure rule label="The feedback loop">
            <DotFlow stages={FEEDBACK_LOOP} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="upstream">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Where it went"
            heading="The platform kept moving upstream"
            body={[
              "What began as portfolio visibility gradually expanded into strategic execution.",
              "The Goals experience introduced a way to connect strategic themes, organisational goals, status, impact, and delivery signals in the same platform. At launch, teams created more than 1,400 goals across 14 strategic themes.",
              "More recently, the same platform data is beginning to surface beyond traditional screens through conversational and tool-based experiences. The interaction surface is changing, but the design problem is familiar: structure complex information so someone can understand it and act with confidence.",
            ]}
          />
          <CaseStudyFigure rule label="From portfolio data to any surface">
            <DotFlow stages={DATA_PATH} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="outcomes">
          <CaseStudyChapter
            eyebrow="What changed"
            heading="A clearer model, not simply fewer tools"
            body={[
              "The platform reached more than 6,000 monthly users, consolidated five legacy systems into one connected product, and established six modules on a shared operating model.",
              "Documented operational outcomes also included a sustained 50% reduction in support tickets and roughly 800 hours of manual reconciliation reclaimed each week as more portfolio work moved into connected workflows.",
              "The result was not simply fewer tools. It was a clearer model for how portfolio information could be understood, maintained, and connected to strategic execution.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "50%", label: "fewer support tickets", glyph: "bars" },
                { value: "~800 hrs", label: "manual reconciliation reclaimed weekly", glyph: "field" },
                { value: "1,400", label: "goals across 14 strategic themes", glyph: "ring" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What I believe now" mark="seam">
          For established enterprise products, the path between old and new can matter as much as the
          destination.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
