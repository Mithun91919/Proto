"use client";

import { setCaseStudyView } from "@/components/caseStudyView";

/**
 * The way out of the summary: shown only while a case study is read as its
 * summary (the page hides it otherwise, in CSS), so the full story is one
 * click away from the last thing on the page.
 */
export function SummaryCta() {
  return (
    <div className="ds-cs-keep ds-cs-summary-cta mx-auto w-full max-w-[85rem] px-5 pt-12 md:px-8">
      <p className="display-title text-[1.5rem] text-[var(--ink)]">This is the summary.</p>
      <p className="body-text mt-2 max-w-[52ch]">
        The full case study has the decisions, the screens and what changed along the way.
      </p>
      <button
        type="button"
        className="button button-primary mt-6"
        onClick={() => {
          setCaseStudyView("full");
          window.scrollTo({ top: 0 });
        }}
      >
        Read the full case study →
      </button>
    </div>
  );
}
