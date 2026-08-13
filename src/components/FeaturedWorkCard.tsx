import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/content/projects";

export function FeaturedWorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="featured-card texture-card glass-panel glass-card group relative block overflow-hidden rounded-[var(--radius-lg)] p-6 hover:-translate-y-1 md:p-9"
      style={
        {
          "--card-accent": project.accent,
          "--card-soft": project.accentSoft,
        } as CSSProperties
      }
    >
      <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        <div>
          <p className="eyebrow">
            <span className="text-[var(--accent-deep)]">{project.number}</span>
            {" · "}
            {project.shortTitle}
          </p>

          <h3 className="display-title display-statement mt-4 text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]">
            {project.title}
          </h3>

          <p className="body-text mt-5">{project.summary}</p>

          <dl className="mt-7 grid gap-5 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="metric-value">{metric.value}</dt>
                <dd className="metric-label">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="system-map">
            {project.systemMap.map((step) => (
              <div key={step.label} className="system-map-step">
                <p className="system-map-label">{step.label}</p>
                <p className="system-map-detail">{step.detail}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="eyebrow">{project.tags.join(" · ")}</p>
            <p className="mt-3 text-sm font-semibold text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1">
              View {project.shortTitle} →
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
