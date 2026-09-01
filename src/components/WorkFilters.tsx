"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { WorkEntry } from "@/components/WorkEntry";
import { WorkCardGrid } from "@/components/WorkCardGrid";
import { hasCaseStudyPage } from "@/content/case-study-routes";
import {
  collectFilterOptions,
  earlierWorkDomain,
  projectTypes,
  type ProjectType,
} from "@/content/work-filters";
import type { Project, ProjectDomain } from "@/content/projects";
import type { EarlierWorkEntry } from "@/content/work-page";

type WorkFiltersProps = {
  featured: Project[];
  more: Project[];
  earlier: EarlierWorkEntry[];
};

/**
 * Domain + type filters over the whole work list, so a recruiter can answer
 * "has this person worked on X" directly rather than reading all eleven
 * case studies to find out.
 *
 * A project matches when its domain is in the active domain set (or no
 * domain filter is active) AND at least one of its tags is in the active
 * type set (or no type filter is active) — AND across the two facets, OR
 * within each one, which is the reading a multi-select filter is supposed
 * to support ("Enterprise platforms" + "Developer tools" together, not
 * only one at a time).
 *
 * Filtering happens client-side over data already on the page — there is
 * no fetch, so toggling a chip is instant and works with JS disabled
 * skipped entirely (every project still renders, just unfiltered).
 */
export function WorkFilters({ featured, more, earlier }: WorkFiltersProps) {
  const { domains: domainOptions, types: typeOptions } = useMemo(
    () => collectFilterOptions(featured, more, earlier),
    [featured, more, earlier],
  );

  const [activeDomains, setActiveDomains] = useState<Set<ProjectDomain>>(new Set());
  const [activeTypes, setActiveTypes] = useState<Set<ProjectType>>(new Set());

  const matches = (domain: ProjectDomain, slug: string | undefined) => {
    const domainOk = activeDomains.size === 0 || activeDomains.has(domain);
    const typeOk =
      activeTypes.size === 0 || (slug ? projectTypes(slug).some((t) => activeTypes.has(t)) : false);
    return domainOk && typeOk;
  };

  const toggle = <T,>(set: Set<T>, setSet: (s: Set<T>) => void, value: T) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setSet(next);
  };

  const featuredVisible = featured.filter((p) => matches(p.domain, p.slug));
  const moreVisible = more.filter((p) => matches(p.domain, p.slug));
  const earlierVisible = earlier.filter((e) => matches(earlierWorkDomain(e.slug), e.slug));

  const hasActiveFilter = activeDomains.size > 0 || activeTypes.size > 0;
  const totalVisible = featuredVisible.length + moreVisible.length + earlierVisible.length;

  return (
    <>
      <div className="mt-8 md:mt-10">
        <div className="flex flex-col gap-5">
          <div>
            <p className="ds-eyebrow mb-3">Domain</p>
            <div className="flex flex-wrap gap-2">
              {domainOptions.map((d) => (
                <button
                  key={d}
                  type="button"
                  aria-pressed={activeDomains.has(d)}
                  onClick={() => toggle(activeDomains, setActiveDomains, d)}
                  className={`work-filter-chip${activeDomains.has(d) ? " is-active" : ""}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="ds-eyebrow mb-3">Type</p>
            <div className="flex flex-wrap gap-2">
              {typeOptions.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={activeTypes.has(t)}
                  onClick={() => toggle(activeTypes, setActiveTypes, t)}
                  className={`work-filter-chip${activeTypes.has(t) ? " is-active" : ""}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilter ? (
            <div className="flex items-center gap-4">
              <p className="body-sm" style={{ color: "var(--ink-soft)" }}>
                {totalVisible} of {featured.length + more.length + earlier.length} projects
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveDomains(new Set());
                  setActiveTypes(new Set());
                }}
                className="body-sm font-medium underline"
                style={{ color: "var(--accent-deep)" }}
              >
                Clear filters
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {totalVisible === 0 ? (
        <p className="body-text mt-12" style={{ color: "var(--ink-soft)" }}>
          No projects match that combination — try clearing a filter.
        </p>
      ) : (
        <>
          {featuredVisible.length > 0 ? (
            <div className="mt-12 flex flex-col gap-16 md:mt-14 md:gap-24">
              {featuredVisible.map((project, index) => (
                <Reveal key={project.slug} delay={index * 70}>
                  <WorkEntry project={project} reverse={index % 2 === 1} />
                </Reveal>
              ))}
            </div>
          ) : null}

          {moreVisible.length > 0 || earlierVisible.length > 0 ? (
            <div className="ds-section-boundary-minor mt-12 pt-7 md:mt-16 md:pt-8">
              <p className="eyebrow">More work</p>
              <p className="body-text mt-2 max-w-[52ch]">
                Documented projects without the full case-study treatment.
              </p>
              <WorkCardGrid
                items={[
                  ...moreVisible.map((project) => ({
                    id: project.slug,
                    number: project.number,
                    org: project.label,
                    body: project.summary,
                    tags: project.tags,
                    slug: hasCaseStudyPage(project.slug) ? project.slug : undefined,
                  })),
                  ...earlierVisible.map((entry, index) => ({
                    id: `${entry.org}-${index}`,
                    number: entry.number,
                    org: entry.org,
                    body: entry.body,
                    tags: entry.tags,
                    image: entry.image,
                    slug: hasCaseStudyPage(entry.slug) ? entry.slug : undefined,
                  })),
                ]}
              />
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
