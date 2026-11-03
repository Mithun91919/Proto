/**
 * A small icon drawn on a 9 × 9 grid of dots, in the same dot language as the
 * page backdrop and the dot portrait. Dots in the shape are solid; the rest of
 * the grid stays as faint dots, so the icon reads as lit cells on the board.
 * Decorative: the heading next to it carries the meaning.
 */

const GLYPHS = {
  /** A page with a few lines of text. */
  poster: [
    ".#######.",
    ".#.....#.",
    ".#.###.#.",
    ".#.....#.",
    ".#.###.#.",
    ".#.....#.",
    ".#.##..#.",
    ".#.....#.",
    ".#######.",
  ],
  /** A hub with a ring around it: the people around you. */
  people: [
    "...###...",
    "..#...#..",
    ".#.....#.",
    "#...#...#",
    "#..###..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...###...",
  ],
  /** A speech bubble. */
  speech: [
    ".........",
    ".#######.",
    "#.......#",
    "#.#.#.#.#",
    "#.......#",
    ".#######.",
    "..#......",
    ".#.......",
    ".........",
  ],
  /** A location pin on the ground. */
  pin: [
    "...###...",
    "..#...#..",
    ".#..#..#.",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
    ".........",
    ".#######.",
  ],
  /** An open book. */
  book: [
    ".........",
    ".###.###.",
    "#...#...#",
    "#...#...#",
    "#...#...#",
    "#...#...#",
    ".###.###.",
    ".........",
    ".........",
  ],
} as const;

export type DotIconName = keyof typeof GLYPHS;

const PITCH = 6;

export function DotIcon({
  name,
  size = 72,
  className,
}: {
  name: DotIconName;
  size?: number;
  className?: string;
}) {
  const rows = GLYPHS[name];
  const extent = PITCH * rows.length;
  return (
    <svg
      aria-hidden
      focusable="false"
      width={size}
      height={size}
      viewBox={`0 0 ${extent} ${extent}`}
      className={className}
    >
      {rows.flatMap((row, y) =>
        [...row].map((cell, x) => (
          <circle
            key={`${x}-${y}`}
            cx={x * PITCH + PITCH / 2}
            cy={y * PITCH + PITCH / 2}
            r={cell === "#" ? 2.3 : 0.8}
            fill="var(--accent-deep)"
            opacity={cell === "#" ? 1 : 0.22}
          />
        )),
      )}
    </svg>
  );
}
