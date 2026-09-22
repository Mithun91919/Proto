import { Reveal } from "@/components/Reveal";
import {
  ArchetypeCards,
  ArchetypeCoverage,
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
 * - `cards`    — glyph, behaviour, goal and friction per type. The fullest
 *                statement, and the one to reach for when the segments are
 *                being introduced rather than referred back to.
 * - `lanes`    — routes through a shared process, gaps included. The only
 *                one that shows what a type crosses unaided.
 * - `coverage` — where each type works, beside what got in the way. The
 *                comparison table.
 *
 * Given no `stages`, every variant falls back to cards without their marks:
 * with no process to encode there is nothing for a dot to say, and a shape
 * standing in for one is the decoration this set was built to avoid.
 */

type ArchetypeSectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  /** One or two sentences. What the segmentation is for, not a list of it. */
  intro?: string;
  archetypes: Archetype[];
  /** The shared process. Without it the marks are dropped, not faked. */
  stages?: string[];
  variant?: "cards" | "lanes" | "coverage";
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
  variant = "cards",
  basis,
}: ArchetypeSectionProps) {
  // Falling back rather than rendering a broken grid: a caller who picks
  // `lanes` without stages gets the claim the data can actually support.
  const resolved = stages.length === 0 ? "cards" : variant;

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
          {resolved === "cards" ? <ArchetypeCards archetypes={archetypes} stages={stages} /> : null}
          {resolved === "lanes" ? <ArchetypeLanes archetypes={archetypes} stages={stages} /> : null}
          {resolved === "coverage" ? (
            <ArchetypeCoverage archetypes={archetypes} stages={stages} />
          ) : null}

          {basis ? <p className="ds-arch-basis">{basis}</p> : null}
        </div>
      </Reveal>
    </section>
  );
}
