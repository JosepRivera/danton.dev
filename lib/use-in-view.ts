"use client";
import { useCallback, useEffect, useState } from "react";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useInView(threshold = 0.1) {
  const [element, setElement] = useState<Element | null>(null);
  // Reduced-motion visitors get the final, revealed state immediately —
  // every section wrapper reads this flag to decide whether to animate in,
  // so resolving it true here is the one place that covers all of them.
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!element || prefersReducedMotion()) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView((prev) => prev || entry.isIntersecting);
      },
      { threshold },
    );
    obs.observe(element);
    return () => obs.disconnect();
  }, [element, threshold]);

  const ref = useCallback((node: Element | null) => {
    setElement(node);
  }, []);

  return { ref, inView };
}
