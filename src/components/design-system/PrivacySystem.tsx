export const CONFIDENTIALITY_LINE =
  "Visuals, names, and selected figures are reconstructed or generalised where needed to protect confidential information while preserving the original design problem, decisions, and interaction model.";

/** F9 · Privacy as a visual system — confidentiality feels designed, not apologetic. */
export function PrivacySystem() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1.25fr_0.75fr]">
      <div
        className="relative overflow-hidden rounded-2xl p-6"
        style={{ minHeight: 300, background: "var(--ds-solid-bg)", border: "1px solid var(--ds-solid-border)" }}
      >
        <div className="flex items-center justify-between">
          <span className="ds-privacy-label">Representative interface</span>
          <span className="font-mono text-[0.55rem]" style={{ color: "var(--muted)" }}>
            INTERNAL DATA REMOVED
          </span>
        </div>
        <div className="mt-6 grid grid-cols-[120px_1fr] gap-4">
          <div className="ds-redact-dots" style={{ minHeight: 210, opacity: 0.55 }} />
          <div className="flex flex-col gap-3">
            <span className="block h-7 rounded-md" style={{ width: "55%", background: "#d7e8eb" }} />
            <span className="block h-16 rounded-lg" style={{ background: "#eff6f7" }} />
            <div className="grid grid-cols-2 gap-3">
              <span className="block h-[92px] rounded-lg" style={{ background: "#e6f2f4" }} />
              <span className="ds-redact-dots block h-[92px]" style={{ opacity: 0.42 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="ds-glass-soft rounded-2xl p-7">
        <p className="ds-eyebrow">Use consistently</p>
        <ul className="mt-4 list-disc pl-[1.125rem] text-sm leading-7" style={{ color: "var(--ink-soft)" }}>
          <li>Representative names and values</li>
          <li>Dot matrix for redacted detail</li>
          <li>One fixed confidentiality sentence</li>
          <li>No screenshots where reconstruction is safer</li>
        </ul>
        <p className="mt-5 font-mono text-[0.6rem] leading-6" style={{ color: "var(--ds-accent-deep)" }}>
          {CONFIDENTIALITY_LINE}
        </p>
      </div>
    </div>
  );
}
