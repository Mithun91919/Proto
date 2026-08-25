import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectNavRow } from "./primitives/ProjectNavRow";
import { SectionRenderer } from "./SectionRenderer";
import type { CaseStudyV2 } from "@/content/case-study-v2/types";

type CaseStudyPageProps = { study: CaseStudyV2 };

/**
 * The one reusable shell every project renders through. It owns only what's
 * truly universal across every case study — the back link and the prev/next
 * footer nav. Everything else, including the hero and any metrics band, is
 * an ordinary section the project places wherever its own story wants it:
 * the sequence is content, not shell layout.
 */
export function CaseStudyPage({ study }: CaseStudyPageProps) {
  // A cinematic hero renders its own overlaid back-link (see CaseStudyHero) so
  // the image can sit as the true top-level item on the page, edge to edge —
  // adding a second plain-text link above it would just duplicate that.
  const opensWithCinematicHero =
    study.sections[0]?.type === "hero" && study.sections[0].variant === "cinematic";

  return (
    <article
      style={
        {
          "--accent": study.accent,
          "--card-soft": study.accentSoft,
        } as CSSProperties
      }
    >
      {opensWithCinematicHero ? null : (
        <div className="mx-auto w-full max-w-[80rem] px-5 pt-8 md:px-8">
          <Link
            href="/work"
            className="inline-flex text-sm font-medium text-[var(--muted)] transition hover:translate-x-[-2px] hover:text-[var(--ink)]"
          >
            ← All Work
          </Link>
        </div>
      )}

      <SectionRenderer sections={study.sections} />

      {study.previousProject || study.nextProject ? (
        <div className="mx-auto w-full max-w-[80rem] px-5 py-14 md:px-8 md:py-20">
          <ProjectNavRow previousProject={study.previousProject} nextProject={study.nextProject} />
        </div>
      ) : null}
    </article>
  );
}
