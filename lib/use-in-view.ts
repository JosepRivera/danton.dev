"use client";
import { useCallback, useEffect, useState } from "react";

export function useInView(threshold = 0.1) {
  const [element, setElement] = useState<Element | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!element) return;
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
