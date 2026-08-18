import type { CaseStudy } from "./types";

export const apiLifecycleCase: CaseStudy = {
  slug: "api-lifecycle",
  label: "API Lifecycle Platform",
  internalName: "API Lifecycle Manager",
  org: "Walmart Global Tech",
  timeframe: "2022–Present",
  discipline: "Developer tools, Platform",
  title:
    "Creating one platform for engineers to discover, design, test, and govern APIs.",
  subtitle:
    "API development was spread across disconnected documentation, design, testing, and subscription workflows. I helped define and design a platform built around three core experiences: Marketplace, Design Studio, and Testing.",
  story:
    "Engineers could build APIs, but discovering what already existed, designing contracts consistently, getting access, and keeping documentation trustworthy meant hopping across docs, repos, testing tools, messages, and manual approvals. I worked on the platform from early definition through delivery and adoption — not to replace isolated tools, but to create one lifecycle teams could actually run inside.",
  contributions: [
    "Helped frame the platform as one lifecycle rather than another standalone catalogue.",
    "Designed Marketplace discovery, evaluation, and guided subscription journeys.",
    "Designed Design Studio for beginners and experts — visual and code editors, linting, versioning.",
    "Expanded the product into testing, imports, code generation, and earlier governance.",
    "Ran adoption work across 60+ engineering sessions and later AI-assisted discovery patterns.",
  ],
  role: "Senior UX Designer",
  scope: [
    "Developer experience",
    "Lifecycle IA",
    "Governance UX",
    "Adoption",
    "AI discovery",
  ],
  metrics: [
    { value: "~500", label: "Services onboarded" },
    {
      value: "~40%",
      label: "Faster contract design for teams using the redesigned Studio",
    },
    { value: "60+", label: "Adoption sessions" },
  ],
  chapters: [
    {
      number: "01",
      title: "Here's what we built",
      intro:
        "Three pillars make the platform legible. Everything else is supporting capability.",
      highlights: [
        {
          title: "Marketplace",
          body: "Search-first discovery, evaluation, ownership context, and guided subscription instead of a long access form.",
        },
        {
          title: "Design Studio",
          body: "Dual editors, linting as guidance, duplication checks, quality scoring, versioning, collaboration, imports, and code generation.",
        },
        {
          title: "Testing",
          body: "Common API testing workflows in the same place engineers already design and discover — plus security handoff.",
        },
        {
          title: "Adoption as design work",
          body: "60+ engineering sessions turned a useful product into infrastructure teams actually rely on.",
        },
      ],
      visuals: [
        "VISUAL: Before-state ecosystem → Marketplace / Design Studio / Testing.",
        "VISUAL: Lifecycle diagram from discover → design → govern → test → consume.",
      ],
    },
    {
      number: "02",
      title: "A fragmented lifecycle created waste at every stage",
      body: [
        "Discovery was unreliable. Design and documentation were separated from development. Quality and governance arrived too late. Consumption was manual. None of these were isolated bugs — they were seams in the same broken lifecycle.",
      ],
      callout:
        "The goal was bigger than replacing individual tools: create one coherent experience for designing, discovering, testing, governing, and evolving APIs.",
    },
    {
      number: "03",
      title: "Who's opening the lifecycle",
      highlights: [
        {
          title: "API providers",
          body: "Need to design contracts, communicate versions, meet quality bars, and publish without a second documentation ritual.",
        },
        {
          title: "API consumers",
          body: "Need to find the right service quickly, understand ownership and policy, request access, and test with confidence.",
        },
        {
          title: "Product owners and architects",
          body: "Need portfolio visibility, duplication signals, and governance that happens early enough to change direction.",
        },
      ],
    },
    {
      number: "04",
      title: "The insight: one lifecycle, three jobs",
      insights: [
        {
          label: "Architecture",
          title: "Marketplace and Studio are two sides of one coin",
          body: "An API designed by a provider should become understandable and actionable for a consumer without a second workflow.",
        },
        {
          label: "Experience",
          title: "Support beginners and experts in the same editor",
          body: "Visual and code modes preserve expert speed without making OpenAPI fluency a prerequisite.",
        },
        {
          label: "Governance",
          title: "Move quality earlier",
          body: "Linting, duplication, and scoring should feel like a knowledgeable reviewer helping early — not a gate appearing late.",
        },
        {
          label: "Adoption",
          title: "Shipping is not the finish line",
          body: "Solving a real problem does not guarantee adoption. The sessions, onboarding, and everyday workflow gaps decide whether the platform becomes infrastructure.",
        },
      ],
    },
    {
      number: "05",
      title: "Marketplace, Design Studio, and Testing up close",
      highlights: [
        {
          title: "Search-first Marketplace",
          body: "Consumers arrive with a need. Service cards surface enough to judge relevance before forcing a deep dive.",
        },
        {
          title: "Design Studio revamp",
          body: "Hierarchy, progressive disclosure, and editor focus improved after real usage. Internal reporting showed ~40% faster contract design versus the prior version.",
        },
        {
          title: "Built-in testing",
          body: "The goal was not to clone every specialist tool — it was to make common internal workflows usable where engineers already work.",
        },
        {
          title: "AI where discovery friction is real",
          body: "Later AI-assisted discovery reduced the cost of finding the right API without pretending AI replaces ownership or governance.",
        },
      ],
      visuals: [
        "VISUAL: Marketplace search → detail → subscription journey.",
        "VISUAL: Basic ↔ Advanced editor switching.",
        "VISUAL: Governance progression — lint → quality → approval → readiness.",
      ],
    },
  ],
  lessons: [
    {
      label: "Lesson",
      title: "Lifecycle beats feature list",
      body: "The three-pillar model keeps breadth readable. Without it, the product collapses into a catalogue of disconnected capabilities.",
    },
    {
      label: "Lesson",
      title: "Governance has a tone of voice",
      body: "The same rule can feel like punishment or partnership depending on when it appears and how clearly it explains the fix.",
    },
    {
      label: "Lesson",
      title: "Adoption is a design surface",
      body: "Engineering sessions, onboarding, and workflow completeness mattered as much as the launch screens.",
    },
  ],
};
