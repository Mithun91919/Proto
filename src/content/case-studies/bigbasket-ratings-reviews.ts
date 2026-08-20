import type { CaseStudy } from "./types";

export const bigbasketRatingsReviewsStudy: CaseStudy = {
  slug: "bigbasket-ratings-reviews",
  label: "Ratings & Reviews",
  org: "bigbasket",
  timeframe: "2019",
  discipline: "Consumer commerce · Cross-platform UX",
  title: "Making product feedback easier to give — and easier to understand",
  subtitle:
    "Ratings and reviews help shoppers make decisions, but asking someone to write a useful review is harder than asking them to tap a star. I worked on a cross-platform experience for beauty products.",
  story:
    "Ratings and reviews help shoppers make decisions, but asking someone to write a useful review is harder than asking them to tap a star. I worked on a cross-platform ratings and reviews experience for beauty products across bigbasket's Android, iOS, web, and mobile-web experiences.",
  contributions: [
    "Cross-platform UX consistency",
    "Configurable feedback questionnaire design",
    "Review composer interface design",
    "Review display and aggregation",
    "Image and text support",
    "Email review invitations",
    "Motion design and prototyping",
  ],
  role: "UX Design",
  scope: [
    "Android platform",
    "iOS platform",
    "Web platform",
    "Mobile web platform",
    "Rating collection and display",
    "Review writing and submission",
    "Feedback questionnaires",
    "Email communication",
  ],
  metrics: [],
  chapters: [
    {
      number: "01",
      title: "One feedback system had to work everywhere",
      intro:
        "The experience needed to feel consistent whether a customer was rating a product on mobile or reading reviews on the web.",
      body: [
        "Rather than designing each surface independently, we defined reusable patterns for collecting ratings, writing reviews, and presenting review information across platforms.",
      ],
    },
    {
      number: "02",
      title: "A star rating wasn't enough for every product",
      intro:
        "For beauty products, useful feedback often depends on more specific questions: how something felt, how it performed, or what someone thought about its packaging and results.",
      body: [
        "We introduced a configurable product-feedback questionnaire that could combine text, single-select, multi-select, and emoji-based inputs depending on the information a product needed.",
      ],
    },
    {
      number: "03",
      title: "Reviews could carry more context",
      intro:
        "Customers could add a written review and images alongside their rating, creating room for feedback that went beyond a single score.",
      body: [
        "The display experience then brought the overall rating and individual reviews together so shoppers could understand both the summary and the detail behind it.",
      ],
    },
    {
      number: "04",
      title: "The experience continued beyond the product page",
      intro:
        "Email communication provided another entry point by inviting customers to review products they had already purchased.",
      body: [
        "A motion prototype was also created to communicate key transitions and interaction behaviour during implementation.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Review systems serve two audiences at once",
      body: "The design has to make contributing feedback lightweight while still collecting enough context for that feedback to be meaningful to other shoppers.",
    },
  ],
};
