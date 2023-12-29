"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { IconChevronDown } from "@tabler/icons-react";

// icons
import { IconSearch } from "@tabler/icons-react";

// atoms
import { Anchor, Box, Button, Flex, Image, Text } from "../../atoms";

// components
import { DesktopDropdownNavigation } from "./NavigationDropdowns/Desktop";
import { NavigationButtonMenu } from "./NavigationButtonMenu";

// constans
import {
  ABOUT_US,
  ESG,
  INVESTOR_RELATIONS,
  NEWS_AND_RESOURCES,
  SOLUTIONS,
} from "@/app/_constants";

// hooks
import { useNavigationAnimatedBackgroundHook } from "@/app/_hooks";

export const Navigation = () => {
  const {
    toggleDropdownNavigation,
    setToggleDropdownNavigation,
    toggleDropdownSearch,
    setToggleDropdownSearch,
    paddingTop,
    calculateWidthAndPosition,
  } = useNavigationAnimatedBackgroundHook();

  return (
    <div className={styles.navigationGrid}>
      <div
        className={styles.navigationGridAnimatedBackground}
        style={{
          top: `${paddingTop}px`,
          ...calculateWidthAndPosition(),
        }}
      ></div>
      <Flex
        padding="16px"
        alignX="space-between"
        alignY="center"
        radius="1.25rem"
        background="tertiary50"
        style={{ marginTop: `${paddingTop}px` }}
      >
        <Anchor href="/">
          <Image
            src="/telkom-logo.svg"
            width="140px"
            height="32px"
            alt="telkom indonesia logo"
          />
        </Anchor>

        <nav className={styles.navigationLinksDesktop}>
          <Anchor
            onMouseEnter={() => setToggleDropdownNavigation("about-us")}
            onMouseLeave={() => setToggleDropdownNavigation("")}
            href=""
          >
            About Us <IconChevronDown size={20} />
            {toggleDropdownNavigation === "about-us" && (
              <DesktopDropdownNavigation items={ABOUT_US} />
            )}
          </Anchor>
          <Anchor
            onMouseEnter={() => setToggleDropdownNavigation("solutions")}
            onMouseLeave={() => setToggleDropdownNavigation("")}
            href=""
          >
            Solutions <IconChevronDown size={20} />
            {toggleDropdownNavigation === "solutions" && (
              <DesktopDropdownNavigation items={SOLUTIONS} />
            )}
          </Anchor>
          <Anchor
            onMouseEnter={() =>
              setToggleDropdownNavigation("investor_relations")
            }
            onMouseLeave={() => setToggleDropdownNavigation("")}
            href=""
          >
            Investor Relations <IconChevronDown size={20} />
            {toggleDropdownNavigation === "investor_relations" && (
              <DesktopDropdownNavigation items={INVESTOR_RELATIONS} />
            )}
          </Anchor>
          <Anchor
            onMouseEnter={() =>
              setToggleDropdownNavigation("news_and_resources")
            }
            onMouseLeave={() => setToggleDropdownNavigation("")}
            href=""
          >
            News & Resources <IconChevronDown size={20} />
            {toggleDropdownNavigation === "news_and_resources" && (
              <DesktopDropdownNavigation items={NEWS_AND_RESOURCES} />
            )}
          </Anchor>
          <Anchor
            onMouseEnter={() => setToggleDropdownNavigation("esg")}
            onMouseLeave={() => setToggleDropdownNavigation("")}
            href=""
          >
            ESG <IconChevronDown size={20} />
            {toggleDropdownNavigation === "esg" && (
              <DesktopDropdownNavigation items={ESG} />
            )}
          </Anchor>
          <Anchor href="">Careers</Anchor>
        </nav>

        <Flex className={styles.navigationLinksDesktop}>
          <Button
            iconLeft={<IconSearch size={20} />}
            variant="soft"
            color="tertiary"
            onClick={() => setToggleDropdownSearch((prevValue) => !prevValue)}
          />

          <Anchor
            style={{ position: "relative" }}
            onMouseEnter={() => setToggleDropdownNavigation("language")}
            onMouseLeave={() => setToggleDropdownNavigation("")}
          >
            Language <IconChevronDown size={20} />
            {toggleDropdownNavigation === "language" && (
              <Box
                width="auto"
                height="auto"
                className={styles.DesktopDropdownNavigation}
              >
                <Box
                  shadow="0px 4px 6px -2px rgba(16, 24, 40, .40)"
                  radius="24px"
                  padding="12px"
                  width="100%"
                  background="#fff"
                  mt="24px"
                >
                  <Anchor>
                    <Flex padding="12px">
                      <Box width="80%">
                        <Text size="16px" color="#101828" as="p" mb="4px">
                          English
                        </Text>
                      </Box>
                    </Flex>
                  </Anchor>
                  <Anchor>
                    <Flex padding="12px">
                      <Box width="80%">
                        <Text size="16px" color="#101828" as="p" mb="4px">
                          Bahasa
                        </Text>
                      </Box>
                    </Flex>
                  </Anchor>
                </Box>
              </Box>
            )}
          </Anchor>
        </Flex>
      </Flex>

      {toggleDropdownNavigation !== "" && (
        <Box
          background="#000"
          width="100%"
          className={styles.navigationGridOverlay}
          style={{ top: `calc(80px + ${paddingTop}px)` }}
        ></Box>
      )}

      {toggleDropdownSearch && (
        <>
          <Box
            background="#000"
            width="100%"
            className={styles.navigationGridSearchOverlay}
          ></Box>
          <NavigationButtonMenu toggleSearch={setToggleDropdownSearch} />
        </>
      )}
    </div>
  );
};
