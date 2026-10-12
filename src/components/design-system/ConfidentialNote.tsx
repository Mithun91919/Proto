import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CaseStudyColumn } from "./CaseStudy";

/**
 * The close of a confidential case study. The hero says what was changed;
 * this says what is missing and what can be offered in its place: the
 * decisions and what changed, in conversation. It promises nothing about the
 * real product names or figures, because that is not the page's to promise.
 *
 * Laid on the same 0.85 / 1.15 grid as the chapters above it, so it reads as
 * the last beat of the page rather than a stray paragraph.
 */
export function ConfidentialNote() {
  return (
    <CaseStudyColumn>
      <Reveal>
        <div
          className="mt-14 grid items-start gap-6 border-t pt-10 md:mt-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="eyebrow">Confidential work</p>
          <div>
            <p className="max-w-[40rem] text-[1.2rem] leading-8" style={{ color: "var(--ink)" }}>
              This is a glimpse of the work, not all of it. Some detail is confidential. I can talk through
              the decisions and what changed in an interview.
            </p>
            <Link href="/about#contact" className="button button-secondary mt-7 no-underline">
              Get in touch
            </Link>
          </div>
        </div>
      </Reveal>
    </CaseStudyColumn>
  );
}
