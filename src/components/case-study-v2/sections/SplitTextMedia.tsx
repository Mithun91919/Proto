import { SectionMedia } from "../primitives/SectionMedia";
import type { SplitTextMediaSection } from "@/content/case-study-v2/types";

type SplitTextMediaProps = { section: SplitTextMediaSection };

const RATIO_COLUMNS: Record<SplitTextMediaSection["ratio"], string> = {
  "4/8": "md:grid-cols-[4fr_8fr]",
  "5/7": "md:grid-cols-[5fr_7fr]",
  "6/6": "md:grid-cols-[6fr_6fr]",
  "7/5": "md:grid-cols-[7fr_5fr]",
};

/** Text and media side by side at one of four sanctioned ratios — media can sit on either side. */
export function SplitTextMedia({ section }: SplitTextMediaProps) {
  const { eyebrow, heading, body, media, ratio, mediaSide } = section;

  const text = (
    <div>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {heading ? (
        <h2 className="display-title display-sub mt-3 text-[var(--ink)]">{heading}</h2>
      ) : null}
      <div className="mt-5 space-y-4">
        {body.map((paragraph, index) => (
          <p key={index} className="body-text">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  const mediaBlock = <SectionMedia media={media} />;

  return (
    <div className={`grid grid-cols-1 gap-8 md:gap-12 ${RATIO_COLUMNS[ratio]}`}>
      {mediaSide === "left" ? (
        <>
          {mediaBlock}
          {text}
        </>
      ) : (
        <>
          {text}
          {mediaBlock}
        </>
      )}
    </div>
  );
}
