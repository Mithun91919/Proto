import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import { Chip } from "@/components/design-system/primitives/Chip";
import { MetricRow } from "@/components/design-system/MetricRow";
import { projectPlatforms } from "@/content/work-filters";
import { orgLogo } from "@/content/work-page";
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
 * C · Alternating index row — the work page's main list.
 *
 * The row leads on the org: its mark at 1.65rem with the name in ink,
 * because who the work was for is the first thing a reader weighs. Domain
 * and platform sit on the artwork instead, where they read as context
 * rather than credential, the way the home cards carry theirs.
 *
 * `emphasis` now only governs the metrics: `full` gets the glyph row,
 * `quiet` a single text line. Source order is text → media, which is the
 * reading order when the grid collapses; from `md` the media moves beside
 * it and swaps side via `reverse`.
 */
export function WorkEntry({ project, reverse = false, emphasis = "full" }: WorkEntryProps) {
  // Org first, then sector + surface. The org is the credibility signal a
  // scanner needs before opening the case study, and it matches how the
  // earlier-work cards already lead with the company; sector and surface
  // then place the work. The fuller craft breakdown lives in the case study.
  // The org comes out of the facet run. It is the one piece of metadata
  // that gives a project its weight, and as a third identical chip it read
  // at the same rank as "Web". It gets its own lockup; the rest go onto the
  // artwork, the way the home cards carry theirs.
  const contextFacets = [project.domain, ...projectPlatforms(project.slug)];
  const logo = orgLogo(project.org);

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
        // `reverse` swaps which side the media sits on. The template has to
        // swap with it: leaving it at `1fr 1.2fr` put the media in the
        // narrower column on every reversed row, so it rendered 633px on one
        // row and 527px on the next while the text took the larger share on
        // exactly the rows that needed it least.
        /* `items-start`, not centre. Centring made each entry's text begin
           at a different height against its media — measured across the six
           rows the offset ran -127px to +5px, so nothing lined up and the
           eye had to find the start again on every one. Aligned to the top
           they all begin on one horizon; the ragged bottom that leaves is
           far less noticeable than a jumping top. */
        className={`grid grid-cols-1 items-start gap-8 md:gap-14 ${
          reverse
            ? "md:grid-cols-[1.2fr_1fr] md:[&>*:first-child]:order-2"
            : "md:grid-cols-[1fr_1.2fr]"
        }`}
      >
        <div>
          {/* The org lockup, alone at the head of the row. A CompactNumeral
              used to sit beside it: a 3x5 dot font, correct by C9 and
              unreadable by design at that size, which was fine while it was
              the only mark here and not fine once the logo arrived to do the
              same job better. It also communicated identity, which is not
              one of the five things C1 lets a dot say. */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-2.5">
              {logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logo} alt="" style={{ height: "1.65rem", width: "auto", objectFit: "contain" }} />
              ) : null}
              <span className="font-mono text-[0.74rem] uppercase tracking-[0.13em]" style={{ color: "var(--ink)" }}>
                {project.org}
              </span>
            </span>
          </div>
          <h3
            className="display-title mt-5 text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)]"
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
        {/* One aspect for every row. Left to their own, the media ran 1.097
            (store-support is nearly square) to 1.728, so heights went 302 to
            556px down the list and no two rows lined up — and the two
            placeholders, fixed at 16/10, matched none of them. The featured
            cards already force this same ratio on the same assets, so
            nothing is cropped here that is not cropped there. */}
        <div className="relative">
          <ProjectMedia project={project} aspect={16 / 10} hoverScope=".work-entry" />
          {contextFacets.length > 0 ? (
            <ul className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
              {contextFacets.map((facet) => (
                <Chip as="li" key={facet}>
                  {facet}
                </Chip>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
