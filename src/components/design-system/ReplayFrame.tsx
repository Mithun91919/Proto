"use client";

import { useState, type ReactNode } from "react";

/**
 * A specimen frame for a motion that plays when its step arrives. The dot stories
 * are keyed to `.ds-slide.is-active`, so outside a deck or a story they would run
 * once, unseen, as the page loads. This holds the specimen in that state and
 * remounts it on request, so the motion can be watched as many times as it takes.
 *
 * `dark` puts it on the hero's own band (`ds-stage`), where the story runs.
 */
export function ReplayFrame({
  children,
  dark = false,
  label,
}: {
  children: ReactNode;
  dark?: boolean;
  label: string;
}) {
  const [run, setRun] = useState(0);
  return (
    <figure className={`ds-replay${dark ? " ds-stage ds-env-dark" : ""}`} aria-label={label}>
      <div key={run} className="ds-slide is-active ds-replay-stage">
        {children}
      </div>
      <button type="button" className="ds-replay-button" onClick={() => setRun((n) => n + 1)}>
        Replay
      </button>
    </figure>
  );
}
