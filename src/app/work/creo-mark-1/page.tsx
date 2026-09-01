import type { Metadata } from "next";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { MediaPlaceholder } from "@/components/design-system/MediaPlaceholder";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudyOverview,
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
  { id: "overview", label: "Overview" },
  { id: "product-centre", label: "The product" },
  { id: "monthly", label: "Monthly change" },
  { id: "surfaces", label: "Surfaces" },
  { id: "reflection", label: "Reflection" },
];

export default function CreoMark1Page() {
  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        src: "/work/creo/banner.jpg",
        alt: "Mark 1 campaign imagery: the phone shown against the brand's high-contrast visual language",
        eyebrow: "Smartphone Brand & Digital Experience · CREO",
        headline: "Building a visual language for a smartphone that changed every month.",
        meta: [
          { label: "Role", value: "Visual Design" },
          { label: "Client", value: "CREO" },
          { label: "Year", value: "2016" },
          { label: "Discipline", value: "Visual design · Web + brand" },
        ],
      }}
      next={{
        href: "/work/hike-total-os-localization",
        number: "10",
        label: "Hike",
        title: "Building a localization system across 8 Indian languages.",
      }}
    >
      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyOverview
            statement={
              <>
                A system that changed monthly{" "}
                <span className="text-[var(--accent-deep)]">without losing itself</span>.
              </>
            }
            note="Mark 1, powered by FUEL OS."
            body={[
              "Mark 1 was a smartphone powered by FUEL OS, with new software features introduced through monthly updates.",
              "I worked across visual design, web, social, email, and marketing to create a consistent language for communicating those updates while keeping the product itself at the centre of the story.",
            ]}
          />
        </CaseStudySection>

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
