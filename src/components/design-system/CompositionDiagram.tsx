import type { CSSProperties, ReactNode } from "react";
import { GlassPanel } from "./primitives/GlassPanel";

type NodeProps = {
  kind: string;
  note: string;
  /** Grid placement, as 1-based column and row (or row span). */
  col: number;
  row: number | string;
  tone?: "dark" | "glass" | "soft";
};

function Node({ kind, note, col, row, tone = "glass" }: NodeProps) {
  const place: CSSProperties = { gridColumn: col, gridRow: row };
  const body: ReactNode = (
    <>
      <p
        className="display-title"
        style={{ fontSize: "1.2rem", color: tone === "dark" ? "var(--ds-mint)" : undefined }}
      >
        {kind}
      </p>
      <p
        className="mt-2 text-sm leading-6"
        style={{ color: tone === "dark" ? "var(--ds-dark-muted)" : "var(--ink-soft)" }}
      >
        {note}
      </p>
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
 * tools, a tool may call an API, and the API connects to an external
 * system or data.
 */
export function CompositionDiagram() {
  return (
    <ol
      aria-label="One possible composition: an agent can use a skill and connect through an MCP server; the server exposes tools, a tool may call an API, and the API connects to an external system or data"
      className="grid list-none items-stretch gap-y-4 p-0"
      style={{ gridTemplateColumns: "1.1fr 6.5rem 1fr 5.5rem 1fr 5.5rem 1fr 5.5rem 1fr" }}
    >
      <Node tone="dark" kind="Agent" note="Carries out a task" col={1} row="1 / span 2" />
      <Link label="can use" col={2} row={1} />
      <Node kind="Skill" note="Instructions for a capability" col={3} row={1} />
      <Link label="connects through" col={2} row={2} />
      <Node kind="MCP server" note="Exposes tools" col={3} row={2} />
      <Link label="exposes" col={4} row={2} />
      <Node kind="Tool" note="Retrieves information or performs an action" col={5} row={2} />
      <Link label="may call" col={6} row={2} />
      <Node kind="API" note="Lets software systems communicate" col={7} row={2} />
      <Link label="connects to" col={8} row={2} />
      <Node tone="soft" kind="External system or data" note="Where the service or information lives" col={9} row={2} />
    </ol>
  );
}
