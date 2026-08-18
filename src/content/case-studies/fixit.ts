import type { CaseStudy } from "./types";

export const fixitCase: CaseStudy = {
  slug: "store-support",
  label: "Store Support Platform",
  internalName: "FixIt",
  org: "Walmart Global Tech",
  timeframe: "2020–2021",
  discipline: "Mobile, Operations",
  title:
    "Redesigning IT support so store associates can diagnose and resolve issues before raising a ticket.",
  subtitle:
    "I redesigned the self-service support experience around clearer classification, guided troubleshooting, search, location context, and better escalation information.",
  story:
    "Store associates open a support app when something on the floor is already broken. The existing experience made people guess where problems belonged, offered little help before ticket creation, and felt disconnected from the rest of the internal product ecosystem. I redesigned the mobile and web experience so associates could diagnose, self-resolve, or escalate with better context — without creating more work in the middle of their shift.",
  contributions: [
    "Owned end-to-end mobile redesign and web dashboard redesign.",
    "Led research-informed information architecture for issue paths.",
    "Designed guided troubleshooting before ticket creation.",
    "Improved search, onboarding, location capture, and feedback flows.",
    "Migrated the experience onto the organisation’s enterprise design system.",
  ],
  role: "User Experience Designer",
  scope: [
    "Mobile UX",
    "IA",
    "Self-service",
    "Design systems",
    "Support workflows",
  ],
  metrics: [
    { value: "~5,900", label: "Daily users" },
    { value: "~580K", label: "Device footprint" },
    { value: "7,000+", label: "Weekly searches" },
  ],
  chapters: [
    {
      number: "01",
      title: "Here's what we built",
      highlights: [
        {
          title: "Mental-model IA",
          body: "Issue paths organised around how associates think about problems — not how the backend categorised tickets.",
        },
        {
          title: "Self-resolution before escalation",
          body: "Guided troubleshooting gives people a chance to fix common issues before creating a ticket.",
        },
        {
          title: "Search that leads somewhere",
          body: "Results and empty states point to a next step instead of a dead end.",
        },
        {
          title: "Better context for support teams",
          body: "Location, structured details, and clearer intake improve what centralised teams receive.",
        },
      ],
      visuals: [
        "VISUAL: Before/after home and ticket flow.",
        "SYSTEM MAP: Issue → diagnose / self-resolve / escalate → better support context.",
      ],
    },
    {
      number: "02",
      title: "Getting help should not create more work",
      body: [
        "Associates started from a flat list of categories with little guidance. Search returned an unstructured list. Tickets were created too early. Mobile and web felt like separate products.",
      ],
      callout:
        "These interruptions happen in the middle of floor work — so the experience needs to be fast, clear, and forgiving.",
    },
    {
      number: "03",
      title: "Who we designed for",
      highlights: [
        {
          title: "Store-floor associates",
          body: "Need the fastest path to a working tool or a confident escalation.",
        },
        {
          title: "New associates",
          body: "Need contextual guidance because they do not yet know the system’s structure.",
        },
        {
          title: "Centralised support teams",
          body: "Need higher-quality intake so they spend less time reconstructing what happened on the floor.",
        },
      ],
    },
    {
      number: "04",
      title: "The insight: diagnose before you file",
      insights: [
        {
          label: "IA",
          title: "Start from mental models",
          body: "If people cannot find the right path, every downstream screen is a tax on a broken first decision.",
        },
        {
          label: "Flow",
          title: "Self-service is a first-class journey",
          body: "Ticket creation should be the outcome of failed resolution — not the default homepage action.",
        },
        {
          label: "Systems",
          title: "Redesigns can carry platform standards",
          body: "Migrating onto the enterprise design system reduced fragmentation across internal tools.",
        },
        {
          label: "Support",
          title: "Context is part of the UX",
          body: "Better location and structured details help the human on the other end as much as the associate holding the phone.",
        },
      ],
    },
    {
      number: "05",
      title: "The redesigned experience",
      body: [
        "The shipped experience reworked home, search, troubleshooting, ticket creation, onboarding, and the web dashboard used by support teams. Qualitative evidence supported clearer paths and better intake; some quantitative impact claims remain pending approval for public use.",
      ],
      visuals: [
        "VISUAL: Guided troubleshooting states before ticket creation.",
        "VISUAL: Mobile + web consistency on the enterprise design system.",
      ],
    },
  ],
  lessons: [
    {
      label: "Lesson",
      title: "Time pressure changes the brief",
      body: "Floor tools are judged in interrupted minutes. Clarity and recovery matter more than feature completeness.",
    },
    {
      label: "Lesson",
      title: "IA is the first support feature",
      body: "If the category model is wrong, no amount of visual polish fixes the wrong ticket.",
    },
    {
      label: "Lesson",
      title: "Self-service needs an honest exit",
      body: "The best troubleshooting flows make escalation feel like a continuation, not a failure.",
    },
  ],
};
