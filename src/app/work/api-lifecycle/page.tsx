import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { DotFlow } from "@/components/design-system/DotFlow";
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
 * beats: a fanned deck of the shipped areas in the hero, the entry point as
 * a single artboard, and one carousel per pillar. Beats asking for a diagram
 * are still reconstructed in the dot language.
 */

export const metadata: Metadata = {
  title: "API Lifecycle Platform — One place to discover, design, test, and govern APIs",
  description:
    "One developer platform for the whole API lifecycle — find a service, design its contract, test it, subscribe to it, keep it governed.",  robots: caseStudyRobots,
};

const LIFECYCLE = ["Discovery", "Contract design", "Validation", "Testing", "Publishing", "Governance"];
const ADOPTION_LOOP = ["Ship", "Adoption session", "Feedback", "Product change"];
const SURFACE_PATH = ["UI platform", "Shared capability", "Conversational / tool-based access"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "fragmented", label: "The fragmentation" },
  { id: "one-platform", label: "One platform" },
  { id: "marketplace", label: "Finding a service" },
  { id: "studio", label: "Designing a contract" },
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
            "Not another API tool. One platform covering the whole lifecycle \u2014 and one product, not the three separate ones the early model called for.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I joined at inception and <span className="ds-accent-deep-text">shaped the product model</span>.
            </>
          ),
          detail:
            "I shaped the product model, argued three planned products down to one, then ran the weekly sessions that got teams onto it after a launch almost nobody turned up to \u2014 over a hundred of them, and the product grew from my first year on it to my fourth.",
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
      {/* Every other case study here is about a product a reader can
          picture. This one is infrastructure, and the page assumed the word.
          It sits in the breaker rather than a card so it reads as the first
          thing said, not an aside. `connection` is the mark the guide
          defines as "one thing being the link between two others", which is
          what an API is — the other marks would have been ornament. */}
      <div className="mt-14 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="What is an API"
            mark="connection"
            note="Like a waiter carrying an order to the kitchen and bringing the food back out."
          >
            An API is how two pieces of software talk to each other. One asks for something, the
            other answers.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
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

        <CaseStudySection id="one-platform">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="One platform"
            heading="Three products would have rebuilt the problem we were solving"
            body={[
              "The early model gave each job its own product: a marketplace to find services, a studio to design contracts, a tester to check them. Three names, three destinations, three things to learn.",
              "I argued against it. The problem we had been given was that the lifecycle was spread across separate tools; shipping three of our own would have reproduced that with better styling, and an engineer would still have been the one carrying context between them.",
              "So it ships as one place. API Hub, with Home, My APIs, Testing, Subscriptions and Settings \u2014 areas of a product rather than products. The jobs are all still there. What is gone is having to know which tool a job belongs to before you can start it.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="marketplace">
          <CaseStudyChapter
            eyebrow="Finding a service"
            heading="A service had to be understandable before anyone consumed it"
            body={[
              "Discovery needed to answer more than “does this API exist?”",
              "Engineers needed to understand what a service did, whether it was appropriate for their use case, how to subscribe, and where to find the technical information required to begin using it.",
              "Search, the service detail, and the subscription request all sit on the same path, so an engineer can judge whether a service fits before any integration work starts. Search leads rather than a category tree: with this many services, browsing to a specific one took too many steps to be worth keeping.",
            ]}
          />
          <CaseStudyFigure label="Search, then the service, then a subscription">
            <ArtboardCarousel
              label="The discovery path"
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
            eyebrow="Designing a contract"
            heading="Contract design had to work for beginners and experts at the same time"
            body={[
              "API contract design exposed one of the platform’s hardest interaction problems.",
              "Some engineers were comfortable working directly in YAML or JSON. Others needed a structured interface that made the schema easier to understand and create.",
              "Instead of forcing one mode on everyone, we designed two connected editors: Basic for guided, structured contract creation, and Advanced for engineers who preferred direct specification editing.",
              "Switching between them required careful handling of validation, unsupported changes, and the risk of losing work. Around that core interaction, the Studio added linting, duplicate detection, quality feedback, versioning, imports, collaboration, code generation, and governance guidance.",
            ]}
          />
          <CaseStudyFigure label="Two editors over one contract">
            <ArtboardCarousel
              label="The two editors"
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
        <Reveal>
          <PullStatement eyebrow="What we were after" mark="rhythm">
            Not to hide technical complexity, but to reveal the right amount of it for the person
            doing the work.
          </PullStatement>
        </Reveal>
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
            heading="It shipped, and almost nobody came"
            body={[
              "Adoption after launch was very low. The platform worked, every area was in place, and engineering teams carried on with the tools they already had. Nobody was going to read an announcement and change how they built services.",
              "So we started running a brown-bag session every week: show the product to one team, watch where they got stuck, answer the workflow questions that an announcement cannot. We have run more than a hundred of them, averaging over sixty people a session.",
              "That is what moved it. Teams onboarded and kept using it, and the sessions turned into a channel \u2014 feedback and suggestions started arriving through Slack and support rather than having to be chased.",
              "It also fed the design. Terminology, interactions and guidance changed on what the sessions surfaced, and it mattered most in contract design, where teams on the redesigned editors measured a ~40% reduction in the time it took.",
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
              "The platform established a connected API lifecycle across discovery, contract design and testing. More than 15,000 APIs are onboarded and it is opened by over 10,000 people a month.",
              "The strongest outcome was not feature count. It was reducing the number of times engineers had to translate context between disconnected tools while giving different levels of expertise a workable path through the same lifecycle.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="exchange">
            A platform can support advanced technical work while still making the default path
            understandable.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
