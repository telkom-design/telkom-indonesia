import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ScrollContext } from "@/app/_libs/providers";
import styles from "./StickyView.module.scss";

interface StickyViewProps {
  height: number;

  gridColumn?: string;
  top?: number;
  backgroundColor?: string;
  children: (proportion: number) => ReactNode;
}

export const StickyView = (props: StickyViewProps) => {
  const { height, gridColumn, children, top = 20, backgroundColor } = props;
  const elRef = useRef<HTMLDivElement>(null);
  const { scrollingElement } = useContext(ScrollContext);
  const [proportion, setProportion] = useState<number>(0);

  function onScroll(container: Event) {
    const containerRect = (
      container.target as HTMLElement
    ).getBoundingClientRect();
    const selfRect = elRef.current!.getBoundingClientRect();
    const offTop = containerRect.y - selfRect.y;

    if (containerRect.height < selfRect.height) {
      const viewHeight = selfRect.height - containerRect.height;
      setProportion(offTop / viewHeight);
    } else {
      const viewHeight = containerRect.height;
      const result = offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
      setProportion(result);
    }
  }

  useEffect(() => {
    if (scrollingElement) {
      scrollingElement.addEventListener("scroll", (e) => onScroll(e));
      const syntheticEvent: Event = new Event("scroll", {
        bubbles: true,
        cancelable: true,
        composed: true,
      });

      Object.defineProperty(syntheticEvent, "target", {
        value: scrollingElement,
        enumerable: true,
        writable: false,
        configurable: true,
      });

      scrollingElement.dispatchEvent(syntheticEvent);
    }
    // console.log(scrollingElement?.clientHeight);
    return () => scrollingElement?.removeEventListener("scroll", onScroll);
  }, [scrollingElement]);

  return (
    <div
      className={styles.stickyView}
      ref={elRef}
      style={{ height, gridColumn, top, backgroundColor }}
    >
      <div
        className={styles.stickyViewSticky}
        style={{ height: scrollingElement?.clientHeight }}
      >
        {children(proportion)}
      </div>
    </div>
  );
};
