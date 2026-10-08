import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Request Mithun Raju’s résumé.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-[46rem] px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Résumé</p>
      <h1 className="display-title display-hero mt-4 text-[var(--ink)]">
        Curriculum vitae
      </h1>
      <p className="mt-6 text-lg leading-8 text-[var(--ink-soft)]">
        Ask and I will send the latest copy. My full work history is on LinkedIn.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="mailto:mithraj14@gmail.com" className="button button-primary">
          Request by email
        </a>
        <a
          href="https://www.linkedin.com/in/mithunrajuk"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-secondary"
        >
          LinkedIn
        </a>
        <Link href="/work" className="button button-secondary">
          View work
        </Link>
      </div>
    </div>
  );
}
