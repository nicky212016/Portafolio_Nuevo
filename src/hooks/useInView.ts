import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  once?: boolean;
}

export const useInView = <T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
): [React.RefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (prefersReduced.current) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.once !== false) observer.unobserve(el);
        } else if (options.once === false) {
          setInView(false);
        }
      },
      { threshold: options.threshold ?? 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return [ref, inView];
};
