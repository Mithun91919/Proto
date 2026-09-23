import { Reveal } from "@/components/Reveal";
import {
  ArchetypeCards,
  ArchetypeCoverage,
  ArchetypeLanes,
  ArchetypeLedger,
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
   * How the section composes itself, independent of which figure it holds.
   *
   * - `stack`  — head, basis, then the figure across the full column. The
   *              default: nothing competes, and it reads as its own beat.
   * - `split`  — head and basis in a narrow column with the roles beside
   *              them. For a page already running copy-one-side, media-other,
   *              where a full-width block would break the rhythm.
   * - `anchor` — the whole section on the dark ground. B6 reserves dark for
   *              a thesis or reframe, and the roles are the premise every
   *              decision below answers to, so it qualifies — once. Two dark
   *              blocks in a case study is the anti-pattern.
   * - `ledger` — one row per role instead of a card each. The only layout
   *              that holds four roles without cramping them, and the only
   *              one that lets a reader compare the same field down a column.
   */
  layout?: "stack" | "split" | "anchor" | "ledger";
  /**
   * Where the segments came from, rendered above them.
   *
   * Not decoration: an archetype with no stated provenance is the thing a
   * reader has learned to distrust, so the section makes room for the
   * sentence rather than leaving it to the author to remember. It sits
   * before the cards rather than under them because a reader who already
   * knows these came from interviews reads the cards differently — found
   * rather than imagined. Underneath, it arrived after the judgement was
   * already formed. Omit only when there is genuinely nothing to cite.
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
  layout = "stack",
  basis,
}: ArchetypeSectionProps) {
  // Falling back rather than rendering a broken grid: a caller who picks
  // `lanes` without stages gets the claim the data can actually support.
  const resolved = stages.length === 0 ? "cards" : variant;

  const head = (
    <div className="ds-arch-section-head">
      {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
      <h2 className="display-title display-section mt-3">{heading}</h2>
      {intro ? <p className="body-text mt-5 max-w-[58ch]">{intro}</p> : null}
      {basis ? (
        <p className="ds-arch-basis">
          <span className="ds-arch-basis-label">How these were defined</span>
          {basis}
        </p>
      ) : null}
    </div>
  );

  // `ledger` is a layout rather than a figure variant: it replaces the cards
  // with rows but keeps whatever the section is otherwise doing.
  const figure =
    layout === "ledger" ? (
      <ArchetypeLedger archetypes={archetypes} stages={stages} />
    ) : (
      <>
        {resolved === "cards" ? <ArchetypeCards archetypes={archetypes} stages={stages} /> : null}
        {resolved === "lanes" ? <ArchetypeLanes archetypes={archetypes} stages={stages} /> : null}
        {resolved === "coverage" ? (
          <ArchetypeCoverage archetypes={archetypes} stages={stages} />
        ) : null}
      </>
    );

  if (layout === "split") {
    return (
      <section id={id} className="ds-arch-section scroll-mt-28">
        <div className="ds-cs-split">
          <Reveal>{head}</Reveal>
          <Reveal>
            <div className="ds-arch-section-body is-tight">{figure}</div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`ds-arch-section scroll-mt-28${layout === "anchor" ? " is-anchor" : ""}`}
    >
      <Reveal>{head}</Reveal>
      <Reveal>
        <div className="ds-arch-section-body">{figure}</div>
      </Reveal>
    </section>
  );
}
