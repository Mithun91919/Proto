import { DotGrid } from "@/components/design-system/primitives/DotGrid";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";

/**
 * The workspace as the thing that holds the rest, in the same dot language as
 * the composition diagram. Chats on one side make the artifacts on the other,
 * all inside one frame, with who can see them along the bottom. The wording
 * for each piece is the Studio brief's own.
 */

const PICTOGRAMS = {
  chat: `
    ###
    #.#
    #..
  `,
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
  people: `
    .#.
    #.#
    ###
  `,
} as const;

type Pictogram = keyof typeof PICTOGRAMS;

function dotsFor(name: Pictogram): number[] {
  return PICTOGRAMS[name]
    .replace(/[^#+.]/g, "")
    .split("")
    .map((c) => (c === "#" ? 1 : c === "+" ? 0.6 : 0));
}

function Tile({ pictogram, kind, note, tone = "base" }: { pictogram: Pictogram; kind: string; note: string; tone?: "base" | "soft" }) {
  return (
    <GlassPanel as="li" variant={tone} className="flex flex-col justify-center rounded-2xl p-5">
      <div className="mb-3" aria-hidden="true">
        <DotGrid cols={3} size={5} gap={3} dots={dotsFor(pictogram)} offStyle="small" />
      </div>
      <p className="display-title" style={{ fontSize: "1.15rem" }}>
        {kind}
      </p>
      <p className="mt-1.5 text-[0.88rem] leading-6" style={{ color: "var(--ink-soft)" }}>
        {note}
      </p>
    </GlassPanel>
  );
}

export function WorkspaceDiagram() {
  return (
    <div
      className="rounded-3xl p-5 md:p-7"
      style={{ border: "1px dashed color-mix(in oklab, var(--ds-accent) 55%, var(--ds-solid-border))" }}
    >
      <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
        Workspace
      </p>

      <div className="mt-5 grid items-stretch gap-3" style={{ gridTemplateColumns: "minmax(0, 0.8fr) 5rem minmax(0, 2.2fr)" }}>
        <ul className="m-0 flex list-none p-0" aria-label="Chat sessions">
          <Tile pictogram="chat" kind="Chat sessions" note="The conversations that made each artifact, kept with it." tone="soft" />
        </ul>

        <div aria-hidden="true" className="flex flex-col items-center justify-center gap-1 px-1">
          <span className="ds-eyebrow text-center leading-snug">make</span>
          <span className="ds-arrow">→</span>
        </div>

        <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0" aria-label="Artifacts">
          <Tile pictogram="agent" kind="Agent" note="An AI that plans and acts to complete a task." />
          <Tile pictogram="skill" kind="Skill" note="Packaged instructions for a specific job." />
          <Tile pictogram="mcp" kind="MCP server" note="Exposes tools and data to AI over a standard protocol." />
          <Tile pictogram="api" kind="API" note="An interface that lets software call other software." />
        </ul>
      </div>

      <ul className="m-0 mt-3 flex list-none p-0" aria-label="Members">
        <GlassPanel as="li" variant="soft" className="flex w-full items-center gap-4 rounded-2xl px-5 py-4">
          <span aria-hidden="true">
            <DotGrid cols={3} size={5} gap={3} dots={dotsFor("people")} offStyle="small" />
          </span>
          <p className="text-[0.92rem] leading-6" style={{ color: "var(--ink-soft)" }}>
            <span className="display-title" style={{ fontSize: "1.05rem", color: "var(--ink)" }}>
              Members
            </span>{" "}
            · Who can see the workspace, and whether they own it or edit it.
          </p>
        </GlassPanel>
      </ul>
    </div>
  );
}
