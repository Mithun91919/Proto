import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectHero } from "@/components/ProjectHero";
import type { Project } from "@/content/projects";

type WorkEntryProps = {
  project: Project;
  /**
   * `split` runs the copy beside the media. `stacked` sets the title against the
   * description and gives the media the full width — used so the page doesn't
   * repeat one composition four times. Projects without a clip ignore this and
   * fall back to a text-only row.
   */
  layout?: "split" | "stacked";
  /** `quiet` drops the metrics to a single line for the supporting projects. */
  emphasis?: "full" | "quiet";
  /**
   * Drops the entry's own dotted rule. Set on the first entry in a list, where
   * the section's rule already does the separating.
   */
  flush?: boolean;
};

/**
 * A project as an editorial row. Source order is number → title → media → copy,
 * which is the reading order on mobile; grid areas move the media beside the
 * copy from md up.
 */
export function WorkEntry({
  project,
  layout = "split",
  emphasis = "full",
  flush = false,
}: WorkEntryProps) {
  /* A reserved band with nothing in it reads as a hole in the page, so an entry
     without a clip drops the media column rather than standing in for one. */
  const composition = project.media ? layout : "text";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`work-entry work-entry-${composition} group block glass-panel ${
        flush ? "" : "dot-rule pt-8 md:pt-10"
      }`}
      style={
        {
          "--card-accent": project.accent,
          "--card-soft": project.accentSoft,
        } as CSSProperties
      }
    >
      <p className="eyebrow">
        <span className="text-[var(--accent-deep)]">{project.number}</span>
        {" / "}
        {project.label}
      </p>

      <div className="work-entry-grid">
        <h3 className="work-entry-title display-title display-statement text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]">
          {project.title}
        </h3>

        {project.media ? (
          <div className="work-entry-media">
            <ProjectHero
              mp4={project.media.mp4}
              webm={project.media.webm}
              poster={project.media.poster}
              aspect={project.media.aspect}
              playOn="hover"
              hoverScope=".work-entry"
            />
          </div>
        ) : null}

        <div className="work-entry-body">
          <p className="body-text max-w-[56ch]">{project.summary}</p>

          {emphasis === "full" ? (
            <dl className="dot-rule dot-rule-soft mt-8 grid gap-5 pt-6 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="metric-value">{metric.value}</dt>
                  <dd className="metric-label">{metric.label}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="metric-line mt-6">
              {project.metrics
                .map((metric) => `${metric.value} ${metric.label}`)
                .join(" · ")}
            </p>
          )}

          <p className="mt-7 text-sm font-semibold text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1">
            View case study →
          </p>
        </div>
      </div>
    </Link>
  );
}
