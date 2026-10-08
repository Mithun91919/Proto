import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { ReleaseChecklist } from "@/components/design-system/ReleaseChecklist";
import { ArchetypeSection } from "@/components/design-system/ArchetypeSection";
import type { Archetype } from "@/components/design-system/ArchetypeFigure";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { NoteCard } from "@/components/design-system/NoteCard";
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
 * Dependency Health Platform — on the locked case-study template.
 *
 * Prose from `projects/dependency-management/web/*.md`.
 *
 * Seven captures of the shipped interface and one motion collage carry the
 * product beats, in the same pattern as the API Lifecycle page: split
 * carousels with hotspots where a screen has something to point at, the
 * recording as its own band, a Before/After where a decision moved.
 *
 * The platform has shipped. The evidence is the impact figures: 5K+ repositories
 * migrated, 40% fewer library issues during releases, 80% increase in product
 * health. The
 * numbers visible inside the screens are the fictional data they were
 * reconstructed with; none of them is quoted.
 */

export const metadata: Metadata = {
  title: "Dependency Health Platform — Moving teams onto one Unified BOM before release",
  description:
    "One platform for engineers and engineer managers: which library versions are behind, why it matters, and a guided way onto the Unified BOM.",
  robots: caseStudyRobots,
};

/**
 * The two people the platform serves. One relationship with two sides: both
 * are engineers by discipline, so the split is what each has to do with the
 * same libraries. Behaviour and friction are the ones the problem names — no
 * invented name or biography.
 */
const ARCHETYPES: Archetype[] = [
  {
    name: "Engineer",
    side: "Fixes it",
    behaviour: "Works in the repository: sees which libraries are outdated, and raises the pull requests that clear them.",
    wants: [
      "See what their repository owes, and how far behind it is.",
      "Raise a pull request to fix it, and follow it through.",
    ],
    friction: [
      "Library problems found late, not ahead of it.",
      "Blind spots in the dependencies they build on.",
    ],
  },
  {
    name: "Engineer manager",
    side: "Answers for it",
    behaviour: "Reads across teams: where the outdated libraries are, and which teams are furthest behind.",
    wants: [
      "A bird’s-eye view of outdated libraries across their teams.",
      "See which teams need attention, and how remediation is moving.",
    ],
    friction: [
      "Rework surfacing close to a release, with no earlier warning.",
      "Blind spots across the dependencies their teams rely on.",
    ],
  },
];

const CHAPTERS = [
  { id: "outdated", label: "Outdated libraries" },
  { id: "solution", label: "The idea" },
  { id: "who", label: "Who it is for" },
  { id: "manager", label: "Engineer manager" },
  { id: "engineer", label: "Engineer" },
  { id: "catalogue", label: "The Unified BOM" },
  { id: "evidence", label: "Evidence" },
];

