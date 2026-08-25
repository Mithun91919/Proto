import type { ReactNode } from "react";

type MediaPairSide = {
  label: string;
  caption: string;
  content?: ReactNode;
  tone?: "muted" | "accent";
};

type MediaPairProps = {
  a: MediaPairSide;
  b: MediaPairSide;
};

const placeholderBlock = (tone: "muted" | "accent" = "muted") => (
  <div className="grid h-full grid-cols-[80px_1fr] gap-3">
    <div className="rounded-lg" style={{ background: "var(--color-surface-2)" }} />
    <div className="flex flex-col gap-2.5">
      <span className="block h-6 rounded-md" style={{ background: "var(--color-surface-2)" }} />
      <span
        className="block h-14 rounded-lg"
        style={{ background: tone === "accent" ? "color-mix(in oklab, var(--ds-accent) 20%, var(--color-surface-2))" : "color-mix(in oklab, var(--ds-accent) 6%, var(--color-surface-2))" }}
      />
      <span className="block h-14 rounded-lg" style={{ background: "color-mix(in oklab, var(--ds-accent) 6%, var(--color-surface-2))" }} />
    </div>
  </div>
);

/** F1 · Media pair — use when the value is in the comparison, not the individual shots. */
export function MediaPair({ a, b }: MediaPairProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[a, b].map((side) => (
        <div key={side.label}>
          <div className="ds-frame">
            <div className="ds-framebar">
              <span className="font-mono text-[0.6rem]" style={{ color: side.tone === "accent" ? "var(--ds-accent-deep)" : "var(--muted)" }}>
                {side.label}
              </span>
            </div>
            <div className="ds-framebody p-6">{side.content ?? placeholderBlock(side.tone)}</div>
          </div>
          <p className="mt-2.5 font-mono text-[0.6rem]" style={{ color: side.tone === "accent" ? "var(--ds-accent-deep)" : "var(--muted)" }}>
            {side.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
