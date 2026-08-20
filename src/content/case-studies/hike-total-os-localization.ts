import type { CaseStudy } from "./types";

export const hikeTotalOsLocalizationStudy: CaseStudy = {
  slug: "hike-total-os-localization",
  label: "Multilingual Mobile Experience",
  org: "Hike",
  timeframe: "2017",
  discipline: "Research · Localization · Mobile",
  title: "Building a localization system across 8 Indian languages",
  subtitle:
    "TOTAL OS included services designed to work without the internet and support users across eight Indian languages. I established a repeatable localization process that moved product copy from English through translation, review, implementation, and device-level validation.",
  story:
    "TOTAL OS included services designed to work without the internet and support users across eight Indian languages. My work focused on establishing a repeatable localization process that could move product copy from English through translation, review, implementation, and device-level validation while preserving the intent of the original experience.",
  contributions: [
    "Localization process design and framework",
    "Translation and review workflow establishment",
    "Language service partner collaboration",
    "XML implementation and device validation",
    "Device-level testing methodology",
    "Language expert coordination",
    "Product copy and terminology work",
  ],
  role: "Product Research",
  scope: [
    "8 Indian languages support",
    "Translation workflow and process",
    "XML implementation on device",
    "Device validation and testing",
    "4 projects localization",
    "Terminology and clarity",
    "Layout and hierarchy adaptation",
  ],
  metrics: [{ value: "8", label: "Indian languages supported" }],
  chapters: [
    {
      number: "01",
      title: "Localization was more than translation",
      intro:
        "The central challenge was not simply converting English copy into another script.",
      body: [
        "Different languages required us to preserve meaning, clarity, and product intent while accounting for the realities of multiple Indian scripts.",
      ],
      callout: "The goal was to communicate the same intent, not just the same words.",
    },
    {
      number: "02",
      title: "Creating a repeatable workflow",
      intro:
        "I worked across the localization process with the language service provider and internal language experts, helping establish a framework for translation, proofreading, and implementation across eight languages and four projects.",
      body: [],
    },
    {
      number: "03",
      title: "Taking the work into the product",
      intro:
        "Localized copy was implemented as XML and evaluated across multiple mobile devices with internal language reviewers.",
      body: [
        "This connected language decisions to the actual interface, where text length, hierarchy, context, and usability could be evaluated in the product rather than in a translation document alone.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Localization changes more than copy",
      body: "It affects layout, terminology, validation, implementation, and the way teams collaborate to ship a product consistently across languages.",
    },
  ],
};
