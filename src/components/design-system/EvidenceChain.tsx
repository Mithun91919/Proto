import { GlassPanel } from "./primitives/GlassPanel";

type EvidenceChainProps = {
  scale: { value: string; label: string };
  intervention: { title: string; body: string };
  outcome: { value: string; label: string };
};

/** G1 · Scale to outcome — a metric only makes sense once the structural change that produced it is visible. */
export function EvidenceChain({ scale, intervention, outcome }: EvidenceChainProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
      <GlassPanel className="rounded-2xl p-7">
        <p className="display-title" style={{ fontSize: "1.9rem", color: "var(--ds-accent-deep)" }}>
          {scale.value}
        </p>
        <p className="ds-eyebrow mt-2">{scale.label}</p>
      </GlassPanel>
      <span className="ds-arrow text-center">→</span>
      <GlassPanel variant="soft" className="rounded-2xl p-7">
        <p className="display-title" style={{ fontSize: "1.2rem" }}>
          {intervention.title}
        </p>
        <p className="mt-2.5 text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
          {intervention.body}
        </p>
      </GlassPanel>
      <span className="ds-arrow text-center">→</span>
      <div className="ds-env-dark rounded-xl p-7">
        <p className="display-title" style={{ fontSize: "1.9rem", color: "var(--ds-mint)" }}>
          {outcome.value}
        </p>
        <p className="ds-eyebrow mt-2" style={{ color: "var(--ds-dark-muted)" }}>
          {outcome.label}
        </p>
      </div>
    </div>
  );
}
