import Link from "next/link";
import { SectionHeader, SubLabel } from "./primitives/SectionHeader";
import { DotNodes, DotTrio, type DotNode } from "./DotNodes";
import { ReplayFrame } from "./ReplayFrame";
import { ResultsGrid } from "./ResultsGrid";

/**
 * Section N of the design system: the scroll story.
 *
 * Everything a second project needs to build one without meeting the problems
 * the first one did. The rules are written down as they were learned, each with
 * the thing that went wrong when it was broken. Read it before building, and
 * tick the checklist at the end before shipping.
 */

const CHAIN: DotNode[] = ["Goal", "Project", "Product", "Person", "Tasks"].map((label) => ({ label }));

type Rule = { rule: string; note: string };

function RuleGrid({ rules }: { rules: Rule[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-14 gap-y-1 sm:grid-cols-2">
      {rules.map((r) => (
        <div key={r.rule} className="ds-rule py-4">
          <p className="text-[0.92rem] leading-6" style={{ color: "var(--ink)" }}>
            {r.rule}
          </p>
          <p className="mt-1 text-[0.85rem] leading-6" style={{ color: "var(--ink-soft)" }}>
            {r.note}
          </p>
        </div>
      ))}
    </div>
  );
}

function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-7 max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
      {children}
    </p>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="font-mono text-[0.85em]">{children}</code>;
}

const WHEN: Rule[] = [
  { rule: "Use it when there is a chain", note: "Three to six real screens that follow one thread, such as a goal down to a person, and a problem whose shape can be drawn as pieces that were apart and are now joined. A list of unrelated features is not a chain." },
  { rule: "Do not use it without real screens", note: "Every middle step carries a real screenshot. A step with nothing real to show is a bullet list in a costume. The first two steps need none: the dots are the picture." },
  { rule: "It is the summary, for a project that has a chain", note: "It takes the place of the generated summary on that project's page. A project without a chain keeps the standard summary; do not force the format onto it. The header switch still works and the full case study is one button away at the foot, so nobody is made to scroll through it to reach the case study." },
  { rule: "Five to eight steps", note: "Each step costs a full screen of scrolling. Past eight, people leave, and the closing figures are never reached." },
  { rule: "Desktop only, like the site", note: "The rail needs 1150px and the swipe hold listens to the wheel. On a narrower window the page still scrolls through, but it is not designed there." },
  { rule: "Same page, same rules", note: "It lives on the case study's own route, so the same robots rule, confidentiality note and next-project link apply, and nothing separate needs indexing or hiding." },
];

const ANATOMY: { part: string; file: string; job: string }[] = [
  { part: "Opening", file: "StorySummary.tsx, a ds-pull band", job: "Dark, centred, one screen tall: kicker, title, standfirst, role, years and where, the card's own clip, a scroll cue. The same band carries the story, so it is one dark block." },
  { part: "Story", file: "ScrollStory.tsx", job: "A tall track holding one pinned card. Scrolling past the track changes what is in the card. Takes steps (label, text, visual), stepVh and holdSwipes." },
  { part: "Dots", file: "DotNodes.tsx", job: "DotNodes draws five dots apart, joined, or joined with one lit. DotTrio draws one dot joined to two groups." },
  { part: "Rail", file: "ChapterProgress.tsx", job: "The site's left rail in its controlled mode: activeId and onSelect. Hidden while the card is not pinned." },
  { part: "Divider", file: "ScrollStory.tsx", job: "A segment per step along the card's foot, filling as you scroll through the current one." },
  { part: "Results", file: "ResultsGrid.tsx", job: "Four tiles that rise in, each with a glyph and a figure that counts up. Light page, after the band. Mounted by WhenInView." },
  { part: "Active state", file: "SlideDeck.tsx", job: "SlideActive and WhenActive: tell a visual whether its step is the one showing, so a clip or a count-up starts on arrival and stops on leaving." },
];

