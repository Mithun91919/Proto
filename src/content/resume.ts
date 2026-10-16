/**
 * The résumé, as data. One page, for senior UX roles. Product names are
 * generic because the Walmart work is confidential; every figure is one the
 * case studies already carry, with the same attribution.
 */

export type ResumeRole = {
  org: string;
  place: string;
  note?: string;
  /** One line on what the role covered, above the bullets. */
  scope?: string;
  titles: { title: string; dates: string }[];
  bullets: string[];
};

export const resume = {
  name: "Mithun Raju",
  headline: "Senior UX Designer",
  contact: [
    { label: "Bengaluru, India" },
    { label: "mithraj14@gmail.com", href: "mailto:mithraj14@gmail.com" },
    { label: "linkedin.com/in/mithunrajuk", href: "https://www.linkedin.com/in/mithunrajuk" },
    { label: "mithunraju.in", href: "https://mithunraju.in" },
  ],
  summary:
    "Senior UX designer with 11 years across consumer apps, commerce and enterprise. At Walmart Global Tech I design enterprise platforms, developer tools and AI-assisted workflows from first idea to release, and I specialise in replacing several tools with one. I prototype in code with Cursor and Claude Code.",
  roles: [
    {
      org: "Walmart Global Tech",
      place: "Bengaluru",
      titles: [
        { title: "UX Designer → Senior UX Designer", dates: "Aug 2020 – present" },
      ],
      scope:
        "Design owner for enterprise platforms and developer tools, from first idea to release, across five products.",
      bullets: [
        "Enterprise portfolio platform (2023–present). Sole designer. Ran three whiteboarding sessions of 12 people each, then replaced four external tools with one platform that links goals, initiatives, products and people, and persuaded three product managers to plan for the whole product. Worked a sprint ahead of three engineering teams, with weekly reviews and a monthly all-hands. 800+ hours a week reclaimed, per the product managers, and about $100K a year in average licence cost saved.",
        "API lifecycle platform (2022–present). Owned the design direction for one platform to discover, design, test and govern APIs, built as one product, not three. 20K+ APIs onboarded and 60% less developer time spent defining API contracts.",
        "Dependency health platform (2025–present). Turned a requested dashboard into one that acts: it starts the upgrade and assigns a flag to a person. Team migration fell from 3 days to about 2 hours, with 40% fewer library issues in releases.",
        "Earlier at Walmart. Co-led the supply chain platform redesign, testing navigation models with users (139 tools, 62% less time to reach one), and designed the store associate support app (tickets closed in 1 day, from 3).",
      ],
    },
    {
      org: "bigbasket",
      place: "Bengaluru",
      titles: [{ title: "UX Designer", dates: "Aug 2018 – Aug 2020" }],
      bullets: [
        "bb daily. Designed the customer and delivery apps end to end, from research and flows to prototypes, for a product in 10+ cities with 1.5M+ users and 120K daily deliveries on average.",
        "Established and promoted design guidelines and standards for the team.",
        "Ratings & Reviews. One feedback system across Android, iOS, web and mobile web, with a configurable questionnaire for each product category.",
      ],
    },
    {
      org: "Hike Messenger",
      place: "Bengaluru",
      titles: [{ title: "Product Designer", dates: "Aug 2017 – Jul 2018" }],
      bullets: [
        "Movie ticket booking. An end-to-end booking app built on Hike Messenger, with Hike Wallet payment and ticketing through Just Tickets and INOX.",
        "Job discovery and resume builder. An end-to-end jobs app built on Hike Messenger, with listings from Indeed’s API.",
        "Total OS. A localisation process across 8 Indian languages, checked with 23+ participants.",
      ],
    },
    {
      org: "CREO (acquired by Hike Messenger)",
      place: "Bengaluru",
      titles: [{ title: "UI Designer", dates: "Jan 2016 – Aug 2017" }],
      bullets: [
        "Visual language for the Mark 1 smartphone across web, social, email and campaigns. Supported it for 12 months, with a new campaign around each monthly update.",
      ],
    },
  ] as ResumeRole[],
  earlier: [
    { org: "Teewe.in", title: "Visual Designer", dates: "Sep – Dec 2015" },
    { org: "NexusNovus", title: "External Consultant", dates: "Aug – Dec 2015" },
  ],
  education: [
    { what: "Diploma in Graphic & Web Designing", where: "Zee Institute of Creative Arts", dates: "2014 – 2015" },
    { what: "Bachelor of Computer Applications", where: "St. Claret College, Bengaluru", dates: "2011 – 2014" },
  ],
  skills: [
    "Research and usability studies",
    "User flows, wireframes, prototypes",
    "Interaction design",
    "Design systems (Walmart Living Design)",
    "Tools: Figma, Cursor, Claude Code, VS Code",
    "AI-assisted prototyping and prompts",
  ],
  certifications: [
    "UX Research for Agile Teams",
    "Foundations of UX Design",
    "UX Foundations: Prototyping",
    "Interaction Design: Interface",
  ],
  languages: "English and Hindi (professional); Kannada and Telugu (limited working); Tamil (elementary).",
};
