/** D3 · Hierarchy — hero, chapter, eyebrow, and body at their real relative scale. */
export function TypeHierarchy() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <p className="ds-eyebrow mb-4">Hero</p>
        <p className="display-title" style={{ fontSize: "2.3rem", lineHeight: 1.1 }}>
          A clear system for <span className="ds-accent-text">complex work</span>.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <p className="ds-eyebrow mb-2.5">Chapter</p>
          <p className="display-title" style={{ fontSize: "1.55rem", lineHeight: 1.15 }}>
            Navigation was not the real problem.
          </p>
        </div>
        <div>
          <p className="ds-eyebrow mb-2.5">Eyebrow</p>
          <p className="ds-eyebrow" style={{ color: "var(--ds-accent)" }}>
            03 / The reframe
          </p>
        </div>
        <div>
          <p className="text-base leading-7" style={{ color: "var(--ink-soft)" }}>
            Body copy stays calm. The subject matter is complex enough; prose and typography do not need extra theatre.
          </p>
        </div>
      </div>
    </div>
  );
}
