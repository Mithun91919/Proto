import { GlassPanel } from "./primitives/GlassPanel";

const ROWS = [
  { label: "Contrast", detail: "Glass, tint, and accent text must preserve readable contrast. Do not use muted colour for essential copy." },
  { label: "State", detail: "Colour cannot be the only state cue. Pair it with fill, shape, label, or position." },
  { label: "Motion", detail: "Respect reduced motion and provide a meaningful static end state." },
  { label: "Diagrams", detail: "Every diagram needs nearby prose or a caption that explains the relationship it represents." },
];

/** B8 · Accessibility — the non-negotiable rules the rest of the system has to work inside. */
export function AccessibilityChecklist() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {ROWS.map((row) => (
        <GlassPanel key={row.label} variant="soft" className="rounded-xl p-6">
          <p className="ds-eyebrow">{row.label}</p>
          <p className="ds-note">{row.detail}</p>
        </GlassPanel>
      ))}
    </div>
  );
}
