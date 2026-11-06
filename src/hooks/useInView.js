import { useEffect, useRef, useState } from "react";

/**
 * Lightweight IntersectionObserver hook to detect if an element is in the viewport.
 * Used to pause Three.js WebGL render loops when off-screen to achieve 60fps performance.
 */
export function useInView(options = { threshold: 0.05, rootMargin: "100px" }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
}

export default useInView;
