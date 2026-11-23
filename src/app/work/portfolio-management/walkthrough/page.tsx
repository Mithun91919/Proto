import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudyRobots } from "@/content/seo";
import { getProject } from "@/content/projects";
import { DotNodes, DotTrio, type DotNode } from "@/components/design-system/DotNodes";
import { ClipVideo } from "@/components/design-system/ClipFigure";
import { Reveal } from "@/components/Reveal";
import { ResultsGrid } from "@/components/design-system/ResultsGrid";
import { ScrollStory, WhenInView, type StoryStep } from "@/components/design-system/ScrollStory";

/**
 * Portfolio Management, told by scrolling: a dark opening screen like the
 * case study's own hero, then the page turns light and the story runs down the
 * chain from a goal to the work, the words on the left and the dots and a real
 * screen fixed on the right. A trial of the format, kept apart from the live
 * summary at /work/portfolio-management and the slide deck at .../slides.
 *
 * The words are the same plain-language wording as the slides.
 */
export const metadata: Metadata = {
  title: "Portfolio Management Platform, a walkthrough",
  robots: caseStudyRobots,
};

const CHAIN: DotNode[] = ["Goal", "Project", "Product", "Person", "Tasks"].map((label) => ({ label }));
const PROJECT = getProject("portfolio-management");

function Points({ items }: { items: string[] }) {
  return (
    <ul className="ds-slide-points">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Words({ eyebrow, title, points, note }: { eyebrow: string; title: string; points: string[]; note?: string }) {
  return (
    <>
      <Reveal>
        <p className="eyebrow ds-slide-eyebrow">{eyebrow}</p>
        <h2 className="display-title ds-slide-lead mt-4">{title}</h2>
      </Reveal>
      <Reveal delay={120}>
        <Points items={points} />
      </Reveal>
      {note ? (
        <Reveal delay={240}>
          <p className="ds-slide-dots-note">{note}</p>
        </Reveal>
      ) : null}
    </>
  );
}

/** A step along the chain: the chain with one dot lit, and the real screen under it. */
function chainVisual(active: number, src: string, alt: string) {
  return (
    <div className="ds-slide-visual">
      <DotNodes nodes={CHAIN} state="connected" active={active} label={`Step ${active + 1} of the chain: ${CHAIN[active].label}`} />
      <Image className="ds-slide-shot" src={src} alt={alt} width={1920} height={1080} sizes="55vw" />
    </div>
  );
}

const STEPS: StoryStep[] = [
  {
    label: "Why it mattered",
    text: (
      <Words
        eyebrow="Why it mattered"
        title="Only people connected the plan to the work."
        points={[
          "Leaders had no shared view of progress and relied on quarterly updates to see where things stood.",
          "Teams spent their time chasing answers and approvals over email, Slack and tickets.",
          "Goals, budgets and people were kept in one set of places, and the work in Jira.",
        ]}
        note="Picture each of these as a dot. Nothing joined them except people."
      />
    ),
    visual: <DotNodes nodes={CHAIN} state="scattered" label="The pieces of a goal, with nothing joining them" />,
  },
  {
    label: "What we built",
    text: (
      <Words
        eyebrow="What we built"
        title="One tool that joins them up."
        points={[
          "We replaced four separate tools with one.",
          "A goal now links to its project, its products, its people and the Jira tasks the work is tagged to.",
          "The people planned for a goal sit beside the people actually working on it, so gaps are easier to spot.",
        ]}
        note="The same dots, now joined."
      />
    ),
    visual: <DotNodes nodes={CHAIN} state="connected" label="The pieces of a goal, joined from the goal down to its tasks" />,
  },
  {
    label: "Goal",
    text: (
      <Words
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
      <Words
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
      <Words
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
      <Words
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
      <Words
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

export default function PortfolioWalkthroughPage() {
  return (
    <div className="ds-stage-page">
      {/* The opening: the hero's own dark band, a full screen tall. After it the
          page is light, so only this first screen is dark. */}
      <section className="ds-pull ds-stage ds-story-intro">
        <div className="ds-pull-inner">
          <div className="ds-story-intro-center">
            <Reveal>
              <span className="ds-pull-dots" aria-hidden />
              <p className="eyebrow ds-slide-eyebrow">Case study</p>
              <h1 className="display-title mt-4" style={{ fontSize: "clamp(2.4rem, 4.6vw, 4.2rem)", lineHeight: 1.04 }}>
                Portfolio Management Platform
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="ds-slide-detail">
                I designed the tool Walmart’s product teams use to link big company goals to the work and the people doing it. It replaced four separate tools and saves 800+ hours a week.
              </p>
              {PROJECT ? (
                <dl className="ds-slide-meta">
                  <div>
                    <dt className="ds-eyebrow">Role</dt>
                    <dd>{PROJECT.role}</dd>
                  </div>
                  <div>
                    <dt className="ds-eyebrow">Years</dt>
                    <dd>{PROJECT.timeframe}</dd>
                  </div>
                  <div>
                    <dt className="ds-eyebrow">Where</dt>
                    <dd>{PROJECT.org}</dd>
                  </div>
                </dl>
              ) : null}
            </Reveal>
            {PROJECT?.media ? (
              <Reveal delay={240} variant="scale">
                <ClipVideo
                  className="ds-slide-video"
                  mp4={PROJECT.media.mp4}
                  webm={PROJECT.media.webm}
                  poster={PROJECT.media.poster}
                  alt="The Portfolio Management Platform: its screens, from a goal down to the people on it"
                  width={1600}
                  height={1046}
                />
              </Reveal>
            ) : null}
          </div>
          <a href="#story" className="ds-story-cue">
            <span>Scroll</span>
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden>
              <path d="M6 1v13M1.5 9.5 6 14l4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <section id="story" className="ds-story-section">
        <ScrollStory steps={STEPS} label="Portfolio Management Platform, told step by step" />
      </section>

      <section className="ds-story-results">
        <div className="ds-slide-grid">
          <div>
            <Reveal>
              <p className="eyebrow ds-slide-eyebrow">What changed</p>
              <h2 className="display-title ds-slide-lead mt-4">Time and money saved across the platform.</h2>
            </Reveal>
            <Reveal delay={120}>
              <Points
                items={[
                  "Hours are reported by the product managers.",
                  "The software saving is the average yearly cost of licences that were no longer needed.",
                ]}
              />
            </Reveal>
          </div>
          <WhenInView minHeight="22rem">
            <ResultsGrid
              items={[
                { value: "800+ hrs", label: "saved every week, across the platform", glyph: "field" },
                { value: "3,500+ days", label: "of manual effort eliminated in 2025, across the platform", glyph: "layers" },
                { value: "$100K", label: "saved each year on software licences, on average", glyph: "drop" },
                { value: "50%", label: "fewer support requests", glyph: "bars" },
              ]}
            />
          </WhenInView>
        </div>
        <Reveal className="ds-story-end">
          <Link href="/work/portfolio-management" className="button button-primary">
            Read the full case study →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
