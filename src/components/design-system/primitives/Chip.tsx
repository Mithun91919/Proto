import type { CSSProperties, ElementType, ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  /** `span` by default; pass `li` inside a list. */
  as?: ElementType;
  /** Positioning and layout only — the surface is the component's job. */
  className?: string;
  /**
   * `lead` is the slightly larger chip a card uses once, for its number and
   * name. Everything else is `meta`.
   */
  size?: "lead" | "meta";
  style?: CSSProperties;
};

/**
 * A small label: a card's number, its tags, its years, a project's facets.
 * Used over product media on the home cards and on the page ground in the
 * work index, so it has to hold up on both.
 *
 * Solid, not glass, and the design system says why twice. Glass "groups
 * supporting content and interaction", but "product interfaces and
 * reading-heavy surfaces stay solid" (A · Principles), and a chip sitting on
 * a screen recording of a product interface is exactly that case. These also
 * sit inside a `GlassPanel` card, so a glass chip would be glass inside
 * glass — the first entry in L · Anti-patterns.
 *
 * The outline is the part that earns its keep. Measured across the posters,
 * the artwork under these chips runs Y=157-211 of 255: light product UI. A
 * white fill on a near-white screenshot loses its edge entirely, so the
 * border is a neutral `--chip-border` rather than one of the cyan-tinted
 * line tokens, which read as a tint against that backdrop instead of an
 * edge.
 */
export function Chip({
  children,
  as: Tag = "span",
  className = "",
  size = "meta",
  style,
}: ChipProps) {
  const type = size === "lead" ? "text-[0.65rem] tracking-[0.14em]" : "text-[0.62rem] tracking-[0.12em]";

  return (
    <Tag
      className={`rounded-full px-3 py-1 font-mono uppercase ${type}${className ? ` ${className}` : ""}`}
      style={{
        background: "var(--ds-solid-bg)",
        color: "var(--ink)",
        border: "1px solid var(--chip-border)",
        boxShadow: "var(--ds-glass-soft-shadow)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
