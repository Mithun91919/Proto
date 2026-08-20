import type { CaseStudy } from "./types";

export const supplyChainOperationsStudy: CaseStudy = {
  slug: "supply-chain-operations",
  label: "Supply Chain Operations Platform",
  org: "Walmart Global Tech",
  timeframe: "2021–2022",
  discipline: "Enterprise operations · Platform UX",
  title: "Creating navigation that helps operations teams find the right tool faster",
  subtitle:
    "A global supply-chain platform had become the entry point to 139 operational modules. As the platform grew, its homepage became harder to navigate. I co-led the redesign with one goal: help people spend less time finding a tool and more time using it.",
  story:
    "A global supply-chain platform had become the entry point to 139 operational modules used across Walmart.com, Online Grocery, and international markets. As the platform grew, its homepage became harder to navigate. Finding the right tool meant scanning a large collection of modules, remembering where something lived, or relying on prior knowledge. I co-led the redesign of the platform's information architecture, navigation, and landing experience with one goal: help people spend less time finding a tool and more time using it.",
  contributions: [
    "Information architecture restructuring for 139 modules",
    "Navigation design and user evaluation",
    "Landing page and homepage redesign",
    "Search functionality and information discovery",
    "Personalization features (pins, recent modules)",
  ],
  role: "UX Designer; co-led with another designer",
  scope: [
    "Homepage and navigation redesign",
    "Information architecture reorganization",
    "Search experience and discoverability",
    "Personalization layer design",
    "User research and moderated testing",
  ],
  metrics: [
    { value: "Nearly 1M", label: "monthly unique visitors" },
    { value: "139", label: "operational modules" },
    { value: "62%", label: "reduction in time spent on landing page" },
  ],
  chapters: [
    {
      number: "01",
      title: "The homepage had become a bottleneck",
      intro:
        "The landing page was never meant to be a destination. It was the front door to operational tools people needed to do their jobs.",
      body: [
        "But more capability had been added over time without enough structure around it. Related modules were difficult to identify, everyone started from essentially the same experience, frequently used tools could not be saved, and users who already knew what they wanted still lacked a fast route to it.",
        "Before changing the interface, we needed to fix the structure underneath it.",
      ],
    },
    {
      number: "02",
      title: "We reorganised the platform before redesigning the navigation",
      intro:
        "We worked with users and teams across the platform to understand what modules did, where they belonged, and how people thought about them in everyday work.",
      body: [
        "Instead of treating the homepage as one large catalogue, related capabilities were grouped into a clearer hierarchy: Category → Module → Sub-module.",
        "That information architecture became the foundation for every navigation decision that followed.",
      ],
      callout:
        "The problem was not where to put the menu. It was creating a structure people could understand.",
    },
    {
      number: "03",
      title: "Two navigation ideas went in front of users",
      intro:
        "With the new structure in place, we explored two directions: a top-navigation model and a persistent left-navigation model.",
      body: [
        "Rather than choosing internally, we evaluated both concepts through moderated sessions with users representing different operational groups and markets.",
        "The left-navigation model consistently made more sense for the depth of the platform. It gave categories room to grow, supported longer module names, stayed available as users moved through the product, and could collapse when more workspace was needed.",
        "Feedback on the alternative still improved the final design, including how controls such as market selection were consolidated into the navigation.",
      ],
    },
    {
      number: "04",
      title: "Then we made the front door work differently for different people",
      intro:
        "The platform contained 139 modules, but most people relied on only a small working set.",
      body: [
        "That changed the design problem from 'make everything equally visible' to 'make the right things easier to return to.'",
        "The redesigned experience introduced three faster paths: Pins for frequently used modules, Recent modules for returning to ongoing work without setup, and Search for users who already knew what they needed.",
      ],
    },
    {
      number: "05",
      title: "The best outcome was people leaving the homepage faster",
      intro:
        "In many digital products, more time spent can look like engagement. Here, the opposite was true.",
      body: [
        "The purpose of the landing page was to route people into operational work as quickly as possible. After the new information architecture, navigation, search, and personalisation were introduced, time spent on the landing page fell by 62%.",
        "That was the behaviour we wanted: less time navigating, faster access to the work that mattered.",
      ],
    },
    {
      number: "06",
      title: "What changed",
      intro:
        "The redesign gave the platform a scalable structure for new modules, persistent navigation across the experience, direct search, and personal routes back into frequently used tools.",
      body: [
        "More importantly, the homepage became what it was supposed to be: a way through the platform, not a place users had to spend time figuring out.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Navigation problems are often structure problems first",
      body: "Moving a menu does not help if people still do not understand how the product is organised.",
    },
    {
      label: "Insight",
      title: "Sometimes lower engagement is the better experience",
      body: "Metrics only make sense in the context of what the product is supposed to help someone accomplish.",
    },
  ],
};
