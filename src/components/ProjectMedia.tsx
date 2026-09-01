import { ProjectHero } from "@/components/ProjectHero";
import { MediaPlaceholder } from "@/components/design-system/MediaPlaceholder";
import type { Project } from "@/content/projects";

type ProjectMediaProps = {
  project: Project;
  className?: string;
  /**
   * Overrides the source's own ratio. A card grid needs one fixed row
   * height regardless of what each project's real asset happens to be —
   * without this, a 1.53 clip and a 16/10 default clip give the grid two
   * different row heights.
   */
  aspect?: number;
  /**
   * `ProjectHero`/`MediaPlaceholder` each draw their own border, radius,
   * and shadow — correct when media sits directly on the page, wrong once
   * a second container (a card) already clips its own corners: the two
   * radii fight and produce a visible double edge. `flush` drops the
   * inner frame so the outer container is the only thing drawing it.
   */
  flush?: boolean;
  /** Selector for the ancestor whose hover starts playback — the whole
      card/row, not just the media block. */
  hoverScope: string;
};

/**
 * A project's media, or a stated placeholder when it has none.
 *
 * Promoted out of the `/work/layout-options` exploration once the media-
 * forward card (home) and alternating row (work) options were picked —
 * both need exactly this behaviour, so it lives once rather than twice.
 */
export function ProjectMedia({ project, className = "", aspect, flush = false, hoverScope }: ProjectMediaProps) {
  const wrap = `${flush ? "ds-media-flush " : ""}${className}`.trim();
  if (project.media) {
    return (
      <div className={wrap}>
        <ProjectHero
          mp4={project.media.mp4}
          webm={project.media.webm}
          poster={project.media.poster}
          aspect={aspect ?? project.media.aspect}
          playOn="hover"
          hoverScope={hoverScope}
        />
      </div>
    );
  }
  return (
    <div className={wrap}>
      <MediaPlaceholder ratio={aspect ?? 16 / 10} needs={`A short loop or key screen from ${project.label}.`} />
    </div>
  );
}
