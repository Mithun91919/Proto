import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { getProject } from "@/content/projects";
import { CaseStudyFigure } from "./CaseStudy";
import { GlassPanel } from "./primitives/GlassPanel";

/**
 * What a case study adds to its summary, between the evidence card and the
 * way into the full page: the story in three steps (read from the project
 * record, so every page has it), and the one key visual the page chooses.
 * Hidden unless the reader has chosen the summary, in CSS.
 *
 * The problem / solution / what-I-did card above it and the closing statement
 * below it are the page's own, kept visible rather than repeated here.
 */
export function SummaryBlocks({
  slug,
  visual,
  visualLabel,
}: {
  slug?: string;
  visual?: ReactNode;
  visualLabel?: string;
}) {
  const steps = slug ? getProject(slug)?.systemMap : undefined;
  if (!steps?.length && !visual) return null;

  return (
    <div className="ds-cs-keep ds-cs-summary mx-auto w-full max-w-[85rem] px-5 md:px-8">
      {steps?.length ? (
        <CaseStudyFigure rule label="Before, what changed, after">
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {steps.map((step, i) => (
              <div key={step.label} className="contents">
                <GlassPanel variant="soft" className="rounded-2xl p-6">
                  <p className="ds-eyebrow" style={{ color: i === steps.length - 1 ? "var(--ds-accent-deep)" : "var(--muted)" }}>
                    {step.label}
                  </p>
                  <p className="display-title mt-3" style={{ fontSize: "1.15rem", lineHeight: 1.35 }}>
                    {step.detail}
                  </p>
                </GlassPanel>
                {i < steps.length - 1 ? (
                  <span aria-hidden className="ds-arrow hidden self-center text-xl md:block">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </CaseStudyFigure>
      ) : null}

      {visual ? (
        <Reveal>
          <div className="pt-10 md:pt-14">
            <CaseStudyFigure rule label={visualLabel}>
              {visual}
            </CaseStudyFigure>
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
