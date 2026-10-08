import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { DotFlow } from "@/components/design-system/DotFlow";
import { NoteCard } from "@/components/design-system/NoteCard";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { PullStatement } from "@/components/design-system/PullStatement";
import { ArchetypeSection } from "@/components/design-system/ArchetypeSection";
import type { Archetype } from "@/components/design-system/ArchetypeFigure";
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

/**
 * The two fronts the platform serves.
 *
 * Not four segments: one relationship with two sides. Both are engineers by
 * discipline, so the split is not seniority or skill — it is which side of a
 * contract someone is on that day, which is why a single person can be both
 * across two services. Written as archetypes rather than personas: a plain
 * label and the observed behaviour, no invented name or biography.
 *
 * `stages` indexes LIFECYCLE above. The two barely overlap, and that is the
 * point on this page — one platform carrying both sides of a handoff rather
 * than a tool for each.
 */
const ARCHETYPES: Archetype[] = [
  {
    name: "Engineer",
    side: "Consumer",
    behaviour: "Finds, evaluates and consumes existing APIs.",
    wants: [
      "Judge whether a service fits before writing any code against it.",
      "Subscribe without leaving the path they’re on.",
    ],
    friction: [
      "No single place to search whether an API already existed.",
      "Documentation lived in Confluence, and only some teams kept it current.",
    ],
    stages: [0, 3],
  },
  {
    name: "Architect",
    side: "Provider",
    behaviour: "Defines, publishes and evolves API contracts.",
    wants: [
      "Work the spec directly, or have the schema drawn for them.",
      "Change a published contract without breaking the teams on it.",
    ],
    friction: [
      "Every change went out as an org-wide email.",
      "Access was granted and tracked by hand.",
    ],
    stages: [1, 2, 4, 5],
  },
];

const CHAPTERS = [
  { id: "lifecycle", label: "The lifecycle" },
  { id: "who", label: "Who it is for" },
  { id: "decision", label: "One platform" },
  { id: "overview", label: "The way in" },
  { id: "marketplace", label: "Finding a service" },
  { id: "studio", label: "Designing a contract" },
  { id: "testing", label: "Testing" },
  { id: "adoption", label: "Adoption" },
  { id: "outcomes", label: "What changed" },
  { id: "infrastructure", label: "Where it went" },
];

