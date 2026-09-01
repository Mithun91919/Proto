import { DotGrid } from "./primitives/DotGrid";
import { COMPACT_METRIC_MARKS, markDots, METRIC_MARK_MEANINGS, type MetricMarkName } from "./dotPatterns";

type MetricGlyphProps = {
  name: MetricMarkName;
  /** Show the name + meaning caption (reference-page mode) vs. just the glyph (in-context use). */
  labelled?: boolean;
  /**
   * Cell size / gap in px. Defaults match the original ProofStrip scale,
   * where the glyph sits alone above a display-scale number. A denser
   * context — a metric drawn inline beside its own small value/label —
   * needs a smaller glyph so it reads as an icon rather than towering over
   * the text next to it.
   */
  size?: number;
  gap?: number;
};

/**
 * S2b · One semantic 5×5 glyph per metric meaning — never decorative, never
 * more than one per stat. Use `labelled` in a reference grid; drop it when
 * pairing the glyph with a real metric value in a ProofStrip.
 */
export function MetricGlyph({ name, labelled = false, size = 6, gap = 4 }: MetricGlyphProps) {
  return (
    <div>
      <DotGrid cols={5} size={size} gap={gap} dots={markDots(name)} />
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

/**
 * The compact 3×3 variant, for a metric shown at icon scale beside a small
 * value/label rather than alone above a display-scale number. Shrinking
 * `MetricGlyph`'s own 5×5 bitmap collapsed it into noise — this is a
 * separate, purpose-drawn shape at a resolution that stays legible small.
 *
 * Self-contained: `.ds-compact-mark` and `aria-hidden` are baked in here
 * rather than left for every call site to add, so the micro-animation
 * (staggered entrance on reveal, a light lift when the enclosing link is
 * hovered) comes with the component instead of depending on the caller
 * wrapping it correctly. Whole-pixel size/gap only — a fractional value on
 * a circular dot rounds inconsistently per dot when the browser
 * rasterizes, which reads as the dots being unevenly sized even though
 * every one carries the same CSS value.
 */
export function CompactMetricGlyph({ name, size = 6, gap = 4 }: { name: MetricMarkName; size?: number; gap?: number }) {
  return (
    <span className="ds-compact-mark" aria-hidden>
      <DotGrid cols={3} size={size} gap={gap} dots={COMPACT_METRIC_MARKS[name]} />
    </span>
  );
}