const COPY_RULES: Rule[] = [
  { rule: "Plain words, or gloss at first use", note: "The case study is written for people inside the product; the walkthrough is read by strangers. Initiative becomes project (a funded project). Jira epic becomes tasks. Sprint becomes work cycle. Licence stays only as software licence. If a word needs the product to be understood, rewrite it or explain it once." },
  { rule: "The dot labels are plain nouns, one per stage", note: "Portfolio Management: Goal, Project, Product, Person, Tasks. Studio: Intent, Build, Inspect, Test, Publish. The same word is the step's small label above its title. The tool's own name for a screen appears only in the image's description: titled Initiative Details in the tool." },
  { rule: "A step is a small label, a title and two or three points", note: "The label is one word and is the dot's name. The title is one claim, a full sentence ending in a full stop, about twelve words at most. Each point is one sentence of about twenty-four words at most. Three points is the ceiling; two is often better." },
  { rule: "Titles share one voice", note: "Every title is one sentence, in the present tense, about what the product does at that step: Studio checks what already exists before anyone builds. Not a command to the reader, not a label, not two sentences. The first step is the problem, in the past tense, and the last is the first-person what-I-did. Check a new set by reading the titles in a column: they should sound like one person describing one product. Avoid filler nouns such as thing and stuff; name what is meant." },
  { rule: "The research always has a place", note: "Before writing, search the case study for how the design was informed: interview, research, session, pilot, usability, validate, conversations with users. Every such fact, with its figure, is either a step of its own or a point in the first step, and the people it defined (the roles, the audience) go with it. The research is what makes a summary credible, and it is the part most easily dropped, because it rarely has a screen. If a project has none, say so in the hand-off rather than leaving it unchecked." },
  { rule: "Only the case study's own facts", note: "Every point comes from the case study's text or its screen notes, cut down and in plainer words. Nothing is added to make a step sound better. A figure is exactly the verified figure, with the plain word for what it counts." },
  { rule: "One caption on the dots, only on steps whose picture is the dots alone", note: "A single short italic line, set under the diagram it describes and centred on it, not in the column of words (StoryDots takes it as note). Say what a dot is first, then what was missing: Each dot is one piece of the work. Only people linked them. Then, on the joined step, name the pieces again and say what changed: The same five pieces, now linked from goal to tasks. Never write \"each of these\" or \"them\" without a noun the reader can see, because the line sits beside the dots, not beside the points it would refer to. None on the steps that show a screen." },
  { rule: "Say who did what, once", note: "The what-I-did step is first person and carries only what the case study supports. Do not write the only designer or led unless the source says so." },
  { rule: "The results carry their caveat", note: "Who reports each figure, and what a saving counts, goes beside the figures as plain notes. A figure without its source reads as one that is too good to be true." },
  { rule: "The house rules still apply", note: "British spelling, arrows only as →, no buzzwords, no heading that merely names a section. See the copy guide, section K." },
  { rule: "Wording is shown before it is applied", note: "New wording goes to the owner as options and is applied once one is picked. Plain-language rewrites are shown as a before-and-after table." },
];

const DOT_STATES: { state: string; looks: string; means: string; motion: string }[] = [
  { state: "Apart", looks: "Five unlit dots at uneven heights", means: "The pieces exist, and nothing connects them", motion: "A ring tours the dots once, in no order: a person carrying things by hand" },
  { state: "Joined", looks: "Five lit dots in a line with dotted links", means: "The same pieces, now connected in order", motion: "They line up and light, the links draw, a pulse runs the chain twice" },
  { state: "Placed", looks: "The chain with one dot larger and lit, the rest quiet", means: "Where this step sits in the chain", motion: "A pulse runs from the first dot to the lit one; that dot then glows three times" },
  { state: "One to many", looks: "A large dot, a link each side, a group of dots on each", means: "One point holds two groups together", motion: "Links grow from the middle, each group lights in turn, the centre glows three times" },
];

