import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { DotFlow } from "@/components/design-system/DotFlow";
import { NoteCard } from "@/components/design-system/NoteCard";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";

/**
 * API Lifecycle Platform — on the locked case-study template.
 *
 * Prose verbatim from `projects/api-lifecycle/web/*.md`.
 *
 * Twelve anonymised captures of the shipped interface now carry the product
 * beats: a fanned deck of the three pillars in the hero, the entry point as
 * a single artboard, and one carousel per pillar. Beats asking for a diagram
 * are still reconstructed in the dot language.
 */

export const metadata: Metadata = {
  title: "API Lifecycle Platform — One place to discover, design, test, and govern APIs",
  description:
    "A connected developer platform organised around three jobs: Marketplace, Design Studio, and Testing.",  robots: caseStudyRobots,
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
      slug="api-lifecycle"
      evidenceCaveat="The ~40% is measured for teams using the redesigned Studio; the other two figures are scale."
      evidence={[
        {
          label: "Problem",
          lead: (
            <>
              An API lifecycle running through <span className="ds-accent-deep-text">tools that did not connect</span>.
            </>
          ),
          detail:
            "Engineers discovered services in one place, designed contracts in another, tested through separate utilities, and met governance late. When each stage lives in a different product, the engineer has to reconstruct the lifecycle themselves.",
        },
        {
          label: "Task",
          lead: (
            <>
              Build one product model for <span className="ds-accent-deep-text">the whole lifecycle</span>.
            </>
          ),
          detail:
            "The brief was not another API tool: one platform organised around three jobs — Marketplace, Design Studio and Testing — that still gives specialists the deeper control they need.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I joined at inception and <span className="ds-accent-deep-text">shaped the product model</span>.
            </>
          ),
          detail:
            "I ran 60+ adoption sessions with engineering teams as the three pillars took shape, and led design through the product's growth from UX Designer to Senior.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "The internal platform Walmart engineers use to find a service, agree its contract, test it, and keep it governed — three jobs that used to live in three different tools.",
        headline: (
          <>
            API Lifecycle Platform: <span style={{ color: "var(--ds-mint)" }}>one place</span> to discover, design, test, and govern APIs.
          </>
        ),
        // These are desktop captures at about 1.07 — nearly square — so the
        // deck defaulted to a card 593px tall and swallowed the band. Each
        // screen crops to its top instead, which is where the chrome, the
        // title and the first controls are. 16/10 took it to 395px, which
        // was further than it needed to go; 1.39 lands at 455.
        stackRatio: 1.39,
        stack: [
          {
            src: "/work/api-lifecycle/home.png",
            width: 2890,
            height: 2712,
            alt: "API Hub home: a search field over service keywords, then Get Started routes for importing, defining, subscribing, registering and publishing an API",
            route: "/api-hub",
          },
          {
            src: "/work/api-lifecycle/spec-editor.png",
            width: 2890,
            height: 2712,
            alt: "The contract editor with URL paths, data types and responses down the left, the specification in the middle, and parameter detail on the right",
            route: "/api-hub/catalog/edit",
          },
          {
            src: "/work/api-lifecycle/api-testing.png",
            width: 2892,
            height: 2052,
            alt: "The API tester with a saved collection, request builder and run controls",
            route: "/api-hub/testing",
          },
        ],
        figureNote: "The interface is as it shipped, built on Living Design — Walmart's design system. I have replaced the data and some product names, because the work is internal.",
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
          {/* Every other case study here is about a product a reader can
              picture. This one is infrastructure, and the rest of the page
              assumes the word. Two sentences up front cost nothing and stop
              a design reader bouncing off the first paragraph. Same treatment
              the store associate study gives Living Design. */}
          <CaseStudyFigure>
            <NoteCard
              label="First, the word"
              heading="An API is how two pieces of software talk to each other"
              body="One program asks another for something and gets an answer back — the way a waiter carries an order to a kitchen and brings the food out. This platform is where Walmart's engineers find those services, agree what each one will answer, check that it does, and keep it governed once other teams start depending on it."
              mark="API"
            />
          </CaseStudyFigure>
          <CaseStudyFigure label="The way in">
            <ArtboardFigure
              src="/work/api-lifecycle/home.png"
              width={2890}
              height={2712}
              layout="portrait"
              alt="API Hub home: search across services, then eight Get Started routes — import, define, manage subscriptions, generate code, register a service, generate docs, monitor, and publish to the marketplace"
              caption="The entry point is a set of routes into work rather than a status board: search across every service, then the eight things an engineer actually arrives wanting to start."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="fragmented">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Where it fragmented"
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
          <CaseStudyFigure label="Search, then the service, then a subscription">
            <ArtboardCarousel
              label="The discovery path through Marketplace"
              slides={[
                {
                  src: "/work/api-lifecycle/search-results.png",
                  width: 2880,
                  height: 2704,
                  alt: "Search results across services, each row carrying a rating, environment badges and a short description, with filters for type, environment, rating and popularity",
                  caption: "Results carry the environment a service runs in and how widely it is used, so the shortlist is made before anything is opened.",
                },
                {
                  src: "/work/api-lifecycle/api-overview.png",
                  width: 2890,
                  height: 3306,
                  alt: "A service overview: what it does, its environments, API key, created and updated dates, its subscriptions table and its top contributors",
                  caption: "The overview answers what gets asked before integration starts \u2014 what it does, which environments it runs in, who already depends on it.",
                },
                {
                  src: "/work/api-lifecycle/subscriptions.png",
                  width: 2892,
                  height: 2610,
                  alt: "Subscriptions management with received requests, submitted requests and active subscriptions, each row showing provider, consumer, keys and status",
                  caption: "A subscription is a request with a justification and a reviewer, not a self-serve switch \u2014 one screen serves the side asking and the side approving.",
                },
              ]}
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
          <CaseStudyFigure label="Two editors over one contract">
            <ArtboardCarousel
              label="The Design Studio editors"
              slides={[
                {
                  src: "/work/api-lifecycle/spec-editor.png",
                  width: 2890,
                  height: 2712,
                  alt: "The specification editor: URL paths, data types, responses and security down the left, the specification in the middle, parameters and example values on the right",
                  caption: "Advanced keeps the specification itself in the middle with the structure it produces listed beside it, so someone editing directly can still see the shape they are making.",
                },
                {
                  src: "/work/api-lifecycle/spec-editor-1.png",
                  width: 2890,
                  height: 2712,
                  alt: "The same contract in the guided editor, with a Basic and Advanced toggle and a Define, Specs, Docs, Publish progression across the top",
                  caption: "Basic is the same contract as a form. The toggle between them is the hard part: switching has to carry unsupported changes and unsaved work across without losing either.",
                },
                {
                  src: "/work/api-lifecycle/version-compare.png",
                  width: 2890,
                  height: 2712,
                  alt: "A comparative analysis view with two versions of a specification side by side and the differences marked between them",
                  caption: "Versions are compared in place, so a consumer sees what changed between two releases rather than reading both and working it out.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What we were after" mark="rhythm">
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
          <CaseStudyFigure label="Validation without leaving the platform">
            <ArtboardCarousel
              label="The API tester"
              slides={[
                {
                  src: "/work/api-lifecycle/api-testing.png",
                  width: 2892,
                  height: 2052,
                  alt: "The API tester: saved collections on the left, a request builder with parameters, authorisation, headers and body, and a run control",
                  caption: "Collections sit beside the request, so a saved call is one click from the contract it was written against.",
                },
                {
                  src: "/work/api-lifecycle/api-testing-1.png",
                  width: 2892,
                  height: 2426,
                  alt: "A request configured with its authorisation and headers, ready to run against a chosen environment",
                  caption: "Authorisation and environment belong to the request rather than to a separate setup step.",
                },
                {
                  src: "/work/api-lifecycle/api-testing-2.png",
                  width: 2892,
                  height: 2052,
                  alt: "A completed run showing the response and its result state",
                  caption: "The result lands where the request was made, which is the handoff the old flow lost.",
                },
              ]}
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
              "This mattered especially for Design Studio, where teams using the redesigned experience measured a ~40% reduction in API contract design time.",
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
              "The platform established a connected API lifecycle across discovery, contract design, and testing, with ~500 services onboarded during the documented period.",
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
