import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArchetypeSection } from "@/components/design-system/ArchetypeSection";
import type { Archetype } from "@/components/design-system/ArchetypeFigure";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
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
 * The argument: fragmented tools left nothing connecting the work assigned to
 * the work done. Goals, budgets and allocations lived in one set of places and
 * the work in Jira. The platform draws the line from a goal to an initiative,
 * a product, a person and the Jira epic the work is tagged to, so planned
 * allocation sits beside actual story points, and each touch point stops
 * keeping its own copy under its own names.
 *
 * The body then follows the sidebar a new user meets, People, Product,
 * Initiative, Portfolio and Manager, with one argument per category and the
 * pain it answers. The pain points and quotes are from the design
 * whiteboarding sessions. The product's internal names appear only where a
 * mock draws them, never in the copy.
 */

export const metadata: Metadata = {
  title: "Portfolio Management Platform — From a goal to the work, in one place",
  description:
    "One platform where a goal runs down to the work: OKRs tied to initiatives, products, people and Jira, so planned allocation sits beside the work being done.",
  robots: caseStudyRobots,
};

const FEEDBACK_LOOP = ["Product", "Users", "Issue", "Release change"];
const TRACE = ["Goal", "Initiative", "Product", "Person", "Jira epic", "Work"];

/**
 * The two groups from the focus-group board of the design whiteboarding
 * sessions. The pain points are the sessions' own; the quotes are verbatim
 * from them. The "wants" are those pain points turned the right way round,
 * nothing added.
 */
const ARCHETYPES: Archetype[] = [
  {
    name: "Consumers",
    side: "Reads it",
    behaviour: "Engineers, engineering managers and executive leaders. They look things up and read across people, products and initiatives.",
    wants: [
      "Find the information in one place, and search that finds it.",
      "Create a product or an initiative through one standard workflow.",
      "See allocations across products, pillars and cost centres without generating them one by one.",
    ],
    friction: [
      "“Accessing information was challenging since it’s spread across different platforms.”",
      "“I found the search function to be inadequate and needs improvement.”",
      "“The product and Initiative creation flows are overly complex, and there is no standard workflow.”",
    ],
  },
  {
    name: "Contributors",
    side: "Keeps it right",
    behaviour: "Data quality champions and finance managers. They put information in, keep it accurate, and approve changes.",
    wants: [
      "One process for approvals, not email, Slack and in-person conversations.",
      "Make and correct changes to pillars and business structures, and see them land.",
    ],
    friction: [
      "“The approval process is currently fragmented across email, Slack, and in-person interactions, making it inefficient and error-prone.”",
      "Mistakes needed manual follow-ups, with no easy way to control or change pillars and business structures, which led to delays and confusion.",
    ],
  },
];

