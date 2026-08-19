/**
 * Framing content for the Work page. The page is a landing page for the body of
 * work, so it has to carry the evolution of the practice and the recurring
 * problems before it becomes a project list.
 *
 * Drafted from `about.md` and the approved per-project web drafts.
 */

export type CareerStage = {
  year: string;
  /** The dominant word. Read across the stages these form the progression. */
  stage: string;
  org: string;
  /** Monochrome mark in /public/orgs. */
  logo: string;
  body: string;
  tags: string[];
};

export const careerStages: CareerStage[] = [
  {
    year: "2015",
    stage: "Digital & web",
    org: "CREO",
    logo: "/orgs/creo.png",
    body: "Advertising, campaign pages, and web experiences.",
    tags: ["Visual Design", "Web"],
  },
  {
    year: "2017",
    stage: "Consumer mobile",
    org: "Hike",
    logo: "/orgs/hike.svg",
    body: "Mobile products across communication experiences and new product experiments.",
    tags: ["Mobile", "Consumer"],
  },
  {
    year: "2018",
    stage: "Commerce & delivery",
    org: "bigbasket",
    logo: "/orgs/bigbasket.svg",
    body: "Customer and delivery-partner experiences across e-commerce, subscription, and fulfilment.",
    tags: ["Commerce", "Mobile", "Operations"],
  },
  {
    year: "2020–Today",
    stage: "Enterprise products",
    org: "Walmart Global Tech",
    logo: "/orgs/walmart.svg",
    body: "Platforms and tools for associates, operations teams, developers, and technology organisations.",
    tags: ["Enterprise", "Platforms", "Developer Experience"],
  },
];

/** The open end of the rail: the shift from interface design to AI behavior. */
export const currentStage = {
  year: "Today",
  stage: "From interfaces to AI behavior",
  body: "As products become more intelligent, my role has expanded from designing screens to shaping the workflows, interactions, and system behavior behind them — including AI-assisted and conversational experiences.",
};

export type Transformation = {
  from: string;
  to: string;
  body: string;
  /** Project slugs this shift shows up in. */
  projects: string[];
};

export const transformations: Transformation[] = [
  {
    from: "Fragmented",
    to: "Connected",
    body: "Bringing separate tools, workflows, and sources of information into one coherent product.",
    projects: ["portfolio-management", "api-lifecycle"],
  },
  {
    from: "Overwhelming",
    to: "Navigable",
    body: "Giving structure to large amounts of information and capability so people can find what matters.",
    projects: ["supply-chain-operations", "dependency-health"],
  },
  {
    from: "Reactive",
    to: "Guided",
    body: "Helping people understand what is wrong, what matters, and what to do next.",
    projects: ["store-support", "dependency-health"],
  },
  {
    from: "Shipped",
    to: "Evolved",
    body: "Staying involved after release and using real product usage to improve the system.",
    projects: ["portfolio-management", "api-lifecycle", "supply-chain-operations"],
  },
];

export type EarlierWorkEntry = {
  org: string;
  body: string;
  tags: string[];
};

export const earlierWork: EarlierWorkEntry[] = [
  {
    org: "bigbasket",
    body: "Consumer subscription, commerce, ratings, and reviews.",
    tags: ["Mobile", "Consumer product"],
  },
  {
    org: "Hike",
    body: "Consumer mobile products and product experiments.",
    tags: ["Mobile", "Product design"],
  },
  {
    org: "CREO",
    body: "Mobile OS and interface design.",
    tags: ["UI", "Interaction design"],
  },
];
