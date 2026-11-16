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
  view = next;
  document.documentElement.dataset.csView = next;
  try {
    window.localStorage.setItem(KEY, next);
  } catch {
    // Not remembered; still applies to this page view.
  }
  listeners.forEach((l) => l());
}

export function useCaseStudyView(): CaseStudyView {
  return useSyncExternalStore(subscribe, getSnapshot, () => "full" as CaseStudyView);
}
