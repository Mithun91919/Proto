import type { ReactNode } from "react";

type SpecListProps = {
  facts: { label: string; value: ReactNode }[];
  /**
   * Puts the value on the left and the label on the right, for a list where
   * the thing is read first and its date or tag second, such as qualifications
   * with their years. The markup keeps label-then-value for assistive tech.
   */
  valueFirst?: boolean;
  /** Sets the label in the accent colour, so it reads as a tag and not as grey metadata. */
  accentLabel?: boolean;
};

/** S8 · Spec list — a compact label/value list for facts that don't need a card. */
export function SpecList({
  facts,
  valueFirst = false,
  accentLabel = false,
}: SpecListProps) {
  return (
    <dl className="max-w-[480px]">
      {facts.map((f, index) => (
        <div
          key={f.label}
          className={`grid items-baseline gap-6 py-[1.125rem] ${valueFirst ? "grid-cols-[1fr_110px]" : "grid-cols-[110px_1fr]"} ${index > 0 ? "ds-rule" : ""}`}
        >
          <dt
            className={`ds-eyebrow ${valueFirst ? "order-2 text-right" : ""}`}
            style={accentLabel ? { color: "var(--ds-accent-deep)" } : undefined}
          >
            {f.label}
          </dt>
          <dd
            className={`text-base leading-6 ${valueFirst ? "order-1" : ""}`}
            style={{ margin: 0 }}
          >
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
