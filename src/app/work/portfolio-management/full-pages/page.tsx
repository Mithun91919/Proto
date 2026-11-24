import type { Metadata } from "next";
import Link from "next/link";
import { caseStudyRobots } from "@/content/seo";
import { PortfolioSummaryBody } from "../summary-body";

/**
 * A trial: the Portfolio Management summary with each step on a full screen of
 * its own, scrolled like an ordinary page, in place of the pinned card. Kept
 * apart from the live summary at /work/portfolio-management so the two can be
 * read side by side. Not linked from anywhere, and not indexed.
 */
export const metadata: Metadata = {
  title: "Portfolio Management Platform, summary as full pages",
  robots: caseStudyRobots,
};

export default function PortfolioFullPagesTrial() {
  return (
    <div className="ds-stage-page">
      <PortfolioSummaryBody layout="pages" />
      <div className="mx-auto w-full max-w-[85rem] px-5 pb-16 md:px-8">
        <Link href="/work/portfolio-management" className="button button-primary">
          Read the full case study →
        </Link>
      </div>
    </div>
  );
}
