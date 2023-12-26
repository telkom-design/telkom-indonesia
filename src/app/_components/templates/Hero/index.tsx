"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import "./style.scss";

// atoms
import { Flex, Box, Button, Text } from "../../atoms";

// const
import { CAROUSEL_ANIMATED_SECTION } from "@/app/_constants";
const CAROUSEL_IMAGES = [
  "/home/hero-landscape-1.webp",
  "/home/hero-landscape-2.webp",
  "/home/hero-landscape-3.webp",
  "/home/hero-landscape-4.webp",
  "/home/hero-landscape-5.webp",
];

const BgLiniear =
  "linear-gradient(42deg, #F9FAFB 57.8%, rgba(249, 250, 251, 0.00) 64.53%);";
export const Hero = () => {
  const [currentActiveCarousel, setCurrentActiveCarousel] = useState(1);
  const [framerValues, setFramerValues] = useState({
    carouselInitial: 0,
    carouselExit: 0,
    carouselAnimatedTitleInitial: 0,
    carouselAnimatedTitleExit: 0,
    carouselNextSectionInitial: 0,
    carouselNextSectionExit: 0,
  });

  const handleCarouselSlider = (state: string) => {
    if (state === "previous") {
      setFramerValues((prev) => ({
        ...prev,
        carouselInitial: -1164,
        carouselExit: 1164,
        carouselAnimatedTitleInitial: -60,
        carouselAnimatedTitleExit: 60,
        carouselNextSectionInitial: -32,
        carouselNextSectionExit: 32,
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
        carouselInitial: 1164,
        carouselExit: -1164,
        carouselAnimatedTitleInitial: 60,
        carouselAnimatedTitleExit: -60,
        carouselNextSectionInitial: 32,
        carouselNextSectionExit: -32,
      }));

      if (currentActiveCarousel === 5) {
        setCurrentActiveCarousel(1);
        return;
      }

      setCurrentActiveCarousel((prev) => (prev += 1));
    }
  };

  return (
    <Flex alignX="space-between" margin="24px 0">
      <Box
        width="calc(75% - 12px)"
        height="649px"
        radius="24px"
        background={BgLiniear}
        style={{ position: "relative" }}
      >
        {/* fixed text */}
        <Box pt="224px" pl="56px" style={{ position: "absolute", zIndex: "1" }}>
          <Text size="30px" weight="300" color="basewhite">
            <Text color="primary500">#</Text>ElevatingYourFuture
          </Text>
          <Text
            as="h3"
            size="104px"
            weight="800"
            height="102.885%"
            color="basewhite"
          >
            Elevating Your
          </Text>
        </Box>
        {/* carousel */}
        <div className="hero-carousel hero-carousel--landscape">
          <ul className="hero-carousel__img">
            {CAROUSEL_IMAGES.map((carouselImage, i) => (
              <li className={i + 1 === currentActiveCarousel ? "active" : ""}>
                <AnimatePresence>
                  {i + 1 === currentActiveCarousel && (
                    <motion.div
                      initial={{ x: framerValues.carouselInitial }}
                      animate={{ x: 0 }}
                      exit={{ x: framerValues.carouselExit }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Image
                        src={carouselImage}
                        alt={carouselImage}
                        style={{ objectFit: "cover" }}
                        priority={true}
                        width={990}
                        height={409}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
          <ul
            className="hero-carousel__text"
            style={{
              transition: "all 0.4s ease-out",
            }}
          >
            {CAROUSEL_ANIMATED_SECTION.map((heroSecondSection) => (
              <li
                key={heroSecondSection.id}
                className={
                  currentActiveCarousel === heroSecondSection.id ? "active" : ""
                }
              >
                <AnimatePresence>
                  {currentActiveCarousel === heroSecondSection.id && (
                    <div style={{ overflow: "hidden" }}>
                      <motion.div
                        initial={{
                          y: framerValues.carouselAnimatedTitleInitial,
                        }}
                        animate={{ y: 0 }}
                        exit={{ y: framerValues.carouselAnimatedTitleExit }}
                        transition={{ duration: 0.2 }}
                      >
                        <Text
                          as="h4"
                          size="104px"
                          height="102.885%"
                          weight="800"
                          margin="0"
                        >
                          {heroSecondSection.title}
                        </Text>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
                <Flex alignY="center">
                  <AnimatePresence>
                    {currentActiveCarousel === heroSecondSection.id && (
                      <div
                        style={{
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          initial={{
                            y: framerValues.carouselAnimatedTitleInitial,
                          }}
                          animate={{ y: 0 }}
                          exit={{ y: framerValues.carouselAnimatedTitleExit }}
                          transition={{ duration: 0.2, delay: 0.2 }}
                          style={{ display: "flex" }}
                        >
                          <Text
                            as="p"
                            color="tertiary500"
                            size="18px"
                            mr="24px"
                            height="155.556%"
                            weight="400"
                            className="hero-carousel__text__description"
                          >
                            {heroSecondSection.description}
                          </Text>

                          <Button iconRight={<IconArrowUpRight />}>
                            Explore Now
                          </Button>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </Flex>
              </li>
            ))}
          </ul>
          <div className="hero-carousel__counter">
            <span className="hero-carousel__counter__amount">1 / 5</span>
            <span
              className="hero-carousel__counter__indicator"
              style={{ width: "calc(100% - 5)" }}
            ></span>
          </div>
          <Flex
            alignY="center"
            padding="24px 32px"
            radius="24px"
            className="button-next-prev hero-carousel__nav"
          >
            <Button
              variant="outline"
              color="tertiary"
              iconLeft={<IconChevronLeft />}
              onClick={() => handleCarouselSlider("previous")}
            />
            <Button
              variant="outline"
              color="tertiary"
              iconLeft={<IconChevronRight />}
              onClick={() => handleCarouselSlider("next")}
            />
          </Flex>
        </div>
      </Box>
      <Box width="calc(25% - 12px)" style={{ position: "relative" }}>
        {/* carousel i*/}
        <div className="hero-carousel">
          <ul className="hero-carousel__img">
            {[1, 2, 3].map((item) => (
              <li key={item} className={item === 1 ? "active" : ""}>
                <Image
                  src={`/home/hero-potrait.jpg`}
                  alt={`hero-potrait-${item}`}
                  style={{ objectFit: "cover" }}
                  priority={true}
                  width={314}
                  height={409}
                />
              </li>
            ))}
          </ul>
          <ul className="hero-carousel__text hero-carousel__text__next">
            {["Business", "Venture", "Activities", "Society", "Dreams"].map(
              (item, i) => (
                <li
                  key={item}
                  className={
                    i + 1 ===
                    (currentActiveCarousel + 1 === 6
                      ? 1
                      : currentActiveCarousel + 1)
                      ? "active"
                      : ""
                  }
                >
                  <AnimatePresence>
                    {i + 1 ===
                      (currentActiveCarousel + 1 === 6
                        ? 1
                        : currentActiveCarousel + 1) && (
                      <div style={{ overflow: "hidden" }}>
                        <motion.div
                          initial={{
                            y: framerValues.carouselNextSectionInitial,
                          }}
                          animate={{ y: 0 }}
                          exit={{ y: framerValues.carouselNextSectionExit }}
                          transition={{ duration: 0.2 }}
                        >
                          <Text
                            size="14"
                            color="tertiary300"
                            weight="400"
                            height="142.857%"
                          >
                            Elevating Your
                          </Text>
                          <Text
                            as="h4"
                            color="basewhite"
                            size="24px"
                            weight="800"
                            height="150%"
                          >
                            {item}
                          </Text>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </li>
              )
            )}
          </ul>
        </div>
        {/* navigation */}
        <Box as="nav" className="hero-nav">
          <Text as="p" height="150%" weight="700" mt="16px">
            Discover Our Company
          </Text>
          <a href="#telkom-for-indonesia">Telkom for Indonesia</a>
          <a href="#telkom-in-years">Telkom In Years</a>
          <a href="#subsidiaries">Subsidiaries</a>
          <a href="#reports">Reports</a>
          <a href="#new-and-events">News & Events</a>
        </Box>
      </Box>
    </Flex>
  );
};
