import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";

/**
 * Smartphone Brand & Digital Experience — on the locked case-study template.
 *
 * Prose verbatim from `projects/creo-mark-1/web/*.md`.
 *
 * The draft asks for this one to run visual-first (~20% copy, 80% imagery),
 * so the chapters stay short and the media carries the page. The three long
 * page captures sit in a scrollable browser frame — at full width a
 * 0.36-ratio canvas would be several thousand pixels tall, so the reader
 * scrolls the page in place instead.
 */

export const metadata: Metadata = {
  title: "Smartphone Brand & Digital Experience — A visual language for a phone that changed monthly",
  description:
    "Visual design across web, social, email, and marketing for Mark 1, a smartphone whose software shipped new features every month.",  robots: caseStudyRobots,
};

const CHAPTERS = [
  { id: "product-centre", label: "The product" },
  { id: "monthly", label: "Monthly change" },
  { id: "surfaces", label: "Surfaces" },
  { id: "reflection", label: "Reflection" },
];

export default function CreoMark1Page() {
  return (
    <CaseStudyShell
      slug="creo-mark-1"
      evidence={[
        {
          label: "Problem",
          lead: (
            <>
              The product changed <span className="ds-accent-text">every month</span>.
            </>
          ),
          detail:
            "Announcing each release on its own terms would have left the brand as a run of unrelated campaigns with nothing holding them together.",
        },
        {
          label: "Task",
          lead: (
            <>
              Build one visual language across <span className="ds-accent-text">every touchpoint</span>.
            </>
          ),
          detail:
            "One visual system had to carry every channel and still absorb a change of subject each month.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I kept <span className="ds-accent-text">the product at the centre</span>.
            </>
          ),
          detail:
            "Large product imagery, high-contrast typography and a fixed set of supporting elements kept the phone and its software the dominant thing wherever it appeared.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        artMode: "backdrop" as const,
        src: "/work/creo/banner.jpg",
        alt: "Mark 1 campaign imagery: the phone shown against the brand's high-contrast visual language",
        standfirst:
          "CREO shipped new FUEL OS features to Mark 1 owners release after release, each one needing to be announced across web, social, email and campaign work.",
        headline: (
          <>
            Mark 1: a visual language for a smartphone that <span style={{ color: "var(--ds-mint)" }}>changed every month</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "Visual Design" },
          { label: "Client", value: "CREO" },
          { label: "Year", value: "2016" },
          { label: "Discipline", value: "Visual design · Brand" },
        ],
      }}
      next={{
        href: "/work/hike-total-os-localization",
        number: "10",
        label: "Hike",
        title: "Multilingual Mobile Experience: one localisation system across 8 Indian languages.",
      }}
    >
      <CaseStudyColumn>

        <CaseStudySection id="product-centre">
          <CaseStudyChapter
            layout="flow"
            eyebrow="The language"
            heading="The product stayed at the centre"
            body={[
              "The visual language used large product imagery, high-contrast typography, and a consistent set of supporting brand elements so the phone and its evolving software features remained the dominant visual element on every surface.",
            ]}
          />
          <CaseStudyFigure>
            <BrowserMockup
              route="mark-1 / product"
              src="/work/creo/screen-1.png"
              width={1548}
              height={3291}
              alt="A Mark 1 product page: large product imagery with high-contrast typography"
              caption="Large product imagery and high-contrast type, repeated across surfaces"
              scrollable
              maxHeight="40rem"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="monthly">
          <CaseStudyChapter
            layout="flow"
            eyebrow="The cadence"
            heading="The system had to change every month without losing itself"
            body={[
              "Because new software features were released regularly, web and commerce surfaces had to evolve with them.",
              "Software pages and Flipkart content were updated to explain what had changed while keeping each release connected to the same product story.",
            ]}
          />
          <CaseStudyFigure label="Six messages, one system">
            <ArtboardCarousel
              label="Mark 1 campaign creative"
              slides={[
                {
                  title: "A new phone, every month",
                  src: "/work/creo/campaign-light.jpg",
                  width: 1200,
                  height: 628,
                  alt: "Mark 1 campaign: a phone with a plume of orange ink rising from its screen, the line “A New Phone, Every Month.” and Available on Flipkart",
                  caption: "The standing line, on a light ground, with where to buy it.",
                },
                {
                  title: "The same line, on dark",
                  src: "/work/creo/campaign-dark.jpg",
                  width: 1200,
                  height: 628,
                  alt: "Mark 1 campaign: a phone with a plume of pink and blue ink rising from its screen, the line “A New Phone, Every Month.” on a dark ground",
                  caption: "The same line and the same phone, with the colour of the month changed.",
                },
                {
                  title: "Coming soon",
                  src: "/work/creo/coming-soon.jpg",
                  width: 1024,
                  height: 512,
                  alt: "Mark 1 teaser: the back of the phone with the line “A new phone, every month”, Coming Soon on Flipkart and creosense.com, and the Runs on Fuel mark",
                  caption: "A teaser ahead of sales, carrying the Runs on Fuel mark.",
                },
                {
                  title: "Sales open",
                  src: "/work/creo/sales-open.png",
                  width: 880,
                  height: 440,
                  alt: "Mark 1 announcement: Sales open on 19 April at 12:00 AM, available on Flipkart and creosense.com, with the first 2,000 customers getting free engraving and a phone cover",
                  caption: "A date and a time, with the product at an angle.",
                },
                {
                  title: "A feature, in use",
                  src: "/work/creo/feature-sense.jpg",
                  width: 1024,
                  height: 512,
                  alt: "Mark 1 feature post: a hand holding the phone with a search for “food” open, headed Sense, double tap for anything",
                  caption: "A software feature shown on a real screen in a hand, under the same mark.",
                },
                {
                  title: "A different subject",
                  src: "/work/creo/skyline.webp",
                  width: 1024,
                  height: 512,
                  alt: "A night skyline in dark blue with lit windows, the CREO mark at the bottom left and the Runs on Fuel mark at the bottom right",
                  caption: "No phone at all, and still recognisably the same brand.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="surfaces">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reach"
            heading="One language, different surfaces"
            body={[
              "The same visual system extended into social campaigns, email, animated GIFs, and other places customers met the brand.",
              "The value was not making every asset look identical. It was creating enough consistency that each new message still felt like part of the same brand.",
            ]}
          />
          <CaseStudyFigure>
            <BrowserMockup
              route="mark-1 / campaign"
              src="/work/creo/user-1.jpg"
              width={2880}
              height={5320}
              alt="Campaign creative applying the same visual system to a customer-facing surface"
              caption="The same system, a different surface"
              scrollable
              maxHeight="40rem"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reflection"
            heading="Consistency is not repetition"
            body={[
              "Consistency is not repetition. A useful visual system gives different surfaces enough freedom to communicate while still feeling unmistakably related.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What it came down to" mark="rhythm">
          Recognisable isn&apos;t the same as identical.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
