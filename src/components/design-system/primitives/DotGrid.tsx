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
   * unlit cells are not part of the letterform.
   *
   * `small` draws it at a third of the diameter and just under half
   * opacity, centred in the same cell. Size is the primary difference and
   * the fade is what stops a small dot still reading as "on, but small" —
   * together they make the cell ground rather than a state.
   *
   * Two earlier attempts: a faint full-size fill sat between two stools,
   * too pale to read as ground and too present to ignore; and dropping the
   * cell to nothing let the shapes float free of the grid that frames them.
   * A hollow ring worked but its stroke is 1px at the sizes these render
   * at, which is fragile for no gain over a smaller dot.
   */
  offStyle?: "hidden" | "small";
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
        gridAutoRows: `${size}px`,
        // Centres an `offStyle="small"` dot in its cell; a no-op for every
        // dot drawn at full size.
        placeItems: "center",
        gap: `${gap}px`,
        width: "max-content",
      }}
    >
      {dots.map((opacity, index) => {
        const off = offStyle !== "hidden" && opacity === 0;
        // A third of the diameter, floored at 2px: below that it stops
        // rendering as a round dot and starts looking like grit.
        const offSize = Math.max(2, Math.round(size / 3));
        // Size alone still reads as "on, but small". Dropped to just under
        // half it reads as ground. Size stays the primary difference, which
        // is what keeps this clear of `layers` — those are full-size dots at
        // 0.32, and a third-size dot at 0.45 cannot be mistaken for one.
        const OFF_OPACITY = 0.45;
        return (
        <span
          key={index}
          className={VARIANT_CLASS[variant]}
          // `--dot-i` is unused by default — a consumer opts a grid into a
          // staggered entrance (see `.ds-compact-mark`) by keying an
          // animation-delay off it. Setting it here, once, means any dot
          // pattern in the system can pick up that motion without every
          // caller wiring its own index.
          style={
            {
              width: off ? offSize : size,
              height: off ? offSize : size,
              opacity: off ? OFF_OPACITY : opacity,
              "--dot-i": index,
            } as CSSProperties
          }
        />
        );
      })}
    </div>
  );
}
