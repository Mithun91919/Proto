import type { ReactNode } from "react";

type SectionAnchorProps = {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
  as?: "h1" | "h2";
  titleClassName?: string;
  /**
   * One measure for the whole block — title, lede and children together.
   * Prefer it over `titleClassName` for width: a `ch` cap on the title and
   * the lede's own `ch` cap are measured against different font sizes, so
   * the two never line up. Set in rem and both agree.
   */
  measure?: string;
  className?: string;
  /** Set on a `.ds-env-dark` background — swaps the hardcoded light-mode
      ink tokens for the dark-safe equivalents used elsewhere in the v6
      dark sections (`ChapterTransition`, `ClosingCTA`). */
  dark?: boolean;
  /** The sticky-while-scrolling behaviour only makes sense beside a
      sibling much taller than this column. Inside a short, fixed-height
      card (no internal scroll) `top-28`'s offset just pushes the content
      past the card's own bottom edge, where `.ds-env-dark`'s
      `overflow: hidden` silently clips it — set `false` there. */
  sticky?: boolean;
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
  measure = "",
  className = "",
  dark = false,
  sticky = true,
}: SectionAnchorProps) {
  return (
    <div
      className={`${sticky ? "md:sticky md:top-28" : ""}${measure ? ` ${measure}` : ""}${
        className ? ` ${className}` : ""
      }`}
    >
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
        <p
          className="lede mt-6"
          /* `.lede` caps itself at 38ch from globals.css, which beats a
             Tailwind `max-w-none` on source order. Inline wins outright,
             and only when the block is carrying its own measure. */
          style={{
            ...(dark ? { color: "var(--ds-dark-muted)" } : null),
            ...(measure ? { maxWidth: "none" } : null),
          }}
        >
          {lede}
        </p>
      ) : null}
      {children}
    </div>
  );
}
