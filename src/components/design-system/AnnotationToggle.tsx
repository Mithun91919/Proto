"use client";

import { useSyncExternalStore } from "react";

/**
 * One switch for every hotspot layer on the site.
 *
 * A callout sits *on* a screenshot, so a reader who wants to judge the
 * interface itself — not what was said about it — has to be able to take the
 * markers off. The preference is shared rather than per image: turning them
 * off on one screen turns them off on every carousel slide and every other
 * annotated figure, and it is remembered across pages. Default is on, since a
 * callout nobody finds explains nothing.
 *
 * A tiny external store rather than context, so the two places that render a
 * toggle (`BrowserMockup`, `ArtboardFigure`) and the layer that obeys it
 * (`ImageHotspots`) need no shared provider and stay drop-in.
 */

const STORAGE_KEY = "ds-annotations";
const listeners = new Set<() => void>();
let visible = true;
let loaded = false;

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    visible = window.localStorage.getItem(STORAGE_KEY) !== "off";
  } catch {
    // Storage blocked: stay on, and just don't remember the choice.
  }
}

function subscribe(listener: () => void) {
  load();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  load();
  return visible;
}

function set(next: boolean) {
  visible = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
  } catch {
    // Not remembered; still applies to this page view.
  }
  listeners.forEach((l) => l());
}

/** Whether callouts should be drawn. `true` on the server and until read. */
export function useAnnotationsVisible() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}

/**
 * The switch itself. `variant="frame"` sits in a browser mockup's title bar;
 * `variant="corner"` floats over an artboard's top-right corner.
 */
export function AnnotationToggle({ variant = "frame" }: { variant?: "frame" | "corner" }) {
  const on = useAnnotationsVisible();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      className={`ds-annotation-toggle ds-annotation-toggle-${variant}`}
      onClick={() => set(!on)}
    >
      <span className="ds-annotation-toggle-label">Numbered notes</span>
      <span className="ds-annotation-toggle-track" aria-hidden>
        <span className="ds-annotation-toggle-thumb" />
      </span>
    </button>
  );
}
