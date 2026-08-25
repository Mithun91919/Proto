import type { MetricMomentSection } from "@/content/case-study-v2/types";

type MetricMomentProps = { section: MetricMomentSection };

/** One dominant outcome can own the whole section; supporting metrics stay optional and unforced. */
export function MetricMoment({ section }: MetricMomentProps) {
  const { dominant, supporting, context } = section;

  return (
    <div className="text-center">
      {dominant ? (
        <div>
          <p className="metric-value text-[clamp(3rem,8vw,6rem)] leading-none">{dominant.value}</p>
          <p className="metric-label mt-3 text-base">{dominant.label}</p>
        </div>
      ) : null}

      {supporting && supporting.length > 0 ? (
        <dl
          className={`mx-auto mt-10 grid max-w-[42rem] gap-8 text-left ${
            dominant ? "dot-rule dot-rule-soft pt-8" : ""
          }`}
          style={{ gridTemplateColumns: `repeat(${Math.min(supporting.length, 3)}, minmax(0, 1fr))` }}
        >
          {supporting.map((metric, index) => (
            <div key={`${metric.label}-${index}`}>
              <dt className="metric-value">{metric.value}</dt>
              <dd className="metric-label">{metric.label}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {context ? <p className="mx-auto mt-6 max-w-[46ch] text-sm text-[var(--muted)]">{context}</p> : null}
    </div>
  );
}
