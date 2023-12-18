"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import base from "../../../_styles/Base.module.scss";
import styles from "./Header.module.scss";
import { IconChevronDown } from "@tabler/icons-react";

// icons
import { IconSearch } from "@tabler/icons-react";

// atoms
import { Box, Flex, Button, Image, Select, Anchor } from "../../atoms";

// components
import { DesktopDropdownNavigation } from "./NavigationDropdowns/Desktop";

// constans
import {
  ABOUT_US,
  SOLUTIONS,
  INVESTOR_RELATIONS,
  NEWS_AND_RESOURCES,
  ESG,
} from "@/app/_constants";

const Navbar = dynamic(
  () => import("@legion-ui/core").then((component) => component.Navbar),
  { ssr: false }
);

export const Navigation = () => {
  const [toggleDropdownNavigation, setToggleDropdownNavigation] = useState("");

  return (
    <Box className={styles.navigationGrid}>
      <Flex
        padding="16px"
        alignX="space-between"
        alignY="center"
        radius="1.25rem"
        mt="1rem"
        background="tertiary50"
      >
        <Anchor href="/">
          <Image src="/telkom-logo.svg" width="140px" height="32px" />
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

        <Box className={`${base.flex} ${base.gap_3}`}>
          <Button
            iconLeft={<IconSearch size={20} />}
            variant="soft"
            color="tertiary"
          />

          <Select
            onChange={function noRefCheck() {}}
            options={[
              {
                label: "Green",
                value: "green",
              },
              {
                label: "Blue",
                value: "blue",
              },
            ]}
            placeholder="Language"
            variant="inline"
          />
        </Box>
      </Flex>
    </Box>
  );
};
