// A 7×6 dot-bitmap heart — two lobes and a point, so it still reads as a
// heart at this size. Same spirit as the metric glyphs: the "dots" in the
// credit line made literal. Lit cells use currentColor to track the text.
const HEART_COLS = 7;
const HEART = [
  0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 1, 1, 1, 0,
  0, 0, 1, 1, 1, 0, 0,
  0, 0, 0, 1, 0, 0, 0,
];

function DotHeart() {
  const dot = 2;
  const gap = 1;
  return (
    <span
      role="img"
      aria-label="love"
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(${HEART_COLS}, ${dot}px)`,
        gap: `${gap}px`,
        verticalAlign: "middle",
        margin: "0 0.7ch",
      }}
    >
      {HEART.map((on, i) => (
        <span
          key={i}
          style={{
            width: dot,
            height: dot,
            borderRadius: "50%",
            background: on ? "currentColor" : "transparent",
          }}
        />
      ))}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="ds-pull mt-auto">
      <div
        className="relative mx-auto flex w-full max-w-[80rem] flex-col gap-3 px-5 py-9 text-sm md:flex-row md:items-center md:justify-between md:px-8"
        style={{ color: "var(--ds-dark-muted)" }}
      >
        <p>© {new Date().getFullYear()} Mithun Raju</p>
        <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em]">
          Built with dots<DotHeart />Claude
        </p>
      </div>
    </footer>
  );
}
