import type { EditorialStatementSection } from "@/content/case-study-v2/types";

type EditorialStatementProps = { section: EditorialStatementSection };

/** A large text-led pause that breaks the rhythm of UI-heavy pages — an insight, reframe, or principle. */
export function EditorialStatement({ section }: EditorialStatementProps) {
  const { statement, attribution } = section;

  return (
    <div className="py-6 text-center md:py-10">
      <p className="display-title display-statement mx-auto max-w-[38ch] text-[var(--ink)]">{statement}</p>
      {attribution ? <p className="mt-6 text-sm text-[var(--muted)]">{attribution}</p> : null}
    </div>
  );
}
