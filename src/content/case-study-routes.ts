/**
 * Slugs that have a real case-study page at `/work/<slug>`.
 *
 * Most of these are static routes under `src/app/work/` and do not need a
 * `projects.ts` entry to exist. Listing links used to be gated on
 * `getProject(slug)`, which was correct while `/work/[slug]` was the only
 * thing serving them — but it silently dropped the link on every project
 * built as its own page, leaving a card with no way into it.
 *
 * Next does not expose its route manifest at render time, so this list is
 * maintained by hand. Add a slug here when you add a page for it.
 */
export const CASE_STUDY_PAGES: ReadonlySet<string> = new Set([
  "portfolio-management",
  "api-lifecycle",
  "dependency-health",
  "store-support",
  "supply-chain-operations",
  "bb-daily",
  "bigbasket-ratings-reviews",
  "hike-movie-tickets",
  "hike-jobs-service",
  "hike-total-os-localization",
  "creo-mark-1",
]);

export function hasCaseStudyPage(slug: string | undefined): slug is string {
  return Boolean(slug && CASE_STUDY_PAGES.has(slug));
}
