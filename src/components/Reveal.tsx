"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "scale";
  mode?: "once" | "always";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  mode = "once",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    // Catch elements already in view on first paint
    const rect = node.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.05;

    if (inView) {
      const frame = window.requestAnimationFrame(show);
      if (mode === "once") {
        return () => window.cancelAnimationFrame(frame);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          if (mode === "once") observer.disconnect();
          return;
        }
        if (mode === "always") hide();
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mode]);

  return (
    <div
      ref={ref}
      className={`${variant === "scale" ? "reveal-scale" : "reveal"} ${
        visible ? "is-visible" : ""
      } ${className}`.trim()}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
}
