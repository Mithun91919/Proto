import { Fragment } from "react";
import { DotGrid } from "./primitives/DotGrid";

const STAGES = [
  { label: "Interface", demo: <DotGrid cols={3} size={7} gap={5} dots={Array(6).fill(1)} /> },
  {
    label: "Journey",
    demo: (
      <div
        className="h-[7px]"
        style={{
          backgroundImage: "radial-gradient(var(--ds-accent) 2px, transparent 2px)",
          backgroundSize: "11px 7px",
          backgroundRepeat: "repeat-x",
        }}
      />
    ),
  },
  { label: "Workflow", demo: <DotGrid cols={4} size={7} gap={5} dots={[1, 0.35, 1, 0.35]} variant="default" /> },
  { label: "System", demo: <DotGrid cols={4} size={7} gap={5} dots={Array(8).fill(1)} /> },
];

/** F6 · System bridge — zooms from a screen out to the wider service or system. Four levels is enough. */
export function SystemBridge() {
  return (
    <div className="rounded-2xl p-9" style={{ background: "color-mix(in oklab, var(--ds-solid-bg) 55%, transparent)", border: "1px solid var(--ds-glass-border)", boxShadow: "var(--ds-glass-shadow)" }}>
      <div className="grid grid-cols-7 items-center gap-3">
        {STAGES.map((stage, index) => (
          <Fragment key={stage.label}>
            <div
              className="rounded-xl p-5 text-center"
              style={{
                border: index === STAGES.length - 1 ? "1px solid color-mix(in oklab, var(--ds-accent) 30%, transparent)" : "1px solid var(--ds-solid-border)",
                background: index === STAGES.length - 1 ? "var(--color-paper-deep)" : "transparent",
              }}
            >
              <div className="mx-auto mb-3.5 w-max">{stage.demo}</div>
              <span className="font-mono text-[0.6rem] uppercase" style={{ color: index === STAGES.length - 1 ? "var(--ds-accent-deep)" : "var(--ink-soft)" }}>
                {stage.label}
              </span>
            </div>
            {index < STAGES.length - 1 ? (
              <span className="ds-arrow text-center">→</span>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
