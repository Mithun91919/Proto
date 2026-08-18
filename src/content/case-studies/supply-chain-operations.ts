import type { CaseStudy } from "./types";

export const supplyChainCase: CaseStudy = {
  slug: "supply-chain-operations",
  label: "Supply Chain Operations Platform",
  org: "Walmart Global Tech",
  timeframe: "2021–2022",
  discipline: "Platform, IA",
  title:
    "Reorganising 300+ operational tools around how people actually find and use them.",
  subtitle:
    "As the platform expanded, hundreds of operational modules became increasingly difficult to discover. I co-led the information architecture and navigation redesign, evaluating competing navigation models with users across multiple markets.",
  story:
    "The platform had grown into the front door for hundreds of supply-chain workflows, but its home was still a flat tile grid: no search, no meaningful hierarchy, no personalisation. I co-led the navigation and landing redesign so hundreds of thousands of monthly users could find the right tool faster — and so the platform shell itself could become a vehicle for design-system adoption.",
  contributions: [
    "Co-led UX for navigation, landing page, personalisation, and platform shell.",
    "Helped create a taxonomy 15+ teams could agree on.",
    "Compared navigation models through concept testing and landed on left-side navigation.",
    "Used the redesign to accelerate enterprise design-system adoption.",
    "Supported UAT and visual quality assurance through launch and post-launch hardening.",
  ],
  role: "User Experience Designer — co-led",
  scope: [
    "Information architecture",
    "Navigation",
    "Personalisation",
    "Design systems",
    "VQA",
  ],
  metrics: [
    { value: "255K+", label: "Monthly users" },
    { value: "300+", label: "Modules" },
  ],
  chapters: [
    {
      number: "01",
      title: "Here's what we built",
      highlights: [
        {
          title: "Searchable left-side navigation",
          body: "A scalable model for finding modules by taxonomy instead of memorising a tile wall.",
        },
        {
          title: "Pinned and recent modules",
          body: "Personal shortcuts for the tools people actually return to across roles and markets.",
        },
        {
          title: "Platform announcements and controls",
          body: "A communication channel plus consolidated market and account controls in the shell.",
        },
        {
          title: "Design-system foundation",
          body: "The new shell became a forcing function for consistent components across many engineering teams.",
        },
      ],
      visuals: [
        "VISUAL: Before tile grid vs redesigned platform shell.",
      ],
    },
    {
      number: "02",
      title: "A platform that had outgrown its front door",
      body: [
        "Finding the right tool was hard. Supporting very different users with one identical home page was harder. And without a scalable shell, every new module made the foundation weaker.",
      ],
      callout:
        "The home page had not evolved with the platform. People relied on memory, bookmarks, or direct links instead of the front door.",
    },
    {
      number: "03",
      title: "The insight: agree on structure before decorating the shell",
      insights: [
        {
          label: "IA",
          title: "Taxonomy is a negotiation",
          body: "15+ teams needed a shared language for modules before navigation could scale past 300 items.",
        },
        {
          label: "Design",
          title: "Compare real navigation models",
          body: "Left-side vs top navigation were tested as concepts — not assumed from pattern libraries.",
        },
        {
          label: "Systems",
          title: "The shell can carry the design system",
          body: "A platform redesign is leverage: one shell can pull many product teams onto shared components.",
        },
        {
          label: "Quality",
          title: "VQA protects enterprise launches",
          body: "At this scale, implementation drift across teams is a UX risk, not only an engineering detail.",
        },
      ],
    },
    {
      number: "04",
      title: "Choosing a navigation model that could scale",
      body: [
        "Concept A: left-side navigation. Concept B: top navigation. Comparative testing favoured the left-side model for scanability, hierarchy, and growth past hundreds of modules.",
        "Personalisation — pins, recents, and role-relevant entry points — mattered as much as the nav pattern itself, because every user saw the same wall of tiles before.",
      ],
      visuals: [
        "VISUAL: Side-by-side Concept A vs Concept B with test findings.",
        "VISUAL: Taxonomy diagram agreed across 15+ teams.",
      ],
    },
    {
      number: "05",
      title: "Validation and the release",
      body: [
        "UAT and visual quality assurance protected the launch across markets and engineering teams. The architecture has supported 300+ modules, 255,000+ monthly users, and multi-market use after shipping.",
      ],
    },
  ],
  lessons: [
    {
      label: "Lesson",
      title: "Front doors need architecture",
      body: "A platform home is not a marketing page. It is an operating surface for finding work under time pressure.",
    },
    {
      label: "Lesson",
      title: "Shared language unlocks shared UI",
      body: "Without taxonomy agreement, navigation patterns only rearrange the same confusion.",
    },
    {
      label: "Lesson",
      title: "Shell work is systems work",
      body: "The durable outcome was not only easier finding — it was a foundation more teams could build on consistently.",
    },
  ],
};
