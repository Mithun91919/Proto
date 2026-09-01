type MediaPlaceholderProps = {
  /** What the finished asset should show. Written for whoever supplies it. */
  needs: string;
  kind?: "image" | "video" | "diagram";
  /**
   * Ratio to reserve, as width / height. Defaults to a wide artboard, the
   * commonest shape in this library. Use ~0.56 for a phone clip.
   */
  ratio?: number;
  /** Where the asset should come from, if known. */
  source?: string;
};

const KIND_LABEL = {
  image: "Image pending",
  video: "Video pending",
  diagram: "Diagram pending",
} as const;

/**
 * A slot for media that does not exist yet.
 *
 * CLAUDE.md rules out inventing screenshots, and silently omitting a beat
 * the draft calls for loses the fact that something is missing. This does
 * neither: it reserves the space at the right ratio and states plainly what
 * belongs there, so an unfinished page reads as unfinished rather than as a
 * finished page with a hole in it.
 *
 * Deliberately not styled to look like media. No chrome, no device frame, no
 * grey rectangle standing in for a screen — an empty state that resembles
 * content is exactly what makes a placeholder ship by accident.
 */
export function MediaPlaceholder({ needs, kind = "image", ratio = 16 / 10, source }: MediaPlaceholderProps) {
  return (
    <div className="ds-placeholder" style={{ aspectRatio: `${ratio}` }} role="note">
      <div className="ds-placeholder-inner">
        <p className="ds-placeholder-tag">
          <span className="ds-placeholder-dot" aria-hidden />
          {KIND_LABEL[kind]}
        </p>
        <p className="ds-placeholder-needs">{needs}</p>
        {source ? <p className="ds-placeholder-source">{source}</p> : null}
      </div>
    </div>
  );
}
