import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface RevealProps {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  delay?: number;
  y?: number;
  selector?: string;
}

export function Reveal({
  children,
  as: Tag = "div",
  className,
  stagger = 0.08,
  delay = 0,
  y = 32,
  selector,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = selector
        ? ref.current.querySelectorAll(selector)
        : ref.current.children;
      if (!targets || (targets as NodeListOf<Element>).length === 0) return;

      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref },
  );

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
