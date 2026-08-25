import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import type { GridDensity } from "@/content/case-study-v2/types";

const GRID_OPACITY: Record<GridDensity, number> = {
  visible: 1,
  subtle: 0.45,
  hidden: 0,
};

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  grid?: GridDensity;
  className?: string;
  /** Sections that are their own full-bleed composition skip the shell's padding. */
  bleed?: boolean;
};

/**
 * Wraps every registered section with the shared width/rhythm/grid-density
 * treatment so individual section components only worry about their own
 * content, not page-level spacing.
 */
export function SectionShell({
  children,
  id,
  grid = "subtle",
  className,
  bleed = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`cs-section${bleed ? "" : " mx-auto w-full max-w-[80rem] px-5 md:px-8"} py-14 md:py-20${
        className ? ` ${className}` : ""
      }`}
      style={{ "--section-grid-opacity": GRID_OPACITY[grid] } as CSSProperties}
    >
      <Reveal>{children}</Reveal>
    </section>
  );
}
