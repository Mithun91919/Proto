import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Ratings & Reviews summary shows under its opener. Every line is the case study's own wording, cut down.
 */
export function RatingsReviewsSummary() {
  return (
    <SummaryStory
      slug="bigbasket-ratings-reviews"
      beats={[
        {
          label: "The problem",
          lead: "A star rating is quick to give and hard to act on.",
          detail: "The score arrives without the reason behind it, and the reason is the part the next shopper actually needs before buying.",
        },
        {
          label: "The task",
          lead: "Design one feedback system for every surface.",
          detail: "The experience had to read the same whether someone was rating a product on their phone or reading reviews on the web.",
        },
        {
          label: "What I did",
          lead: "I worked the system across four surfaces at once.",
          detail: "I defined reusable patterns for collecting a rating, writing a review and presenting what others had written, rather than designing each platform on its own.",
        },
      ]}
      figureLabel="The rating screen"
      figure={
        <ArtboardFigure
                layout="portrait"
                src="/work/bigbasket-ratings-reviews/Artboard.png"
                width={2316}
                height={2610}
                alt="A product rating screen with configurable attribute questions layered over it: a star-rated texture question and a multi-select effects question"
                caption="A configurable questionnaire — the questions change with the product, the pattern doesn’t"
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
                    title: "Asked in the product’s own terms",
                    detail:
                      "Texture is a question that only makes sense for this category. The questions can be set for each product, so each asks what matters to it.",
                  },
                  {
                    x: 73.2,
                    y: 38,
                    title: "Pick several when several are true",
                    detail:
                      "Effects aren’t mutually exclusive, so the question lets you choose more than one. A single choice would force a false answer.",
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
      }
    />
  );
}
