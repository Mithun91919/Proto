import { PullMarkFigure, type PullMark } from "./PullStatement";
import { Reveal } from "@/components/Reveal";

/**
 * J3b–J3d · The motion catalogue.
 *
 * Every named movement in the system, stated once so it can be argued with.
 * The brief's rule is that nothing moves for its own sake, which is only
 * checkable if each motion has to say what it means in a sentence — so each
 * entry here carries its meaning, not just its duration.
 */

type MarkSpec = {
  mark: PullMark;
  name: string;
  /** What the shape claims. The sentence the mark exists to restate. */
  means: string;
  /** The order the highlight travels, which is the claim being re-enacted. */
  order: string;
  /** Number of positions in that order — the `--mark-n` the component sets. */
  n: number;
};

const MARKS: MarkSpec[] = [
  {
    mark: "connection",
    name: "Connection",
    means: "One thing is the link between two others.",
    order: "Cluster, bridge, cluster. Position 5 is deliberately empty, so the wave pauses mid-crossing before the far cluster answers.",
    n: 10,
  },
  {
    mark: "rhythm",
    name: "Rhythm",
    means: "A standing cadence the user still controls.",
    order: "Beats left to right along the rail. The last beat is drawn open and never fills.",
    n: 6,
  },
  {
    mark: "exchange",
    name: "Exchange",
    means: "One contributor feeding many readers. The sides are not matched.",
    order: "The one, then the bridge, then the many — so the asymmetry is felt in time as well as in count.",
    n: 12,
  },
  {
    mark: "seam",
    name: "Seam",
    means: "The gaps between steps, not the steps, are the work.",
    order: "Node, join, node. The joins are solid and the nodes are hollow, inverting the usual emphasis.",
    n: 9,
  },
];

