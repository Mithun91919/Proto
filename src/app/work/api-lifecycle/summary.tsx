import type { ArtboardSlide } from "@/components/design-system/ArtboardCarousel";
import { SummaryStory } from "@/components/design-system/SummaryStory";

/**
 * What the API Lifecycle summary shows under its opener. Every line is the case study's own wording, cut down.
 */
const SLIDES: ArtboardSlide[] = [
  {
                  title: "Search results",
                  route: "/api-hub/search",
                  src: "/work/api-lifecycle/search-results.png",
                  width: 2880,
                  height: 2704,
                  alt: "Search results across services, each row carrying a rating, environment badges and a short description, with filters for type, environment, rating and popularity",
                  caption: "Results carry the environment a service runs in and how widely it is used, so the shortlist is made before anything is opened.",
                  hotspots: [
                    {
                      x: 22,
                      y: 13,
                      title: "Results narrow as you type",
                      detail: "Typing narrows the 19 results shown here in place. There are no fixed category pages.",
                    },
                    {
                      x: 84,
                      y: 13,
                      title: "Narrow the list first",
                      detail: "Filter by type, environment, rating or popularity, so the shortlist shrinks here, not one card at a time.",
                    },
                    {
                      x: 9.75,
                      y: 24,
                      title: "Where each service is live",
                      detail: "Prod, Staging, Dev, QA and Beta show which stages a service runs in, without opening it.",
                    },
                  ],
                },
  {
                  title: "API Docs",
                  route: "/api-hub/catalog/service/docs",
                  src: "/work/api-lifecycle/api-docs.png",
                  width: 2890,
                  height: 2704,
                  alt: "A service's API Docs tab: an environment selector, then each endpoint listed with its parameters and example request and response bodies, expandable in place",
                  caption: "Every endpoint is documented on the service itself, parameters and example responses included — nothing to go find in a wiki someone else was supposed to keep current.",
                  hotspots: [
                    {
                      x: 12,
                      y: 17,
                      title: "Documentation sits with the service",
                      detail: "API Docs is a tab next to the overview, not a separate wiki page to go and find.",
                    },
                    {
                      x: 28,
                      y: 22,
                      title: "All its environments, one screen",
                      detail: "prod3, prod2, qa1, dev1 and sm2devmac are the full set a service runs in, switchable without leaving the page.",
                    },
                    {
                      x: 83,
                      y: 57,
                      title: "Real examples beside each endpoint",
                      detail: "Example requests and responses sit next to each endpoint (one action the API offers), not in a separate file.",
                    },
                  ],
                },
  {
                  title: "Basic: the contract as a form",
                  route: "/api-hub/catalog/edit",
                  src: "/work/api-lifecycle/basic-editor.png",
                  width: 2890,
                  height: 2712,
                  alt: "The guided editor with the Basic Editor toggle on: URL paths, data types, responses and security on the left, and collapsible sections for operation details, parameters and servers on the right",
                  caption: "Basic is the same contract as a form. The toggle between the two editors is the hard part: switching has to carry changes the form can’t show, and unsaved work, across without losing either.",
                  hotspots: [
                    { x: 44.7, y: 16.5, title: "Two editors, one switch", detail: "The Basic Editor toggle is in the toolbar, so changing mode never means leaving the contract." },
                    { x: 70, y: 15.8, title: "Where it is in its life", detail: "Define, Specs, Docs, Publish: the contract’s stage stays visible while you edit." },
                    { x: 26.5, y: 24.9, title: "The same outline in both editors", detail: "URL paths, data types, responses and security run down the left, whichever editor is open." },
                  ],
                },
  {
                  title: "Advanced: the specification itself",
                  route: "/api-hub/catalog/edit",
                  src: "/work/api-lifecycle/spec-editor.png",
                  width: 2890,
                  height: 2712,
                  alt: "The specification editor: URL paths, data types, responses and security down the left, the specification in the middle, parameters and example values on the right",
                  caption: "Advanced keeps the specification in the middle with the structure it produces listed beside it, so someone editing directly can still see the shape they are making.",
                  hotspots: [
                    { x: 44.7, y: 16.5, title: "Switched off: the raw description", detail: "With the toggle off you see the specification itself, with the same toolbar and outline beside it." },
                    { x: 37.7, y: 49, title: "Errors marked on the line", detail: "A marker sits on the line with the problem, with an Errors panel under the editor." },
                    { x: 85, y: 26, title: "What the description produces", detail: "Parameters, example values and responses for each action are listed beside the code as it is written." },
                  ],
                },
  {
                  title: "The result, in place",
                  route: "/api-hub/testing",
                  src: "/work/api-lifecycle/api-testing-2.png",
                  width: 2892,
                  height: 2052,
                  alt: "A completed run showing the response and its result state",
                  caption: "The result lands where the request was made, which is the handoff the old flow lost.",
                  hotspots: [
                    { x: 57.9, y: 24, title: "The result at a glance", detail: "Environment, repeats, average response time, share passed and failed, how long it took and the data received." },
                    { x: 45, y: 31.7, title: "A timeline of the run", detail: "Each interval is marked passed or failed, so a bad stretch can be found without reading every row." },
                    { x: 94, y: 13.3, title: "A report to take away", detail: "Download Report saves the run as a file for whoever needs it next." },
                  ],
                },
];

export function ApiLifecycleSummary() {
  return (
    <SummaryStory
      slug="api-lifecycle"
      beats={[
        {
          label: "Why it mattered",
          lead: "There was no single place to check whether an API already existed.",
          detail: "Documentation lived in Confluence, kept current by some teams and not others.",
        },
        {
          label: "What we built",
          lead: "One platform, with governance built into it.",
          detail: "One place for every stage, with the controls built into the work instead of waiting at the end.",
        },
        {
          label: "What I did",
          lead: "I joined at inception and shaped the product model.",
          detail: "I owned the design direction and pushed for one platform with the controls built in, not three products.",
        },
      ]}
      carousel={{
        eyebrow: "The platform",
        title: "From finding a service to testing it",
        description:
          "Five screens follow an API through the platform: found by search, read on its own docs page, written in two connected editors, and tested without leaving.",
        label: "The platform, from discovery to testing",
        slides: SLIDES,
      }}
      results={[
                { from: "0", value: "20K+", label: "APIs onboarded", glyph: "modules" },
                { from: "600", value: "10K+", label: "monthly users", glyph: "field" },
                { value: "60%", label: "less developer time spent defining API contracts", glyph: "drop" },
              ]}
    />
  );
}
