import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectHero } from "@/components/ProjectHero";
import type { Project } from "@/content/projects";

export function FeaturedWorkCard({ project }: { project: Project }) {
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
      <p className="eyebrow">
        <span className="text-[var(--accent-deep)]">{project.number}</span>
        {" / "}
        {project.label}
      </p>

      <div
        className={`mt-6 grid gap-8 md:mt-8 md:gap-12 ${
          project.media ? "md:grid-cols-[0.82fr_1.18fr]" : ""
        }`}
      >
        <div>
          <h3 className="display-title display-statement text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]">
            {project.title}
          </h3>

          <p className="body-text mt-5 max-w-[54ch]">{project.summary}</p>

          <dl className="dot-rule dot-rule-soft mt-8 grid gap-5 pt-6 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="metric-value">{metric.value}</dt>
                <dd className="metric-label">{metric.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="tag-list mt-6">
            {[...project.tags, project.timeframe].map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>

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
    </Link>
  );
}
