/**
 * Short names for the header's back pill on a case study, where the full
 * title would not fit. Keyed by the page's slug.
 */
const SHORT_TITLES: Record<string, string> = {
  "portfolio-management": "Portfolio Management",
  "ai-studio": "Studio",
  "api-lifecycle": "API Lifecycle",
  "dependency-health": "Dependency Health",
  "store-support": "Store associate app",
  "supply-chain-operations": "Supply Chain",
  "bb-daily": "bb daily",
  "bigbasket-ratings-reviews": "Ratings & Reviews",
  "hike-jobs-service": "Job Discovery",
  "hike-movie-tickets": "Movie Tickets",
  "hike-total-os-localization": "Total OS",
  "creo-mark-1": "Mark 1 brand",
};

/** The slug of the case study a path is on, or null for any other page. */
export function caseStudySlug(pathname: string): string | null {
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  return match && SHORT_TITLES[match[1]] ? match[1] : null;
}

export function shortTitle(slug: string): string {
  return SHORT_TITLES[slug] ?? slug;
}
