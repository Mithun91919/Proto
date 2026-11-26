import { StorySummary, StoryClip, StoryDots, StoryGroups, StoryScreen, StoryWords } from "@/components/design-system/StorySummary";
import type { DotNode } from "@/components/design-system/DotNodes";
import type { StoryStep } from "@/components/design-system/ScrollStory";
import type { HeroStackScreen } from "@/components/design-system/HeroScreenStack";
import { STANDFIRST } from "./copy";

/** The case study hero's own first screen, shown in the opening. */
const HERO_SCREENS: HeroStackScreen[] = [
  {
    src: "/work/design-research/question-slide.jpg",
    width: 1742,
    height: 978,
    name: "the interview question",
    alt: "The first slide of the interview guide, titled Hypothesis 1, asking which AI-supported tasks designers return to.",
    focus: "center",
  },
];

/**
 * The Discovery user research summary: the case study told by scrolling, from the
 * question to what leaders decided. Every line is the case study's own wording; the
 * only new words are the notes under the dots. The dots are labels and sequences,
 * not measures, so nothing here is drawn to scale. See the design system, section N,
 * for the conditions.
 */

const node = (labels: string[]): DotNode[] => labels.map((label) => ({ label }));

const THEMES = node(["Tools", "Living Design", "Trust", "Handoff"]);
const OUTCOME = node(["Presented", "Decided", "Kit built"]);

const STEPS: StoryStep[] = [
  {
    label: "Why it mattered",
    text: (
      <StoryWords
        eyebrow="Why it mattered"
        title="Nobody had looked closely at how designers use AI."
        points={[
          "AI was only just becoming part of designers’ work, and leaders saw it through how developers use it.",
          "I ran the study early in 2026, so this is a snapshot of that moment.",
        ]}
      />
    ),
    visual: (
      <StoryGroups
        label="Two groups of people, developers and designers, each in its own place"
        places={["Developers", "Designers"]}
        note="Leaders saw AI adoption through how developers use it."
      />
    ),
  },
  {
    label: "How I ran it",
    text: (
      <StoryWords
        eyebrow="How I ran it"
        title="Interviews for the why, a survey for the scale."
        points={[
          "I interviewed 16 people across India and the US, with a staff designer helping, and built a survey that 38 designers answered.",
          "I wrote a skill that sorted each transcript into themes, and a readout I could present at any point.",
        ]}
      />
    ),
    visual: (
      <div className="ds-slide-visual">
        <StoryScreen
          src="/work/design-research/question-slide.jpg"
          alt="The first slide of the interview guide, titled Hypothesis 1, asking which AI-supported tasks designers return to and which have not become part of their regular workflow."
          width={1742}
          height={978}
        />
      </div>
    ),
  },
  {
    label: "What I found",
    text: (
      <StoryWords
        eyebrow="What I found"
        title="Four themes came up in nearly every interview."
        points={[
          "Designers move work between tools by hand, and lose context each time. 16 of 16.",
          "Living Design, Walmart’s design system, is checked late and by hand. 15 of 16.",
          "AI is good enough for a prototype, but not for a design handoff like a Figma file. 14 of 16.",
          "Handoff is where design intent is most vulnerable: engineers often start again. 14 of 16.",
        ]}
      />
    ),
    visual: <StoryDots nodes={THEMES} state="connected" label="The four findings, joined in the order the work moves: tools, Living Design, trust and handoff" note="The four findings, in the order the work moves." />,
  },
  {
    label: "What leaders decided",
    text: (
      <StoryWords
        eyebrow="What leaders decided"
        title="I took the learnings to leadership, and they decided what to build for designers."
        points={[
          "I presented to design, product and engineering leadership, and recommended helping designers go from a requirement to a first prototype now, and to a checked handoff next.",
          "Leadership chose to invest in AI skills and agents that help designers build prototypes.",
        ]}
      />
    ),
    visual: <StoryDots nodes={OUTCOME} state="connected" label="Three things that followed, joined in order: the presentation, the decision, and the kit" note="Presented, decided, then the kit was built." />,
  },
  {
    label: "The prototype",
    text: (
      <StoryWords
        eyebrow="The prototype"
        title="A concept: describe it, watch it build, check it."
        points={[
          "A designer describes a workspace in a prompt, and the screens are built in stages, then checked against Walmart’s design system as they are made.",
          "It is a concept, not a product in production, and the data in it is fictional. I built it by prompting Cursor.",
        ]}
      />
    ),
    visual: (
      <StoryClip
        mp4="/work/design-research/card.mp4"
        webm="/work/design-research/card.webm"
        poster="/work/design-research/card-poster.jpg"
        alt="The concept prototype being built from a prompt, with the screens appearing in stages."
        width={1400}
        height={950}
      />
    ),
  },
];

export function DesignResearchSummary() {
  return (
    <StorySummary
      slug="design-research"
      title="Discovery user research"
      standfirst={STANDFIRST}
      heroScreens={HERO_SCREENS}
      heroRatio={1742 / 978}
      introAlt="The interview guide’s first question"
      storyLabel="Discovery user research, told step by step"
      steps={STEPS}
      results={{
        title: "Leaders chose to invest in AI skills and agents for designers.",
        points: [
          "The team behind Walmart’s design system, Living Design, then created a kit that designers can use to build prototypes on any platform.",
          "As a discovery study, it maps what designers do today and does not test a solution. It is a snapshot of early 2026, from Walmart designers only.",
          "I recruited by direct message, and some people took part in both the interviews and the survey. The skill sorted quotes into themes using AI, so the counts reflect its assignments.",
        ],
        items: [
          { value: "54", label: "participants, interviewed and surveyed", glyph: "field" },
          { value: "16", label: "interviewees, in India and the US", glyph: "ring" },
          { value: "38", label: "survey responses", glyph: "modules" },
        ],
      }}
    />
  );
}
