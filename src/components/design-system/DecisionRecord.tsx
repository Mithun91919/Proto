import { GlassPanel } from "./primitives/GlassPanel";

type DecisionRecordProps = {
  optionA: { title: string; body: string };
  chosen: { title: string; body: string };
};

/** E3 · Decision record — shows judgment instead of a wall of explorations. */
export function DecisionRecord({ optionA, chosen }: DecisionRecordProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <GlassPanel variant="soft" className="rounded-2xl p-7">
        <p className="ds-eyebrow">Option A</p>
        <h4 className="display-title mt-3" style={{ fontSize: "1.3rem" }}>
          {optionA.title}
        </h4>
        <p className="ds-note">{optionA.body}</p>
      </GlassPanel>
      <GlassPanel className="rounded-2xl p-7" style={{ borderColor: "color-mix(in oklab, var(--ds-accent) 28%, transparent)" }}>
        <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.09em]" style={{ color: "var(--ds-accent-deep)" }}>
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--ds-accent)", boxShadow: "0 0 0 4px color-mix(in oklab, var(--ds-accent) 10%, transparent)" }}
          />
          Chosen
        </span>
        <h4 className="display-title mt-3" style={{ fontSize: "1.3rem" }}>
          {chosen.title}
        </h4>
        <p className="ds-note">{chosen.body}</p>
      </GlassPanel>
    </div>
  );
}
