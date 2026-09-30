export type ReleaseChecklistItem = {
  label: string;
  /** Ticked off. */
  done?: boolean;
  /** The step the figure is about: the one accent dot, with its note under it. */
  flagged?: boolean;
  /** A few words under a flagged step, in mono. */
  flag?: string;
  /** The point the row runs to: a ring, with no line after it. */
  end?: boolean;
};

type ReleaseChecklistProps = {
  items: ReleaseChecklistItem[];
  /** Names the row for screen readers. */
  label: string;
};

/**
 * S7 · Release row — a step on a path, drawn as the path, left to right.
 *
 * The plainest figure for a claim about *when* something happens in a
 * process: a line with a dot per step and one dot singled out. No card, no
 * boxes, no tags; the same vocabulary as a lane in C13, where a mark on a line
 * is the whole statement. Done steps are small and quiet, the flagged one is
 * the only accent and the only large dot, and the end is a ring. Where the
 * flagged dot sits against the ring is the picture.
 *
 * A depiction of a release, not a screenshot of one; caption it as such where
 * the steps are illustrative.
 */
export function ReleaseChecklist({ items, label }: ReleaseChecklistProps) {
  return (
    <ol className="ds-checklist-list" aria-label={label}>
      {items.map((item, index) => (
        <li
          key={item.label}
          className={`ds-checklist-item${item.done ? " is-done" : ""}${item.flagged ? " is-flagged" : ""}${item.end ? " is-end" : ""}`}
        >
          <span className="ds-checklist-track" aria-hidden>
            <span className="ds-checklist-box" />
            {index < items.length - 1 ? <span className="ds-checklist-line" /> : null}
          </span>
          <span className="ds-checklist-label">{item.label}</span>
          {item.flagged && item.flag ? <span className="ds-checklist-flag">{item.flag}</span> : null}
        </li>
      ))}
    </ol>
  );
}
