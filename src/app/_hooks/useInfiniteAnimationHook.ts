import { useRef, useEffect } from "react";

export const useInfiniteAnimationHook = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollerRef.current?.setAttribute("data-animated", "true");
    }
  }, []);

  return { scrollerRef };
};
