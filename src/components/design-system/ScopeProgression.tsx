import { DotGrid } from "./primitives/DotGrid";

const STAGES: { label: string; cols: number; count: number }[] = [
  { label: "Interface", cols: 2, count: 4 },
  { label: "Product", cols: 3, count: 6 },
  { label: "Workflow", cols: 3, count: 9 },
  { label: "System", cols: 4, count: 12 },
];

/**
 * Each stage genuinely has more dots than the last — the growing count is
 * the point (C1 · quantity), not decoration standing in for the words
 * "Interface → Product → Workflow → System" the copy already states.
 */
export function ScopeProgression() {
  return (
    <div className="flex flex-wrap items-end gap-8">
      {STAGES.map((stage, index) => (
        <div key={stage.label} className="flex items-center gap-8">
          <div>
            <DotGrid cols={stage.cols} size={6} gap={4} dots={Array(stage.count).fill(1)} />
            <p className="ds-eyebrow mt-3" style={{ color: index === STAGES.length - 1 ? "var(--ds-accent-deep)" : "var(--muted)" }}>
              {stage.label}
            </p>
          </div>
          {index < STAGES.length - 1 ? (
            <span className="ds-arrow self-center pb-6">→</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