export default function ApiLifecyclePage() {
  const onward = getProject("dependency-health");

  return (
    <CaseStudyShell
      slug="api-lifecycle"
      evidenceCaveat="The 60% is the reduction in time developers take on API contracting; the other two figures are scale."
      evidenceMetricsLabel="The impact"
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              There was <span className="ds-accent-text">no single place</span> to check whether
              an API already existed.
            </>
          ),
          detail:
            "Documentation lived in Confluence, kept current by some teams and not others. A change to a contract went out as an org-wide email, and who had access to an API was tracked by hand. Each team built around whatever tooling suited them, and that alone was slowing delivery down.",
        },
        {
          label: "The solution",
          lead: (
            <>
              One platform, with{" "}
              <span className="ds-accent-text">governance built into it</span>.
            </>
          ),
          detail:
            "Not another external dependency. One place carrying every stage, with governance integrated into the work rather than waiting at the end of it.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I joined at inception and <span className="ds-accent-text">shaped the product model</span>.
            </>
          ),
          detail:
            "I owned the design direction and pushed for one platform with the controls integrated, not three products. Launch was not the end: I ran the sessions that got teams onto it after almost nobody turned up \u2014 over a hundred of them, and the product grew from my first year on it to my fourth.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "The internal platform Walmart engineers use to find a service, agree its contract, test it, and keep it governed — work that used to depend on outside tools with no governed way through them.",
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
        figureNote: "Confidential internal work. Data and some product names have been replaced.\nScreens as shipped, built on Walmart’s Living Design system.",
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
        {/* The map first: the stages, and the single claim that the platform
            is one place with the controls inside the work. The home screen
            follows, then the routes it offers, in order. */}
        <CaseStudySection id="lifecycle" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The lifecycle"
            heading="One place for every stage, with the controls inside the work"
            body={[
              "An API moves through discovery, contract design, validation, testing, publishing, subscription, governance, and eventually change or deprecation.",
              "API Hub carries all of it. Home, My APIs, Testing, Subscriptions and Settings \u2014 areas of a product rather than products, with governance belonging to each area instead of waiting as a gate at the end of them.",
              "Two org rules carry it, enforced inside the work. A specification with flagged errors cannot be pushed to Git, and a push to production needs a manager\u2019s approval.",
            ]}
          />
          <CaseStudyFigure rule label="Every stage the platform carries">
            <DotFlow stages={LIFECYCLE} />
          </CaseStudyFigure>
        </CaseStudySection>

        {/* After the stages are named and before the screen that leads into
            them: the reader now knows what the lifecycle is, and needs to know
            who walks it before being shown a route through it. It also sets up
            the two sections that follow — finding a service is the consumer's
            half, designing a contract the provider's. */}
        <CaseStudySection id="who">
          <ArchetypeSection
            heading="One API contract. Two very different jobs."
            intro="Engineers decide whether they can trust and consume it. Architects create it, evolve it, and answer for it. Often, the same person is both."
            archetypes={ARCHETYPES}
            stages={LIFECYCLE}
            variant="cards"
            showCoverage
            basisLabel="20+ interviews before design"
            basis="The research defined these roles, exposed the broken hand-offs, and later helped us validate the specification."
          />
        </CaseStudySection>

        {/* The two sides are now known, so this is where the choice that
            served both is said: the spec asked for three products. The
            figure is that change itself, three built in turn against one. It
            uses `stages` on the before card because what differs is what the
            pieces are, not how many steps there are. */}
        <CaseStudySection id="decision">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="A decision"
            heading="The spec asked for three products. Teams needed one."
            body={[
              "The spec was a marketplace, a Studio and testing, as separate products, in the order people needed them: find a service, then build one, then test it. With the engineering capacity available, version one was built that way.",
              "Teams were on Swagger, Postman and Confluence, each with its own budget. To leave them, it had to be a whole package: an import that brought existing specifications across, with testing, mocking, versioning and environments inside. I pushed for one experience instead and started the work to join the three.",
            ]}
          />
          <CaseStudyFigure>
            <BeforeAfterModel
              before={{
                stages: ["Marketplace", "Studio", "Testing"],
                heading: "Three products, built in turn",
                body: "Each one was complete on its own and handed work to the next.",
              }}
              after={{
                glyph: "modules",
                figure: { value: "1", label: "platform, with the areas using each other" },
                heading: "One experience",
                body: "The three overlap, so work does not have to be carried between them.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="overview">
          {/* The map above names the stages; this is where an engineer
              actually arrives at them. What follows walks the routes on this
              screen, in the order the lifecycle runs.

              Copy left, screen right, the M8 arrangement inverted. Full
              width the mockup was the whole section and the claim sat above
              it as a preamble; beside it the two read as one statement. The
              text column is deliberately narrow — the screen is a dense
              dashboard and every rem taken from it costs legibility. */}
          <div className="ds-cs-split">
            <CaseStudyChapter
              layout="flow"
              eyebrow="The way in"
              heading="Routes into work, not a status board"
              body={[
                "An engineer opening a platform is not there to read a summary of it. They have arrived to do something \u2014 and what that is varies: find a service, start a task, or reach one specific function.",
                "So the home screen carries all three ways in rather than picking one. Search across every service, the eight tasks people most often start, and direct routes to functions like proxy and linting.",
              ]}
            />
            {/* A full-page capture, held to a fixed height and scrolled in
                place. Laid out flat it was either 1131px tall at column width
                or shrunk to 640px, where the Get Started cards stop being
                readable — and reading them is the entire point of the shot. */}
            {/* No label: it pushed the frame down by its own height and
                half a rule, so the screen started below the heading beside
                it. Unlabelled, the frame top meets the eyebrow and the two
                columns share one horizon. The route pill in the chrome
                already names the screen. */}
            <CaseStudyFigure>
              <BrowserMockup
                route="/api-hub"
                src="/work/api-lifecycle/home.png"
                width={2890}
                height={2712}
                crop
                maxHeight="40rem"
                alt="API Hub home: search across services, then eight Get Started routes — import, define, manage subscriptions, generate code, register a service, generate docs, monitor, and publish to the marketplace"
                hotspots={[
                  {
                    x: 59,
                    y: 19,
                    title: "Arriving to find",
                    detail: "Search leads, across every service. Someone who already knows what they want never has to browse for it.",
                  },
                  {
                    x: 59,
                    y: 31,
                    title: "Arriving to do",
                    detail: "Import, define, subscribe, generate a client, register, document, monitor, publish. The eight tasks people most often turn up to start.",
                  },
                  {
                    x: 92,
                    y: 61,
                    title: "Arriving for one function",
                    detail: "Proxy and linting are reachable directly, without going through a task first \u2014 and linting on the way in means a contract is checked while it is written, not at a gate after it.",
                  },
                ]}
                caption="Search sits above the routes, so someone who already knows the service they want never has to browse for it."
              />
            </CaseStudyFigure>
          </div>
        </CaseStudySection>

        <CaseStudySection id="marketplace">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              imageSide="left"
              eyebrow="Finding a service"
              title="A service had to be understandable before anyone consumed it"
              description={[
                "Discovery needed to answer more than “does this API exist?” There was no single repository to search, and the documentation for the services that did exist lived in Confluence, current for some teams and stale for others.",
                "Engineers needed to understand what a service did, whether it was appropriate for their use case, how to subscribe, and where to find the technical information required to begin using it. Search leads rather than a category tree: with this many services, browsing to a specific one took too many steps to be worth keeping.",
              ]}
              scrollable
              maxHeight="44rem"
              label="The discovery path"
              slides={[
                {
                  title: "Search results",
                  route: "/api-hub/search",
                  src: "/work/api-lifecycle/search-results.png",
                  width: 2880,
                  height: 2704,
                  alt: "Search results across services, each row carrying a rating, environment badges and a short description, with filters for type, environment, rating and popularity",
                  caption: "Results carry the environment a service runs in and how widely it is used, so the shortlist is made before anything is opened.",
                  hotspots: [
                    {
                      x: 22,
                      y: 13,
                      title: "A live filter, not a static list",
                      detail: "Typing narrows the 19 results shown here in place — nothing is a fixed category page.",
                    },
                    {
                      x: 84,
                      y: 13,
                      title: "Narrow before opening anything",
                      detail: "Filter by type, environment, rating or popularity — the shortlist narrows here, not one card at a time.",
                    },
                    {
                      x: 9.75,
                      y: 24,
                      title: "Every environment, on the card",
                      detail: "Prod, Staging, Dev, QA, Beta — which environments a service is live in, without opening it.",
                    },
                  ],
                },
                {
                  title: "API Docs",
                  route: "/api-hub/catalog/service/docs",
                  src: "/work/api-lifecycle/api-docs.png",
                  width: 2890,
                  height: 2704,
                  alt: "A service's API Docs tab: an environment selector, then each endpoint listed with its parameters and example request and response bodies, expandable in place",
                  caption: "Every endpoint is documented on the service itself, parameters and example responses included — nothing to go find in a wiki someone else was supposed to keep current.",
                  hotspots: [
                    {
                      x: 12,
                      y: 17,
                      title: "Docs live on the service itself",
                      detail: "API Docs is a tab away from the overview, not a separate wiki page to go find and hope is current.",
                    },
                    {
                      x: 28,
                      y: 22,
                      title: "Every environment, one screen",
                      detail: "prod3, prod2, qa1, dev1, sm2devmac — the full set a service runs in, switchable without leaving the page.",
                    },
                    {
                      x: 83,
                      y: 57,
                      title: "Real parameters, real responses",
                      detail: "Example request and response bodies sit beside each endpoint, not left to a separate spec file.",
                    },
                  ],
                },
                {
                  title: "Version history",
                  route: "/api-hub/catalog/versions",
                  src: "/work/api-lifecycle/version-compare.png",
                  width: 2890,
                  height: 2712,
                  alt: "A comparative analysis view with two versions of a specification side by side and the differences marked between them",
                  caption: "Version history is visible before integrating, not something to ask around about after a change breaks something.",
                  hotspots: [
                    {
                      x: 64,
                      y: 18,
                      title: "Compare against staging, not just history",
                      detail: "One side names a version, the other names an environment — the same view answers both questions.",
                    },
                    {
                      x: 39,
                      y: 38,
                      title: "Changes marked inline",
                      detail: "Additions and edits are highlighted line by line, not left for the reader to spot by re-reading both.",
                    },
                    {
                      x: 91,
                      y: 10,
                      title: "Split view, side by side",
                      detail: "Two specs open at once rather than tabbing between them to hold the difference in your head.",
                    },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="studio">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              eyebrow="Designing a contract"
              title="Contract design had to work for beginners and experts at the same time"
              description={[
                "API contract design exposed one of the platform’s hardest interaction problems.",
                "Not every team had an expert who could write a specification by hand, and at this scale a specification gets long. Some providers were comfortable working directly in YAML or JSON. Others needed to add a constant or change one small thing without breaking the structure around it.",
                "Instead of forcing one mode on everyone, I designed two connected editors: Basic for guided, structured contract creation, and Advanced for engineers who preferred direct specification editing.",
                "Switching between them required careful handling of validation, unsupported changes, and the risk of losing work. Around that core interaction, the Studio added linting, duplicate detection, quality feedback, versioning, imports, collaboration, code generation, and governance guidance.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Designing a contract"
              slides={[
                {
                  title: "Start from what already exists",
                  route: "/api-hub/my-apis",
                  src: "/work/api-lifecycle/my-apis.png",
                  width: 2890,
                  height: 2712,
                  alt: "My APIs: a searchable, filterable registry of a provider's services with status, tags and consumer counts, and Register New API and Import API actions at the top",
                  caption: "A provider’s own registry is where a contract starts, either registering a new API or importing one that already exists.",
                  hotspots: [
                    { x: 90.7, y: 7.9, title: "Two ways in", detail: "Register New API or Import API, side by side at the top: start from nothing, or bring in a contract that already exists." },
                    { x: 58, y: 14.4, title: "Search the registry", detail: "By API name, domain, tags or key, with keyword suggestions beneath for the common ones." },
                    { x: 88, y: 30.3, title: "Status on every row", detail: "Published, Deprecated or Retired, so the state of each service is readable without opening it." },
                  ],
                },
                {
                  title: "Bring a contract in",
                  route: "/api-hub/catalog/import",
                  src: "/work/api-lifecycle/import-service.png",
                  width: 2890,
                  height: 2712,
                  alt: "Import Service: a choice of import source (URL, SR, source control, clipboard, file, Azure), visibility, and an option to make the API doc the source of truth",
                  caption: "A specification can come in from a URL, SR, source control, the clipboard, a file or Azure.",
                  hotspots: [
                    { x: 36.4, y: 30.4, title: "Six ways to import", detail: "URL, SR, source control, clipboard, file or Azure, so the specification can come from wherever it already lives." },
                    { x: 80.5, y: 29.3, title: "Visibility set at import", detail: "Who can see the service is set as it is imported." },
                    { x: 29.5, y: 46.6, title: "Source of truth, spelled out", detail: "Choosing the API doc as source of truth syncs docs from Git and makes them uneditable in the Studio. The form says so beside the checkbox." },
                  ],
                },
                {
                  title: "Basic: the contract as a form",
                  route: "/api-hub/catalog/edit",
                  src: "/work/api-lifecycle/basic-editor.png",
                  width: 2890,
                  height: 2712,
                  alt: "The guided editor with the Basic Editor toggle on: URL paths, data types, responses and security on the left, and collapsible sections for operation details, parameters and servers on the right",
                  caption: "Basic is the same contract as a form. The toggle between the two editors is the hard part: switching has to carry unsupported changes and unsaved work across without losing either.",
                  hotspots: [
                    { x: 44.7, y: 16.5, title: "One switch between editors", detail: "The Basic Editor toggle sits in the toolbar, not on a separate page, so changing mode never means leaving the contract." },
                    { x: 70, y: 15.8, title: "A path, not a page", detail: "Define, Specs, Docs, Publish: where the contract is in its life stays visible while editing." },
                    { x: 26.5, y: 24.9, title: "The same outline in both", detail: "URL paths, data types, responses and security down the left, whichever editor is open." },
                  ],
                },
                {
                  title: "Advanced: the specification itself",
                  route: "/api-hub/catalog/edit",
                  src: "/work/api-lifecycle/spec-editor.png",
                  width: 2890,
                  height: 2712,
                  alt: "The specification editor: URL paths, data types, responses and security down the left, the specification in the middle, parameters and example values on the right",
                  caption: "Advanced keeps the specification in the middle with the structure it produces listed beside it, so someone editing directly can still see the shape they are making.",
                  hotspots: [
                    { x: 44.7, y: 16.5, title: "The same toggle, the other way", detail: "Off here: the specification itself, with the same toolbar and the same outline beside it." },
                    { x: 37.7, y: 49, title: "Errors marked at the line", detail: "A marker sits on the line with the problem, with an Errors panel beneath the editor." },
                    { x: 85, y: 26, title: "The structure it produces", detail: "Parameters, example values and responses for each operation, listed beside the YAML as it is written." },
                  ],
                },
                {
                  title: "Where the contract lands",
                  route: "/api-hub/catalog/service",
                  src: "/work/api-lifecycle/api-overview.png",
                  width: 2890,
                  height: 3306,
                  alt: "A service's Overview: description, tags, environments and key details, then subscription requests, top contributors and an audit history of every change",
                  caption: "Once published, the service has one overview: who is subscribing, who has been editing, and an audit trail of what changed.",
                  hotspots: [
                    { x: 37.5, y: 24, title: "Every environment", detail: "Prod, Sandbox, Dev and the staging environments the service runs in, alongside its ID, key and dates." },
                    { x: 34.3, y: 30.8, title: "Subscriptions in three views", detail: "Received requests, submitted requests and active subscriptions, each with the consumer and environment involved." },
                    { x: 57, y: 60.8, title: "An audit trail of every change", detail: "Who changed which endpoint, the operation, and the old and new value." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I was after" mark="rhythm">
            Not to hide technical complexity, but to reveal the right amount of it for the person
            doing the work.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="testing" boundary={false} className="pt-16 md:pt-20">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              imageSide="left"
              eyebrow="Testing"
              title="Testing kept validation inside the same product journey"
              description={[
                "The Testing pillar reduced another handoff by bringing common API validation tasks closer to design and discovery.",
                "Engineers could test APIs, work with authentication, use scripting and snippets, share collections, and prepare outputs for downstream security processes without treating testing as a completely separate product experience.",
              ]}
              scrollable
              maxHeight="44rem"
              label="The API tester"
              slides={[
                {
                  title: "Collections beside the request",
                  route: "/api-hub/testing",
                  src: "/work/api-lifecycle/api-testing.png",
                  width: 2892,
                  height: 2052,
                  alt: "The API tester: saved collections on the left, a request builder with parameters, authorisation, headers and body, and a run control",
                  caption: "Collections sit beside the request, so a saved call is one click from the contract it was written against.",
                  hotspots: [
                    { x: 28, y: 33.1, title: "Collections beside the request", detail: "Saved collections and a search by name sit at the left, next to the request they belong to." },
                    { x: 87.4, y: 13.2, title: "Environment and Run together", detail: "The environment is picked in the toolbar, with Run beside it, not in a separate setup step." },
                    { x: 68.8, y: 78.2, title: "The response, under the request", detail: "Body, header and test results appear on the same screen the request was written on." },
                  ],
                },
                {
                  title: "Run it once or on a schedule",
                  route: "/api-hub/testing",
                  src: "/work/api-lifecycle/api-testing-1.png",
                  width: 2892,
                  height: 2426,
                  alt: "Run Collection: a choice between running manually or on a schedule, with schedule name, frequency, environment, iterations, a data file and email notifications",
                  caption: "A collection can run once or on a schedule, against a chosen environment, with the team told when it fails.",
                  hotspots: [
                    { x: 65, y: 25.8, title: "Once, or on a schedule", detail: "Run a collection manually, or periodically at a set time." },
                    { x: 68.3, y: 55, title: "Environment and iterations, chosen on the run", detail: "Which environment to run against and how many iterations, with a data file that can be attached and previewed." },
                    { x: 78.2, y: 72.4, title: "Failures reach the team", detail: "Up to five team members can be notified, with a setting to stop after consecutive failures." },
                  ],
                },
                {
                  title: "The result, in place",
                  route: "/api-hub/testing",
                  src: "/work/api-lifecycle/api-testing-2.png",
                  width: 2892,
                  height: 2052,
                  alt: "A completed run showing the response and its result state",
                  caption: "The result lands where the request was made, which is the handoff the old flow lost.",
                  hotspots: [
                    { x: 57.9, y: 24, title: "The outcome at a glance", detail: "Environment, iterations, average response time, passed and failed percentages, duration and data received." },
                    { x: 45, y: 31.7, title: "A timeline of the run", detail: "Each interval is marked passed or failed, so a bad stretch can be found without reading every row." },
                    { x: 94, y: 13.3, title: "A report to take away", detail: "Download Report exports the run for whoever needs it next." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="adoption">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Adoption"
            heading="It shipped, and for three months almost nobody came"
            body={[
              "The platform came out in batches: the marketplace first, then the Studio, then testing. Teams waited until all of it was there before moving. When it was, the assumption that it was unfinished stayed, and for the first three months adoption was low.",
              "I interviewed teams to find out why, and took what I learned into brown-bag sessions: show the product to one team, watch where they got stuck, answer the workflow questions an announcement cannot. Whatever was stopping a team from migrating was raised and worked through in the same session.",
              "I have run more than a hundred of them, averaging over sixty people a session, and the sessions became a feedback channel of their own.",
            ]}
          />
          <CaseStudyFigure rule label="The intervention">
            <BeforeAfterModel
              before={{
                glyph: "field",
                figure: { value: "3", label: "months of low adoption" },
                heading: "Set in their ways",
                body: "Teams waited for every piece, then still assumed it was unfinished. They kept to the tools they had.",
              }}
              after={{
                glyph: "ramp",
                figure: { value: "100+", label: "brown-bag sessions, 60+ people on average" },
                heading: "Shown what they were missing",
                body: "Seeing the product working is what moved teams, and adoption grew.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="outcomes">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="What changed"
            heading="Fewer translations between tools"
            body={[
              "The platform established a connected API lifecycle across discovery, contract design and testing, with governance built into the work rather than waiting at the end of it.",
              "The strongest outcome was not feature count. It was reducing the number of times engineers had to translate context between disconnected tools while giving different levels of expertise a workable path through the same lifecycle.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { from: "0", value: "20K+", label: "APIs onboarded", glyph: "modules" },
                { from: "600", value: "10K+", label: "monthly users", glyph: "field" },
                { value: "60%", label: "less time taken by developers on API contracting", glyph: "drop" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        {/* Where it went, as the AI note: a claim about the whole platform
            (the data and workflows were already in place, so it was ready),
            in the same card the work page uses for its own AI line. Sparkle
            because it is about AI. */}
        <CaseStudySection id="infrastructure">
          <Reveal>
            <NoteCard
              label="Where it went"
              heading="Ready for AI because the groundwork was already there"
              body="There is now an MCP to discover, create and manage APIs. People can use it from any AI tool, such as Copilot, to get API information and take actions without opening the platform, so it sits inside their workflow, not beside it. That was only possible because the data and workflows were already in place. If I started today I would make it agentic first, with the screens as one way in."
              mark="AI"
              sparkle
            />
          </Reveal>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="seam">
            A product is not finished when it ships. It is finished when people use it.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
