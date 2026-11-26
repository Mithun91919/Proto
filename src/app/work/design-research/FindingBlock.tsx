import type { CSSProperties } from "react";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { Reveal } from "@/components/Reveal";
import { FindingVisual } from "./FindingVisual";
import { EvidenceTabs, type EvidencePanel } from "./EvidenceTabs";
import { SurveyChart } from "./SurveyCharts";

/**
 * One finding as a single block in the page, on the light page. The claim, how
 * many raised it and what it means are always on show; the evidence behind it
 * (what we heard, the stages, the survey) sits in a switch, one panel at a time.
 */

/** A share drawn as dots that wrap, so it fits whatever the count. */
function DotRatio({ total, lit, label, note }: { total: number; lit: number; label: string; note: string }) {
  return (
    <div>
      <div
        className="ds-sh"
        role="img"
        aria-label={label}
        style={{ flexWrap: "wrap", gap: "0.9rem", maxWidth: "20rem", justifyContent: "flex-start", padding: 0 }}
      >
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`ds-dn-dot${i < lit ? " is-lit" : ""}`} style={{ "--i": i, width: "18px", height: "18px" } as CSSProperties} />
        ))}
      </div>
      <p className="mt-3 text-[0.85rem] leading-6" style={{ color: "var(--muted)" }}>
        {note}
      </p>
    </div>
  );
}

function Stages({ label, items }: { label: string; items: { name: string; note?: string }[] }) {
  return (
    <ol aria-label={label} className="grid gap-3" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map((item, i) => (
        <li key={item.name}>
          <GlassPanel variant="soft" className="h-full rounded-2xl p-5">
            <p className="ds-eyebrow">{String(i + 1).padStart(2, "0")}</p>
            <p className="display-title mt-2" style={{ fontSize: "1.1rem", lineHeight: 1.25 }}>
              {item.name}
            </p>
            {item.note ? (
              <p className="mt-2 text-[0.88rem] leading-6" style={{ color: "var(--ink-soft)" }}>
                {item.note}
              </p>
            ) : null}
          </GlassPanel>
        </li>
      ))}
    </ol>
  );
}

export type Finding = {
  id: string;
  n: string;
  /** How many of the 16 interviewees raised it. */
  raised: number;
  claim: string;
  question: string;
  /** A short plain explanation of a term the finding rests on, shown under the question. */
  term?: { name: string; meaning: string };
  heardTitle: string;
  heardPoints: string[];
  stagesTitle: string;
  stagesLabel: string;
  stages: { name: string; note?: string }[];
  surveyPoints: string[];
  means: string;
  /** One of the survey's four charts, or a plain ratio of dots when the finding rests on a single figure. */
  chart: 0 | 1 | 2 | 3 | { total: number; lit: number; label: string; note: string };
};

export function FindingBlock({ f }: { f: Finding }) {
  const panels: EvidencePanel[] = [
    {
      id: "heard",
      label: "What we heard",
      content: (
        <div className="grid items-start gap-x-14 gap-y-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <h3 className="display-title" style={{ fontSize: "1.6rem", lineHeight: 1.25 }}>
            {f.heardTitle}
          </h3>
          <div className="flex flex-col gap-3">
            {f.heardPoints.map((p) => (
              <p key={p} className="body-text" style={{ maxWidth: "none" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "stages",
      label: "The stages",
      content: (
        <div>
          <p className="eyebrow">{f.stagesTitle}</p>
          <div className="mt-4">
            <Stages label={f.stagesLabel} items={f.stages} />
          </div>
        </div>
      ),
    },
    {
      id: "survey",
      label: "The survey",
      content: (
        <div className="grid items-start gap-x-14 gap-y-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            {typeof f.chart === "number" ? (
              <SurveyChart index={f.chart} />
            ) : (
              <DotRatio total={f.chart.total} lit={f.chart.lit} label={f.chart.label} note={f.chart.note} />
            )}
          </div>
          <div className="flex flex-col gap-3">
            {f.surveyPoints.map((p) => (
              <p key={p} className="body-text" style={{ maxWidth: "none" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id={f.id} className="ds-section-boundary mt-20 scroll-mt-28 pt-16 md:mt-24">
      <Reveal>
        <div className="grid items-start gap-x-14 gap-y-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">{`Finding ${f.n} · ${f.raised} of 16 interviewees`}</p>
            <h2 className="display-title mt-3 text-[var(--ink)]" style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)", lineHeight: 1.1 }}>
              {f.claim}
            </h2>
            <p className="mt-4 max-w-[56ch] text-[0.98rem] leading-7" style={{ color: "var(--ink-soft)" }}>
              Asked in every interview: {f.question}
            </p>
            {f.term ? (
              <p className="mt-4 max-w-[56ch] border-l-2 pl-4 text-[0.92rem] leading-6" style={{ color: "var(--ink-soft)", borderColor: "var(--ds-accent)" }}>
                <strong className="font-medium" style={{ color: "var(--ink)" }}>{f.term.name}</strong> {f.term.meaning}
              </p>
            ) : null}
          </div>
          <FindingVisual id={f.id} />
        </div>
      </Reveal>

      <Reveal delay={80}>
        <GlassPanel variant="soft" className="mt-10 rounded-2xl p-7" style={{ borderLeft: "3px solid var(--ds-accent)" }}>
          <p className="eyebrow">What it means</p>
          <p className="display-title mt-3" style={{ fontSize: "1.6rem", lineHeight: 1.3 }}>
            {f.means}
          </p>
        </GlassPanel>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10">
          <EvidenceTabs label="The evidence" panels={panels} />
        </div>
      </Reveal>
    </section>
  );
}
