import type { CSSProperties } from "react";

/**
 * C13 · Archetypes — four ways to draw a user segment in dots.
 *
 * NN/g's distinction: a persona invents a name, bio and photo; an archetype
 * keeps the same research-backed behavioural cluster and refers to it by a
 * plain label. The research base is identical — only the fictional character
 * is dropped. These draw the archetype form.
 *
 * Each variation is justified by a different clause of C1, and that is the
 * basis to choose between them — not which looks best:
 *
 * - `Coverage` — state. Which parts of a process each type actually works in.
 * - `Exchange` — connection. Two types who need each other.
 * - `Continuum` — position. Where each type sits on the axis a decision split.
 * - `Field` — grouping. That these are distinct populations, and nothing more.
 *
 * A label alone is a job title, not an archetype. What makes it one is the
 * observed behaviour attached to it, so `behaviour` is required on every
 * variation rather than optional.
 */

export type Archetype = {
  /** The plain label. No invented name, no photo — that is the whole point. */
  name: string;
  /** The observed behaviour that separates this type from the others. */
  behaviour: string;
  /**
   * What they are trying to get done. The persona template's "goal", minus
   * the biography around it.
   */
  wants?: string;
  /**
   * What got in the way. The field that earns its place: a design decision
   * on the page should be answerable to one of these, and a friction nobody
   * designed against is a sign the segment was drawn for tidiness.
   */
  friction?: string;
  /** Indices into `stages` this type works in. For `Coverage`. */
  stages?: number[];
  /** Position 0–1 on the axis a decision split. For `Continuum`. */
  depth?: number;
  /** Which side of the exchange. For `Exchange`. */
  side?: "asks" | "answers";
};

/* ── A · Coverage ──────────────────────────────────────────────────────── */

/**
 * Each type against a shared process, filled where it works and hollow where
 * it does not — with what got in the way alongside it.
 *
 * The shape of each row is half the argument: two types whose rows barely
 * overlap are two products waiting to happen, and a row spanning everything
 * is the person the platform was really built for. `Lanes` draws the same
 * coverage more vividly, so what keeps this one distinct is the second half
 * — it is the only variation wide enough to set coverage beside friction,
 * which is the pairing a design decision answers to. The friction column
 * appears only when the data carries it.
 */
export function ArchetypeCoverage({
  archetypes,
  stages,
}: {
  archetypes: Archetype[];
  stages: string[];
}) {
  const showFriction = archetypes.some((a) => a.friction);
  return (
    <div className="ds-arch-coverage" data-friction={showFriction ? "" : undefined}>
      <div className="ds-arch-cov-head" aria-hidden>
        <span>Archetype</span>
        <div className="ds-arch-cov-stages">
          {stages.map((s) => (
            <span key={s} className="ds-arch-cov-stage">
              {s}
            </span>
          ))}
        </div>
        {showFriction ? <span>Friction</span> : null}
      </div>
      {archetypes.map((a) => (
        <div className="ds-arch-cov-row" key={a.name}>
          <div className="ds-arch-cov-label">
            <p className="ds-arch-name">{a.name}</p>
            <p className="ds-arch-behaviour">{a.behaviour}</p>
          </div>
          <div className="ds-arch-cov-track">
            {stages.map((s, i) => {
              const on = a.stages?.includes(i);
              return (
                <span
                  key={s}
                  className={`ds-arch-cell${on ? " is-on" : ""}`}
                  style={{ "--dot-i": i } as CSSProperties}
                >
                  <span className="ds-arch-dot" />
                  <span className="sr-only">
                    {a.name} {on ? "works in" : "does not work in"} {s}
                  </span>
                </span>
              );
            })}
          </div>
          {showFriction ? <p className="ds-arch-cov-friction">{a.friction}</p> : null}
        </div>
      ))}
    </div>
  );
}

/* ── B · Exchange ──────────────────────────────────────────────────────── */

/**
 * Two types who need each other, drawn as the request between them.
 *
 * Only worth using where the product is genuinely two-sided — a request with
 * a reviewer, a hand-off, an approval. It says something the other three
 * cannot: that neither type's job is complete on its own.
 */
export function ArchetypeExchange({ archetypes }: { archetypes: Archetype[] }) {
  const asks = archetypes.find((a) => a.side === "asks");
  const answers = archetypes.find((a) => a.side === "answers");
  if (!asks || !answers) return null;

  return (
    <div className="ds-arch-exchange">
      <div className="ds-arch-ex-side">
        <span className="ds-arch-ex-cluster" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="ds-arch-dot" style={{ "--dot-i": i } as CSSProperties} />
          ))}
        </span>
        <p className="ds-arch-name">{asks.name}</p>
        <p className="ds-arch-behaviour">{asks.behaviour}</p>
      </div>
      <div className="ds-arch-ex-link" aria-hidden>
        <span className="ds-arch-ex-bridge" />
        <span className="ds-arch-ex-verb">asks</span>
      </div>
      <div className="ds-arch-ex-side">
        <span className="ds-arch-ex-cluster" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="ds-arch-dot" style={{ "--dot-i": i + 6 } as CSSProperties} />
          ))}
        </span>
        <p className="ds-arch-name">{answers.name}</p>
        <p className="ds-arch-behaviour">{answers.behaviour}</p>
      </div>
    </div>
  );
}

