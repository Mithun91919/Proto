import type { Project, ProjectDomain } from "@/content/projects";
import type { EarlierWorkEntry } from "@/content/work-page";

/**
 * Shared data for the /work page filters. Three orthogonal axes, so each
 * one answers a single question rather than mixing two:
 *
 *  - Domain    — who the product is for (sector)
 *  - Platform  — what surface it runs on
 *  - Craft     — what kind of design work the project involved
 *
 * The earlier flat "type" facet mixed craft with deliverable and the
 * domain facet mixed sector with platform ("Consumer and mobile"), which
 * is how an internal frontline tool ended up filed next to consumer apps.
 *
 * `Project` carries its own `domain`; `EarlierWorkEntry` has no such field
 * (it predates any need for one) — this lookup fills it in rather than a
 * third pass at that type for a facet it never had.
 */
const EARLIER_WORK_DOMAIN: Record<string, ProjectDomain> = {
  "bigbasket-ratings-reviews": "Commerce",
  "hike-jobs-service": "Consumer",
  "hike-movie-tickets": "Consumer",
  "hike-total-os-localization": "Consumer",
  "creo-mark-1": "Consumer",
};

export function earlierWorkDomain(slug: string | undefined): ProjectDomain {
  return (slug && EARLIER_WORK_DOMAIN[slug]) || "Consumer";
}

export const ALL_DOMAINS: ProjectDomain[] = [
  "Enterprise",
  "Developer tools",
  "Consumer",
  "Commerce",
  "Frontline ops",
];

/* ── Platform ─────────────────────────────────────────────────────────── */

export type ProjectPlatform = "Web" | "Mobile";

export const ALL_PLATFORMS: ProjectPlatform[] = ["Web", "Mobile"];

const PROJECT_PLATFORMS: Record<string, ProjectPlatform[]> = {
  "portfolio-management": ["Web"],
  "api-lifecycle": ["Web"],
  "dependency-health": ["Web"],
  "supply-chain-operations": ["Web"],
  "store-support": ["Mobile"],
  "bb-daily": ["Mobile"],
  "bigbasket-ratings-reviews": ["Web", "Mobile"],
  "hike-jobs-service": ["Mobile"],
  "hike-movie-tickets": ["Mobile"],
  "hike-total-os-localization": ["Mobile"],
  "creo-mark-1": ["Web"],
};

export function projectPlatforms(slug: string): ProjectPlatform[] {
  return PROJECT_PLATFORMS[slug] ?? [];
}

/* ── Craft ────────────────────────────────────────────────────────────── */

/**
 * The disciplines a project genuinely involved — not the twenty-odd raw
 * tags each card carries, and not one coarse label either. A card's own
 * tags stay specific (Governance, Navigation); this is the shared lens a
 * recruiter scans across the whole list, so it stays to six names with
 * real edges between them (UX ≠ UI ≠ Design Systems).
 */
export type ProjectCraft =
  | "Research"
  | "UX"
  | "UI"
  | "Design Systems"
  | "Visual & Brand"
  | "Localisation";

export const ALL_CRAFT: ProjectCraft[] = [
  "Research",
  "UX",
  "UI",
  "Design Systems",
  "Visual & Brand",
  "Localisation",
];

const PROJECT_CRAFT: Record<string, ProjectCraft[]> = {
  "portfolio-management": ["Research", "UX", "UI", "Design Systems"],
  "api-lifecycle": ["Research", "UX", "UI", "Design Systems"],
  "dependency-health": ["Research", "UX", "UI"],
  "supply-chain-operations": ["Research", "UX"],
  "store-support": ["Research", "UX", "UI"],
  "bb-daily": ["Research", "UX", "UI"],
  "bigbasket-ratings-reviews": ["UX", "UI"],
  "hike-jobs-service": ["Research", "UX", "UI"],
  "hike-movie-tickets": ["Research", "UX", "UI"],
  "hike-total-os-localization": ["Research", "Localisation"],
  "creo-mark-1": ["Visual & Brand", "UI"],
};

export function projectCraft(slug: string): ProjectCraft[] {
  return PROJECT_CRAFT[slug] ?? [];
}

/* ── Options actually present ─────────────────────────────────────────── */

/** Every domain / platform / craft value that has at least one project
    behind it, so the filter never offers a dead chip. */
export function collectFilterOptions(
  featured: Project[],
  more: Project[],
  earlier: EarlierWorkEntry[],
): {
  domains: ProjectDomain[];
  platforms: ProjectPlatform[];
  crafts: ProjectCraft[];
} {
  const domains = new Set<ProjectDomain>();
  const platforms = new Set<ProjectPlatform>();
  const crafts = new Set<ProjectCraft>();

  const add = (slug: string | undefined, domain: ProjectDomain) => {
    domains.add(domain);
    if (!slug) return;
    projectPlatforms(slug).forEach((p) => platforms.add(p));
    projectCraft(slug).forEach((c) => crafts.add(c));
  };

  for (const p of [...featured, ...more]) add(p.slug, p.domain);
  for (const e of earlier) add(e.slug, earlierWorkDomain(e.slug));

  return {
    domains: ALL_DOMAINS.filter((d) => domains.has(d)),
    platforms: ALL_PLATFORMS.filter((p) => platforms.has(p)),
    crafts: ALL_CRAFT.filter((c) => crafts.has(c)),
  };
}
