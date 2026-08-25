const ROLES = [
  { name: "Accent", color: "var(--ds-accent)", note: "Outcome, change, active idea, selected state.", dark: false },
  { name: "Accent deep", color: "var(--ds-accent-deep)", note: "Links, established structure, persistent emphasis.", dark: false },
  { name: "Muted", color: "var(--ds-dot-muted)", note: "Before-state, inactive context, supporting information.", dark: false },
  { name: "Quiet", color: "var(--ds-dot-quiet)", note: "Low emphasis, upcoming, secondary structure.", dark: false },
  { name: "Mint", color: "var(--ds-mint)", note: "Accent equivalent on dark surfaces only.", dark: true },
];

/** D1 · Colour semantics — colour is a reading cue, not a second illustration layer. */
export function ColourSemantics() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
      {ROLES.map((role) =>
        role.dark ? (
          <div key={role.name} className="rounded-xl p-5" style={{ background: "var(--ds-dark)", border: "1px solid rgba(234,243,245,.12)" }}>
            <span className="mb-4 block h-3.5 w-3.5 rounded-full" style={{ background: role.color }} />
            <p className="ds-eyebrow" style={{ color: role.color }}>
              {role.name}
            </p>
            <p className="mt-1.5 text-sm leading-6" style={{ color: "var(--ds-dark-muted)" }}>
              {role.note}
            </p>
          </div>
        ) : (
          <div key={role.name} className="ds-glass-soft rounded-xl p-5">
            <span className="mb-4 block h-3.5 w-3.5 rounded-full" style={{ background: role.color }} />
            <p className="ds-eyebrow" style={{ color: role.color }}>
              {role.name}
            </p>
            <p className="ds-note">{role.note}</p>
          </div>
        )
      )}
    </div>
  );
}
