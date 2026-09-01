import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import { MetricRow } from "@/components/design-system/MetricRow";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import type { SystemShape } from "@/components/design-system/FeaturedGlyph";
import type { MetricMarkName } from "@/components/design-system/dotPatterns";
import type { Project } from "@/content/projects";

/**
 * Which of the five system shapes (see design-system C · Dot language) a
 * project's own systemMap (Before → Intervention → After) resolves to —
 * a direct read of the transformation, not a decorative pick. Still used
 * by the C6 project-fingerprint demo on /components; the card itself no
 * longer renders the shape (see `FeaturedWorkCard` below).
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
export const PROJECT_METRIC_GLYPHS: Record<string, MetricMarkName[]> = {
  "portfolio-management": ["field", "funnel", "modules"],
  "api-lifecycle": ["modules", "ramp", "bars"],
  "dependency-health": ["layers", "modules"],
  "store-support": ["field", "ring", "bars"],
  "supply-chain-operations": ["field", "modules", "funnel"],
};

/**
 * Falls back rather than throwing. A project gaining a metric used to crash
 * the whole prerender on `undefined.split`, which is a hard failure for a
 * missing decoration — pick a neutral glyph and let the page render.
 */
export function metricGlyph(slug: string, index: number): MetricMarkName {
  return PROJECT_METRIC_GLYPHS[slug]?.[index] ?? "field";
}

/**
 * B · Media-forward glass card — one of six layouts compared live at
 * `/work/layout-options`; picked for the homepage grid.
 *
 * `h-full flex flex-col` on both the link and the card, so a row of cards
 * stretches every card to the tallest one's height rather than each
 * sizing to its own summary length; `flex-1` on the summary absorbs
 * whatever length difference is left over, so the metrics/tags row lands
 * at the same spot on every card. Media is fixed at 16/10 and `flush`
 * (see `ProjectMedia`) so a mixed grid of real clips and placeholders
 * still holds one row height with a single clean corner radius.
 */
export function FeaturedWorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="featured-card group block h-full no-underline"
      style={
        {
          "--card-accent": project.accent,
          "--card-soft": project.accentSoft,
        } as CSSProperties
      }
    >
      <GlassPanel variant="lift" hoverLift className="flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative">
          <ProjectMedia project={project} aspect={16 / 10} flush hoverScope=".featured-card" />
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em]"
            style={{ background: "var(--ds-dark)", color: "var(--ds-mint)" }}
          >
            {project.number} · {project.label}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3
            className="display-title text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]"
            style={{ fontSize: "1.6rem" }}
          >
            {project.title}
          </h3>
          <p className="body-sm mt-2.5 max-w-[46ch] flex-1 text-[var(--ink-soft)]">{project.summary}</p>
          <div className="mt-6 border-t pt-5" style={{ borderColor: "var(--line)" }}>
            <MetricRow project={project} />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <ul className="tag-list">
              {project.tags.slice(0, 2).map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
            <span
              className="ds-arrow text-xl transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: "var(--accent-deep)" }}
            >
              →
            </span>
          </div>
        </div>
      </GlassPanel>
    </Link>
  );
}
