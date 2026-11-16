import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArtboardCarousel, type ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { ConfidentialNote } from "@/components/design-system/ConfidentialNote";
import { FullWidthStatement } from "@/components/design-system/FullWidthStatement";
import { GlassPanel } from "@/components/design-system/primitives/GlassPanel";
import { HeroScreenStack } from "@/components/design-system/HeroScreenStack";
import { MetricGlyph } from "@/components/design-system/MetricGlyph";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { SpecList } from "@/components/design-system/SpecList";
import type { MetricMarkName } from "@/components/design-system/dotPatterns";

/**
 * A summary designed as a page of its own, not as the case study with its
 * chapters hidden. Preview only: unlinked, and not indexed.
 *
 * Read top to bottom in about a minute: what it is, whether it worked, why it
 * was needed, what was built, what I did, and the screens, paged through from
 * a goal down to the people and the changes behind it. Every line is the case study's own wording; nothing here is new.
 */
export const metadata: Metadata = {
  title: "Portfolio Management Platform — Summary",
  robots: { index: false, follow: false },
};

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

/** The problem, the solution and what I did, in the case study's own words. */
const BEATS: { label: string; glyph: MetricMarkName; lead: string; detail: string }[] = [
  {
    label: "The problem",
    glyph: "field",
    lead: "People were the only link between the plan and the work.",
    detail:
      "Leaders guessed at progress each quarter. Engineers searched across platforms for one answer. Data quality champions and finance chased approvals through email and Slack, and every change needed a ticket.",
  },
  {
    label: "The solution",
    glyph: "funnel",
    lead: "The platform became the link.",
    detail:
      "Pfolio replaced four external tools with one platform. A goal connects to an initiative, a product and a person, then to the Jira epic (the group of tickets) the work is tagged to. Planned headcount sits beside actual headcount from Jira, so a blocked team shows up.",
  },
  {
    label: "What I did",
    glyph: "modules",
    lead: "Three product managers, three engineering teams, one designer.",
    detail:
      "I ran the sessions that set the problem, designed a sprint ahead of each team, and got every product manager to plan for the whole product, not only their piece.",
  },
];

const SECTION = "mt-16 ds-section-boundary pt-12 md:mt-20 md:pt-14";

export default function PortfolioManagementSummaryV2() {
  return (
    <div className="ds-scope">
      <div className="mx-auto w-full max-w-[80rem] px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
        <div className="page-hero hero-in">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.3fr)] lg:gap-14">
            <Reveal>
              <p className="eyebrow">Summary · Portfolio Management Platform</p>
              <h1 className="display-title display-hero mt-4 max-w-[14ch] text-[var(--ink)]">
                From a goal to the work,{" "}
                <span className="text-[var(--accent-deep)]">in one place</span>.
              </h1>
              <p className="mt-6 max-w-[40ch] text-lg leading-8 text-[var(--ink-soft)]">
                Where Walmart’s product organisation plans its portfolio, and sees the work behind it.
              </p>
              <div className="mt-6">
                <SpecList
                  facts={[
                    { label: "Role", value: "Senior UX Designer" },
                    { label: "Client", value: "Walmart Global Tech" },
                    { label: "Year", value: "2023–Present" },
                    { label: "Discipline", value: "Enterprise platform · Product design" },
                  ]}
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <HeroScreenStack
                ratio={1.39}
                label="Three screens of the platform: the home screen, a product page and the Portfolio page"
                screens={[
                  {
                    src: "/work/portfolio-management/home.png",
                    width: 2880,
                    height: 2210,
                    alt: "The platform's home screen: a search field, alerts, quick links for new requests, a profile card and an assistant",
                    name: "the home screen",
                    route: "/home",
                  },
                  {
                    src: "/work/portfolio-management/products.png",
                    width: 2880,
                    height: 2633,
                    alt: "A product page: its leaders, a written summary, headcount by type and by role, and the people allocated",
                    name: "a product page",
                    route: "/product",
                  },
                  {
                    src: "/work/portfolio-management/okr-management-v2.png",
                    width: 3456,
                    height: 3088,
                    alt: "The Portfolio page: strategic pillars across the top and a table of objectives with planned and actual headcount",
                    name: "the Portfolio page",
                    route: "/portfolio",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>

        <section className={SECTION}>
          <Reveal>
            <p className="eyebrow mb-6">What changed</p>
            <ProofStrip
              items={[
                { value: "800+ hrs", label: "reclaimed every week", glyph: "field" },
                { value: "3,500+ days", label: "of manual effort eliminated in 2025", glyph: "layers" },
                { value: "$100K", label: "average yearly licence cost saved", glyph: "drop" },
                { value: "50%", label: "fewer support tickets", glyph: "bars" },
              ]}
            />
            <p className="mt-4 text-[0.85rem] text-[var(--muted)]">
              Hours are reported by the product managers. Licence figure is the average yearly cost saved by retiring
              redundant licences.
            </p>
          </Reveal>
        </section>

        <section className={SECTION}>
          <Reveal className="ds-stagger grid grid-cols-1 gap-4 md:grid-cols-3">
            {BEATS.map((beat) => (
              <GlassPanel key={beat.label} variant="soft" className="rounded-2xl p-7">
                <MetricGlyph name={beat.glyph} size={5} gap={3} />
                <p className="eyebrow mt-6" style={{ color: "var(--ds-accent-deep)" }}>
                  {beat.label}
                </p>
                <p className="display-title mt-3 text-[var(--ink)]" style={{ fontSize: "1.35rem", lineHeight: 1.3 }}>
                  {beat.lead}
                </p>
                <p className="mt-4 text-[0.98rem] leading-7 text-[var(--ink-soft)]">{beat.detail}</p>
              </GlassPanel>
            ))}
          </Reveal>
        </section>

        <section className={SECTION}>
          <Reveal>
            <p className="eyebrow mb-6">The screens</p>
            <ArtboardCarousel label="The platform, from a goal to the work" scrollable maxHeight="44rem" slides={SLIDES} />
          </Reveal>
        </section>

        <section className={SECTION}>
          <Reveal>
            <FullWidthStatement bare>A plan is only as good as its link to the work.</FullWidthStatement>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/work/portfolio-management" className="button button-primary">
                Read the full case study →
              </Link>
              <ConfidentialNote />
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
