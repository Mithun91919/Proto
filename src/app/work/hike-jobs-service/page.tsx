import type { Metadata } from "next";
import { ArtboardFigure } from "@/components/design-system/ArtboardFigure";
import { DotFlow } from "@/components/design-system/DotFlow";
import { MediaPlaceholder } from "@/components/design-system/MediaPlaceholder";
import { PullStatement } from "@/components/design-system/PullStatement";
import {
  CaseStudyChapter,
  CaseStudyColumn,
  CaseStudyFigure,
  CaseStudyOverview,
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
    "An aggregator job-discovery experience for TOTAL OS, with personalised recommendations and a built-in resume builder.",
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
      chapters={CHAPTERS}
      hero={{
        src: "/work/hike-jobs-service/Jobs_Banner.jpg",
        alt: "The Jobs Service experience: job listings and the resume builder shown on phone screens",
        eyebrow: "Job Discovery & Resume Builder · Hike",
        headline: "Helping people move from finding a job to being ready to apply.",
        meta: [
          { label: "Role", value: "Product Design" },
          { label: "Client", value: "Hike" },
          { label: "Year", value: "2017" },
          { label: "Discipline", value: "Consumer mobile · Product design" },
        ],
      }}
      next={{
        href: "/work/hike-movie-tickets",
        number: "09",
        label: "Hike",
        title: "Turning booking intent into one continuous transaction.",
      }}
    >
      <CaseStudyColumn>
        <CaseStudySection id="overview" boundary={false} className="pt-14 md:pt-20">
          <CaseStudyOverview
            statement={
              <>
                Discovery that <span className="text-[var(--accent-deep)]">leads somewhere</span>.
              </>
            }
            note="An aggregator experience for TOTAL OS."
            body={[
              "The Jobs Service was an aggregator experience for TOTAL OS designed to help people discover relevant opportunities through personalised suggestions and support the next step with a built-in resume builder.",
            ]}
          />
          <CaseStudyFigure rule label="From preferences to application">
            <DotFlow stages={JOURNEY} />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="intent">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="Discovery"
            heading="Better discovery started with understanding intent"
            body={[
              "Onboarding collected preferences so the product could move beyond a generic job feed and surface more relevant opportunities.",
              "Search, categories, keywords, and recommendations then gave people different ways into the marketplace depending on how specific their intent was.",
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
                    "Fresher or experienced changes which roles are worth surfacing at all, so it is the first thing asked.",
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
            eyebrow="Continuity"
            heading="Job hunting needed continuity"
            body={[
              "Finding a job is rarely a one-session task.",
              "A personalised area allowed users to save and track opportunities so they could return without starting their search again.",
            ]}
          />
          <CaseStudyFigure>
            <MediaPlaceholder
              ratio={16 / 10}
              needs="The saved and tracked jobs area, showing how someone returns to opportunities across sessions."
              source="Draft beat: MEDIA — SAVED / TRACKED JOBS"
            />
          </CaseStudyFigure>
        </CaseStudySection>

        <CaseStudySection id="resume">
          <CaseStudyChapter
            layout="stacked"
            eyebrow="The extension"
            heading="Discovery was not enough if someone could not apply"
            body={[
              "The resume builder became the most important extension of the experience.",
              "For users without a ready resume, it reduced the distance between finding a relevant role and being prepared to act on it. Resume creation became part of the application journey rather than a separate utility disconnected from job search.",
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
            heading="What stayed with me"
            body={[
              "Personalisation is most useful when it leads somewhere. Recommendations helped people find relevant opportunities, while saved jobs and resume creation helped them move closer to applying.",
            ]}
          />
        </CaseStudySection>
      </CaseStudyColumn>

      <div className="mt-16 md:mt-20">
        <PullStatement eyebrow="What it came down to" mark="seam">
          Finding something and being ready to act on it are two different problems.
        </PullStatement>
      </div>
    </CaseStudyShell>
  );
}
