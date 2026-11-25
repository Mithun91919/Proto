"use client";

import { useId, useState, type ReactNode } from "react";
import { DockSwitch } from "@/components/design-system/DockSwitch";
import { InterviewChain, MethodDiagram, SurveyChain } from "./MethodDiagram";

/**
 * The method, one part at a time: the interviews, the survey, then the two
 * together. A switch rather than a stack, so each can be read on its own and the
 * page does not tell the same thing three times.
 */

type Tab = { id: string; label: string; diagram: ReactNode; text: string[] };

const TABS: Tab[] = [
  {
    id: "interviews",
    label: "Interviews",
    diagram: <InterviewChain />,
    text: [
      "I messaged every interviewee myself, across India and the US, and interviewed 16 people, with a staff designer helping.",
      "Each interview worked through four questions. Every question started from a hypothesis, with prompts beneath it, and once the sessions were done I marked each hypothesis as confirmed or reframed, so the study could be wrong in public.",
    ],
  },
  {
    id: "survey",
    label: "Survey",
    diagram: <SurveyChain />,
    text: [
      "I built the survey myself: twelve multiple-choice questions, about three minutes, answered anonymously by designers in India and the US.",
      "It ran as a page I wrote and hosted on GitHub, and a dashboard I built turned each response into charts as it arrived, so I could watch the picture form. 38 designers answered.",
    ],
  },
  {
    id: "together",
    label: "Together",
    diagram: <MethodDiagram />,
    text: [
      "The interview transcripts and the survey data came in separately, and I kept them that way until the end. A skill I defined in a SKILL.md file split each transcript by speaker, flagged anything it couldn’t place, filed the session to Confluence, sorted quotes into themes and updated the counts. What it produced fed a rich HTML readout I built for presenting, so the numbers and quotes I showed were current.",
      "I made the parts the study needed: a hypothesis-led interview guide, a survey with its own dashboard, a skill for the synthesis, and a readout I refreshed as each session’s data came in.",
    ],
  },
];

export function MethodTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const tab = TABS[active];

  return (
    <div>
      <div className="flex items-center justify-between gap-6">
        <p className="eyebrow">The method, one part at a time</p>
        <DockSwitch
          tabs={TABS}
          active={active}
          onChange={setActive}
          label="Which part of the method"
          baseId={baseId}
          panelId={panelId}
        />
      </div>
      <div role="tabpanel" id={panelId} aria-labelledby={`${baseId}-tab-${active}`} className="mt-8">
        {tab.diagram}
        <div className="mt-8 grid gap-x-16 md:grid-cols-2">
          {tab.text.map((paragraph) => (
            <p key={paragraph} className="body-text mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
