import type { CSSProperties } from "react";
import { DotGrid } from "@/components/design-system/primitives/DotGrid";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";

/**
 * The method as diagrams, in the same dot language as the Studio composition
 * diagram: the interview lane, the survey lane, and the two together, where
 * both feed a skill that synthesised them into a rich HTML readout. Drawn as
 * chains, not a hierarchy. Every figure on them is the study's own.
 */

const PICTOGRAMS = {
  invite: `
    .#.
    ###
    #.#
  `,
  hypothesis: `
    ###
    .#.
    .#.
  `,
  survey: `
    ###
    +++
    ###
  `,
  github: `
    #.#
    .#.
    #.#
  `,
  dashboard: `
    ..#
    .##
    ###
  `,
  transcripts: `
    ###
    +++
    #+#
  `,
  responses: `
    #.#
    ###
    #.#
  `,
  skill: `
    ###
    .#.
    ##.
  `,
  readout: `
    ###
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

function Step({
  kind,
  note,
  pictogram,
  col,
  row,
  tone = "glass",
}: {
  kind: string;
  note: string;
  pictogram: Pictogram;
  col: number;
  row: number | string;
  tone?: "glass" | "soft";
}) {
  const place: CSSProperties = { gridColumn: col, gridRow: row };
  return (
    <GlassPanel
      as="li"
      variant={tone === "soft" ? "soft" : "base"}
      className="flex flex-col justify-center rounded-2xl p-6"
      style={place}
    >
      <div className="mb-3" aria-hidden="true">
        <DotGrid cols={3} size={5} gap={3} dots={dotsFor(pictogram)} offStyle="small" />
      </div>
      <p className="display-title" style={{ fontSize: "1.2rem" }}>
        {kind}
      </p>
      <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
        {note}
      </p>
    </GlassPanel>
  );
}

function Join({ label, col, row }: { label: string; col: number; row: number | string }) {
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

const CHAIN_COLUMNS = "1fr 4.5rem 1fr 4.5rem 1fr";

/** The interview lane on its own: invitation, conversation, transcript and learnings. */
export function InterviewChain() {
  return (
    <ol
      aria-label="The interviews: invited by message, then a conversation, then a transcript and the learnings from it"
      className="grid list-none items-stretch p-0"
      style={{ gridTemplateColumns: CHAIN_COLUMNS }}
    >
      <Step pictogram="invite" kind="Invited by message" note="Every participant, in India and the US, asked directly." col={1} row={1} />
      <Join label="then" col={2} row={1} />
      <Step pictogram="hypothesis" kind="Conversation" note="Working through four hypotheses with 16 interviewees." col={3} row={1} />
      <Join label="then" col={4} row={1} />
      <Step pictogram="transcripts" kind="Transcript and learnings" note="Each recording became a transcript, and the learnings were sorted into themes." col={5} row={1} />
    </ol>
  );
}

/** The survey lane on its own: built, run from GitHub, charted live. */
export function SurveyChain() {
  return (
    <ol
      aria-label="The survey: built by me, run from GitHub, then charted live on a dashboard"
      className="grid list-none items-stretch p-0"
      style={{ gridTemplateColumns: CHAIN_COLUMNS }}
    >
      <Step pictogram="survey" kind="Survey I built" note="Twelve questions, three minutes, anonymous." col={1} row={1} />
      <Join label="then" col={2} row={1} />
      <Step pictogram="github" kind="Ran from GitHub" note="A page I wrote and hosted, with 38 responses." col={3} row={1} />
      <Join label="then" col={4} row={1} />
      <Step pictogram="dashboard" kind="Live dashboard" note="Each response became a chart as it arrived." col={5} row={1} />
    </ol>
  );
}

/** The whole method: both inputs, the skill that synthesised them, and the readout. */
export function MethodDiagram() {
  return (
    <ol
      aria-label="How it came together: interview transcripts and survey data fed a skill I wrote, which synthesised them into a rich HTML readout for presenting."
      className="grid list-none items-stretch gap-y-4 p-0"
      style={{ gridTemplateColumns: "1fr 5rem 1fr 4.5rem 1fr" }}
    >
      <Step pictogram="transcripts" kind="Interview transcripts" note="From the recordings of the interviews." col={1} row={1} />
      <Step pictogram="responses" kind="Survey data" note="38 responses, collected on my own page." col={1} row={2} />
      <Join label="both fed" col={2} row="1 / span 2" />
      <Step
        pictogram="skill"
        kind="A skill I defined"
        note="Written up in a SKILL.md file: split speakers, flagged what it couldn’t place, filed sessions to Confluence, sorted quotes into themes and updated the counts."
        col={3}
        row="1 / span 2"
      />
      <Join label="turned into" col={4} row="1 / span 2" />
      <Step
        pictogram="readout"
        kind="A rich HTML readout"
        note="A document I built for presenting, updated as each session came in."
        col={5}
        row="1 / span 2"
      />
    </ol>
  );
}
