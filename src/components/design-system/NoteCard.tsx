type NoteCardProps = {
  /** Small mono label before the heading — "Today", "The system". */
  label: string;
  heading: string;
  body: string;
  /** One or two characters for the chip, e.g. "AI", "LD". */
  mark: string;
  /**
   * The four-point sparkle is the conventional marker for AI, so it belongs
   * only to a note about AI. A note about anything else gets the chip alone.
   */
  sparkle?: boolean;
};

/**
 * A short aside with a chip: a label, one claim, a couple of lines, and a
 * mark standing for whatever the note is about.
 *
 * Lifted out of the work page's career timeline, where it was the open end
 * of the rail ("Today — From interfaces to AI behaviour") written inline.
 * The shape is not specific to that page — a case study naming the system a
 * product was rebuilt on wants exactly this — so it lives here now and the
 * timeline uses it too.
 *
 * It does not wrap itself in a `Reveal`: inside `CaseStudyFigure` that would
 * nest one reveal in another. The caller supplies it where there isn't one.
 */
export function NoteCard({ label, heading, body, mark, sparkle = false }: NoteCardProps) {
  return (
    <div className="ds-note-card">
      <div className="ds-note-card-copy">
        <h3 className="ds-note-card-title display-title">
          <span>{label}</span>
          <span aria-hidden>—</span>
          {heading}
        </h3>
        <p className="ds-note-card-body">{body}</p>
      </div>
        <span
          className={`hero-chip ds-note-card-mark${sparkle ? " has-sparkle" : ""} display-title`}
          aria-hidden
        >
          {mark}
        </span>
    </div>
  );
}
