import type { Metadata } from "next";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { MediaPlaceholder } from "@/components/design-system/MediaPlaceholder";
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
 * page captures are held to narrow columns — at full width a 0.36-ratio
 * canvas would be several thousand pixels tall.
 */

export const metadata: Metadata = {
  title: "Smartphone Brand & Digital Experience — A visual language for a phone that changed monthly",
  description:
    "Visual design across web, social, email, and marketing for Mark 1, a smartphone whose software shipped new features every month.",
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
              The product changed <span className="ds-accent-deep-text">every month</span>.
            </>
          ),
          detail:
            "Announcing each release on its own terms would have left the brand as a run of unrelated campaigns with nothing holding them together.",
        },
        {
          label: "Task",
          lead: (
            <>
              Build one visual language across <span className="ds-accent-deep-text">every touchpoint</span>.
            </>
          ),
          detail:
            "One visual system had to carry every channel and still absorb a change of subject each month.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I kept <span className="ds-accent-deep-text">the product at the centre</span>.
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
              "The visual language used large product imagery, high-contrast typography, and a consistent set of supporting brand elements so the phone and its evolving software features remained the dominant visual element across touchpoints.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="30rem"
              src="/work/creo/screen-1.png"
              width={1548}
              height={3291}
              alt="A Mark 1 product page: large product imagery with high-contrast typography"
              caption="Large product imagery and high-contrast type, repeated across surfaces"
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
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="30rem"
              src="/work/creo/screen-2.jpg"
              width={2880}
              height={8000}
              alt="A monthly software update page explaining the features introduced in that release"
              caption="A monthly update page — new content each release, the same product story"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="surfaces">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reach"
            heading="One language, different surfaces"
            body={[
              "The same visual system extended into social campaigns, email, animated GIFs, and other customer touchpoints.",
              "The value was not making every asset look identical. It was creating enough consistency that each new message still felt like part of the same brand.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="30rem"
              src="/work/creo/user-1.jpg"
              width={2880}
              height={5320}
              alt="Campaign creative applying the same visual system to a customer-facing surface"
              caption="The same system, a different surface"
            />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <MediaPlaceholder
              ratio={16 / 9}
              needs="A cross-channel collage — web, social, email, and animated GIF assets side by side — showing the system holding across touchpoints."
              source="Draft beat: MEDIA — CROSS-CHANNEL COLLAGE"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reflection"
            heading="What stayed with me"
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