export default function DependencyHealthPage() {
  const onward = getProject("store-support");

  return (
    <CaseStudyShell
      slug="dependency-health"
      evidenceMetricsLabel="The impact"
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              <span className="ds-accent-text">Unexpected library rework</span> kept pushing release dates.
            </>
          ),
          detail:
            "Teams found library issues late, not ahead of it. Blind spots in their dependencies cost productivity, and one standard package of library versions went unused.",
        },
        {
          label: "The solution",
          lead: (
            <>
              One Unified BOM, and <span className="ds-accent-text">a guided way onto it</span>.
            </>
          ),
          detail:
            "A Unified BOM: one package of approved library versions, Java and Spring Boot included, that one team builds and every other team onboards to, instead of upgrading each library by hand.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I designed a dashboard that <span className="ds-accent-text">ends in a pull request</span>.
            </>
          ),
          detail:
            "The request was a dashboard to monitor library health at each level, from repository to organisation. I pushed for it to act as well, with a remediation flow that helps engineers raise pull requests and manage them. The platform team built the scanning behind it.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "The platform Walmart developers and engineer managers open to see which dependencies in a repository need attention, why they matter, and what to do next.",
        headline: (
          <>
            Dependency Health Platform: moving teams onto one <span style={{ color: "var(--ds-mint)" }}>Unified BOM</span> before release.
          </>
        ),
        // Desktop captures at about 1 — nearly square — so each card crops to
        // its top, where the header, the health summary and the first rows sit.
        stackRatio: 1.39,
        stack: [
          {
            src: "/work/dependency-health/pillar.png",
            width: 2880,
            height: 2960,
            alt: "A pillar view: three health measures with a runtime distribution beside them, then every team's services against the same measures",
            route: "/stacklift/home",
            name: "the pillar view",
          },
          {
            src: "/work/dependency-health/development.png",
            width: 2880,
            height: 2560,
            alt: "A product's development view: services with deprecated dependencies, version distribution by library, and a table of services with their version drift",
            route: "/stacklift/products/orion",
            name: "a product's development view",
          },
          {
            src: "/work/dependency-health/remediation.png",
            width: 2596,
            height: 1626,
            alt: "Remediations: every repository with its current stage, point of contact, ticket and pull-request status",
            route: "/stacklift/remediation",
            name: "the remediation list",
          },
        ],
        figureNote: "Confidential internal work. Data and some product names have been replaced.\nScreens as shipped, built on Walmart’s Living Design system.",
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
      {/* The term first, before the problem, as the API page does: a reader
          who does not work in Java should know what an outdated library is
          before being told what it cost. */}
      <div className="mt-14 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="What is an outdated library"
            mark="connection"
            note="Like a phone that still works, until the apps on it start asking for a newer system."
          >
            Almost every application is built on libraries other people wrote. An outdated one
            is a version the team has fallen behind on.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="outdated" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Every release"
            heading="Checking for outdated libraries kept getting left to the last moment"
            body={[
              "Keeping libraries current is a task that runs alongside every release. A library is code a team depends on but did not write, and it falls behind each time a newer approved version ships.",
              "More often than not the check was flagged at the last moment: during a migration, a breakage or security work, close to a release, with little time to absorb it.",
            ]}
          />
          <CaseStudyFigure>
            <ReleaseChecklist
              label="A release: Build, Test and Security review are done, the check for outdated libraries is flagged at the last moment, then the release."
              items={[
                { label: "Build", done: true },
                { label: "Test", done: true },
                { label: "Security review", done: true },
                { label: "Check for outdated libraries", flagged: true, flag: "Flagged at the last moment" },
                { label: "Release", end: true },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="solution">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The idea"
            heading="One team builds the Unified BOM. Every other team onboards to it."
            body={[
              "To shift that check left, the team proposed a Unified BOM, short for bill of materials: one package of approved library versions that one team builds and every other team onboards to.",
              "The package holds the latest version of everything, and not every system or team can move to all of them at once. So it was not forced. Java and Spring Boot are in the package too, and their individual packages stay supported until a team migrates. Some legacy systems keep running on older versions.",
              "The request was a dashboard to monitor. I pushed for it to act as well: a pull request generated to start the upgrade, and a flag a manager can assign to someone instead of only looking at it. The platform team built the scanning and pre-commit checks behind it, and the monitoring ran on existing APIs, so it needed no new work from them.",
            ]}
          />
          <CaseStudyFigure rule label="How a team gets onto the Unified BOM">
            <BeforeAfterModel
              before={{
                heading: "Upgrade each one by hand",
                body: "Teams upgraded libraries one at a time, by hand.",
              }}
              after={{
                glyph: "funnel",
                heading: "One package, already checked",
                body: "The Unified BOM is a single package covering the libraries and Java and Spring Boot, with security and governance checked, so a team onboards to it and tests it.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        {/* After the cost, before the problem: the reader knows what an
            outdated library is and what it costs, and needs to know who
            it costs before being shown a route through it. */}
        <CaseStudySection id="who">
          <ArchetypeSection
            heading="The same libraries. Two very different jobs."
            intro="An engineer fixes the libraries in a repository. An engineer manager answers for the outdated libraries across their teams."
            archetypes={ARCHETYPES}
            basisLabel="12+ teams spoken to"
            basis="I spoke to them to understand how they find and fix library problems today."
          />
        </CaseStudySection>

      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What research pointed to" mark="exchange">
            Engineer managers needed a health report. Engineers needed a simple upgrade path.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="manager" boundary={false} className="pt-16 md:pt-20">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              eyebrow="The engineer manager"
              title="A bird’s-eye view that drills down to the service"
              description={[
                "Outdated libraries used to surface when a release was already close. The dashboard shows it ahead of time, from the organisation down to a single product.",
                "Three levels share one set of measures. The organisation view shows outdated libraries by division, the pillar view by team, and the product view by service, so an engineer manager can see where to look and go there.",
                "Each level opens with one sentence on what the numbers add up to, then the detail behind it.",
              ]}
              scrollable
              maxHeight="44rem"
              label="The engineer manager’s view"
              slides={[
                {
                  title: "The organisation: which divisions have the most outdated libraries?",
                  route: "/stacklift/organisations",
                  src: "/work/dependency-health/organisation.png",
                  width: 2880,
                  height: 2560,
                  alt: "An organisation view: stale artifacts and repositories, version distribution for the Unified BOM, Java and Spring Boot, and a table of divisions",
                  caption: "The organisation view rolls the measures up by division, with a filter for the ones that need attention.",
                  hotspots: [
                    { x: 28.3, y: 43.6, title: "The same sentence at organisation scale", detail: "Artifacts, repositories and enrolment, summarised in one line before any table." },
                    { x: 70, y: 35.3, title: "Version distribution across repositories", detail: "Not onboarded, then each version in use, for the Unified BOM, Java and Spring Boot." },
                    { x: 25.1, y: 56.2, title: "Needs attention, as a filter", detail: "The divisions that need attention are one click from the full list." },
                  ],
                },
                {
                  title: "The pillar: which teams are behind?",
                  route: "/stacklift/home",
                  src: "/work/dependency-health/pillar.png",
                  width: 2880,
                  height: 2960,
                  alt: "A pillar view: three health measures with version distribution for the Unified BOM, Java and Spring Boot beside them, then every team’s services against the same measures",
                  caption: "The pillar view lists every team’s services against the same three measures, so who is furthest behind is a sort away.",
                  hotspots: [
                    { x: 27.8, y: 36.4, title: "The health, in one sentence", detail: "The three measures are followed by a plain statement of what they add up to." },
                    { x: 66.8, y: 30, title: "The Unified BOM beside Java and Spring Boot", detail: "One bar each for the versions in use across the pillar’s services, the outdated releases in orange." },
                    { x: 45.7, y: 61.9, title: "Every team, same measures", detail: "Services and their leads against deprecated dependencies, outdated runtimes and services not registered in the catalogue." },
                  ],
                },
                {
                  title: "The product: which services, and how far behind?",
                  route: "/stacklift/products/orion",
                  src: "/work/dependency-health/development.png",
                  width: 2880,
                  height: 2560,
                  alt: "A product’s development view: services with deprecated dependencies, version distribution by library, and a table of services with their version drift",
                  caption: "At a product the view opens on the state, then the signals behind it, then the services and the button that acts on them.",
                  hotspots: [
                    { x: 28.3, y: 35.2, title: "The state, first", detail: "Two counts and one sentence say how the product stands before anything else is read." },
                    { x: 69.9, y: 29, title: "The signals behind it", detail: "Unified BOM, Java and Spring Boot versions as distributions, the outdated releases in orange." },
                    { x: 93.8, y: 43.4, title: "The action, close by", detail: "Remediate sits at the head of the services it acts on, with the line “Click to remediate and create PR”." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="engineer">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              imageSide="left"
              eyebrow="The engineer"
              title="An engineer goes from what is behind to a pull request"
              description={[
                "An engineer starts from the same product view and needs one thing: what their repository owes, and how to clear it.",
                "Status is deliberately not red and green. A repository can stay on an older version to support a feature, and nobody has to upgrade the moment a new version arrives, so the dashboard flags and highlights in neutral colours, and the table carries a warning where a repository has drifted.",
                "The dashboard shows what has drifted from the Unified BOM, and the remediation flow turns each finding into a pull request the engineer can raise and follow. Where automation can create the code change, it appears at the point of action rather than as a separate tool.",
              ]}
              scrollable
              maxHeight="44rem"
              label="The engineer’s path"
              slides={[
                {
                  title: "My products: start from what you own",
                  route: "/stacklift/home",
                  src: "/work/dependency-health/my-products.png",
                  width: 2880,
                  height: 2070,
                  alt: "My Products: the same measures and version distribution for the Unified BOM, Java and Spring Boot, filtered to the products an engineer owns",
                  caption: "An engineer starts from their own products: the same measures as everyone else’s view, filtered to what they own.",
                  hotspots: [
                    { x: 63.6, y: 13.5, title: "Only my products", detail: "One switch narrows the view from everything to what this engineer owns." },
                    { x: 70.2, y: 31.7, title: "The same versions, for their products", detail: "The Unified BOM, Java and Spring Boot distributions, scoped to the products they own." },
                    { x: 25, y: 62.4, title: "Their products, listed", detail: "Each product against the same measures, with a filter for the ones that need attention." },
                  ],
                },
                {
                  title: "Production: the same view, for artifacts",
                  route: "/stacklift/products/orion",
                  src: "/work/dependency-health/production.png",
                  width: 2880,
                  height: 2128,
                  alt: "A product’s production view: artifacts with outdated dependencies and artifacts not registered in the dependency graph, then a table of artifacts with their versions",
                  caption: "Production keeps the shape, counts first and then the list, with the measures that apply to artifacts rather than services.",
                  hotspots: [
                    { x: 37.5, y: 24.7, title: "The same shape", detail: "A count, a share and a bar for each measure, as on the development tab." },
                    { x: 63.3, y: 47.4, title: "State on the value itself", detail: "A missing registration or a drift is marked on the row it belongs to." },
                    { x: 26, y: 39.6, title: "Filter by library family", detail: "All, Dep Graph, Kotlin or Spring Boot, so the list narrows to one family." },
                  ],
                },
                {
                  title: "Version details: what drifted, and to what",
                  route: "/stacklift/version-details",
                  src: "/work/dependency-health/version-details.png",
                  width: 2880,
                  height: 2334,
                  alt: "Version details for one repository: its libraries grouped by patch and major, each beside the expected version",
                  caption: "A repository’s libraries sit beside the version each should be on, grouped by how big the move is.",
                  hotspots: [
                    { x: 91.8, y: 13.9, title: "Status in the header", detail: "The repository’s standing against the Unified BOM is stated where the page begins." },
                    { x: 33.1, y: 20.6, title: "Narrow to what matters", detail: "All, outdated libraries, or only those where drift was detected." },
                    { x: 76.1, y: 31.4, title: "The version to move to", detail: "The expected version sits beside the one in use, under Patch and Major." },
                  ],
                },
                {
                  title: "Remediations: where each repository has got to",
                  route: "/stacklift/remediation",
                  src: "/work/dependency-health/remediation.png",
                  width: 2596,
                  height: 1626,
                  alt: "Remediations: every repository with its current stage, point of contact, ticket and pull-request status",
                  caption: "Each repository shows its current stage, who to talk to, its ticket and the state of its pull request.",
                  hotspots: [
                    { x: 21.4, y: 39.2, title: "Every repository, in one list", detail: "Each repository with a pull request, filterable by open, merged or closed." },
                    { x: 52.7, y: 49.3, title: "The current step is explicit", detail: "Analysis, then each stage in turn, with an info control beside each." },
                    { x: 87.4, y: 49.3, title: "Pull-request status", detail: "Open, merged or closed on each row, with the pull request one click away." },
                  ],
                },
                {
                  title: "Confirmation: what happens after you ask",
                  route: "/stacklift/remediation/confirmation",
                  src: "/work/dependency-health/remediation-success.png",
                  width: 2880,
                  height: 1794,
                  alt: "Confirmation of remediation: repository analysis in progress, with the repositories, their stage, point of contact and tickets marked ready for review",
                  caption: "The confirmation says what is happening and what comes next, rather than leaving a button pressed and nothing said.",
                  hotspots: [
                    { x: 30.7, y: 21.7, title: "Says what is happening", detail: "Repository analysis in progress, with a line on how you will be told and that you are the point of contact." },
                    { x: 79.8, y: 22.6, title: "The next step beside it", detail: "View Remediation PRs is the first action, with the platform team one control away." },
                    { x: 92.2, y: 33.3, title: "A ticket for each repository", detail: "Each repository has its own ticket, marked ready for review." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="catalogue">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The Unified BOM"
            heading="The Unified BOM has a home of its own"
            body={[
              "The catalogue lists the latest Unified BOM, how far adoption has got, and every managed dependency, so a team can see what it is moving onto before it moves.",
              "It is also where the gap shows: repositories and artifacts not yet onboarded, as a count and a share.",
            ]}
          />
          <CaseStudyFigure>
            <BrowserMockup
              route="/stacklift/dependency-catalog"
              src="/work/dependency-health/catalog.png"
              width={2880}
              height={2020}
              alt="The BOM catalogue: the latest version, how many repositories and artifacts are not yet onboarded, and the managed dependencies for the selected version"
              scrollable
              maxHeight="34rem"
              hotspots={[
                { x: 26.7, y: 20.3, title: "The current version, named", detail: "The latest version of the BOM sits beside its title." },
                { x: 85.6, y: 24.2, title: "How far adoption has got", detail: "Repositories and artifacts not yet onboarded, each as a count, a share and a bar." },
                { x: 55, y: 54.2, title: "Every managed dependency", detail: "Group, artifact and version for the selected release, searchable by any of the three." },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="evidence">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Current evidence"
            heading="More than 5K repositories have moved onto the Unified BOM"
            body={[
              "The platform has shipped. More than 5K repositories have migrated, and the platform gives dependency-health visibility from individual repositories through pillar and organisation views, alongside self-service onboarding and remediation.",
              "Product health is a score based on how many of a product\u2019s repositories are up to date. Fewer library issues arriving at release is what shifting left was for.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { from: "3 days", value: "~2 hrs", label: "for a team to migrate its libraries", glyph: "ring" },
                { value: "40%", label: "fewer library issues during releases", glyph: "bars" },
                { value: "80%", label: "increase in product health", glyph: "ramp" },
              ]}
            />
          </CaseStudyFigure>
          <Reveal>
            <NoteCard
              label="Where it went"
              heading="A skill and an MCP now check and remediate product health"
              body="With them, someone can check a product\u2019s health, get a report, create a Jira ticket and assign it, alongside the dashboard."
              mark="AI"
              sparkle
            />
          </Reveal>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="seam">
            A status should always say what to do next, not only what is wrong.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
