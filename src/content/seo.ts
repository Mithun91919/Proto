import type { Metadata } from "next";

/**
 * Case studies carry client UI — real interfaces, with the data and some
 * product names replaced. The work is public in the sense that anyone with
 * the link may read it; it should not be indexed, and the screens should not
 * turn up in image search.
 *
 * This is a `noindex` rather than a `Disallow` in robots.txt, and the
 * difference matters: a disallowed page is never fetched, so a crawler never
 * reads the directive telling it not to index — and a URL found through a
 * link can still be listed, bare, with no snippet. Keeping the pages
 * crawlable is what lets the instruction be obeyed.
 */
export const caseStudyRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
    // The screenshots are the sensitive part; this keeps them out of Images.
    noimageindex: true,
  },
};
