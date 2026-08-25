import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type GlassVariant = "soft" | "base" | "lift" | "solid";

type GlassPanelProps = HTMLAttributes<HTMLElement> & {
  variant?: GlassVariant;
  as?: ElementType;
  hoverLift?: boolean;
  children: ReactNode;
};

const VARIANT_CLASS: Record<GlassVariant, string> = {
  soft: "ds-glass-soft",
  base: "ds-glass",
  lift: "ds-glass-lift",
  solid: "ds-solid-media",
};

/**
 * The one surface primitive behind every card in this system. Per the
 * guide's B3 rule: soft for supporting context, base for evidence and
 * comparison, lift for interactive/featured content, solid for
 * reconstructed interfaces and reading-heavy content where glass would
 * reduce contrast without adding meaning. Never nest one glass tier
 * inside another — `.ds-glass*` CSS already flattens that case to solid
 * automatically, but prefer `solid` explicitly when you know content will
 * sit inside another glass surface.
 */
export function GlassPanel({
  variant = "base",
  as: Tag = "div",
  hoverLift = false,
  className,
  children,
  ...rest
}: GlassPanelProps) {
  return (
    <Tag
      className={`${VARIANT_CLASS[variant]}${hoverLift ? " ds-hover-lift" : ""}${
        className ? ` ${className}` : ""
      }`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
