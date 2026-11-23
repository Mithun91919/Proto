import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudyRobots } from "@/content/seo";
import { getProject } from "@/content/projects";
import { DotNodes, DotTrio, type DotNode } from "@/components/design-system/DotNodes";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { ClipVideo } from "@/components/design-system/ClipFigure";
import { SlideDeck, WhenActive, type Slide } from "@/components/design-system/SlideDeck";

/**
 * Portfolio Management, as slides: the summary's content, one idea per slide,
 * with the dots as the way into each. A trial of the format, kept apart from
 * the live summary at /work/portfolio-management so the two can be compared.
 *
 * Every line outside the dot captions is the case study's own wording, the same
 * as the summary. The captions (`.ds-slide-dots-note`) are the only new words,
 * and each says what the dots on that slide stand for.
 */
export const metadata: Metadata = {
  title: "Portfolio Management Platform, as slides",
  robots: caseStudyRobots,
};

/** The things a goal runs through, in order. The same five on every slide that shows the chain. */
const CHAIN = ["Goal", "Project", "Product", "Person", "Tasks"].map((label): DotNode => ({ label }));

type Shot = { src: string; alt: string };

/** One slide: the words on the left; on the right the chain, and a screen if the step has one. */
function Step({
  eyebrow,
  title,
  description,
  active,
  shot,
}: {
  eyebrow: string;
  title: string;
  description: string;
  /** Which dot of the chain is lit. */
  active: number;
  shot: Shot;
}) {
  return (
    <div className="ds-slide-grid has-shot">
      <div>
        <p className="eyebrow ds-slide-eyebrow">{eyebrow}</p>
        <h2 className="display-title ds-slide-lead mt-4">{title}</h2>
        <p className="ds-slide-detail">{description}</p>
      </div>
      <div className="ds-slide-visual">
        <DotNodes nodes={CHAIN} state="connected" active={active} label={`Step ${active + 1} of the chain: ${CHAIN[active].label}`} />
        <Image className="ds-slide-shot" src={shot.src} alt={shot.alt} width={1920} height={1080} sizes="60vw" priority={false} />
      </div>
    </div>
  );
}

const PROJECT = getProject("portfolio-management");

