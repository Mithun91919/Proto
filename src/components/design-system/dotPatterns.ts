/**
 * 5×5 dot-bitmaps for the semantic metric glyphs (C1 taxonomy → S2b marks)
 * and the numeral glyphs used in editorial numbered rows (S6). Each string
 * is read row-major; "1" lights the dot, "0" leaves it at rest opacity.
 *
 * One glyph per metric meaning, never decorative, never more than one per
 * stat — see the Copy guide / anti-patterns (L) for why.
 */
export const METRIC_MARKS = {
  field: "1010101010101010101010101",
  funnel: "1111101110001000010000100",
  modules: "1101111011000001101111011",
  ramp: "0000100011000111011111111",
  ring: "0111010001100011000101110",
  bars: "0000100101001011010110101",
  layers: "1111100000111110000011111",
  drop: "1111111110111001100010000",
} as const;

export type MetricMarkName = keyof typeof METRIC_MARKS;

/**
 * 3×3 compact variants of the same eight meanings, for a metric shown at
 * icon scale beside a small value/label rather than alone above a
 * display-scale number.
 *
 * Downsampling the 5×5 bitmap doesn't work — at a few pixels per dot its
 * silhouette collapses into noise, and three identical dots in a row reads
 * as an ellipsis, not an icon, and drops the meaning entirely. These are
 * drawn fresh at 3×3 so each keeps a distinct, legible shape at small size:
 * a scatter, a taper, four separate blocks, a rising or falling stair, a
 * ring, uneven bars, fading rows. Values are opacity (0–1), not a bitmap
 * string, so a shape can fade rather than only switch on/off — `layers`
 * uses that for its receding rows.
 */
export const COMPACT_METRIC_MARKS: Record<MetricMarkName, number[]> = {
  // A symmetric cross — no diagonal, no implied direction. The rising
  // arrow tried here first read as a growth trend on a plain headcount
  // metric ("6K+ monthly users" isn't going anywhere, it just is);
  // reverted to something with no directional bias at all. Corners+centre
  // (the X) was the more obvious "population" shape but now belongs to
  // `funnel`, so this uses the edge midpoints instead — free, and neutral.
  field: [0.14, 1, 0.14, 1, 0.14, 1, 0.14, 1, 0.14],
  // Four corners converging on a centre — many points funnelling into
  // one, which is what "consolidation" actually is. (The X shape freed up
  // once `field` moved off it, above.)
  funnel: [1, 0.14, 1, 0.14, 1, 0.14, 1, 0.14, 1],
  // The full outer ring, chosen deliberately even though it now matches
  // `ring` below — a considered call, not an oversight (the alternative,
  // four separate corners, read as the opposite of "connected modules";
  // see git history for that version and the block that replaced it).
  modules: [1, 1, 1, 1, 0.14, 1, 1, 1, 1],
  // A stair rising toward the top-right corner.
  ramp: [0.14, 0.14, 1, 0.14, 1, 1, 1, 1, 1],
  // A hollow loop — a cycle, a closed system.
  ring: [1, 1, 1, 1, 0.14, 1, 1, 1, 1],
  // Three uneven columns — a comparison, not a trend.
  bars: [0.14, 1, 0.14, 1, 1, 0.14, 1, 1, 1],
  // Full rows fading with depth — stacked, receding layers.
  layers: [1, 1, 1, 0.6, 0.6, 0.6, 0.32, 0.32, 0.32],
  // The mirror of `ramp` — a stair falling toward the bottom-left.
  drop: [1, 1, 1, 1, 1, 0.14, 1, 0.14, 0.14],
};

export const METRIC_MARK_MEANINGS: Record<MetricMarkName, string> = {
  field: "Population — users, accounts, people",
  funnel: "Consolidation — many into one",
  modules: "Discrete parts — modules, services",
  ramp: "Growth — increases, faster, more",
  ring: "Reach — footprint, coverage, scale",
  bars: "Volume — searches, sessions, throughput",
  layers: "Hierarchy — levels of visibility",
  drop: "Reduction — less time, fewer tickets",
};

/**
 * 3×5 compact digits, for a row number shown as a small lead-in mark rather
 * than an S6 display numeral. Reusing `DIGIT_GLYPHS` at a smaller dot size
 * doesn't work — it's a 4×7, 28-dot font, and 28 dots stay 28 dots no
 * matter how small each one gets; the total footprint barely shrinks and
 * the numeral still reads as heavy next to the title beneath it. This is a
 * separate, lower-resolution font (15 dots) so the numeral is actually
 * smaller, not just drawn with smaller dots.
 */
const COMPACT_DIGIT_GLYPHS: Record<string, string> = {
  "0": "111101101101111",
  "1": "010110010010111",
  "2": "111001111100111",
  "3": "111001111001111",
  "4": "101101111001001",
  "5": "111100111001111",
  // Open top-left corner, not a mid-shape gap — the standard tiny-LED
  // convention for 6. The original version only differed from 0 by
  // scattered single dots mid-shape, which reads as the same closed loop
  // at 5px; a notch at a corner is what the eye actually catches.
  "6": "011100111101111",
  "7": "111001010010010",
  "8": "111101111101111",
  "9": "111101111001111",
};

const DIGIT_GLYPHS: Record<string, string> = {
  "0": "0110100110011001100110010110",
  "1": "0010011000100010001000100111",
  "2": "0110100100010010010010001111",
  "3": "1111001001000010000110010110",
  "4": "0010011010101010111100100010",
  "5": "1111100011100001000110010110",
  "6": "0110100011101001100110010110",
  "7": "1111000100100010010001000100",
  "8": "0110100110010110100110010110",
  "9": "0110100110010111000100010110",
};

const REST_OPACITY = 0.14;

/** Turns a bitmap string into a dot-opacity array for `<DotGrid dots={...} />`. */
export function bitmapToDots(bitmap: string, restOpacity = REST_OPACITY): number[] {
  return bitmap.split("").map((bit) => (bit === "1" ? 1 : restOpacity));
}

export function markDots(name: MetricMarkName, restOpacity = 0): number[] {
  return bitmapToDots(METRIC_MARKS[name], restOpacity);
}

/** Renders a run of digit characters as one dots-array per digit (5 cols each, 5 rows). */
export function digitDots(digit: string): number[] {
  const bitmap = DIGIT_GLYPHS[digit];
  if (!bitmap) return bitmapToDots("0000000000000000000000000");
  return bitmapToDots(bitmap);
}

/** The 3×5 compact digit, for use with `<DotGrid cols={3} ... />`. */
export function compactDigitDots(digit: string): number[] {
  const bitmap = COMPACT_DIGIT_GLYPHS[digit];
  if (!bitmap) return bitmapToDots("000000000000000");
  return bitmapToDots(bitmap);
}
