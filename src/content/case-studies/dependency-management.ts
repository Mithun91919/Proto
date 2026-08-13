import type { CaseStudy } from "./types";

export const dependencyCase: CaseStudy = {
  slug: "dependency-management",
  org: "Walmart Global Tech",
  timeframe: "2025–Present",
  discipline: "Developer tools, Governance",
  title: "Dependency health that leads to action",
  subtitle:
    "Turning abundant technical metadata into decision-ready signals, layered views, and guided remediation.",
  story:
    "The technical data already existed — library baselines, Java versions, drift, conflicts, security exposure — but teams did not have a consistent way to understand dependency health or move from a compliance signal to a concrete fix. I took ownership of the portal UX so developers, leaders, and platform admins could make different decisions from the same underlying model.",
  contributions: [
    "Led UX for the Dependency Management portal end to end.",
    "Prioritised metrics before designing dashboards.",
    "Designed the composite health model and progressive disclosure pattern.",
    "Created guided onboarding and remediation journeys.",
    "Designed repository, pillar/org, and governance reporting views for different scales.",
  ],
  role: "Senior UX Designer — design lead",
  scope: [
    "Metric prioritisation",
    "IA",
    "Progressive disclosure",
    "Remediation",
    "Compliance UX",
  ],
  metrics: [
    { value: "148", label: "Repositories in latest pilot baseline" },
    { value: "3", label: "Audience decision models supported" },
    { value: "1", label: "Shared health model across scales" },
  ],
  chapters: [
    {
      number: "01",
      title: "Here's what we built",
      highlights: [
        {
          title: "Summary → Detail → Action",
          body: "Orient first, diagnose second, resolve third — the recurring interaction model across the product.",
        },
        {
          title: "Composite dependency health",
          body: "A understandable health signal instead of an equal-weight dump of every technical metric.",
        },
        {
          title: "Guided onboarding and remediation",
          body: "Compliance is not a scoreboard. The product has to show the next concrete step.",
        },
        {
          title: "One model, many altitudes",
          body: "Repository views for builders, pillar/org views for leaders, reporting for governance.",
        },
      ],
      visuals: [
        "SYSTEM MAP: Fragmented signals → prioritised health + guided remediation → clearer compliance path.",
      ],
    },
    {
      number: "02",
      title: "Teams had data, but not a usable decision model",
      body: [
        "Dependency debt often surfaced during migrations, breakages, or security work. Tracking was informal. Leaders could not easily understand portfolio health from repository-level logs.",
        "Showing every backend signal equally would have created a technically complete interface that was still hard to act on.",
      ],
      callout:
        "The core design problem was less about creating another dashboard and more about turning abundant technical metadata into decision-ready information.",
    },
    {
      number: "03",
      title: "Three audiences, three decisions",
      highlights: [
        {
          title: "Developers and tech leads",
          body: "Need to know what is wrong in a repository, why it matters, and what to change next.",
        },
        {
          title: "Engineering managers and leaders",
          body: "Need portfolio-level health and risk without drowning in package-level noise.",
        },
        {
          title: "Platform and governance teams",
          body: "Need adoption, compliance, and reporting views that stand up to mandatory usage.",
        },
      ],
    },
    {
      number: "04",
      title: "The insight: prioritise signals before painting charts",
      insights: [
        {
          label: "IA",
          title: "Not every metric earns a top billing",
          body: "Metric prioritisation is the design system for a governance product.",
        },
        {
          label: "Interaction",
          title: "Summary for orientation",
          body: "Leaders and developers both need an honest top line before they opt into depth.",
        },
        {
          label: "Action",
          title: "Remediation is the product",
          body: "If the interface cannot carry someone to a fix, the health score is only anxiety.",
        },
        {
          label: "Compliance",
          title: "Mandatory use raises the quality bar",
          body: "When people must use a tool, clarity and fairness matter more — not less.",
        },
      ],
    },
    {
      number: "05",
      title: "Layered views and guided journeys",
      body: [
        "The same health model powers repository diagnosis, pillar/org roll-ups, and governance reporting. Progressive disclosure keeps advanced signals available without making them the default language.",
        "Post-launch, even preferences like colour encoding became systems problems — consistency across states and audiences mattered as much as the initial dashboard layout.",
      ],
      visuals: [
        "VISUAL: Repository view → org roll-up → governance report using one health model.",
        "VISUAL: Onboarding / remediation journey with next-best action.",
      ],
    },
  ],
  lessons: [
    {
      label: "Lesson",
      title: "Dashboards are not decisions",
      body: "A governance product earns trust when it helps someone act, not when it displays everything the backend can emit.",
    },
    {
      label: "Lesson",
      title: "One model can still serve many altitudes",
      body: "The hard part is shared meaning across repository, org, and reporting views — not separate apps for each audience.",
    },
    {
      label: "Lesson",
      title: "Compliance UX is emotional design",
      body: "Mandatory tools need progressive disclosure, fair explanation, and a clear path out of a red state.",
    },
  ],
};
