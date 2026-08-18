import type { ReactNode } from "react";

type SectionAnchorProps = {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
  as?: "h1" | "h2";
  titleClassName?: string;
  className?: string;
};

/**
 * Sticky left-column section intro. Eyebrow + title hold while the paired
 * content column scrolls. Use inside a two-column grid on md+.
 */
export function SectionAnchor({
  eyebrow,
  title,
  lede,
  children,
  as: Tag = "h2",
  titleClassName = "",
  className = "",
}: SectionAnchorProps) {
  return (
    <div className={`md:sticky md:top-28${className ? ` ${className}` : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Tag
        className={`display-title display-section mt-4 text-[var(--ink)]${
          titleClassName ? ` ${titleClassName}` : ""
        }`}
      >
        {title}
      </Tag>
      {lede ? <p className="lede mt-6">{lede}</p> : null}
      {children}
    </div>
  );
}
