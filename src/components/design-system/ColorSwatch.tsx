type ColorSwatchProps = {
  name: string;
  hex: string;
};

/** B1 · Colour swatch row. */
export function ColorSwatch({ name, hex }: ColorSwatchProps) {
  return (
    <div className="ds-rule grid grid-cols-[44px_1fr_110px] items-center gap-4 py-3">
      <span
        className="block h-7 w-11 rounded-sm border"
        style={{ background: hex, borderColor: "var(--ds-solid-border)" }}
      />
      <span className="text-sm">{name}</span>
      <span className="font-mono text-[0.68rem]" style={{ color: "var(--muted)" }}>
        {hex}
      </span>
    </div>
  );
}
