import { GlassPanel } from "./primitives/GlassPanel";

export type ReleaseChecklistItem = {
  label: string;
  /** Ticked off. */
  done?: boolean;
  /** The item the card is about: drawn open, tinted, and tagged. */
  flagged?: boolean;
  /** The tag beside a flagged item, in mono. */
  flag?: string;
};

type ReleaseChecklistProps = {
  /** The list's own name, in mono: "Release". */
  title: string;
  items: ReleaseChecklistItem[];
};

/**
 * S7 · Release checklist — a task that sits on a list, drawn as the list.
 *
 * For a claim about when something happens in a process, the plainest figure
 * is the process as the reader already knows it: a short list with one item
 * singled out. No dots, no scale, nothing to decode. Done items are ticked and
 * recede; the flagged item is open, tinted and tagged, so the eye goes to the
 * one line the page is about and to where it sits in the list.
 *
 * It is a depiction of a checklist, not a screenshot of one, and should be
 * captioned as such where the items are illustrative.
 */
export function ReleaseChecklist({ title, items }: ReleaseChecklistProps) {
  return (
    <GlassPanel className="ds-checklist rounded-2xl p-7">
      <p className="ds-eyebrow">{title}</p>
      <ul className="ds-checklist-list">
        {items.map((item) => (
          <li
            key={item.label}
            className={`ds-checklist-item${item.done ? " is-done" : ""}${item.flagged ? " is-flagged" : ""}`}
          >
            <span className="ds-checklist-box" aria-hidden>
              {item.done ? "✓" : item.flagged ? "!" : ""}
            </span>
            <span className="ds-checklist-label">{item.label}</span>
            {item.flagged && item.flag ? <span className="ds-checklist-flag">{item.flag}</span> : null}
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}
