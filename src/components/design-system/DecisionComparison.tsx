type DecisionOption = { title: string; body: string; content?: React.ReactNode };

type DecisionComparisonProps = {
  explored: DecisionOption;
  chosen: DecisionOption;
};

const exploredBlock = (
  <div className="mt-5 grid grid-cols-[80px_1fr] gap-3" style={{ height: 126 }}>
    <span className="block rounded-lg" style={{ background: "var(--color-surface-2)" }} />
    <div className="flex flex-col gap-2.5">
      <span className="block h-6 rounded-md" style={{ background: "var(--color-surface-2)" }} />
      <span className="block flex-1 rounded-lg" style={{ background: "var(--color-surface-2)" }} />
    </div>
  </div>
);

const chosenBlock = (
  <div className="mt-5 grid grid-cols-3 gap-2">
    <span className="block h-[126px] rounded-lg" style={{ background: "color-mix(in oklab, var(--ds-accent) 20%, var(--color-surface-2))" }} />
    <span className="block h-[126px] rounded-lg" style={{ background: "var(--color-surface-2)" }} />
    <span className="block h-[126px] rounded-lg" style={{ background: "var(--color-surface-2)" }} />
  </div>
);

/** F5 · Decision comparison — the chosen direction gets the stronger outline; the rejected option is still described fairly. */
export function DecisionComparison({ explored, chosen }: DecisionComparisonProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="rounded-2xl p-7" style={{ border: "1px solid var(--ds-solid-border)", background: "color-mix(in oklab, var(--ds-solid-bg) 50%, transparent)" }}>
        <p className="ds-eyebrow">Explored · A</p>
        <h4 className="display-title mt-3.5" style={{ fontSize: "1.35rem" }}>
          {explored.title}
        </h4>
        {explored.content ?? exploredBlock}
        <p className="mt-4 text-sm leading-6" style={{ color: "var(--muted)" }}>
          {explored.body}
        </p>
      </div>
      <div
        className="rounded-2xl p-7"
        style={{
          border: "1px solid color-mix(in oklab, var(--ds-accent) 52%, transparent)",
          boxShadow: "0 14px 34px color-mix(in oklab, var(--ds-accent) 10%, transparent)",
          background: "var(--ds-solid-bg)",
        }}
      >
        <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
          Chosen · B
        </p>
        <h4 className="display-title mt-3.5" style={{ fontSize: "1.35rem" }}>
          {chosen.title}
        </h4>
        {chosen.content ?? chosenBlock}
        <p className="mt-4 text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
          <strong className="font-medium" style={{ color: "var(--ds-accent-deep)" }}>
            Why:
          </strong>{" "}
          {chosen.body}
        </p>
      </div>
    </div>
  );
}
