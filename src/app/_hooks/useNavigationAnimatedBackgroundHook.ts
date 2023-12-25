import { useState, useEffect } from "react";

export const useNavigationAnimatedBackgroundHook = () => {
  const [toggleDropdownNavigation, setToggleDropdownNavigation] = useState("");
  const [toggleDropdownSearch, setToggleDropdownSearch] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [paddingTop, setPaddingTop] = useState(16); // Initial padding top value

  const debounce = <F extends (...args: any[]) => void>(
    func: F,
    delay: number
  ) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<F>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY || window.pageYOffset; // Get current scroll position
      const maxScroll = 24; // Define the maximum scroll value where padding becomes 0
      const minScroll = 0; // Define the minimum scroll value
      const maxPadding = 16; // Define the maximum padding value
      const minPadding = 0; // Define the minimum padding value

      // Calculate the padding value based on the scroll position
      const newPadding = Math.max(
        minPadding,
        maxPadding -
          ((currentScrollY - minScroll) / (maxScroll - minScroll)) * maxPadding
      );

      setPaddingTop(newPadding); // Update the padding top value
      setScrollY(currentScrollY); // Update the scrollY state
    }, 50); // Delay in milliseconds

    // Attach event listener for debounced scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const calculateWidthAndPosition = () => {
    const threshold = 24; // Scroll position threshold

    // Calculate the left and right values based on scroll position
    if (scrollY >= threshold) {
      const scrollPercentage = Math.min(
        (scrollY - threshold) / window.innerHeight,
        1
      );
      const expandedWidth = `${scrollPercentage * 100}%`; // Calculate width percentage
      const borderRadiusValue = `${20 - scrollPercentage * 20}px`; // Calculate border radius

      return {
        left: `-${expandedWidth}`, // Negative value to expand left
        right: `-${expandedWidth}`, // Negative value to expand right
        width: `calc(100% + ${expandedWidth} * 2)`, // Expand both sides equally
        borderRadius: borderRadiusValue, // Adjust border radius
        transition:
          "width 0.3s ease-in-out, left 0.3s ease-in-out, right 0.3s ease-in-out, borderRadius 0.3s ease-in-out", // Add transition effect
      };
    } else {
      return {
        left: 0,
        right: 0,
        width: "100%", // Default width
        borderRadius: "20px", // Default border radius
        transition:
          "width 0.3s ease-in-out, left 0.3s ease-in-out, right 0.3s ease-in-out, borderRadius 0.3s ease-in-out", // Add transition effect
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
