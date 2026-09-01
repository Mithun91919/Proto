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
 * API Lifecycle Platform — on the locked case-study template.
 *
 * Prose verbatim from `projects/api-lifecycle/web/*.md`.
 *
 * No assets exist for this project. Draft beats asking for a diagram are
 * reconstructed in the dot language; beats asking for product screens carry
 * a `MediaPlaceholder` naming what is needed.
 */

export const metadata: Metadata = {
  title: "API Lifecycle Platform — One platform to discover, design, test, and govern APIs",
  description:
    "A connected developer platform organised around three jobs: Marketplace, Design Studio, and Testing.",
};

const LIFECYCLE = ["Discovery", "Contract design", "Validation", "Testing", "Publishing", "Governance"];
const ADOPTION_LOOP = ["Ship", "Adoption session", "Feedback", "Product change"];
const SURFACE_PATH = ["UI platform", "Shared capability", "Conversational / tool-based access"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "fragmented", label: "The fragmentation" },
  { id: "marketplace", label: "Marketplace" },
  { id: "studio", label: "Design Studio" },
  { id: "testing", label: "Testing" },
  { id: "adoption", label: "Adoption" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "outcomes", label: "What changed" },
];

export default function ApiLifecyclePage() {
  const onward = getProject("dependency-health");

  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        eyebrow: "API Lifecycle Platform · Walmart Global Tech",
        headline: "Creating one platform for engineers to discover, design, test, and govern APIs.",
        meta: [
          { label: "Role", value: "UX Designer → Senior UX Designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2022–Present" },
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
                One lifecycle, <span className="text-[var(--accent-deep)]">three connected pillars</span>.
              </>
            }
            note="Marketplace, Design Studio, and Testing."
            body={[
              "API work was spread across different tools and handoffs. Engineers could discover services in one place, design contracts somewhere else, test through separate utilities, and encounter governance later in the lifecycle.",
              "I joined the product at its inception and helped shape it into a connected platform organised around three core jobs: Marketplace, Design Studio, and Testing.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "~500", label: "services onboarded", glyph: "field" },
                { value: "~40%", label: "faster contract design in the redesigned Studio", glyph: "bars" },
                { value: "60+", label: "engineering adoption sessions", glyph: "ring" },
              ]}
            />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="image"
              needs="A hero composite carrying the three pillars in sequence: Marketplace → Design Studio → Testing."
              source="Draft beat: MEDIA — HERO"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="fragmented">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The problem"
            heading="The lifecycle was connected in theory, fragmented in practice"
            body={[
              "An API moves through discovery, contract design, validation, testing, publishing, subscription, governance, and eventually change or deprecation.",
              "When each stage lives in a different product, engineers have to reconstruct that lifecycle themselves.",
              "The opportunity was not to add another API tool. It was to create one product model that could carry engineers through the lifecycle while still supporting specialists who needed deeper control.",
            ]}
          />
          <CaseStudyFigure rule label="The lifecycle an engineer has to reconstruct">
            <DotFlow stages={LIFECYCLE} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="marketplace">
          <CaseStudyChapter
            eyebrow="Marketplace"
            heading="Marketplace made APIs understandable before they were consumed"
            body={[
              "Discovery needed to answer more than “does this API exist?”",
              "Engineers needed to understand what a service did, whether it was appropriate for their use case, how to subscribe, and where to find the technical information required to begin using it.",
              "Marketplace brought search, service details, subscriptions, and exploration into one entry point so evaluation could happen before integration work began.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              needs="The discovery path through Marketplace: search, then service details, then subscribe or explore."
              source="Draft beat: MEDIA — SEARCH → SERVICE DETAILS → SUBSCRIBE / EXPLORE"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="studio">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Design Studio"
            heading="Design Studio had to work for beginners and experts at the same time"
            body={[
              "API contract design exposed one of the platform’s hardest interaction problems.",
              "Some engineers were comfortable working directly in YAML or JSON. Others needed a structured interface that made the schema easier to understand and create.",
              "Instead of forcing one mode on everyone, we designed two connected editors: Basic for guided, structured contract creation, and Advanced for engineers who preferred direct specification editing.",
              "Switching between them required careful handling of validation, unsupported changes, and the risk of losing work. Around that core interaction, the Studio added linting, duplicate detection, quality feedback, versioning, imports, collaboration, code generation, and governance guidance.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              ratio={16 / 9}
              needs="The Basic and Advanced editors side by side, including the validation states shown when switching between them."
              source="Draft beat: MEDIA — BASIC ↔ ADVANCED EDITOR"
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="The goal" mark="rhythm">
          Not to hide technical complexity, but to reveal the right amount of it for the person doing the work.
        </PullStatement>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="testing" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            eyebrow="Testing"
            heading="Testing kept validation inside the same product journey"
            body={[
              "The Testing pillar reduced another handoff by bringing common API validation tasks closer to design and discovery.",
              "Engineers could test APIs, work with authentication, use scripting and snippets, share collections, and prepare outputs for downstream security processes without treating testing as a completely separate product experience.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              needs="The API tester with a saved collection and its result states."
              source="Draft beat: MEDIA — API TESTER / COLLECTION / RESULT STATES"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="adoption">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Adoption"
            heading="Adoption was part of the design work"
            body={[
              "A developer platform does not become useful simply because it ships.",
              "Across more than 60 engineering sessions, we demonstrated the product, observed where teams struggled, answered workflow questions, and used that feedback to refine terminology, interactions, and guidance.",
              "This mattered especially for Design Studio, where teams using the redesigned experience measured roughly a 40% reduction in API contract design time.",
            ]}
          />
          <CaseStudyFigure rule label="The adoption loop">
            <DotFlow stages={ADOPTION_LOOP} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="infrastructure">
          <CaseStudyChapter
            eyebrow="Where it went"
            heading="From useful tool to engineering infrastructure"
            body={[
              "As adoption grew, the platform became more deeply connected to governance and the software-development lifecycle. Quality and policy checks moved closer to the work rather than appearing only as a late gate.",
              "The platform is also beginning to extend beyond the interface itself. API capabilities can increasingly be surfaced through skills and conversational tools, turning the product from a destination engineers visit into a capability that can also be invoked in context.",
              "That evolution changes the surface, but not the design responsibility: make the system’s capabilities, constraints, and results understandable.",
            ]}
          />
          <CaseStudyFigure rule label="From platform to invocable capability">
            <DotFlow stages={SURFACE_PATH} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="outcomes">
          <CaseStudyChapter
            layout="flow"
            eyebrow="What changed"
            heading="Fewer translations between tools"
            body={[
              "The platform established a connected API lifecycle across discovery, contract design, and testing, with roughly 500 services onboarded during the documented period.",
              "The strongest outcome was not feature count. It was reducing the number of times engineers had to translate context between disconnected tools while giving different levels of expertise a workable path through the same lifecycle.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What I believe now" mark="exchange">
          A platform can support advanced technical work while still making the default path understandable.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
