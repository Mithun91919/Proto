import Link from "next/link";
import { DeviceFrame } from "../primitives/DeviceFrame";
import { SectionMedia } from "../primitives/SectionMedia";
import type { CaseStudyHeroSection, MediaRef } from "@/content/case-study-v2/types";

type CaseStudyHeroProps = { section: CaseStudyHeroSection };

const Copy = ({ eyebrow, headline, summary }: { eyebrow?: string; headline: string; summary?: string }) => (
  // A real wrapper, not a fragment — Copy sits alongside media as a grid
  // item in the split/device variants, and a fragment's children would each
  // get individually auto-placed into the grid instead of staying together.
  <div>
    {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
    <h1 className="display-title display-hero mt-4 max-w-[26ch] text-[var(--ink)]">{headline}</h1>
    {summary ? <p className="lede mt-6 max-w-[52ch]">{summary}</p> : null}
  </div>
);

/**
 * The hero admits four compositions rather than forcing every project into
 * the same opening shot — the project's own evidence decides which reads
 * best: a quiet split, a cinematic full-bleed clip, two surfaces compared,
 * or a single device screen.
 */
export function CaseStudyHero({ section }: CaseStudyHeroProps) {
  const { variant, headline, summary, eyebrow, media } = section;

  if (variant === "cinematic") {
    const single = media as MediaRef;
    return (
      <section className="case-hero">
        <div className="case-hero-backdrop" aria-hidden="true">
          <SectionMedia media={single} />
        </div>
        <div className="case-hero-back mx-auto w-full max-w-[80rem] px-5 md:px-8">
          <Link
            href="/work"
            className="inline-flex text-sm font-medium transition hover:translate-x-[-2px]"
          >
            ← All Work
          </Link>
        </div>
        <header className="case-hero-copy hero-in mx-auto w-full max-w-[80rem] px-5 md:px-8">
          <Copy eyebrow={eyebrow} headline={headline} summary={summary} />
        </header>
      </section>
    );
  }

  if (variant === "comparison") {
    const pair = media as { left: MediaRef; right: MediaRef };
    return (
      <div className="hero-in mx-auto w-full max-w-[80rem] px-5 md:px-8">
        <Copy eyebrow={eyebrow} headline={headline} summary={summary} />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <SectionMedia media={pair.left} />
          <SectionMedia media={pair.right} />
        </div>
      </div>
    );
  }

  if (variant === "device") {
    const single = media as MediaRef;
    return (
      <div className="hero-in mx-auto grid w-full max-w-[80rem] gap-10 px-5 md:grid-cols-[1fr_20rem] md:items-center md:gap-16 md:px-8">
        <Copy eyebrow={eyebrow} headline={headline} summary={summary} />
        <DeviceFrame>
          <SectionMedia media={single} />
        </DeviceFrame>
      </div>
    );
  }

  // "split": text left, media right — the quiet default.
  const single = media as MediaRef;
  return (
    <div className="hero-in mx-auto grid w-full max-w-[80rem] gap-10 px-5 md:grid-cols-[1fr_24rem] md:items-center md:gap-16 md:px-8">
      <Copy eyebrow={eyebrow} headline={headline} summary={summary} />
      <SectionMedia media={single} />
    </div>
  );
}
