import type { CaseStudyV2 } from "../types";

/**
 * Demonstrates a FLAGSHIP composition (~8 sections, 6+ media moments, deep
 * dive). Every field here is illustrative — a fictional project used only to
 * prove the section registry supports this depth of story, not real client
 * work. No media path is real; every media slot renders through MediaFrame's
 * reconstructed-placeholder mode.
 */
export const flagshipPlaceholder: CaseStudyV2 = {
  slug: "example-flagship",
  depth: "flagship",
  projectLabel: "Example Flagship Platform",
  headline: "[Placeholder] Replacing five disconnected tools with one platform.",
  summary: "[Placeholder summary — illustrates a flagship-depth composition, not a real project.]",
  company: "Example Co.",
  year: "2023–Present",
  role: "Senior Product Designer",
  disciplines: ["Systems design", "Platform architecture", "Migration"],
  metrics: [
    { value: "N", label: "placeholder metric" },
    { value: "N→1", label: "placeholder consolidation" },
  ],
  tags: ["Enterprise platforms", "0→1"],
  heroMedia: { reconstructed: true, alt: "Placeholder hero composition" },
  reconstructed: true,
  accent: "#0e7490",
  accentSoft: "#cffafe",
  deepDive: { href: "/work", label: "View design deep dive" },
  nextProject: { slug: "example-medium", label: "Example Operations Tool" },
  sections: [
    {
      type: "hero",
      variant: "split",
      eyebrow: "Example Flagship Platform",
      headline: "[Placeholder] Replacing five disconnected tools with one platform.",
      summary: "[Placeholder] A short standfirst describing the transformation.",
      media: { reconstructed: true, alt: "Placeholder hero screen" },
    },
    {
      type: "editorial",
      eyebrow: "Context",
      heading: "[Placeholder] What the fragmentation actually looked like",
      body: [
        "[Placeholder paragraph — sets up the problem the way an approved web draft would, in prose rather than a UX-process breakdown.]",
        "[Placeholder paragraph — a second beat of context.]",
      ],
    },
    {
      type: "splitTextMedia",
      ratio: "5/7",
      mediaSide: "right",
      eyebrow: "Tension",
      heading: "[Placeholder] The decision that mattered most",
      body: ["[Placeholder] Why this particular decision shaped everything downstream."],
      media: { reconstructed: true, alt: "Placeholder decision screen" },
    },
    {
      type: "beforeAfter",
      eyebrow: "Structural rethink",
      before: { reconstructed: true, alt: "Placeholder before state", label: "Before" },
      after: { reconstructed: true, alt: "Placeholder after state", label: "After" },
      body: "[Placeholder] What changed structurally, and why the after state reads as evidence rather than opinion.",
    },
    {
      type: "productMoment",
      eyebrow: "Product evidence",
      heading: "[Placeholder] The moment this became real",
      body: ["[Placeholder] One important interaction, described in a paragraph or two."],
      media: { reconstructed: true, alt: "Placeholder product moment" },
    },
    {
      type: "metricMoment",
      dominant: { value: "N%", label: "[placeholder dominant outcome]" },
      supporting: [
        { value: "N", label: "[placeholder metric A]" },
        { value: "N", label: "[placeholder metric B]" },
      ],
      context: "[Placeholder] A sentence giving the metric meaning.",
    },
    {
      type: "editorialStatement",
      statement: "[Placeholder] A large text-led insight or reframe, the kind that breaks the page's rhythm.",
    },
    {
      type: "reflection",
      heading: "[Placeholder] What I believe now",
      body: ["[Placeholder] A short, first-person point of view — not a repeat of the summary."],
      conclusion: "[Placeholder concluding statement.]",
    },
  ],
};
