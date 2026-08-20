import type { CaseStudy } from "./types";

export const bbDailyStudy: CaseStudy = {
  slug: "bb-daily",
  label: "bb daily",
  internalName: "bb daily",
  org: "bigbasket",
  timeframe: "2019–2020",
  discipline: "Product Design · Operations Design",
  title: "Designing both sides of a recurring delivery service.",
  subtitle:
    "Daily operations consist of 6 key roles who look after the entire process of procurement, shipping and delivery.",
  story:
    "bb daily was a subscription-based grocery delivery service that operated across 10+ cities. The service required coordinating customer expectations with complex logistics operations. I designed the complete customer experience and the internal operations platform managing inventory, shipments, and same-morning delivery coordination.",
  hero: {
    poster: "/work/bbdaily/8f79fb_20203531c98e4bd986f2bbf39a470197~mv2.avif",
    aspect: 1.6,
    caption: "bb daily — Recurring grocery delivery service",
  },
  contributions: [
    "End-to-end product design for customer app",
    "Operations platform design for internal teams",
    "User research and testing across user groups",
    "Design system development",
  ],
  role: "Lead Product Designer",
  scope: [
    "Customer subscription and ordering",
    "Inventory and procurement",
    "Delivery logistics coordination",
    "Partner and vendor management",
  ],
  metrics: [
    { value: "10+", label: "Cities operational" },
    { value: "1.5M+", label: "Registered users" },
    { value: "120K", label: "Average daily deliveries" },
  ],
  chapters: [
    {
      number: "01",
      title: "The challenge",
      intro: "Managing a grocery delivery service meant balancing customer expectations with operational complexity.",
      body: [
        "bb daily operated on a daily subscription model — customers placed orders the evening before for next-morning delivery. This created tight coordination requirements across procurement, warehouse operations, delivery routing, and customer support.",
        "The challenge wasn't just designing a seamless customer experience. It required building parallel interfaces for warehouse teams managing inventory in real-time, delivery partners tracking routes, and operations managers coordinating across multiple sites.",
      ],
      highlights: [
        {
          title: "Same-morning delivery at scale",
          body: "Coordinating inventory, packing, and delivery across 10+ cities required systems that updated in real-time.",
        },
        {
          title: "Recurring subscription model",
          body: "Customers expected automatic recurring orders but needed flexibility to skip, modify, or pause at any time.",
        },
        {
          title: "Multi-stakeholder coordination",
          body: "Customers, warehouse staff, delivery partners, and operations teams all needed different views of the same data.",
        },
      ],
    },
    {
      number: "02",
      title: "Customer experience design",
      intro:
        "The customer app needed to make subscription management effortless while supporting same-morning delivery coordination.",
      body: [
        "Unlike traditional e-commerce, bb daily worked backwards from delivery time. Customers placed orders the evening before, knowing exactly when they'd arrive the next morning. This predictability had to be central to the interface.",
        "The key insight was separating 'recurring orders' from 'one-time changes'. Customers set their default delivery basket (which items, which days), then made adjustments just for specific dates. This reduced friction for the common case while preserving flexibility.",
      ],
      callout: "Recurring orders meant 80% of transaction decisions were made once, then automated — customers only needed to adjust exceptions.",
      visuals: ["/work/bbdaily/BB_Daily_Milk_Basket Copy 4 (1).jpg"],
    },
    {
      number: "03",
      title: "Operations platform design",
      intro:
        "The operations platform translated customer orders into warehouse and delivery workflows.",
      body: [
        "Unlike the customer app, operations needed to expose complexity and data density. Teams needed to see inventory levels, capacity constraints, delivery routes, and staffing all at once.",
        "The design prioritized real-time signals and exception handling. The baseline was a full-screen dashboard showing today's status — on-time rates, inventory issues, delivery overages. Below that layer, role-specific views let warehouse managers see picking queues, delivery coordinators see route optimization, and operations leads see across-market performance.",
      ],
      visuals: [
        "/work/bbdaily/Screen Recording 2020-03-13 at 4.11.42 PM.mov",
        "/work/bbdaily/Screen Recording 2020-03-13 at 4.46.55 PM.mov",
      ],
      insights: [
        {
          label: "Design principle",
          title: "Transparency reduces coordination overhead",
          body: "When all stakeholders can see current state and constraints, they make better local decisions without waiting for approval.",
        },
      ],
    },
    {
      number: "04",
      title: "Design system for dual-track",
      intro:
        "Customer and operations interfaces needed different conventions but shared underlying logic.",
      body: [
        "The design system organized around 'data patterns' rather than UI components. Things like 'order status', 'inventory level', 'delivery route' had standard representations across both apps. But their presentation differed — customer app surfaced reassurance and clarity, operations app surfaced completeness and diagnostics.",
        "This separation let teams move faster: component work could happen in parallel, and changes to business logic could propagate cleanly.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Recurring transactions change the design problem",
      body: "When most orders are recurring, the question shifts from 'how do I make ordering easy' to 'how do I make the default case automatic and exceptions obvious'.",
    },
    {
      label: "Insight",
      title: "Operations interfaces need real-time transparency",
      body: "Staff making local decisions need visibility into system state, not requests for approval. Dashboard design directly affects coordination speed.",
    },
    {
      label: "Insight",
      title: "Design systems can separate customer experience from operational complexity",
      body: "Shared data patterns with different presentation strategies let customer and operations apps evolve independently while staying coordinated.",
    },
  ],
};
