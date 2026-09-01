import type { ReactNode } from "react";

type SectionAnchorProps = {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
  as?: "h1" | "h2";
  titleClassName?: string;
  className?: string;
  /** Set on a `.ds-env-dark` background — swaps the hardcoded light-mode
      ink tokens for the dark-safe equivalents used elsewhere in the v6
      dark sections (`ChapterTransition`, `ClosingCTA`). */
  dark?: boolean;
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
  dark = false,
}: SectionAnchorProps) {
  return (
    <div className={`md:sticky md:top-28${className ? ` ${className}` : ""}`}>
      <p className="eyebrow" style={dark ? { color: "var(--ds-mint)" } : undefined}>
        {eyebrow}
      </p>
      <Tag
        className={`display-title display-section mt-4${dark ? "" : " text-[var(--ink)]"}${
          titleClassName ? ` ${titleClassName}` : ""
        }`}
      >
        {title}
      </Tag>
      {lede ? (
        <p className="lede mt-6" style={dark ? { color: "var(--ds-dark-muted)" } : undefined}>
          {lede}
        </p>
      ) : null}
      {children}
    </div>
  );
}
