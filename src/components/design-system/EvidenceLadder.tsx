import { GlassPanel, type GlassVariant } from "./primitives/GlassPanel";

const RUNGS: { tier: string; body: string; variant: GlassVariant; color?: string }[] = [
  { tier: "Qualitative", body: "People could explain the new structure without prompting.", variant: "soft" },
  { tier: "Behavioural", body: "More sessions started from pinned or grouped entry points.", variant: "base" },
  { tier: "Outcome", body: "Time spent locating the right module decreased.", variant: "lift", color: "var(--ds-accent-deep)" },
];

/** G3 · Evidence ladder — when there's no single headline metric, stack different kinds of proof instead of pretending they're equivalent. */
export function EvidenceLadder() {
  return (
    <div className="flex max-w-[820px] flex-col gap-2.5">
      {RUNGS.map((rung) => (
        <GlassPanel key={rung.tier} variant={rung.variant} className="grid grid-cols-[140px_1fr] gap-6 rounded-xl px-[1.375rem] py-5">
          <span className="font-mono text-[0.6rem] uppercase" style={{ color: rung.color ?? "var(--muted)" }}>
            {rung.tier}
          </span>
          <span className="text-[0.95rem]" style={{ color: rung.color ?? "var(--ink-soft)" }}>
            {rung.body}
          </span>
        </GlassPanel>
      ))}
    </div>
  );
}
