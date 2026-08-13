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

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
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
  systemMap: SystemMapStep[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "clipper",
    number: "01",
    title:
      "Replacing five disconnected portfolio tools with one system for managing people, products, initiatives, and goals.",
    shortTitle: "Clipper",
    summary:
      "Walmart's technology organisation was planning and operating across separate tools for workforce data, products, roadmaps, initiatives, and administration. I led design from the first whiteboard through a multi-year rollout that brought those workflows into one connected platform.",
    outcome: "6,000+ monthly active users · 5 legacy systems retired · $2.65M+ documented cost and automation savings",
    metrics: [
      { value: "6,000+", label: "monthly active users" },
      { value: "5", label: "legacy systems retired" },
      { value: "$2.65M+", label: "documented cost and automation savings" },
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
    tags: ["0→1 Platform", "Enterprise UX", "Systems Design"],
  },
  {
    slug: "api-lifecycle-manager",
    number: "02",
    title:
      "Creating one platform for engineers to discover, design, test, and govern APIs.",
    shortTitle: "API Lifecycle Manager",
    summary:
      "API development was spread across documentation tools, repositories, testing software, and manual subscription processes. I helped define and design a platform that brought the lifecycle together through three core experiences: Marketplace, Design Studio, and Testing. I stayed with the product from early discovery through launch, adoption, redesign, governance, and its evolution into a deeper part of the engineering workflow.",
    outcome:
      "~500 services onboarded · ~40% faster API contract design · 60+ engineering adoption sessions",
    metrics: [
      { value: "~500", label: "services onboarded" },
      {
        value: "~40%",
        label: "faster API contract design for teams using the redesigned Studio",
      },
      { value: "60+", label: "engineering adoption sessions" },
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
    tags: ["Developer Experience", "Product Design", "Platform"],
  },
  {
    slug: "dependency-management",
    number: "03",
    title:
      "Turning dependency compliance data into clear actions developers can take before deployment.",
    shortTitle: "Dependency Management",
    summary:
      "The technical signals already existed. The problem was that developers, engineering leaders, and platform teams needed completely different answers from the same data. I designed the information architecture, prioritised which metrics mattered at each level, and created guided onboarding and remediation flows that move users from status → diagnosis → action. Post-launch feedback also led us to turn conflicting colour preferences into a platform-wide token-based theming system rather than another one-off UI decision.",
    outcome:
      "Repository → Pillar → Organisation visibility · 148 repositories tracked in the initial major-version pilot",
    metrics: [
      {
        value: "3 levels",
        label: "repository → pillar → organisation visibility",
      },
      {
        value: "148",
        label: "repositories tracked in the initial major-version pilot",
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
    slug: "fixit",
    number: "04",
    title:
      "Redesigning IT support so store associates can diagnose and resolve issues before raising a ticket.",
    shortTitle: "FixIt",
    summary:
      "Store associates were navigating unclear issue categories, limited troubleshooting, weak search, and fragmented support workflows. I redesigned the mobile experience around clearer problem classification, guided troubleshooting, search, precise location context, and better information for the support teams receiving unresolved requests.",
    outcome:
      "~5,900 daily active users · ~580,000-device footprint · 7,000+ weekly searches · 3.5× YoY growth",
    metrics: [
      { value: "~5,900", label: "daily active users" },
      { value: "~580,000", label: "device footprint" },
      { value: "7,000+", label: "weekly searches, 3.5× year on year" },
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
    title:
      "Reorganising 300+ supply-chain tools into a navigation system designed for 255K+ monthly users.",
    shortTitle: "Supply Chain Operations",
    summary:
      "As the platform grew, a flat homepage and inconsistent navigation made hundreds of operational modules increasingly difficult to discover. Through information-architecture workshops, concept evaluation, and moderated feedback across markets, we introduced a scalable left-navigation model, search, pinned tools, recent modules, and a new platform shell.",
    outcome: "255K+ monthly active users · 300+ modules · 15+ stakeholder groups",
    metrics: [
      { value: "255K+", label: "monthly active users" },
      { value: "300+", label: "modules" },
      { value: "15+", label: "stakeholder groups" },
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
    tags: ["Platform", "Information Architecture"],
  },
];

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
