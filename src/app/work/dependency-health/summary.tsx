import { DotNodes, type DotNode } from "@/components/design-system/DotNodes";
import { StorySummary, StoryDots, StoryScreen, StoryVisual, StoryWords } from "@/components/design-system/StorySummary";
import type { StoryStep } from "@/components/design-system/ScrollStory";
import type { HeroStackScreen } from "@/components/design-system/HeroScreenStack";

/** The case study hero's own screens, shown in the opening as the same deck. */
const HERO_SCREENS: HeroStackScreen[] = [
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
];

/**
 * The Dependency Health summary: the case study told by scrolling, down the
 * levels the platform is read at, from the organisation to a pull request.
 * Every line is the case study's own wording; the only new words are the notes
 * under the dots. The first step carries the research (12+ teams spoken to).
 * See the design system, section N, for the conditions.
 */

/** The five steps of a release, as the case study draws them. */
const RELEASE: DotNode[] = ["Build", "Test", "Security review", "Libraries check", "Release"].map((label) => ({ label }));

/** The levels the platform is read at, from widest to narrowest. */
const LEVELS: DotNode[] = ["Organisation", "Business area", "Product", "Repository", "Pull request"].map((label) => ({ label }));

/** A step down the levels: the levels with one dot lit, and the real screen of that level under it. */
function levelVisual(active: number, src: string, alt: string, width: number, height: number) {
  return (
    <StoryVisual dots={<DotNodes nodes={LEVELS} state="connected" active={active} label={`Level ${active + 1} of the platform: ${LEVELS[active].label}`} />}>
      <StoryScreen src={src} alt={alt} width={width} height={height} />
    </StoryVisual>
  );
}

const STEPS: StoryStep[] = [
  {
    label: "How we found it",
    text: (
      <StoryWords
        eyebrow="How we found it"
        title="12+ teams showed us the check for outdated libraries came too late."
        points={[
          "I spoke to 12+ teams to understand how they find and fix library problems today.",
          "A library (code a team depends on but did not write) was usually checked at the last moment, close to a release.",
          "Engineering managers needed a health report. Engineers needed a simple upgrade path.",
        ]}
      />
    ),
    visual: (
      <StoryDots
        nodes={RELEASE}
        state="connected"
        active={3}
        label="A release in five steps, with the check for outdated libraries coming fourth, just before the release"
        note="The check for outdated libraries came just before the release."
      />
    ),
  },
  {
    label: "What we built",
    text: (
      <StoryWords
        eyebrow="What we built"
        title="One approved library set, and a dashboard ending in a pull request."
        points={[
          "We built around a Unified BOM, one package of approved library versions that one team builds and every other team moves onto.",
          "It was not forced: some legacy systems keep running on older versions.",
          "The dashboard shows what has drifted, and each finding becomes a pull request (a proposed code change).",
        ]}
      />
    ),
    visual: (
      <StoryDots
        nodes={LEVELS}
        state="connected"
        label="The five levels of the platform, joined from the organisation to the pull request"
        note="The same five levels, now linked from the organisation to the pull request."
      />
    ),
  },
  {
    label: "Organisation",
    text: (
      <StoryWords
        eyebrow="Organisation"
        title="The organisation view shows which divisions have the most outdated libraries."
        points={[
          "One line first: how many libraries and repositories there are, and how many have joined.",
          "Bars show which versions of the Unified BOM, Java and Spring Boot are in use.",
          "The divisions that need attention are one click away.",
        ]}
      />
    ),
    visual: levelVisual(
      0,
      "/work/dependency-health/organisation.png",
      "An organisation view: stale artifacts and repositories, version distribution for the Unified BOM, Java and Spring Boot, and a table of divisions",
      2880,
      2560,
    ),
  },
  {
    label: "Business area",
    text: (
      <StoryWords
        eyebrow="Business area"
        title="The business-area view shows which teams are furthest behind."
        points={[
          "Three measures, then one sentence on what they add up to.",
          "Every team’s services sit against the same measures: deprecated libraries, outdated runtimes and services missing from the catalogue.",
          "Who is furthest behind is a sort away.",
        ]}
      />
    ),
    visual: levelVisual(
      1,
      "/work/dependency-health/pillar.png",
      "A pillar view: three health measures with version distribution for the Unified BOM, Java and Spring Boot beside them, then every team’s services against the same measures",
      2880,
      2960,
    ),
  },
  {
    label: "Product",
    text: (
      <StoryWords
        eyebrow="Product"
        title="The product view says where it stands, then lists the services."
        points={[
          "Two counts and one sentence say where the product stands before anything else.",
          "Remediate (fix by upgrading) sits at the head of the services it acts on.",
        ]}
      />
    ),
    visual: levelVisual(
      2,
      "/work/dependency-health/development.png",
      "A product’s development view: services with deprecated dependencies, version distribution by library, and a table of services with their version drift",
      2880,
      2560,
    ),
  },
  {
    label: "Repository",
    text: (
      <StoryWords
        eyebrow="Repository"
        title="Version details show what drifted and what to move to."
        points={[
          "The repository’s standing against the Unified BOM is stated where the page begins.",
          "The version to move to sits beside the one in use, grouped as patch and major (small and big updates).",
          "Status is deliberately not red and green: a repository can stay on an older version to support a feature.",
        ]}
      />
    ),
    visual: levelVisual(
      3,
      "/work/dependency-health/version-details.png",
      "Version details for one repository: its libraries grouped by patch and major, each beside the expected version",
      2880,
      2334,
    ),
  },
  {
    label: "Pull request",
    text: (
      <StoryWords
        eyebrow="Pull request"
        title="Each finding becomes a pull request the engineer can raise and follow."
        points={[
          "Each repository shows its current stage, who to talk to, its ticket and the state of its pull request.",
          "Where automation can create the code change, it appears at the point of action, not as a separate tool.",
        ]}
      />
    ),
    visual: levelVisual(
      4,
      "/work/dependency-health/remediation.png",
      "Remediations: every repository with its current stage, point of contact, ticket and pull-request status",
      2596,
      1626,
    ),
  },
  {
    label: "What I did",
    text: (
      <StoryWords
        eyebrow="What I did"
        title="I designed a dashboard that ends in a pull request."
        points={[
          "The request was a dashboard to monitor library health at every level.",
          "I pushed for it to act as well, with a flow that helps engineers raise and manage pull requests.",
          "The platform team built the scanning behind it.",
        ]}
      />
    ),
    visual: <StoryDots nodes={LEVELS} state="connected" label="The five levels of the platform, joined from the organisation to the pull request" />,
  },
];

export function DependencyHealthSummary() {
  return (
    <StorySummary
      slug="dependency-health"
      title="Dependency Health Platform"
      standfirst="I designed the dashboard where Walmart developers see which dependencies need attention, and a remediation flow that ends in a pull request. A team now migrates its libraries in about 2 hours, down from 3 days."
      heroScreens={HERO_SCREENS}
      heroRatio={1.39}
      introAlt="Screens from the platform"
      storyLabel="Dependency Health Platform, told step by step"
      steps={STEPS}
      results={{
        title: "A team migrates its libraries in about 2 hours, down from 3 days.",
        points: [
          "More than 5K repositories have migrated.",
          "The 40% and 80% are measured against the six months before.",
        ],
        items: [
          { value: "~2 hrs", label: "for a team to migrate its libraries, down from 3 days", glyph: "ring" },
          { value: "40%", label: "fewer library issues during releases, against the six months before", glyph: "bars" },
          { value: "80%", label: "increase in product health score, against the six months before", glyph: "ramp" },
        ],
      }}
    />
  );
}
