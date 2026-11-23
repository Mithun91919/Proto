import { DotNodes, DotTrio, type DotNode } from "@/components/design-system/DotNodes";
import { StorySummary, StoryDots, StoryScreen, StoryVisual, StoryWords } from "@/components/design-system/StorySummary";
import type { StoryStep } from "@/components/design-system/ScrollStory";

/**
 * The Portfolio Management summary: the case study told by scrolling. A dark
 * opening screen, then one pinned card that steps down the chain from a goal to
 * the work (words on the left, the dots and a real screen on the right), then a
 * light close with what changed. It sits under the shell's own header and above
 * its way into the full page, so switching to the summary changes nothing but
 * what is between them. See the design system, section N, for the conditions.
 *
 * Plain wording throughout; every line is the case study's own facts. The only
 * new words are the short captions under the dots.
 */

const CHAIN: DotNode[] = ["Goal", "Project", "Product", "Person", "Tasks"].map((label) => ({ label }));
/** The five places the whiteboarding sessions found the work living, in the order the section names them. */
const PLACES: DotNode[] = ["Who works on what", "Products and projects", "Initiatives and budgets", "Goals", "The work, in Jira"].map((label) => ({ label }));

/** A step along the chain: the chain with one dot lit, and the real screen under it. */
function chainVisual(active: number, src: string, alt: string) {
  return (
    <StoryVisual dots={<DotNodes nodes={CHAIN} state="connected" active={active} label={`Step ${active + 1} of the chain: ${CHAIN[active].label}`} />}>
      <StoryScreen src={src} alt={alt} />
    </StoryVisual>
  );
}

const STEPS: StoryStep[] = [
  {
    label: "How we found it",
    text: (
      <StoryWords
        eyebrow="How we found it"
        title="The work’s data was spread across many tools and resources."
        points={[
          "Three sessions, 12 people each, four hours each, with key stakeholders and the larger team.",
          "Each stage of a portfolio’s work lived somewhere different, and four of the five places were external tools, each with its own licence.",
          "No stage won. The sessions pointed to a system that joins the stages up, not one that fixes each on its own.",
        ]}
      />
    ),
    visual: <StoryDots nodes={PLACES} state="scattered" label="The five places the work was kept, with nothing joining them" note="Each dot is a place the work was kept." />,
  },
  {
    label: "Why it mattered",
    text: (
      <StoryWords
        eyebrow="Why it mattered"
        title="Only people connected the plan to the work."
        points={[
          "Leaders had no shared view of progress and relied on quarterly updates to see where things stood.",
          "Teams spent their time chasing answers and approvals over email, Slack and tickets.",
          "Goals, budgets and people were kept in one set of places, and the work in Jira.",
        ]}
      />
    ),
    visual: <StoryDots nodes={CHAIN} state="scattered" label="The pieces of a goal, with nothing joining them" note="Picture each of these as a dot. Nothing joined them except people." />,
  },
  {
    label: "What we built",
    text: (
      <StoryWords
        eyebrow="What we built"
        title="One tool that joins them up."
        points={[
          "We replaced four separate tools with one.",
          "A goal now links to its project, its products, its people and the Jira tasks the work is tagged to.",
          "The people planned for a goal sit beside the people actually working on it, so gaps are easier to spot.",
        ]}
      />
    ),
    visual: <StoryDots nodes={CHAIN} state="connected" label="The pieces of a goal, joined from the goal down to its tasks" note="The same dots, now joined." />,
  },
  {
    label: "Goal",
    text: (
      <StoryWords
        eyebrow="Goal"
        title="See a goal and the work behind it in one place."
        points={[
          "Every goal belongs to a leader. Pick a director to see the goals set under them.",
          "Each goal names its business area, product and program.",
          "Goals are grouped by state: Behind, At Risk or On Track.",
        ]}
      />
    ),
    visual: chainVisual(
      0,
      "/work/portfolio-management/okr-management-v2.png",
      "The Portfolio page: goals read by director and business area, with planned and actual headcount side by side",
    ),
  },
  {
    label: "Project",
    text: (
      <StoryWords
        eyebrow="Project"
        title="Every funded project shows who is doing it."
        points={[
          "Lists the products building it, with each one’s manager and status.",
          "Names the markets and businesses it affects and depends on.",
          "Costs and benefits are entered together, one financial year at a time.",
        ]}
      />
    ),
    visual: chainVisual(
      1,
      "/work/portfolio-management/initiative-details.png",
      "The project page, titled Initiative Details in the tool: the products building it, its Jira link and its named roles",
    ),
  },
  {
    label: "Product",
    text: (
      <StoryWords
        eyebrow="Product"
        title="Adding a product now follows one standard set of steps."
        points={[
          "Names who is responsible: engineering manager, product manager, product leader and more, each with their job title.",
          "Each team shows the Jira project its tasks are tracked in.",
          "Asking for a new product starts on the product list, in four steps.",
        ]}
      />
    ),
    visual: chainVisual(
      2,
      "/work/portfolio-management/product-details.png",
      "Product Details: its owners, its place in the organisation and each team tied to its Jira project",
    ),
  },
  {
    label: "Person",
    text: (
      <StoryWords
        eyebrow="Person"
        title="Find anyone and see what they work on."
        points={[
          "A person’s page shows their job title, manager and organisation.",
          "It lists the products and projects they work on, each as a share of their time.",
          "Managers can change what each of their reports works on.",
        ]}
      />
    ),
    visual: chainVisual(
      3,
      "/work/portfolio-management/my-profile.png",
      "My Profile: a person's place in the organisation and the products and projects they work on",
    ),
  },
  {
    label: "What I did",
    text: (
      <StoryWords
        eyebrow="What I did"
        title="I was the only designer, working with three product managers and three engineering teams."
        points={[
          "I ran sessions to pin down the problem.",
          "I designed one work cycle ahead of the engineers.",
          "I got three product managers and three engineering teams working on one product, not three.",
        ]}
      />
    ),
    visual: <DotTrio left={{ label: "Product managers", count: 3 }} centre="Design" right={{ label: "Engineering teams", count: 3 }} />,
  },
];

export function PortfolioSummaryBody() {
  return (
    <StorySummary
      slug="portfolio-management"
      title="Portfolio Management Platform"
      standfirst="I designed the tool Walmart’s product teams use to link big company goals to the work and the people doing it. It replaced four separate tools and saves 800+ hours a week."
      introAlt="The Portfolio Management Platform: its screens, from a goal down to the people on it"
      storyLabel="Portfolio Management Platform, told step by step"
      steps={STEPS}
      results={{
        title: "Time and money saved across the platform.",
        points: [
          "Hours are reported by the product managers.",
          "The software saving is the average yearly cost of licences that were no longer needed.",
        ],
        items: [
          { value: "800+ hrs", label: "saved every week, across the platform", glyph: "field" },
          { value: "3,500+ days", label: "of manual effort eliminated in 2025, across the platform", glyph: "layers" },
          { value: "$100K", label: "saved each year on software licences, on average", glyph: "drop" },
          { value: "50%", label: "fewer support requests", glyph: "bars" },
        ],
      }}
    />
  );
}
