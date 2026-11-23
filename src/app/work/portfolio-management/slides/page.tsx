import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudyRobots } from "@/content/seo";
import { DotNodes, DotTrio, type DotNode } from "@/components/design-system/DotNodes";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { SlideDeck, type Slide } from "@/components/design-system/SlideDeck";

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
const CHAIN = ["Goal", "Initiative", "Product", "Person", "Jira epic"].map((label): DotNode => ({ label }));

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

const SLIDES: Slide[] = [
  {
    label: "The problem",
    content: (
      <div className="ds-slide-grid">
        <div>
          <p className="eyebrow ds-slide-eyebrow">Why it mattered</p>
          <h2 className="display-title ds-slide-lead mt-4">
            People were the only link between the plan and the work.
          </h2>
          <p className="ds-slide-detail">
            Leaders had no shared view of progress, and teams chased information and approvals across email, Slack and tickets.
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
          <h2 className="display-title ds-slide-lead mt-4">One platform that connects them.</h2>
          <p className="ds-slide-detail">
            We replaced four external tools with one connected platform, so goals can be traced to the work behind them.
          </p>
          <p className="ds-slide-dots-note">The same dots, now joined.</p>
        </div>
        <DotNodes nodes={CHAIN} state="connected" label="The pieces of a goal, joined from goal to Jira epic" />
      </div>
    ),
  },
  {
    label: "Goal",
    content: (
      <Step
        eyebrow="Goal"
        title="A goal and its work now come from the same records."
        description="Each goal shows the planned number of people beside the actual number from Jira."
        active={0}
        shot={{
          src: "/work/portfolio-management/okr-management-v2.png",
          alt: "The Portfolio page: goals read by director and business area, with planned and actual headcount side by side",
        }}
      />
    ),
  },
  {
    label: "Initiative",
    content: (
      <Step
        eyebrow="Initiative"
        title="Where the money is declared, and tied to the work."
        description="Each initiative lists the products that deliver it, its Jira link and a named person for every role."
        active={1}
        shot={{
          src: "/work/portfolio-management/initiative-details.png",
          alt: "Initiative Details: the products that deliver it, its Jira link and its named roles",
        }}
      />
    ),
  },
  {
    label: "Product",
    content: (
      <Step
        eyebrow="Product"
        title="Creating a product follows one standard workflow."
        description="Each product team is tied to the Jira project its work is tracked in."
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
        title="One place to find a person, and what they are working on."
        description="Each person shows the products and initiatives they work on, as a share of their time."
        active={3}
        shot={{
          src: "/work/portfolio-management/my-profile.png",
          alt: "My Profile: a person's place in the organisation and the products and initiatives they work on",
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
            One designer across three product managers and three engineering teams.
          </h2>
          <p className="ds-slide-detail">
            I led problem-framing sessions, worked a sprint ahead of engineering, and brought the teams together around one product experience.
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
              { value: "800+ hrs", label: "reclaimed every week, across the platform", glyph: "field" },
              { value: "3,500+ days", label: "of manual effort eliminated in 2025, across the platform", glyph: "layers" },
              { value: "$100K", label: "average yearly licence cost saved", glyph: "drop" },
              { value: "50%", label: "fewer support tickets", glyph: "bars" },
            ]}
          />
        </div>
        <p className="mt-4 text-[0.85rem] text-[var(--muted)]">
          Hours are reported by the product managers. Licence figure is the average yearly cost saved by retiring redundant licences.
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
