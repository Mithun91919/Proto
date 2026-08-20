"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

export type ProjectHeroProps = {
  /** H.264 MP4 source — optional. If omitted, displays as static image. */
  mp4?: string;
  /** Optional VP9/AV1 WebM source, offered first when supported. */
  webm?: string;
  /** Still frame or primary image. */
  poster: string;
  /** Accessible description of the clip. */
  caption?: string;
  /** Width / height, so the frame reserves space and never shifts layout. */
  aspect?: number;
  /**
   * `view` plays whenever the clip is on screen — right for a page hero.
   * `hover` holds the poster until pointer or focus, so a list of cards does
   * not download several clips at once. Touch devices fall back to `view`.
   */
  playOn?: "view" | "hover";
  /** Selector for an ancestor whose hover drives playback, e.g. a whole card. */
  hoverScope?: string;
  className?: string;
};

/**
 * Autoplaying, muted, looping product clip. Honours reduced-motion by holding
 * on the poster frame instead of animating.
 */
export function ProjectHero({
  mp4,
  webm,
  poster,
  caption,
  aspect = 16 / 10,
  playOn = "view",
  hoverScope,
  className,
}: ProjectHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }

    const play = () => void video.play().catch(() => {});
    const onHover = playOn === "hover" && window.matchMedia("(hover: hover)").matches;

    if (onHover) {
      const trigger: HTMLElement =
        (hoverScope ? video.closest<HTMLElement>(hoverScope) : null) ?? video;
      const stop = () => {
        video.pause();
        video.currentTime = 0;
      };

      trigger.addEventListener("pointerenter", play);
      trigger.addEventListener("pointerleave", stop);
      trigger.addEventListener("focusin", play);
      trigger.addEventListener("focusout", stop);
      return () => {
        trigger.removeEventListener("pointerenter", play);
        trigger.removeEventListener("pointerleave", stop);
        trigger.removeEventListener("focusin", play);
        trigger.removeEventListener("focusout", stop);
      };
    }

    // Play only in view; pause off-screen so long pages don't keep decoding.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) play();
          else video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [playOn, hoverScope]);

  const deferred = playOn === "hover";
  const hasVideo = mp4 || webm;

  return (
    <figure
      className={`project-hero${className ? ` ${className}` : ""}`}
      style={{ "--hero-aspect": String(aspect) } as CSSProperties}
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          className="project-hero-video"
          poster={poster}
          autoPlay={!deferred}
          muted
          loop
          playsInline
          preload={deferred ? "none" : "metadata"}
          aria-label={caption}
        >
          {webm ? <source src={webm} type="video/webm" /> : null}
          {mp4 ? <source src={mp4} type="video/mp4" /> : null}
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={caption || "Project visual"}
          className="project-hero-video"
        />
      )}
      {caption ? (
        <figcaption className="project-hero-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
