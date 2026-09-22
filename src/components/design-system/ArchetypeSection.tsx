import { Reveal } from "@/components/Reveal";
import {
  ArchetypeCoverage,
  ArchetypeExchange,
  ArchetypeField,
  ArchetypeLanes,
  type Archetype,
} from "./ArchetypeFigure";

/**
 * C14 · Archetype section — the reusable "who this is for" block.
 *
 * One section, four dot treatments, so a case study states its segments the
 * same way every time and the choice left to the author is only which claim
 * the dots are making.
 *
 * Why a section rather than a figure dropped into a chapter: a segment list
 * is not evidence for the chapter it sits in, it is the ground the rest of
 * the case study stands on. Given its own block near the top it can be
 * referred back to — "the specialist path", "the consumer side" — without
 * being restated, which is what stops the distinctions being re-explained
 * three times further down.
 *
 * `variant` picks the claim:
 * - `lanes`    — routes through a shared process, gaps included. The default,
 *                and the only one that shows what a type crosses unaided.
 * - `coverage` — where each type works. Quieter than lanes; use when the
 *                gaps are not the story.
 * - `exchange` — two types who need each other. Two-sided products only.
 * - `field`    — that the types are distinct, and nothing more. The honest
 *                fallback when the research does not support a stronger claim.
 */

type ArchetypeSectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  /** One or two sentences. What the segmentation is for, not a list of it. */
  intro?: string;
  archetypes: Archetype[];
  /** Required by `lanes` and `coverage`; ignored by the other two. */
  stages?: string[];
  variant?: "lanes" | "coverage" | "exchange" | "field";
  /**
   * Where the segments came from. Not decoration: an archetype with no stated
   * provenance is the thing a reader has learned to distrust, so the section
   * makes room for the sentence rather than leaving it to the author to
   * remember. Omit only when there is genuinely nothing to cite.
   */
  basis?: string;
};

export function ArchetypeSection({
  id,
  eyebrow = "Who it is for",
  heading,
  intro,
  archetypes,
  stages = [],
  variant = "lanes",
  basis,
}: ArchetypeSectionProps) {
  const needsStages = variant === "lanes" || variant === "coverage";
  // Falling back rather than rendering a broken grid: a caller who picks
  // `lanes` without stages gets the claim the data can actually support.
  const resolved = needsStages && stages.length === 0 ? "field" : variant;

  return (
    <section id={id} className="ds-arch-section scroll-mt-28">
      <Reveal>
        <div className="ds-arch-section-head">
          {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
          <h2 className="display-title display-section mt-3" style={{ color: "var(--ink)" }}>
            {heading}
          </h2>
          {intro ? <p className="body-text mt-5 max-w-[58ch]">{intro}</p> : null}
        </div>
      </Reveal>

      <Reveal>
        <div className="ds-arch-section-body">
          {resolved === "lanes" ? <ArchetypeLanes archetypes={archetypes} stages={stages} /> : null}
          {resolved === "coverage" ? (
            <ArchetypeCoverage archetypes={archetypes} stages={stages} />
          ) : null}
          {resolved === "exchange" ? <ArchetypeExchange archetypes={archetypes} /> : null}
          {resolved === "field" ? <ArchetypeField archetypes={archetypes} /> : null}

          {basis ? <p className="ds-arch-basis">{basis}</p> : null}
        </div>
      </Reveal>
    </section>
  );
}
