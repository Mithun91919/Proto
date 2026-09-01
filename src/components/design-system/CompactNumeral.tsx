import type { CSSProperties } from "react";
import { DotGrid } from "./primitives/DotGrid";
import { compactDigitDots } from "./dotPatterns";

/**
 * A row number drawn at 3×5, not the S6 numeral's 4×7.
 *
 * That font is a 28-dot glyph built to lead a full editorial row — shrinking
 * its dot size doesn't shrink the dot count, so it keeps reading as heavy
 * next to a title beneath it. This is a genuinely lower-resolution font (15
 * dots per digit) for a numeral that leads a compact row instead, e.g. an
 * index-style card or list entry.
 *
 * `.ds-compact-mark` wraps every digit inside one shared entrance stagger,
 * with each digit offset from the last via `--group-offset` (a CSS custom
 * property inherits to every dot inside it) so the whole number reads as
 * one continuous cascade rather than each digit resetting to zero.
 */
export function CompactNumeral({ value, size = 5 }: { value: string; size?: number }) {
  return (
    <span className="ds-compact-mark flex gap-1.5" aria-hidden>
      {value.split("").map((digit, i) => (
        <span key={i} style={{ "--group-offset": i * 15 } as CSSProperties}>
          <DotGrid cols={3} size={size} gap={Math.max(2, size - 2)} dots={compactDigitDots(digit)} />
        </span>
      ))}
    </span>
  );
}
