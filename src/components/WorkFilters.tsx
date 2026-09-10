"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { WorkEntry } from "@/components/WorkEntry";
import { WorkCardGrid } from "@/components/WorkCardGrid";
import { hasCaseStudyPage } from "@/content/case-study-routes";
import {
  collectFilterOptions,
  earlierWorkDomain,
  projectCraft,
  projectPlatforms,
} from "@/content/work-filters";
import type { Project, ProjectDomain } from "@/content/projects";
import type { EarlierWorkEntry } from "@/content/work-page";

type WorkFiltersProps = {
  featured: Project[];
  more: Project[];
  earlier: EarlierWorkEntry[];
};

/**
 * One flat filter bank over the whole work list — sector, platform, and
 * craft values in a single row of chips rather than three labelled
 * groups. Each chip you add narrows the set: a project stays visible only
 * while every active chip matches one of its facets (its domain, one of
 * its platforms, or one of its craft disciplines). So "Web" + "Research"
 * means enterprise-or-not web work that involved research; "Web" +
 * "Mobile" means work that shipped on both.
 *
 * Filtering happens client-side over data already on the page — no fetch,
 * so toggling is instant, and with JS disabled every project still
 * renders, just unfiltered.
 */
export function WorkFilters({ featured, more, earlier }: WorkFiltersProps) {
  const { domains, platforms, crafts } = useMemo(
    () => collectFilterOptions(featured, more, earlier),
    [featured, more, earlier],
  );

  // Sector → platform → craft, so the row still reads in a sensible order
  // even without headers.
  const allTags = useMemo(
    () => [...domains, ...platforms, ...crafts],
    [domains, platforms, crafts],
  );

  const [active, setActive] = useState<Set<string>>(new Set());

  const facetsOf = (domain: ProjectDomain, slug: string | undefined) =>
    new Set<string>([
      domain,
      ...(slug ? projectPlatforms(slug) : []),
      ...(slug ? projectCraft(slug) : []),
    ]);

  const matches = (domain: ProjectDomain, slug: string | undefined) => {
    if (active.size === 0) return true;
    const facets = facetsOf(domain, slug);
    for (const tag of active) if (!facets.has(tag)) return false;
    return true;
  };

  const toggle = (value: string) => {
    const next = new Set(active);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setActive(next);
  };

  const featuredVisible = featured.filter((p) => matches(p.domain, p.slug));
  const moreVisible = more.filter((p) => matches(p.domain, p.slug));
  const earlierVisible = earlier.filter((e) => matches(earlierWorkDomain(e.slug), e.slug));

  const totalVisible = featuredVisible.length + moreVisible.length + earlierVisible.length;

  return (
    <>
      <div className="mt-8 md:mt-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                aria-pressed={active.has(tag)}
                onClick={() => toggle(tag)}
                className={`work-filter-chip${active.has(tag) ? " is-active" : ""}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {active.size > 0 ? (
            <div className="flex items-center gap-4">
              <p className="body-sm" style={{ color: "var(--ink-soft)" }}>
                {totalVisible} of {featured.length + more.length + earlier.length} projects
              </p>
              <button
                type="button"
                onClick={() => setActive(new Set())}
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
          {featuredVisible.length > 0 || moreVisible.length > 0 ? (
            <div className="mt-12 flex flex-col gap-16 md:mt-14 md:gap-24">
              {[...featuredVisible, ...moreVisible].map((project, index) => (
                <Reveal key={project.slug} delay={index * 70}>
                  <WorkEntry project={project} reverse={index % 2 === 1} />
                </Reveal>
              ))}
            </div>
          ) : null}

          {earlierVisible.length > 0 ? (
            <div className="ds-section-boundary-minor mt-12 pt-7 md:mt-16 md:pt-8">
              <p className="eyebrow">Earlier work</p>
              <p className="body-text mt-2 max-w-[52ch]">
                Consumer product and brand work from before the enterprise projects.
              </p>
              <WorkCardGrid
                items={earlierVisible.map((entry, index) => ({
                  id: `${entry.org}-${index}`,
                  number: entry.number,
                  org: entry.org,
                  body: entry.body,
                  tags: entry.tags,
                  image: entry.image,
                  slug: hasCaseStudyPage(entry.slug) ? entry.slug : undefined,
                }))}
              />
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
