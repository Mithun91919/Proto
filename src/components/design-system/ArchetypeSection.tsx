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
 * Two roles or fewer render as cards beside the copy; three or more switch
 * to a ledger across the full width, because that is where cards stop
 * fitting. The section decides, not the caller.
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
   * Runs the compact coverage matrix above the cards, stage names as
   * column headers. `cards` alone states each role's behaviour, needs and
   * friction in full but has to name coverage inline via a nine-dot icon
   * with no room for a legend next to it — legible to a screen reader from
   * its `aria-label`, not to a sighted reader without already holding
   * `stages` in mind. The matrix is the one thing coverage-as-icon can't
   * do: read every role against every stage at once, in the stage's own
   * words. Only applies when `variant` resolves to `cards` — `lanes` and
   * `coverage` already state coverage as their whole argument.
   */
  showCoverage?: boolean;
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
  /**
   * The label over `basis`. A prop rather than a fixed string so the number
   * it leads with — "20+ interviews before design" — is stated once, here,
   * and not again in `basis`.
   *
   * A leading figure ("20+", "~40%", "1.4K") is lifted out and set large,
   * with the rest as the label beside it, so the number a reader is meant to
   * trust is the first thing they see rather than one more word in a small
   * mono line. The split is done here, so every caller gets it and nobody
   * has to pass the number separately; a label with no leading figure ("How
   * these were defined") renders as plain text, as before.
   */
  basisLabel?: string;
};

/** "20+ interviews before design" → { figure: "20+", rest: "interviews before design" }. */
function splitFigure(label: string): { figure: string | null; rest: string } {
  const match = label.match(/^(~?\d[\d.,]*[KMkm]?\+?%?)\s+(.+)$/);
  return match ? { figure: match[1], rest: match[2] } : { figure: null, rest: label };
}

export function ArchetypeSection({
  id,
  eyebrow = "Who it is for",
  heading,
  intro,
  archetypes,
  stages = [],
  variant = "cards",
  showCoverage = false,
  basis,
  basisLabel = "How these were defined",
}: ArchetypeSectionProps) {
  // Falling back rather than rendering a broken grid: a caller who picks
  // `lanes` without stages gets the claim the data can actually support.
  const resolved = stages.length === 0 ? "cards" : variant;

  const { figure, rest } = splitFigure(basisLabel);

  const head = (
    <div className="ds-arch-section-head">
      {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
      <h2 className="display-title display-section mt-3">{heading}</h2>
      {intro ? <p className="body-text mt-5 max-w-[62ch]">{intro}</p> : null}
      {basis ? (
        <div className="ds-arch-basis">
          <p className="ds-stat-row">
            {figure ? <span className="ds-stat-figure">{figure}</span> : null}
            <span className="ds-stat-label">{rest}</span>
          </p>
          <p className="ds-arch-basis-text">{basis}</p>
        </div>
      ) : null}
    </div>
  );

  // Three roles or more and the cards stop fitting: two in a split column
  // get about 375px each, three get 240 and break to two or three words a
  // line. So the count picks the figure, and the composition follows it —
  // a four-column ledger cannot live in the narrower half of a split, so
  // that case runs the full width instead. One rule, no prop: where cards
  // stop working is arithmetic, not taste.
  const many = archetypes.length > 2 && resolved === "cards";

  if (many) {
    return (
      <section id={id} className="ds-arch-section scroll-mt-28">
        <Reveal>{head}</Reveal>
        <Reveal>
          <div className="ds-arch-section-body">
            <ArchetypeLedger archetypes={archetypes} stages={stages} />
          </div>
        </Reveal>
      </section>
    );
  }

  // Copy one side, roles the other. The default, and the reason it is the
  // default is that it reads as a section rather than a block of cards.
  return (
    <section id={id} className="ds-arch-section scroll-mt-28">
      <div className="ds-cs-split">
        <Reveal>{head}</Reveal>
        <Reveal>
          <div className="ds-arch-section-body is-tight">
            {resolved === "cards" && showCoverage ? (
              <ArchetypeCoverage archetypes={archetypes} stages={stages} compact />
            ) : null}
            {resolved === "cards" ? <ArchetypeCards archetypes={archetypes} stages={stages} /> : null}
            {resolved === "lanes" ? <ArchetypeLanes archetypes={archetypes} stages={stages} /> : null}
            {resolved === "coverage" ? (
              <ArchetypeCoverage archetypes={archetypes} stages={stages} />
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
