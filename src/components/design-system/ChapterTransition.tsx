type ChapterTransitionProps = {
  chapterLabel: string;
  heading: string;
  body: string;
};

/** H1 · Chapter transition — use between major acts, not every section. One or two per case study. */
export function ChapterTransition({ chapterLabel, heading, body }: ChapterTransitionProps) {
  return (
    <div className="ds-env-dark rounded-sm p-12">
      <p className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>
        {chapterLabel}
      </p>
      <h3 className="display-title mt-5 max-w-[19ch]" style={{ fontSize: "2rem", lineHeight: 1.1 }}>
        {heading}
      </h3>
      <p className="mt-5 max-w-[54ch] text-base leading-7" style={{ color: "var(--ds-dark-muted)" }}>
        {body}
      </p>
    </div>
  );
}
