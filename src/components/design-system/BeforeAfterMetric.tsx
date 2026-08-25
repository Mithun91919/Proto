import { GlassPanel } from "./primitives/GlassPanel";

/** G2 · Before / after metric — one paired metric when the delta is the story; keep base, unit, and window visible. */
export function BeforeAfterMetric() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <GlassPanel variant="base" className="rounded-xl p-7">
        <p className="ds-eyebrow">Before</p>
        <p className="display-title mt-3" style={{ fontSize: "1.75rem" }}>
          100
        </p>
        <p className="mt-1.5 text-sm" style={{ color: "var(--ink-soft)" }}>
          Baseline index
        </p>
      </GlassPanel>
      <GlassPanel variant="base" className="rounded-xl p-7">
        <p className="ds-eyebrow">After</p>
        <p className="display-title mt-3" style={{ fontSize: "1.75rem" }}>
          38
        </p>
        <p className="mt-1.5 text-sm" style={{ color: "var(--ink-soft)" }}>
          Same measure
        </p>
      </GlassPanel>
      <div className="rounded-xl p-7" style={{ background: "var(--ds-dark)" }}>
        <p className="ds-eyebrow" style={{ color: "var(--ds-dark-muted)" }}>
          Change
        </p>
        <p className="display-title mt-3" style={{ fontSize: "1.75rem", color: "var(--ds-mint)" }}>
          -62%
        </p>
        <p className="mt-1.5 text-sm" style={{ color: "#a9c3ca" }}>
          Measured reduction
        </p>
      </div>
    </div>
  );
}
