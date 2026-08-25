type FullBleedMediaAnchorProps = {
  caption: string;
  confidentialityLine?: string;
};

/**
 * S13 · Full-bleed media anchor — the S5 dark anchor block, but the ground
 * is media instead of a flat colour. Use once per case study, for the one
 * screen that carries the argument. The caption sits below on its own
 * scrim, never printed over the interface itself.
 */
export function FullBleedMediaAnchor({ caption, confidentialityLine }: FullBleedMediaAnchorProps) {
  return (
    <div className="ds-media-ground flex min-h-[460px] flex-col justify-end rounded-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: "#4e7a87" }}>
          Full-bleed product still or loop
        </span>
      </div>
      <div className="relative p-12" style={{ background: "linear-gradient(to top, rgba(6,17,21,0.95), rgba(6,17,21,0))" }}>
        <p className="display-title max-w-[32ch]" style={{ fontSize: "1.6rem", lineHeight: 1.3, color: "var(--ds-dark-ink)" }}>
          {caption}
        </p>
        {confidentialityLine ? (
          <p className="mt-3.5 font-mono text-[0.65rem]" style={{ color: "#7c99a3" }}>
            {confidentialityLine}
          </p>
        ) : null}
      </div>
    </div>
  );
}
