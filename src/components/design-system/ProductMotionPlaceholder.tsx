/** F3 · Product motion — use motion only when timing or state change is part of the argument. */
export function ProductMotionPlaceholder() {
  return (
    <div
      className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: "var(--ds-dark)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(color-mix(in oklab, var(--ds-mint) 15%, transparent) 1.15px, transparent 1.15px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative text-center">
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full pl-1 text-2xl"
          style={{ border: "1px solid rgba(234,243,245,.28)", color: "var(--ds-mint)" }}
        >
          ▶
        </div>
        <p className="display-title mt-5" style={{ fontSize: "1.35rem", color: "var(--ds-dark-ink)" }}>
          A short loop demonstrates the state change.
        </p>
        <p className="ds-eyebrow mt-2.5" style={{ color: "#7c99a3" }}>
          6–12 seconds · muted · loop only when useful
        </p>
      </div>
    </div>
  );
}
