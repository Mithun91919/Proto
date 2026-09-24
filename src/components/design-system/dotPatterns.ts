/**
 * The metric glyph set, defined once per meaning at both sizes it ships in.
 *
 * Authored as art rather than as a bitmap string or an opacity array, because
 * the shape is the whole point and neither of those lets you see it. Both
 * previous forms drifted exactly where you could not read them: `modules` and
 * `ring` were the same picture at 3×3 for months behind a comment calling it
 * deliberate, and `modules` disagreed with itself across the two sizes.
 *
 * Tone characters, so the mid-tones stay reserved for meaning:
 *   `#` lit · `+` 0.6 · `-` 0.32 · `.` unlit
 *
 * `.` is the unlit cell of the grid the glyph sits on. `DotGrid` draws it
 * small and faded rather than as a tone of its own, so the grid reads as a
 * grid and the opacity scale stays free to carry meaning. Size is the
 * primary difference, which is what keeps an unlit cell clear of `layers` —
 * those are full-size dots at 0.32 and cannot be confused with a third-size
 * dot at 0.45.
 *
 * The 3×3 is drawn fresh, never downsampled — at a few pixels per dot a 5×5
 * silhouette collapses into noise, and three identical dots in a row read as
 * an ellipsis rather than an icon.
 */
export const GLYPHS = {
  field: {
    meaning: "Population — users, accounts, people",
    // A distributed scatter: many, spread, no direction implied. A rising
    // arrow was tried here and read as growth on a plain headcount.
    lg: `
      #.#.#
      .#.#.
      #.#.#
      .#.#.
      #.#.#
    `,
    sm: `
      .#.
      #.#
      .#.
    `,
  },
  funnel: {
    meaning: "Consolidation — many into one",
    // Wide at the top, narrowing to a single point.
    lg: `
      #####
      .###.
      ..#..
      ..#..
      ..#..
    `,
    // Was the exact inverse of `field` — an X against a diamond, two
    // five-dot scatters that read alike at a glance. Now it tapers, which
    // is the only thing a funnel has to do.
    sm: `
      ###
      .#.
      .#.
    `,
  },
  modules: {
    meaning: "Discrete parts — modules, services",
    // Four quadrants joined through the centre row: parts that are
    // countable and connected. Separated, they drew "disconnected" under
    // the label "6 connected modules".
    lg: `
      ##.##
      ##.##
      #####
      ##.##
      ##.##
    `,
    // No room for four parts plus a join at this size; one adjoined block
    // is the same claim compressed.
    sm: `
      ##.
      ##.
      ...
    `,
  },
  ramp: {
    meaning: "Growth — increases, faster, more",
    lg: `
      ....#
      ...##
      ...##
      #.###
      #####
    `,
    sm: `
      ..#
      .##
      ###
    `,
  },
  ring: {
    meaning: "Reach — footprint, coverage, scale",
    lg: `
      .###.
      #...#
      #...#
      #...#
      .###.
    `,
    sm: `
      ###
      #.#
      ###
    `,
  },
  bars: {
    meaning: "Volume — searches, sessions, throughput",
    lg: `
      ....#
      ..#.#
      ..#.#
      #.#.#
      #.#.#
    `,
    // Three columns of uneven height — a comparison. It was a solid
    // triangle, which is `ramp` with the corner filled in: same silhouette,
    // different meaning.
    sm: `
      ..#
      #.#
      ###
    `,
  },
  layers: {
    meaning: "Hierarchy — levels of visibility",
    lg: `
      #####
      .....
      #####
      .....
      #####
    `,
    // The only glyph using mid-tones, and the reason they are reserved:
    // rows receding with depth.
    sm: `
      ###
      +++
      ---
    `,
  },
  drop: {
    meaning: "Reduction — less time, fewer tickets",
    // Deliberately the mirror of `ramp`: the pair should read as a pair.
    lg: `
      #####
      ####.
      ###..
      ##...
      #....
    `,
    sm: `
      ###
      ##.
      #..
    `,
  },
} as const;

export type MetricMarkName = keyof typeof GLYPHS;

/**
 * `.` is 0 and `DotGrid` draws it small and faded, so the grid is visible
 * without costing a tone. That leaves the whole opacity scale free to mean
 * something — `layers` is the only glyph using it, for receding depth.
 */
const TONES: Record<string, number> = { "#": 1, "+": 0.6, "-": 0.32, ".": 0 };

