export type ProjectTier = "featured" | "range";
export type ProjectDomain =
  | "Enterprise platforms"
  | "Developer tools"
  | "AI and agentic products"
  | "Consumer and mobile"
  | "Research and experimentation";

export type SystemMapStep = {
  label: string;
  detail: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

/** Looping product clip shown at the top of the project's card. */
export type ProjectMedia = {
  mp4: string;
  webm?: string;
  poster: string;
  aspect?: number;
};

export type Project = {
  slug: string;
  number: string;
  /**
   * Public product label — what kind of product this is. Primary eyebrow /
   * metadata identity. Never an internal code name.
   */
  label: string;
  /** Case-study headline: the problem solved or transformation created. */
  title: string;
  /**
   * Internal product name. Optional supporting metadata only — never required
   * to understand the project. Omit when it adds no public value (e.g. GSCOPE).
   */
  internalName?: string;
  summary: string;
  outcome: string;
  metrics: ProjectMetric[];
  org: string;
  domain: ProjectDomain;
  ownership: string;
  timeframe: string;
  role: string;
  tier: ProjectTier;
  featured: boolean;
  reconstructed: boolean;
  accent: string;
  accentSoft: string;
  contentPath: string;
  media?: ProjectMedia;
  systemMap: SystemMapStep[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-management",
    number: "01",
    label: "Portfolio Management Platform",
    title: "Replacing five portfolio tools with one connected platform.",
    internalName: "Clipper",
    summary:
      "Portfolio planning was split across separate systems for people, products, initiatives, approvals, and strategic work. I led the experience from the initial platform architecture through staged rollout, migration, and adoption.",
    outcome:
      "6K+ monthly users · 5→1 platform consolidation · 6 connected modules",
    metrics: [
      { value: "6K+", label: "monthly users" },
      { value: "5→1", label: "platform consolidation" },
      { value: "6", label: "connected modules" },
    ],
    org: "Walmart Global Tech",
    domain: "Enterprise platforms",
    ownership: "End-to-end design owner",
    timeframe: "2022–Present",
    role: "UX Designer → Senior UX Designer",
    tier: "featured",
    featured: true,
    reconstructed: true,
    accent: "#155e75",
    accentSoft: "#cffafe",
    contentPath: "projects/clipper/web/clipper-web.md",
    media: {
      mp4: "/work/clipper/hero.mp4",
      webm: "/work/clipper/hero.webm",
      poster: "/work/clipper/poster.jpg",
      aspect: 1600 / 1046,
    },
    systemMap: [
      {
        label: "Before",
        detail: "Disconnected portfolio, workforce, roadmap, and spreadsheet tools",
      },
      {
        label: "Intervention",
        detail: "Unified module architecture organised as Understand / Operate / Align",
      },
      {
        label: "After",
        detail: "One portfolio operating platform and system of record",
      },
    ],
    tags: ["0→1 Platform", "Systems Design", "Enterprise UX"],
  },
  {
    slug: "api-lifecycle",
    number: "02",
    label: "API Lifecycle Platform",
    title:
      "Creating one platform for engineers to discover, design, test, and govern APIs.",
    internalName: "API Lifecycle Manager",
    summary:
      "API development was spread across disconnected documentation, design, testing, and subscription workflows. I helped define and design a platform built around three core experiences: Marketplace, Design Studio, and Testing.",
    outcome:
      "~500 services onboarded · ~40% faster contract design for teams using the redesigned Studio · 60+ adoption sessions",
    metrics: [
      { value: "~500", label: "services onboarded" },
      {
        value: "~40%",
        label: "faster contract design for teams using the redesigned Studio",
      },
      { value: "60+", label: "adoption sessions" },
    ],
    org: "Walmart Global Tech",
    domain: "Developer tools",
    ownership: "Primary design owner",
    timeframe: "2022–Present",
    role: "Senior UX Designer",
    tier: "featured",
    featured: true,
    reconstructed: true,
    accent: "#0e7490",
    accentSoft: "#a5f3fc",
    contentPath:
      "projects/api-lifecycle-manager/web/api-lifecycle-manager-web.md",
    systemMap: [
      {
        label: "Before",
        detail: "Fragmented docs, repos, testing tools, and manual access steps",
      },
      {
        label: "Intervention",
        detail: "Marketplace, Design Studio, and Testing as one lifecycle",
      },
      {
        label: "After",
        detail: "Connected developer platform with governance and adoption paths",
      },
    ],
    tags: ["Developer Experience", "Platform Design"],
  },
  {
    slug: "dependency-health",
    number: "03",
    label: "Dependency Health Platform",
    title:
      "Turning dependency compliance data into clear actions developers can take.",
    internalName: "Dependency Management",
    summary:
      "The backend could provide dozens of technical signals. The UX challenge was deciding what mattered to developers, engineering leaders, and platform teams — and translating it into status, diagnosis, and guided remediation.",
    outcome:
      "Repository → Pillar → Organisation visibility · 148 repositories in initial major-version pilot",
    metrics: [
      {
        value: "3 levels",
        label: "Repository → Pillar → Organisation visibility",
      },
      {
        value: "148",
        label: "repositories in initial major-version pilot",
      },
    ],
    org: "Walmart Global Tech",
    domain: "Developer tools",
    ownership: "Primary design owner",
    timeframe: "2025–Present",
    role: "Senior UX Designer",
    tier: "featured",
    featured: true,
    reconstructed: true,
    accent: "#164e63",
    accentSoft: "#ecfeff",
    contentPath:
      "projects/dependency-management/web/dependency-management-web.md",
    systemMap: [
      {
        label: "Before",
        detail: "Fragmented dependency signals without a decision model",
      },
      {
        label: "Intervention",
        detail: "Prioritised health, layered views, and guided remediation",
      },
      {
        label: "After",
        detail: "Clearer path from compliance signal to concrete action",
      },
    ],
    tags: ["Developer Tools", "Information Architecture", "Governance"],
  },
  {
    slug: "store-support",
    number: "04",
    label: "Store Support Platform",
    title:
      "Redesigning IT support so store associates can diagnose and resolve issues before raising a ticket.",
    internalName: "FixIt",
    summary:
      "I redesigned the self-service support experience around clearer classification, guided troubleshooting, search, location context, and better escalation information.",
    outcome:
      "~5,900 daily users · ~580K-device footprint · 7,000+ weekly searches",
    metrics: [
      { value: "~5,900", label: "daily users" },
      { value: "~580K", label: "device footprint" },
      { value: "7,000+", label: "weekly searches" },
    ],
    org: "Walmart Global Tech",
    domain: "Consumer and mobile",
    ownership: "End-to-end design owner",
    timeframe: "2020–2021",
    role: "User Experience Designer",
    tier: "featured",
    featured: true,
    reconstructed: true,
    accent: "#4A3428",
    accentSoft: "#EDE4DC",
    contentPath: "projects/fixit/web/fixit-web.md",
    systemMap: [
      {
        label: "Before",
        detail: "Issue occurs with little guidance before ticket creation",
      },
      {
        label: "Intervention",
        detail: "Diagnose, self-resolve, or escalate with clearer context",
      },
      {
        label: "After",
        detail: "Faster support paths across mobile and web",
      },
    ],
    tags: ["Mobile Product", "Research", "Service Design"],
  },
  {
    slug: "supply-chain-operations",
    number: "05",
    label: "Supply Chain Operations Platform",
    title:
      "Reorganising 139 operational modules around how people actually find and use them.",
    summary:
      "As the platform expanded, hundreds of operational modules became increasingly difficult to discover. I co-led the information architecture and navigation redesign, evaluating competing navigation models with users across multiple markets.",
    outcome: "~1M monthly unique visitors · 139 modules",
    metrics: [
      { value: "~1M", label: "monthly unique visitors" },
      { value: "139", label: "operational modules" },
      { value: "62%", label: "less time spent on the landing page" },
    ],
    org: "Walmart Global Tech",
    domain: "Enterprise platforms",
    ownership: "Co-led with another designer",
    timeframe: "2021–2022",
    role: "User Experience Designer",
    tier: "range",
    featured: false,
    reconstructed: true,
    accent: "#0891b2",
    accentSoft: "#cffafe",
    contentPath:
      "projects/supply-chain-operations/web/supply-chain-operations-web.md",
    systemMap: [
      {
        label: "Before",
        detail: "Flat tile grid with no search, hierarchy, or personalisation",
      },
      {
        label: "Intervention",
        detail: "Shared IA, left navigation, search, and personalised shortcuts",
      },
      {
        label: "After",
        detail: "Scalable platform shell used across markets and teams",
      },
    ],
    tags: ["Platform UX", "Information Architecture", "Navigation"],
  },
  {
    slug: "bb-daily",
    number: "06",
    label: "bb daily",
    title: "Designing both sides of a recurring delivery service.",
    internalName: "bb daily",
    summary:
      "bb daily was a recurring delivery service for grocery e-commerce. I designed both the customer subscription experience and the Android operations product managing procurement, inventory, shipments, and early-morning delivery logistics.",
    outcome:
      "10+ cities · 1.5M+ users · 120K average daily deliveries",
    metrics: [
      { value: "10+", label: "cities" },
      { value: "1.5M+", label: "users" },
      { value: "120K", label: "average daily deliveries" },
    ],
    org: "bigbasket",
    domain: "Consumer and mobile",
    ownership: "Product designer, dual-track design",
    timeframe: "2019–2020",
    role: "Product Designer",
    tier: "range",
    featured: false,
    reconstructed: true,
    accent: "#059669",
    accentSoft: "#d1fae5",
    contentPath: "projects/bbdaily/web/bbdaily-web.md",
    systemMap: [
      {
        label: "Before",
        detail: "Separate customer and operations apps with manual coordination",
      },
      {
        label: "Intervention",
        detail: "Connected experience for customer orders and operations fulfillment",
      },
      {
        label: "After",
        detail: "Integrated subscription and logistics platform",
      },
    ],
    tags: ["Mobile", "Operations", "E-commerce"],
  },
];

/** Legacy internal-name slugs → public slugs. Used for redirects. */
export const projectSlugRedirects: Record<string, string> = {
  clipper: "portfolio-management",
  "api-lifecycle-manager": "api-lifecycle",
  "dependency-management": "dependency-health",
  fixit: "store-support",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getRangeProjects() {
  return projects.filter((project) => !project.featured);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
