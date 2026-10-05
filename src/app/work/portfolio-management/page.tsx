import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArchetypeSection } from "@/components/design-system/ArchetypeSection";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import type { Archetype } from "@/components/design-system/ArchetypeFigure";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { BeforeAfterModel } from "@/components/design-system/BeforeAfterModel";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { DotFlow } from "@/components/design-system/DotFlow";
import { NoteCard } from "@/components/design-system/NoteCard";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";
import { getProject } from "@/content/projects";

/**
 * Portfolio Management Platform — on the locked case-study template.
 *
 * Rebuilt on the structure the API Lifecycle and Dependency Health pages
 * settled on: the definition up front, the problem as a before and after, who
 * it is for, the decisions with what was weighed, the screens as paged
 * carousels with callouts, then the outcomes.
 *
 * The facts come from the owner, in their own words (the five outside tools,
 * the plain-words naming, the parallel build, the team shape) and from
 * `projects/portfolio-management/web/*.md` (the pilot, the outcome figures).
 * Everything on a screen is read off the screen. The product's own internal
 * names appear only where they are drawn in a mock, never in the copy.
 */

export const metadata: Metadata = {
  title: "Portfolio Management Platform — One system instead of five",
  description:
    "One platform for people, products, initiatives and goals, in the words people already use, where five outside tools had been.",
  robots: caseStudyRobots,
};

const FEEDBACK_LOOP = ["Product", "Users", "Issue", "Release change"];

/**
 * The two jobs the platform is read through. Drawn from what the page says
 * about each: the friction is the problem as it was, the wants are what the
 * categories were built to give them. No invented name or biography.
 */
const ARCHETYPES: Archetype[] = [
  {
    name: "Manager",
    side: "Keeps it right",
    behaviour: "Looks after the people, products and initiatives in their area: who is allocated where, what exists, and what has changed.",
    wants: [
      "Keep their people's details and allocations right.",
      "Ask for a change without writing an email, and see where it stands.",
    ],
    friction: [
      "Details and allocations lived in different tools.",
      "A change went to a backend team by email, with no way to follow it.",
    ],
  },
  {
    name: "Leader",
    side: "Answers for it",
    behaviour: "Reads across people, products, initiatives and goals to decide where the money and the effort go.",
    wants: [
      "One view of who is working on what, and at what cost.",
      "Goals tied to the initiatives, products and people that deliver them.",
    ],
    friction: [
      "Conflicting data to reconcile from several tools before deciding.",
      "Goals that sat apart from the work they were about.",
    ],
  },
];

const CHAPTERS = [
  { id: "tools", label: "Five tools" },
  { id: "who", label: "Who it is for" },
  { id: "plain-words", label: "Plain words" },
  { id: "people-products", label: "People and products" },
  { id: "initiatives-goals", label: "Initiatives and goals" },
  { id: "manager", label: "Manager" },
  { id: "parallel", label: "Built in parallel" },
  { id: "pilot", label: "The pilot" },
  { id: "outcomes", label: "What changed" },
];

