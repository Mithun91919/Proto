import type { ReactNode } from "react";

export type SequenceStep = { label: string; content?: ReactNode };

type MobileSequenceProps = {
  /** 3–5 steps — each frame gets one job and one caption. */
  steps: SequenceStep[];
};

const placeholder = (index: number) => {
  const blocks = [
    <>
      <div key="a" className="h-5 rounded-md" style={{ width: "55%", background: "color-mix(in oklab, var(--ds-accent) 25%, var(--color-surface-2))" }} />
      <div className="mt-4 h-20 rounded-lg" style={{ background: "var(--ds-solid-bg)" }} />
      <div className="mt-2.5 h-11 rounded-lg" style={{ background: "var(--ds-solid-bg)" }} />
    </>,
    <div key="b" className="grid grid-cols-2 gap-2">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="block h-[72px] rounded-lg" style={{ background: "var(--ds-solid-bg)" }} />
      ))}
    </div>,
    <>
      <div key="c" className="h-24 rounded-lg" style={{ background: "color-mix(in oklab, var(--ds-accent) 20%, var(--color-surface-2))" }} />
      <div className="mt-3.5 h-3 rounded" style={{ width: "80%", background: "color-mix(in oklab, var(--ds-accent) 25%, var(--color-surface-2))" }} />
      <div className="mt-1.5 h-3 rounded" style={{ width: "60%", background: "var(--color-surface-2)" }} />
      <div className="mt-6 h-10 rounded-lg" style={{ background: "var(--ds-accent)" }} />
    </>,
    <div key="d" className="flex flex-col items-center">
      <span className="mt-7 block h-11 w-11 rounded-full" style={{ background: "var(--ds-accent)" }} />
      <span className="mt-4 h-3 rounded" style={{ width: "70%", background: "color-mix(in oklab, var(--ds-accent) 25%, var(--color-surface-2))" }} />
    </div>,
  ];
  return blocks[index % blocks.length];
};

/** F2 · Mobile sequence — three to five frames show a task without a screen dump. */
export function MobileSequence({ steps }: MobileSequenceProps) {
  return (
    <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step.label}>
          <div className="ds-phone">
            <div className="ds-phone-screen">{step.content ?? placeholder(index)}</div>
          </div>
          <p className="mt-2.5 font-mono text-[0.58rem]" style={{ color: "var(--ink-soft)" }}>
            {String(index + 1).padStart(2, "0")} · {step.label}
          </p>
        </div>
      ))}
    </div>
  );
}
