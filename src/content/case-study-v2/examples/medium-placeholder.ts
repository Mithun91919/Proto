import type { CaseStudyV2 } from "../types";

/**
 * Demonstrates a MEDIUM composition (~6 sections, 4–5 media moments, no deep
 * dive) with a different narrative shape from the flagship example —
 * customer experience → system behind it → operational experience, rather
 * than context → decisions → outcome. Illustrative only, no real content.
 */
export const mediumPlaceholder: CaseStudyV2 = {
  slug: "example-medium",
  depth: "medium",
  projectLabel: "Example Operations Tool",
  headline: "[Placeholder] Connecting a customer experience to the operations behind it.",
  summary: "[Placeholder summary — illustrates a medium-depth composition.]",
  company: "Example Co.",
  year: "2022",
  role: "UX Designer",
  disciplines: ["Service design", "Operational workflows"],
  metrics: [{ value: "N", label: "placeholder metric" }],
  tags: ["Operational workflows", "Service design"],
  heroMedia: { reconstructed: true, alt: "Placeholder hero composition" },
  reconstructed: true,
  accent: "#0891b2",
  accentSoft: "#cffafe",
  previousProject: { slug: "example-flagship", label: "Example Flagship Platform" },
  nextProject: { slug: "example-compact", label: "Example Localization Project" },
  sections: [
    {
      type: "hero",
      variant: "device",
      eyebrow: "Example Operations Tool",
      headline: "[Placeholder] Connecting a customer experience to the operations behind it.",
      summary: "[Placeholder] A short standfirst.",
      media: { reconstructed: true, alt: "Placeholder mobile screen" },
    },
    {
      type: "editorial",
      eyebrow: "Customer experience",
      heading: "[Placeholder] What the customer sees",
      body: ["[Placeholder paragraph describing the customer-facing surface.]"],
    },
    {
      type: "mediaSequence",
      eyebrow: "Progression",
      steps: [
        { media: { reconstructed: true, alt: "Step one" }, label: "[Placeholder step]" },
        { media: { reconstructed: true, alt: "Step two" }, label: "[Placeholder step]" },
        { media: { reconstructed: true, alt: "Step three" }, label: "[Placeholder step]" },
      ],
    },
    {
      type: "systemDiagram",
      eyebrow: "System behind it",
      heading: "[Placeholder] How the pieces connect",
      style: "flow",
      nodes: [
        { id: "a", label: "[Placeholder stage]", detail: "[Placeholder detail]" },
        { id: "b", label: "[Placeholder stage]", detail: "[Placeholder detail]" },
        { id: "c", label: "[Placeholder stage]", detail: "[Placeholder detail]" },
      ],
    },
    {
      type: "scaleStrip",
      eyebrow: "Operational experience",
      scale: [{ value: "N", label: "[placeholder scale figure]" }],
      outcomes: [{ value: "N%", label: "[placeholder attributed outcome]" }],
    },
    {
      type: "reflection",
      heading: "[Placeholder] Connecting the two sides",
      body: ["[Placeholder] A first-person reflection on the connection between customer and operational experience."],
      conclusion: "[Placeholder concluding statement.]",
    },
  ],
};
