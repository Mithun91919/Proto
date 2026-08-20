import type { CaseStudy } from "./types";

export const hikeJobsServiceStudy: CaseStudy = {
  slug: "hike-jobs-service",
  label: "Job Discovery & Resume Builder",
  org: "Hike",
  timeframe: "2017",
  discipline: "Product Design · Mobile",
  title: "Helping job seekers move from discovery to application in one mobile experience",
  subtitle:
    "The Jobs Service was an aggregator experience designed to help people discover relevant job opportunities through personalised suggestions and support their applications with a built-in resume builder.",
  story:
    "The Jobs Service was an aggregator experience designed for TOTAL OS to help people discover relevant job opportunities through personalised suggestions and support their applications with a built-in resume builder.",
  contributions: [
    "Product onboarding and preference collection",
    "Job discovery and recommendations interface",
    "Saved jobs and tracking experience",
    "Resume builder feature design",
    "Information architecture and user flows",
    "Competitive research and analysis",
  ],
  role: "Product Design",
  scope: [
    "UI/UX design",
    "Research and competitive analysis",
    "Visual design",
    "Onboarding experience",
    "Job search and filtering",
    "Resume builder feature",
    "Cross-flow continuity",
  ],
  metrics: [],
  chapters: [
    {
      number: "01",
      title: "Better discovery started with understanding what someone wanted",
      intro:
        "The onboarding experience collected user preferences so the product could move beyond a generic job feed and surface more relevant opportunities.",
      body: [
        "Search, categories, keywords, and recommendations then provided multiple paths into the same job marketplace depending on how specific the user's intent was.",
      ],
    },
    {
      number: "02",
      title: "Job hunting needed a place to return to",
      intro: "Discovery is rarely a one-session task.",
      body: [
        "The experience included a personalised area where users could save opportunities, track jobs, and return to their search without starting again each time.",
      ],
    },
    {
      number: "03",
      title: "The product also helped with the application itself",
      intro: "For users without a ready resume, a built-in resume builder reduced the gap between finding a relevant role and being able to apply for it.",
      body: [
        "The feature was researched alongside the broader job-discovery experience so that creating a resume became part of the application journey rather than a separate utility.",
      ],
    },
    {
      number: "04",
      title: "Designing the system around discovery",
      intro:
        "Competitor research and information-architecture work helped define the major flows across onboarding, search, recommendations, saved jobs, and resume creation.",
      body: [
        "The resulting product connected those pieces into a single mobile journey: understand the user, surface relevant opportunities, help them keep track of what matters, and support the next step toward applying.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Personalisation reduces distance to action",
      body: "Combining recommendations with tools that help users organise opportunities and become more ready to apply makes personalisation useful rather than just novel.",
    },
  ],
};
