import type { Metadata } from "next";
import { DotFlow } from "@/components/design-system/DotFlow";
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
 * Multilingual Mobile Experience — on the locked case-study template.
 *
 * Prose verbatim from `projects/hike-total-os-localization/web/*.md`.
 *
 * No assets exist. The localization pipeline the draft describes is a
 * process, so it reconstructs as a dot chain; the language comparisons need
 * real screens and carry placeholders.
 */

export const metadata: Metadata = {
  title: "Multilingual Mobile Experience — A localization system across 8 Indian languages",
  description:
    "Establishing a repeatable localization process from English copy through translation, review, implementation, and device validation.",
};

const PIPELINE = ["English copy", "Language partner", "Internal review", "XML", "Device validation"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "beyond-translation", label: "Beyond translation" },
  { id: "pipeline", label: "The pipeline" },
  { id: "in-interface", label: "In the interface" },
  { id: "reflection", label: "Reflection" },
];

export default function TotalOsLocalizationPage() {
  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        eyebrow: "Multilingual Mobile Experience · Hike",
        headline: "Building a localization system across 8 Indian languages.",
        meta: [
          { label: "Role", value: "Product Research" },
          { label: "Client", value: "Hike" },
          { label: "Year", value: "2017" },
          { label: "Discipline", value: "Product research · Localization · Mobile" },
        ],
      }}
      next={{
        href: "/work/hike-jobs-service",
        number: "08",
        label: "Hike",
        title: "Helping people move from finding a job to being ready to apply.",
      }}
    >
      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyOverview
            statement={
              <>
                Eight languages, <span className="text-[var(--accent-deep)]">one intent</span>.
              </>
            }
            note="Four projects, eight languages."
            body={[
              "TOTAL OS included services designed to work without the internet and support users across eight Indian languages.",
              "My work focused on establishing a repeatable localization process that could move product copy from English through translation, review, implementation, and device-level validation while preserving the intent of the original experience.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              needs="The same product screen shown across several of the eight languages, as the page hero."
              source="Draft beat: MEDIA — HERO"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="beyond-translation">
          <CaseStudyChapter
            layout="flow"
            eyebrow="The problem"
            heading="Localization was more than translation"
            body={[
              "The challenge was not simply converting English copy into another script. Different languages required us to preserve meaning, clarity, and product intent while accounting for the realities of multiple Indian scripts.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="The goal" mark="exchange">
          To communicate the same intent, not just the same words.
        </PullStatement>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="pipeline" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The process"
            heading="We created a repeatable path from copy to product"
            body={[
              "I worked across the localization process with a language service provider and internal language experts, helping establish a framework for translation, proofreading, implementation, and validation across eight languages and four projects.",
            ]}
          />
          <CaseStudyFigure rule label="From English copy to a validated device build">
            <DotFlow stages={PIPELINE} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="in-interface">
          <CaseStudyChapter
            eyebrow="Validation"
            heading="Language decisions were tested in the interface"
            body={[
              "Localized copy was implemented as XML and evaluated across multiple mobile devices with internal language reviewers.",
              "That allowed text length, hierarchy, context, and usability to be evaluated in the actual product rather than only inside a translation document.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              ratio={16 / 9}
              needs="The same screen compared across four to eight languages, showing how text length and hierarchy shift between scripts."
              source="Draft beat: MEDIA — LANGUAGE SCREEN COMPARISON"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reflection"
            heading="What stayed with me"
            body={[
              "Localization changes more than copy. It affects layout, terminology, validation, implementation, and the way teams collaborate to ship a product consistently across languages.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What it came down to" mark="connection">
          Eight languages is a coordination problem before it&apos;s a copy problem.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
