import { GlassPanel } from "./primitives/GlassPanel";

export type CostStripItem = {
  /** What kind of cost it is, in mono — "Rework near release". */
  label: string;
  /** The cost in a few words, set like a metric would be. */
  heading: string;
  /** One or two plain sentences. */
  body: string;
};

type CostStripProps = {
  /** Three maximum, the same cap as `ProofStrip`: past it the columns stop reading as one claim. */
  items: CostStripItem[];
};

/**
 * S2b · Cost strip — `ProofStrip`'s shape for a claim that has no number yet.
 *
 * A strip of figures says how much; this one says what kind. It exists for
 * the explainer that sits before the evidence: what a thing is and what it
 * costs, in the same three-column surface the metrics use later, so the page
 * reads as one argument that starts in words and ends in figures.
 *
 * No glyph and no number on purpose. A mark with no quantity to carry is the
 * "dots as confetti" anti-pattern, and a made-up figure is worse.
 */
export function CostStrip({ items }: CostStripProps) {
  return (
    <GlassPanel
      className="grid overflow-hidden rounded-2xl"
      style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className="p-7"
          style={index > 0 ? { borderLeft: "1px solid color-mix(in oklab, var(--ds-solid-border) 70%, transparent)" } : undefined}
        >
          <p className="ds-eyebrow">{item.label}</p>
          <h3 className="display-title mt-4" style={{ fontSize: "1.35rem", lineHeight: 1.2, color: "var(--ds-accent)" }}>
            {item.heading}
          </h3>
          <p className="ds-note mt-3">{item.body}</p>
        </div>
      ))}
    </GlassPanel>
  );
}
