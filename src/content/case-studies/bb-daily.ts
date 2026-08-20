import type { CaseStudy } from "./types";

export const bbDailyStudy: CaseStudy = {
  slug: "bb-daily",
  label: "bb daily",
  internalName: "bb daily",
  org: "bigbasket",
  timeframe: "2019–2020",
  discipline: "Consumer commerce · Operations UX · Mobile",
  title: "Designing both sides of a recurring delivery service",
  subtitle:
    "bb daily was a subscription service for everyday essentials such as milk, dairy, bakery, fruits, vegetables, and other frequently purchased products. Unlike a conventional grocery order, the customer promise repeated every day.",
  story:
    "I worked across research and UX design for both sides of that service: how a household starts and manages a routine, and how the operation behind it receives, sorts, ships, and delivers that routine reliably. The main bigbasket experience was built around choosing products, placing an order, and checking out. bb daily needed to support something different: a relationship that continues across days and weeks.",
  contributions: [
    "Research and user discovery across customer and operations contexts",
    "Product direction exploration (separate app vs. forked experience vs. subscription feature)",
    "Customer subscription and onboarding flow design",
    "Recurring delivery management interface",
    "Operations role-aware workflow design",
    "End-to-end service model design",
    "Cross-functional coordination between customer and operational experiences",
  ],
  role: "Research & UX Design",
  scope: [
    "Android & iOS customer experience",
    "Android operations experience",
    "Subscription onboarding and frequency selection",
    "Recurring order management by date",
    "Serviceability and address validation",
    "Operations roles and workflows",
    "Inventory receiving and shipment creation",
    "Delivery execution and tracking",
  ],
  metrics: [
    { value: "10+", label: "cities" },
    { value: "15 lakh+", label: "users" },
    { value: "1.2 lakh", label: "average daily deliveries" },
  ],
  chapters: [
    {
      number: "01",
      title: "One service, two connected products",
      intro:
        "bb daily required thinking about both the customer's routine and the operation responsible for keeping that routine reliable.",
      body: [
        "Customer app — start a subscription, shape delivery frequency, confirm serviceability, and manage upcoming deliveries.",
        "Operations app — role-aware workflows for receiving inventory, creating shipments, completing customer deliveries, and tracking delivery-related earnings across a six-role operation.",
      ],
    },
    {
      number: "02",
      title: "Repetition changed the product model",
      intro:
        "Before designing the experience, we explored three possible product directions: a separate app, a forked experience within bigbasket, or a subscription feature inside the parent product.",
      body: [
        "Research across adjacent service models helped us compare those options. The resulting direction kept bb daily as a focused subscription experience while connecting it back to the wider bigbasket ecosystem.",
        "The design challenge was not adding a repeat button. It was designing a routine people could start, shape, manage, and return to.",
      ],
      callout:
        "The main bigbasket experience was built around choosing products, placing an order, and checking out. bb daily needed to support something different: a relationship that continues across days and weeks.",
    },
    {
      number: "03",
      title: "Designing the customer promise",
      intro:
        "A first-time customer needed help establishing a routine. A returning customer was more likely to manage an existing one or add something to an upcoming delivery.",
      body: [
        "The home experience changed with the customer state: new users were guided toward starting a subscription, while returning users got faster access to existing deliveries and add-on items.",
        "Subscriptions supported daily, alternate days, weekly, and custom dates, letting customers shape delivery around how they actually consumed an item rather than forcing every product into the same schedule.",
        "bb daily could deliver only to activated apartments and gated communities. The experience surfaced nearby supported locations, allowed manual search, and gave people outside the service area a way to register their address.",
      ],
      highlights: [
        {
          title: "Start differently depending on the relationship",
          body: "New users were guided toward starting a subscription, while returning users got faster access to existing deliveries and add-on items.",
        },
        {
          title: "Make frequency flexible",
          body: "Subscriptions supported daily, alternate days, weekly, and custom dates, letting customers shape delivery around how they actually consumed an item.",
        },
        {
          title: "Treat serviceability as part of onboarding",
          body: "The experience surfaced nearby supported locations, allowed manual search, and gave people outside the service area a way to register their address.",
        },
      ],
    },
    {
      number: "04",
      title: "Managing the routine mattered as much as creating it",
      intro:
        "A recurring service cannot stop at subscription setup. Customers needed a place to manage an ongoing household routine.",
      body: [
        "Customers could review past and upcoming deliveries by date, understand what was scheduled, and quickly add an item to a specific delivery. The product therefore became a place to manage an ongoing household routine, not just create one.",
      ],
    },
    {
      number: "05",
      title: "But the customer app was only half the product",
      intro:
        "The promise shown on a customer's screen depended on a time-sensitive physical operation happening behind it.",
      body: [
        "Six operational roles coordinated the daily flow. Goods arrived from different vendors, were sorted and packed for different locations, and moved to delivery executives for early-morning doorstep fulfilment.",
        "Field research showed that much of this process relied on paper and manual coordination, making inventory movement and handoffs difficult to track reliably.",
        "That changed the problem from designing a delivery interface to designing the connection between a recurring customer promise and the operation responsible for keeping it.",
      ],
      callout:
        "The product was the connection between the promise and the operation behind it.",
    },
    {
      number: "06",
      title: "One operations app, different jobs",
      intro:
        "Rather than creating a separate application for every operational role, the Android product used login and role context to surface the relevant workflow for each person.",
      body: [
        "The experience digitised key parts of fulfilment: receiving goods, creating shipments for delivery locations, executing deliveries within a narrow operating window, and tracking delivery-related earnings.",
        "The interface was only one part of the work. The larger challenge was translating a paper-heavy, multi-role physical process into a shared digital workflow without losing the context each role needed to do its job.",
      ],
    },
    {
      number: "07",
      title: "What this changed in how I think about products",
      intro:
        "Working across both sides of bb daily changed how I understood end-to-end product design.",
      body: [
        "The customer experience shaped the promise: what will arrive, when, and how easily the routine can change. The operations experience shaped whether that promise could actually be fulfilled through inventory, handoffs, deadlines, and people in the field.",
        "The product was not just either app. It was the connection between the promise and the operation behind it.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "End-to-end product design requires understanding both sides",
      body: "A recurring service cannot be designed by optimizing the customer experience alone. The operational reality has to work with the promise being made.",
    },
    {
      label: "Insight",
      title: "The customer promise is only valuable when the operation can keep it",
      body: "Designing the interface is just one part of the work. The design has to account for the people, processes, and systems that have to execute on that promise every day.",
    },
    {
      label: "Insight",
      title: "Repetition changes the product model",
      body: "A recurring service is not a transactional product with a repeat button. It requires rethinking how people establish, manage, and adjust their routine.",
    },
  ],
};