export default function PortfolioManagementPage() {
  const onward = getProject("api-lifecycle");

  return (
    <CaseStudyShell
      slug="portfolio-management"
      evidenceCaveat="Scale during the documented period."
      evidenceMetricsLabel="The impact"
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              <span className="ds-accent-text">Five outside tools</span> held one portfolio between them.
            </>
          ),
          detail:
            "People and allocations lived in one, products and projects in another, initiatives and their budgets in a third, goals in a fourth. A change to any of it went to a backend team by email, with no way to follow it.",
        },
        {
          label: "The solution",
          lead: (
            <>
              One platform, in <span className="ds-accent-text">the words people use</span>.
            </>
          ),
          detail:
            "People, Product, Initiative, Portfolio and Manager, each with its own capabilities and all reading from the same data, so a figure means the same thing wherever it appears.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I was <span className="ds-accent-text">the only designer</span>, start to finish.
            </>
          ),
          detail:
            "From the first whiteboarding sessions to release, I worked with three product managers and their head and three engineering teams, kept every name to a word a new user could recall, and stayed through the launch of each module.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "Where Walmart's product organisation plans its people, products, initiatives and goals — work that used to sit in five separate places.",
        headline: (
          <>
            Portfolio Management Platform: <span style={{ color: "var(--ds-mint)" }}>one system instead of five</span>.
          </>
        ),
        stackRatio: 1.39,
        stack: [
          {
            src: "/work/portfolio-management/home.png",
            width: 2880,
            height: 2204,
            alt: "The platform's home screen: a search field, alerts, quick links for new requests, a profile card and an assistant",
            route: "/home",
          },
          {
            src: "/work/portfolio-management/products.png",
            width: 2880,
            height: 2531,
            alt: "A product page: its leaders, a written summary, headcount by type and by role, and the people allocated",
            route: "/product",
          },
          {
            src: "/work/portfolio-management/okr.png",
            width: 2880,
            height: 2571,
            alt: "The Portfolio page: strategic pillars across the top and a table of objectives with planned and actual headcount",
            route: "/portfolio",
          },
        ],
        figureNote: "The interface is as it shipped, built on Living Design — Walmart's design system. I have replaced the data and some product names, because the work is internal.",
        meta: [
          { label: "Role", value: "Senior UX Designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2023–Present" },
          { label: "Discipline", value: "Enterprise platform · Product design" },
        ],
      }}
      next={
        onward
          ? { href: `/work/${onward.slug}`, number: onward.number, label: onward.label, title: onward.title }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      <div className="mt-14 md:mt-20">
        <Reveal>
          <PullStatement
            eyebrow="What is a portfolio"
            mark="connection"
            note="Like a household budget for the year: who is in it, what is bought, and what it is meant to get done."
          >
            A portfolio is the people, products and initiatives an organisation spends on, and the
            goals it spends them for.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="tools" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Five tools"
            heading="Five outside tools each held a piece of the same portfolio"
            body={[
              "People, with their details and allocations, lived in one. Products and projects lived in another. A third held initiatives: the yearly key results, each a group of products and projects that will help reach it, where budgets and costs were declared and managed. Goals, yearly, quarterly and monthly, tied the other three together in a fourth.",
              "The fifth was not a tool at all. Any change to any of them went to a backend team by email, and the person asking had no way to see where it stood.",
            ]}
          />
          <CaseStudyFigure rule label="Before and after the consolidation">
            <BeforeAfterModel
              before={{
                stages: ["People", "Products", "Initiatives", "Goals", "Admin by email"],
                heading: "Five separate places",
                body: "Each had its own workflow and its own words, and every change was an email.",
              }}
              after={{
                glyph: "modules",
                figure: { value: "1", label: "platform, six areas on one set of data" },
                heading: "One connected platform",
                body: "Home, People, Product, Initiative, Portfolio and Manager read from the same data.",
              }}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="who">
          <ArchetypeSection
            heading="The same portfolio. Two very different jobs."
            intro="A manager keeps the details of their people and products right, and asks for changes. A leader reads across all of it and answers for what it is meant to achieve."
            archetypes={ARCHETYPES}
            variant="cards"
          />
        </CaseStudySection>

        <CaseStudySection id="plain-words">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="A decision"
            heading="I named everything in the words people already use"
            body={[
              "Each category was built as a place a person could name from memory: People, Product, Initiative, Portfolio and Manager. I kept the names to common words, not corporate jargon or alphabet-soup names, so a new user could recall where something lived.",
              "It mattered most when something was shared. When someone sends a link or a figure to be reviewed, the person receiving it has to understand what they are looking at without a glossary.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="56rem"
              src="/work/portfolio-management/diagram.png"
              width={1954}
              height={1782}
              alt="Pfolio at the centre, with People, Product, Initiative, Manager and StratTrack around it, each with a one-line description"
              caption="The platform in one picture: five categories around one hub. A central platform for planning and workflows, team allocation and the information behind decisions. It manages entities, controls permissions and keeps data accurate, and it holds initiatives across their hierarchy so priorities and outcomes line up."
            />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <BrowserMockup
              route="/home"
              src="/work/portfolio-management/home.png"
              width={2880}
              height={2204}
              crop
              maxHeight="40rem"
              alt="The platform's home screen: a search field, alerts, quick links for new requests, a profile card and an assistant"
              caption="Five categories down the side, one search, and the first requests, all in common words."
              hotspots={[
                {
                  x: 2.65,
                  y: 28,
                  title: "Categories in plain words",
                  detail: "People, Initiative, Product, Portfolio and Manager, each named for the thing someone is looking for, with Home above them.",
                },
                {
                  x: 52.5,
                  y: 17.1,
                  title: "One search, or ask in a sentence",
                  detail: "Search by name, title, org or pillar, or just ask in full sentences, from the first screen.",
                },
                {
                  x: 17.5,
                  y: 57.8,
                  title: "Requests start from home",
                  detail: "New Product Request and New Initiative Request are the first two quick links.",
                },
                {
                  x: 82,
                  y: 47.7,
                  title: "An assistant for finding things",
                  detail: "A chat that starts from four prompts, such as finding people by name, position or ID, or the details of a product or initiative.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="people-products">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              eyebrow="People and products"
              title="Who works on what, and what exists to work on"
              description={[
                "People answers who someone is, who they report to, and what they are allocated to. Product answers what exists, who leads it, and how many people are on it.",
                "Both show allocation as a percentage, so a person and the product they work on say the same thing.",
              ]}
              scrollable
              maxHeight="44rem"
              label="People and products"
              slides={[
                {
                  title: "The org chart opens on the person",
                  route: "/people/org-chart",
                  src: "/work/portfolio-management/org-chart.png",
                  width: 2880,
                  height: 1910,
                  alt: "An org chart: a senior leader above, a manager below, and the manager's team in a grid with the selected person highlighted",
                  caption: "A person sits in the middle of the chart, with who they report to above them and their team around them.",
                  hotspots: [
                    { x: 15.4, y: 11.1, title: "Three views of a person", detail: "My Profile, Org Chart and People Search sit as tabs under one name, so moving between who someone is, who they report to and how to find others stays inside People." },
                    { x: 51.8, y: 42.1, title: "Each card carries the team", detail: "Role and team on every card, with the rest of the team behind “+2 Others” rather than drawn out." },
                    { x: 40, y: 59.4, title: "You can see where you are", detail: "The person the chart is about is highlighted, with their reporting line drawn to the people above and below." },
                  ],
                },
                {
                  title: "Search a whole directory by what matters",
                  route: "/people/search",
                  src: "/work/portfolio-management/people-search.png",
                  width: 2880,
                  height: 2318,
                  alt: "People search: quick and applied filters on the left, and each person's product team and initiative allocations on the right",
                  caption: "Filters by org, pillar, product, location and manager narrow the directory, and each result shows allocations beside the person.",
                  hotspots: [
                    { x: 15, y: 18, title: "Filters that can be saved", detail: "Quick filters can be saved and reused, with the applied filters listed beneath, so what is narrowing the list is always visible." },
                    { x: 59.5, y: 19.1, title: "Allocations beside the person", detail: "Each result shows the product teams and initiatives someone is allocated to, with a percentage for each." },
                    { x: 93, y: 13.9, title: "Data quality issues, from the list", detail: "A Data Quality Issues control sits above the results, so records that need fixing can be found from where people are searched." },
                  ],
                },
                {
                  title: "A product opens on its leaders and its headcount",
                  route: "/product/all",
                  src: "/work/portfolio-management/products.png",
                  width: 2880,
                  height: 2531,
                  alt: "A product page: the hierarchy, its leaders, a written summary, headcount by type and by role, and the people allocated",
                  caption: "The page opens on the product's leaders, a short written summary, and headcount by type and by role.",
                  hotspots: [
                    { x: 36.1, y: 13.5, title: "The hierarchy in the header", detail: "The org, the pillar and the product, each a link, so the place a product sits is one click from the level above." },
                    { x: 47.9, y: 28.7, title: "A written summary first", detail: "A short summary of the org sits above its numbers, with View Summary for the rest." },
                    { x: 61.9, y: 46.8, title: "Headcount by role, as filters", detail: "Each role is a chip with its count, drawn as a filter for the people listed below." },
                    { x: 92.3, y: 14, title: "A request starts where products are listed", detail: "Request New Product sits at the top of the product page, not in a separate area." },
                  ],
                },
                {
                  title: "A new product is requested in four steps",
                  route: "/product/new",
                  src: "/work/portfolio-management/new-product-request.png",
                  width: 2880,
                  height: 1291,
                  alt: "A new product request: a four-step line, product details, and a form to add a product team",
                  caption: "Basic details, people, product information and a preview, one step at a time, so the person asking can see what is left.",
                  hotspots: [
                    { x: 56.5, y: 16.1, title: "Four steps, and where you are", detail: "Basic Details, Add People, Product Information and Preview, with the current step marked on the line." },
                    { x: 11.5, y: 77.8, title: "Say where the work is tracked", detail: "Enterprise Jira or Non-Jira is chosen first, ahead of the Jira project and the team name." },
                    { x: 93.8, y: 42.2, title: "Teams are added to the request", detail: "Add New Team puts each team on the product, with its tracking system and approval status in the list." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="initiatives-goals">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              imageSide="left"
              eyebrow="Initiatives and goals"
              title="Where the money is declared, and the goals it serves"
              description={[
                "An initiative is a yearly key result: a group of products and projects that will help reach it. It is where budgets and costs are declared and managed.",
                "Goals run yearly, quarterly and monthly, and tie initiatives, products and people together.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Initiatives and goals"
              slides={[
                {
                  title: "Initiatives, with their approval beside them",
                  route: "/initiative",
                  src: "/work/portfolio-management/initiatives.png",
                  width: 2880,
                  height: 1564,
                  alt: "A list of initiatives with filters by org, pillar, sub-pillar and status, and columns for status, approval status, investment type and tenure",
                  caption: "Each initiative shows who created it, who approved it, and whether it is active and approved.",
                  hotspots: [
                    { x: 31.5, y: 24.3, title: "Narrow by org, pillar, sub-pillar or status", detail: "Four filters sit above the list, in the order the hierarchy runs." },
                    { x: 95, y: 24.6, title: "Start one, or upload it", detail: "New Initiative and Upload by Excel sit together, so details already in a sheet can come in as they are." },
                    { x: 68.5, y: 39.4, title: "Two statuses, side by side", detail: "Status and approval status are separate columns: an initiative can be active or inactive, and approved or rejected." },
                  ],
                },
                {
                  title: "Costs are declared a year at a time",
                  route: "/initiative/new",
                  src: "/work/portfolio-management/new-initiative.png",
                  width: 2880,
                  height: 2928,
                  alt: "A new initiative at its Expenses and Benefits step: technical expenses, labour costs with grand totals, and a form with a month-by-month count",
                  caption: "Technical and labour costs are entered by year, with a grand total under each and a month-by-month count for labour.",
                  hotspots: [
                    { x: 54.7, y: 7.1, title: "Four steps, ending in a preview", detail: "Basic Details, Define Initiative, Expenses & Benefits, then Preview, with Save as Draft beside the steps." },
                    { x: 18.6, y: 11.5, title: "Costs planned across five years", detail: "Tabs for FY 2025 to FY 2029, so spend is entered a year at a time." },
                    { x: 74.3, y: 29.3, title: "A total under every cost type", detail: "Technical expenses and labour costs each end in a grand total." },
                    { x: 8.2, y: 63.9, title: "Fill the months once", detail: "Auto-fill counts for months carries a headcount across all twelve months." },
                  ],
                },
                {
                  title: "Goals sit beside the requests",
                  route: "/portfolio/okr",
                  src: "/work/portfolio-management/okr.png",
                  width: 2880,
                  height: 2571,
                  alt: "The Portfolio page at OKR Management: directors to choose from, strategic pillars as cards, status counts, and objectives with planned and actual headcount",
                  caption: "Objectives are read by director and by strategic pillar, with planned and actual headcount for each.",
                  hotspots: [
                    { x: 8.3, y: 8.3, title: "Requests and goals on one page", detail: "Intake Requests, All Requests and OKR Management are tabs under Portfolio." },
                    { x: 36.5, y: 25.5, title: "Strategic pillars as filters", detail: "Each pillar is a card with its headcount, and clicking one filters the objectives below." },
                    { x: 25, y: 35.2, title: "Status counts on top", detail: "All, Behind, At Risk, On Track and Bookmarked, each with a count." },
                    { x: 50, y: 42.5, title: "Planned against actual", detail: "Planned headcount and actual headcount sit side by side for every objective." },
                  ],
                },
                {
                  title: "A goal is written with its key results and owners",
                  route: "/portfolio/okr/new",
                  src: "/work/portfolio-management/new-okr.png",
                  width: 2880,
                  height: 3509,
                  alt: "A new OKR form: phase and status, strategic alignment, an objective definition, key results with metrics and targets, dependencies, ownership, and a comments panel",
                  caption: "An objective is aligned first, then defined, then broken into key results with a quarter target and an annual target each.",
                  hotspots: [
                    { x: 12.2, y: 12.7, title: "A phase, and when it is approved", detail: "Planning or Approved, with the note that an objective is marked approved once it passes peer review." },
                    { x: 21.6, y: 16.6, title: "Alignment comes first", detail: "The objective's type, its strategic theme and the L3 and L4 objectives it supports are chosen before anything is written." },
                    { x: 36.6, y: 57, title: "Key results carry their metrics", detail: "Each key result takes one or more metrics, each with a quarter target and an annual target." },
                    { x: 84.1, y: 9.75, title: "Comments beside the form", detail: "A comments panel sits next to the form, so a reviewer's question and the author's answer are on the page they are about." },
                  ],
                },
                {
                  title: "The health of every goal, in one view",
                  route: "/portfolio/kpi",
                  src: "/work/portfolio-management/kpi.png",
                  width: 2880,
                  height: 2919,
                  alt: "The KPI view of the Portfolio page: goals health as a ring, a bar of health for each director, goals by owner, and a table of goals with linked initiatives and products",
                  caption: "Goals are read by health, by director and by owner, and each goal shows the initiatives and products linked to it.",
                  hotspots: [
                    { x: 95.8, y: 27, title: "Three views of the same goals", detail: "Compact, Detailed and Report switch how much each goal shows, without leaving the page." },
                    { x: 50.1, y: 32.4, title: "Health by director", detail: "Each director's goals as a bar, split into on track, at risk and behind." },
                    { x: 71, y: 64.5, title: "Goals linked to the work", detail: "Every goal lists the initiatives and the products linked to it, which is where goals meet the rest of the platform." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="manager">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Manager"
            heading="Changes stopped being emails to a backend team"
            body={[
              "Any change or modification used to go to a backend team by email. The team did the work, and the person asking could not see where it stood.",
              "Manager is where those requests now arrive: product, initiative, application and pillar requests, each with its own approval status.",
            ]}
          />
          <CaseStudyFigure>
            <BrowserMockup
              route="/manager"
              src="/work/portfolio-management/admin.png"
              width={2880}
              height={1851}
              alt="The Manager page: tabs for product, initiative, application and pillar requests with counts, a table of pending requests, alerts and quick links"
              caption="Requests of every kind in one place, with their status, and the changes a backend team once made on request."
              hotspots={[
                { x: 27.5, y: 28.5, title: "Every kind of request, counted", detail: "Product, initiative, application and pillar requests are tabs, each with the number waiting." },
                { x: 83.6, y: 39.5, title: "Each request carries its status", detail: "Pending, with View Request beside it." },
                { x: 81.5, y: 64.3, title: "Changes made in the platform", detail: "Uploading rates, creating a pillar and creating an org are done here." },
                { x: 28, y: 64, title: "Alerts when something is raised", detail: "Each new request puts an alert on the page, with the name of who raised it." },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="parallel">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="How it was built"
            heading="The categories were built in parallel, a sprint at a time"
            body={[
              "People, Product and Initiative were not built one after another. Features for each arrived together, sprint by sprint, while every category kept its own capabilities and the data stayed shared between them.",
              "I was the only designer on it, working with three product managers and their head, and three engineering teams. Parallel work only reads as one product when the parts fit as they land, and the shared names and shared data are what let them.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "1", label: "designer, from inception to release", glyph: "field" },
                { value: "3", label: "product managers, with one head", glyph: "field" },
                { value: "3", label: "engineering teams", glyph: "modules" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="pilot">
          <CaseStudyChapter
            eyebrow="The pilot"
            heading="A pilot found the jargon the mockups had hidden"
            body={[
              "We used frequent demos, research sessions, and live pilot feedback to expose the product before decisions became expensive to reverse.",
              "One pilot surfaced details that polished mockups had hidden: internal field terminology appearing in the interface, draft persistence problems, and validation behaviour that became frustrating in real work.",
              "Those sessions changed both the product and the release loop. Feedback moved closer to implementation, and design decisions were tested against the experience people actually used rather than only the one we intended to ship.",
            ]}
          />
          <CaseStudyFigure rule label="The feedback loop">
            <DotFlow stages={FEEDBACK_LOOP} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="outcomes">
          <CaseStudyChapter
            eyebrow="What changed"
            heading="A clearer model, not simply fewer tools"
            body={[
              "The platform reached more than 6K monthly users, consolidated five legacy systems into one connected product, and put six areas on one shared set of data.",
              "Documented operational outcomes also included a sustained 50% reduction in support tickets and ~800 hours of manual reconciliation reclaimed each week as more portfolio work moved into connected workflows.",
              "At launch of the goals experience, teams created more than 1.4K goals across 14 strategic themes.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "50%", label: "fewer support tickets", glyph: "bars" },
                { value: "~800 hrs", label: "manual reconciliation reclaimed weekly", glyph: "field" },
                { value: "1.4K", label: "goals across 14 strategic themes", glyph: "ring" },
              ]}
            />
          </CaseStudyFigure>
          <Reveal>
            <NoteCard
              label="Where it went"
              heading="The same data now answers questions in plain sentences"
              body="The home screen has an assistant that finds people, products and initiatives from a question, and a product page opens with a written summary above its numbers. The surface is changing, and the problem is the same: structure complex information so someone can understand it and act."
              mark="AI"
              sparkle
            />
          </Reveal>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="seam">
            A name is working when someone can say it to a colleague and be understood.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
