import { useState, useEffect } from "react";

export const useNavigationAnimatedBackgroundHook = () => {
  const [toggleDropdownNavigation, setToggleDropdownNavigation] = useState("");
  const [toggleDropdownSearch, setToggleDropdownSearch] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [paddingTop, setPaddingTop] = useState(16);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = 24;
      const minScroll = 0;
      const maxPadding = 16;
      const minPadding = 0;

      const newPadding = Math.max(
        minPadding,
        maxPadding -
          ((currentScrollY - minScroll) / (maxScroll - minScroll)) * maxPadding
      );

      setPaddingTop(newPadding);
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateWidthAndPosition = () => {
    const threshold = 24;

    if (scrollY >= threshold) {
      const scrollPercentage = Math.min(
        (scrollY - threshold) / window.innerHeight,
        1
      );
      const expandedWidth = `${scrollPercentage * 200}%`;
      const borderRadiusValue = `${20 - scrollPercentage * 20}px`;

      return {
        left: `-${expandedWidth}`,
        right: `-${expandedWidth}`,
        width: `calc(100% + ${expandedWidth} * 2)`,
        borderRadius: borderRadiusValue,
        transition:
          "width 0.3s ease-in-out, left 0.3s ease-in-out, right 0.3s ease-in-out, borderRadius 0.3s ease-in-out",
      };
    } else {
      return {
        left: 0,
        right: 0,
        width: "100%",
        borderRadius: "20px",
        transition:
          "width 0.3s ease-in-out, left 0.3s ease-in-out, right 0.3s ease-in-out, borderRadius 0.3s ease-in-out",
      };
    }
  };

  return {
    toggleDropdownNavigation,
    setToggleDropdownNavigation,
    toggleDropdownSearch,
    setToggleDropdownSearch,
    paddingTop,
    calculateWidthAndPosition,
  };
};
