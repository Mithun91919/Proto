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
    "bb daily was a subscription service for everyday essentials. Designing that experience meant thinking about both the customer routine and the operation behind it.",
  story:
    "bb daily was a subscription service for everyday essentials such as milk, dairy, bakery, fruits, vegetables, and other frequently purchased products. Unlike a conventional grocery order, the customer promise repeated every day. Designing that experience meant thinking about both sides of the service: how a household creates and manages a routine, and how the operation behind it procures, sorts, ships, and delivers that routine reliably.",
  contributions: [
    "Customer subscription experience design",
    "Delivery management interface",
    "Product positioning research",
    "Operations workflow design",
    "Role-based operations platform",
    "Inventory and fulfillment digitization",
    "End-to-end service flow design",
  ],
  role: "Research & UX Design",
  scope: [
    "Android & iOS customer experience",
    "Android operations experience",
    "Subscription onboarding",
    "Recurring order management",
    "Serviceability and address selection",
    "Operations roles and workflows",
    "Inventory, packing, and delivery routing",
  ],
  metrics: [
    { value: "10+", label: "cities" },
    { value: "15 lakh+", label: "users" },
    { value: "1.2 lakh", label: "average daily deliveries" },
  ],
  chapters: [
    {
      number: "01",
      title: "The product question came before the screens",
      intro:
        "A recurring-delivery service behaves differently from the main bigbasket shopping experience. We explored whether bb daily should live as a separate app, as a fork inside bigbasket, or as a subscription feature within the parent product.",
      body: [
        "Research across adjacent service models helped us compare those directions. The resulting approach kept bb daily as a focused subscription experience while connecting it back to the wider bigbasket ecosystem.",
      ],
      callout:
        "The design challenge was not simply adding a repeat button. It was designing for a relationship that continues across days and weeks.",
    },
    {
      number: "02",
      title: "Designing the customer promise",
      intro:
        "A first-time customer needed help establishing a recurring order. A returning customer was more likely to manage an existing routine or add something to an upcoming delivery.",
      body: [
        "The home experience therefore changed with the relationship: new users were guided toward starting a subscription while returning users got faster access to existing deliveries and add-on items.",
        "Recurring purchases also needed flexibility. The subscription flow supported daily, alternate days, weekly, and custom dates, so customers could shape delivery around how they actually consumed an item.",
        "Serviceability was part of onboarding too. bb daily could deliver only to activated apartments and gated communities, so the product surfaced nearby supported locations, allowed manual search, and gave people outside the service area a way to register their address.",
      ],
    },
    {
      number: "03",
      title: "Managing the routine mattered as much as creating it",
      intro:
        "Customers could review past and upcoming deliveries by date and quickly add an item to a specific delivery. This shifted the product from a one-time subscription setup into an experience for managing an ongoing household routine.",
      body: [],
    },
    {
      number: "04",
      title: "The customer experience only worked if the operation could keep the promise",
      intro:
        "Behind the customer app, six operational roles coordinated a time-sensitive early-morning process. Goods arrived from different vendors, were manually sorted and packed for delivery locations, and then moved to delivery executives for doorstep fulfilment.",
      body: [
        "Field research showed how much of that process depended on paper and manual coordination, making inventory movement and handoffs difficult to keep reliable.",
        "This changed the design problem from 'a delivery app' into a connected operational workflow.",
      ],
    },
    {
      number: "05",
      title: "One operations app, different jobs",
      intro:
        "Rather than creating a separate app for every role, the Android operations product used login/role context to surface the relevant workflow for each person.",
      body: [
        "The product digitised key parts of inventory movement and fulfilment: receiving goods, creating shipments for delivery locations, executing routes within a narrow delivery window, and tracking delivery-related earnings.",
      ],
    },
    {
      number: "06",
      title: "What changed for me",
      intro:
        "Working across the customer and operational sides of bb daily changed how I thought about end-to-end product design.",
      body: [
        "The customer app shaped the promise: what will arrive, when, and how easily a routine can change. The operations product shaped whether that promise could actually be fulfilled through real inventory, handoffs, deadlines, and people in the field.",
        "The product was the connection between the promise and the operation behind it.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "End-to-end product design requires understanding both sides",
      body: "The customer experience and the operational reality behind it have to work together or neither one works at all.",
    },
    {
      label: "Insight",
      title: "The customer promise is only valuable when the operation can keep it",
      body: "Designing the interface is just one part of the work. The design has to account for the people, processes, and systems that have to execute on that promise every day.",
    },
  ],
};
