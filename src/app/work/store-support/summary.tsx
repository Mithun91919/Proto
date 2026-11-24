import { DotChoice, DotNodes, DotShare, type DotNode } from "@/components/design-system/DotNodes";
import { StorySummary, StoryClip, StoryDots, StoryVisual, StoryWords } from "@/components/design-system/StorySummary";
import type { StoryStep } from "@/components/design-system/ScrollStory";

/**
 * The Store associate app summary: the case study told by scrolling, down what
 * happens after an associate finds a fault. The first step carries the research
 * (the ticket record reviewed with associates and managers, and the card sorts).
 * The recordings are portrait phone captures, shown at their own shape. Every
 * line is the case study's own wording; the only new words are the notes under
 * the dots. See the design system, section N, for the conditions.
 */

/** What happens after an associate finds a fault, as the case study's chapters take it. */
const STAGES: DotNode[] = ["Alarm", "Fix it", "Ticket", "Track", "Rate"].map((label) => ({ label }));

/** A step along the stages: the stages with one dot lit, and the phone recording of that step under it. */
function stageVisual(active: number, clip: { mp4: string; poster: string; alt: string }) {
  return (
    <StoryVisual dots={<DotNodes nodes={STAGES} state="connected" active={active} label={`Step ${active + 1} of the stages: ${STAGES[active].label}`} />}>
      <StoryClip {...clip} width={704} height={1432} portrait />
    </StoryVisual>
  );
}

const STEPS: StoryStep[] = [
  {
    label: "How we found it",
    text: (
      <StoryWords
        eyebrow="How we found it"
        title="Sitting with associates showed two in five tickets needed no technician."
        points={[
          "I sat with store associates and managers and went through the ticket record with them.",
          "Around 40% of tickets could have been cleared by whoever raised them, judged with store and support teams before the redesign.",
          "Reporting ran on a desktop, away from the fault, so reports were written from memory, minutes or hours later.",
        ]}
      />
    ),
    visual: (
      <StoryVisual dots={<DotShare total={5} lit={2} label="Five tickets, two of them lit: two in five did not need a technician" />}>
        <p className="ds-slide-dots-note">Two of every five tickets did not need a technician.</p>
      </StoryVisual>
    ),
  },
  {
    label: "What we built",
    text: (
      <StoryWords
        eyebrow="What we built"
        title="The fix comes before the ticket."
        points={[
          "Raising a ticket meant finding a manager and a desktop, and nothing else was on offer.",
          "Now the steps to clear the fault come first, and answering yes ends it.",
          "A ticket is raised only where they did not hold, and it carries the failed attempt with it.",
        ]}
      />
    ),
    visual: (
      <div className="ds-slide-visual">
        <DotChoice
          options={[{ label: "Raise a ticket" }, { label: "Try the fix first", chosen: true }]}
          label="Two ways to start: raise a ticket, or try the fix first; the app leads with the fix"
        />
      </div>
    ),
  },
  {
    label: "Fix it",
    text: (
      <StoryWords
        eyebrow="Fix it"
        title="An alarm carries its own way out."
        points={[
          "Tapping Fix it on an alarm opens the steps to clear it, in photographs where the repair is physical.",
          "Where the associate cannot clear it, the work order is raised automatically.",
        ]}
      />
    ),
    visual: stageVisual(1, {
      mp4: "/work/store-support/refrigeration-alarms.mp4",
      poster: "/work/store-support/refrigeration-alarms-poster.jpg",
      alt: "A refrigeration alarm opening into photographic troubleshooting steps showing the case and its temperature display, then into a dispatched work order showing the assigned technician.",
    }),
  },
  {
    label: "Ticket",
    text: (
      <StoryWords
        eyebrow="Ticket"
        title="A ticket exists only if the fix did not hold."
        points={[
          "Say what happened, get the resolution, and answer one question: did that resolve your issue?",
          "Yes ends it. No opens step two, which collects photographs and contacts.",
          "The five starting categories came from card sorts I ran with associates.",
        ]}
      />
    ),
    visual: stageVisual(2, {
      mp4: "/work/store-support/submit-resolution.mp4",
      poster: "/work/store-support/submit-resolution-poster.jpg",
      alt: "The submit flow: a problem-details form giving way to a Resolution step labelled 1 of 2 with numbered instructions and the question “Did the above resolve your issue?”, then Step 2 of 2 collecting photographs and contact details.",
    }),
  },
  {
    label: "Track",
    text: (
      <StoryWords
        eyebrow="Track"
        title="A work order can be followed, added to and chased."
        points={[
          "A raised issue becomes a work order with its trade, equipment, problem code and status.",
          "The associate can see it scheduled, add photographs and notes, and chase it.",
          "If a repair does not hold: recall the technician, escalate through the help desk, or call facilities.",
        ]}
      />
    ),
    visual: stageVisual(3, {
      mp4: "/work/store-support/work-orders.mp4",
      poster: "/work/store-support/work-orders-poster.jpg",
      alt: "A work order opened from the list: trade, equipment, problem code and status, then notes added with attached photographs, and an escalate screen offering to recall the technician, escalate through the help desk, or call facilities.",
    }),
  },
  {
    label: "Rate",
    text: (
      <StoryWords
        eyebrow="Rate"
        title="Feedback asks more than how many stars."
        points={[
          "Scheduled work is laid out by day, so an associate can see what is coming to the store.",
          "After resolution, feedback asks whether the work was complete to specification, not just for stars.",
        ]}
      />
    ),
    visual: stageVisual(4, {
      mp4: "/work/store-support/rate-work-orders.mp4",
      poster: "/work/store-support/rate-work-orders-poster.jpg",
      alt: "The work-order calendar showing scheduled jobs by day, then the rating screen: stars, a yes/no question on whether the work was complete to specification, and a comments field.",
    }),
  },
  {
    label: "What I did",
    text: (
      <StoryWords
        eyebrow="What I did"
        title="I designed the app where associates report and fix faults."
        points={[
          "I rebuilt the list of issue types by having associates sort problems into groups.",
          "I made the fix step one of two when reporting, and let associates track, add to and escalate their work orders.",
          "I rebuilt the areas I touched on Living Design, Walmart’s design system, so the app matches the others associates use.",
        ]}
      />
    ),
    visual: <StoryDots nodes={STAGES} state="connected" label="The five stages after a fault is found, joined from the alarm to the rating" />,
  },
];

export function StoreSupportSummary() {
  return (
    <StorySummary
      slug="store-support"
      title="Store associate app"
      standfirst="I designed the app where store associates report and fix faults from the floor, with the fix coming before the ticket. Tickets now close in 1 day instead of 3, and 40% fewer are raised."
      heroImage={{
        src: "/work/store-support/hero-composite.png",
        alt: "Three screens from the app: the home screen with refrigeration alarms, the work-order calendar and submitted issues; the submit-an-issue screen with its five categories; and the refrigeration alarms list.",
        width: 2400,
        height: 2188,
      }}
      introAlt="Screens from the store associate app"
      storyLabel="Store associate app, told step by step"
      steps={STEPS}
      results={{
        title: "Tickets close faster, and fewer are raised.",
        points: [
          "Every store associate has the app, and they are still using it on the floor.",
          "The two in five is a share of the tickets that existed before the redesign, not an effect of it.",
        ],
        items: [
          { value: "1 day", label: "to close a ticket, down from 3 days", glyph: "ring" },
          { value: "40%", label: "fewer tickets raised", glyph: "drop" },
          { value: "40", label: "do-it-yourself fixes created, from none", glyph: "ramp" },
        ],
      }}
    />
  );
}
