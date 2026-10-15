import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { Reveal } from "@/components/Reveal";
import { ArchetypeSection } from "@/components/design-system/ArchetypeSection";
import type { Archetype } from "@/components/design-system/ArchetypeFigure";
import { ArtboardCarousel } from "@/components/design-system/ArtboardCarousel";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";
import { PlatformExplainer } from "@/components/design-system/PlatformExplainer";
import { ConfidentialNote } from "@/components/design-system/ConfidentialNote";
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
      "See allocations across products, pillars (the main areas of the business) and cost centres without generating them one by one.",
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
  { id: "outcomes", label: "What changed" },
];

export default function PortfolioManagementPage() {
  const onward = getProject("api-lifecycle");

  return (
    <CaseStudyShell
      slug="portfolio-management"
      evidenceCaveat="Hours are reported by the product managers. *Average yearly cost saved by retiring redundant licences."
      evidenceMetricsLabel="The impact"
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              People were <span className="ds-accent-text">the only link</span> between the plan and the work.
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
            "Pfolio replaced four external tools with one platform. A goal connects to an initiative, a product and a person, then to the Jira epic (the group of tickets) the work is tagged to. Planned headcount sits beside actual headcount from Jira, so a blocked team shows up.",
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
            src: "/work/portfolio-management/okr-management-v2.png",
            width: 3456,
            height: 3088,
            alt: "The Portfolio page: strategic pillars across the top and a table of objectives with planned and actual headcount",
            route: "/portfolio",
          },
        ],
        figureNote: "Confidential internal work. Data and some product names have been replaced.\nScreens as shipped, built on Walmart’s Living Design system.",
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
            note="The people, products and initiatives it pays for, and the goals each one is meant to reach. Like a household budget for the year: who lives there, what gets bought, and what the money is meant to achieve."
          >
            A portfolio is what an organisation funds, and why.
          </PullStatement>
        </Reveal>
      </div>

      <CaseStudyColumn>
        <div className="pt-6 md:pt-10">
          <CaseStudyFigure label="The case at a glance">
            <PlatformExplainer />
          </CaseStudyFigure>
        </div>
        <CaseStudySection id="pieces" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="In pieces"
            heading="The plan lived in four places, and the work in a fifth"
            figure={{
              value: "3",
              label: "whiteboarding sessions",
              note: "12 people each, four hours each, with key stakeholders and the larger team.",
            }}
            body={[
              "I ran the sessions that plotted the stages of a portfolio's work as it happens today: who does what at each, where it hurts, and what to solve first.",
              "A portfolio's work is one lifecycle: people become aware of a need, brainstorm, plan, execute, assess, close out and troubleshoot. The map showed every stage living somewhere different. Who works on what was in one place, products and projects in another, initiatives and their budgets in a third, goals in a fourth, and the work in Jira. Four of the five were external tools, each with its own licence.",
              "Each place kept its own copy under its own names: the same product could be a product in one tool and a project in Jira, titled differently in each. Nothing joined them, so people did, by hand.",
              "No stage won. Each was someone's problem, so the sessions did not pick one to fix first. They pointed to a system that joins the stages up, not one that fixes each on its own.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="64.5rem"
              src="/work/portfolio-management/journey-map.png"
              width={2880}
              height={1217}
              alt="A journey map across seven lifecycle stages, from Awareness to Troubleshooting, with the personas at each stage, their tasks, and how often the work happens"
              caption="The journey map from the whiteboarding sessions: seven stages, the people at each, their tasks, and how often the work happens. Finance and data quality champions (DQC) each appear in five of the seven stages."
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="platform">
          {/* Copy left, the platform diagram right, so the claim and its picture
              read together. The diagram is held to a column of its own width. */}
          <div className="ds-cs-split" style={{ "--split-copy": "28rem" } as React.CSSProperties}>
            <CaseStudyChapter
              layout="flow"
              eyebrow="A decision"
              heading="I designed how a goal connects to the work"
              figure={{
                value: "5",
                label: "categories, one platform",
                note: "People, Product, Initiative, Portfolio and Manager.",
              }}
              body={[
                "The aim was to join what is assigned to what is done. A goal links to an initiative, an initiative to a product, a product to a person, and products and initiatives to the Jira epic their work is tagged to.",
                "Each thing gets one record and one name, in common words. The old tools used names like team rosters, roadmaps and programme codes. One name for a thing is what lets two records be one.",
              ]}
            />
            <CaseStudyFigure>
              <ArtboardFigure
                layout="portrait"
                portraitMax="39rem"
                src="/work/portfolio-management/diagram.png"
                width={1954}
                height={1782}
                alt="Pfolio at the centre, with People, Product, Initiative, Manager and Portfolio around it, each with a one-line description"
                caption="The platform in one picture: five categories around one hub. The hub is where planning, workflows and team allocation happen, and where the information behind decisions is kept. It controls who can see and change what, keeps the data accurate, and holds initiatives in their hierarchy, so priorities and outcomes can be compared."
              />
            </CaseStudyFigure>
          </div>
        </CaseStudySection>

        <CaseStudySection id="who">
          <ArchetypeSection
            heading="Some people read the portfolio. Others keep it right."
            intro="Almost everyone in the organisation uses it, so I reduced the audience to two groups. Engineers, engineering managers and executive leaders read it. Data quality champions and finance managers contribute to it, and approve the changes. The quotes are from the whiteboarding sessions."
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
                "Information had been spread across platforms, and people found search inadequate. The People area answers three questions: who is this person, who do they report to, and what are they working on?",
                "It opens on the person, and search narrows a whole directory by org, pillar, product, location and manager. Allocations Overview rolls a team up by product, initiative, cost centre, role and location.",
              ]}
              scrollable
              maxHeight="44rem"
              label="People"
              slides={[
                {
                  title: "My Profile",
                  route: "/people/profile",
                  src: "/work/portfolio-management/my-profile.png",
                  width: 2880,
                  height: 2557,
                  alt: "My Profile: profile details, product team and initiative allocations in the middle, and direct reports with their allocations on the right",
                  caption: "A person's place in the organisation, the products and initiatives they work on, and their reports' allocations, on one page.",
                  hotspots: [
                    { x: 11.8, y: 25.9, title: "A person's place in the organisation", detail: "Title, cost centre, org, manager and technical lead sit on the person's own page." },
                    { x: 44.0, y: 13.1, title: "What they work on", detail: "Product team allocations, each as a percentage of their time." },
                    { x: 43.5, y: 26.3, title: "The initiative it supports", detail: "Initiative allocations tie the same person to an initiative, and an initiative is tied to a goal." },
                    { x: 84.7, y: 24.7, title: "Managers assign the work", detail: "Update Allocations on each report lets a manager assign them to products and initiatives." },
                    { x: 27.3, y: 8.4, title: "One area, five views", detail: "My Profile, Leadership Overview, People Overview, Org Chart and People Search are tabs under People." },
                  ],
                },
                {
                  title: "Allocations Overview",
                  route: "/people/allocations",
                  src: "/work/portfolio-management/profile-allocations.png",
                  width: 2880,
                  height: 2740,
                  alt: "Allocations Overview: donut charts and lists of a team's products and initiatives with headcount and capacity, and panels for cost centres, headcount by role, employment types and locations",
                  caption: "Products, initiatives, cost centres, roles and locations for a team, rolled up in one place.",
                  hotspots: [
                    { x: 24.0, y: 7.8, title: "Read in one view, not built one by one", detail: "Products, initiatives and cost centres are rolled up for a team in a single view, not generated one at a time." },
                    { x: 27.5, y: 13.1, title: "Which products the team works on", detail: "Headcount and capacity for each product, with the people allocated to it." },
                    { x: 28.5, y: 60.1, title: "And which initiatives", detail: "The same team read against initiatives, so products and initiatives can be compared." },
                    { x: 70.5, y: 13.1, title: "Cost centres beside the work", detail: "Each cost centre shows its headcount and the people in it." },
                    { x: 74.0, y: 35.8, title: "Role, type and place", detail: "Headcount by role, employment type and location, in the same view." },
                  ],
                },
                {
                  title: "Org Chart",
                  route: "/people/org-chart",
                  src: "/work/portfolio-management/org-chart.png",
                  width: 2880,
                  height: 2372,
                  alt: "An org chart: a senior leader above, a manager below, and the manager's team in a grid with the selected person highlighted",
                  caption: "A person sits in the middle of the chart, with their reporting line above and the product team on each card.",
                  hotspots: [
                    { x: 37.3, y: 50.5, title: "Each person carries their team", detail: "The product team sits on every card, with +N for the rest, so the reporting line also shows who works on what." },
                    { x: 41.0, y: 46.1, title: "Opens on the person", detail: "The person the chart is about is highlighted, with their manager above and their peers beside them." },
                    { x: 51.8, y: 15.8, title: "Move up or down the line", detail: "The arrow at the top climbs a level, and the arrow on a card opens that person's team." },
                  ],
                },
                {
                  title: "People Search",
                  route: "/people/search",
                  src: "/work/portfolio-management/people-search.png",
                  width: 2880,
                  height: 2324,
                  alt: "People search: quick and applied filters on the left, and each person's product team and initiative allocations on the right",
                  caption: "Filters include product and initiative, and each result shows what the person works on, as a percentage.",
                  hotspots: [
                    { x: 20.0, y: 74.6, title: "Find people by their work", detail: "Product and initiative are filters beside org, pillar, location, manager and cost centre, so one search answers who works on what." },
                    { x: 66.0, y: 19.1, title: "Each result shows the work", detail: "Product team allocations and initiative allocations sit on every result, with a percentage for each." },
                    { x: 22.5, y: 25.8, title: "And who they are", detail: "Title, employment type, location, email, cost centre and manager sit beside the allocations." },
                    { x: 23.5, y: 15.3, title: "Filters that can be saved", detail: "Quick filters can be saved and reused, and the applied filters stay listed so what is narrowing the list is always visible." },
                    { x: 92.5, y: 13.9, title: "Records that need fixing", detail: "A Data Quality Issues control sits above the results, so records that need fixing can be found from where people are searched." },
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
                "Product creation had been overly complex, with no standard workflow for an app or a service. The Product area answers three questions: what exists, who leads it, and how many people are on it?",
                "A new product is requested in four steps, and says up front where its work is tracked: each product is tied to a Jira epic, so every piece of work sits under it.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Product"
              slides={[
                {
                  title: "All Products",
                  route: "/product/all",
                  src: "/work/portfolio-management/products.png",
                  width: 2880,
                  height: 2633,
                  alt: "A product page: the hierarchy, its leaders, a written summary, headcount by type and by role, and the people allocated",
                  caption: "The product's place in the organisation, its owners, its headcount, and the people allocated to it with their capacity.",
                  hotspots: [
                    { x: 61.4, y: 55.1, title: "Who is allocated to it, and how much", detail: "All People lists each person with their allocated product and capacity, so a product shows the people behind it." },
                    { x: 33.5, y: 18.1, title: "Owners named at the top", detail: "The pillar leader and the data quality champions who keep the records right are named on the product." },
                    { x: 56.5, y: 12.7, title: "Where it sits", detail: "Org, pillar and product, each a link, so the place a product sits is one click from the level above." },
                    { x: 76.3, y: 21.2, title: "Headcount by type and by role", detail: "A donut and a row of role chips show who the headcount is, and each role filters the people below." },
                    { x: 68.0, y: 25.6, title: "A written summary first", detail: "Pfolio Coach summarises the org above its numbers, with View Summary for the rest." },
                    { x: 84.5, y: 12.6, title: "Where a new product starts", detail: "Request New Product sits at the top of the page, not in a separate area." },
                  ],
                },
                {
                  title: "Product Details",
                  route: "/product/details",
                  src: "/work/portfolio-management/product-details.png",
                  width: 2880,
                  height: 2431,
                  alt: "Product Details: name, pillar, sub pillar and IDs on the left; tags, status, description, named roles and the product's teams with their Jira project names on the right",
                  caption: "The product's owners, its place in the organisation, and each team tied to the Jira project its work is tracked in.",
                  hotspots: [
                    { x: 52.4, y: 51.2, title: "Each team is tied to its Jira project", detail: "Teams list their Jira project name and team type, with status and approval status." },
                    { x: 22.0, y: 20.1, title: "Placed in the organisation", detail: "Pillar and sub pillar put the product in the org." },
                    { x: 63.0, y: 30.6, title: "Owners named on the product", detail: "Engineering manager, product manager, point of contact, product leader and program manager are named, each with their title." },
                    { x: 22.0, y: 54.6, title: "Data quality champions assigned", detail: "The people who keep the product's records accurate are assigned to it." },
                    { x: 66.0, y: 13.1, title: "Approval status beside the status", detail: "The product's approval status sits next to its status at the top." },
                    { x: 47.5, y: 19.0, title: "A description marked AI-assisted", detail: "A label says the description was written with AI assistance." },
                  ],
                },
                {
                  title: "New Product Request",
                  route: "/product/new",
                  src: "/work/portfolio-management/new-product-request.png",
                  width: 2880,
                  height: 2167,
                  alt: "A new product request: a four-step line, product details, and a form to add a product team",
                  caption: "Basic details, people, product information and a preview, with each team's tracking system chosen on the way.",
                  hotspots: [
                    { x: 22.1, y: 46.5, title: "The link to the work is made here", detail: "Each team picks Enterprise Jira or Non-Jira to track its work, then the Jira project and the team." },
                    { x: 80.9, y: 35.5, title: "Teams join the request", detail: "Each team is listed with its tracking system and approval status, and starts as Pending." },
                    { x: 56.6, y: 9.6, title: "Four steps, and where you are", detail: "Basic Details, Add People, Product Information and Preview, with the current step marked on the line." },
                    { x: 36.8, y: 9.6, title: "The people are added to the request", detail: "Add People is a step of the request, before the product information." },
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
                "An initiative is a yearly target, called a key result, together with the group of products and projects meant to reach it. Budgets and costs are declared and managed here, a year at a time, and each initiative is tied to a Jira epic.",
                "Allocation details across products, pillars and cost centres had been tedious to produce, because they had to be generated one by one. Each initiative opens on its details, with the Jira link, the products under it and named roles, and a second view shows the people allocated.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Initiative"
              slides={[
                {
                  title: "All Initiatives",
                  route: "/initiative",
                  src: "/work/portfolio-management/initiatives.png",
                  width: 2880,
                  height: 2114,
                  alt: "A list of initiatives with filters by org, pillar, sub-pillar and status, and columns for status, approval status, investment type and tenure",
                  caption: "Each initiative shows where it sits, who created it, who approved it, and the years it runs.",
                  hotspots: [
                    { x: 36.0, y: 24.5, title: "Placed in the organisation, with an owner", detail: "Hierarchy shows where each initiative sits, and Created by names who made it." },
                    { x: 75.0, y: 24.4, title: "Approved by a named person", detail: "Approved by, status and approval status are separate columns, so an initiative can be active and still rejected." },
                    { x: 88.9, y: 24.4, title: "Planned across the years", detail: "Investment type and the fiscal years each initiative runs are listed beside it." },
                    { x: 84.0, y: 18.1, title: "Start one, or upload it", detail: "New Initiative and Upload by Excel sit together, so details already in a sheet can come in as they are." },
                    { x: 35.0, y: 17.9, title: "Narrow by org, pillar, sub-pillar or status", detail: "Four filters sit above the list, in the order the hierarchy runs." },
                  ],
                },
                {
                  title: "Initiative Details",
                  route: "/initiative/details",
                  src: "/work/portfolio-management/initiative-details.png",
                  width: 2880,
                  height: 2820,
                  alt: "Initiative Details: name, hierarchy, ID, Jira link, sub-initiatives and status on the left, and the description, impacted markets and businesses, a product allocation table and named roles on the right",
                  caption: "The products under the initiative, its Jira link, its named owners, and its costs and benefits one tab over.",
                  hotspots: [
                    { x: 38.0, y: 30.8, title: "The products that deliver it", detail: "Each product that supports the initiative is listed with its pillar, engineering manager and status." },
                    { x: 22.5, y: 33.8, title: "The link to the work", detail: "The Jira link sits on the page, so the epic the initiative's work is tagged to is one click away." },
                    { x: 73.5, y: 19.6, title: "What it affects and depends on", detail: "Impacted markets and businesses, and dependent businesses and initiatives, are listed on the page." },
                    { x: 38.0, y: 57.2, title: "Named people for every role", detail: "Business owner, executive sponsor, finance leads, UX design lead and product manager are named, each with their title." },
                    { x: 24.5, y: 7.6, title: "Cost and benefit, one tab over", detail: "Expenses & Benefits holds what the initiative costs and what it returns." },
                  ],
                },
                {
                  title: "People Allocated",
                  route: "/initiative/people",
                  src: "/work/portfolio-management/people-allocated.png",
                  width: 2880,
                  height: 2892,
                  alt: "People Allocated for an initiative: the initiative hierarchy on the left, its roles and Jira link at the top, headcount by role as filter chips, and a table of people with role, manager and allocated capacity",
                  caption: "The people on the initiative with their role, manager and capacity, with the Jira link and owners above.",
                  hotspots: [
                    { x: 85.0, y: 57.2, title: "Who is on it, and how much of their time", detail: "Each person allocated shows their role, manager and capacity, as a bar and a percentage." },
                    { x: 45.0, y: 35.2, title: "Products and people, two tabs", detail: "The products and the people that deliver an initiative sit side by side on its page." },
                    { x: 83.9, y: 14.5, title: "The Jira link stays in view", detail: "It sits in the initiative's header, so the people listed are tied to the work." },
                    { x: 55.0, y: 27.7, title: "Owners named above the numbers", detail: "Pillar owner, business owner, UX design lead and product manager are named at the top." },
                    { x: 22.0, y: 16.9, title: "Initiatives sit in a hierarchy", detail: "The hierarchy lists sub-initiatives under each initiative." },
                    { x: 43.0, y: 38.5, title: "Headcount by role, as filters", detail: "Each role is a chip with its count, drawn as a filter for the people listed below." },
                  ],
                },
                {
                  title: "New Initiative: Expenses & Benefits",
                  route: "/initiative/new",
                  src: "/work/portfolio-management/new-initiative.png",
                  width: 2880,
                  height: 2933,
                  alt: "A new initiative at its Expenses and Benefits step: technical expenses, labour costs with grand totals, and a form with a month-by-month count",
                  caption: "Technical and labour costs, non-technical expenses and benefits are entered for each year, with a total under the costs.",
                  hotspots: [
                    { x: 21.5, y: 85.5, title: "Cost and benefit, declared together", detail: "Benefits sit under the expenses in the same step, so what the initiative returns is declared beside what it costs." },
                    { x: 17.0, y: 33.9, title: "Labour costs counted in people", detail: "Labour is planned as headcount in seat and still to be hired, month by month, by job family and pay band." },
                    { x: 71.5, y: 30.2, title: "A total under every cost", detail: "Technical expenses and labour costs each end in a grand total." },
                    { x: 33.5, y: 11.9, title: "Five years, one at a time", detail: "Tabs for FY 2025 to FY 2029 let spend be entered a year at a time." },
                    { x: 54.7, y: 7.3, title: "Four steps, ending in a preview", detail: "Basic Details, Define Initiative, Expenses & Benefits and Preview, with Save as Draft beside them." },
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
              title="A goal and its work now come from the same records"
              description={[
                "Goals run yearly, quarterly and monthly, and tie initiatives, products and people together. When goals launched, teams created more than 1.4K of them across 14 strategic themes.",
                "Because goals read from the same records, a goal shows the initiatives and products linked to it, and where they stand.",
                "A leader sets a goal at the start of the year and checks in each quarter on how much is achieved and which teams are blocking it, from data, not assumptions. People on different initiatives can see which goals their work supports, and who is responsible for each.",
              ]}
              scrollable
              maxHeight="44rem"
              label="Portfolio"
              slides={[
                {
                  title: "OKR Management",
                  route: "/portfolio/okr",
                  src: "/work/portfolio-management/okr-management-v2.png",
                  width: 3456,
                  height: 3088,
                  alt: "The Portfolio page at OKR Management: directors to choose from, strategic pillars as cards, status counts, and objectives with planned and actual headcount",
                  caption: "Objectives are read by director and by strategic pillar, with planned and actual headcount side by side for each.",
                  hotspots: [
                    { x: 51.4, y: 42.4, title: "Plan and work, side by side", detail: "Planned headcount, entered in Pfolio, sits beside actual headcount from Jira for every objective." },
                    { x: 30.0, y: 12.1, title: "A goal belongs to a leader", detail: "Choose a director and their reports to read the objectives set under them." },
                    { x: 85.6, y: 42.4, title: "Each objective names its pillar and product", detail: "Strategic pillar, product and program are columns beside the objective." },
                    { x: 35.6, y: 25.4, title: "Strategic pillars as filters", detail: "Each pillar is a card with its headcount, and clicking one filters the objectives below." },
                    { x: 24.6, y: 35.1, title: "Status counts on top", detail: "All, Behind, At Risk, On Track and Bookmarked, each with a count." },
                    { x: 8.4, y: 8.3, title: "Requests and goals on one page", detail: "Intake Requests, All Requests and OKR Management are tabs under Portfolio." },
                  ],
                },
                {
                  title: "New OKR",
                  route: "/portfolio/okr/new",
                  src: "/work/portfolio-management/new-okr.png",
                  width: 2880,
                  height: 3504,
                  alt: "A new OKR form: phase and status, strategic alignment, an objective definition, key results with metrics and targets, dependencies, ownership, and a comments panel",
                  caption: "An objective is aligned first, then defined, then broken into key results with targets, and named owners are chosen.",
                  hotspots: [
                    { x: 27.0, y: 16.6, title: "Tied to the objective above it", detail: "The L3 and L4 objectives it supports are chosen first, each with its owner shown." },
                    { x: 14.0, y: 90.0, title: "Named owners on the work", detail: "The engineering lead, TPM, product owner and engineering owner are chosen for the goal." },
                    { x: 36.5, y: 69.1, title: "Key results carry their metrics", detail: "Each key result takes one or more metrics, each with a quarter target and an annual target." },
                    { x: 46.0, y: 12.7, title: "Peer review before approval", detail: "A goal stays in Planning until it passes peer review, then it is marked Approved." },
                    { x: 80.0, y: 9.8, title: "Comments beside the form", detail: "A comments panel sits next to the form, so a reviewer's question and the author's answer are on the page they are about." },
                    { x: 16.0, y: 82.4, title: "Dependencies written down", detail: "Internal and external dependencies are entered on the goal." },
                  ],
                },
                {
                  title: "KPI Management",
                  route: "/portfolio/kpi",
                  src: "/work/portfolio-management/kpi-management-v2.png",
                  width: 3456,
                  height: 3504,
                  alt: "The KPI view of the Portfolio page: goals health as a ring, a bar of health for each director, goals by owner, and a table of goals with linked initiatives and products",
                  caption: "Goals are read by health, by director and by owner, and each goal shows its planned headcount and the initiatives and products linked to it.",
                  hotspots: [
                    { x: 83.7, y: 64.6, title: "Goals linked to the work", detail: "Every goal lists the initiatives and the products linked to it, which is where goals meet the rest of the platform." },
                    { x: 61.4, y: 64.5, title: "Planned headcount beside each goal", detail: "Planned headcount sits next to the linked initiatives and products for every goal." },
                    { x: 12.7, y: 37.8, title: "Health at a glance", detail: "76 goals, split into on track, at risk and behind." },
                    { x: 50.0, y: 32.4, title: "Health by director", detail: "Each director's goals as a bar, split into on track, at risk and behind." },
                    { x: 90.8, y: 26.8, title: "Three views of the same goals", detail: "Compact, Detailed and Report switch how much each goal shows, without leaving the page." },
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
            figure={{
              value: "50%",
              label: "fewer support tickets",
              note: "A sustained fall, once changes no longer needed one.",
            }}
            body={[
              "Any change meant raising a ticket for a backend team to make. The person asking could not see where it stood, and approvals ran across email, Slack and in-person conversations.",
              "Manager is where those requests are now made and approved: product, initiative, application and pillar requests, each with its own approval status. Changes are made directly in the platform and approvals are part of it, so the decision and the action sit together, and every decision is documented.",
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
                { x: 88.3, y: 28.6, title: "Each request carries its decision", detail: "Created by, submitted date and approval status sit on every request, with View Request beside it." },
                { x: 53.0, y: 24.1, title: "Every kind of request, counted", detail: "Product, initiative, application and pillar requests are tabs, each with the number waiting." },
                { x: 14.0, y: 53.4, title: "Alerts when something is raised", detail: "Each new request puts an alert on the page, with the name of who raised it." },
                { x: 74.0, y: 53.4, title: "Changes made in the platform", detail: "Uploading rates, creating a pillar and creating an org are done here." },
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
              "The harder job was persuasion. I had to influence each product manager to look at the product as a whole, not only at their own piece, whether that was People or Product. The shared names and shared data are what let the pieces read as one.",
              "Before launch I ran a beta with teams across the organisation. It surfaced what the mockups had hidden: internal field names showing in the interface, drafts that did not save, and form checks that got in people’s way. We fixed them before the wider release.",
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

        <CaseStudySection id="outcomes">
          <CaseStudyChapter
            eyebrow="What changed"
            heading="800+ hours a week stopped going on reconciliation"
            body={[
              "The platform reached more than 6K monthly users and replaced four external tools with one platform, so the plan and the work sit on one shared set of records.",
              "That ended the manual reconciliation and the copying of data between tools. The product managers report 800+ hours a week reclaimed, and over 3,500 days of manual effort were eliminated in 2025. Retiring redundant licences saves $100K a year on average, and support tickets fell by a sustained 50% once changes no longer needed one.",
              "If I did it again I would go further on personalisation. It is one platform for everyone today: it knows who someone is from their sign-in and shows what is relevant to them, and it could be customised much more.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "800+ hrs", label: "reclaimed every week", glyph: "field" },
                { value: "3,500+ days", label: "of manual effort eliminated in 2025", glyph: "layers" },
                { value: "$100K", label: "average yearly licence cost saved", glyph: "drop" },
                { value: "50%", label: "fewer support tickets", glyph: "bars" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <PullStatement eyebrow="What I believe now" mark="seam" note={<ConfidentialNote />}>
            A plan is only as good as its link to the work.
          </PullStatement>
        </Reveal>
      </div>
    </CaseStudyShell>
  );
}