/** Art → opacity array. Whitespace and newlines are layout, not data. */
function parseArt(art: string): number[] {
  return art
    .replace(/[^#+\-.]/g, "")
    .split("")
    .map((c) => TONES[c]);
}

const NAMES = Object.keys(GLYPHS) as MetricMarkName[];

/** 5×5 opacity arrays, keyed by meaning. */
export const METRIC_MARKS = Object.fromEntries(
  NAMES.map((n) => [n, parseArt(GLYPHS[n].lg)]),
) as Record<MetricMarkName, number[]>;

/** 3×3 opacity arrays — drawn fresh, not downsampled from the 5×5. */
export const COMPACT_METRIC_MARKS = Object.fromEntries(
  NAMES.map((n) => [n, parseArt(GLYPHS[n].sm)]),
) as Record<MetricMarkName, number[]>;

export const METRIC_MARK_MEANINGS = Object.fromEntries(
  NAMES.map((n) => [n, GLYPHS[n].meaning]),
) as Record<MetricMarkName, string>;

/**
 * Two glyphs drawn the same put two meanings in one bucket, which is the one
 * thing this set exists to prevent. It has happened twice, both times
 * unnoticed because the shapes were unreadable in source, so it is asserted
 * rather than trusted. Development only — dead in a production build.
 */
if (process.env.NODE_ENV !== "production") {
  for (const size of ["lg", "sm"] as const) {
    const seen = new Map<string, MetricMarkName>();
    for (const name of NAMES) {
      const key = parseArt(GLYPHS[name][size]).join(",");
      const clash = seen.get(key);
      if (clash) {
        throw new Error(
          `Metric glyphs "${clash}" and "${name}" are identical at ${size}. ` +
            `Each has to say which family a metric belongs to; two of the same picture cannot.`,
        );
      }
      seen.set(key, name);
    }
  }
}

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

/**
 * A glyph that *is* the number, for a metric small enough to count.
 *
 * C1's first clause is quantity, and it is the strongest justification a dot
 * has — but only when the count is legible. "6 connected modules" beside a
 * four-dot block invites a reader to count and find a mismatch; six lit
 * cells against three unlit ones says six and cannot be misread.
 *
 * The trade is real: a counted glyph stops saying which family the metric
 * belongs to, so `modules` and `ring` at 6 would draw the same. It is worth
 * it only where the number is the point, which is why this is opt-in and
 * returns null above the grid's capacity — 139 cannot be counted in nine
 * cells, and a partial fill pretending otherwise would be a lie.
 */
export function countDots(value: string, cells: number): number[] | null {
  const n = Number(value.trim());
  if (!Number.isInteger(n) || n < 1 || n > cells) return null;
  // Centre, then corners, then edge midpoints. Reading order was tried and
  // filled top-down, so six lit cells came out as two solid rows — a block,
  // which is what `modules` already draws, and it read as a shape rather
  // than a count. This order spreads instead: one dot is centred, five is a
  // clean X, and six is that X plus an edge. Only a 3x3 is supported, which
  // is the only grid a count is legible in anyway.
  const SPREAD = cells === 9 ? [4, 0, 2, 6, 8, 1, 7, 3, 5] : null;
  const order = SPREAD ?? Array.from({ length: cells }, (_, i) => i);
  const lit = new Set(order.slice(0, n));
  return Array.from({ length: cells }, (_, i) => (lit.has(i) ? 1 : 0));
}

/**
 * The only way to draw a metric mark: the art is the single source, so a
 * caller cannot land on a different rest tone by reaching for a different
 * helper. The home page did exactly that once and drew `modules` and `ramp`
 * against a different ground from every other surface.
 *
 * Call this rather than reaching for the array: the home page built its
 * marks through `bitmapToDots` instead and rendered `modules` and `ramp`
 * with ghost dots while every other surface drew them without.
 */
export function markDots(name: MetricMarkName): number[] {
  return METRIC_MARKS[name];
}

/** Renders a run of digit characters as one dots-array per digit (5 cols each, 5 rows). */
export function digitDots(digit: string): number[] {
  const bitmap = DIGIT_GLYPHS[digit];
  if (!bitmap) return bitmapToDots("0000000000000000000000000");
  return bitmapToDots(bitmap);
}

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

/** The 3×5 compact digit, for use with `<DotGrid cols={3} ... />`. */
export function compactDigitDots(digit: string): number[] {
  const bitmap = COMPACT_DIGIT_GLYPHS[digit];
  if (!bitmap) return bitmapToDots("000000000000000");
  return bitmapToDots(bitmap);
}
