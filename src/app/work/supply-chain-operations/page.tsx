import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { BeforeAfterSlider } from "@/components/design-system/BeforeAfterSlider";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { DecisionRecord } from "@/components/design-system/DecisionRecord";
import { GuidedHotspotTour } from "@/components/design-system/GuidedHotspotTour";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { ReframeBlock } from "@/components/design-system/ReframeBlock";
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
 * Supply Chain Operations Platform — on the locked case-study template.
 *
 * Prose verbatim from `projects/supply-chain-operations/web/*.md`.
 *
 * The headline metric is a *fall* in time on page, which reads as a
 * regression unless its direction is stated. The chapter says so in prose
 * before the number appears, and the strip is labelled accordingly.
 */

export const metadata: Metadata = {
  title: "Supply Chain Operations Platform — getting to the right tool faster",
  description:
    "Redesigning the information architecture, navigation, and landing experience for a platform fronting 139 operational modules.",  robots: caseStudyRobots,
};

const CHAPTERS = [
  { id: "bottleneck", label: "The bottleneck" },
  { id: "structure", label: "Structure" },
  { id: "navigation", label: "Navigation" },
  { id: "front-door", label: "The front door" },
  { id: "outcomes", label: "What changed" },
];

export default function SupplyChainOperationsPage() {
  const onward = getProject("bb-daily");

  return (
    <CaseStudyShell
      slug="supply-chain-operations"
      evidenceCaveat="Less time on the landing page was the goal here — it is a route into the work, not a place to hold people."
      evidence={[
        {
          label: "Problem",
          lead: (
            <>
              Finding a tool meant <span className="ds-accent-deep-text">remembering where it lived</span>.
            </>
          ),
          detail:
            "Capability had been added over time without structure around it. Related modules were hard to identify, everyone started from the same view, frequently used tools could not be saved, and people who already knew what they wanted still had no fast route to it.",
        },
        {
          label: "Task",
          lead: (
            <>
              Redesign the architecture, navigation and{" "}
              <span className="ds-accent-deep-text">landing experience</span>.
            </>
          ),
          detail:
            "I co-led this with another designer across 139 modules serving Walmart.com, Online Grocery and international markets, against one goal: less time finding a tool, more time using it.",
        },
        {
          label: "What I did",
          lead: (
            <>
              I fixed the structure <span className="ds-accent-deep-text">before the navigation</span>.
            </>
          ),
          detail:
            "We regrouped the platform into Category → Module → Sub-module with users and platform teams, put two navigation directions in front of users, then added pins, recent modules and search so the small working set most people rely on is a short trip away.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        headline: (
          <>
            Supply Chain Operations Platform: getting to{" "}
            <span style={{ color: "var(--ds-mint)" }}>the right tool faster</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "UX Designer · co-led" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2021–2022" },
          { label: "Discipline", value: "Enterprise operations · Platform UX" },
        ],
        // Redesigned landing page + navigation, rebuilt with placeholder data.
        // Three shipped screens rather than one: the platform's argument is
        // that 139 modules reach you through a landing page, a navigation
        // and a sign-in, so the deck says "several real screens, this one
        // leads". The legacy dashboard stays out — it is the before state,
        // and it has its own comparison further down.
        stack: [
          {
            src: "/work/supply-chain-operations/new-dashboard.png",
            width: 2560,
            height: 1576,
            route: "supply-chain / home",
            name: "the landing page",
            alt: "The redesigned landing page: grouped module categories, pinned tools and recent modules.",
          },
          {
            src: "/work/supply-chain-operations/new-navigation.png",
            width: 2560,
            height: 1940,
            route: "supply-chain / modules",
            name: "the module navigation",
            alt: "The module navigation, with all 139 modules grouped by operational area.",
          },
          {
            src: "/work/supply-chain-operations/new-login.png",
            width: 2560,
            height: 1612,
            route: "supply-chain / sign-in",
            name: "the sign-in screen",
            alt: "The platform sign-in screen.",
          },
        ],
        standfirst:
          "The entry point to 139 operational modules used across Walmart.com, Online Grocery and international markets. Operations teams open it to get to a tool, not to spend time in it.",
        alt: "Redesigned platform dashboard: grouped module categories, pinned tools, and recent modules.",
        figureNote: "The interface is as it shipped, built on Living Design — Walmart's design system. I have replaced the data and some product names, because the work is internal.",
      }}
      next={
        onward
          ? { href: `/work/${onward.slug}`, number: onward.number, label: onward.label, title: onward.title }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      <CaseStudyColumn>
        <CaseStudySection id="bottleneck" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="A crowded front door"
            heading="The homepage had become a bottleneck"
            body={[
              "The landing page was never meant to be a destination. It was the front door to operational tools people needed to do their jobs.",
              "But more capability had been added over time without enough structure around it. Related modules were difficult to identify, everyone started from essentially the same experience, frequently used tools could not be saved, and users who already knew what they wanted still lacked a fast route to it.",
              "Before changing the interface, we needed to fix the structure underneath it.",
            ]}
          />
          {/* M8 rather than M12: the point of this screen is four specific
              failures, not the pleasure of reading small type. A zoom lens
              magnifies whatever the pointer happens to be over and argues
              nothing; the tour names each problem in the order the paragraph
              above makes them. */}
          <CaseStudyFigure label="The homepage before the redesign">
            <GuidedHotspotTour
              src="/work/supply-chain-operations/old-dashboard.png"
              width={1914}
              height={1242}
              alt="The earlier landing page: a long, flat grid of module tiles with little grouping."
              label="Four problems with the old landing page"
              stops={[
                {
                  x: 66,
                  y: 5,
                  title: "No fast route for people who knew",
                  body: "The header carried region, help and settings, and no search. Someone who already knew which module they wanted still had to find it by eye.",
                },
                {
                  x: 45,
                  y: 27,
                  title: "Related modules sat beside unrelated ones",
                  body: "Demand Planning next to Fleet Tracking next to Purchase Orders. The order carried no meaning, so being adjacent told you nothing about what belonged together.",
                },
                {
                  x: 15,
                  y: 42,
                  title: "Nothing could be marked as yours",
                  body: "No pins, no recents, no favourites. A tool opened twenty times a day sat exactly where one opened twice a year sat.",
                },
                {
                  x: 34,
                  y: 74,
                  title: "Everyone opened the same page",
                  body: "The landing page was identical whatever your role, and the space below went unused — it was given to a full inventory rather than to the few modules any one person actually needed.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

      </CaseStudyColumn>

      <div id="structure" className="mt-16 md:mt-20">
        <ReframeBlock
          bleed
          eyebrow="Structure"
          heading="Re-skinning the front would have promised what the platform could not deliver"
          body="The cheaper path was to leave the structure alone and redesign over it. We argued against that: better packaging raises what people expect, and the product underneath has to be worth the expectation it sets. Nothing could be grouped until we could say what each of the 139 modules actually did, so close to a dozen category teams settled that module by module. We landed on Category → Module → Sub-module, then several rounds of leadership approval before it could ship."
        />
      </div>

      <CaseStudyColumn>
        {/* No boundary rule — the full-bleed `#structure` band above is
            already the break. */}
        <CaseStudySection id="navigation" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The decision"
            heading="Two navigation ideas went in front of users"
            body={[
              "With the new structure in place, we explored two directions: a top-navigation model and a persistent left-navigation model.",
              "Rather than choosing internally, we evaluated both concepts through moderated sessions with users representing different operational groups and markets.",
              "Feedback on the alternative still improved the final design, including how controls such as market selection were consolidated into the navigation.",
            ]}
          />
          <CaseStudyFigure label="Two directions, tested">
            <DecisionRecord
              optionA={{
                title: "Top navigation",
                body: "The familiar option, but the platform’s depth left little room as categories and module count grew.",
              }}
              chosen={{
                title: "Persistent left navigation",
                body: "Gave categories room to grow, supported longer module names, stayed available as users moved through the product, and could collapse when more workspace was needed.",
              }}
            />
          </CaseStudyFigure>
          <CaseStudyFigure label="The direction chosen">
            <GuidedHotspotTour
              label="Persistent left navigation — a walk through what it buys"
              src="/work/supply-chain-operations/new-navigation.png"
              width={2560}
              height={1940}
              alt="The redesigned platform with a persistent left navigation carrying the category hierarchy."
              stops={[
                {
                  x: 8,
                  y: 30,
                  title: "Categories, not a catalogue",
                  body: "The reorganised hierarchy lives in the rail, so related modules sit together instead of being scattered across one long page.",
                },
                {
                  x: 30,
                  y: 26,
                  title: "Room for real module names",
                  body: "A vertical rail carries longer labels and a second level of nesting without truncating — the flyout opens the group in place.",
                },
                {
                  x: 72,
                  y: 42,
                  title: "It stays as you work",
                  body: "Navigation is persistent across the platform rather than a homepage-only menu, and collapses when a module needs the full width.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="front-door">
          <CaseStudyChapter
            eyebrow="Personalisation"
            heading="The problem was not making everything visible, it was making the right things easy to return to"
            body={[
              "The platform contained 139 modules, but most people relied on only a small working set. Treating all 139 as equally likely was the thing making the front door slow.",
              "The redesigned experience introduced three faster paths: pins for frequently used modules, recent modules for returning to ongoing work without setup, and search for users who already knew what they needed.",
            ]}
          />
          {/* Three parallel routes, marked on the real screen rather than
              drawn as a numbered flow — they have no order. */}
          <CaseStudyFigure>
            <BrowserMockup
              route="nexuso / home"
              src="/work/supply-chain-operations/new-dashboard.png"
              width={2560}
              height={1576}
              alt="The redesigned landing page with pinned modules, a recent-modules row, and search."
              caption="Three faster routes back into a small working set: pins, recent modules, and search."
              hotspots={[
                {
                  x: 50,
                  y: 7,
                  title: "Search",
                  detail: "A direct route for people who already know the module they want and don’t need to browse at all.",
                },
                {
                  x: 16,
                  y: 40,
                  title: "Recent modules",
                  detail: "Returning to ongoing work without setup — the platform remembers where you last were.",
                },
                {
                  x: 16,
                  y: 72,
                  title: "Pinned modules",
                  detail: "A saved set of frequently used tools, so the small working set most people rely on is always one click away.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="outcomes">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="What changed"
            heading="The best outcome was people leaving the homepage faster"
            body={[
              "In many digital products, more time spent can look like engagement. Here, the opposite was true.",
              "The purpose of the landing page was to route people into operational work as quickly as possible. Where a visit to it had run 10 to 30 minutes, that time fell by 62% after we introduced the new information architecture, navigation, search and personalisation.",
              "The homepage became what it was supposed to be: a way through the platform, rather than a place people had to spend time working out.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "62%", label: "less time spent on the landing page", glyph: "drop" },
                { value: "10–30 min", label: "a visit to it used to take", glyph: "ring" },
                { value: "~39%", label: "of platform visits now route through it", glyph: "funnel" },
              ]}
            />
          </CaseStudyFigure>
          <CaseStudyFigure label="The landing page — before and after">
            <BeforeAfterSlider
              label="The platform landing page, before and after the redesign"
              before={{
                src: "/work/supply-chain-operations/old-dashboard.png",
                width: 1914,
                height: 1242,
                alt: "Before: a long, flat grid of module tiles with little grouping.",
              }}
              after={{
                src: "/work/supply-chain-operations/new-dashboard-cmp.png",
                width: 2560,
                height: 1661,
                alt: "After: grouped categories, pinned and recent modules, and search.",
              }}
            />
            <p className="ds-media-caption">
              Drag the divider to compare.
            </p>
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What I believe now" mark="rhythm">
          Sometimes lower engagement is the better experience.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
