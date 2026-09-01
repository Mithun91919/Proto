import type { Metadata } from "next";
import { DotFlow } from "@/components/design-system/DotFlow";
import { MediaPlaceholder } from "@/components/design-system/MediaPlaceholder";
import { ProofStrip } from "@/components/design-system/ProofStrip";
import { PullStatement } from "@/components/design-system/PullStatement";
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
 * Store Support Platform — on the locked case-study template.
 *
 * Prose verbatim from `projects/store-support/web/*.md`.
 *
 * The draft is careful that its figures show scale rather than prove the
 * redesign resolved issues, so the metric band is captioned to keep that
 * qualifier attached rather than letting three big numbers imply outcome.
 */

export const metadata: Metadata = {
  title: "Store Support Platform — Diagnose and resolve before raising a ticket",
  description:
    "Redesigning frontline technical support around resolution rather than reporting, for store associates across a ~580,000-device footprint.",
};

const OLD_PATH = ["Choose category", "Fill form", "Submit"];
const NEW_PATH = ["What happened?", "Guided checks", "Resolved"];
const CATEGORIES = [
  "Store department or area",
  "Digital tools, apps, and devices",
  "Wireless and store network",
  "Personnel and training",
];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "tickets", label: "The old path" },
  { id: "classification", label: "Classification" },
  { id: "resolution", label: "Resolution first" },
  { id: "search", label: "Search" },
  { id: "outcomes", label: "What changed" },
];

export default function StoreSupportPage() {
  const onward = getProject("supply-chain-operations");

  return (
    <CaseStudyShell
      chapters={CHAPTERS}
      hero={{
        eyebrow: "Store Support Platform · Walmart Global Tech",
        headline: "Redesigning IT support so store associates can diagnose and resolve issues before raising a ticket.",
        meta: [
          { label: "Role", value: "UX Designer" },
          { label: "Client", value: "Walmart Global Tech" },
          { label: "Year", value: "2020–2021" },
          { label: "Discipline", value: "Frontline operations · Mobile product" },
        ],
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
                Resolution <span className="text-[var(--accent-deep)]">before escalation</span>.
              </>
            }
            note="Frontline support for store associates."
            body={[
              "Store associates rely on technology throughout the day — handheld devices, printers, store networks, applications, kiosks, and other systems.",
              "When something stopped working, the existing support experience was largely built around reporting the problem. I worked on redesigning that journey around a different question: can we help someone understand and resolve the issue before they need to raise a ticket?",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              needs="A hero carrying the redesigned journey: search, then troubleshoot, then resolve or escalate. Reconstructed screens with representative store and device data."
              source="Draft beat: MEDIA — HERO"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="tickets">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The problem"
            heading="The product was good at collecting tickets, less good at preventing them"
            body={[
              "The existing experience gave associates a way to report technical problems, but several things made that harder than it needed to be.",
              "Issues were organised into broad categories that did not always match how associates described a problem. Search was weak, troubleshooting guidance was limited, and unresolved tickets often still required support teams to gather context later.",
              "The shortest path through the product was often straight to a form.",
            ]}
          />
          <CaseStudyFigure rule label="The old shortest path">
            <DotFlow stages={OLD_PATH} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="classification">
          <CaseStudyChapter
            eyebrow="Classification"
            heading="We reorganised support around how people described problems"
            body={[
              "One of the first challenges was classification.",
              "The system reflected the support organisation more than the mental model of someone standing in a store trying to fix something. Research and card sorting helped us reorganise issues into four clearer starting points.",
              "The goal was simple: let people begin with what they recognised rather than asking them to understand the support structure first.",
            ]}
          />
          <CaseStudyFigure rule label="Four starting points, in the associate’s language">
            <DotFlow stages={CATEGORIES} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="resolution">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The shift"
            heading="Then we put resolution before escalation"
            body={[
              "The biggest shift was not visual. It was what happened between identifying a problem and submitting a ticket.",
              "For common issues, the experience introduced guided troubleshooting that helped associates check likely causes and try known resolutions first. If help was still needed, the ticket was created with the context already gathered.",
              "This gave straightforward problems a chance to be resolved immediately while improving the information passed to support teams when escalation was still necessary.",
            ]}
          />
          <CaseStudyFigure rule label="The new path">
            <DotFlow stages={NEW_PATH} />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <MediaPlaceholder
              ratio={16 / 9}
              needs="The guided troubleshooting flow, from the reported symptom through the checks to a resolution or an escalation carrying its context."
              source="Draft beat: MEDIA — GUIDED TROUBLESHOOTING FLOW"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="search">
          <CaseStudyChapter
            eyebrow="Search"
            heading="Search became another way into the same support journey"
            body={[
              "Not everyone thinks in categories. Experienced associates often already knew the device, application, or issue they were looking for.",
              "Search therefore became a second entry point rather than an afterthought. Results were grouped more clearly, useful guidance could appear in the flow, and information gathered during search and troubleshooting could help prefill a support request if escalation was required.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              needs="Search as an entry point: grouped results, guidance appearing in the flow, and the support request it prefills."
              source="Draft beat: MEDIA — SEARCH → GUIDANCE → PREFILLED SUPPORT REQUEST"
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="The goal" mark="rhythm">
          Not fewer tickets at any cost. Better help at the right moment.
        </PullStatement>
      </div>

      <CaseStudyColumn>
        <CaseStudySection id="outcomes" boundary={false} className="pt-16 md:pt-20">
          <CaseStudyChapter
            layout="flow"
            eyebrow="What changed"
            heading="From “which form?” to “what happened?”"
            body={[
              "During the documented period, the product reached roughly 5,900 daily users across a device footprint of approximately 580,000, with more than 7,000 support searches each week.",
              "Those figures show the scale of the experience and the growing role of search and self-service; they are not presented as proof that every issue was resolved by the redesign.",
            ]}
          />
          <CaseStudyFigure rule label="Scale of the experience — not a resolution claim">
            <ProofStrip
              items={[
                { value: "~5.9K", label: "daily users", glyph: "field" },
                { value: "~580K", label: "device footprint", glyph: "bars" },
                { value: "7K+", label: "weekly support searches", glyph: "ring" },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What I believe now" mark="exchange">
          Sometimes the most useful thing a product can do is help someone avoid entering the support system at
          all.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
