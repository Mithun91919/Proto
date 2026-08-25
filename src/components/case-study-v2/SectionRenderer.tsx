import type { ComponentType } from "react";
import { SectionShell } from "./primitives/SectionShell";
import { sectionRegistry } from "./registry";
import type { Section } from "@/content/case-study-v2/types";

type SectionRendererProps = { sections: Section[] };

/**
 * Renders a project's authored section sequence in whatever order it was
 * given — the order itself is content, never hardcoded here.
 */
export function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionRegistry[section.type] as ComponentType<{ section: Section }>;
        // Hero manages its own full-bleed/width treatment per variant. The
        // media-first sections go edge to edge too, so real product evidence
        // fills the viewport width instead of sitting in an 80rem column.
        const bleed =
          section.type === "hero" ||
          section.type === "fullWidthMedia" ||
          section.type === "mediaSequence" ||
          section.type === "productMotion";

        return (
          <SectionShell key={section.id ?? index} id={section.id} grid={section.grid} bleed={bleed}>
            <Component section={section} />
          </SectionShell>
        );
      })}
    </>
  );
}