const DOT_RULES: Rule[] = [
  { rule: "Every dot motion is keyed to the step being active", note: "Each rule starts with .ds-slide.is-active, so it begins on arrival and begins again on the next arrival. Anything holding a visual must carry ds-slide and gain is-active when its step shows. ScrollStory and SlideDeck do this; a specimen outside them uses ReplayFrame." },
  { rule: "Nothing loops for ever", note: "The pulse makes two passes, the glow three, the ring one tour, the cue three bobs. Every animation ends on the resting style, so nothing is left moving or half-drawn. The motion budget, J3e, has no exceptions, and this is where it was nearly broken." },
  { rule: "Draw new dots when the story needs them", note: "A project may need an arrangement none of the four states gives, such as a branching, a loop back, a set of unequal groups or two chains side by side. Build it. It must say one thing the case study says, take its counts from the source, end on a still resting state, be keyed to the active step, show finished under reduced motion, be listed in the motion inventory, and get a Replay specimen here beside the others. What is fixed is these conditions, not the shapes." },
  { rule: "The chain is five nodes", note: "The ring's path, the pulse's run and the placed pulse are written against five equal columns, with the dots at 10, 30, 50, 70 and 90 per cent. Another number of dots in the chain needs those keyframes redrawn. Do not pass four or six without redrawing them." },
  { rule: "The dots stay one size", note: "A different size would imply a quantity the source does not give. The one exception is the lit dot, which is larger to mark a place, never a count." },
  { rule: "The finished state is the plain style", note: "Nothing depends on the motion to be understood. A reader with reduced motion gets the row as it ends: lit, joined, still. The animation rules are switched off with !important in that case, and the ring is hidden." },
  { rule: "Colour comes from variables", note: "The accent, the muted dot and the borders are read from custom properties. The dark band turns them over (ds-stage), so the same markup reads light on dark. Never write a colour into a dot rule." },
  { rule: "The dots carry no text of their own", note: "They are hidden from assistive technology and the row has a label that says what it shows. The visible label under each dot is the dot's name." },
  { rule: "A count-up starts only when seen", note: "It mounts through WhenActive or WhenInView, so it begins on arrival. The digits move; the prefix and suffix (the $ and the K, or + hrs) do not. The final figure is also in the page as hidden text, so a screen reader is never given half a number." },
  { rule: "No Reveal inside a step", note: "The change of step is the animation. A block that also fades in on its own makes the arrival look as if it stuttered." },
  { rule: "Check it by asking the page", note: "getAnimations({ subtree: true }) on the showing step lists what is running, with the iteration counts. A screenshot cannot show a motion, and a hidden browser pane throttles animation." },
];

const SCROLL_RULES: Rule[] = [
  { rule: "One pinned card, changed by scroll", note: "The track is steps x stepVh + 100vh tall, and the card inside it is position: sticky. The words and the picture change together, in one place. Letting the words scroll while the picture swaps was tried first and read as jarring: the two disagreed." },
  { rule: "A full screen of scroll per step", note: "stepVh is 100. Shorter, and a hard flick crosses several steps at once." },
  { rule: "No ancestor may clip with hidden", note: "A sticky card sticks to the nearest ancestor that scrolls, and overflow: hidden makes the ancestor one. The hero band uses hidden, so the story's band uses overflow: clip. Any wrapper you add must be clip or visible." },
  { rule: "The card never skips a step", note: "The scroll sets the step the card is heading for; the card walks toward it one step at a time (640ms each). A flick across three steps shows all three." },
  { rule: "One swipe is one step", note: "While pinned, a swipe may move the page one step either way from where it began, and no further. The limit is held on the page position itself, not only on the wheel events, because browsers pass a swipe's momentum on as events that cannot be cancelled once the swipe is under way: stopping the events alone let a hard flick fly past. The end of a swipe is read from the events: a pause over 140ms, a turn the other way, or a rise after the fade. A new swipe starts a new limit from where the page now is. The limit sits one pixel inside the next step, so an edge never reads as the step before. Arriving from above or below stops at the first or last step. Keys and touch are left to the browser." },
  { rule: "This is a recorded exception to no scroll-jacking", note: "J3e forbids scroll-jacking. This only limits how far one swipe may carry the page, never changes scroll speed, never captures keys or touch, and ends at either end of the story. It exists on the summary page only, and holdSwipes={false} turns it off entirely." },
  { rule: "The rail is the control", note: "ChapterProgress in controlled mode: pass activeId (null while the card is not pinned) and onSelect. Pressing a dot goes straight to that step and ignores the scroll on the way. The card keeps a left gutter of 6.5rem for it." },
  { rule: "The divider is feedback, not a control", note: "A segment per step, the current one filling as you scroll, written as a custom property on the track so scrolling does not re-render the story. Hidden from assistive technology. The scroll cue fades at the last step." },
  { rule: "Everything stays readable", note: "Steps that are not showing are transparent, not hidden, so a screen reader reads the whole story in order. The visual of each step has a description. The card holds nothing focusable except the rail." },
];

