import type { CaseStudyV2 } from "./types";

/**
 * Real content, drafted from `projects/bb-daily/web/bb-daily-web.md` (the
 * approved public draft). First real migration into the v2 section system.
 */
export const bbDaily: CaseStudyV2 = {
  slug: "bb-daily",
  depth: "medium",
  projectLabel: "bb daily",
  headline: "Designing both sides of a recurring delivery service",
  summary:
    "bb daily was a subscription service for everyday essentials such as milk, dairy, bakery, fruits, vegetables, and other frequently purchased products.",
  company: "bigbasket",
  year: "2019–2020",
  role: "Research & UX Design",
  disciplines: ["Consumer commerce", "Operations UX", "Mobile"],
  metrics: [
    { value: "10+", label: "cities" },
    { value: "1.5M+", label: "users" },
    { value: "120K", label: "average daily deliveries" },
  ],
  tags: ["Mobile", "Operations", "E-commerce"],
  heroMedia: {
    src: "/work/bbdaily/8f79fb_20203531c98e4bd986f2bbf39a470197~mv2.avif",
    alt: "bb daily customer app and operations app as two sides of one service",
  },
  accent: "#059669",
  accentSoft: "#d1fae5",
  sections: [
    {
      type: "hero",
      variant: "cinematic",
      grid: "hidden",
      eyebrow: "bb daily · bigbasket",
      headline: "Designing both sides of a recurring delivery service",
      summary:
        "I worked across both sides of the service — the Android and iOS customer experience and an Android operations product used to coordinate the work behind each delivery.",
      media: {
        src: "/work/bbdaily/8f79fb_20203531c98e4bd986f2bbf39a470197~mv2.avif",
        alt: "bb daily customer app and operations app as two sides of one service",
      },
    },
    {
      type: "metricMoment",
      dominant: { value: "1.5M+", label: "users" },
      supporting: [
        { value: "10+", label: "cities" },
        { value: "120K", label: "average daily deliveries" },
      ],
      context:
        "Scale figures from the documented product period; they are not presented as outcomes caused by the design work.",
    },
    {
      type: "editorial",
      eyebrow: "The product model",
      heading: "Recurring grocery shopping is not a checkout problem",
      body: [
        "Most grocery experiences are designed around a single order. bb daily needed to support a relationship that continued across days and weeks.",
        "Before designing the flows, we explored how the service should sit alongside the main bigbasket product: as a separate app, an integrated experience, or a subscription feature inside the parent product. The direction kept bb daily as a focused subscription experience while connecting it back to the broader bigbasket ecosystem.",
      ],
      statement:
        "The product had to make repetition feel convenient without making customers feel locked into a routine.",
    },
    {
      type: "fullWidthMedia",
      caption: "Documented user feedback from the period",
      media: {
        src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%204%20(1).jpg",
        alt: "A collage of user feedback documenting friction points in the existing app experience",
        aspect: 5034 / 2481,
      },
    },
    {
      type: "editorial",
      eyebrow: "The customer side",
      heading: "We designed around the routine, not a single order",
      body: [
        "A first-time customer needed help creating a recurring order. A returning customer was more likely to manage an existing routine or add something to an upcoming delivery. The home experience reflected those different states rather than giving everyone the same starting point.",
        "Subscriptions could be scheduled daily, on alternate days, weekly, or on custom dates. Customers could also review past and upcoming deliveries by date and add an item to a specific delivery without rebuilding the subscription.",
        "Serviceability was part of the experience too. Because delivery was available only to supported apartments and gated communities, customers could identify eligible locations, search manually, or register interest when their address was not yet supported.",
      ],
    },
    {
      type: "mediaSequence",
      eyebrow: "The working prototype",
      steps: [
        {
          media: {
            mov: "/work/bbdaily/Screen%20Recording%202020-03-13%20at%204.46.55%20PM.mov",
            poster: "/work/bbdaily/8f79fb_20203531c98e4bd986f2bbf39a470197~mv2.avif",
            alt: "Starting a recurring order in the customer app",
            aspect: 982 / 1806,
          },
          label: "Start a recurring order",
        },
      ],
    },
    {
      type: "systemDiagram",
      eyebrow: "Behind every subscription",
      heading: "Every subscription created work in the physical world",
      style: "flow",
      nodes: [
        { id: "subscription", label: "Customer subscription" },
        { id: "procurement", label: "Procurement" },
        { id: "inventory", label: "Inventory" },
        { id: "shipment", label: "Shipment" },
        { id: "delivery", label: "Delivery" },
      ],
    },
    {
      type: "editorial",
      body: [
        "Behind every recurring order, six operational roles coordinated goods arriving from vendors, inventory being sorted and packed, shipments moving to delivery locations, and executives completing doorstep deliveries within a narrow morning window.",
        "Field visits showed how much of that process depended on paperwork and manual handoffs. When inventory moved between people and locations, it was difficult to maintain an accurate picture of what had arrived, what had been packed, and what still needed to move.",
      ],
    },
    {
      type: "fullWidthMedia",
      caption: "Field research: the warehouse and inventory operations behind each delivery",
      media: {
        src: "/work/bbdaily/Artboard%20Copy%2011.jpg",
        alt: "Operations-app screens for tracking bags, crates, and deliveries, overlaid on a warehouse photograph",
        aspect: 4800 / 2760,
      },
    },
    {
      type: "splitTextMedia",
      ratio: "5/7",
      mediaSide: "right",
      eyebrow: "The operations app",
      heading: "One operations app supported different jobs",
      body: [
        "Instead of making every role navigate the same interface, the experience changed according to the person's responsibilities after login. Each role could focus on the information and actions relevant to its part of the process while contributing to the same operational record.",
        "The app supported receiving and shipment creation, inventory movement, delivery execution, and payment tracking for delivery executives.",
      ],
      media: {
        src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2011.jpg",
        alt: "Operations app shipment-receiving flow, showing milk shipment intake and confirmation",
        aspect: 4581 / 2340,
      },
    },
    {
      type: "mediaSequence",
      eyebrow: "A delivery executive's day",
      steps: [
        {
          media: {
            src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2010.jpg",
            alt: "Logging in as a customer experience executive",
            aspect: 4581 / 2340,
          },
          label: "Login",
        },
        {
          media: {
            src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2012.jpg",
            alt: "Completing a delivery at a specific address",
            aspect: 4581 / 2340,
          },
          label: "Deliver",
        },
        {
          media: {
            src: "/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2013.jpg",
            alt: "Tracking daily and monthly earnings",
            aspect: 4581 / 2340,
          },
          label: "Track earnings",
        },
      ],
    },
    {
      type: "editorial",
      eyebrow: "Designing for the job, not the screen",
      heading: "Designing around the realities of delivery work",
      body: [
        "The delivery experience had to fit the physical job, not an idealised route on a screen. Executives worked within a narrow morning window, so the workflow supported the way they moved through buildings and completed many deliveries efficiently.",
        "Prototype testing focused on whether key tasks could be completed successfully, how long they took, and how usable the experience felt in the context of the job.",
      ],
    },
    {
      type: "mediaSequence",
      eyebrow: "The working prototype",
      steps: [
        {
          media: {
            mov: "/work/bbdaily/Screen%20Recording%202020-03-13%20at%206.37.25%20PM.mov",
            poster: "/work/bbdaily/8f79fb_20203531c98e4bd986f2bbf39a470197~mv2.avif",
            alt: "Reviewing the delivery route for the morning window",
            aspect: 982 / 1886,
          },
          label: "Plan the route",
        },
        {
          media: {
            mov: "/work/bbdaily/Screen%20Recording%202020-03-13%20at%204.11.42%20PM.mov",
            poster: "/work/bbdaily/8f79fb_20203531c98e4bd986f2bbf39a470197~mv2.avif",
            alt: "Navigating to a delivery address",
            aspect: 982 / 1698,
          },
          label: "Navigate to the address",
        },
      ],
    },
    {
      type: "reflection",
      heading: "What stayed with me",
      body: [
        "Working across both sides of bb daily changed how I thought about end-to-end product design.",
        "A customer action on one screen could create work for several people in the physical world. Designing the service meant understanding that whole chain — from setting a recurring delivery to the operational system required to fulfil it.",
      ],
      conclusion:
        "The interface was only one part of the experience. The product was the connection between the promise and the operation behind it.",
    },
  ],
};
