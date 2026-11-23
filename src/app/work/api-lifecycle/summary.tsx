import { DotNodes, type DotNode } from "@/components/design-system/DotNodes";
import { StorySummary, StoryDots, StoryScreen, StoryVisual, StoryWords } from "@/components/design-system/StorySummary";
import type { StoryStep } from "@/components/design-system/ScrollStory";

/**
 * The API Lifecycle summary: the case study told by scrolling, down the stages
 * an API goes through on the platform. Every line is the case study's own
 * wording; the only new words are the notes under the dots. Governance is not
 * a stage here, because the case study says it is built into each one: it
 * appears as a point inside the steps it belongs to.
 * See the design system, section N, for the conditions.
 */

const STAGES: DotNode[] = ["Find", "Start", "Design", "Test", "Publish"].map((label) => ({ label }));

/** A step along the stages: the stages with one dot lit, and the real screen of that step under it. */
function stageVisual(active: number, src: string, alt: string, width: number, height: number) {
  return (
    <StoryVisual dots={<DotNodes nodes={STAGES} state="connected" active={active} label={`Step ${active + 1} of the stages: ${STAGES[active].label}`} />}>
      <StoryScreen src={src} alt={alt} width={width} height={height} />
    </StoryVisual>
  );
}

const STEPS: StoryStep[] = [
  {
    label: "How we found it",
    text: (
      <StoryWords
        eyebrow="How we found it"
        title="More than 20 interviews exposed the broken hand-offs."
        points={[
          "Engineers decide whether they can trust and use an API. Architects create it, evolve it and answer for it, and often they are the same person.",
          "Documentation lived in Confluence, kept up to date by some teams and not others.",
          "A change to a contract (the written description of what an API accepts and returns) went out as an org-wide email, and access was tracked by hand.",
        ]}
      />
    ),
    visual: (
      <StoryDots
        nodes={STAGES}
        state="scattered"
        label="The five stages of an API's life, with nothing joining them"
        note="Each dot is one stage of an API’s life. Nothing joined them."
      />
    ),
  },
  {
    label: "What we built",
    text: (
      <StoryWords
        eyebrow="What we built"
        title="One platform carries an API through every stage, with controls built in."
        points={[
          "We built one platform for every stage of an API’s life, not another outside tool.",
          "The controls sit inside the work instead of waiting at the end.",
          "A contract with flagged errors cannot be pushed to Git, and a push to production needs a manager’s approval.",
        ]}
      />
    ),
    visual: (
      <StoryDots
        nodes={STAGES}
        state="connected"
        label="The five stages of an API's life, joined from find to publish"
        note="The same five stages, now linked from find to publish."
      />
    ),
  },
  {
    label: "Find",
    text: (
      <StoryWords
        eyebrow="Find"
        title="Search shows what a service is before anyone opens it."
        points={[
          "Typing narrows the results in place, with no category pages.",
          "Each result shows the stages a service runs in and how widely it is used.",
          "Its documentation sits on the service itself, not in a separate wiki.",
        ]}
      />
    ),
    visual: stageVisual(
      0,
      "/work/api-lifecycle/search-results.png",
      "Search results across services, each row carrying a rating, environment badges and a short description, with filters for type, environment, rating and popularity",
      2880,
      2704,
    ),
  },
  {
    label: "Start",
    text: (
      <StoryWords
        eyebrow="Start"
        title="Each contract starts by registering a new API or importing one."
        points={[
          "A provider’s own list of services is where a contract starts.",
          "Register a new API, or import one that already exists.",
          "A contract can come in from a URL, source control, the clipboard, a file or Azure.",
        ]}
      />
    ),
    visual: stageVisual(
      1,
      "/work/api-lifecycle/my-apis.png",
      "My APIs: a searchable, filterable registry of a provider's services with status, tags and consumer counts, and Register New API and Import API actions at the top",
      2890,
      2712,
    ),
  },
  {
    label: "Design",
    text: (
      <StoryWords
        eyebrow="Design"
        title="Two connected editors serve beginners and experts on one contract."
        points={[
          "Basic is the contract as a guided form. Advanced is the specification itself.",
          "Switching between them carries unsaved work and unsupported changes across without losing either.",
          "A contract with flagged errors cannot be pushed to Git.",
        ]}
      />
    ),
    visual: stageVisual(
      2,
      "/work/api-lifecycle/basic-editor.png",
      "The guided editor with the Basic Editor toggle on: URL paths, data types, responses and security on the left, and collapsible sections for operation details, parameters and servers on the right",
      2890,
      2712,
    ),
  },
  {
    label: "Test",
    text: (
      <StoryWords
        eyebrow="Test"
        title="Testing happens in the same product, beside the contract."
        points={[
          "Saved collections sit beside the request, so a saved call is one click from its contract.",
          "A collection can run once or on a schedule, and the team is told when it fails.",
          "The result appears where the request was made.",
        ]}
      />
    ),
    visual: stageVisual(
      3,
      "/work/api-lifecycle/api-testing-2.png",
      "A completed run showing the response and its result state",
      2892,
      2052,
    ),
  },
  {
    label: "Publish",
    text: (
      <StoryWords
        eyebrow="Publish"
        title="A published service has one overview and a record of every change."
        points={[
          "One overview shows who is subscribing, who has been editing, and an audit trail of what changed.",
          "A push to production needs a manager’s approval.",
        ]}
      />
    ),
    visual: stageVisual(
      4,
      "/work/api-lifecycle/api-overview.png",
      "A service's Overview: description, tags, environments and key details, then subscription requests, top contributors and an audit history of every change",
      2890,
      3306,
    ),
  },
  {
    label: "What I did",
    text: (
      <StoryWords
        eyebrow="What I did"
        title="I joined at inception and shaped the product model."
        points={[
          "I owned the design direction and pushed for one platform, not three products.",
          "Adoption was low for the first three months, so I interviewed teams to find out why.",
          "I then ran over a hundred brown-bag sessions (short, informal demos), averaging over sixty people each.",
        ]}
      />
    ),
    visual: (
      <StoryVisual dots={<DotNodes nodes={STAGES} state="connected" label="The five stages of an API's life, joined from find to publish" />}>
        <StoryScreen
          src="/work/api-lifecycle/home.png"
          alt="API Hub home: search across services, then eight Get Started routes for importing, defining, subscribing, generating code, registering, documenting, monitoring and publishing"
          width={2890}
          height={2712}
        />
      </StoryVisual>
    ),
  },
];

export function ApiLifecycleSummary() {
  return (
    <StorySummary
      slug="api-lifecycle"
      title="API Lifecycle Platform"
      standfirst="I joined at inception and shaped the product model of the platform where Walmart engineers find, design, test and govern APIs, the way one piece of software talks to another. It has onboarded 20K+ APIs and reaches 10K+ monthly users."
      introAlt="API Hub: its home, the contract editor and the API tester"
      storyLabel="API Lifecycle Platform, told step by step"
      steps={STEPS}
      results={{
        title: "Engineers carried context between tools less often.",
        points: [
          "The 60% is the reduction in developer time spent defining API contracts.",
          "The other two figures are scale.",
        ],
        items: [
          { value: "20K+", label: "APIs onboarded", glyph: "modules" },
          { value: "10K+", label: "monthly users", glyph: "field" },
          { value: "60%", label: "less developer time spent defining API contracts", glyph: "drop" },
        ],
      }}
    />
  );
}
