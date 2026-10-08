import type { Metadata } from "next";
import { caseStudyRobots } from "@/content/seo";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { DotFlow } from "@/components/design-system/DotFlow";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudySection,
  CaseStudyShell,
} from "@/components/design-system/CaseStudy";

/**
 * Job Discovery & Resume Builder — on the locked case-study template.
 *
 * Prose verbatim from `projects/hike-jobs-service/web/*.md`.
 *
 * Three of the four draft media beats have a real asset. The saved/tracked
 * jobs beat does not, so it carries a placeholder rather than reusing one of
 * the others under a caption that would not be true of it.
 */

export const metadata: Metadata = {
  title: "Job Discovery & Resume Builder — From finding a job to being ready to apply",
  description:
    "An aggregator job-discovery experience inside Hike Messenger, with personalised recommendations and a built-in resume builder.",  robots: caseStudyRobots,
};

const JOURNEY = ["Preferences", "Discover", "Save", "Build resume", "Apply"];

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "intent", label: "Intent" },
  { id: "continuity", label: "Continuity" },
  { id: "resume", label: "Resume builder" },
  { id: "reflection", label: "Reflection" },
];

export default function HikeJobsServicePage() {
  return (
    <CaseStudyShell
      slug="hike-jobs-service"
      evidence={[
        {
          label: "The problem",
          lead: (
            <>
              Finding a job is only <span className="ds-accent-text">half of applying</span>.
            </>
          ),
          detail:
            "A generic feed surfaced opportunities without knowing what someone wanted, and the step after discovery — actually being ready to apply — sat outside the product.",
        },
        {
          label: "The task",
          lead: (
            <>
              Take someone from discovery to <span className="ds-accent-text">ready to apply</span>.
            </>
          ),
          detail:
            "The product had to carry someone from a set of suggestions worth reading through to an application they were ready to send. It sat inside Hike Messenger, which had almost 100 million monthly active users in India in 2017 (TelecomTalk, July 2017).",
        },
        {
          label: "What I did",
          lead: (
            <>
              I started the product with <span className="ds-accent-text">intent, not a feed</span>.
            </>
          ),
          detail:
            "Onboarding collected preferences so recommendations could be relevant, then search, categories and keywords gave people different ways in depending on how specific they already were. It shipped as a microservice inside Hike Messenger.",
        },
      ]}
      chapters={CHAPTERS}
      hero={{
        artMode: "backdrop" as const,
        src: "/work/hike-jobs-service/Jobs_Banner.jpg",
        alt: "The Jobs Service experience: job listings and the resume builder shown on phone screens",
        standfirst:
          "A jobs aggregator built into Hike Messenger — for people who needed both the opportunity and something to send with it.",
        headline: (
          <>
            Job Discovery & Resume Builder: from finding a job to <span style={{ color: "var(--ds-mint)" }}>being ready to apply</span>.
          </>
        ),
        meta: [
          { label: "Role", value: "Product Designer" },
          { label: "Client", value: "Hike" },
          { label: "Year", value: "2017" },
          { label: "Discipline", value: "Consumer product design" },
        ],
      }}
      next={{
        href: "/work/hike-movie-tickets",
        number: "09",
        label: "Hike",
        title: "Movie Ticket Booking: turning intent into one continuous transaction.",
      }}
    >
      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyFigure rule label="From preferences to application">
            <DotFlow stages={JOURNEY} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="intent">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Discovery"
            heading="Better job suggestions started with asking what the person wanted"
            body={[
              "The listings came from Indeed's API. Onboarding collected preferences so the product could move beyond a generic job feed and surface the ones that were relevant to each person.",
              "Search, categories, keywords, and recommendations then gave people different ways into the listings depending on how specific they already were.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              src="/work/hike-jobs-service/On-Boarding.jpg"
              width={2000}
              height={940}
              alt="The onboarding sequence collecting job preferences before the feed is personalised"
              caption="Onboarding collects preferences before the first feed is ever shown"
              hotspots={[
                {
                  x: 18,
                  y: 55,
                  title: "Status before anything else",
                  detail:
                    "Fresher (just starting out) or experienced changes which roles are worth surfacing at all, so it is the first thing asked.",
                },
                {
                  x: 50,
                  y: 55,
                  title: "Categories, not a blank search box",
                  detail:
                    "Picking fields people recognise gives the feed something to work from before they have typed a single query.",
                },
                {
                  x: 82,
                  y: 55,
                  title: "More than one city",
                  detail:
                    "Location is multi-select, because someone open to several cities should not have to run the same search repeatedly.",
                },
              ]}
            />
          </CaseStudyFigure>
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="34rem"
              src="/work/hike-jobs-service/Home.jpg"
              width={2000}
              height={2700}
              alt="The job discovery home screen with recommendations, categories, and search"
              caption="Several ways in, depending on how specific the intent already is"
              hotspots={[
                {
                  x: 18.9,
                  y: 18,
                  title: "Recommendations on first run",
                  detail:
                    "The preferences collected during onboarding mean the first screen already carries relevant roles instead of an empty feed.",
                },
                {
                  x: 81,
                  y: 18,
                  title: "Type-ahead for a specific intent",
                  detail:
                    "Someone who already knows the role they want gets there by typing, without working through categories first.",
                },
                {
                  x: 50,
                  y: 51,
                  title: "Narrowing after the fact",
                  detail:
                    "Job type and freshness filters sit on the results, so a broad search can be tightened rather than restarted.",
                },
                {
                  x: 50,
                  y: 84,
                  title: "Coming back without starting over",
                  detail:
                    "Recent searches and saved jobs give a returning user their thread back — job hunting is rarely a one-session task.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="continuity">
          <CaseStudyChapter
            eyebrow="Coming back"
            heading="People could leave a job search and pick it up again"
            body={[
              "Finding a job is rarely a one-session task.",
              "A personal area let people save and track jobs, so they could come back without starting the search again.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection id="resume">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The extension"
            heading="Discovery was not enough if someone could not apply"
            body={[
              "The resume builder became the most important addition.",
              "For people without a resume, it meant they could go from finding a role to applying in the same place. Making a resume became part of applying, not a separate tool.",
            ]}
          />
          <CaseStudyFigure>
            <ArtboardFigure
              layout="portrait"
              portraitMax="52rem"
              src="/work/hike-jobs-service/Resume_Builder.jpg"
              width={2000}
              height={1800}
              alt="The resume builder flow, from an empty profile through to a completed resume"
              caption="Resume creation sits inside the application journey, not beside it"
              hotspots={[
                {
                  x: 32,
                  y: 29.8,
                  title: "An empty profile that says what to add",
                  detail:
                    "The first-run state names each section and offers the action, so someone without a resume can see the whole shape of one before starting.",
                },
                {
                  x: 68,
                  y: 27.8,
                  title: "Structured fields, not a blank document",
                  detail:
                    "Degree, institution, and dates are separate inputs, so the resume is assembled from answers rather than written from nothing.",
                },
                {
                  x: 32,
                  y: 80.6,
                  title: "Entries build up over time",
                  detail:
                    "Education and experience accumulate as repeatable entries, so the profile can be filled in across sessions.",
                },
                {
                  x: 68,
                  y: 77.8,
                  title: "It ends as a file they can send",
                  detail:
                    "A preview and a PDF export close the gap between finding a relevant role and being ready to act on it.",
                },
              ]}
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="reflection">
          <CaseStudyChapter
            layout="flow"
            eyebrow="Reflection"
            heading="Suggestions only helped because applying was in the same place"
            body={[
              "It was released as a microservice inside Hike Messenger. I had left Hike by then, so I have no usage figures to share.",
              "Recommendations got people to a relevant role. Saved jobs and the resume builder got them from that role to an application.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What it came down to" mark="seam">
          A good suggestion did not help someone with no resume to send.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
