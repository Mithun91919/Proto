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
 * Supply Chain Operations Platform — on the locked case-study template.
 *
 * Prose verbatim from `projects/supply-chain-operations/web/*.md`.
 *
 * The headline metric is a *fall* in time on page, which reads as a
 * regression unless its direction is stated. The chapter says so in prose
 * before the number appears, and the strip is labelled accordingly.
 */

export const metadata: Metadata = {
  title: "Supply Chain Operations Platform — Helping operations teams get to the right tool faster",
  description:
    "Redesigning the information architecture, navigation, and landing experience for a platform fronting 139 operational modules.",
};

const HIERARCHY = ["Category", "Module", "Sub-module"];
const FAST_PATHS = ["Pins", "Recent modules", "Search"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "bottleneck", label: "The bottleneck" },
  { id: "structure", label: "Structure" },
  { id: "navigation", label: "Navigation" },
  { id: "front-door", label: "The front door" },
  { id: "outcomes", label: "What changed" },
];

export default function SupplyChainOperationsPage() {
  const onward = getProject("bb-daily");

  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        eyebrow: "Supply Chain Operations Platform · Walmart Global Tech",
        headline: "Helping operations teams get to the right tool faster.",
        meta: [
          { label: "Role", value: "UX Designer · co-led" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2021–2022" },
          { label: "Discipline", value: "Enterprise operations · Platform UX" },
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
                A front door, <span className="text-[var(--accent-deep)]">not a destination</span>.
              </>
            }
            note="139 operational modules behind one entry point."
            body={[
              "A global supply-chain platform had become the entry point to 139 operational modules used across Walmart.com, Online Grocery, and international markets.",
              "As the platform grew, its homepage became harder to navigate. Finding the right tool meant scanning a large collection of modules, remembering where something lived, or relying on prior knowledge.",
              "I co-led the redesign of the platform’s information architecture, navigation, and landing experience with one goal: help people spend less time finding a tool and more time using it.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "~1M", label: "monthly unique visitors", glyph: "field" },
                { value: "139", label: "operational modules", glyph: "bars" },
                { value: "62%", label: "less time spent on the landing page", glyph: "ring" },
              ]}
            />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <MediaPlaceholder
              needs="A hero showing the redesigned landing page and navigation, reconstructed with representative categories and modules."
              source="Draft beat: MEDIA — HERO"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="bottleneck">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The problem"
            heading="The homepage had become a bottleneck"
            body={[
              "The landing page was never meant to be a destination. It was the front door to operational tools people needed to do their jobs.",
              "But more capability had been added over time without enough structure around it. Related modules were difficult to identify, everyone started from essentially the same experience, frequently used tools could not be saved, and users who already knew what they wanted still lacked a fast route to it.",
              "Before changing the interface, we needed to fix the structure underneath it.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="diagram"
              ratio={16 / 9}
              needs="A public-safe before state: the growing module collection with weak hierarchy. Representative categories and modules, not original screens."
              source="Draft beat: VISUAL — BEFORE STATE"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="structure">
          <CaseStudyChapter
            eyebrow="Structure"
            heading="We reorganised the platform before redesigning the navigation"
            body={[
              "We worked with users and teams across the platform to understand what modules did, where they belonged, and how people thought about them in everyday work.",
              "Instead of treating the homepage as one large catalogue, related capabilities were grouped into a clearer hierarchy.",
              "That information architecture became the foundation for every navigation decision that followed.",
            ]}
          />
          <CaseStudyFigure rule label="From a flat collection to a hierarchy">
            <DotFlow stages={HIERARCHY} />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What it came down to" mark="connection">
          The problem was not where to put the menu. It was creating a structure people could understand.
        </PullStatement>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="navigation" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The decision"
            heading="Two navigation ideas went in front of users"
            body={[
              "With the new structure in place, we explored two directions: a top-navigation model and a persistent left-navigation model.",
              "Rather than choosing internally, we evaluated both concepts through moderated sessions with users representing different operational groups and markets.",
              "The left-navigation model consistently made more sense for the depth of the platform. It gave categories room to grow, supported longer module names, stayed available as users moved through the product, and could collapse when more workspace was needed.",
              "Feedback on the alternative still improved the final design, including how controls such as market selection were consolidated into the navigation.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="diagram"
              ratio={16 / 9}
              needs="The two navigation concepts side by side — top navigation and persistent left navigation — and the direction chosen after testing."
              source="Draft beat: VISUAL — TOP ↔ LEFT NAVIGATION"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="front-door">
          <CaseStudyChapter
            eyebrow="Personalisation"
            heading="Then we made the front door work differently for different people"
            body={[
              "The platform contained 139 modules, but most people relied on only a small working set.",
              "That changed the design problem from “make everything equally visible” to “make the right things easier to return to.”",
              "The redesigned experience introduced three faster paths: pins for frequently used modules, recent modules for returning to ongoing work without setup, and search for users who already knew what they needed.",
            ]}
          />
          {/* A set of parallel routes, so no connector implying an order. */}
          <CaseStudyFigure rule label="Three faster routes back in">
            <DotFlow stages={FAST_PATHS} />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <MediaPlaceholder
              kind="video"
              needs="A short loop moving through the three routes: search, then pin, then returning via recents."
              source="Draft beat: MEDIA — SEARCH → PIN → RECENT"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="outcomes">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="What changed"
            heading="The best outcome was people leaving the homepage faster"
            body={[
              "In many digital products, more time spent can look like engagement. Here, the opposite was true.",
              "The purpose of the landing page was to route people into operational work as quickly as possible. After the new information architecture, navigation, search, and personalisation were introduced, time spent on the landing page fell by 62%.",
              "The redesign gave the platform a scalable structure for new modules, persistent navigation across the experience, direct search, and personal routes back into frequently used tools. More importantly, the homepage became what it was supposed to be: a way through the platform, not a place users had to spend time figuring out.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What I believe now" mark="rhythm">
          Sometimes lower engagement is the better experience.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
