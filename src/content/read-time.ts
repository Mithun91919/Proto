/**
 * How long each case study takes to read, in whole minutes: the full page, and
 * its summary. Counted from the text a reader sees on each page (about 230
 * words a minute) and rounded, so it is a guide and not a promise. The screens
 * and their callouts are not counted. Recount when a page's copy changes.
 * Last counted 2026-11-16.
 */
const MINUTES: Record<string, { full: number; summary: number }> = {
  "portfolio-management": { full: 10, summary: 2 },
  "ai-studio": { full: 4, summary: 2 },
  "api-lifecycle": { full: 8, summary: 2 },
  "dependency-health": { full: 7, summary: 1 },
  "store-support": { full: 7, summary: 1 },
  "supply-chain-operations": { full: 5, summary: 2 },
  "bb-daily": { full: 8, summary: 1 },
  "bigbasket-ratings-reviews": { full: 2, summary: 1 },
  "creo-mark-1": { full: 2, summary: 1 },
  "hike-jobs-service": { full: 3, summary: 1 },
  "hike-movie-tickets": { full: 2, summary: 1 },
  "hike-total-os-localization": { full: 3, summary: 1 },
};

/** "10 min read", or undefined for a page with no count. */
export function readTime(slug: string | undefined, view: "full" | "summary"): string | undefined {
  const minutes = slug ? MINUTES[slug]?.[view] : undefined;
  return minutes ? `${minutes} min read` : undefined;
}
