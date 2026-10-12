import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CaseStudyColumn } from "./CaseStudy";

/**
 * The close of a confidential case study. The hero says what was changed;
 * this says what is missing and what can be offered in its place: the
 * decisions and what changed, in conversation. It promises nothing about the
 * real product names or figures, because that is not the page's to promise.
 */
export function ConfidentialNote() {
  return (
    <CaseStudyColumn>
      <Reveal>
        <p className="body-text mt-12 max-w-[46rem] md:mt-16" style={{ color: "var(--ink-soft)" }}>
          This is a glimpse of the work, not all of it. Some detail is confidential. I can talk through the
          decisions and what changed in an interview.{" "}
          <Link href="/about#contact" className="font-semibold underline underline-offset-4" style={{ color: "var(--ink)" }}>
            Get in touch
          </Link>
          .
        </p>
      </Reveal>
    </CaseStudyColumn>
  );
}
