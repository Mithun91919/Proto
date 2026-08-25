import type { ScaleStripSection } from "@/content/case-study-v2/types";

type ScaleStripProps = { section: ScaleStripSection };

function Row({ label, metrics }: { label: string; metrics: { value: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-4">
        {metrics.map((metric, index) => (
          <div key={`${metric.label}-${index}`}>
            <dt className="metric-line">{metric.value}</dt>
            <dd className="mt-1 text-sm text-[var(--muted)]">{metric.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Keeps scale figures (users, markets, modules) visually separate from attributed outcomes. */
export function ScaleStrip({ section }: ScaleStripProps) {
  const { scale, outcomes } = section;

  return (
    <div className="space-y-8">
      <Row label="Scale" metrics={scale} />
      <div className="dot-rule dot-rule-soft pt-8">
        <Row label="Outcomes" metrics={outcomes} />
      </div>
    </div>
  );
}