const SLIDES: Slide[] = [
  {
    label: "Introduction",
    content: (
      <div className="ds-slide-grid has-shot">
        <div>
          <p className="eyebrow ds-slide-eyebrow">Case study</p>
          <h2 className="display-title ds-slide-lead ds-slide-title mt-4">Portfolio Management Platform</h2>
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
        </div>
        <div className="ds-slide-visual">
          {/* The card's own clip. Mounted only while this slide shows, so it
              does not keep playing behind the slides that follow. */}
          {PROJECT?.media ? (
            <WhenActive>
              <ClipVideo
                className="ds-slide-video"
                mp4={PROJECT.media.mp4}
                webm={PROJECT.media.webm}
                poster={PROJECT.media.poster}
                alt="The Portfolio Management Platform: its screens, from a goal down to the people on it"
                width={1600}
                height={1046}
              />
            </WhenActive>
          ) : null}
        </div>
      </div>
    ),
  },
  {
    label: "The problem",
    content: (
      <div className="ds-slide-grid">
        <div>
          <p className="eyebrow ds-slide-eyebrow">Why it mattered</p>
          <h2 className="display-title ds-slide-lead mt-4">
            Only people connected the plan to the work.
          </h2>
          <p className="ds-slide-detail">
            Leaders couldn’t see how things were going. Teams spent their time chasing answers and approvals over email, Slack and tickets.
          </p>
          <p className="ds-slide-dots-note">Picture each of these as a dot. Nothing joined them except people.</p>
        </div>
        <DotNodes nodes={CHAIN} state="scattered" label="The pieces of a goal, with nothing joining them" />
      </div>
    ),
  },
  {
    label: "The idea",
    content: (
      <div className="ds-slide-grid">
        <div>
          <p className="eyebrow ds-slide-eyebrow">What we built</p>
          <h2 className="display-title ds-slide-lead mt-4">One tool that joins them up.</h2>
          <p className="ds-slide-detail">
            We replaced four separate tools with one, so you can follow a goal all the way down to the work being done for it.
          </p>
          <p className="ds-slide-dots-note">The same dots, now joined.</p>
        </div>
        <DotNodes nodes={CHAIN} state="connected" label="The pieces of a goal, joined from the goal down to its tasks" />
      </div>
    ),
  },
  {
    label: "Goal",
    content: (
      <Step
        eyebrow="Goal"
        title="See a goal and the work behind it in one place."
        description="Next to each goal: how many people were planned for it, and how many are actually working on it."
        active={0}
        shot={{
          src: "/work/portfolio-management/okr-management-v2.png",
          alt: "The Portfolio page: goals read by director and business area, with planned and actual headcount side by side",
        }}
      />
    ),
  },
  {
    label: "Project",
    content: (
      <Step
        eyebrow="Project"
        title="Every funded project shows who is doing it."
        description="Each project lists the products building it, a link to its tasks in Jira (the team’s task tracker), and a named person in every role."
        active={1}
        shot={{
          src: "/work/portfolio-management/initiative-details.png",
          alt: "The project page, titled Initiative Details in the tool: the products building it, its Jira link and its named roles",
        }}
      />
    ),
  },
  {
    label: "Product",
    content: (
      <Step
        eyebrow="Product"
        title="Adding a product now follows one standard set of steps."
        description="Each product’s teams are linked to the Jira project where their tasks are tracked."
        active={2}
        shot={{
          src: "/work/portfolio-management/product-details.png",
          alt: "Product Details: its owners, its place in the organisation and each team tied to its Jira project",
        }}
      />
    ),
  },
  {
    label: "Person",
    content: (
      <Step
        eyebrow="Person"
        title="Find anyone and see what they work on."
        description="Each person’s page shows their products and projects, and how their time is split between them."
        active={3}
        shot={{
          src: "/work/portfolio-management/my-profile.png",
          alt: "My Profile: a person's place in the organisation and the products and projects they work on",
        }}
      />
    ),
  },
  {
    label: "What I did",
    content: (
      <div className="ds-slide-grid">
        <div>
          <p className="eyebrow ds-slide-eyebrow">What I did</p>
          <h2 className="display-title ds-slide-lead mt-4">
            I was the only designer, working with three product managers and three engineering teams.
          </h2>
          <p className="ds-slide-detail">
            I ran sessions to pin down the problem, designed one work cycle ahead of the engineers, and got the teams working on one product, not three.
          </p>
        </div>
        <DotTrio
          left={{ label: "Product managers", count: 3 }}
          centre="Design"
          right={{ label: "Engineering teams", count: 3 }}
        />
      </div>
    ),
  },
  {
    label: "What changed",
    content: (
      <div>
        <p className="eyebrow ds-slide-eyebrow">What changed</p>
        <div className="mt-6">
          <ProofStrip
            items={[
              { value: "800+ hrs", label: "saved every week, across the platform", glyph: "field" },
              { value: "3,500+ days", label: "of manual effort eliminated in 2025, across the platform", glyph: "layers" },
              { value: "$100K", label: "saved each year on software licences, on average", glyph: "drop" },
              { value: "50%", label: "fewer support requests", glyph: "bars" },
            ]}
          />
        </div>
        <p className="mt-4 text-[0.85rem] text-[var(--muted)]">
          Hours are reported by the product managers. The software saving is the average yearly cost of licences that were no longer needed.
        </p>
      </div>
    ),
  },
];

export default function PortfolioSlidesPage() {
  return (
    <div className="ds-stage-page">
      {/* The case study hero's own dark band (`ds-pull`), run the full height of
          the page, so it carries the same dot field and runs up under the
          header. It takes none of the hero's own classes, because those are
          keyed to the case-study/summary toggle and would hide it. `ds-stage`
          turns the colours over for the deck inside it; `ds-stage-full` drops
          the deck's card and lets it fill the band, so there is no title block
          taking height from the slides. The page's name is still the h1, for
          screen readers and the tab. */}
      <div className="ds-pull ds-stage ds-stage-full">
        <div className="ds-pull-inner">
          <h1 className="sr-only">Portfolio Management Platform, summary as slides</h1>
          <SlideDeck slides={SLIDES} label="Portfolio Management Platform, summary as slides" />
          <p className="ds-stage-foot">
            <Link href="/work/portfolio-management" className="underline underline-offset-4">
              Read the full case study →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
