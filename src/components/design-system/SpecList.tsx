type SpecListProps = { facts: { label: string; value: string }[] };

/** S8 · Spec list — a compact label/value list for facts that don't need a card. */
export function SpecList({ facts }: SpecListProps) {
  return (
    <dl className="max-w-[480px]">
      {facts.map((f, index) => (
        <div key={f.label} className={`grid grid-cols-[110px_1fr] items-baseline gap-6 py-[1.125rem] ${index > 0 ? "ds-rule" : ""}`}>
          <dt className="ds-eyebrow">{f.label}</dt>
          <dd className="text-base leading-6" style={{ margin: 0 }}>
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
