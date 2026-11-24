import Link from "next/link";
import { SectionHeader, SubLabel } from "./primitives/SectionHeader";

/**
 * Section O of the design system: adding a project.
 *
 * The order a new case study is built in, and every place that has to be told
 * about it. Several of those places are lists kept by hand, and missing one does
 * not fail loudly: a card has no link, a header pill shows a raw slug, a filter
 * leaves the project out. Each step says what goes wrong when it is skipped.
 */

function Code({ children }: { children: React.ReactNode }) {
  return <code className="font-mono text-[0.85em]">{children}</code>;
}

type Step = {
  title: string;
  where: React.ReactNode;
  what: React.ReactNode;
  skipped: string;
};

const STEPS: Step[] = [
  {
    title: "Write the draft outside the site",
    where: <Code>projects/&lt;slug&gt;/web/&lt;slug&gt;-web.md</Code>,
    what: "The story, the figures with their caveats, and the research: interviews, sessions, field visits, reviews. This is the approved source. Public copy comes only from here; the master folder is never published. If a figure is missing, leave it out or mark it pending.",
    skipped: "Copy written straight into the page has no source to check it against, and a figure with no caveat reads as too good to be true.",
  },
  {
    title: "Add the project's facts",
    where: <Code>src/content/projects.ts</Code>,
    what: "A new entry: slug, number, label, title, summary, outcome, metrics, organisation, role, timeframe, the path to the draft, and the card's media. The order of the list is the order on the Work page and in the next and previous links. Use unlisted while a case study is being rewritten.",
    skipped: "The project has no card and no place in the order.",
  },
  {
    title: "Build the page",
    where: <Code>src/app/work/&lt;slug&gt;/page.tsx</Code>,
    what: "A CaseStudyShell with a hero and chapters, built from the parts in sections E to H and written to the copy guide in section K. Images and recordings go in public/work/<slug>/, each with its true width and height and a useful description. Use caseStudyRobots for the metadata, and add the confidentiality note as the other pages do.",
    skipped: "Missing dimensions make the page jump as it loads; a page without caseStudyRobots would be indexed when the others are not.",
  },
  {
    title: "Tell the lists that are kept by hand",
    where: (
      <>
        <Code>case-study-routes.ts</Code>, <Code>case-study-nav.ts</Code>, <Code>read-time.ts</Code> and{" "}
        <Code>work-filters.ts</Code> in <Code>src/content</Code>
      </>
    ),
    what: "Add the slug to the routes list, a short name for the header pill, the full read time in minutes (and the summary's, if it has one), and its platform and craft tags for the Work filters.",
    skipped: "A card with no way into the page, a header pill that shows the raw slug, no read time, and a project the filters leave out. None of these raises an error.",
  },
  {
    title: "Decide whether it gets a summary",
    where: <Code>src/content/summaries.ts</Code>,
    what: "A case study of about 1,200 words or more, with a thread to follow and real screens, can have one, told as a scroll story (section N). A short page, two or three minutes in full, cannot: a summary would save a minute or two and promise more than it delivers. Without one, the page shows in full with no Summary switch. With one, add summary.tsx, pass it to the shell with ownOpener, and add the slug to the list.",
    skipped: "A summary on a short page, or a slug left off the list, shows a switch that does little, or hides one that should be there.",
  },
  {
    title: "Check it",
    where: <>The terminal and the browser</>,
    what: "Run the type check and the linter. Open the page: every screen loads, every recording plays, nothing runs off the edge. Open the Work page, the next and previous links and the header. For a summary, step through every step and count the words of each title and point against the limits in section N.",
    skipped: "A blank screen or a clipped line is invisible to the type checker and easy to miss at a glance.",
  },
];

export function AddingAProjectSpec() {
  return (
    <section id="adding-a-project" className="mx-auto max-w-[70rem] px-5 pt-14 scroll-mt-28 md:px-8">
      <SectionHeader letter="O" title="Adding a project" subtitle="From a draft to a published case study" />

      <div className="py-11">
        <SubLabel code="O1 · The order" />
        <p className="mb-7 max-w-[66ch] text-[0.95rem] leading-7" style={{ color: "var(--ink-soft)" }}>
          Six steps, in this order. The draft comes first so that nothing on the page is written without a source. The
          case studies are not listed in the sitemap, on purpose: they are marked noindex, and a sitemap asks to be
          indexed, so a new project needs no entry there. The live examples are the{" "}
          <Link href="/work/bb-daily" className="underline underline-offset-4">
            bb daily
          </Link>{" "}
          page, which has a summary, and{" "}
          <Link href="/work/hike-jobs-service" className="underline underline-offset-4">
            Hike Jobs
          </Link>
          , which does not.
        </p>
        <ol className="space-y-0">
          {STEPS.map((step, i) => (
            <li key={step.title} className="ds-rule grid grid-cols-[2.5rem_1fr] gap-x-4 py-6">
              <span className="font-mono text-[0.8rem]" style={{ color: "var(--ds-accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="display-title text-[1.15rem] leading-6" style={{ color: "var(--ink)" }}>
                  {step.title}
                </p>
                <p className="mt-1 font-mono text-[0.72rem] leading-6" style={{ color: "var(--muted)" }}>
                  {step.where}
                </p>
                <p className="mt-3 max-w-[70ch] text-[0.92rem] leading-7" style={{ color: "var(--ink-soft)" }}>
                  {step.what}
                </p>
                <p className="mt-2 max-w-[70ch] text-[0.85rem] leading-6" style={{ color: "var(--muted)" }}>
                  If skipped: {step.skipped}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