/** J3b · The four pull-statement marks, live, with what each one claims. */
export function MarkMotionGallery() {
  return (
    <div className="ds-motion-gallery">
      {MARKS.map((m) => (
        <Reveal key={m.mark}>
          <div className="ds-motion-specimen">
            <div className="ds-motion-stage">
              <PullMarkFigure mark={m.mark} />
            </div>
            <div className="ds-motion-caption">
              <p className="ds-eyebrow" style={{ color: "var(--ds-mint)" }}>
                {m.name} · n={m.n}
              </p>
              <p className="ds-motion-means">{m.means}</p>
              <p className="ds-motion-order">{m.order}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

type MotionSpec = {
  name: string;
  /** What starts it. */
  trigger: string;
  timing: string;
  loop: string;
  /** Why it is allowed to move at all. */
  means: string;
};

const INVENTORY: MotionSpec[] = [
  {
    name: "Reveal",
    trigger: "10% of a screen before it enters",
    timing: "560ms, 18px rise",
    loop: "Once per load",
    means: "A band has arrived. Everything else times itself off this, so nothing can fire off-screen.",
  },
  {
    name: "Mark entrance",
    trigger: "Reveal",
    timing: "460ms, after a 520ms lead",
    loop: "Once per load",
    means: "The mark draws itself in meaning order. The lead exists because the band is still travelling for its first 560ms.",
  },
  {
    name: "Mark loop",
    trigger: "900ms after entrance",
    timing: "6s period, 42% travel",
    loop: "Twice, then rest",
    means: "The mark restates its claim a second time, then stays still. Rest is most of each cycle — the wave crosses in ~2.3s and the mark is still for the rest.",
  },
  {
    name: "Numeral draw",
    trigger: "Reveal",
    timing: "380ms, 16ms per dot",
    loop: "Once per load",
    means: "A dot-grid numeral assembles into a figure. It does not loop: a numeral is a value, and a looping value reads as one that is changing.",
  },
  {
    name: "Flow sweep",
    trigger: "700ms after entrance",
    timing: "7s period",
    loop: "Twice, then rest",
    means: "One highlight walks the chain so the path is visible without a pointer finding it.",
  },
  {
    name: "Reframe settle",
    trigger: "Reveal",
    timing: "4.4s period",
    loop: "Twice, then rest",
    means: "Before and after hold their positions while the arrow between them carries the direction of change.",
  },
  {
    name: "Hotspot pulse",
    trigger: "Reveal",
    timing: "2.6s period",
    loop: "Three times, then rest",
    means: "An annotation marks a point on a screenshot that would otherwise be missed.",
  },
  {
    name: "Hero art",
    trigger: "Page load",
    timing: "650ms rise and fade, 1s settle for a backdrop",
    loop: "Once per page",
    means: "The one thing on a case study's first screen that is not needed to read. The words are already there.",
  },
  {
    name: "Screen fan",
    trigger: "Page load",
    timing: "700ms each, 90ms apart",
    loop: "Once per page",
    means: "Several screens are one product: they slide out from behind the front one, so the count is seen before it is read.",
  },
  {
    name: "Evidence card",
    trigger: "Page load",
    timing: "800ms rise from the bottom, starting at 900ms",
    loop: "Once per page",
    means: "Problem, solution and what I did arrive as one piece, rising into the overlap with the hero once the art has landed.",
  },
  {
    name: "Portrait pour",
    trigger: "In view",
    timing: "Two pours and drains",
    loop: "Twice, then rest",
    means: "Dots arriving as one image says the argument without words: separate pieces joining. Then it stops on the assembled image.",
  },
  {
    name: "Block parts",
    trigger: "Reveal",
    timing: "Label, heading, then each paragraph 90ms apart, to about 1s",
    loop: "Once per page",
    means: "A block that fades in whole reads flat. Its parts arrive in reading order, on every page: label, heading, lede, paragraphs. On a card or a project row the picture settles first, then the company, title, summary and metrics follow. Plain pages such as About and the résumé get the same by position: the direct children of a block arrive in order, and diagrams rise and settle like figures. A return visit shows all of it already in place.",
  },
  {
    name: "Figure rise",
    trigger: "Reveal",
    timing: "760ms, 32px, settling from 98.5%",
    loop: "Once per page",
    means: "A figure arrives differently from text: it rises further and settles, so the page has two kinds of thing on it.",
  },
  {
    name: "Group stagger",
    trigger: "Reveal",
    timing: "600ms each, 120ms apart, up to four",
    loop: "Once per page",
    means: "Cards in a set, metrics in a strip, before and after: they come one after another, in the order they are read.",
  },
  {
    name: "Section line",
    trigger: "Section first seen",
    timing: "600ms line, then five dots in order over 400ms",
    loop: "Once per page",
    means: "A new chapter has started. The line draws and the five dots light one by one. Armed only for a section below the fold, so nothing is hidden without script.",
  },
  {
    name: "Dot skeleton",
    trigger: "Image still loading",
    timing: "None, static",
    loop: "Until it loads",
    means: "The frame holds its place as a field of dots, so the page does not jump and the wait has a shape.",
  },
  {
    name: "Route line",
    trigger: "Navigation over 200ms",
    timing: "About 3s fill, 180ms to finish",
    loop: "Per navigation",
    means: "Something is loading. A fast navigation shows nothing at all.",
  },
  {
    name: "Dot grid",
    trigger: "Pointer",
    timing: "Follows the pointer",
    loop: "Per pointer move",
    means: "The page responds. Full strength on home and About, quiet on case studies, because the long read is not the place to perform.",
  },
  {
    name: "Hover lift",
    trigger: "Pointer",
    timing: "150–220ms",
    loop: "Per interaction",
    means: "Confirms a thing is clickable. It should not perform.",
  },
  {
    name: "Swap",
    trigger: "State change",
    timing: "160ms",
    loop: "Per change",
    means: "Content replaced in place, fast enough not to be a transition the reader waits through.",
  },
  // Scroll story (section N). Every dot motion below is keyed to the step being
  // the one showing, so it begins on arrival and begins again on the next.
  {
    name: "Courier ring",
    trigger: "Step arrives",
    timing: "9s, five hops, after 0.6s",
    loop: "Once, then it is gone",
    means: "Pieces that nothing joins are moved between by a person, by hand, in no order, and nothing stays joined behind them.",
  },
  {
    name: "Join",
    trigger: "Step arrives",
    timing: "900ms to line up, 500ms to light, then 520ms per link, 160ms apart",
    loop: "Once per arrival",
    means: "The same pieces, before and after something joins them: they come into line, light, and are connected in order.",
  },
  {
    name: "Chain pulse",
    trigger: "After the join",
    timing: "4s a pass, each dot it passes flares",
    loop: "Twice, then rest",
    means: "A goal can be traced down to the work: a light runs the whole chain and every dot on it answers.",
  },
  {
    name: "Place in the chain",
    trigger: "Step arrives",
    timing: "Pulse 0.5s plus 0.45s a dot, then a 2.6s glow",
    loop: "Pulse once, glow three times, then rest",
    means: "Where this step sits: the pulse runs from the first dot to the lit one and the dots it passes answer. The longer the run, the further down the chain.",
  },
  {
    name: "One to many",
    trigger: "Step arrives",
    timing: "600ms links grow from the middle, dots light 200ms apart, then a 2.6s glow",
    loop: "Once, glow three times, then rest",
    means: "One point holds two groups together: the links grow out from it, then each group lights in turn.",
  },
  {
    name: "Share lights",
    trigger: "Step arrives",
    timing: "Dots fade in 110ms apart from 250ms, the lit ones light over 600ms from 1.3s",
    loop: "Once, then rest",
    means: "A share drawn as a share: all the dots appear, then the ones that count light.",
  },
  {
    name: "Choose one",
    trigger: "Step arrives",
    timing: "Both light as they appear, the unchosen go gray at 1.2s over 700ms, the chosen glows 2.6s",
    loop: "Gray once; chosen glows three times, then rest",
    means: "There were options and one was taken: both light, then only the chosen one keeps its light.",
  },

  {
    name: "Clusters appear",
    trigger: "Step arrives",
    timing: "600ms fade each, clusters 260ms apart, then each dot drifts a few pixels over 5 to 8s",
    loop: "Fade once; drift five passes, then rest",
    means: "The work was kept in many separate places: one cluster for each, apart from the others and unjoined, its dots loose rather than fixed.",
  },
  {
    name: "Gather into groups",
    trigger: "Step arrives",
    timing: "1.7s ease-out per dot, groups 140ms apart, from 350ms",
    loop: "Once, then rest",
    means: "The same things, now held in new groups: each dot moves home from a scattered place and lights as it lands.",
  },
  {
    name: "Points arrive",
    trigger: "Step arrives",
    timing: "520ms rise and fade each, 300ms apart, from 380ms",
    loop: "Once per arrival, then rest",
    means: "The eye is led down the list at the pace of reading: each point arrives after the one before it.",
  },
  {
    name: "Count-up",
    trigger: "Results in view",
    timing: "1.4s ease-out",
    loop: "Once per arrival",
    means: "The figure arrives at its true value. Only the digits move; the words around them are fixed, and a screen reader is given the final figure.",
  },
  {
    name: "Result tiles",
    trigger: "Results in view",
    timing: "600ms rise, 140ms apart",
    loop: "Once per arrival",
    means: "Four results come one after another, in the order they are read.",
  },
  {
    name: "Step change",
    trigger: "Scroll reaches a step's edge",
    timing: "480ms fade, 620ms rise of 20px, the arriving step 140ms behind",
    loop: "Per step, never skipped",
    means: "Words and picture change together in one place, the same change a slide makes, so the reader never watches the two disagree.",
  },
  {
    name: "Story divider",
    trigger: "Scroll",
    timing: "Follows the scroll",
    loop: "Per scroll",
    means: "How far through the current step you are. The step only changes at its edge, so this is what shows the scroll is counting.",
  },
  {
    name: "Scroll cue",
    trigger: "Opening screen, and the story until the last step",
    timing: "1.8s bob of 4px",
    loop: "Three times, then rest",
    means: "There is more below. It goes quiet once seen, and is gone at the last step.",
  },
];

/** J3c · Every named motion in the system, with the claim that justifies it. */
export function MotionInventory() {
  return (
    <div className="ds-motion-table" role="table">
      <div className="ds-motion-row is-head" role="row">
        <span role="columnheader">Motion</span>
        <span role="columnheader">Trigger</span>
        <span role="columnheader">Timing</span>
        <span role="columnheader">Loop</span>
        <span role="columnheader">What it means</span>
      </div>
      {INVENTORY.map((m) => (
        <div className="ds-motion-row" role="row" key={m.name}>
          <span role="cell" className="ds-motion-name">
            {m.name}
          </span>
          <span role="cell" className="ds-motion-cell">
            {m.trigger}
          </span>
          <span role="cell" className="ds-motion-cell is-mono">
            {m.timing}
          </span>
          <span role="cell" className="ds-motion-cell is-mono">
            {m.loop}
          </span>
          <span role="cell" className="ds-motion-cell">
            {m.means}
          </span>
        </div>
      ))}
    </div>
  );
}