const CHAPTERS = [
  { id: "pieces", label: "In pieces" },
  { id: "platform", label: "Platform thinking" },
  { id: "who", label: "Who it is for" },
  { id: "people", label: "People" },
  { id: "product", label: "Product" },
  { id: "initiative", label: "Initiative" },
  { id: "portfolio", label: "Portfolio" },
  { id: "manager", label: "Manager" },
  { id: "parallel", label: "Built in parallel" },
  { id: "beta", label: "The beta" },
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
              People were <span className="ds-accent-text">the only link</span> between the tools.
            </>
          ),
          detail:
            "Leaders guessed at progress each quarter. Engineers searched across platforms for one answer. Data quality champions and finance chased approvals through email and Slack, and every change needed a ticket.",
        },
        {
          label: "The solution",
          lead: (
            <>
              The platform became <span className="ds-accent-text">the link</span>.
            </>
          ),
          detail:
            "A goal connects to an initiative, a product and a person, then to the Jira epic the work is tagged to. Planned allocation sits beside the story points worked, so a blocked team shows up.",
        },
        {
          label: "What I did",
          lead: (
            <>
              Three product managers, three engineering teams, <span className="ds-accent-text">one designer</span>.
            </>
          ),
          detail:
            "I ran the sessions that set the problem, designed a sprint ahead of each team, and got every product manager to plan for the whole product, not only their piece.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        standfirst:
          "Where Walmart's product organisation plans its portfolio, and sees the work behind it.",
        headline: (
          <>
            Portfolio Management Platform: <span style={{ color: "var(--ds-mint)" }}>from a goal to the work, in one place</span>.
          </>
        ),
        stackRatio: 1.39,
        stack: [
          {
            src: "/work/portfolio-management/home.png",
            width: 2880,
            height: 2210,
            alt: "The platform's home screen: a search field, alerts, quick links for new requests, a profile card and an assistant",
            route: "/home",
          },
          {
            src: "/work/portfolio-management/products.png",
            width: 2880,
            height: 2633,
            alt: "A product page: its leaders, a written summary, headcount by type and by role, and the people allocated",
            route: "/product",
          },
          {
            src: "/work/portfolio-management/okr.png",
            width: 2880,
            height: 2286,
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
        <CaseStudySection id="pieces" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="In pieces"
            heading="Nothing connected the work assigned to the work done"
            body={[
              "I ran three whiteboarding sessions with key stakeholders and the larger team. We plotted the stages of a portfolio's work as it happens today, who does what at each, where it hurts, and what to solve first.",
              "A portfolio's work is one lifecycle: people become aware of a need, brainstorm, plan, execute, assess, close out and troubleshoot. The map showed every stage living somewhere different. Who works on what was in one place, products and projects in another, initiatives and their budgets in a third, goals in a fourth, and the work in Jira.",
              "Each place kept its own copy under its own names: the same product could be a product in one tool and a project in Jira, titled differently in each. Nothing joined them, so people did, by hand.",
              "No stage won. Each was someone's problem, so the sessions did not pick one to fix first. They pointed to a system that stitches the stages together, not one that fixes each on its own.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "3", label: "whiteboarding sessions", glyph: "layers" },
                { value: "12", label: "people in each", glyph: "field" },
                { value: "4 hrs", label: "for each session", glyph: "ramp" },
              ]}
            />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <ArtboardFigure
              src="/work/portfolio-management/journey-map.png"
              width={2880}
              height={1217}
              alt="A journey map across seven lifecycle stages, from Awareness to Troubleshooting, with the personas at each stage, their tasks, and how often the work happens"
              caption="The journey map from the whiteboarding sessions: seven stages, the people at each, their tasks, and how often the work happens. Finance and data quality champions (DQC) each appear in five of the seven stages."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="platform">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="A decision"
            heading="I designed the line from a goal to the work"
            body={[
              "The aim was never to rebuild each tool one for one. It was to join what is assigned to what is done. A goal ties to an initiative, which ties to a product, which ties to a person, and each product and initiative ties to a Jira epic that the work is tagged to.",
              "That makes the platform the source of truth: one record and one name for each thing, so every title and statement means the same across teams. The old tools went by names like team rosters, roadmaps and numbered programme codes. I kept the names to common words: People, Product, Initiative, Portfolio and Manager. A name a person can say to a colleague is also a data decision, because one name for a thing is what lets two records be one.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="56rem"
              src="/work/portfolio-management/diagram.png"
              width={1954}
              height={1782}
              alt="Pfolio at the centre, with People, Product, Initiative, Manager and Portfolio around it, each with a one-line description"
              caption="The platform in one picture: five categories around one hub. A central platform for planning and workflows, team allocation and the information behind decisions. It manages entities, controls permissions and keeps data accurate, and it holds initiatives across their hierarchy so priorities and outcomes line up."
            />
          </CaseStudyFigure>
          <CaseStudyFigure rule label="From a goal to the work">
            <DotFlow stages={TRACE} />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <BrowserMockup
              route="/home"
              src="/work/portfolio-management/home.png"
              width={2880}
              height={2210}
              crop
              maxHeight="40rem"
              alt="The platform's home screen: a search field, alerts, quick links for new requests, a profile card and an assistant"
              caption="Five categories down the side, one search, and the first requests, all in common words."
              hotspots={[
                {
                  x: 2.6,
                  y: 28.2,
                  title: "Categories in plain words",
                  detail: "People, Initiative, Product, Portfolio and Manager, each named for the thing someone is looking for, with Home above them.",
                },
                {
                  x: 52.5,
                  y: 17.3,
                  title: "One search, or ask in a sentence",
                  detail: "Search by name, title, org or pillar, or just ask in full sentences, from the first screen.",
                },
                {
                  x: 17.5,
                  y: 57.9,
                  title: "Requests start from home",
                  detail: "New Product Request and New Initiative Request are the first two quick links.",
                },
                {
                  x: 82.0,
                  y: 47.8,
                  title: "An assistant for finding things",
                  detail: "A chat that starts from four prompts, such as finding people by name, position or ID, or the details of a product or initiative.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="who">
          <ArchetypeSection
            heading="Some people read the portfolio. Others keep it right."
            intro="Almost everyone in the organisation uses it, so I reduced the audience to two groups. Engineers, engineering managers and executive leaders consume it. Data quality champions and finance managers contribute to it, and approve the changes. The quotes are from the whiteboarding sessions."
            archetypes={ARCHETYPES}
            variant="cards"
          />
        </CaseStudySection>

        <CaseStudySection id="people">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              eyebrow="People"
              title="One place to find a person, and what they are working on"
              description={[
                "Information had been spread across platforms, and people found search inadequate. People answers who someone is, who they report to, and what they are allocated to.",
                "It opens on the person, and search narrows a whole directory by org, pillar, product, location and manager.",
              ]}
              scrollable
              maxHeight="44rem"
              label="People"
              slides={[
                {
                  title: "My Profile holds a person, and the people they manage",
                  route: "/people/profile",
                  src: "/work/portfolio-management/my-profile.png",
                  width: 2880,
                  height: 2557,
                  alt: "My Profile: profile details, product team and initiative allocations in the middle, and direct reports with their allocations on the right",
                  caption: "A person's details, their allocations as percentages, and their direct reports' allocations sit on one page.",
                  hotspots: [
                    { x: 20, y: 8.3, title: "Five views under People", detail: "My Profile, Leadership Overview, People Overview, Org Chart and People Search are tabs under one name." },
                    { x: 40.8, y: 16.9, title: "Allocations, as percentages", detail: "A person's product team and initiative allocations sit in the middle column, each with a percentage." },
                    { x: 77, y: 12.9, title: "Direct reports in the same view", detail: "A manager sees their direct reports' roles, cost centres and allocated products beside their own profile." },
                    { x: 84.7, y: 24.6, title: "Changed where it is read", detail: "Update Allocations sits on the person's card, so an allocation is changed where it is read." },
                  ],
                },
                {
                  title: "The org chart opens on the person",
                  route: "/people/org-chart",
                  src: "/work/portfolio-management/org-chart.png",
                  width: 2880,
                  height: 2372,
                  alt: "An org chart: a senior leader above, a manager below, and the manager's team in a grid with the selected person highlighted",
                  caption: "A person sits in the middle of the chart, with who they report to above them and their team around them.",
                  hotspots: [
                    { x: 15.4, y: 9.2, title: "Three views of a person", detail: "My Profile, Org Chart and People Search sit as tabs under one name, so moving between who someone is, who they report to and how to find others stays inside People." },
                    { x: 51.8, y: 34.1, title: "Each card carries the team", detail: "Role and team on every card, with the rest of the team behind “+2 Others” rather than drawn out." },
                    { x: 40.0, y: 48.1, title: "You can see where you are", detail: "The person the chart is about is highlighted, with their reporting line drawn to the people above and below." },
                  ],
                },
                {
                  title: "Search a whole directory by what matters",
                  route: "/people/search",
                  src: "/work/portfolio-management/people-search.png",
                  width: 2880,
                  height: 2324,
                  alt: "People search: quick and applied filters on the left, and each person's product team and initiative allocations on the right",
                  caption: "Filters narrow the directory, and each result shows allocations beside the person, as a percentage.",
                  hotspots: [
                    { x: 15.0, y: 18.2, title: "Filters that can be saved", detail: "Quick filters can be saved and reused, with the applied filters listed beneath, so what is narrowing the list is always visible." },
                    { x: 59.5, y: 19.3, title: "Allocations beside the person", detail: "Each result shows the product teams and initiatives someone is allocated to, with a percentage for each." },
                    { x: 93.0, y: 14.1, title: "Data quality issues, from the list", detail: "A Data Quality Issues control sits above the results, so records that need fixing can be found from where people are searched." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="product">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              imageSide="left"
              eyebrow="Product"
              title="Creating a product follows one standard workflow"
              description={[
                "Product creation had been overly complex, with no standard workflow for an app or a service. Product answers what exists, who leads it, and how many people are on it.",
                "A new product is requested in four steps, and says up front where its work is tracked: each product is tied to a Jira epic, so every piece of work sits under it.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Product"
              slides={[
                {
                  title: "A product opens on its leaders and its headcount",
                  route: "/product/all",
                  src: "/work/portfolio-management/products.png",
                  width: 2880,
                  height: 2633,
                  alt: "A product page: the hierarchy, its leaders, a written summary, headcount by type and by role, and the people allocated",
                  caption: "The page opens on the product's leaders, a short written summary, and headcount by type and by role.",
                  hotspots: [
                    { x: 35.0, y: 12.8, title: "The hierarchy in the header", detail: "The org, the pillar and the product, each a link, so the place a product sits is one click from the level above." },
                    { x: 46.5, y: 27.0, title: "A written summary first", detail: "A short summary of the org sits above its numbers, with View Summary for the rest." },
                    { x: 60.0, y: 43.8, title: "Headcount by role, as filters", detail: "Each role is a chip with its count, drawn as a filter for the people listed below." },
                    { x: 89.5, y: 13.3, title: "A request starts where products are listed", detail: "Request New Product sits at the top of the product page, not in a separate area." },
                  ],
                },
                {
                  title: "A product page names who is responsible",
                  route: "/product/details",
                  src: "/work/portfolio-management/product-details.png",
                  width: 2880,
                  height: 2431,
                  alt: "Product Details: name, pillar, sub pillar and IDs on the left; tags, status, description, named roles and the product's teams with their Jira project names on the right",
                  caption: "The product's leaders, its description and its teams, each tied to a Jira project, on one page.",
                  hotspots: [
                    { x: 9.5, y: 8.9, title: "Product info and people", detail: "Product Info and People & Allocations are two tabs on the same product." },
                    { x: 42.3, y: 19, title: "A description marked AI-assisted", detail: "A label beside the description says it was written with AI assistance." },
                    { x: 45, y: 33.2, title: "Responsible people, named", detail: "The engineering manager, product manager, point of contact, product leader and program manager are named on the page." },
                    { x: 50, y: 51, title: "Teams, tied to Jira", detail: "Each product team lists its Jira project name and team type, with status and approval status." },
                  ],
                },
                {
                  title: "A new product is requested in four steps",
                  route: "/product/new",
                  src: "/work/portfolio-management/new-product-request.png",
                  width: 2880,
                  height: 2167,
                  alt: "A new product request: a four-step line, product details, and a form to add a product team",
                  caption: "Basic details, people, product information and a preview, one step at a time, so the person asking can see what is left.",
                  hotspots: [
                    { x: 56.5, y: 9.9, title: "Four steps, and where you are", detail: "Basic Details, Add People, Product Information and Preview, with the current step marked on the line." },
                    { x: 11.5, y: 46.6, title: "Tied to where the work is tracked", detail: "Enterprise Jira or Non-Jira is chosen first, ahead of the Jira project, which is the epic the work is tagged to, and the team name." },
                    { x: 93.8, y: 25.4, title: "Teams are added to the request", detail: "Add New Team puts each team on the product, with its tracking system and approval status in the list." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="initiative">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              eyebrow="Initiative"
              title="Where the money is declared, and tied to the work"
              description={[
                "An initiative is a yearly key result: a group of products and projects that will help reach it. Budgets and costs are declared and managed here, a year at a time, and each initiative is tied to a Jira epic.",
                "Allocation details across products, pillars and cost centres had been tedious to produce, because they had to be generated one by one.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Initiative"
              slides={[
                {
                  title: "Initiatives, with their approval beside them",
                  route: "/initiative",
                  src: "/work/portfolio-management/initiatives.png",
                  width: 2880,
                  height: 2114,
                  alt: "A list of initiatives with filters by org, pillar, sub-pillar and status, and columns for status, approval status, investment type and tenure",
                  caption: "Each initiative shows who created it, who approved it, and whether it is active and approved.",
                  hotspots: [
                    { x: 31.5, y: 18.2, title: "Narrow by org, pillar, sub-pillar or status", detail: "Four filters sit above the list, in the order the hierarchy runs." },
                    { x: 95.0, y: 18.5, title: "Start one, or upload it", detail: "New Initiative and Upload by Excel sit together, so details already in a sheet can come in as they are." },
                    { x: 68.5, y: 29.4, title: "Two statuses, side by side", detail: "Status and approval status are separate columns: an initiative can be active or inactive, and approved or rejected." },
                  ],
                },
                {
                  title: "Costs are declared a year at a time",
                  route: "/initiative/new",
                  src: "/work/portfolio-management/new-initiative.png",
                  width: 2880,
                  height: 2933,
                  alt: "A new initiative at its Expenses and Benefits step: technical expenses, labour costs with grand totals, and a form with a month-by-month count",
                  caption: "Technical and labour costs are entered by year, with a grand total under each and a month-by-month count for labour.",
                  hotspots: [
                    { x: 54.7, y: 7.3, title: "Four steps, ending in a preview", detail: "Basic Details, Define Initiative, Expenses & Benefits, then Preview, with Save as Draft beside the steps." },
                    { x: 18.6, y: 11.7, title: "Costs planned across five years", detail: "Tabs for FY 2025 to FY 2029, so spend is entered a year at a time." },
                    { x: 74.3, y: 29.4, title: "A total under every cost type", detail: "Technical expenses and labour costs each end in a grand total." },
                    { x: 8.2, y: 64.0, title: "Fill the months once", detail: "Auto-fill counts for months carries a headcount across all twelve months." },
                  ],
                },
              ]}
            />
          </Reveal>
        </CaseStudySection>

        <CaseStudySection id="portfolio">
          <Reveal>
            <ArtboardCarousel
              layout="split"
              imageSide="left"
              eyebrow="Portfolio"
              title="Goals sit on the same data as the work they are about"
              description={[
                "Goals run yearly, quarterly and monthly, and tie initiatives, products and people together. At launch of the goals experience, teams created more than 1.4K goals across 14 strategic themes.",
                "Because goals read from the same records, a goal shows the initiatives and products linked to it, and where they stand. A leader sets a goal at the start of the year and checks in each quarter on how much is achieved and which teams are blocking it, from data, not assumptions. People supporting different initiatives can see how their work supports those goals, with a clear definition of impact and responsibility.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Portfolio"
              slides={[
                {
                  title: "Goals sit beside the requests",
                  route: "/portfolio/okr",
                  src: "/work/portfolio-management/okr.png",
                  width: 2880,
                  height: 2286,
                  alt: "The Portfolio page at OKR Management: directors to choose from, strategic pillars as cards, status counts, and objectives with planned and actual headcount",
                  caption: "Objectives are read by director and by strategic pillar, with planned and actual headcount for each.",
                  hotspots: [
                    { x: 7.4, y: 8.5, title: "Requests and goals on one page", detail: "Intake Requests, All Requests and OKR Management are tabs under Portfolio." },
                    { x: 32.4, y: 25.6, title: "Strategic pillars as filters", detail: "Each pillar is a card with its headcount, and clicking one filters the objectives below." },
                    { x: 22.2, y: 35.3, title: "Status counts on top", detail: "All, Behind, At Risk, On Track and Bookmarked, each with a count." },
                    { x: 44.4, y: 42.6, title: "Planned against actual", detail: "Planned headcount and actual headcount sit side by side for every objective." },
                  ],
                },
                {
                  title: "A goal is written with its key results and owners",
                  route: "/portfolio/okr/new",
                  src: "/work/portfolio-management/new-okr.png",
                  width: 2880,
                  height: 3504,
                  alt: "A new OKR form: phase and status, strategic alignment, an objective definition, key results with metrics and targets, dependencies, ownership, and a comments panel",
                  caption: "An objective is aligned first, then defined, then broken into key results with a quarter target and an annual target each.",
                  hotspots: [
                    { x: 12.2, y: 12.8, title: "A phase, and when it is approved", detail: "Planning or Approved, with the note that an objective is marked approved once it passes peer review." },
                    { x: 21.5, y: 16.7, title: "Alignment comes first", detail: "The objective's type, its strategic theme and the L3 and L4 objectives it supports are chosen before anything is written." },
                    { x: 36.5, y: 57.1, title: "Key results carry their metrics", detail: "Each key result takes one or more metrics, each with a quarter target and an annual target." },
                    { x: 83.9, y: 9.9, title: "Comments beside the form", detail: "A comments panel sits next to the form, so a reviewer's question and the author's answer are on the page they are about." },
                  ],
                },
                {
                  title: "The health of every goal, in one view",
                  route: "/portfolio/kpi",
                  src: "/work/portfolio-management/kpi.png",
                  width: 2880,
                  height: 2595,
                  alt: "The KPI view of the Portfolio page: goals health as a ring, a bar of health for each director, goals by owner, and a table of goals with linked initiatives and products",
                  caption: "Goals are read by health, by director and by owner, and each goal shows the initiatives and products linked to it.",
                  hotspots: [
                    { x: 85.0, y: 27.1, title: "Three views of the same goals", detail: "Compact, Detailed and Report switch how much each goal shows, without leaving the page." },
                    { x: 44.5, y: 32.5, title: "Health by director", detail: "Each director's goals as a bar, split into on track, at risk and behind." },
                    { x: 63.0, y: 64.6, title: "Goals linked to the work", detail: "Every goal lists the initiatives and the products linked to it, which is where goals meet the rest of the platform." },
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
            heading="Changes stopped being tickets to a backend team"
            body={[
              "Any change used to need a ticket raised for a backend team, which made the change. The person asking could not see where it stood, and approvals ran across email, Slack and in-person conversations.",
              "Manager is where those requests are now made and approved: product, initiative, application and pillar requests, each with its own approval status. Changes are made directly in the platform and approvals are part of it, so the decision and the action sit together. Support tickets fell by a sustained 50%.",
            ]}
          />
          <CaseStudyFigure>
            <BrowserMockup
              route="/manager"
              src="/work/portfolio-management/admin.png"
              width={2880}
              height={2210}
              alt="The Manager page: tabs for product, initiative, application and pillar requests with counts, a table of pending requests, alerts and quick links"
              caption="Requests of every kind in one place, with their status, and the changes a backend team once made on request."
              hotspots={[
                { x: 27.5, y: 24.1, title: "Every kind of request, counted", detail: "Product, initiative, application and pillar requests are tabs, each with the number waiting." },
                { x: 83.6, y: 33.4, title: "Each request carries its status", detail: "Pending, with View Request beside it." },
                { x: 81.5, y: 54.1, title: "Changes made in the platform", detail: "Uploading rates, creating a pillar and creating an org are done here." },
                { x: 28.0, y: 53.9, title: "Alerts when something is raised", detail: "Each new request puts an alert on the page, with the name of who raised it." },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="parallel">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="How it was built"
            heading="The categories were built in parallel, with design a sprint ahead"
            body={[
              "People, Product and Initiative were not built one after another. Features for each arrived together, sprint by sprint, while every category kept its own capabilities and the data stayed shared between them.",
              "I was the only designer on it, working with three product managers and their head, and three engineering teams. Each had their own priorities and deliverables, so I worked a sprint ahead of every team, with a weekly review with each team and an all-hands once a month.",
              "The harder job was persuasion. I had to influence each product manager to look at the product as a whole, not only at their own piece, whether people or product. The shared names and shared data are what let the pieces read as one.",
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

        <CaseStudySection id="beta">
          <CaseStudyChapter
            eyebrow="The beta"
            heading="A beta found the jargon the mockups had hidden"
            body={[
              "We released a beta to stress-test the product with teams before the launch across the organisation. Frequent demos, research sessions and live pilot feedback exposed it before decisions became expensive to reverse.",
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
              "The platform reached more than 6K monthly users and put six areas on one shared set of data, where each touch point had kept its own copy.",
              "The product managers reported ~800 hours of manual reconciliation reclaimed each week as more portfolio work moved into connected workflows, and support tickets fell by a sustained 50% once changes no longer needed one.",
              "If I did it again I would go further on personalisation. It is one platform for everyone today: it knows who someone is from their sign-in and shows what is relevant to them, and it could be customised much more.",
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
              body="The home screen has an assistant that finds people, products and initiatives from a question, and an Ask Pfolio button on the Portfolio page opens the same one. A product page opens with a written summary above its numbers. The surface is changing, and the problem is the same: structure complex information so someone can understand it and act."
              mark="AI"
              sparkle
            />
          </Reveal>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="seam">
            A plan is only as good as its line to the work.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
