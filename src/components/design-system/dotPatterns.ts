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
 * `.` is empty, not a faint dot. An unlit cell saying "nothing here" is a
 * thing the empty position already says, and spending a tone on it puts it in
 * competition with `layers`, where 0.6 and 0.32 mean receding depth. A
 * mid-tone is free for a state worth naming: baseline against achieved.
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
 * The only way to draw a metric mark. Rest is 0, not the faint 0.14 that
 * `bitmapToDots` still defaults to for digits — an unlit cell in a metric
 * glyph says nothing-here, which the empty position already says, and
 * spending the second tone on it competes with `layers`, where 0.6 and 0.32
 * mean receding depth.
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
