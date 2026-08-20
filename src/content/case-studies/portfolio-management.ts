import type { CaseStudy } from "./types";

export const portfolioManagementStudy: CaseStudy = {
  slug: "portfolio-management",
  label: "Portfolio Management Platform",
  org: "Walmart Global Tech",
  timeframe: "2022–Present",
  discipline: "Enterprise platform · Product design",
  title: "Replacing five portfolio tools with one connected platform",
  subtitle:
    "Portfolio planning had grown across several disconnected systems. People, products, initiatives, intake, management workflows, and strategic goals lived in different places, which meant teams spent time reconciling information before they could use it.",
  story:
    "I helped shape a 0-to-1 platform that brought those workflows into one connected product and then evolved it over multiple years as legacy systems were migrated and retired. The original challenge looked like a collection of product problems: duplicated data, different workflows, inconsistent terminology, and teams moving between systems to understand the same portfolio. The deeper issue was that the organisation did not have one operating model for the work. Instead of treating the project as five replacement screens, we designed around the jobs the portfolio needed to support.",
  contributions: [
    "Framed consolidation as an operating-model problem, not a UI problem",
    "Designed three interconnected jobs: Understand, Operate, and Align the portfolio",
    "Led migration strategy and bridge design for transitioning from legacy systems",
    "Established shared data model across six connected modules",
    "Expanded platform into strategic goals and conversational experiences",
  ],
  role: "UX Designer → Senior UX Designer",
  scope: [
    "Platform strategy and IA",
    "People and product management interfaces",
    "Initiative planning and tracking",
    "Goals and strategic alignment",
    "Migration and data reconciliation",
  ],
  metrics: [
    { value: "6,000+", label: "Monthly users" },
    { value: "5 → 1", label: "Platform consolidation" },
    { value: "6", label: "Connected modules" },
    { value: "50%", label: "Reduction in support tickets" },
    { value: "800", label: "Hours of manual work reclaimed per week" },
  ],
  chapters: [
    {
      number: "01",
      title: "Five tools had become one organisational problem",
      intro:
        "The challenge was not just replacing disconnected tools — it was clarifying how the organisation managed portfolio information.",
      body: [
        "The original problem looked like a collection of product issues: duplicated data, different workflows, inconsistent terminology, and teams moving between systems to understand the same portfolio.",
        "The deeper issue was that the organisation did not have one operating model for the work.",
        "Instead of treating the project as five replacement screens, we designed around the jobs the portfolio needed to support.",
      ],
      callout:
        "The architecture mattered more than any single module. Each part needed to work independently while contributing to the same portfolio model.",
    },
    {
      number: "02",
      title: "We organised the platform around three jobs",
      intro:
        "The six modules became easier to understand when they were grouped around what people were trying to accomplish.",
      body: [
        "Understand the portfolio: People, Products, and Initiatives created a shared view of who owned what, how work was organised, and where investment was going.",
        "Operate the portfolio: Management and Intake workflows supported the recurring work of maintaining data, requesting changes, reviewing information, and keeping the portfolio current.",
        "Align the portfolio: Goals connected strategic themes to measurable work so leaders could move from portfolio visibility toward execution and accountability.",
      ],
    },
    {
      number: "03",
      title: "We designed the bridge, not only the destination",
      intro:
        "A replacement platform could not ask thousands of users to abandon established workflows overnight.",
      body: [
        "The migration happened in stages. New modules were introduced while legacy systems were still active, data and workflows were reconciled, and older tools were retired only when the replacement path was ready.",
        "That made migration part of the product design problem: users needed to understand where work had moved, what had changed, and which system was now authoritative.",
        "Putting the product in front of users changed how we shipped it. We used frequent demos, research sessions, and live pilot feedback to expose the product before decisions became expensive to reverse.",
      ],
    },
    {
      number: "04",
      title: "The platform kept moving upstream",
      intro:
        "What began as portfolio visibility gradually expanded into strategic execution.",
      body: [
        "The Goals experience introduced a way to connect strategic themes, organisational goals, status, impact, and delivery signals in the same platform. At launch, teams created more than 1,400 goals across 14 strategic themes.",
        "More recently, the same platform data is beginning to surface beyond traditional screens through conversational and tool-based experiences. The interaction surface is changing, but the design problem is familiar: structure complex information so someone can understand it and act with confidence.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Consolidation is an operating-model problem before it is a UI problem",
      body: "Replacing tools only creates value when the workflows, information, and ownership behind them become clearer too.",
    },
    {
      label: "Insight",
      title: "Migration is part of the experience",
      body: "For established enterprise products, the path between old and new can matter as much as the destination.",
    },
  ],
};
