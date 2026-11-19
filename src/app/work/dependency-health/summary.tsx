import type { ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Dependency Health summary shows under its opener. Every line is the case study's own wording, cut down.
 */
const SLIDES: ArtboardSlide[] = [
  {
                  title: "The organisation: which divisions have the most outdated libraries?",
                  route: "/stacklift/organisations",
                  src: "/work/dependency-health/organisation.png",
                  width: 2880,
                  height: 2560,
                  alt: "An organisation view: stale artifacts and repositories, version distribution for the Unified BOM, Java and Spring Boot, and a table of divisions",
                  caption: "The organisation view rolls the measures up by division, with a filter for the ones that need attention.",
                  hotspots: [
                    { x: 28.3, y: 43.6, title: "A one-line summary first", detail: "How many libraries and code repositories there are, and how many have joined, in one line before any table." },
                    { x: 70, y: 35.3, title: "Which versions are in use", detail: "For the Unified BOM (the one approved set of libraries), Java and Spring Boot: those not yet joined, then each version in use." },
                    { x: 25.1, y: 56.2, title: "Jump to what needs attention", detail: "The divisions that need attention are one click away from the full list." },
                  ],
                },
  {
                  title: "The business area: which teams are behind?",
                  route: "/stacklift/home",
                  src: "/work/dependency-health/pillar.png",
                  width: 2880,
                  height: 2960,
                  alt: "A pillar view: three health measures with version distribution for the Unified BOM, Java and Spring Boot beside them, then every team’s services against the same measures",
                  caption: "The business-area view lists every team’s services against the same three measures, so who is furthest behind is a sort away.",
                  hotspots: [
                    { x: 27.8, y: 36.4, title: "Health, in one sentence", detail: "Three measures are followed by a plain statement of what they add up to." },
                    { x: 66.8, y: 30, title: "Three bars, one per technology", detail: "Each bar shows the versions in use across the business area’s services, with outdated releases in orange." },
                    { x: 45.7, y: 61.9, title: "Every team, same measures", detail: "Each team’s services and leads are set against deprecated libraries, outdated runtimes and services missing from the catalogue (the company’s list of services)." },
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
                    { x: 28.3, y: 35.2, title: "How the product stands, first", detail: "Two counts and one sentence say where the product stands before anything else is read." },
                    { x: 69.9, y: 29, title: "What sits behind it", detail: "Unified BOM, Java and Spring Boot versions as bars, with the outdated releases in orange." },
                    { x: 93.8, y: 43.4, title: "The fix sits beside the problem", detail: "Remediate (fix by upgrading) sits at the head of the services it acts on, with the line “Click to remediate and create PR”, a pull request being a proposed code change." },
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
                    { x: 91.8, y: 13.9, title: "Where it stands, at the top", detail: "The repository’s standing against the Unified BOM is stated where the page begins." },
                    { x: 33.1, y: 20.6, title: "Narrow to what matters", detail: "Show all, only outdated libraries, or only those that have drifted from the approved version." },
                    { x: 76.1, y: 31.4, title: "The version to move to", detail: "The expected version sits next to the one in use, under Patch and Major (small and big updates)." },
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
                    { x: 21.4, y: 39.2, title: "Every repository, one list", detail: "Each repository with a pull request (a proposed code change), filterable by open, merged or closed." },
                    { x: 52.7, y: 49.3, title: "The current step is clear", detail: "Analysis, then each stage in turn, with an info control beside each." },
                    { x: 87.4, y: 49.3, title: "Status of each pull request", detail: "Open, merged or closed on each row, with the pull request one click away." },
                  ],
                },
];

export function DependencyHealthSummary() {
  return (
    <SummaryStory
      slug="dependency-health"
      beats={[
        {
          label: "Why it mattered",
          lead: "Unexpected library rework kept pushing release dates.",
          detail: "Teams found library problems late, close to a release, not ahead of it.",
        },
        {
          label: "What we built",
          lead: "One approved set of libraries, and a guided way onto it.",
          detail: "One package of approved library versions that one team builds and every other team moves onto, instead of upgrading each library by hand.",
        },
        {
          label: "What I did",
          lead: "I designed a dashboard that ends in a pull request.",
          detail: "I pushed for the dashboard to act as well, with a flow that helps engineers raise pull requests and manage them.",
        },
      ]}
      carousel={{
        eyebrow: "The platform",
        title: "From the organisation down to the pull request",
        description:
          "Five screens go from a division's view of its libraries down to a repository's drift, and the remediation that follows it.",
        label: "The platform, from the organisation to the pull request",
        slides: SLIDES,
      }}
      results={[
                { from: "3 days", value: "~2 hrs", label: "for a team to migrate its libraries", glyph: "ring" },
                { value: "40%", label: "fewer library issues during releases", glyph: "bars" },
                { value: "80%", label: "increase in product health score", glyph: "ramp" },
              ]}
    />
  );
}