/* ── C · Continuum ─────────────────────────────────────────────────────── */

/**
 * The types placed along the single axis a design decision split on.
 *
 * Use this when one decision is the reason the segments were drawn at all —
 * two editors, two levels of disclosure, a beginner and an expert path. It
 * makes the decision legible as a response to a spread rather than a
 * preference, which is the thing a reader is actually assessing.
 */
export function ArchetypeContinuum({
  archetypes,
  from,
  to,
}: {
  archetypes: Archetype[];
  from: string;
  to: string;
}) {
  // Sorted, because a pin is only readable if it carries its own name: an
  // unsorted legend beside an ordered rail left the reader matching four
  // positions to four list items by guesswork. Names sit under the pins and
  // alternate rows so neighbours cannot collide.
  const placed = archetypes
    .filter((a) => typeof a.depth === "number")
    .sort((a, b) => (a.depth ?? 0) - (b.depth ?? 0));

  return (
    <div className="ds-arch-continuum">
      <div className="ds-arch-axis">
        <span className="ds-arch-axis-rail" aria-hidden />
        {placed.map((a, i) => (
          <span
            key={a.name}
            className={[
              "ds-arch-pin",
              i % 2 === 1 ? "is-low" : "",
              // Edge alignment comes from the value, not from DOM position:
              // the rail is the axis's real first child, so :first-child
              // never matched the pin and the leftmost label overhung by 15px.
              (a.depth ?? 0) < 0.12 ? "is-start" : "",
              (a.depth ?? 0) > 0.88 ? "is-end" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ left: `${(a.depth ?? 0) * 100}%`, "--dot-i": i } as CSSProperties}
          >
            <span className="ds-arch-dot" aria-hidden />
            <span className="ds-arch-pin-name">{a.name}</span>
          </span>
        ))}
      </div>
      <div className="ds-arch-axis-ends" aria-hidden>
        <span>{from}</span>
        <span>{to}</span>
      </div>
    </div>
  );
}

/* ── D · Field ─────────────────────────────────────────────────────────── */

/**
 * Four clusters, one per type, and nothing else claimed.
 *
 * The honest minimum. Cluster shape carries only that the populations are
 * distinct — it deliberately does not encode relative size, because a
 * segment's share is a number, and drawing one without having measured it
 * would be inventing a metric in dots.
 */
export function ArchetypeField({ archetypes }: { archetypes: Archetype[] }) {
  // Shapes differ so the clusters read as different populations; the counts
  // are a vocabulary, not a quantity. Same reason they are not labelled n=.
  const shapes = [
    [1, 1, 1, 0, 1, 1, 1, 0, 0],
    [1, 1, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 1, 1, 0],
  ];
  return (
    <div className="ds-arch-field">
      {archetypes.map((a, i) => (
        <div className="ds-arch-field-item" key={a.name}>
          <span className="ds-arch-cluster" aria-hidden>
            {(shapes[i % shapes.length] ?? []).map((on, j) => (
              <span
                key={j}
                className={`ds-arch-dot${on ? "" : " is-off"}`}
                style={{ "--dot-i": j } as CSSProperties}
              />
            ))}
          </span>
          <p className="ds-arch-name">{a.name}</p>
          <p className="ds-arch-behaviour">{a.behaviour}</p>
        </div>
      ))}
    </div>
  );
}

/* ── E · Lanes ─────────────────────────────────────────────────────────── */

/**
 * Each type's route through one shared process, with the gaps drawn.
 *
 * The pattern the other four cannot make: a solid segment is a stretch this
 * type works through, a hollow one is ground they have to cross without the
 * product helping. Four lanes over one set of stages is a transit map — same
 * network, different journeys — which is exactly the claim a single platform
 * has to earn.
 *
 * Under C1 it carries connection as well as state, and the connection is the
 * point: coverage says where someone works, lanes say what they cross to get
 * there. A lane with a long hollow span in the middle is a hand-off nobody
 * owns, which is usually the finding worth putting on the page.
 */
