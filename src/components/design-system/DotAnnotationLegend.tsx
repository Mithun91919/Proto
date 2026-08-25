import type { ReactNode } from "react";

type LegendEntry = { marker: "decision" | "control" | "system"; label: string; note: string };

const MARKER: Record<LegendEntry["marker"], ReactNode> = {
  decision: <span className="ds-marker-fill mt-0.5" />,
  control: <span className="ds-marker-ring mt-0.5" />,
  system: (
    <span className="ds-marker-system mt-0.5">
      <span />
      <span />
      <span />
    </span>
  ),
};

const ENTRIES: LegendEntry[] = [
  { marker: "decision", label: "Primary decision", note: "A deliberate design choice that changed the experience." },
  { marker: "control", label: "User control", note: "An action, choice, or place where the user stays in control." },
  { marker: "system", label: "System behaviour", note: "Something the platform does, infers, connects, or updates behind the interface." },
];

/** F7 · Dot annotation language — three marker types replace generic numbered pins. */
export function DotAnnotationLegend() {
  return (
    <div className="flex flex-col">
      {ENTRIES.map((entry, index) => (
        <div key={entry.label} className={`grid grid-cols-[40px_1fr] gap-3.5 ${index > 0 ? "ds-rule py-5" : "pb-5"}`}>
          {MARKER[entry.marker]}
          <div>
            <p className="ds-eyebrow" style={{ color: "var(--ds-accent-deep)" }}>
              {entry.label}
            </p>
            <p className="ds-note">{entry.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
