import { MediaTwoUp } from "../primitives/MediaTwoUp";
import type { BeforeAfterSection } from "@/content/case-study-v2/types";

type BeforeAfterProps = { section: BeforeAfterSection };

/** The old state establishes the problem; the new state is the evidence, so "after" gets more weight. */
export function BeforeAfter({ section }: BeforeAfterProps) {
  const { before, after, body } = section;

  return (
    <div>
      <MediaTwoUp
        mode="before-after"
        weighting="40/60"
        a={{ ...before, label: before.label ?? "Before" }}
        b={{ ...after, label: after.label ?? "After" }}
      />
      {body ? <p className="body-text mt-8">{body}</p> : null}
    </div>
  );
}
