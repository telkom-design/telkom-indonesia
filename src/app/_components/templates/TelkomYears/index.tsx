"use client";

import Image from "next/image";
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { Button, Box, Text, Flex } from "../../atoms";
import "./style.scss";

export const TelkomYears = () => {
  return (
    <Flex
      id="telkom-in-years"
      alignX="space-between"
      direction="column"
      mt="48px"
      mb="48px"
    >
      <Box width="40%" mb="32px" className="tiy-text-fixed">
        <Text as="h2" mb="16px">
          Telkom In Years
        </Text>
        <Text as="p" mb="24px" color="tertiary500">
          Telkom already committed to build Indonesia’s telecommunication and
          information infrastructure since its establishment. Read the complete
          history on how Telkom fulfill its commitment for the people of
          Indonesia and the world.
        </Text>
        <Button iconRight={<IconArrowUpRight />}>See More About</Button>
      </Box>

      <Flex alignY="end">
        <Box className="tiy-years" width="127px" pb="30px">
          {["2018", "2019", "2020", "2021", "2022", "2023"].map((year) => (
            <Text
              key={year}
              mt="12px"
              color={year === "2023" ? "baseblack" : "tertiary400"}
              size="18px"
              height="155.556%"
              block
            >
              {year}
            </Text>
          ))}
        </Box>
        <Box
          className="tiy-data"
          width="calc(100% - 127px)"
          background="tertiary50"
          padding="24px"
          mb="78px"
          radius="24px"
          style={{ minHeight: "205px", position: "relative" }}
        >
          <Flex className="tiy-item">
            <Flex
              alignX="space-between"
              direction="column"
              width="50%"
              pr="32px"
              height="205px"
            >
              <Box>
                <Text as="h5" mb="16px">
                  May 2023
                </Text>
                <Text as="p">
                  Telkom completed the construction High-speed Data Center (HDC)
                  in Cikarang and Batam.
                </Text>
              </Box>
              <Flex alignY="center" className="button-next-prev">
                <Button
                  variant="outline"
                  color="tertiary"
                  iconLeft={<IconChevronLeft />}
                />
                <Button
                  variant="outline"
                  color="tertiary"
                  iconLeft={<IconChevronRight />}
                />
              </Flex>
            </Flex>
            <Box width="50%" pr="32px">
              <Box
                className="tiy-preview"
                radius="20px"
                style={{
                  backgroundImage: "url(/home/telkom-in-year-2023-1.jpg)",
                }}
              >
                <Box className="tiy-preview__text">
                  <Text color="#fff" height="1.5" block>
                    NeutraDC
                  </Text>
                  <Text color="#fff" height="1.5" weight="700">
                    Batam, 2022
                  </Text>
                </Box>
                <Flex
                  alignX="space-between"
                  width="50%"
                  alignY="center"
                  className="tiy-preview__options"
                  padding="17px"
                  background="#ffffff"
                >
                  <Image
                    className="active"
                    width={88}
                    height={88}
                    src="/home/telkom-in-year-2023-1-small.jpg"
                    alt="/home/telkom-in-year-2023-1-small"
                  />
                  <Image
                    width={88}
                    height={88}
                    src="/home/telkom-in-year-2023-1-small.jpg"
                    alt="/home/telkom-in-year-2023-1-small"
                  />
                  <Image
                    width={88}
                    height={88}
                    src={"/home/telkom-in-year-2023-1-small.jpg"}
                    alt="/home/telkom-in-year-2023-1-small"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <ul className="tiy-item--timeline">
            <li>
              <span>Feb 2023</span>
            </li>
            <li>
              <span>Apr 2023</span>
            </li>
            <li>
              <span>May 2023</span>
            </li>
            <li className="active">
              <span>Aug 2023</span>
            </li>
            <li>
              <span>Sep 2023</span>
            </li>
          </ul>
        </Box>
      </Flex>
    </Flex>
  );
};
