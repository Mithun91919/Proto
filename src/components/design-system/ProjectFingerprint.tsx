import type { ReactNode } from "react";

type ProjectFingerprintProps = {
  before: ReactNode;
  after: ReactNode;
  shapeName: string;
  projectLabel: string;
};

/**
 * C6 · Project fingerprint — one tiny transformation diagram derived from a
 * project's core argument. Hover shows the resolved state; never used as a
 * decorative logo. Appears on project cards, chapter openers, or
 * next-project navigation.
 */
export function ProjectFingerprint({ before, after, shapeName, projectLabel }: ProjectFingerprintProps) {
  return (
    <div className="ds-fingerprint-card ds-hover-lift ds-glass rounded-2xl p-[1.125rem]">
      <div className="ds-fp-stage">
        <div className="ds-fp-state ds-fp-before">{before}</div>
        <div className="ds-fp-state ds-fp-after">{after}</div>
      </div>
      <p className="font-mono text-[0.58rem] uppercase" style={{ color: "var(--ds-accent)" }}>
        {shapeName}
      </p>
      <p className="display-title mt-1.5" style={{ fontSize: "0.95rem" }}>
        {projectLabel}
      </p>
    </div>
  );
}
