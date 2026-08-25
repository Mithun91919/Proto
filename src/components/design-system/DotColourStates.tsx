import { GlassPanel } from "./primitives/GlassPanel";
import { DotGrid } from "./primitives/DotGrid";

/** C7 · Dot colour states — colour shows state change, not a palette. Earlier/inactive is muted; resolved/active becomes accent. */
export function DotColourStates() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
      <GlassPanel variant="soft" className="rounded-2xl p-[1.625rem]">
        <p className="ds-eyebrow" style={{ color: "var(--muted)" }}>
          Before
        </p>
        <DotGrid cols={5} size={7} gap={5} dots={Array(5).fill(1)} variant="muted" className="mt-[1.125rem]" />
      </GlassPanel>
      <span className="ds-arrow text-center">→</span>
      <GlassPanel variant="soft" className="rounded-2xl p-[1.625rem]">
        <p className="ds-eyebrow">Transition</p>
        <DotGrid cols={5} size={7} gap={5} dots={[1, 1, 0.15, 0.15, 0.15]} className="mt-[1.125rem]" />
      </GlassPanel>
      <span className="ds-arrow text-center">→</span>
      <GlassPanel className="rounded-2xl p-[1.625rem]">
        <p className="ds-eyebrow">Resolved</p>
        <DotGrid cols={5} size={7} gap={5} dots={Array(5).fill(1)} className="mt-[1.125rem]" />
      </GlassPanel>
    </div>
  );
}
