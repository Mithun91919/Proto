import type { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/design-system/BeforeAfterSlider";
import { BrowserMockup } from "@/components/design-system/BrowserMockup";
import { DecisionRecord } from "@/components/design-system/DecisionRecord";
import { GuidedHotspotTour } from "@/components/design-system/GuidedHotspotTour";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { ReframeBlock } from "@/components/design-system/ReframeBlock";
import { PullStatement } from "@/components/design-system/PullStatement";
import { SceneBannerFigure } from "@/components/design-system/SceneBannerFigure";
import { ZoomLens } from "@/components/design-system/ZoomLens";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudyOverview,
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
  title: "Supply Chain Operations Platform — Helping operations teams get to the right tool faster",
  description:
    "Redesigning the information architecture, navigation, and landing experience for a platform fronting 139 operational modules.",
};

const CHAPTERS = [
  { id: "overview", label: "Overview" },
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
      chapters={CHAPTERS}
      hero={{
        eyebrow: "Supply Chain Operations Platform · Walmart Global Tech",
        headline: "Helping operations teams get to the right tool faster.",
        meta: [
          { label: "Role", value: "UX Designer · co-led" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2021–2022" },
          { label: "Discipline", value: "Enterprise operations · Platform UX" },
        ],
        // Redesigned landing page + navigation, rebuilt with placeholder data.
        figure: (
          <SceneBannerFigure
            note="Reconstructed · placeholder data"
            screens={[
              {
                src: "/work/supply-chain-operations/new-dashboard.png",
                width: 2560,
                height: 1576,
                alt: "Redesigned platform dashboard: grouped module categories, pinned tools, and recent modules.",
              },
              {
                src: "/work/supply-chain-operations/new-navigation.png",
                width: 2560,
                height: 1940,
                alt: "Persistent left navigation with the reorganised category hierarchy.",
              },
            ]}
          />
        ),
      }}
      next={
        onward
          ? { href: `/work/${onward.slug}`, number: onward.number, label: onward.label, title: onward.title }
          : { href: "/work", number: "—", label: "All work", title: "See the rest of the work." }
      }
    >
      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyOverview
            statement={
              <>
                A front door, <span className="text-[var(--accent-deep)]">not a destination</span>.
              </>
            }
            note="139 operational modules behind one entry point."
            body={[
              "A global supply-chain platform had become the entry point to 139 operational modules used across Walmart.com, Online Grocery, and international markets.",
              "As the platform grew, its homepage became harder to navigate. Finding the right tool meant scanning a large collection of modules, remembering where something lived, or relying on prior knowledge.",
              "I co-led the redesign of the platform’s information architecture, navigation, and landing experience with one goal: help people spend less time finding a tool and more time using it.",
            ]}
          />
          <CaseStudyFigure>
            <ProofStrip
              items={[
                { value: "~985K", label: "monthly unique visitors", glyph: "field" },
                { value: "139", label: "operational modules", glyph: "bars" },
                { value: "62%", label: "less time spent on the landing page", glyph: "ring" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="bottleneck">
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
          <CaseStudyFigure>
            <ZoomLens
              src="/work/supply-chain-operations/old-dashboard.png"
              width={1914}
              height={1242}
              alt="The earlier landing page: a long, flat grid of module tiles with little grouping."
              caption="The homepage before the redesign — one flat collection of modules, the same starting point for everyone. Hover to read the tiles. Reconstructed with placeholder data."
            />
          </CaseStudyFigure>
        </CaseStudySection>

      </CaseStudyColumn>

      <div id="structure" className="mt-16 md:mt-20">
        <ReframeBlock
          bleed
          eyebrow="Structure"
          heading="The new structure took nearly a dozen teams to agree"
          body="We worked through the platform with close to a dozen category teams to agree what every module did and where it belonged, then took the proposed structure through several rounds of leadership approval before it could ship. That information architecture became the foundation for every navigation decision that followed."
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
            heading="Then we made the front door work differently for different people"
            body={[
              "The platform contained 139 modules, but most people relied on only a small working set.",
              "That changed the design problem from “make everything equally visible” to “make the right things easier to return to.”",
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
              caption="Three faster routes back into a small working set: pins, recent modules, and search. Reconstructed with placeholder data."
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
              "The purpose of the landing page was to route people into operational work as quickly as possible. Where a visit to it had run 10 to 30 minutes, that time fell by 62% after the new information architecture, navigation, search, and personalisation were introduced.",
              "The redesign gave the platform a scalable structure for new modules, persistent navigation across the experience, direct search, and personal routes back into frequently used tools. More importantly, the homepage became what it was supposed to be: a way through the platform, not a place users had to spend time figuring out.",
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
              Drag the divider to compare. Reconstructed with placeholder data.
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
