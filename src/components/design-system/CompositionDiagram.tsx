import type { CSSProperties, ReactNode } from "react";
import { DotGrid } from "./primitives/DotGrid";
import { GlassPanel } from "./primitives/GlassPanel";

/**
 * One 3×3 pictogram per piece, drawn in the dot language the rest of the site
 * uses rather than as stock icons. Nine cells keeps each one to a handful of
 * full-size dots. Same tones as the metric glyphs: `#` lit · `+` 0.6 ·
 * `.` unlit (drawn small, as the grid).
 *
 * Each reads from what the piece does, not from a brand mark:
 * - agent      a hub reaching out in four directions: it acts
 * - skill      lines of instruction, the last one shorter
 * - mcp        two servers, each with a tool it exposes
 * - api        two systems joined by a bridge
 * - external   a closed system: the thing at the far end
 */
const PICTOGRAMS = {
  agent: `
    .#.
    ###
    .#.
  `,
  skill: `
    ###
    ...
    ##.
  `,
  mcp: `
    ##+
    ...
    ##+
  `,
  api: `
    #.#
    ###
    #.#
  `,
  external: `
    ###
    #.#
    ###
  `,
} as const;

type Pictogram = keyof typeof PICTOGRAMS;

function pictogramDots(name: Pictogram): number[] {
  return PICTOGRAMS[name]
    .replace(/[^#+.]/g, "")
    .split("")
    .map((c) => (c === "#" ? 1 : c === "+" ? 0.6 : 0));
}

type NodeProps = {
  kind: string;
  note?: string;
  pictogram: Pictogram;
  /** Grid placement, as 1-based column and row (or row span). */
  col: number;
  row: number | string;
  tone?: "dark" | "glass" | "soft";
};

function Node({ kind, note, pictogram, col, row, tone = "glass" }: NodeProps) {
  const place: CSSProperties = { gridColumn: col, gridRow: row };
  const body: ReactNode = (
    <>
      <div
        className="mb-3"
        aria-hidden="true"
        style={tone === "dark" ? ({ "--ds-accent": "var(--ds-mint)" } as CSSProperties) : undefined}
      >
        <DotGrid cols={3} size={5} gap={3} dots={pictogramDots(pictogram)} offStyle="small" />
      </div>
      <p
        className="display-title"
        style={{ fontSize: "1.2rem", color: tone === "dark" ? "var(--ds-mint)" : undefined }}
      >
        {kind}
      </p>
      {note ? (
        <p
          className="mt-2 text-sm leading-6"
          style={{ color: tone === "dark" ? "var(--ds-dark-muted)" : "var(--ink-soft)" }}
        >
          {note}
        </p>
      ) : null}
    </>
  );

  if (tone === "dark") {
    return (
      <li className="ds-env-dark flex flex-col justify-center rounded-xl p-6" style={place}>
        {body}
      </li>
    );
  }
  return (
    <GlassPanel as="li" variant={tone === "soft" ? "soft" : "base"} className="flex flex-col justify-center rounded-2xl p-6" style={place}>
      {body}
    </GlassPanel>
  );
}

function Link({ label, col, row }: { label: string; col: number; row: number }) {
  return (
    <li
      aria-hidden="true"
      className="flex flex-col items-center justify-center gap-1 px-1"
      style={{ gridColumn: col, gridRow: row }}
    >
      <span className="ds-eyebrow text-center leading-snug">{label}</span>
      <span className="ds-arrow">→</span>
    </li>
  );
}

/**
 * One possible way an agent, a skill, an MCP server, its tools and an API
 * can be composed. Drawn as a chain with one branch, not a hierarchy: the
 * wording on every node and connector comes from the Studio brief, and the
 * caption beside it says this is one composition among several.
 *
 * Reads left to right. The agent carries out the task and can use a skill
 * (top) or connect through an MCP server (bottom); the server exposes
 * tools, which may call an API, and the API connects to an external
 * system or data.
 */
export function CompositionDiagram() {
  return (
    <ol
      aria-label="One possible composition: an agent can use a skill and connect through an MCP server; the server exposes tools that may call an API, and the API connects to an external system or data"
      className="grid list-none items-stretch gap-y-4 p-0"
      style={{ gridTemplateColumns: "1.1fr 6.5rem 1fr 7rem 1fr 6rem 1fr" }}
    >
      <Node tone="dark" pictogram="agent" kind="Agent" note="An AI that plans and acts to complete a task." col={1} row="1 / span 2" />
      <Link label="can use" col={2} row={1} />
      <Node pictogram="skill" kind="Skill" note="Packaged instructions for a specific job." col={3} row={1} />
      <Link label="connects through" col={2} row={2} />
      <Node pictogram="mcp" kind="MCP server" note="Exposes tools and data to AI over a standard protocol." col={3} row={2} />
      <Link label="its tools may call" col={4} row={2} />
      <Node pictogram="api" kind="API" note="An interface that lets software call other software." col={5} row={2} />
      <Link label="connects to" col={6} row={2} />
      <Node tone="soft" pictogram="external" kind="External system or data" note="The service or data an API reaches." col={7} row={2} />
    </ol>
  );
}
