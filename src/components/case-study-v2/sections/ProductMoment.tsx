import { SectionMedia } from "../primitives/SectionMedia";
import type { ProductMomentSection } from "@/content/case-study-v2/types";

type ProductMomentProps = { section: ProductMomentSection };

/**
 * One interaction that matters to the story — heading, a paragraph or two,
 * and a large view of the UI. Deliberately not a card: this is a moment in
 * the narrative, not a feature-grid tile.
 */
export function ProductMoment({ section }: ProductMomentProps) {
  const { heading, body, media } = section;

  return (
    <div>
      <h2 className="display-title display-sub max-w-[36ch] text-[var(--ink)]">{heading}</h2>
      <div className="mt-4 max-w-[60ch] space-y-4">
        {body.map((paragraph, index) => (
          <p key={index} className="body-text">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <SectionMedia media={media} />
      </div>
    </div>
  );
}
