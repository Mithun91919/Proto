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

        <div className="flex flex-col gap-8">
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

          {/* Metadata Card */}
          <aside className="glass-panel h-fit p-6">
            <dl className="space-y-5">
              {[
                ["Role", project.role],
                ["Client", project.org],
                ["Year", project.timeframe],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-[var(--muted)]">{label}</dt>
                  <dd className="mt-1 font-medium text-[var(--ink)]">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-sm text-[var(--muted)]">Focus</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((item) => (
                    <span
                      key={item}
                      className="rounded-[0.7rem] border border-[var(--line)] bg-white px-3 py-1 text-sm text-[var(--ink-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </Link>
  );
}