const BUILD_NOTES: Rule[] = [
  { rule: "Scope every story rule to .ds-story-track", note: "That is the wrapper the component renders. An earlier wrapper name was changed and the rules written for it silently stopped applying." },
  { rule: "A project file holds words, dots and screens only", note: "StorySummary.tsx lays out the opening, the pinned card and the results for every project, and exports StoryWords, StoryVisual, StoryScreen and StoryClip for the steps. A new project writes its steps and its results and passes them in, so every summary behaves the same. Portfolio Management and Studio are the two examples." },
  { rule: "A recording plays only while its step shows", note: "StoryClip mounts its video only for the active step, so one clip plays at a time and none plays behind a step that has gone. It holds on its poster under reduced motion. Recordings are 16:9 with the chat and the workbench side by side, so they keep that shape (is-wide) instead of the 4:3 crop used for stills." },
  { rule: "Wire it through the summary slot", note: "In the project's page.tsx pass summary={{ body: <ProjectSummaryBody />, ownOpener: true }} to CaseStudyShell. The body is a fragment: the dark band (ds-pull ds-stage ds-stage-story) and the light results. ownOpener drops the shell's own summary opener, because the story opens itself. The shell already adds the way into the full page, so the body adds no link of its own." },
  { rule: "The body carries the page's h1", note: "In the summary view the case study's hero is hidden, which takes its h1 with it, so the opening has its own h1 with the project's name. Do not reuse the case-study hero classes either: ds-cs-hero is hidden by the toggle." },
  { rule: "Clear the floating header", note: "The card's top padding is 4.25rem so the eyebrow sits under the header pill rather than behind it. The header slides away on scroll, but it is there when the story is entered from a link." },
  { rule: "ds-slide is transparent until it is active", note: "By itself it is invisible, with its hidden state delayed. Anything outside a deck or a story that must show uses ds-slide is-active, which is what ReplayFrame does." },
  { rule: "Key both halves of a step", note: "The words and the visual arrive from a server component, and React warns about keys when they sit side by side. ScrollStory keys them. Keep that if you edit it." },
  { rule: "Hold the room open for late content", note: "The results use WhenInView with a minHeight, so the page does not jump when they arrive." },
  { rule: "The dev server can serve old CSS", note: "After a CSS edit the running dev server sometimes keeps the previous stylesheet, and what you see is not what you wrote. Stop the server, delete .next and start again, then check computed styles with a script, never by eye." },
  { rule: "Crop to the top of the screen", note: "The pictures are 4:3 and cropped to the top with object-position: top. Choose screens whose top region carries the point, write the description from what is shown, and add the confidential note wherever the case study does." },
  { rule: "Sizes", note: "Title about 43px, points about 17px, the picture about 630 by 475 at 1290px wide. The card has height to spare, so the type was made larger first and then reduced a little. Do not enlarge it to fill the space." },
];

