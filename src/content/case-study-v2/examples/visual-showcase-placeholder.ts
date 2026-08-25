import type { CaseStudyV2 } from "../types";

/**
 * Demonstrates visualShowcase depth — media dominates, copy stays short, no
 * system diagram (nothing to explain structurally). Illustrative only.
 */
export const visualShowcasePlaceholder: CaseStudyV2 = {
  slug: "example-visual-showcase",
  depth: "visualShowcase",
  projectLabel: "Example Brand Identity",
  headline: "[Placeholder] A visual language for a brand that changed monthly.",
  summary: "[Placeholder summary — illustrates the visual-showcase mode.]",
  company: "Example Co.",
  year: "2015",
  role: "Visual Designer",
  disciplines: ["Visual design", "Brand"],
  metrics: [],
  tags: ["Visual design", "Brand"],
  heroMedia: { reconstructed: true, alt: "Placeholder brand hero" },
  reconstructed: true,
  accent: "#164e63",
  accentSoft: "#ecfeff",
  previousProject: { slug: "example-compact", label: "Example Localization Project" },
  sections: [
    {
      type: "hero",
      variant: "cinematic",
      eyebrow: "Example Brand Identity",
      headline: "[Placeholder] A visual language for a brand that changed monthly.",
      summary: "[Placeholder] One short line — copy stays brief throughout.",
      media: { reconstructed: true, alt: "Placeholder cinematic brand shot" },
    },
    {
      type: "fullWidthMedia",
      media: { reconstructed: true, alt: "Placeholder full-width brand shot" },
    },
    {
      type: "mediaPair",
      weighting: "50/50",
      a: { reconstructed: true, alt: "Placeholder variant A", label: "Concept A" },
      b: { reconstructed: true, alt: "Placeholder variant B", label: "Concept B" },
    },
    {
      type: "editorial",
      body: ["[Placeholder] A brief closing line — visual work speaks for itself; the copy doesn't try to compete with it."],
    },
  ],
};
