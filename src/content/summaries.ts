/**
 * The case studies that offer a Summary view: the ones long enough that a
 * summary saves a reader real time, and each told as a scroll story. The rest
 * are two or three minutes in full, so a summary would save a minute or two and
 * promise more than it delivers: they show the full case study only, with no
 * Summary switch, and ignore a remembered Summary choice.
 *
 * Add a slug here when its summary is built. The same list is read by the header,
 * by the view logic and by the script in the root layout that applies the
 * remembered choice before the page paints.
 */
export const SUMMARY_SLUGS = [
  "portfolio-management",
  "api-lifecycle",
  "dependency-health",
  "supply-chain-operations",
  "store-support",
  "bb-daily",
] as const;

export function hasSummary(slug: string | null | undefined): boolean {
  return Boolean(slug) && (SUMMARY_SLUGS as readonly string[]).includes(slug as string);
}
