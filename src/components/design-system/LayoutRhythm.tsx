import { GlassPanel } from "./primitives/GlassPanel";

const FACTS = [
  { value: "1180", label: "Maximum page width" },
  { value: "40 / 20", label: "Desktop / mobile gutter" },
  { value: "48–64", label: "Primary composition gap" },
];

/** B5 · Layout rhythm — a small set of widths and gaps; variation comes from composition, not new containers. */
export function LayoutRhythm() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {FACTS.map((fact) => (
        <GlassPanel key={fact.label} variant="soft" className="rounded-xl p-6">
          <p className="display-title" style={{ fontSize: "1.75rem" }}>
            {fact.value}
          </p>
          <p className="ds-eyebrow mt-2">{fact.label}</p>
        </GlassPanel>
      ))}
    </div>
  );
}
