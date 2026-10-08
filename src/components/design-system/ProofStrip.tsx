import { GlassPanel } from "./primitives/GlassPanel";
import { MetricGlyph } from "./MetricGlyph";
import type { MetricMarkName } from "./dotPatterns";

export type ProofStripItem = {
  value: string;
  label: string;
  /**
   * Where it started. Given one, the figure reads "0 → 20K+": the baseline
   * small and muted, the result large. A number with no starting point is
   * scale, not change, and the copy guide asks for the base with every
   * metric; this is where a page states it.
   */
  from?: string;
  glyph: MetricMarkName;
};

type ProofStripProps = {
  /** Three maximum — see the Copy guide mechanics table. */
  items: ProofStripItem[];
};

/** S2 · Proof strip — a metric row where each figure carries its own semantic glyph. */
export function ProofStrip({ items }: ProofStripProps) {
  return (
    <GlassPanel className="ds-stagger grid overflow-hidden rounded-2xl" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
      {items.map((item, index) => (
        <div
          key={item.label}
          className="p-7"
          style={index > 0 ? { borderLeft: "1px solid color-mix(in oklab, var(--ds-solid-border) 70%, transparent)" } : undefined}
        >
          <MetricGlyph name={item.glyph} />
          <div
            className="display-title mt-5 flex items-baseline gap-2.5"
            style={{ fontSize: "1.9rem", color: "var(--ds-accent)" }}
          >
            {item.from ? (
              <span
                style={{ fontSize: "1.15rem", fontWeight: 500, color: "var(--muted)", letterSpacing: 0 }}
                aria-label={`from ${item.from}`}
              >
                {item.from}
                <span aria-hidden className="ml-2.5">→</span>
              </span>
            ) : null}
            <span>{item.value}</span>
          </div>
          <div className="ds-eyebrow mt-2">{item.label}</div>
        </div>
      ))}
    </GlassPanel>
  );
}
