import { DotChoice, DotNodes, type DotNode } from "@/components/design-system/DotNodes";
import { StorySummary, StoryClip, StoryDots, StoryScreen, StoryVisual, StoryWords } from "@/components/design-system/StorySummary";
import type { StoryStep } from "@/components/design-system/ScrollStory";

/**
 * The bb daily summary: the case study told by scrolling, down the five stages
 * of a delivery the case study itself draws, from a customer's subscription to
 * the doorstep. The first two steps are the research (the field visits and the
 * prototype testing, then the customers' own reviews). The customer app is shown in phone recordings, the
 * operations app in its own screens. Every line is the case study's own wording;
 * the only new words are the notes under the pictures. See the design system,
 * section N, for the conditions.
 */

/** The five stages between a customer's subscription and a delivery, as the case study draws them. */
const FLOW: DotNode[] = ["Subscription", "Procurement", "Inventory", "Shipment", "Delivery"].map((label) => ({ label }));

/** A step along the flow: the flow with one dot lit, and a real screen of that step under it. */
function flowVisual(active: number, children: React.ReactNode) {
  return (
    <StoryVisual dots={<DotNodes nodes={FLOW} state="connected" active={active} label={`Stage ${active + 1} of the delivery: ${FLOW[active].label}`} />}>
      {children}
    </StoryVisual>
  );
}

