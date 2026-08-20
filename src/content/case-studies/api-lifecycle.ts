import type { CaseStudy } from "./types";

export const apiLifecycleStudy: CaseStudy = {
  slug: "api-lifecycle",
  label: "API Lifecycle Platform",
  org: "Walmart Global Tech",
  timeframe: "2022–Present",
  discipline: "Developer platform · Product design",
  title: "Creating one platform for engineers to discover, design, test, and govern APIs",
  subtitle:
    "API work was spread across different tools and handoffs. Engineers could discover services in one place, design contracts somewhere else, test through separate utilities, and encounter governance later in the lifecycle.",
  story:
    "I joined the product at its inception and helped shape it into a connected platform organised around three core jobs: Marketplace, Design Studio, and Testing. An API moves through discovery, contract design, validation, testing, publishing, subscription, governance, and eventually change or deprecation. When each stage lives in a different product, engineers have to reconstruct that lifecycle themselves. The opportunity was not to add another API tool. It was to create one product model that could carry engineers through the lifecycle while still supporting specialists who needed deeper control.",
  contributions: [
    "Helped shape the platform from inception around three core lifecycle jobs",
    "Designed Marketplace for discovery, evaluation, and guided subscription",
    "Created Design Studio supporting both structured and code-based editing",
    "Integrated API testing into the platform without creating a separate tool",
    "Ran 60+ engineering adoption sessions that directly shaped product refinement",
  ],
  role: "UX Designer → Senior UX Designer",
  scope: [
    "API discovery and marketplace",
    "Contract design and editing",
    "Testing and validation",
    "Developer adoption",
    "Governance and policy integration",
  ],
  metrics: [
    { value: "~500", label: "Services onboarded" },
    { value: "~40%", label: "Faster contract design with redesigned Studio" },
    { value: "60+", label: "Engineering adoption sessions" },
  ],
  chapters: [
    {
      number: "01",
      title: "The lifecycle was connected in theory, fragmented in practice",
      intro:
        "An API moves through discovery, design, validation, testing, publishing, subscription, governance, and deprecation.",
      body: [
        "When each stage lives in a different product, engineers have to reconstruct that lifecycle themselves.",
        "The opportunity was not to add another API tool. It was to create one product model that could carry engineers through the lifecycle while still supporting specialists who needed deeper control.",
      ],
      callout:
        "The goal was not to hide technical complexity. It was to reveal the right amount of it for the person doing the work.",
    },
    {
      number: "02",
      title: "Marketplace made APIs understandable before they were consumed",
      intro:
        "Discovery needed to answer more than 'does this API exist?'",
      body: [
        "Engineers needed to understand what a service did, whether it was appropriate for their use case, how to subscribe, and where to find the technical information required to begin using it.",
        "Marketplace brought search, service details, subscriptions, and exploration into one entry point so evaluation could happen before integration work began.",
      ],
    },
    {
      number: "03",
      title: "Design Studio had to work for beginners and experts at the same time",
      intro:
        "API contract design exposed one of the platform's hardest interaction problems.",
      body: [
        "Some engineers were comfortable working directly in YAML or JSON. Others needed a structured interface that made the schema easier to understand and create.",
        "Instead of forcing one mode on everyone, we designed two connected editors: Basic for guided, structured contract creation, and Advanced for engineers who preferred direct specification editing.",
        "Switching between them required careful handling of validation, unsupported changes, and the risk of losing work. Around that core interaction, the Studio added linting, duplicate detection, quality feedback, versioning, imports, collaboration, code generation, and governance guidance.",
      ],
    },
    {
      number: "04",
      title: "Testing and adoption completed the platform",
      intro:
        "Reducing handoffs while scaling adoption became the final design challenge.",
      body: [
        "The Testing pillar reduced another handoff by bringing common API validation tasks closer to design and discovery. Engineers could test APIs, work with authentication, use scripting and snippets, and share collections without treating testing as a completely separate product experience.",
        "A developer platform does not become useful simply because it ships. Across more than 60 engineering sessions, we demonstrated the product, observed where teams struggled, answered workflow questions, and used that feedback to refine terminology, interactions, and guidance.",
        "As adoption grew, the platform became more deeply connected to governance and the software-development lifecycle. Quality and policy checks moved closer to the work rather than appearing only as a late gate. The platform is also beginning to extend beyond the interface itself through skills and conversational tools.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "Developer tools should respect expertise without requiring it everywhere",
      body: "A platform can support advanced technical work while still making the default path understandable.",
    },
    {
      label: "Insight",
      title: "Adoption is a product surface",
      body: "For internal developer products, demos, documentation, feedback loops, and workflow guidance are part of the experience — not work that happens after design is finished.",
    },
  ],
};
