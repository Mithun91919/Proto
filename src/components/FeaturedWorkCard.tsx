import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectHero } from "@/components/ProjectHero";
import { FeaturedGlyph, type SystemShape } from "@/components/design-system/FeaturedGlyph";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import type { MetricMarkName } from "@/components/design-system/dotPatterns";
import type { Project } from "@/content/projects";

/**
 * Which of the five system shapes (see design-system C · Dot language) a
 * project's own systemMap (Before → Intervention → After) resolves to —
 * a direct read of the transformation, not a decorative pick.
 */
export const PROJECT_SHAPE: Record<string, SystemShape> = {
  "portfolio-management": "converge",
  "api-lifecycle": "connect",
  "dependency-health": "translate",
  "store-support": "resolve",
  "supply-chain-operations": "organise",
};

/**
 * One semantic glyph per metric, aligned by index to `project.metrics` —
 * chosen for what each figure actually measures (S2b), not decoration.
 */
const PROJECT_METRIC_GLYPHS: Record<string, MetricMarkName[]> = {
  "portfolio-management": ["field", "funnel", "modules"],
  "api-lifecycle": ["modules", "ramp", "bars"],
  "dependency-health": ["layers", "modules"],
  "store-support": ["field", "ring", "bars"],
};

export function FeaturedWorkCard({ project }: { project: Project }) {
  const shape = PROJECT_SHAPE[project.slug];
  const glyphs = PROJECT_METRIC_GLYPHS[project.slug];

  return (
    <Link
      href={`/work/${project.slug}`}
      className="featured-card dot-rule group block pt-8 md:pt-10"
      style={
        {
          "--card-accent": project.accent,
          "--card-soft": project.accentSoft,
        } as CSSProperties
      }
    >
      <div className="flex items-center gap-3">
        <p className="eyebrow">
          <span className="text-[var(--accent-deep)]">{project.number}</span>
          {" / "}
          {project.label}
        </p>
        {shape ? (
          <span className="ml-auto opacity-70" aria-hidden>
            <FeaturedGlyph shape={shape} />
          </span>
        ) : null}
      </div>

      <div className={`mt-6 grid gap-8 md:mt-8 md:gap-12 ${
          project.media ? "md:grid-cols-[1fr_1.2fr]" : ""
        }`}>
        <div>
          <h3 className="display-title display-statement text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]">
            {project.title}
          </h3>

          <p className="body-text mt-5 max-w-[54ch]">{project.summary}</p>

          <p className="mt-8 text-sm font-semibold text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1">
            View case study →
          </p>
        </div>

        {project.media ? (
          <ProjectHero
            mp4={project.media.mp4}
            webm={project.media.webm}
            poster={project.media.poster}
            aspect={project.media.aspect}
            playOn="hover"
            hoverScope=".featured-card"
          />
        ) : null}
      </div>

      {glyphs ? (
        <div className="mt-8">
          <ProofStrip
            items={project.metrics.map((metric, index) => ({
              value: metric.value,
              label: metric.label,
              glyph: glyphs[index],
            }))}
          />
        </div>
      ) : null}
    </Link>
  );
}
