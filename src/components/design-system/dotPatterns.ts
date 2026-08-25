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
