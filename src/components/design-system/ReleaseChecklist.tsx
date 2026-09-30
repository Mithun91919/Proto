import { GlassPanel } from "./primitives/GlassPanel";

export type ReleaseChecklistItem = {
  label: string;
  /** Ticked off. */
  done?: boolean;
  /** The item the figure is about: open, tinted and tagged. */
  flagged?: boolean;
  /** The tag under a flagged item, in mono. */
  flag?: string;
  /** The point the row runs to — drawn as a ring, with no line after it. */
  end?: boolean;
};

type ReleaseChecklistProps = {
  /** The row's own name, in mono: "Release". */
  title: string;
  items: ReleaseChecklistItem[];
};

/**
 * S7 · Release checklist — a task on a list, drawn as the list, left to right.
 *
 * For a claim about when something happens in a process, the plainest figure
 * is the process as the reader already knows it: a short run of steps with one
 * singled out. Left to right so that *where* the flagged step sits is the
 * picture: right up against the release, with nothing after it but the
 * deadline. Done steps are ticked and recede; the flagged one is open, tinted
 * and tagged; the end is a ring.
 *
 * It is a depiction of a release, not a screenshot of one, and should be
 * captioned as such where the steps are illustrative.
 */
export function ReleaseChecklist({ title, items }: ReleaseChecklistProps) {
  return (
    <GlassPanel className="ds-checklist rounded-2xl p-7">
      <p className="ds-eyebrow">{title}</p>
      <ol className="ds-checklist-list">
        {items.map((item, index) => (
          <li
            key={item.label}
            className={`ds-checklist-item${item.done ? " is-done" : ""}${item.flagged ? " is-flagged" : ""}${item.end ? " is-end" : ""}`}
          >
            <span className="ds-checklist-track" aria-hidden>
              <span className="ds-checklist-box">{item.done ? "✓" : item.flagged ? "!" : ""}</span>
              {index < items.length - 1 ? <span className="ds-checklist-line" /> : null}
            </span>
            <span className="ds-checklist-label">{item.label}</span>
            {item.flagged && item.flag ? <span className="ds-checklist-flag">{item.flag}</span> : null}
          </li>
        ))}
      </ol>
    </GlassPanel>
  );
}
