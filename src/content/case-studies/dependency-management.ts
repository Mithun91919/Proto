import type { CaseStudy } from "./types";

export const dependencyHealthStudy: CaseStudy = {
  slug: "dependency-health",
  label: "Dependency Health Platform",
  org: "Walmart Global Tech",
  timeframe: "2025–Present",
  discipline: "Developer platform · Product design",
  title: "Turning dependency governance into a clear path to action",
  subtitle:
    "Walmart Global Tech manages a large Java application ecosystem. Over time, applications accumulated different library versions, legacy packages, and inconsistent upgrade paths. I own the UX for the portal that translates dependency data into an experience for developers, engineering leaders, and platform administrators.",
  story:
    "Walmart Global Tech manages a large Java application ecosystem. Over time, applications accumulated different library versions, legacy packages, and inconsistent upgrade paths. The technical data existed, but teams did not have a consistent way to understand dependency health, prioritise what mattered, or move from a compliance signal to a concrete fix. I own the UX for the portal that translates that underlying governance and dependency data into an experience for developers, engineering leaders, and platform administrators.",
  contributions: [
    "Portal UX design and information architecture",
    "Decision model for different user roles",
    "Repository health dashboard design",
    "Onboarding and remediation flow design",
    "Multi-level reporting and scale design",
    "Token-based theming system",
  ],
  role: "Senior UX Designer; design lead for the portal",
  scope: [
    "Repository health dashboards",
    "Developer onboarding flows",
    "Compliance remediation guidance",
    "Pillar and organisation-level reporting",
    "Admin governance interfaces",
    "Design system and theming",
  ],
  metrics: [
    { value: "148", label: "repositories in initial major-version pilot" },
  ],
  chapters: [
    {
      number: "01",
      title: "Teams had data, but not a usable decision model",
      intro:
        "The backend could expose many technical signals per repository: library-baseline versions, Java versions, onboarding state, security exposure, version drift, conflicts, and technical-debt categories.",
      body: [
        "Showing all of that equally would have created a technically complete interface that was difficult to act on.",
        "Research pointed to a clearer framing: the problem was not a lack of data. The data was not yet structured around the decisions people needed to make.",
        "Developers needed to know 'am I compliant, and what do I fix first?' Managers needed to know 'which teams are behind?' Platform teams needed to understand 'adoption and compliance across the organisation.'",
      ],
    },
    {
      number: "02",
      title: "We prioritised signals before designing the dashboard",
      intro: "One of the highest-leverage decisions was deciding what not to show by default.",
      body: [
        "I mapped the available signals against who needed them and what decision each one supported. That produced a layered information architecture: a concise health state at the entry point, diagnostic depth on demand, and an explicit action path when something required attention.",
        "The repository dashboard followed a simple principle: Summary → Diagnosis → Action.",
        "Dependency freshness itself is multi-dimensional, including the approved library baseline/BOM version, Java version, and feature-library freshness. The interface communicates overall health first, then lets engineers expand the individual dimensions and technical details when they need them.",
      ],
    },
    {
      number: "03",
      title: "We turned compliance into a guided path to action",
      intro:
        "Repositories that are not yet aligned need to move through a sequence of technical changes such as enforcement updates, legacy-library removal, Java upgrades, and adoption of the current standard-library baseline.",
      body: [
        "A flat checklist would tell an engineer what was wrong without helping them understand the order in which to fix it.",
        "I designed onboarding and remediation as a guided journey with visible progress, clear step dependencies, actionable guidance, and automation surfaced at the moment it could create the required code change or pull request.",
        "The intent was to close the gap between: 'I know my application is behind' and 'I know exactly what to do next.'",
      ],
    },
    {
      number: "04",
      title: "The same health model had to work at different scales",
      intro:
        "Repository health is useful to an individual team. It becomes a different design problem when hundreds of repositories need to be understood together.",
      body: [
        "For engineering leaders, pillar and organisation views aggregate freshness so they can scan the distribution, identify lagging areas, and drill down only where attention is needed. For governance teams, the same model expands into filterable reporting and export.",
        "The underlying data remains consistent, but the information hierarchy changes with the decision context.",
      ],
    },
    {
      number: "05",
      title: "When colour preference became a systems problem",
      intro:
        "Post-launch feedback included conflicting preferences about dashboard colour treatment. Rather than hard-coding a different solution for different users, the platform moved toward token-based theming so semantic meaning could remain consistent while visual themes changed.",
      body: [
        "That turned an individual preference discussion into a maintainable system decision.",
      ],
    },
    {
      number: "06",
      title: "What changed",
      intro: "The portal is live and continues to evolve alongside the dependency-governance programme.",
      body: [
        "The initial major-version pilot tracked 148 repositories, onboarding became self-service through the guided flow, and dependency-health reporting is available from repository through pillar and organisation levels.",
        "The product's value is not the number of technical signals it can display. It is turning those signals into information that tells an engineer what matters, why it matters, and what to do next.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Technical completeness and product usefulness are not the same thing",
      body: "More signals do not create more clarity. The information hierarchy became more foundational than any individual dashboard component.",
    },
    {
      label: "Insight",
      title: "Compliance-driven products have a higher responsibility to explain the next step",
      body: "When people cannot opt out of a workflow, unclear terminology and dead ends become operational friction rather than simple adoption problems.",
    },
  ],
};
