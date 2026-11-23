import type { Metadata } from "next";
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

/** The things a goal runs through, in order. The same five on the first two slides. */
const CHAIN = ["Goal", "Initiative", "Product", "Person", "Jira epic"];
const asNodes = (labels: string[]): DotNode[] => labels.map((label) => ({ label }));

/** The five screens, in the order a goal runs through them. */
const SCREENS: DotNode[] = [
  {
    label: "Goal",
    image: {
      src: "/work/portfolio-management/okr-management-v2.png",
      alt: "The Portfolio page: goals read by director and business area, with planned and actual headcount side by side",
      width: 3456,
      height: 3088,
    },
  },
  {
    label: "Initiative",
    image: {
      src: "/work/portfolio-management/initiative-details.png",
      alt: "Initiative Details: the products that deliver it, its Jira link and its named roles",
      width: 2880,
      height: 2820,
    },
  },
  {
    label: "Product",
    image: {
      src: "/work/portfolio-management/product-details.png",
      alt: "Product Details: its owners, its place in the organisation and each team tied to its Jira project",
      width: 2880,
      height: 2431,
    },
  },
  {
    label: "Person",
    image: {
      src: "/work/portfolio-management/my-profile.png",
      alt: "My Profile: a person's place in the organisation and the products and initiatives they work on",
      width: 2880,
      height: 2557,
    },
  },
  {
    label: "Requests",
    image: {
      src: "/work/portfolio-management/admin.png",
      alt: "The Manager page: product, initiative and application requests with their status",
      width: 2880,
      height: 2210,
    },
  },
];

const SLIDES: Slide[] = [
  {
    label: "Why it mattered",
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
          <p className="ds-slide-dots-note">
            Picture each of these as a dot. Nothing joined them except people.
          </p>
        </div>
        <DotNodes nodes={asNodes(CHAIN)} state="scattered" label="The pieces of a goal, with nothing joining them" />
      </div>
    ),
  },
  {
    label: "What we built",
    content: (
      <div className="ds-slide-grid">
        <div>
          <p className="eyebrow ds-slide-eyebrow">What we built</p>
          <h2 className="display-title ds-slide-lead mt-4">The platform made that connection visible.</h2>
          <p className="ds-slide-detail">
            We replaced four external tools with one connected platform, so goals can be traced to the work behind them.
          </p>
          <p className="ds-slide-dots-note">The same dots, now joined.</p>
        </div>
        <DotNodes nodes={asNodes(CHAIN)} state="connected" label="The pieces of a goal, joined from goal to Jira epic" />
      </div>
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
    label: "The platform",
    content: (
      <div>
        <p className="eyebrow ds-slide-eyebrow">The platform</p>
        <h2 className="display-title ds-slide-lead mt-4">A goal runs down to the work.</h2>
        <p className="ds-slide-detail" style={{ maxWidth: "46rem" }}>
          Five screens follow one goal: the goal itself, the initiative it funds, the product that delivers it, the people on it, and the requests that change them.
        </p>
        <div className="mt-10">
          <DotNodes nodes={SCREENS} state="connected" label="The five screens, from a goal down to the requests that change it" />
        </div>
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
          turns the colours over for the deck inside it. */}
      <div className="ds-pull ds-stage">
        <div className="ds-pull-inner">
          <span className="ds-pull-dots" aria-hidden />
          <p className="eyebrow ds-slide-eyebrow">Case study · summary as slides</p>
          <h1 className="display-title mt-4" style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1.05 }}>
            Portfolio Management Platform
          </h1>
          <div className="mt-9">
            <SlideDeck slides={SLIDES} label="Portfolio Management Platform, summary as slides" />
          </div>

          <p className="mt-10 text-[0.95rem]">
            <Link href="/work/portfolio-management" className="underline underline-offset-4" style={{ color: "var(--ds-dark-ink)" }}>
              Read the full case study →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
