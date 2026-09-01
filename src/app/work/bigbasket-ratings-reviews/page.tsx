import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { ClipFigure } from "@/components/design-system/ClipFigure";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyOverview,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";

/**
 * Ratings & Reviews — built on the case-study template established by bb daily.
 *
 * Prose is verbatim from
 * `projects/bigbasket-ratings-reviews/web/bigbasket-ratings-reviews-web.md`.
 *
 * No metrics band: the draft states outright that no verified outcome metrics
 * are available in the source, so this page makes no numeric claim rather
 * than reaching for one.
 */

export const metadata: Metadata = {
  title: "Ratings & Reviews — Designing one feedback system across mobile and web",
  description:
    "A cross-platform ratings and reviews experience for beauty products across bigbasket's Android, iOS, web, and mobile-web experiences.",
};

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "one-model", label: "One model" },
  { id: "beyond-stars", label: "Beyond stars" },
  { id: "next-shopper", label: "The next shopper" },
  { id: "reflection", label: "Reflection" },
];

export default function RatingsReviewsPage() {
  // Not in `projects.ts`, so there's no adjacency to read. Point onward at
  // bb daily — the other bigbasket project, and the nearest neighbour.
  const onward = getProject("bb-daily");

  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        src: "/work/bigbasket-ratings-reviews/Artboard%20Copy%208.jpg",
        alt: "The ratings and reviews experience on web and mobile: a browser review form beside a phone rating screen",
        eyebrow: "Ratings & Reviews · bigbasket",
        headline: "Designing one feedback system across mobile and web.",
        meta: [
          { label: "Role", value: "UX Design" },
          { label: "Client", value: "bigbasket" },
          { label: "Year", value: "2019" },
          { label: "Discipline", value: "Consumer commerce · Cross-platform UX" },
        ],
      }}
      next={
        onward
          ? {
              href: `/work/${onward.slug}`,
              number: onward.number,
              label: onward.label,
              title: onward.title,
            }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyOverview
            statement={
              <>
                One feedback system, <span className="text-[var(--accent-deep)]">every surface</span>.
              </>
            }
            note="Android, iOS, web, and mobile web."
            body={[
              "A star rating is quick to give, but it does not always explain enough to help another shopper make a decision.",
              "I worked on a cross-platform ratings and reviews experience for beauty products across bigbasket's Android, iOS, web, and mobile-web experiences.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="one-model">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The model"
            heading="One feedback model had to work everywhere"
            body={[
              "The experience needed to feel consistent whether a customer was rating a product on mobile or reading reviews on the web.",
              "We defined reusable patterns for collecting ratings, writing reviews, and presenting review information rather than designing each platform independently.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="beyond-stars">
          <CaseStudyChapter
            eyebrow="The questionnaire"
            heading="A star rating was only the starting point"
            body={[
              "For beauty products, useful feedback often depends on more specific questions: how something felt, how it performed, or what someone thought about packaging and results.",
              "The system therefore supported a configurable questionnaire using text, single-select, multi-select, and emoji-based inputs. Different products could collect the context that mattered without forcing every review through exactly the same form.",
            ]}
          />
          <Reveal delay={80}>
            <div className="mt-14">
              <ArtboardFigure
                layout="portrait"
                src="/work/bigbasket-ratings-reviews/Artboard.png"
                width={2316}
                height={2610}
                alt="A product rating screen with configurable attribute questions layered over it: a star-rated texture question and a multi-select effects question"
                caption="A configurable questionnaire — the questions change with the product, the pattern doesn't"
                hotspots={[
                  {
                    x: 33.5,
                    y: 21,
                    title: "The star rating is the entry, not the answer",
                    detail:
                      "A score is quick to give, so it stays the first step — everything more specific is asked once the rating is already in.",
                  },
                  {
                    x: 28.2,
                    y: 38.5,
                    title: "Asked in the product's own terms",
                    detail:
                      "Texture is a question that only makes sense for this category. The questionnaire is configurable so each product can ask what matters to it.",
                  },
                  {
                    x: 73.2,
                    y: 38,
                    title: "Multi-select where more than one thing is true",
                    detail:
                      "Effects are not mutually exclusive, so the input allows several — a single-select here would force a false choice.",
                  },
                  {
                    x: 21.6,
                    y: 77.3,
                    title: "Images alongside the words",
                    detail:
                      "Photographs carry what written text often cannot for a beauty product, so uploading sits inside the same form rather than after it.",
                  },
                ]}
              />
            </div>
          </Reveal>
        </CaseStudySection>

        {/* Title stands alone, then the prose runs beside the clip — a portrait
            clip centred under a paragraph leaves most of the width empty. */}
        <CaseStudySection id="next-shopper">
          <Reveal>
            <p className="eyebrow">The reader&apos;s side</p>
            <h2 className="display-title display-section mt-3 max-w-[24ch] text-[var(--ink)]">
              Feedback had to help the next shopper
            </h2>
          </Reveal>
          <div className="mt-12 grid items-start gap-10 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <Reveal>
              <div className="space-y-5 md:pt-2">
                <p className="body-text">
                  Customers could add written reviews and images alongside their rating. The display
                  experience brought the overall score and individual reviews together so shoppers could
                  understand both the summary and the detail behind it.
                </p>
                <p className="body-text">
                  Email communication created another entry point by inviting customers to review products
                  they had already purchased, while a motion prototype helped communicate interaction
                  behaviour during implementation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <ClipFigure
                variant="beside"
                width={1080}
                height={1920}
                mp4="/work/bigbasket-ratings-reviews/R%26R_Android_Prototype_20_Nov_2018.mp4"
                alt="The Android prototype moving from the review composer through to the rating summary and individual reviews"
                caption="The motion prototype used during implementation"
              />
            </Reveal>
          </div>
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reflection"
            heading="What stayed with me"
            body={[
              "The design has to make contributing feedback lightweight while collecting enough context for that feedback to be meaningful.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      {/* One contributor feeding many readers — asymmetric, and distinct from the
          symmetric two-cluster mark bb daily closes on. */}
      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="Two audiences at once" mark="exchange">
            A useful review system serves the person sharing an experience and the person trying to make a
            decision from it.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
