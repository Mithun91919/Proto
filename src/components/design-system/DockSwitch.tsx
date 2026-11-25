"use client";

import type { CSSProperties, KeyboardEvent } from "react";
import { GlassPanel } from "./primitives/GlassPanel";

export type DockSwitchTab = { id: string; label: string };

/**
 * The header's switch, for use in a page: a glass pill with a highlight that
 * slides to the chosen part. The same classes the site header uses
 * (`nav-dock`, `nav-switch`), so it looks and moves like Home, Work and About.
 *
 * It is a set of tabs. The caller owns which one is active and renders the
 * panel, whose id it passes as `panelId`; left and right arrow keys move
 * between the tabs.
 */
export function DockSwitch({
  tabs,
  active,
  onChange,
  label,
  baseId,
  panelId,
}: {
  tabs: DockSwitchTab[];
  active: number;
  onChange: (index: number) => void;
  label: string;
  baseId: string;
  panelId: string;
}) {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (active + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    onChange(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <GlassPanel
      variant="lift"
      className="nav-dock shrink-0"
      style={
        {
          "--dock-ink": "var(--ink)",
          "--dock-soft": "var(--ink-soft)",
          border: "0.5px solid rgb(168 178 182 / 0.75)",
        } as CSSProperties
      }
    >
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="nav-switch"
        style={{ "--i": active, "--n": tabs.length } as CSSProperties}
      >
        <span className="nav-switch-thumb" aria-hidden data-on="true" />
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === active}
            aria-current={i === active ? "true" : undefined}
            aria-controls={panelId}
            tabIndex={i === active ? 0 : -1}
            onClick={() => onChange(i)}
            className="nav-switch-link"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </GlassPanel>
  );
}
