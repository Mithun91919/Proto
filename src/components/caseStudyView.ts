import { useSyncExternalStore } from "react";

/**
 * Whether a case study is read in full or as its summary. Shared by the header
 * switch and the button at the foot of the summary, remembered across pages,
 * and written to the root element so the page can hide its chapters with CSS
 * alone (see `[data-cs-view="summary"]` in design-system.css).
 */
export type CaseStudyView = "full" | "summary";

const KEY = "cs-view";
const listeners = new Set<() => void>();
let view: CaseStudyView = "full";
let loaded = false;

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    view = window.localStorage.getItem(KEY) === "summary" ? "summary" : "full";
  } catch {
    // Storage blocked: stay on the full view, and don't remember the choice.
  }
  document.documentElement.dataset.csView = view;
}

function subscribe(listener: () => void) {
  load();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): CaseStudyView {
  load();
  return view;
}

export function setCaseStudyView(next: CaseStudyView) {
  if (next === view) return;
  const apply = () => {
    view = next;
    document.documentElement.dataset.csView = next;
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      // Not remembered; still applies to this page view.
    }
    listeners.forEach((l) => l());
  };

  // The two views are different pages' worth of height, so the change starts
  // from the top and the old view dissolves into the new one (see
  // `::view-transition-*` in design-system.css). Without the browser support,
  // or for a reader who asked for less motion, it is an instant swap.
  const doc = document as Document & {
    startViewTransition?: (update: () => void) => { finished: Promise<unknown> };
  };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!doc.startViewTransition || reduced) {
    apply();
    return;
  }
  const root = document.documentElement;
  root.classList.add("cs-view-changing");
  const transition = doc.startViewTransition(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    apply();
  });
  const done = () => root.classList.remove("cs-view-changing");
  transition.finished.then(done, done);
}

export function useCaseStudyView(): CaseStudyView {
  return useSyncExternalStore(subscribe, getSnapshot, () => "full" as CaseStudyView);
}

/**
 * Applies the view the current page may show. A page with no Summary shows the
 * full case study whatever was remembered, and the remembered choice is left as
 * it was, so it applies again on a page that does have a summary.
 */
export function syncCaseStudyView(allowSummary: boolean) {
  load();
  document.documentElement.dataset.csView = allowSummary ? view : "full";
}
