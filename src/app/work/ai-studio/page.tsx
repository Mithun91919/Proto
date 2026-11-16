import type { Metadata } from "next";
import Link from "next/link";

/**
 * Studio is being rewritten from a new brief. Until it is, this route stays up
 * but says so, is left out of the listings, and is not indexed.
 */
export const metadata: Metadata = {
  title: "Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return (
    <div className="mx-auto w-full max-w-[80rem] px-5 pb-24 pt-6 md:px-8 md:pt-10">
      <p className="eyebrow">Studio</p>
      <h1 className="display-title display-hero mt-4 max-w-[18ch] text-[var(--ink)]">This case study is being rewritten.</h1>
      <p className="mt-8">
        <Link href="/work" className="button button-secondary">
          ← Back to the work
        </Link>
      </p>
    </div>
  );
}
