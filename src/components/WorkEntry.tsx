import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import { Chip } from "@/components/design-system/primitives/Chip";
import { CompactNumeral } from "@/components/design-system/CompactNumeral";
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
  // Org first, then sector + surface. The org is the credibility signal a
  // scanner needs before opening the case study, and it matches how the
  // earlier-work cards already lead with the company; sector and surface
  // then place the work. The fuller craft breakdown lives in the case study.
  const facets = [project.org, project.domain, ...projectPlatforms(project.slug)];
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
          {/* The dot numeral and the facets read as one line of metadata, so
              they share a row. They were stacked, with the facets as a plain
              mono eyebrow under the mark — two separate quiet things where
              one band does the job. */}
          {emphasis === "full" || facets.length > 0 ? (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {emphasis === "full" ? <CompactNumeral value={project.number} /> : null}
              {facets.length > 0 ? (
                <ul className="flex flex-wrap items-center gap-2">
                  {facets.map((facet) => (
                    <Chip
                      as="li"
                      key={facet}
                      /* Only the org facet carries a mark. The wordmark is the
                         credibility signal; putting an icon on "Web" as well
                         would flatten that back into decoration. */
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
              ) : null}
            </div>
          ) : null}
          <h3
            className={`display-title text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--accent-deep)] ${
              emphasis === "full" || facets.length > 0 ? "mt-4" : ""
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
        {/* One aspect for every row. Left to their own, the media ran 1.097
              (store-support is nearly square) to 1.728, so heights went 302
              to 556px down the list and no two rows lined up — and the two
              placeholders, fixed at 16/10, matched none of them. The
              featured cards already force this same ratio on the same
              assets, so nothing is cropped here that is not cropped there. */}
          <ProjectMedia project={project} aspect={16 / 10} hoverScope=".work-entry" />
      </div>
    </Link>
  );
}
