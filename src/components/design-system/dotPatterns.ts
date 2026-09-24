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
    // The COUNT group's anchor shape — shared with everything that is not
    // a trend. See the note at the top of this file: direction is the one
    // claim a 3×3 shape can make without a caption, so anything that is
    // not "up" or "down" gets this and nothing more specific.
    sm: `
      ###
      #.#
      ###
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
    // Shares its compact shape with `drop`: consolidating to one and
    // reducing to less are the same move at this size, both "falling".
    sm: `
      ###
      ###
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
    // COUNT, same as every other non-directional meaning: a 2×2 block
    // read as "discrete parts" only once you already knew that was the
    // claim. Nothing at 3×3 does.
    sm: `
      ###
      #.#
      ###
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
    // COUNT. "Footprint" and "coverage" have no more of a 3×3 pictogram
    // than "discrete parts" does; this is the same honest non-claim.
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
    // COUNT. Was a solid triangle one cell off from `ramp` — the
    // near-collision that forced the first regrouping — and volume is not
    // a trend, so there is no shape it is owed beyond the honest default.
    sm: `
      ###
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
    // COUNT at compact scale, not a shrunk version of the receding-rows
    // idea: mid-tones already distinguish `layers` at 5×5, and asking a
    // single 3×3 glyph to carry a tone state on top of a shape claim was
    // the same overreach the whole regrouping exists to fix.
    sm: `
      ###
      #.#
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
    // DOWN — \u25bc, the mirror stock-ticker convention.
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
 * At 5×5 every meaning still gets its own shape — there is room, and it
 * always ships with a label (see C8b on /components). Two identical shapes
 * there is a straightforward mistake, so it throws.
 *
 * At 3×3, a first pass tried four silhouettes (rising, falling, a solid
 * block, a scatter) and it still did not read: a 2×2 block for "15K+ APIs
 * onboarded" says nothing to a reader who has not already been told it
 * means "discrete parts" — there is no pictogram convention for that the
 * way there is for up and down. Direction is the one claim a handful of
 * dots can make without a caption, so that is now the whole vocabulary:
 *
 *   up      ramp                          ▲, a solid triangle
 *   down    funnel, drop                  ▼, its mirror
 *   count   modules, ring, bars, layers, field   a hollow ring, no claim
 *
 * `count` is the default for everything that is not a trend. It does not
 * pretend to distinguish population from structure from volume, because
 * nothing at this resolution was actually managing that distinction — it
 * was five different-looking shapes all making the same non-claim. Most of
 * what renders here in practice is the count-bearing override anyway
 * (`countDots`), which shows the real number instead of any of this.
 *
 * What still has to hold, and what this checks: exactly these three
 * shapes, exactly this grouping. A fourth near-shape sneaking in from a
 * future edit, or a name landing in the wrong group, defeats the reason
 * this exists — so both are asserted rather than trusted. Development
 * only — dead in a production build.
 */
export const COMPACT_GROUPS: Record<MetricMarkName, "up" | "down" | "count"> = {
  ramp: "up",
  funnel: "down",
  drop: "down",
  modules: "count",
  ring: "count",
  bars: "count",
  layers: "count",
  field: "count",
};

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

  // 3×3: every name in COMPACT_GROUPS (nothing left unassigned or stale),
  // every member of a group drawing the same shape, and no two groups
  // drawing the same shape as each other.
  for (const name of NAMES) {
    if (!(name in COMPACT_GROUPS)) {
      throw new Error(`"${name}" has no compact group in COMPACT_GROUPS.`);
    }
  }
  const shapeByGroup = new Map<string, string>();
  const groupByShape = new Map<string, string>();
  for (const name of NAMES) {
    const group = COMPACT_GROUPS[name];
    const key = parseArt(GLYPHS[name].sm).join(",");
    const expected = shapeByGroup.get(group);
    if (expected === undefined) {
      shapeByGroup.set(group, key);
      const otherGroup = groupByShape.get(key);
      if (otherGroup && otherGroup !== group) {
        throw new Error(
          `Compact groups "${otherGroup}" and "${group}" draw the same 3×3 shape — ` +
            `that collapses two of the four intended silhouettes into one.`,
        );
      }
      groupByShape.set(key, group);
    } else if (expected !== key) {
      throw new Error(
        `"${name}" (group "${group}") draws a different 3×3 shape from the rest of its group.`,
      );
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
