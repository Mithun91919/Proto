import Link from "next/link";

/**
 * The sub-note under the closing statement of a confidential case study. The
 * hero says what was changed; this says what is missing and what can be
 * offered in its place: the decisions and what changed, in conversation. It
 * promises nothing about the real product names or figures, because that is
 * not the page's to promise.
 *
 * Passed as `note` to the closing `PullStatement`, where it reads as the
 * quiet line under the claim rather than as a block of its own.
 */
export function ConfidentialNote() {
  return (
    <>
      This is a glimpse of the work, not all of it. Some detail is confidential. I can talk through the
      decisions and what changed in an interview.{" "}
      <Link
        href="/about#contact"
        className="underline underline-offset-4"
        style={{ color: "var(--ds-mint)" }}
      >
        Get in touch
      </Link>
      .
    </>
  );
}
