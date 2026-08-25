import type { ReactNode } from "react";

type DotMeaningProps = {
  demo: ReactNode;
  label: string;
  note: string;
};

/** C1 · One card per entry in the dot grammar (quantity, grouping, connection, state, change). */
export function DotMeaning({ demo, label, note }: DotMeaningProps) {
  return (
    <div
      className="min-h-[142px] rounded-xl p-6"
      style={{
        background: "var(--ds-glass-soft-fill)",
        border: "1px solid var(--ds-glass-soft-border)",
      }}
    >
      <div className="mb-5">{demo}</div>
      <p className="ds-eyebrow" style={{ color: "var(--ds-accent-deep)" }}>
        {label}
      </p>
      <p className="ds-note" style={{ color: "var(--muted)" }}>
        {note}
      </p>
    </div>
  );
}
