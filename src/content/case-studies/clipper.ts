import type { CaseStudy } from "./types";

export const clipperCase: CaseStudy = {
  slug: "portfolio-management",
  label: "Portfolio Management Platform",
  internalName: "Clipper",
  org: "Walmart Global Tech",
  timeframe: "2022–Present",
  discipline: "Platform, Enterprise",
  title: "Replacing five portfolio tools with one connected platform.",
  subtitle:
    "Portfolio planning was split across separate systems for people, products, initiatives, approvals, and strategic work. I led the experience from the initial platform architecture through staged rollout, migration, and adoption.",
  story:
    "Portfolio planning had become a reconciliation job. Product data lived in one tool, people in another, initiatives in spreadsheets, and leaders spent planning cycles stitching conflicting information together. I joined at day zero and helped shape a six-module platform from the first whiteboard through multi-year launches, migrations, and strategic goal management — so the organisation could finally share one operating model.",
  hero: {
    mp4: "/work/clipper/hero.mp4",
    webm: "/work/clipper/hero.webm",
    poster: "/work/clipper/poster.jpg",
    aspect: 1600 / 1046,
    caption:
      "Prototype — a profile view resolving people, product, and initiative allocations in one place.",
  },
  contributions: [
    "Joined at inception and helped define the module architecture and shared platform shell.",
    "Led end-to-end design across Manager, People, Products, Initiatives, Intake, and Goals.",
    "Ran continuous research through 50+ sessions and 45+ demos, including live Break Dance pilots.",
    "Designed migration, approval, data-quality, and decommission experiences across five legacy tools.",
    "Evolved the platform from system of record into strategic alignment with Goals / Align.",
  ],
  role: "UX Designer → Senior UX Designer",
  scope: [
    "Platform architecture",
    "IA",
    "Research",
    "Migration",
    "Goal management",
  ],
  metrics: [
    { value: "6K+", label: "Monthly users" },
    { value: "5→1", label: "Platform consolidation" },
    { value: "6", label: "Connected modules" },
  ],
  chapters: [
    {
      number: "01",
      title: "Here's what we built",
      intro:
        "Rather than six equal feature tours, the platform reads as three jobs: understand the portfolio, operate it, and align it to strategy.",
      highlights: [
        {
          title: "Understand the portfolio",
          body: "People, Products, and Initiatives give leaders and operators one place to see ownership, allocation, and portfolio structure.",
        },
        {
          title: "Operate the portfolio",
          body: "Manager, Intake, approvals, and data-quality workflows replace cross-tool admin and spreadsheet handoffs.",
        },
        {
          title: "Align the portfolio",
          body: "Goals connect strategic commitments to execution with roll-ups, status, and recovery paths at leadership scale.",
        },
        {
          title: "Migrate without a big-bang cutover",
          body: "Modules launched in stages, coexisted with legacy tools, and retired old workflows only when the bridge was ready.",
        },
      ],
      visuals: [
        "VISUAL: Before → After ecosystem map — fragmented tools to Understand / Operate / Align.",
        "VISUAL: Module architecture with shared portfolio data layer under six modules.",
      ],
    },
    {
      number: "02",
      title: "The organisation had data, but not a shared operating model",
      body: [
        "There was no single source of truth. Product, workforce, initiative, application, finance, and planning data lived in separate systems with different ownership models.",
        "Planning required manual reconciliation. Approval workflows were fragmented. Leaders could inspect individual systems but could not reliably roll people, cost, delivery, and strategy into one view. Data-quality problems accumulated quietly until they surfaced too late.",
      ],
      callout:
        "How might we replace several disconnected portfolio tools with one coherent system without forcing every user into the same interface?",
      visuals: [
        "VISUAL: Legacy capability map — tools across the top, overlapping needs underneath.",
      ],
    },
    {
      number: "03",
      title: "Who's actually using the same portfolio data",
      intro:
        "One data model had to serve radically different definitions of done.",
      highlights: [
        {
          title: "Engineering managers",
          body: "Create products and teams, manage allocations, and need fast workflows with clear status and recovery paths.",
        },
        {
          title: "Data-quality and finance teams",
          body: "Find inaccurate records, understand ownership and cost relationships, and keep audit trails without spreadsheet archaeology.",
        },
        {
          title: "Product and technology leaders",
          body: "Understand how people, products, initiatives, and funding relate from a single team to a business segment.",
        },
        {
          title: "Goal owners and senior leaders",
          body: "Create, scan, and roll up strategic commitments while keeping strategy linked to execution.",
        },
      ],
      callout:
        "The core UX tension was not density alone. It was one model serving different levels of responsibility, scale, and decision-making.",
    },
    {
      number: "04",
      title: "The insight: architecture before interfaces",
      intro:
        "A one-to-one recreation of the old tools would have preserved the fragmentation under a new brand. The consequential decision was to reorganise around user and data domains.",
      insights: [
        {
          label: "Architecture",
          title: "Modules own clear domains",
          body: "People, Products, Initiatives, Manager, Intake, and Goals each had a job — and shared one portfolio model underneath.",
        },
        {
          label: "Delivery",
          title: "Staged replacement beats big-bang",
          body: "Modules could launch when ready and gradually take over work from the systems they were replacing.",
        },
        {
          label: "Research",
          title: "Pilots are part of the product",
          body: "Break Dance sessions put realistic work in front of real users before broader release — catching recovery, language, and density issues reviews missed.",
        },
        {
          label: "Change",
          title: "The bridge is the product",
          body: "In enterprise transformation, coexistence, messaging, and migration states are design work — not an afterthought.",
        },
      ],
    },
    {
      number: "05",
      title: "Understand · Operate · Align, up close",
      intro:
        "The six-module architecture is supporting evidence. The product story is the three jobs.",
      highlights: [
        {
          title: "People, Products, Initiatives",
          body: "Hierarchy and filtering had to work for a manager checking one team and a leader scanning hundreds of people and programmes on the same model.",
        },
        {
          title: "Manager, Intake, data quality",
          body: "Creation, approvals, and remediation became structured workflows. Allocation errors improved from roughly 4% to 2.2% as controls matured.",
        },
        {
          title: "Goals / Align",
          body: "At launch: 1,400+ goals across 14 themes. Leaders scan portfolios; contributors update status; at-risk goals require a path to recovery.",
        },
      ],
      visuals: [
        "VISUAL: People hierarchy at team vs leadership scale.",
        "VISUAL: Goal dashboard + contributor status update side by side.",
        "VISUAL: Migration timeline — legacy systems replaced module by module.",
      ],
    },
    {
      number: "06",
      title: "Impact, separated honestly",
      body: [
        "Reach: 6,000+ monthly active users, six major modules, 50+ research sessions, and adoption across portfolio, engineering, finance, and leadership workflows.",
        "Operational outcomes from internal reporting include roughly 50% lower support-ticket volume, faster reconciliation, and AI-assisted description work reported 60–70% faster.",
        "Broader programme reporting records more than $2.65M in combined cost and automation savings and 5,500+ days of manual effort eliminated. Those figures describe product, engineering, operations, migration, and adoption together — not design alone.",
      ],
      visuals: [
        "VISUAL: Three-column impact block — Reach / Operational / Business.",
      ],
    },
  ],
  lessons: [
    {
      label: "Lesson",
      title: "Architecture is the product decision",
      body: "The hardest work was deciding how disconnected systems become one mental model — then helping thousands of users cross the bridge without breaking planning cycles.",
    },
    {
      label: "Lesson",
      title: "Live contact beats internal review",
      body: "Break Dance sessions showed that error language, state recovery, and browser behaviour determine whether a workflow feels trustworthy.",
    },
    {
      label: "Lesson",
      title: "Consolidation can become behaviour change",
      body: "Earlier modules improved work people already did. Goals asked the platform to shape how strategic commitments are structured and reviewed.",
    },
  ],
};
