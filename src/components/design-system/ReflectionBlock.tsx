import { GlassPanel } from "./primitives/GlassPanel";

type ReflectionBlockProps = {
  statement: string;
  whatHeld: string;
  unresolved: string;
};

/** E4 · Reflection — one statement plus two grounded observations, not a summary. */
export function ReflectionBlock({ statement, whatHeld, unresolved }: ReflectionBlockProps) {
  return (
    <GlassPanel variant="soft" className="rounded-2xl p-9">
      <p className="display-title max-w-[31ch]" style={{ fontSize: "1.75rem", lineHeight: 1.3 }}>
        {statement}
      </p>
      <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <p className="ds-eyebrow">What held</p>
          <p className="ds-note">{whatHeld}</p>
        </div>
        <div>
          <p className="ds-eyebrow" style={{ color: "var(--muted)" }}>
            Still unresolved
          </p>
          <p className="ds-note">{unresolved}</p>
        </div>
      </div>
    </GlassPanel>
  );
}
