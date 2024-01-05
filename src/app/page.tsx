"use client";

// templates
import {
  Hero,
  News,
  Reports,
  Subsidiaries,
  TelkomForIndonesia,
  TelkomInYears,
} from "./_components/templates";

import React from "react";
import { ScrollContext } from "./_libs/providers";
import { Footer, StickyView } from "./_components/organisms";

export default function Home() {
  const [scrollingElement, setScrollingElement] =
    React.useState<HTMLDivElement>();

  function scrollingElRef(ref: HTMLDivElement) {
    setScrollingElement(ref);
  }
  React.useEffect(() => {
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.height = "100dvh";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.removeProperty("display");
      document.body.style.removeProperty("flex-direction");
      document.body.style.removeProperty("height");
      document.body.style.removeProperty("overflow-y");
    };
  }, []);
  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <main
        style={{ flexGrow: 1, overflowY: "auto", overflowX: "hidden" }}
        ref={scrollingElRef}
      >
        <Hero />
        <StickyView height={4000}>
          {(proportion) => <TelkomForIndonesia proportion={proportion} />}
        </StickyView>
        <StickyView height={4000}>
          {(proportion) => <TelkomInYears proportion={proportion} />}
        </StickyView>
        <StickyView height={4000} gridColumn="full-width">
          {(proportion) => <Subsidiaries proportion={proportion} />}
        </StickyView>
        <Reports />
        <News />
        <Footer />
      </main>
    </ScrollContext.Provider>
  );
}