export function ArchetypeLanes({
  archetypes,
  stages,
}: {
  archetypes: Archetype[];
  stages: string[];
}) {
  return (
    <div className="ds-arch-lanes">
      <div className="ds-arch-lane-head" aria-hidden>
        <span />
        <div className="ds-arch-lane-track">
          {stages.map((s) => (
            <span key={s} className="ds-arch-lane-stage">
              {s}
            </span>
          ))}
        </div>
      </div>

      {archetypes.map((a) => {
        const stops = [...(a.stages ?? [])].sort((x, y) => x - y);
        const first = stops[0] ?? -1;
        const last = stops[stops.length - 1] ?? -1;
        return (
          <div className="ds-arch-lane" key={a.name}>
            <div className="ds-arch-lane-label">
              <p className="ds-arch-name">{a.name}</p>
              <p className="ds-arch-behaviour">{a.behaviour}</p>
            </div>
            <div className="ds-arch-lane-track">
              {stages.map((s, i) => {
                const on = stops.includes(i);
                // A segment only exists between this stop and the next one,
                // so the lane starts where the type joins and ends where it
                // leaves rather than running the full width for everyone.
                const within = i >= first && i < last;
                const bridged = within && !(on && stops.includes(i + 1));
                return (
                  <span key={s} className={`ds-arch-lane-cell${on ? " is-on" : ""}`}>
                    {within ? (
                      <span
                        className={`ds-arch-lane-seg${bridged ? " is-crossed" : ""}`}
                        aria-hidden
                      />
                    ) : null}
                    <span className="ds-arch-dot" />
                    <span className="sr-only">
                      {a.name} {on ? "works in" : "passes through"} {s}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}

      <p className="ds-arch-lane-key" aria-hidden>
        <span className="ds-arch-key-item">
          <span className="ds-arch-lane-seg" /> works through
        </span>
        <span className="ds-arch-key-item">
          <span className="ds-arch-lane-seg is-crossed" /> crosses unaided
        </span>
      </p>
    </div>
  );
}


/* ── F · Glyph ─────────────────────────────────────────────────────────── */

/**
 * The archetype's coverage, compressed to an icon.
 *
 * Every cell is one stage of the shared process, in order, wrapped into a
 * grid: filled where this type works, hollow where it does not. So the mark
 * is not a shape chosen to look distinct — it is the same data the lanes
 * draw, at the size of a bullet. Two types with different jobs cannot
 * accidentally get the same glyph, and one that spans everything reads as
 * solid at a glance.
 *
 * This is C6's fingerprint logic applied to people rather than projects: a
 * tiny diagram derived from the thing's actual argument, never a decorative
 * logo. It earns C1 on state, which the arbitrary clusters it replaces did
 * not — those encoded nothing, which is the definition of decoration.
 *
 * Because it is derived, it travels: the same mark can sit inline beside the
 * archetype's name later in a case study, so "the specialist path" carries
 * its own identifier without a legend being repeated.
 */
export function ArchetypeGlyph({
  archetype,
  stageCount,
  cols = 3,
  size = 7,
  gap = 4,
}: {
  archetype: Archetype;
  stageCount: number;
  cols?: number;
  size?: number;
  gap?: number;
}) {
  const stops = archetype.stages ?? [];
  return (
    <span
      className="ds-arch-glyph"
      style={{ gridTemplateColumns: `repeat(${cols}, ${size}px)`, gap: `${gap}px` }}
      role="img"
      aria-label={`${archetype.name}: works in ${stops.length} of ${stageCount} stages`}
    >
      {Array.from({ length: stageCount }).map((_, i) => (
        <span
          key={i}
          className={`ds-arch-dot${stops.includes(i) ? "" : " is-off"}`}
          style={{ width: size, height: size, "--dot-i": i } as CSSProperties}
        />
      ))}
    </span>
  );
}

/* ── G · Cards ─────────────────────────────────────────────────────────── */

/**
 * The card set: glyph, label, and the three fields an archetype actually
 * needs.
 *
 * The standard persona template carries name, photo, demographics, goals,
 * frustrations and behaviours. Strip the invented character and the
 * demographics that do not predict anything here, and what survives is
 * behaviour, goal and friction — which is what this renders. The usual
 * warning applies: the point is not to fill every field, it is to carry the
 * ones a design decision answers to.
 */
export function ArchetypeCards({
  archetypes,
  stages,
}: {
  archetypes: Archetype[];
  stages: string[];
}) {
  return (
    <div className="ds-arch-cards">
      {archetypes.map((a) => (
        <div className="ds-arch-card" key={a.name}>
          <ArchetypeGlyph archetype={a} stageCount={stages.length} />
          <p className="ds-arch-name">{a.name}</p>
          <p className="ds-arch-behaviour">{a.behaviour}</p>
          {a.wants || a.friction ? (
            <dl className="ds-arch-fields">
              {a.wants ? (
                <div>
                  <dt>Wants</dt>
                  <dd>{a.wants}</dd>
                </div>
              ) : null}
              {a.friction ? (
                <div>
                  <dt>Friction</dt>
                  <dd>{a.friction}</dd>
                </div>
              ) : null}
            </dl>
          ) : null}
        </div>
      ))}
    </div>
  );
}
