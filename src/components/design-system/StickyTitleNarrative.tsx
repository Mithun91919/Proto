type StickyTitleNarrativeProps = {
  title: string;
  paragraphs: string[];
};

/** S4 · Sticky-title narrative — the chapter title holds the left column; on long chapters it sticks while the body scrolls past. */
export function StickyTitleNarrative({ title, paragraphs }: StickyTitleNarrativeProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
      <h3 className="display-title max-w-[16ch] md:sticky md:top-24" style={{ fontSize: "1.9rem", lineHeight: 1.16 }}>
        {title}
      </h3>
      <div className="flex flex-col gap-[1.125rem]">
        {paragraphs.map((p, i) => (
          <p key={i} className="max-w-[62ch] text-lg leading-8" style={{ color: "var(--ink-soft)" }}>
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
