import type { ReactNode } from "react";

interface MediaFrameProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  caption?: string;
}

export function MediaFrame({ children, src, alt, caption }: MediaFrameProps) {
  // If it's just text content (children), render as placeholder
  if (!src && children) {
    return (
      <figure className="texture-card glass-panel mt-10 overflow-hidden">
        <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
          <span className="eyebrow">Visual placeholder</span>
          <span className="eyebrow">Reconstructed</span>
        </div>
        <div className="relative z-[1] px-5 py-8 text-[0.98rem] leading-7 text-[var(--ink-soft)] [&_p]:m-0 [&_strong]:text-[var(--ink)]">
          {children}
        </div>
      </figure>
    );
  }

  if (!src) return null;

  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  const isImage = /\.(jpg|jpeg|png|avif|webp)$/i.test(src);

  return (
    <figure className="mt-10 overflow-hidden rounded-lg border border-[var(--line)]">
      {isVideo && (
        <video
          src={src}
          controls
          className="w-full h-auto bg-black"
          poster={src.replace(/\.(mp4|webm|mov)$/i, ".jpg")}
        />
      )}
      {isImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt || "Project visual"}
          className="w-full h-auto"
        />
      )}
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-[var(--muted)] border-t border-[var(--line)] bg-[var(--paper)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
