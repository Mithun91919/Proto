import { DotGrid } from "./primitives/DotGrid";
import { markDots, METRIC_MARK_MEANINGS, type MetricMarkName } from "./dotPatterns";

type MetricGlyphProps = {
  name: MetricMarkName;
  /** Show the name + meaning caption (reference-page mode) vs. just the glyph (in-context use). */
  labelled?: boolean;
};

/**
 * S2b · One semantic 5×5 glyph per metric meaning — never decorative, never
 * more than one per stat. Use `labelled` in a reference grid; drop it when
 * pairing the glyph with a real metric value in a ProofStrip.
 */
export function MetricGlyph({ name, labelled = false }: MetricGlyphProps) {
  return (
    <div>
      <DotGrid cols={5} size={6} gap={4} dots={markDots(name)} />
      {labelled ? (
        <>
          <p className="ds-eyebrow mt-4" style={{ color: "var(--ink)" }}>
            {name}
          </p>
          <p className="ds-note max-w-[22ch]">{METRIC_MARK_MEANINGS[name]}</p>
        </>
      ) : null}
    </div>
  );
}
