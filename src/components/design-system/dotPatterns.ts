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
    // The same X the 3×3 draws, spaced out rather than redrawn as a
    // different idea — a full checkerboard filled all 25 cells and read
    // as a texture, not a count of anything. A rising arrow was tried
    // too and read as growth on a plain headcount.
    lg: `
      #...#
      .#.#.
      ..#..
      .#.#.
      #...#
    `,
    // Scattered, no structure implied — a population is a count of
    // individuals, not a shape. The same X, three cells across.
    sm: `
      #.#
      .#.
      #.#
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
    // A neck held for two rows, not one clean taper — the point is
    // reached and then stays there, which is what separates a funnel's
    // drain from `drop`'s single downward wedge.
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
    // A cross through the centre — the same hub the 5×5 draws with four
    // quadrants, at the one resolution that can't fit four of anything.
    sm: `
      .#.
      ###
      .#.
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
    // UP. A solid triangle, apex at top — the stock-ticker \u25b2, which
    // already means "increasing" to anyone who has looked at a finance
    // page, rather than a staircase that needed a caption to read as
    // directional at all.
    sm: `
      .#.
      ###
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
    // Dots outside, nothing in the middle — a footprint with no interior
    // claim, drawn as a hollow ring rather than a filled shape.
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
    // Two columns on a flat baseline, deliberately not ascending — a
    // rising bar chart here would smuggle `ramp`'s claim back in for a
    // metric that is a volume, not a trend.
    sm: `
      #.#
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
    // Two slabs with an empty row between them — the same held-apart
    // levels the 5×5 draws with alternating tone, at the resolution
    // where a tone reads as "small" instead.
    sm: `
      ###
      ...
      ###
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
    // DOWN — \u25bc, the mirror stock-ticker convention. One clean wedge,
    // heaviest at the top — the single motion `funnel`'s held neck is
    // deliberately not.
    sm: `
      ###
      ###
      .#.
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

/**
 * Derives a glyph from what a metric's label actually says, instead of a
 * hand-maintained array kept in sync by index with `project.metrics`.
 *
 * That array was the failure mode: a metric inserted or reordered silently
 * shifted every glyph after it onto the wrong meaning, and there was no way
 * to notice short of reading eight projects' worth of arrays side by side.
 * Audited across every metric live on the site, hand-assignment had drifted
 * on six of seventeen — "10K+ monthly users" drawn as growth, "~40% faster"
 * drawn as volume, three metrics on one project fell through to a default
 * because nobody had added an entry for it at all.
 *
 * Ordered by specificity, most specific first: a plain rate/trend word
 * ("faster", "less") is checked before a population noun so "daily users"
 * doesn't answer to "daily" before it answers to "users". Falls back to
 * `field` — count of people is the least wrong default for a metric that
 * names none of these things, and it is what most metrics on the site are.
 */
const LABEL_RULES: [MetricMarkName, string[]][] = [
  ["drop", ["less ", "fewer", "reduction", "reduced", "saved", "cut ", "time spent"]],
  ["ramp", ["faster", "growth", "increase", "improve", "adoption", "uplift"]],
  ["funnel", ["consolidat", "into one", "unified", "\u21921", "merge"]],
  ["layers", ["level", "tier", "hierarch", "visibility"]],
  ["field", ["user", "visitor", "people", "account", "member", "customer", "associate", "engineer", "team"]],
  ["ring", ["cities", "market", "countr", "footprint", "device", "coverage", "reach", "region"]],
  ["modules", ["module", "service", "api", "repositor", "tool", "product", "integration"]],
  ["bars", ["search", "session", "request", "deliver", "throughput", "volume", "transaction"]],
];

export function glyphForMetric(label: string, value: string = ""): MetricMarkName {
  const text = `${label} ${value}`.toLowerCase();
  for (const [name, keys] of LABEL_RULES) {
    if (keys.some((k) => text.includes(k))) return name;
  }
  return "field";
}

export const METRIC_MARK_MEANINGS = Object.fromEntries(
  NAMES.map((n) => [n, GLYPHS[n].meaning]),
) as Record<MetricMarkName, string>;

/**
 * Every meaning gets its own shape at both sizes, not a shared default for
 * everything that isn't a trend. That collapse was tried — eight silhouettes,
 * then four, then two arrows plus one honest "no claim" ring for the rest —
 * and it kept solving the wrong problem. The compact glyph was never actually
 * read in isolation: `CompactMetricGlyph` always sits beside the metric's own
 * value and label (see `MetricRow`), so the thing doing the identifying work
 * is "15K+ APIs onboarded" in text, right next to it. The glyph's job is
 * narrower than a stand-alone pictogram — it only has to (a) not look
 * identical to a different meaning's glyph, so two unrelated metrics don't
 * appear to be the same kind of thing, and (b) carry enough of a family
 * resemblance to its own 5×5 sibling that the two read as one system. Eight
 * distinct shapes clear both bars; three shapes cleared them too but told a
 * reader less than the system could actually afford to say.
 *
 * What still has to hold, and what this checks: no two names share a 3×3
 * shape, the same as no two sharing a 5×5 one. A future edit landing two
 * meanings on the same silhouette is the one failure mode that would go
 * unnoticed without it — it did, twice, before this guard existed.
 * Development only — dead in a production build.
 */

if (process.env.NODE_ENV !== "production") {
  // 5×5: every name distinct.
  const seenLg = new Map<string, MetricMarkName>();
  for (const name of NAMES) {
    const key = parseArt(GLYPHS[name].lg).join(",");
    const clash = seenLg.get(key);
    if (clash) {
      throw new Error(
        `Metric glyphs "${clash}" and "${name}" are identical at 5×5. ` +
          `Each has to say which family a metric belongs to; two of the same picture cannot.`,
      );
    }
    seenLg.set(key, name);
  }

  // 3×3: every name distinct too — same check, same reason, smaller grid.
  const seenSm = new Map<string, MetricMarkName>();
  for (const name of NAMES) {
    const key = parseArt(GLYPHS[name].sm).join(",");
    const clash = seenSm.get(key);
    if (clash) {
      throw new Error(
        `Metric glyphs "${clash}" and "${name}" are identical at 3×3. ` +
          `Each has to draw its own silhouette; two of the same picture cannot.`,
      );
    }
    seenSm.set(key, name);
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
