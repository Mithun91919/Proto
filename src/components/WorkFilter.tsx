"use client";

import { useState } from "react";

const OPTIONS = [
  { value: "all", label: "All" },
  { value: "enterprise", label: "Enterprise & developer" },
  { value: "consumer", label: "Consumer & commerce" },
] as const;

type Value = (typeof OPTIONS)[number]["value"];

/**
 * One quiet line of filters for the work list. It does not re-render the
 * list: it sets `data-filter` on the section that holds it, and the
 * stylesheet hides whichever items carry the other `data-group`. The full
 * list stays the default, so the page reads the same with the filter unused.
 */
export function WorkFilter({ targetId }: { targetId: string }) {
  const [active, setActive] = useState<Value>("all");

  const choose = (value: Value) => {
    setActive(value);
    document.getElementById(targetId)?.setAttribute("data-filter", value);
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter the work by sector">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={active === option.value}
          onClick={() => choose(option.value)}
          className={`button button-sm ${active === option.value ? "button-primary" : "button-secondary"}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
