import { useState, useEffect } from "react";

export const useNavigationAnimatedBackgroundHook = ({grip}: {grip?: HTMLDivElement}) => {
  const [toggleDropdownNavigation, setToggleDropdownNavigation] = useState("");
  const [toggleDropdownSearch, setToggleDropdownSearch] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [paddingTop, setPaddingTop] = useState(16);
  let el = !!grip?.getAttribute("style")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = (el && grip) ? grip.scrollTop : window.scrollY;
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

    if(!el){
      window.addEventListener("scroll", handleScroll);
    }else{
      grip?.addEventListener("scroll", handleScroll);
    }

    return () => {
      if(!el){
        window.removeEventListener("scroll", handleScroll);
      }else{
        grip?.addEventListener("scroll", handleScroll);
      }
    };
  }, [grip, el]);

  const calculateWidthAndPosition = () => {
    const threshold = 24;

    if (scrollY >= threshold) {
      const scrollPercentage = Math.min(
        (scrollY - threshold) / window.innerHeight,
        1
      );
      const expandedWidth = `${scrollPercentage * 600}%`;
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
