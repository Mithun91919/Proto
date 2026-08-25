import type { CaseStudyV2 } from "../types";

/**
 * Demonstrates a COMPACT composition (~4 sections, 2–3 media moments) —
 * visually led, no deep dive, doesn't try to imitate a flagship structure.
 * Illustrative only, no real content.
 */
export const compactPlaceholder: CaseStudyV2 = {
  slug: "example-compact",
  depth: "compact",
  projectLabel: "Example Localization Project",
  headline: "[Placeholder] A short earlier-work story.",
  summary: "[Placeholder summary — illustrates a compact-depth composition.]",
  company: "Example Co.",
  year: "2018",
  role: "Product Designer",
  disciplines: ["Localization", "Mobile"],
  metrics: [],
  tags: ["Mobile", "Localization"],
  heroMedia: { reconstructed: true, alt: "Placeholder hero composition" },
  reconstructed: true,
  accent: "#155e75",
  accentSoft: "#cffafe",
  previousProject: { slug: "example-medium", label: "Example Operations Tool" },
  nextProject: { slug: "example-visual-showcase", label: "Example Brand Identity" },
  sections: [
    {
      type: "hero",
      variant: "comparison",
      eyebrow: "Example Localization Project",
      headline: "[Placeholder] A short earlier-work story.",
      media: {
        left: { reconstructed: true, alt: "Placeholder locale A" },
        right: { reconstructed: true, alt: "Placeholder locale B" },
      },
    },
    {
      type: "editorial",
      body: ["[Placeholder] One or two paragraphs — compact work stays brief, not force-expanded to fill a flagship shape."],
    },
    {
      type: "fullWidthMedia",
      media: { reconstructed: true, alt: "Placeholder full-width product shot" },
    },
    {
      type: "editorialStatement",
      statement: "[Placeholder] A short closing thought — no reflection chapter needed at this depth.",
    },
  ],
};
