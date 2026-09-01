import type { Project, ProjectDomain } from "@/content/projects";
import type { EarlierWorkEntry } from "@/content/work-page";

/**
 * Shared data for the /work page's domain + type filters.
 *
 * `Project` already carries a `domain`; `EarlierWorkEntry` has no such field
 * (it predates any need for one) — this is a small lookup rather than
 * touching that type again, since the two prior additions to it for a
 * feature that was later dropped is reason enough to keep this one
 * external instead of a third pass at the same file.
 */
const EARLIER_WORK_DOMAIN: Record<string, ProjectDomain> = {
  "bigbasket-ratings-reviews": "Consumer and mobile",
  "hike-jobs-service": "Consumer and mobile",
  "hike-movie-tickets": "Consumer and mobile",
  "hike-total-os-localization": "Consumer and mobile",
  "creo-mark-1": "Consumer and mobile",
};

export function earlierWorkDomain(slug: string | undefined): ProjectDomain {
  return (slug && EARLIER_WORK_DOMAIN[slug]) || "Consumer and mobile";
}

/**
 * Five disciplines, not the twenty-odd raw tags each card carries.
 *
 * The cards' own tags stay exactly as they are — specific, sometimes
 * one-off (Governance, Navigation) — because reading one card at a time,
 * that detail is useful. Scanning eleven cards' worth as a bank of filter
 * chips is a different task, and twenty near-synonyms (Platform Design,
 * Platform UX, Enterprise UX, Systems Design all describing the same kind
 * of large-scale structural work) made the filter itself the confusing
 * thing. Every raw tag still maps into exactly one of these — nothing
 * here contradicts a card's own tags, it's a coarser lens over the same
 * facts, chosen per project rather than mechanically merged.
 */
export type ProjectType =
  | "Product Design"
  | "Systems & Platform Design"
  | "Research"
  | "Localization"
  | "Visual & Brand Design";

export const ALL_TYPES: ProjectType[] = [
  "Product Design",
  "Systems & Platform Design",
  "Research",
  "Localization",
  "Visual & Brand Design",
];

const PROJECT_TYPES: Record<string, ProjectType[]> = {
  // Large-scale structural work — architecture, information design, and
  // navigation across a system, not a single product surface.
  "portfolio-management": ["Systems & Platform Design"],
  "api-lifecycle": ["Systems & Platform Design"],
  "dependency-health": ["Systems & Platform Design"],
  "supply-chain-operations": ["Systems & Platform Design"],
  // Hands-on interface and interaction design for a customer-facing (or
  // frontline-facing) product.
  "store-support": ["Product Design", "Research"],
  "bb-daily": ["Product Design"],
  "bigbasket-ratings-reviews": ["Product Design"],
  "hike-jobs-service": ["Product Design"],
  "hike-movie-tickets": ["Product Design"],
  // Distinct enough from either bucket to name on its own rather than
  // fold in and lose what actually makes it different.
  "hike-total-os-localization": ["Localization"],
  "creo-mark-1": ["Visual & Brand Design"],
};

export function projectTypes(slug: string): ProjectType[] {
  return PROJECT_TYPES[slug] ?? [];
}

export const ALL_DOMAINS: ProjectDomain[] = [
  "Enterprise platforms",
  "Developer tools",
  "Consumer and mobile",
  "AI and agentic products",
  "Research and experimentation",
];

/** Every domain + type option actually present across the page, so the
    filter never offers a chip with zero matching projects behind it. */
export function collectFilterOptions(
  featured: Project[],
  more: Project[],
  earlier: EarlierWorkEntry[],
): { domains: ProjectDomain[]; types: ProjectType[] } {
  const domains = new Set<ProjectDomain>();
  const types = new Set<ProjectType>();

  for (const p of [...featured, ...more]) {
    domains.add(p.domain);
    projectTypes(p.slug).forEach((t) => types.add(t));
  }
  for (const e of earlier) {
    domains.add(earlierWorkDomain(e.slug));
    if (e.slug) projectTypes(e.slug).forEach((t) => types.add(t));
  }

  return {
    domains: ALL_DOMAINS.filter((d) => domains.has(d)),
    types: ALL_TYPES.filter((t) => types.has(t)),
  };
}
