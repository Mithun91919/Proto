import type { ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the Portfolio Management summary shows under the case study's own hero:
 * the problem, the solution and what I did; the platform's screens, paged
 * through from a goal down to the people; and what changed. The hero above it,
 * and the closing statement and way into the full page below it, are the
 * page's own, so switching to the summary changes nothing but what sits
 * between them. Every line is the case study's own wording.
 */

/**
 * One screen for each place a goal runs through, in the order it runs: the
 * goal, the initiative it funds, the product that delivers it, the person on
 * it, and the changes managed around it. Titles, captions and callouts are the
 * case study's own.
 */
const SLIDES: ArtboardSlide[] = [
  {
    title: "Portfolio: OKR Management",
    route: "/portfolio/okr",
    src: "/work/portfolio-management/okr-management-v2.png",
    width: 3456,
    height: 3088,
    alt: "The Portfolio page at OKR Management: directors to choose from, strategic pillars as cards, status counts, and objectives with planned and actual headcount",
    caption: "Goals are read by director and by business area, with the planned and actual number of people side by side for each.",
    hotspots: [
      { x: 51.4, y: 42.4, title: "Plan and work, side by side", detail: "For every goal, the planned number of people (entered in Pfolio) sits beside the actual number from Jira." },
      { x: 30.0, y: 12.1, title: "A goal belongs to a leader", detail: "Choose a director and their reports to see the goals set under them." },
      { x: 85.6, y: 42.4, title: "Each goal names where it belongs", detail: "The business area, the product and the program are columns beside the goal." },
      { x: 35.6, y: 25.4, title: "Business areas as filters", detail: "Each business area is a card with its number of people. Clicking one filters the goals below." },
      { x: 24.6, y: 35.1, title: "Goals by state", detail: "All, Behind, At Risk, On Track and Bookmarked, each with a count." },
      { x: 8.4, y: 8.3, title: "Requests and goals on one page", detail: "New requests, all requests and goal management are tabs under Portfolio." },
    ],
  },
  {
    title: "Initiative: Details",
    route: "/initiative/details",
    src: "/work/portfolio-management/initiative-details.png",
    width: 2880,
    height: 2820,
    alt: "Initiative Details: name, hierarchy, ID, Jira link, sub-initiatives and status on the left, and the description, impacted markets and businesses, a product allocation table and named roles on the right",
    caption: "The products under the initiative, its Jira link, its named owners, and its costs and benefits one tab over.",
    hotspots: [
      { x: 38.0, y: 30.8, title: "The products that deliver it", detail: "Each product that supports the initiative is listed with its business area, engineering manager and status." },
      { x: 22.5, y: 33.8, title: "The link to the work", detail: "The Jira link sits on the page, so the epic (a group of tickets) the initiative’s work is tagged to is one click away." },
      { x: 73.5, y: 19.6, title: "What it affects and depends on", detail: "The markets and businesses it affects, and the businesses and initiatives it depends on, are listed on the page." },
      { x: 38.0, y: 57.2, title: "A named person for every role", detail: "Business owner, executive sponsor, finance leads, UX design lead and product manager are named, each with their job title." },
      { x: 24.5, y: 7.6, title: "Cost and benefit, one tab over", detail: "The Expenses & Benefits tab holds what the initiative costs and what it brings back." },
    ],
  },
  {
    title: "Product: Details",
    route: "/product/details",
    src: "/work/portfolio-management/product-details.png",
    width: 2880,
    height: 2431,
    alt: "Product Details: name, pillar, sub pillar and IDs on the left; tags, status, description, named roles and the product's teams with their Jira project names on the right",
    caption: "The product's owners, its place in the organisation, and each team tied to the Jira project its work is tracked in.",
    hotspots: [
      { x: 52.4, y: 51.2, title: "Each team is tied to its Jira project", detail: "Every product team lists the Jira project its work is tracked in, with its team type, status and approval status." },
      { x: 22.0, y: 20.1, title: "Where it sits in the organisation", detail: "The business area and the sub-area the product belongs to." },
      { x: 63.0, y: 30.6, title: "Who is responsible", detail: "The engineering manager, product manager, point of contact, product leader and program manager are named, each with their job title." },
      { x: 22.0, y: 54.6, title: "People who keep the data right", detail: "Data quality champions are assigned to the product to keep its records accurate." },
      { x: 66.0, y: 13.1, title: "Approved, and active", detail: "The product’s approval status and its status sit together at the top." },
      { x: 47.5, y: 19.0, title: "Marked as written with AI", detail: "A label next to the description says AI helped write it." },
    ],
  },
  {
    title: "People: My Profile",
    route: "/people/profile",
    src: "/work/portfolio-management/my-profile.png",
    width: 2880,
    height: 2557,
    alt: "My Profile: profile details, product team and initiative allocations in the middle, and direct reports with their allocations on the right",
    caption: "A person's place in the organisation, the products and initiatives they work on, and what their reports work on, on one page.",
    hotspots: [
      { x: 11.8, y: 25.9, title: "Where a person sits in the organisation", detail: "Job title, budget code, organisation, manager and technical lead, all on the person’s own page." },
      { x: 44.0, y: 13.1, title: "What they work on", detail: "The products this person works on, each shown as a share of their time." },
      { x: 43.5, y: 26.3, title: "The funded work it supports", detail: "The same person is tied to an initiative (a funded piece of work), and every initiative is tied to a goal." },
      { x: 84.7, y: 24.7, title: "Managers assign the work", detail: "A manager can change what each of their reports works on, and how much of their time goes to it." },
      { x: 27.3, y: 8.4, title: "One place for everything about a person", detail: "My Profile, Leadership Overview, People Overview, Org Chart and People Search are tabs on the same page." },
    ],
  },
  {
    title: "Manager: Requests",
    route: "/manager",
    src: "/work/portfolio-management/admin.png",
    width: 2880,
    height: 2210,
    alt: "The Manager page: tabs for product, initiative, application and pillar requests with counts, a table of pending requests, alerts and quick links",
    caption: "Requests of every kind in one place, with their status, and the changes a backend team once made on request.",
    hotspots: [
      { x: 88.3, y: 28.6, title: "Every request shows where it stands", detail: "Who created it, when it was submitted and its approval status are on every request, with View Request beside it." },
      { x: 53.0, y: 24.1, title: "Every kind of request, counted", detail: "Product, initiative, application and business-area requests are tabs, each with the number waiting." },
      { x: 14.0, y: 53.4, title: "Alerts when something is raised", detail: "Each new request puts an alert on the page, with the name of who raised it." },
      { x: 74.0, y: 53.4, title: "Changes made in the platform", detail: "Uploading pay rates, creating a business area and creating an organisation are done here." },
    ],
  },
];

export function PortfolioSummaryBody() {
  return (
    <SummaryStory
      beats={[
        {
          label: "Why it mattered",
          lead: "People were the only link between the plan and the work.",
          detail: "Leaders had no shared view of progress, and teams chased information and approvals across email, Slack and tickets.",
        },
        {
          label: "What we built",
          lead: "The platform made that connection visible.",
          detail: "We replaced four external tools with one connected platform, so goals can be traced to the work behind them.",
        },
        {
          label: "What I did",
          lead: "One designer across three product managers and three engineering teams.",
          detail: "I led problem-framing sessions, worked a sprint ahead of engineering, and brought the teams together around one product experience.",
        },
      ]}
      carousel={{
        eyebrow: "The platform",
        title: "A goal runs down to the work",
        description:
          "Five screens follow one goal: the goal itself, the initiative it funds, the product that delivers it, the people on it, and the requests that change them. Open the notes on any screen to see what each part does.",
        label: "The platform, from a goal to the work",
        slides: SLIDES,
      }}
      results={[
        { value: "800+ hrs", label: "reclaimed every week, across the platform", glyph: "field" },
        { value: "3,500+ days", label: "of manual effort eliminated in 2025, across the platform", glyph: "layers" },
        { value: "$100K", label: "average yearly licence cost saved", glyph: "drop" },
        { value: "50%", label: "fewer support tickets", glyph: "bars" },
      ]}
      caveat="Hours are reported by the product managers. Licence figure is the average yearly cost saved by retiring redundant licences."
    />
  );
}