const STEPS: StoryStep[] = [
  {
    label: "How we found it",
    text: (
      <StoryWords
        eyebrow="How we found it"
        title="Field visits showed a service that ran on paper and handoffs."
        points={[
          "I spent time in the dark stores (warehouses that fill online orders) and went out on deliveries with the agents before designing.",
          "Field visits showed how much of the process depended on paperwork and manual handoffs.",
          "We tested by putting the prototype in the hands of the people who would use it and watching what they did with it.",
        ]}
      />
    ),
    visual: (
      <div className="ds-slide-visual">
        <StoryScreen
          src="/work/bbdaily/field-paper-slip.jpg"
          alt="A delivery agent kneeling on the ground at night, reading a paper slip beside a crate of milk sachets and a sack"
          width={1500}
          height={1200}
        />
        <p className="ds-slide-dots-note">My own photograph from a field visit. Faces are out of frame.</p>
      </div>
    ),
  },
  {
    label: "What customers said",
    text: (
      <StoryWords
        eyebrow="What customers said"
        title="Customers’ own reviews named the friction in the existing app."
        points={[
          "Customers found it hard to modify an order, or to review the goods they had ordered before editing.",
          "One said there was no notification when the wallet balance ran low, so the order was changed automatically.",
          "Another said that after a failed order there was no way back to the items already selected.",
        ]}
      />
    ),
    visual: (
      <div className="ds-slide-visual">
        <StoryScreen
          src="/work/bbdaily/BB_Daily_Milk_Basket%20Copy%204%20(1).jpg"
          alt="A collage of four user reviews of the existing app, each giving one or two stars and describing friction in ordering"
          width={5034}
          height={2481}
        />
        <p className="ds-slide-dots-note">Documented user feedback from the period.</p>
      </div>
    ),
  },
  {
    label: "What we built",
    text: (
      <StoryWords
        eyebrow="What we built"
        title="One service, built as a customer app and an operations app."
        points={[
          "We covered both halves: the customer app on Android and iOS, and an Android app the operations teams used.",
          "A customer action on one screen could create work for several people in the physical world.",
          "It is a separate app with an integration on bigbasket, so each can keep innovating in its own area.",
        ]}
      />
    ),
    visual: (
      <StoryDots
        nodes={FLOW}
        state="connected"
        label="The five stages between a subscription and a doorstep, joined"
        note="Each dot is a stage between a subscription and a doorstep."
      />
    ),
  },
  {
    label: "Subscribe",
    text: (
      <StoryWords
        eyebrow="Subscribe"
        title="A recurring order opens a schedule, not a checkout."
        points={[
          "The product page offers two commitments side by side: subscribe, or buy once.",
          "Subscribing opens a schedule: daily, alternate days, weekly, or days picked by hand.",
          "The first delivery date is set before anything is confirmed.",
        ]}
      />
    ),
    visual: flowVisual(
      0,
      <StoryClip
        mp4="/work/bbdaily/recurring-order.mp4"
        poster="/work/bbdaily/recurring-order-poster.jpg"
        alt="Starting a recurring order: choosing a product, picking a schedule, and subscribing"
        width={704}
        height={1294}
        portrait
      />,
    ),
  },
  {
    label: "Reach",
    text: (
      <StoryWords
        eyebrow="Reach"
        title="Eligibility comes first, so no one builds a subscription they cannot have."
        points={[
          "Delivery was available only to supported apartments and gated communities.",
          "Nearby societies come first, then apartment or individual house.",
          "An address outside the rounds gets a request form, not a refusal.",
        ]}
      />
    ),
    visual: flowVisual(
      0,
      <StoryClip
        mp4="/work/bbdaily/serviceability.mp4"
        poster="/work/bbdaily/serviceability-poster.jpg"
        alt="Choosing a serviceable address in the bb daily app: a list of nearby societies, an apartment or individual house choice, then a request form for an unsupported address"
        width={982}
        height={1698}
        portrait
      />,
    ),
  },
  {
    label: "Receive",
    text: (
      <StoryWords
        eyebrow="Receive"
        title="Receiving puts what was expected beside what arrived."
        points={[
          "Each line carries what was expected next to what actually arrived, so a shortfall shows while someone is still counting.",
          "A discrepancy is raised at the item, at the moment the count is made.",
          "The handoff carries the count, so the next person inherits an accurate picture.",
        ]}
      />
    ),
    visual: flowVisual(
      2,
      <StoryScreen
        src="/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2011.jpg"
        alt="Operations app shipment receiving: milk shipment intake, reconciliation against expected crates, and completion"
        width={4581}
        height={2340}
      />,
    ),
  },
  {
    label: "Deliver",
    text: (
      <StoryWords
        eyebrow="Deliver"
        title="Delivery works down a drop point, flat by flat."
        points={[
          "The round has three modes: counting what is loaded, running the delivery, and reviewing what was completed.",
          "Bag ID search and a scanner sit above the list.",
          "Each drop point carries its own bag count, and floor and flat lead the order screen.",
        ]}
      />
    ),
    visual: flowVisual(
      4,
      <StoryScreen
        src="/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2012.jpg"
        alt="Operations app deliveries: delivery count, bag-ID search by drop point, and per-flat order detail"
        width={4581}
        height={2340}
      />,
    ),
  },
  {
    label: "One app",
    text: (
      <StoryWords
        eyebrow="One app"
        title="Six roles share one app, and none see the same one."
        points={[
          "I argued against a common experience with everything in it, navigated differently by each role.",
          "After login the app resolves to the person’s own work, in the terms they already use.",
          "Everyone uses the same operational record, and almost none of the same screens.",
        ]}
      />
    ),
    visual: (
      <StoryVisual
        dots={
          <DotChoice
            options={[{ label: "One shared home" }, { label: "Each role’s own work", chosen: true }]}
            label="Two ways to build the operations app: one shared home, or each role's own work; each role's own work was chosen"
          />
        }
      >
        <StoryScreen
          src="/work/bbdaily/BB_Daily_Milk_Basket%20Copy%2010.jpg"
          alt="Operations app login: welcome screen, OTP entry, and signing in as a customer experience executive"
          width={4581}
          height={2340}
        />
      </StoryVisual>
    ),
  },
  {
    label: "What I did",
    text: (
      <StoryWords
        eyebrow="What I did"
        title="I ran research and UX for both sides of the service."
        points={[
          "I worked across the customer app on Android and iOS and the Android operations app.",
          "I ran the field visits and tested the prototype with the people who would use it.",
          "What the customer app promised matched what the operations app had to coordinate.",
        ]}
      />
    ),
    visual: <StoryDots nodes={FLOW} state="connected" label="The five stages between a subscription and a doorstep, joined" />,
  },
];

export function BbDailySummary() {
  return (
    <StorySummary
      slug="bb-daily"
      title="bb daily"
      standfirst="I ran research and UX for both sides of bigbasket’s recurring delivery service: the customer app, and the operations app behind each delivery. At the time, the service reached 10+ cities and 1.5M+ users."
      heroClip={{
        mp4: "/work/bbdaily/home-experience.mp4",
        poster: "/work/bbdaily/home-experience-poster.jpg",
        alt: "The bb daily customer home: search, offers, everyday essentials, and popular products with subscribe actions",
        width: 704,
        height: 1322,
      }}
      introAlt="bb daily: the customer app and the operations app, two sides of one service"
      storyLabel="bb daily, told step by step"
      steps={STEPS}
      results={{
        title: "The service at the time I worked on it.",
        points: ["These figures describe the product when I worked on it, not results caused by the design."],
        items: [
          { value: "10+", label: "cities", glyph: "ring" },
          { value: "1.5M+", label: "service users", glyph: "field" },
          { value: "120K", label: "average daily deliveries across the service", glyph: "layers" },
        ],
      }}
    />
  );
}
