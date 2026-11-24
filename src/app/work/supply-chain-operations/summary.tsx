import { DotFork, DotNodes, type DotNode } from "@/components/design-system/DotNodes";
import { StorySummary, StoryDots, StoryGroups, StoryScreen, StoryVisual, StoryWords } from "@/components/design-system/StorySummary";
import type { StoryStep } from "@/components/design-system/ScrollStory";
import type { HeroStackScreen } from "@/components/design-system/HeroScreenStack";

/** The case study hero's own screens, shown in the opening as the same deck. */
const HERO_SCREENS: HeroStackScreen[] = [
  {
    src: "/work/supply-chain-operations/new-dashboard.png",
    width: 2560,
    height: 1576,
    route: "supply-chain / home",
    name: "the landing page",
    alt: "The redesigned landing page: grouped module categories, pinned tools and recent modules.",
  },
  {
    src: "/work/supply-chain-operations/new-navigation.png",
    width: 2560,
    height: 1940,
    route: "supply-chain / modules",
    name: "the module navigation",
    alt: "The module navigation, with all 139 modules grouped by operational area.",
  },
  {
    src: "/work/supply-chain-operations/new-login.png",
    width: 2560,
    height: 1612,
    route: "supply-chain / sign-in",
    name: "the sign-in screen",
    alt: "The platform sign-in screen.",
  },
];

/**
 * The Supply Chain Operations summary: the case study told by scrolling. This
 * project has no long chain of screens, so the story is short and the dots
 * appear only where the case study supports them: the route to a tool, from
 * sign-in through the structure the platform was regrouped into. The research
 * (moderated sessions with users from different markets) is the navigation step.
 * Every line is the case study's own wording; the only new words are the note
 * under the dots. See the design system, section N, for the conditions.
 */

/** The way in to a tool, as the redesigned platform sets it out. */
const ROUTE: DotNode[] = ["Sign in", "Landing page", "Category", "Module", "Sub-module"].map((label) => ({ label }));

const STEPS: StoryStep[] = [
  {
    label: "Why it mattered",
    text: (
      <StoryWords
        eyebrow="Why it mattered"
        title="Finding a tool meant remembering where it lived."
        points={[
          "Tools had been added over time with no structure around them.",
          "There was no search, related modules sat beside unrelated ones, and nothing could be pinned.",
          "Everyone started from the same page, whatever their role.",
        ]}
      />
    ),
    visual: (
      <div className="ds-slide-visual">
        <StoryScreen
          src="/work/supply-chain-operations/old-dashboard.png"
          alt="The earlier landing page: a long, flat grid of module tiles with little grouping."
          width={1914}
          height={1242}
        />
      </div>
    ),
  },
  {
    label: "Structure",
    text: (
      <StoryWords
        eyebrow="Structure"
        title="We fixed the structure before the interface."
        points={[
          "Nothing could be grouped until we could say what each of the 139 tools actually did.",
          "Close to a dozen category teams settled that, tool by tool, into Category, Module and Sub-module.",
          "These were legacy systems, so each team had to be shown the merit, and it took several rounds of leadership approval.",
        ]}
      />
    ),
    visual: (
      <StoryGroups
        label="139 dots, one for each tool, gathering into new groups"
        note="Each dot is one of the 139 tools, gathered into new groups."
      />
    ),
  },
  {
    label: "Navigation",
    text: (
      <StoryWords
        eyebrow="Navigation"
        title="Two navigation models were tested with users before one was chosen."
        points={[
          "We tested a top bar and a persistent left menu in moderated sessions, averaging 12 people each, with users from different operational groups and markets.",
          "The top bar would not have scaled. The left menu gave categories room to grow and stays as you work.",
          "Feedback on the top bar still improved the final design, including how market selection was folded into the navigation.",
        ]}
      />
    ),
    visual: (
      <StoryVisual
        dots={
          <DotFork
            origin="Navigation"
            options={[{ label: "Top navigation" }, { label: "Persistent left navigation", chosen: true }]}
            label="Two navigation models were tested, a top bar and a persistent left menu; the persistent left menu was chosen"
          />
        }
      >
        <StoryScreen
          src="/work/supply-chain-operations/new-navigation.png"
          alt="The redesigned platform with a persistent left navigation carrying the category hierarchy."
          width={2560}
          height={1940}
        />
      </StoryVisual>
    ),
  },
  {
    label: "Landing page",
    text: (
      <StoryWords
        eyebrow="Landing page"
        title="Pins, recent modules and search lead back to a small working set."
        points={[
          "Pins keep the tools you use most one click away.",
          "Recent modules let you return to ongoing work without setup.",
          "Search is for people who already know the tool they want.",
        ]}
      />
    ),
    visual: (
      <StoryVisual dots={<DotNodes nodes={ROUTE} state="connected" active={1} label="Step 2 of the route to a tool: the landing page" />}>
        <StoryScreen
          src="/work/supply-chain-operations/new-dashboard.png"
          alt="The redesigned landing page with pinned modules, a recent-modules row, and search."
          width={2560}
          height={1576}
        />
      </StoryVisual>
    ),
  },
  {
    label: "What I did",
    text: (
      <StoryWords
        eyebrow="What I did"
        title="I co-led the redesign of the landing page, sign-in and navigation."
        points={[
          "Other designers owned the categories inside the platform.",
          "With users and platform teams we regrouped everything, then added pins, recent modules and search.",
          "I co-led this with another designer.",
        ]}
      />
    ),
    visual: <StoryDots nodes={ROUTE} state="connected" label="The route to a tool, joined from sign in to sub-module" />,
  },
];

export function SupplyChainSummary() {
  return (
    <StorySummary
      slug="supply-chain-operations"
      title="Supply Chain Operations Platform"
      standfirst="I co-led the redesign of the entry point to 139 operational tools used across Walmart.com, Online Grocery and international markets. Time spent on its landing page fell by 62%."
      heroScreens={HERO_SCREENS}
      heroRatio={undefined}
      introAlt="Screens from the platform"
      storyLabel="Supply Chain Operations Platform, told step by step"
      steps={STEPS}
      results={{
        title: "People left the landing page faster, which was the goal.",
        points: [
          "Less time on the landing page was the goal here: it is a route into the work, not a place to hold people.",
          "The 62% compares time spent on it before the redesign with the time spent after it.",
        ],
        items: [
          { value: "62%", label: "less time spent on the landing page", glyph: "drop" },
          { value: "10–30 min", label: "a visit to it used to take", glyph: "ring" },
          { value: "~39%", label: "of platform visits now route through it", glyph: "funnel" },
        ],
      }}
    />
  );
}
