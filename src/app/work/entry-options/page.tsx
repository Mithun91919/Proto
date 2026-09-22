import type { Metadata } from "next";
import Link from "next/link";
import { caseStudyRobots } from "@/content/seo";
import { ProjectMedia } from "@/components/ProjectMedia";
import { WorkEntry } from "@/components/WorkEntry";
import { Chip } from "@/components/design-system/primitives/Chip";
import { CompactNumeral } from "@/components/design-system/CompactNumeral";
import { MetricRow } from "@/components/design-system/MetricRow";
import { projectPlatforms } from "@/content/work-filters";
import { getFeaturedProjects, type Project } from "@/content/projects";
import { orgLogo } from "@/content/work-page";

/**
 * Work-entry layout options — a scratch page for comparing shapes against
 * each other with real content, not a route anyone is meant to land on.
 * `noindex`, absent from the sitemap, linked from nothing. Delete it once a
 * shape is chosen.
 *
 * Each option gets the same two projects so the alternation is visible, and
 * they all use the real Chip / MetricRow / ProjectMedia so what is being
 * compared is the layout rather than a mock of it.
 */
export const metadata: Metadata = {
  title: "Work entry — layout options",
  robots: caseStudyRobots,
};

function Facets({ project }: { project: Project }) {
  const logo = orgLogo(project.org);
  const facets = [project.org, project.domain, ...projectPlatforms(project.slug)];
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {facets.map((facet) => (
        <Chip
          as="li"
          key={facet}
          icon={
            facet === project.org && logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt="" style={{ height: "0.78rem" }} />
            ) : undefined
          }
        >
          {facet}
        </Chip>
      ))}
    </ul>
  );
}

/** A · Title first. The argument gets the full width; media supports it. */
function TitleLed({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="work-entry group block no-underline">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <CompactNumeral value={project.number} />
        <Facets project={project} />
      </div>
      <h3
        className="display-title mt-5 max-w-[24ch] text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]"
        style={{ fontSize: "2.4rem" }}
      >
        {project.title}
      </h3>
      <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-[1.35fr_1fr] md:gap-14">
        <ProjectMedia project={project} aspect={16 / 10} hoverScope=".work-entry" />
        <div>
          <p className="body-text max-w-[42ch]">{project.summary}</p>
          <MetricRow project={project} className="mt-7" />
        </div>
      </div>
    </Link>
  );
}

/** B · Media first, then one metadata band, then the words underneath. */
function MediaLed({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="work-entry group block no-underline">
      <ProjectMedia project={project} aspect={21 / 9} hoverScope=".work-entry" />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <CompactNumeral value={project.number} />
          <Facets project={project} />
        </div>
        <MetricRow project={project} />
      </div>
      <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr] md:gap-16">
        <h3
          className="display-title text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]"
          style={{ fontSize: "2.1rem" }}
        >
          {project.title}
        </h3>
        <p className="body-text">{project.summary}</p>
      </div>
    </Link>
  );
}

/** C · Index row. Small thumbnail, everything else on one line of reading. */
function CompactRow({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="work-entry group block no-underline">
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[17rem_1fr] md:gap-10">
        <ProjectMedia project={project} aspect={4 / 3} hoverScope=".work-entry" />
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <CompactNumeral value={project.number} />
            <Facets project={project} />
          </div>
          <h3
            className="display-title mt-3 text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]"
            style={{ fontSize: "1.5rem" }}
          >
            {project.title}
          </h3>
          <p className="body-sm mt-2 max-w-[62ch] text-[var(--ink-soft)]">{project.summary}</p>
          <p className="metric-line mt-4">
            {project.metrics.map((m) => `${m.value} ${m.label}`).join("  ·  ")}
          </p>
        </div>
      </div>
    </Link>
  );
}

const OPTIONS = [
  {
    code: "Current",
    title: "Text beside media, alternating",
    note: "What is live. Two columns, sides swap each row, metrics under the summary.",
    render: (p: Project, i: number) => <WorkEntry project={p} reverse={i % 2 === 1} />,
  },
  {
    code: "Option A",
    title: "Title first",
    note: "The claim runs full width before anything else, at 2.4rem instead of 1.9. Media and summary share the row beneath it. Costs the alternation — every row reads the same way down.",
    render: (p: Project) => <TitleLed project={p} />,
  },
  {
    code: "Option B",
    title: "Media first",
    note: "A 21:9 band of the product, then one metadata line carrying the number, facets and metrics together, then title and summary as a pair. The artefact argues before the words do.",
    render: (p: Project) => <MediaLed project={p} />,
  },
  {
    code: "Option C",
    title: "Index row",
    note: "A 17rem thumbnail and everything else in one reading column, metrics as a text line. Roughly half the height of the others, so more of the work is visible at once.",
    render: (p: Project) => <CompactRow project={p} />,
  },
];

export default function EntryOptionsPage() {
  const projects = getFeaturedProjects().slice(0, 2);

  return (
    <div className="work-page ds-scope mx-auto w-full max-w-[80rem] px-5 py-16 md:px-8 md:py-24">
      <p className="eyebrow">Scratch page · not linked, not indexed</p>
      <h1 className="display-title display-hero mt-3">Work entry — layout options</h1>
      <p className="body-text mt-4 max-w-[58ch]">
        The same two projects through four shapes. Everything uses the real components, so what differs is
        the arrangement and the type scale, not the fidelity.
      </p>

      {OPTIONS.map((option) => (
        <section key={option.code} className="mt-20 md:mt-28">
          <div className="ds-section-boundary pt-8">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <span className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
                {option.code}
              </span>
              <h2 className="display-title" style={{ fontSize: "1.6rem" }}>
                {option.title}
              </h2>
            </div>
            <p className="ds-note mt-3 max-w-[70ch]">{option.note}</p>
          </div>

          <div className="mt-12 flex flex-col gap-16 md:gap-24">
            {projects.map((project, i) => (
              <div key={project.slug}>{option.render(project, i)}</div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
