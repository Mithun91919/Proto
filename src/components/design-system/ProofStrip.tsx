import { GlassPanel } from "./primitives/GlassPanel";
import { MetricGlyph } from "./MetricGlyph";
import type { MetricMarkName } from "./dotPatterns";

export type ProofStripItem = {
  value: string;
  label: string;
  glyph: MetricMarkName;
};

type ProofStripProps = {
  /** Three maximum — see the Copy guide mechanics table. */
  items: ProofStripItem[];
};

/** S2 · Proof strip — a metric row where each figure carries its own semantic glyph. */
export function ProofStrip({ items }: ProofStripProps) {
  return (
    <GlassPanel className="grid overflow-hidden rounded-2xl" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
      {items.map((item, index) => (
        <div
          key={item.label}
          className="p-7"
          style={index > 0 ? { borderLeft: "1px solid color-mix(in oklab, var(--ds-solid-border) 70%, transparent)" } : undefined}
        >
          <MetricGlyph name={item.glyph} />
          <div className="display-title mt-5" style={{ fontSize: "1.9rem", color: "var(--ds-accent-deep)" }}>
            {item.value}
          </div>
          <div className="ds-eyebrow mt-2">{item.label}</div>
        </div>
      ))}
    </GlassPanel>
  );
}
