export type DotVariant = "default" | "muted" | "quiet" | "state";

type DotGridProps = {
  /** Number of columns; row count is inferred from `dots.length / cols`. */
  cols: number;
  /** Opacity per dot (0–1). A uniform grid just passes an array of 1s. */
  dots: number[];
  /** Cell size in px. The guide uses 4–7px depending on density. */
  size?: number;
  gap?: number;
  variant?: DotVariant;
  className?: string;
};

const VARIANT_CLASS: Record<DotVariant, string> = {
  default: "ds-dot",
  muted: "ds-dot ds-dot-muted",
  quiet: "ds-dot ds-dot-quiet",
  state: "ds-dot ds-dot-state",
};

/**
 * The single renderer behind every dot pattern in the system — meaning
 * cards, metric glyphs, digit numerals, system diagrams, fingerprints.
 * Every dot must earn its place per the guide's C1 rule (quantity,
 * grouping, connection, state, or change) — this component only draws
 * what you tell it to; the meaning is the caller's responsibility.
 */
export function DotGrid({ cols, dots, size = 7, gap = 5, variant = "default", className }: DotGridProps) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gap: `${gap}px`,
        width: "max-content",
      }}
    >
      {dots.map((opacity, index) => (
        <span
          key={index}
          className={VARIANT_CLASS[variant]}
          style={{ width: size, height: size, opacity }}
        />
      ))}
    </div>
  );
}
