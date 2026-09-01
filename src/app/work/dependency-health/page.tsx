import type { Metadata } from "next";
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
 * Dependency Health Platform — on the locked case-study template.
 *
 * Prose verbatim from `projects/dependency-management/web/*.md`.
 *
 * The draft is explicit that the programme is active and that it would
 * rather show verified change than invent a stronger metric, so the only
 * figure on the page is the 148-repository pilot the draft states.
 */

export const metadata: Metadata = {
  title: "Dependency Health Platform — Turning compliance data into clear actions",
  description:
    "A dependency-health platform translating technical signals into repository health, organisation visibility, and guided remediation.",
};

const DECISION_MODEL = ["Summary for orientation", "Diagnosis for understanding", "Action for resolution"];
const HEALTH_PATH = ["Overall health", "Underlying signals", "Remediation"];
const SCALE = ["Repository", "Pillar", "Organisation", "Reporting"];
const TOKEN_PATH = ["Component", "Semantic token", "Theme"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "not-data", label: "Not a data problem" },
  { id: "decision-model", label: "Decision model" },
  { id: "guided", label: "Guided path" },
  { id: "scale", label: "Scale" },
  { id: "tokens", label: "Tokens" },
  { id: "evidence", label: "Evidence" },
];

export default function DependencyHealthPage() {
  const onward = getProject("store-support");

  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        eyebrow: "Dependency Health Platform · Walmart Global Tech",
        headline: "Turning dependency compliance data into clear actions developers can take.",
        meta: [
          { label: "Role", value: "Senior UX Designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2025–Present" },
          { label: "Discipline", value: "Developer platform · Product design" },
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
                The data existed. <span className="text-[var(--accent-deep)]">The decisions did not</span>.
              </>
            }
            note="End-to-end UX owner."
            body={[
              "Large Java application ecosystems generate a lot of dependency data: standard-library versions, Java versions, security signals, conflicts, version drift, onboarding state, and technical debt.",
              "The data existed. The harder problem was helping developers and engineering leaders understand what mattered, why it mattered, and what to do next.",
              "I own the UX for a dependency-health platform that translates those technical signals into repository health, organisation-level visibility, and guided remediation.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              needs="A hero showing the arc the product supports: repository health, then diagnosis, then action."
              source="Draft beat: MEDIA — HERO"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="not-data">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The problem"
            heading="The problem was not a lack of data"
            body={[
              "Teams often discovered dependency debt during migrations, breakages, or security work rather than through proactive visibility.",
              "At the same time, exposing every available technical signal would have created a complete but overwhelming dashboard.",
              "A developer asks: is my repository healthy, and what should I fix first? A manager asks: which teams are falling behind? A platform administrator asks: what is the state of adoption and compliance across the organisation?",
              "The same underlying data needed a different hierarchy at each level.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="diagram"
              ratio={16 / 9}
              needs="The three audiences against the first question each asks and the information that answers it — developer, manager, platform administrator."
              source="Draft beat: VISUAL — AUDIENCE → FIRST QUESTION → INFORMATION NEEDED"
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What research pointed to" mark="connection">
          The data needed to be organised around the decisions people were trying to make.
        </PullStatement>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="decision-model" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            eyebrow="The model"
            heading="We turned technical signals into a decision model"
            body={[
              "The highest-leverage design work happened before the dashboard.",
              "I mapped signals such as the approved library baseline, Java version, feature-library freshness, conflicts, and version drift against two questions: who needs this, and what decision does it help them make?",
              "That produced a layered health model rather than a wall of metrics. For a repository, the experience begins with a concise overall state and the issues requiring attention. Detail opens progressively for diagnosis. The next action remains close to the status that created the question.",
            ]}
          />
          <CaseStudyFigure rule label="The interaction principle">
            <DotFlow stages={DECISION_MODEL} />
          </CaseStudyFigure>
          <CaseStudyFigure rule label="How a repository view opens up">
            <DotFlow stages={HEALTH_PATH} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="guided">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Remediation"
            heading="Compliance became a guided path, not a warning state"
            body={[
              "Repositories that are behind may need several technical changes in sequence: updating enforcement, removing legacy libraries, upgrading Java, or adopting the current standard-library baseline.",
              "A red status can tell an engineer something is wrong without helping them understand how to recover.",
              "I designed onboarding and remediation as a progressive journey. The current step is explicit, completed work remains visible, dependencies between steps are clear, and each stage explains the expected action and outcome.",
              "Where automation can help create the required code change, it appears at the point of action rather than as a disconnected capability.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              ratio={16 / 9}
              needs="The guided onboarding and remediation flow, showing the current step, completed steps, and the dependencies between them."
              source="Draft beat: MEDIA — GUIDED ONBOARDING / REMEDIATION FLOW"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="scale">
          <CaseStudyChapter
            eyebrow="Scale"
            heading="The same health model had to work at different levels of scale"
            body={[
              "Repository health is useful to an individual team. It becomes a different design problem when leaders need to understand hundreds of repositories together.",
              "Pillar and organisation views aggregate the same health model for comparison and prioritisation, while governance reporting opens into deeper filtering and analysis.",
              "The product therefore uses one underlying language across different decision contexts rather than inventing a new dashboard at every level.",
            ]}
          />
          <CaseStudyFigure rule label="One model, four levels">
            <DotFlow stages={SCALE} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="tokens">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="After launch"
            heading="Post-launch feedback became a systems problem"
            body={[
              "After launch, developers had different preferences for how dashboard states should be represented visually.",
              "Instead of hard-coding alternate colours into individual components, we moved the product toward semantic design tokens and theme-level control. The same meaning could remain consistent while presentation changed across themes.",
              "That turned a local preference request into a more maintainable platform decision.",
            ]}
          />
          <CaseStudyFigure rule label="Where the decision moved to">
            <DotFlow stages={TOKEN_PATH} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="evidence">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Current evidence"
            heading="What can be shown today"
            body={[
              "The product is live and continues to evolve. The initial major-version pilot covered 148 repositories, and the platform now supports dependency-health visibility from individual repositories through pillar and organisation views, alongside self-service onboarding and remediation.",
              "Because the programme is active, I would rather show verified adoption and workflow changes than invent a stronger-looking outcome metric.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "148", label: "repositories in the initial major-version pilot", glyph: "field" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What I believe now" mark="seam">
          A compliance state should always explain the path forward, not only what is wrong.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
