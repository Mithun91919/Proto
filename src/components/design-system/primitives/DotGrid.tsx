import type { CSSProperties } from "react";

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
  /**
   * How a cell at 0 is drawn.
   *
   * `hidden` (default) leaves it invisible — right for a digit, where the
   * unlit cells are not part of the letterform. `ring` draws it as a hollow
   * outline, for a glyph read against a grid: the position is visible as a
   * position without being a tone, which keeps the opacity scale free to
   * mean something (`layers` uses 0.6 and 0.32 for receding depth). A faint
   * fill was tried for this and sat awkwardly between the two — too pale to
   * read as ground, too present to ignore.
   */
  offStyle?: "hidden" | "ring";
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
export function DotGrid({
  cols,
  dots,
  size = 7,
  gap = 5,
  variant = "default",
  offStyle = "hidden",
  className,
}: DotGridProps) {
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
      {dots.map((opacity, index) => {
        const off = offStyle === "ring" && opacity === 0;
        return (
        <span
          key={index}
          className={`${VARIANT_CLASS[variant]}${off ? " ds-dot-off" : ""}`}
          // `--dot-i` is unused by default — a consumer opts a grid into a
          // staggered entrance (see `.ds-compact-mark`) by keying an
          // animation-delay off it. Setting it here, once, means any dot
          // pattern in the system can pick up that motion without every
          // caller wiring its own index.
          style={
            {
              width: size,
              height: size,
              opacity: off ? 1 : opacity,
              "--dot-i": index,
            } as CSSProperties
          }
        />
        );
      })}
    </div>
  );
}