const CHECKLIST = [
  "There is a real chain, and a real screen for every middle step.",
  "The wording was shown as options and one was picked; every point traces to the case study.",
  "The case study was searched for research (interviews, sessions, pilots, usability), and every figure and role it names has a step or a point.",
  "Plain dot labels, one per stage of the project's own chain, used as the step labels.",
  "Five to eight steps, each a label, a title and two or three points.",
  "The results are the verified figures, with their caveats beside them.",
  "Reduced motion on: nothing moves and every state is shown finished.",
  "Every animation ends: nothing loops for ever (search the stylesheet for infinite).",
  "A hard trackpad flick moves one step. Try it on a real trackpad, not a script.",
  "The rail is operable by keyboard and jumps to its step; the page reads in order with a screen reader.",
  "Console has no warnings; tsc is clean; the dev server was restarted if the CSS looked wrong.",
  "It is wired through summary.body with ownOpener; the Case study and Summary switch works both ways, and the full case study is one button from the end.",
];

export function ScrollStorySpec() {
  return (
    <section id="scroll-story" className="mx-auto max-w-[70rem] px-5 pt-14 scroll-mt-28 md:px-8">
      <SectionHeader letter="N" title="Scroll story" subtitle="A case study told one step at a time, by scrolling" />

      <div className="py-11">
        <SubLabel code="N1 · When to use it" />
        <Lede>
          A pinned card holds still while the page scrolls past it, and what is inside changes step by step. It
          suits a project with a thread to follow and screens to follow it on. It is the summary view of a case study,
          so a reader who wants the shape of a project gets it in a minute, and the full case study stays one
          button away. The live one is the{" "}
          <Link href="/work/portfolio-management" className="underline underline-offset-4">
            Portfolio Management summary
          </Link>{" "}
          (switch the header to Summary).
        </Lede>
        <RuleGrid rules={WHEN} />
      </div>

      <div className="ds-rule py-11">
        <SubLabel code="N2 · Anatomy" />
        <Lede>One dark band holds the opening and the story. The page turns light for the results.</Lede>
        <div className="ds-motion-table" role="table">
          <div className="ds-motion-row is-head" role="row" style={{ gridTemplateColumns: "0.7fr 1fr 3fr" }}>
            <span role="columnheader">Part</span>
            <span role="columnheader">Where</span>
            <span role="columnheader">Its job</span>
          </div>
          {ANATOMY.map((a) => (
            <div key={a.part} className="ds-motion-row" role="row" style={{ gridTemplateColumns: "0.7fr 1fr 3fr" }}>
              <span role="cell" className="ds-motion-name">
                {a.part}
              </span>
              <span role="cell" className="ds-motion-cell is-mono">
                {a.file}
              </span>
              <span role="cell" className="ds-motion-cell">
                {a.job}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-rule py-11">
        <SubLabel code="N3 · The copy" />
        <Lede>
          A walkthrough is read by strangers in seconds, at a size where every word shows. The case study can be
          dense; the steps cannot.
        </Lede>
        <RuleGrid rules={COPY_RULES} />
      </div>

      <div className="ds-rule py-11">
        <SubLabel code="N4 · The dots" />
        <Lede>
          The dots are the way into each step. These four states are a starting vocabulary, not a closed list: draw
          the picture the story needs, and add what it needs to the system. Each state says one thing, and the
          conditions below hold for any new one. Press Replay to watch one again: it plays when its step arrives, so
          on this page it is held in that state.
        </Lede>
        <div className="ds-motion-table mb-9" role="table">
          <div className="ds-motion-row is-head" role="row" style={{ gridTemplateColumns: "0.7fr 1.3fr 1.4fr 2fr" }}>
            <span role="columnheader">State</span>
            <span role="columnheader">Looks like</span>
            <span role="columnheader">Means</span>
            <span role="columnheader">Motion</span>
          </div>
          {DOT_STATES.map((d) => (
            <div key={d.state} className="ds-motion-row" role="row" style={{ gridTemplateColumns: "0.7fr 1.3fr 1.4fr 2fr" }}>
              <span role="cell" className="ds-motion-name">
                {d.state}
              </span>
              <span role="cell" className="ds-motion-cell">
                {d.looks}
              </span>
              <span role="cell" className="ds-motion-cell">
                {d.means}
              </span>
              <span role="cell" className="ds-motion-cell">
                {d.motion}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <SubLabel code="Apart" />
            <ReplayFrame dark label="Five dots apart, with a ring touring them once">
              <DotNodes nodes={CHAIN} state="scattered" label="The pieces of a goal, with nothing joining them" />
            </ReplayFrame>
          </div>
          <div>
            <SubLabel code="Joined" />
            <ReplayFrame dark label="Five dots lining up, lighting and joining, then a pulse running the chain twice">
              <DotNodes nodes={CHAIN} state="connected" label="The pieces of a goal, joined from goal to tasks" />
            </ReplayFrame>
          </div>
          <div>
            <SubLabel code="Placed · the third dot" />
            <ReplayFrame dark label="A pulse running from the first dot to the lit third dot">
              <DotNodes nodes={CHAIN} state="connected" active={2} label="Step 3 of the chain: Product" />
            </ReplayFrame>
          </div>
          <div>
            <SubLabel code="One to many" />
            <ReplayFrame dark label="One dot joined to two groups of three">
              <DotTrio left={{ label: "Product managers", count: 3 }} centre="Design" right={{ label: "Engineering teams", count: 3 }} />
            </ReplayFrame>
          </div>
        </div>

        <div className="mt-9">
          <SubLabel code="Results · counted up on arrival" />
          <ReplayFrame label="Four result tiles rising in, each figure counting up">
            <ResultsGrid
              items={[
                { value: "800+ hrs", label: "saved every week, across the platform", glyph: "field" },
                { value: "3,500+ days", label: "of manual effort eliminated in 2025, across the platform", glyph: "layers" },
                { value: "$100K", label: "saved each year on software licences, on average", glyph: "drop" },
                { value: "50%", label: "fewer support requests", glyph: "bars" },
              ]}
            />
          </ReplayFrame>
          <p className="mt-3 max-w-[66ch] text-[0.8rem] leading-6" style={{ color: "var(--muted)" }}>
            These are the real, verified figures from the Portfolio Management case study, used here as the
            specimen. A new project uses its own.
          </p>
        </div>

        <div className="mt-11">
          <RuleGrid rules={DOT_RULES} />
        </div>
      </div>

      <div className="ds-rule py-11">
        <SubLabel code="N5 · The scroll" />
        <Lede>
          The scroll is where this pattern can go wrong in a reviewer&apos;s hands, so its behaviour is written
          out in full. The constants live at the top of <Code>ScrollStory.tsx</Code>: <Code>STEP_MS</Code>,{" "}
          <Code>GAP_MS</Code>, <Code>MIN_HOLD_MS</Code> and <Code>MAX_HOLD_MS</Code>.
        </Lede>
        <RuleGrid rules={SCROLL_RULES} />
      </div>

      <div className="ds-rule py-11">
        <SubLabel code="N6 · Building it" />
        <Lede>The things that cost time the first time. Each one was met for real.</Lede>
        <RuleGrid rules={BUILD_NOTES} />
      </div>

      <div className="ds-rule py-11">
        <SubLabel code="N7 · Before it ships" />
        <ol className="grid list-none grid-cols-1 gap-x-14 gap-y-1 p-0 sm:grid-cols-2">
          {CHECKLIST.map((item, i) => (
            <li key={item} className="ds-rule flex gap-4 py-3.5 text-[0.9rem] leading-6" style={{ color: "var(--ink-soft)" }}>
              <span className="font-mono text-[0.7rem] tracking-[0.08em]" style={{ color: "var(--ds-accent)", paddingTop: "0.15rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
