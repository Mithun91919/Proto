import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Download or request Mithun Raju’s résumé.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-[46rem] px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Résumé</p>
      <h1 className="display-title display-hero mt-4 text-[var(--ink)]">
        Curriculum vitae
      </h1>
      <p className="mt-6 text-lg leading-8 text-[var(--ink-soft)]">
        Place your latest PDF at <code className="font-mono text-sm">public/resume.pdf</code>
        {" "}
        and the download link below will work immediately on Vercel and locally.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/resume.pdf" className="button button-primary">
          Download résumé PDF
        </a>
        <a href="mailto:mithraj14@gmail.com" className="button button-secondary">
          Request by email
        </a>
        <Link href="/work" className="button button-secondary">
          View work instead
        </Link>
      </div>
    </div>
  );
}
