const STAGES = ["Abstract dots", "Structured model", "Product interface"];

/** F8 · Dot to interface transition — dots begin as the model, the interface resolves underneath. Hover to reveal. */
export function DotToInterfaceTransition() {
  return (
    <div>
      <div className="ds-dot-reveal ds-solid-media">
        <div className="grid h-full grid-cols-[150px_1fr] gap-4 p-6" style={{ minHeight: 320 }}>
          <div className="rounded-lg p-4" style={{ background: "var(--color-paper-deep)" }}>
            <div className="mb-6 h-2.5 w-3/4 rounded" style={{ background: "var(--ds-dot-muted)" }} />
            <div className="mb-3 h-2 w-5/6 rounded" style={{ background: "var(--ds-dot-quiet)" }} />
            <div className="mb-3 h-2 w-2/3 rounded" style={{ background: "var(--ds-dot-quiet)" }} />
            <div className="h-2 w-4/5 rounded" style={{ background: "var(--ds-dot-quiet)" }} />
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="grid grid-cols-3 gap-3">
              <div className="h-20 rounded-lg" style={{ background: "var(--paper)", border: "1px solid var(--ds-solid-border)" }} />
              <div className="h-20 rounded-lg" style={{ background: "var(--color-paper-deep)" }} />
              <div className="h-20 rounded-lg" style={{ background: "var(--paper)", border: "1px solid var(--ds-solid-border)" }} />
            </div>
            <div className="flex-1 rounded-lg p-[1.125rem]" style={{ background: "var(--paper)", border: "1px solid var(--ds-solid-border)" }}>
              <div className="mb-5 h-2.5 w-2/5 rounded" style={{ background: "var(--ds-dot-muted)" }} />
              <div className="mb-3 h-2 w-4/5 rounded" style={{ background: "var(--ds-dot-quiet)" }} />
              <div className="mb-3 h-2 w-3/5 rounded" style={{ background: "var(--ds-dot-quiet)" }} />
              <div className="h-2 w-3/4 rounded" style={{ background: "var(--ds-dot-quiet)" }} />
            </div>
          </div>
        </div>
        <div className="ds-dot-curtain" />
        <span className="ds-dot-curtain-label">Abstract system · hover to resolve</span>
      </div>
      <div className="mt-[1.125rem] flex flex-wrap items-center gap-2">
        {STAGES.map((stage, i) => (
          <span key={stage} className="flex items-center gap-2">
            <span className="ds-chip">{stage}</span>
            {i < STAGES.length - 1 ? <span className="ds-arrow text-sm">→</span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
