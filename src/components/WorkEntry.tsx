import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import { CompactNumeral } from "@/components/design-system/CompactNumeral";
import { MetricRow } from "@/components/design-system/MetricRow";
import type { Project } from "@/content/projects";

type WorkEntryProps = {
  project: Project;
  /** Alternates which side the media sits on, so a long list doesn't
      repeat one silhouette down the page. Pass `index % 2 === 1`. */
  reverse?: boolean;
  /** `quiet` collapses the metrics to a single line for supporting
      projects, rather than the full dot-icon row. */
  emphasis?: "full" | "quiet";
};

/**
 * C · Alternating index row — one of six layouts compared live at
 * `/work/layout-options`; picked for the work page's main list.
 *
 * On `full` emphasis, the row number leads as a `CompactNumeral` (3×5)
 * rather than the S6 display numeral (4×7, built to lead a full editorial
 * row, not a compact one) or the earlier `FeaturedGlyph` system-shape
 * mark. `quiet` rows drop it — they're already de-emphasized down to a
 * single metric line, and a full identity numeral on top of that fought
 * its own point. Source order is number → title → body → media, which is
 * the reading order on mobile; the grid moves media beside the text from
 * `md` up and swaps side via `reverse`.
 */
export function WorkEntry({ project, reverse = false, emphasis = "full" }: WorkEntryProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-entry group block no-underline"
      style={
        {
          "--card-accent": project.accent,
          "--card-soft": project.accentSoft,
        } as CSSProperties
      }
    >
      <div
        className={`grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.2fr] md:gap-14 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          {emphasis === "full" ? <CompactNumeral value={project.number} /> : null}
          <h3
            className={`display-title text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)] ${
              emphasis === "full" ? "mt-4" : ""
            }`}
            style={{ fontSize: "1.9rem" }}
          >
            {project.title}
          </h3>
          <p className="body-text mt-3 max-w-[46ch]">{project.summary}</p>

          {emphasis === "full" ? (
            <MetricRow project={project} className="mt-6" />
          ) : (
            <p className="metric-line mt-6">
              {project.metrics.map((metric) => `${metric.value} ${metric.label}`).join(" · ")}
            </p>
          )}
        </div>
        <ProjectMedia project={project} hoverScope=".work-entry" />
      </div>
    </Link>
  );
}
