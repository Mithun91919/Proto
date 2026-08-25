type Recipe = { chapter: string; ingredients: string[] };

const RECIPES: Recipe[] = [
  { chapter: "Problem", ingredients: ["Eyebrow", "Declarative heading", "Narrative", "Dot diagram"] },
  { chapter: "Decision", ingredients: ["Heading", "Decision record", "Product media"] },
  { chapter: "Reframe", ingredients: ["Dark / tint environment", "Tension statement", "Consequence"] },
  { chapter: "Evidence", ingredients: ["Outcome chain", "Proof strip", "Interface anchor"] },
  { chapter: "Reflection", ingredients: ["Pull statement", "What held", "Unresolved", "Next project"] },
];

/** I · Composition recipes — components are ingredients; each chapter picks a sequence that matches its own argument. */
export function CompositionRecipe() {
  return (
    <div className="ds-glass-soft flex flex-col rounded-2xl px-7">
      {RECIPES.map((recipe, index) => (
        <div key={recipe.chapter} className={`grid grid-cols-1 items-center gap-3 py-7 sm:grid-cols-[150px_1fr] ${index > 0 ? "border-t" : ""}`} style={index > 0 ? { borderColor: "color-mix(in oklab, var(--ds-solid-border) 70%, transparent)" } : undefined}>
          <p className="display-title" style={{ fontSize: "1.1rem" }}>
            {recipe.chapter}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {recipe.ingredients.map((ingredient, i) => (
              <span key={ingredient} className="flex items-center gap-2">
                <span className="ds-chip">{ingredient}</span>
                {i < recipe.ingredients.length - 1 ? <span className="ds-arrow text-sm">→</span> : null}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
