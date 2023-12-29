import { useState } from "react";

export const useHeroCarouselHook = () => {
  const [currentActiveCarousel, setCurrentActiveCarousel] = useState(1);
  const [framerValues, setFramerValues] = useState({
    carouselInitial: 0,
    carouselExit: 0,
    carouselAnimatedTitleInitial: 0,
    carouselAnimatedTitleExit: 0,
    carouselNextSectionInitial: 0,
    carouselNextSectionExit: 0,
    carouselCounterInitial: 0,
    carouselCounterExit: 0,
  });

  const handleCarouselSlider = (state: string) => {
    if (state === "previous") {
      setFramerValues((prev) => ({
        ...prev,
        carouselInitial: -1568,
        carouselExit: 1568,
        carouselAnimatedTitleInitial: -60,
        carouselAnimatedTitleExit: 60,
        carouselNextSectionInitial: -32,
        carouselNextSectionExit: 32,
        carouselCounterInitial: -6,
        carouselCounterExit: 6,
      }));

      if (currentActiveCarousel === 1) {
        setCurrentActiveCarousel(5);
        return;
      }

      setCurrentActiveCarousel((prev) => (prev -= 1));
    }

    if (state === "next") {
      setFramerValues((prev) => ({
        ...prev,
        carouselInitial: 1568,
        carouselExit: -1568,
        carouselAnimatedTitleInitial: 60,
        carouselAnimatedTitleExit: -60,
        carouselNextSectionInitial: 32,
        carouselNextSectionExit: -32,
        carouselCounterInitial: 6,
        carouselCounterExit: -6,
      }));

      if (currentActiveCarousel === 5) {
        setCurrentActiveCarousel(1);
        return;
      }

      setCurrentActiveCarousel((prev) => (prev += 1));
    }
  };

  return { currentActiveCarousel, framerValues, handleCarouselSlider };
};
