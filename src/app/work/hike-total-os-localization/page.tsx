import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { DotFlow } from "@/components/design-system/DotFlow";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";

/**
 * Multilingual Mobile Experience — on the locked case-study template.
 *
 * Prose verbatim from `projects/hike-total-os-localization/web/*.md`.
 *
 * No assets exist. The localisation pipeline the draft describes is a
 * process, so it reconstructs as a dot chain; the language comparisons need
 * real screens and carry placeholders.
 */

export const metadata: Metadata = {
  title: "Multilingual Mobile Experience — A localisation system across 8 Indian languages",
  description:
    "Establishing a repeatable localisation process from English copy through translation, review, implementation, and device validation.",  robots: caseStudyRobots,
};

const PIPELINE = ["English copy", "Language partner", "Internal review", "XML", "Device validation"];

const CHAPTERS = [
  { id: "beyond-translation", label: "Beyond translation" },
  { id: "pipeline", label: "The pipeline" },
  { id: "in-interface", label: "In the interface" },
  { id: "reflection", label: "Reflection" },
];

export default function TotalOsLocalizationPage() {
  return (
    <CaseStudyShell
      slug="hike-total-os-localization"
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              Translation is <span className="ds-accent-text">not localisation</span>.
            </>
          ),
          detail:
            "Eight scripts, each with its own demands on meaning, clarity and layout. Converting English word for word would have preserved the words and lost the intent.",
        },
        {
          label: "The task",
          lead: (
            <>
              Build a repeatable process across <span className="ds-accent-text">eight languages</span>.
            </>
          ),
          detail:
            "A repeatable path had to exist from English source copy through translation, review, implementation and validation on the handset itself.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I ran the research and <span className="ds-accent-text">the process itself</span>.
            </>
          ),
          detail:
            "I established the path each string took and checked it on device, so the intent survived the trip rather than only the words.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        artMode: "backdrop" as const,
        src: "/work/total-os/cover.jpg",
        alt: "TOTAL, built by Hike, set over a photograph of a crowd of people in turbans and headscarves",
        standfirst:
          "TOTAL OS was built to run without a connection, for people across India reading in their own script. Every string had to survive translation, review, build and a real handset before it counted as done.",
        headline: (
          <>
            Multilingual Mobile Experience: one localisation system across <span style={{ color: "var(--ds-mint)" }}>8 Indian languages</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "Product Designer" },
          { label: "Client", value: "Hike" },
          { label: "Year", value: "2017" },
          { label: "Discipline", value: "Product research · Localisation" },
        ],
      }}
      next={{
        href: "/work/hike-jobs-service",
        number: "08",
        label: "Hike",
        title: "Job Discovery & Resume Builder: from finding a job to being ready to apply.",
      }}
    >
      <CaseStudyColumn>
        <CaseStudySection id="beyond-translation" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Not a copy task"
            heading="Localisation was more than translation"
            body={[
              "The challenge was not simply converting English copy into another script. Different languages required us to preserve meaning, clarity, and product intent while accounting for the realities of multiple Indian scripts.",
              "The first rule was to decide, string by string, whether a line needed translating or transliterating. A word with a real equivalent is translated: “Welcome” becomes स्वागत है. A word people already say in English, with no everyday term of its own, is written as it sounds: “Connect” becomes कनेक्ट.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What I was after" mark="exchange">
          To communicate the same intent, not just the same words.
        </PullStatement>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="pipeline" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="How I worked"
            heading="I created a repeatable path from copy to product"
            body={[
              "I worked across the localisation process with a language service provider and internal language experts, helping establish a framework for translation, proofreading, implementation, and validation across eight languages and four projects.",
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
              "Localised copy was implemented as XML and tested across multiple mobile devices. Internal language reviewers checked each string against three questions: is the wording brief, is the tone right, and does a person understand what the action does and why.",
              "The translated and transliterated copy was then verified with 23+ participants from a range of age groups and languages, so text length, hierarchy, context and usability were judged in the actual product rather than only inside a translation document.",
              "Size was part of it. Tamil and Malayalam can take up twice the space of the English source, so the answers were to leave about 30% room, as Material design advises, or to choose shorter wording that keeps the intent.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "23+", label: "participants, across age groups and languages", glyph: "field" },
                { value: "8", label: "Indian languages", glyph: "layers" },
                { value: "5", label: "stages from English copy to a device build", glyph: "ramp" },
              ]}
            />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <ArtboardFigure
              src="/work/total-os/hindi-screens.jpg"
              width={2000}
              height={1800}
              alt="Four TOTAL screens in Hindi: on-boarding, the launcher, single sign-on with a numeric keypad, and messaging"
              caption="On-boarding, the launcher, single sign-on and messaging in Hindi"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reflection"
            heading="Localisation changes the product, not just the copy"
            body={[
              "Localisation changes more than copy. It affects layout, terminology, validation, implementation, and the way teams collaborate to ship a product consistently across languages.",
              "I wrote the method up at the time, as a short guide for teams building for more than one language.",
            ]}
          />
          <p className="body-text mt-2">
            <a
              href="https://medium.com/@mithunraju/building-products-for-the-next-million-7088fe9ba069"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Building products for the next million, on Medium
            </a>
          </p>
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
