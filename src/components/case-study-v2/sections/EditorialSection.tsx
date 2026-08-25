import type { EditorialSection as EditorialSectionType } from "@/content/case-study-v2/types";

type EditorialSectionProps = { section: EditorialSectionType };

/** Pure narrative text: the site's standing ~68ch reading width, nothing else. */
export function EditorialSection({ section }: EditorialSectionProps) {
  const { eyebrow, heading, body, statement, annotation } = section;

  return (
    <div>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {heading ? (
        <h2 className="display-title display-section mt-3 max-w-[32ch] text-[var(--ink)]">
          {heading}
        </h2>
      ) : null}
      <div className="mt-6 space-y-5">
        {body.map((paragraph, index) => (
          <p key={index} className="body-text">
            {paragraph}
          </p>
        ))}
      </div>
      {statement ? (
        <p className="display-title display-statement mt-10 max-w-[46ch] text-[var(--ink)]">
          {statement}
        </p>
      ) : null}
      {annotation ? <p className="mt-6 text-sm text-[var(--muted)]">{annotation}</p> : null}
    </div>
  );
}
