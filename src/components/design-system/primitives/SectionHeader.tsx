type SectionHeaderProps = {
  letter: string;
  title: string;
  subtitle?: string;
  id?: string;
};

/** The lettered top-level section header (A · Principles, B · Foundations, …). */
export function SectionHeader({ letter, title, subtitle, id }: SectionHeaderProps) {
  return (
    <div id={id} className="ds-section-rule flex items-baseline gap-5 pb-7">
      <span className="ds-eyebrow" style={{ color: "var(--ds-accent)", fontSize: "0.7rem" }}>
        {letter}
      </span>
      <h2 className="display-title" style={{ fontSize: "2.1rem", letterSpacing: "-0.03em", margin: 0 }}>
        {title}
      </h2>
      {subtitle ? <span className="ds-eyebrow ml-auto">{subtitle}</span> : null}
    </div>
  );
}

type SubLabelProps = {
  code: string;
  children?: never;
};

/** The small "B3 · Surface hierarchy" mono label that precedes almost every subsection. */
export function SubLabel({ code }: SubLabelProps) {
  return (
    <p className="ds-eyebrow" style={{ color: "var(--ds-accent)", marginBottom: "0.75rem" }}>
      {code}
    </p>
  );
}
