import type { ReflectionSection as ReflectionSectionType } from "@/content/case-study-v2/types";

type ReflectionProps = { section: ReflectionSectionType };

/** The designer's point of view, not a repeat of the project summary. */
export function Reflection({ section }: ReflectionProps) {
  const { label = "Reflection", heading, body, conclusion } = section;

  return (
    <div>
      <p className="eyebrow">{label}</p>
      <h2 className="display-title display-section mt-3 max-w-[32ch] text-[var(--ink)]">{heading}</h2>
      <div className="mt-6 space-y-4">
        {body.map((paragraph, index) => (
          <p key={index} className="body-text">
            {paragraph}
          </p>
        ))}
      </div>
      <p className="display-title display-statement mt-10 max-w-[42ch] text-[var(--ink)]">{conclusion}</p>
    </div>
  );
}
