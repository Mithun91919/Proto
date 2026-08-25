import type { DecisionComparisonSection } from "@/content/case-study-v2/types";

type DecisionComparisonProps = { section: DecisionComparisonSection };

function Option({
  option,
  picked,
}: {
  option: { name: string; rationale: string };
  picked: boolean;
}) {
  return (
    <div className={`glass-panel glass-card p-6 ${picked ? "border-[var(--accent-deep)]" : ""}`}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="display-title display-sub text-[var(--ink)]">{option.name}</h3>
        {picked ? <span className="tag">Decision</span> : null}
      </div>
      <p className="mt-3 body-sm">{option.rationale}</p>
    </div>
  );
}

/** Two named concepts with rationale — not a generic pros/cons table. */
export function DecisionComparison({ section }: DecisionComparisonProps) {
  const { optionA, optionB, decision } = section;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      <Option option={optionA} picked={decision === "a" || decision === "hybrid"} />
      <Option option={optionB} picked={decision === "b" || decision === "hybrid"} />
    </div>
  );
}
