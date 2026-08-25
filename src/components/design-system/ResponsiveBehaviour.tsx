const ROWS = [
  { label: "Sticky narrative", detail: "Stacks into title then body. No sticky behaviour below 820px." },
  { label: "Alternating rows", detail: "Always become text then media, regardless of the desktop left/right order." },
  { label: "Proof strips", detail: "Stack vertically and keep the metric label attached to its number." },
  { label: "Dot diagrams", detail: "Simplify the relationship or stack nodes. Never shrink labels below the mono token." },
  { label: "Fingerprints + reveals", detail: "Show the resolved fingerprint by default on touch layouts. Dot-to-interface transitions become a static split or the final interface state." },
  { label: "Media sequences", detail: "Four-up becomes two-up, then one-up. Preserve frame numbering." },
];

/** B5b · Responsive behaviour — mobile is a change in reading order, not a scaled desktop. */
export function ResponsiveBehaviour() {
  return (
    <div className="flex flex-col">
      {ROWS.map((row, index) => (
        <div
          key={row.label}
          className={`grid grid-cols-1 gap-3 py-5 sm:grid-cols-[180px_1fr] sm:gap-8 ${index > 0 ? "ds-rule" : ""}`}
        >
          <p className="ds-eyebrow">{row.label}</p>
          <p className="text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
            {row.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
