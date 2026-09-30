import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { ClipFigure } from "@/components/design-system/ClipFigure";
import { ProofStrip } from "@/components/design-system/ProofStrip";
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
 * The draft is explicit that the programme is active and that it would
 * rather show verified change than invent a stronger metric, so the only
 * figure on the page is the 148-repository pilot the draft states. The
 * numbers visible inside the screens are the fictional data they were
 * reconstructed with; none of them is quoted.
 */

export const metadata: Metadata = {
  title: "Dependency Health Platform — Moving teams onto one Unified BOM before release",
  description:
    "One platform for engineers and tech leads: which library versions are behind, why it matters, and a guided way onto the Unified BOM.",
  robots: caseStudyRobots,
};

const CHAPTERS = [
  { id: "problem", label: "The problem" },
  { id: "goals", label: "The goals" },
  { id: "solution", label: "The idea" },
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
      slug="dependency-health"
      evidenceCaveat="The platform is still in progress."
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
            "Teams found library issues during migrations, breakages or security work, not ahead of it. Blind spots in their dependencies cost productivity, and the stability of standardising on the Unified BOM went unused.",
        },
        {
          label: "The solution",
          lead: (
            <>
              One Unified BOM, and <span className="ds-accent-text">a guided way onto it</span>.
            </>
          ),
          detail:
            "A Unified BOM: one package of approved library versions that teams migrate to as a batch, not one library at a time, along with Java and Spring Boot, which stay supported as individual packages until a team moves across.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I own the UX for <span className="ds-accent-text">one platform</span> serving leadership and execution.
            </>
          ),
          detail:
            "One Repository → Pillar → Organisation model gives leaders a bird’s-eye view, and gives engineers their repository’s debt and the remediation to clear it. The platform team built the scanning and pre-commit checks; I ran a 148-repository pilot on the initial major version.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "The platform Walmart developers and engineering leaders open to see which dependencies in a repository need attention, why they matter, and what to do next.",
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
        figureNote: "The interface is as it shipped, built on Living Design — Walmart's design system. I have replaced the data and some product names, because the work is internal.",
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
        <CaseStudySection id="problem" boundary={false} className="pt-14 md:pt-20">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              eyebrow="The problem"
              title="Unexpected library rework kept pushing release dates"
              description={[
                "Teams often found library problems during a migration, a breakage or security work, rather than through visibility that came early.",
                "Blind spots in their dependencies cost them productivity, and the stability of standardising on the Unified BOM went unused.",
                "Two people needed different things from the same data. An engineer needed the debt in their repository and a way to clear it. A tech lead needed a bird’s-eye view of the debt across their teams.",
                "The same underlying data needed a different hierarchy for each.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Two people, one model"
              slides={[
                {
                  title: "The engineer: what does my repository owe?",
                  route: "/stacklift/products/orion",
                  src: "/work/dependency-health/development.png",
                  width: 2880,
                  height: 2560,
                  alt: "A product's development view: services with deprecated dependencies, version distribution by library, and a table of services with their version drift",
                  caption: "An engineer starts from one product: how many services are behind, then which ones, with the drift beside each.",
                },
                {
                  title: "The leader: how are my teams doing?",
                  route: "/stacklift/home",
                  src: "/work/dependency-health/pillar.png",
                  width: 2880,
                  height: 2960,
                  alt: "A pillar view: three health measures with a runtime distribution beside them, then every team's services against the same measures",
                  caption: "A tech lead sees every team’s services against the same three measures, so who is furthest behind is a sort away.",
                  hotspots: [
                    { x: 27.8, y: 36.4, title: "The health, in one sentence", detail: "The three measures are followed by a plain statement of what they add up to, above the detail." },
                    { x: 66.8, y: 30, title: "The Unified BOM beside Java and Spring Boot", detail: "One bar each for the versions in use across the pillar’s services, the outdated releases in orange." },
                    { x: 45.7, y: 61.9, title: "Every team, same measures", detail: "Services and their leads against deprecated dependencies, outdated runtimes and services not registered in the catalogue." },
                  ],
                },
                {
                  title: "The leader, a level up: how is the organisation doing?",
                  route: "/stacklift/organisations",
                  src: "/work/dependency-health/organisation.png",
                  width: 2880,
                  height: 2560,
                  alt: "An organisation view: stale artifacts and repositories, version distribution by library, and a table of divisions",
                  caption: "The organisation view rolls the same measures up by division, with a filter for the ones that need attention.",
                  hotspots: [
                    { x: 28.3, y: 43.6, title: "The same sentence at organisation scale", detail: "Artifacts, repositories and enrolment, summarised in one line before any table." },
                    { x: 70, y: 35.3, title: "Version distribution across repositories", detail: "Not onboarded, then each version in use, for the Unified BOM, Java and Spring Boot." },
                    { x: 25.1, y: 56.2, title: "Needs attention, as a filter", detail: "The divisions that need attention are one click from the full list of divisions." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What research pointed to" mark="connection">
            The data needed to be organised around the decisions people were trying to make.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="goals" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The goals"
            heading="The aim was to find library problems before they became rework"
            body={[
              "Shift left: find and fix library issues early, so fewer bugs are fixed late.",
              "Adopt the Unified BOM faster: one standard package of library versions across teams means less to maintain.",
              "Raise code quality and developer productivity as a result.",
            ]}
          />
          <CaseStudyFigure rule label="Where the problem is found">
            <BeforeAfterModel
              before={{
                heading: "Found late",
                body: "During a migration, a breakage or security work.",
              }}
              after={{
                heading: "Found early",
                body: "Before code is integrated, and before it becomes a release problem.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="solution">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The idea"
            heading="One Unified BOM, migrated as a batch"
            body={[
              "The team proposed a Unified BOM, short for bill of materials: one package of approved library versions that a team moves onto together, instead of updating libraries one at a time. Until a team migrates, its Java and Spring Boot packages stay supported as individual packages, and some legacy systems had to keep running on older versions.",
              "Underneath, the platform scans repositories for library issues and checks for problems before code is integrated. The platform team built that. I designed how it reaches people: what an engineer sees in their repository, what a leader sees across their teams, and the path from one to the other.",
            ]}
          />
          <CaseStudyFigure rule label="How a team gets onto the Unified BOM">
            <BeforeAfterModel
              before={{
                heading: "Package by package",
                body: "Java and Spring Boot packages, each updated on its own.",
              }}
              after={{
                glyph: "funnel",
                heading: "One Unified BOM, as a batch",
                body: "One package of approved versions that a team moves onto together.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="decision-model" >
          <Reveal>
            <ArtboardCarousel
              layout="split"
              imageSide="left"
              eyebrow="The model"
              title="I turned technical signals into a decision model"
              description={[
                "The highest-leverage design work happened before the dashboard.",
                "I mapped signals such as the Unified BOM version, Java and Spring Boot versions, feature-library freshness, conflicts, and version drift against two questions: who needs this, and what decision does it help them make?",
                "That produced a layered health model rather than a wall of metrics. For a repository, the experience begins with a concise overall state and the issues requiring attention. Detail opens progressively for diagnosis. The next action remains close to the status that created the question.",
                "The interaction principle became: summary for orientation, diagnosis for understanding, action for resolution.",
              ]}
              scrollable
              maxHeight="44rem"
              label="How a repository view opens up"
              slides={[
                {
                  title: "Development: summary, diagnosis, action",
                  route: "/stacklift/products/orion",
                  src: "/work/dependency-health/development.png",
                  width: 2880,
                  height: 2560,
                  alt: "A product's development view: services with deprecated dependencies, version distribution by library, and a table of services with their version drift",
                  caption: "The view opens on the state, then the signals behind it, then the services and the button that acts on them.",
                  hotspots: [
                    { x: 28.3, y: 35.2, title: "Summary for orientation", detail: "Two counts and one sentence say how the product stands before anything else is read." },
                    { x: 69.9, y: 29, title: "Diagnosis for understanding", detail: "Unified BOM, Java and Spring Boot versions as distributions, the outdated releases in orange." },
                    { x: 93.8, y: 43.4, title: "Action for resolution", detail: "Remediate sits at the head of the services it acts on, with the line “Click to remediate and create PR”." },
                  ],
                },
                {
                  title: "Production: the same model, for artifacts",
                  route: "/stacklift/products/orion",
                  src: "/work/dependency-health/production.png",
                  width: 2880,
                  height: 2128,
                  alt: "A product's production view: artifacts with outdated dependencies and artifacts not registered in the dependency graph, then a table of artifacts with their versions",
                  caption: "Production keeps the shape (counts, then the list) with the measures that apply to artifacts rather than services.",
                  hotspots: [
                    { x: 37.5, y: 24.7, title: "The same shape", detail: "A count, a share and a bar for each measure, as on the development tab." },
                    { x: 63.3, y: 47.4, title: "State on the value itself", detail: "A missing registration or a drift is marked on the row it belongs to." },
                    { x: 26, y: 39.6, title: "Filter by library family", detail: "All, Dep Graph, Kotlin or Spring Boot, so the list narrows to one family." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="guided">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              eyebrow="Remediation"
              title="Compliance became a guided path, not a warning state"
              description={[
                "Repositories that are behind may need several technical changes in sequence: updating enforcement, removing legacy libraries, upgrading Java or Spring Boot, or moving onto the current Unified BOM.",
                "A red status can tell an engineer something is wrong without helping them understand how to recover.",
                "I designed onboarding and remediation as a progressive journey. The current step is explicit, completed work remains visible, dependencies between steps are clear, and each stage explains the expected action and outcome.",
                "Where automation can help create the required code change, it appears at the point of action rather than as a disconnected capability.",
              ]}
              scrollable
              maxHeight="44rem"
              label="The remediation path"
              slides={[
                {
                  title: "The BOM everything is measured against",
                  route: "/stacklift/dependency-catalog",
                  src: "/work/dependency-health/catalog.png",
                  width: 2880,
                  height: 2020,
                  alt: "The BOM catalogue: the latest version, how many repositories and artifacts are not yet onboarded, and the managed dependencies for the selected version",
                  caption: "The approved BOM has a home of its own: the latest version, how far adoption has got, and every managed dependency.",
                  hotspots: [
                    { x: 25.2, y: 20.3, title: "The current version, named", detail: "The latest version of the BOM sits beside its title." },
                    { x: 85.6, y: 24.2, title: "How far adoption has got", detail: "Repositories and artifacts not yet onboarded, each as a count, a share and a bar." },
                    { x: 55, y: 54.2, title: "Every managed dependency", detail: "Group, artifact and version for the selected release, searchable by any of the three." },
                  ],
                },
                {
                  title: "Where a repository has drifted",
                  route: "/stacklift/version-details",
                  src: "/work/dependency-health/version-details.png",
                  width: 2880,
                  height: 2334,
                  alt: "Version details for one repository: its libraries grouped by patch and major, each beside the expected version",
                  caption: "A repository's libraries sit beside the version each should be on, grouped by how big the move is.",
                  hotspots: [
                    { x: 91.8, y: 13.9, title: "Status in the header", detail: "The repository’s standing against the BOM is stated where the page begins." },
                    { x: 33.1, y: 20.6, title: "Narrow to what matters", detail: "All, outdated libraries, or only those where drift was detected." },
                    { x: 76.1, y: 31.4, title: "The version to move to", detail: "The expected version sits beside the one in use, under Patch and Major." },
                  ],
                },
                {
                  title: "Every repository, and where it has got to",
                  route: "/stacklift/remediation",
                  src: "/work/dependency-health/remediation.png",
                  width: 2596,
                  height: 1626,
                  alt: "Remediations: every repository with its current stage, point of contact, ticket and pull-request status",
                  caption: "Each repository shows its current stage, who to talk to, its ticket and the state of its pull request.",
                  hotspots: [
                    { x: 21.4, y: 39.2, title: "The pilot, in one list", detail: "The repositories in the initial major-version pilot, filterable by open, merged or closed." },
                    { x: 52.7, y: 49.3, title: "The current step is explicit", detail: "Analysis, then each stage in turn, with an info control beside each." },
                    { x: 87.4, y: 49.3, title: "Pull-request status", detail: "Open, merged or closed on each row, with the pull request one click away." },
                  ],
                },
                {
                  title: "What happens after you ask",
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

        <CaseStudySection id="scale">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Scale"
            heading="The same health model had to work at different levels of scale"
            body={[
              "Repository health is useful to an individual team. It becomes a different design problem when leaders need to understand hundreds of repositories together.",
              "Pillar and organisation views aggregate the same health model for comparison and prioritisation, while governance reporting opens into deeper filtering and analysis.",
              "The product therefore uses one underlying language across different decision contexts rather than inventing a new dashboard at every level.",
            ]}
          />
          <CaseStudyFigure>
            <ClipFigure
              mp4="/work/dependency-health/walkthrough.mp4"
              webm="/work/dependency-health/walkthrough.webm"
              poster="/work/dependency-health/walkthrough-poster.jpg"
              width={1600}
              height={1123}
              alt="The repository, pillar, organisation, remediation and catalogue screens moving past one another: one set of measures and one layout at every level"
              caption="Repository, pillar, organisation, remediation and catalogue, on one layout and one set of measures."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="tokens">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="After launch"
            heading="Post-launch feedback became a systems problem"
            body={[
              "After launch, developers had different preferences for how dashboard states should be represented visually.",
              "Instead of hard-coding alternate colours into individual components, we moved the product towards semantic design tokens and theme-level control. The same meaning could remain consistent while presentation changed across themes.",
            ]}
          />
          <CaseStudyFigure rule label="Where the decision moved to">
            <BeforeAfterModel
              before={{
                heading: "The request: a different look",
                body: "Developers wanted the states on the dashboard shown differently.",
              }}
              after={{
                heading: "The decision: tokens and themes",
                body: "Semantic tokens and theme-level control, so the meaning stays the same while the presentation changes.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="evidence">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Current evidence"
            heading="What changed once teams moved across"
            body={[
              "The product is live and continues to evolve. After a 148-repository pilot on the initial major version, more than 5K repositories have migrated, and the platform supports dependency-health visibility from individual repositories through pillar and organisation views, alongside self-service onboarding and remediation.",
              "Fewer library issues arriving at release is what shifting left was for.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { from: "148", value: "5K+", label: "repositories migrated, from the initial pilot", glyph: "funnel" },
                { value: "40%", label: "fewer library issues during releases", glyph: "drop" },
                { value: "80%", label: "increase in product health", glyph: "ramp" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="seam">
            A compliance state should always explain the path forward, not only what is wrong.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
