"use client";

import { useId, useState, type ReactNode } from "react";
import { DockSwitch } from "@/components/design-system/DockSwitch";

export type EvidencePanel = { id: string; label: string; content: ReactNode };

/**
 * The evidence, one part at a time: what the interviews showed, what the survey
 * showed, and the two side by side. The panels are built by the page and passed
 * in, so this only keeps track of which one is showing.
 */
export function EvidenceTabs({ panels, label }: { panels: EvidencePanel[]; label: string }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const panelId = `${baseId}-panel`;

  return (
    <div>
      <div className="flex items-center justify-between gap-6">
        <p className="eyebrow">{label}</p>
        <DockSwitch
          tabs={panels}
          active={active}
          onChange={setActive}
          label={label}
          baseId={baseId}
          panelId={panelId}
        />
      </div>
      <div role="tabpanel" id={panelId} aria-labelledby={`${baseId}-tab-${active}`} className="mt-10">
        {panels[active].content}
      </div>
    </div>
  );
}
