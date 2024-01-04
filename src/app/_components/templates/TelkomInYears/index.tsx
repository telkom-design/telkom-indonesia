import styles from "./TelkomInYears.module.scss";
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

// atoms
import { Box, Button, Flex, Image, Text } from "../../atoms";

// organisms
import { NextPrev } from "../../organisms";
import React from "react";

export const TelkomInYears = ({proportion}: {proportion: number}) => {
  return (
    <Box margin="48px 0" className={styles.telkomInYearsBox}>
      <Box className={styles.telkomInYearsBoxTitle}>
        <Text as="h2">Telkom In Years</Text>
        <Text
          as="p"
          size="18px"
          color="tertiary500"
          mt="16px"
          mb="24px"
          weight="400"
        >
          Telkom already committed to build Indonesia’s telecommunication and
          information infrastructure since its establishment. Read the complete
          history on how Telkom fulfill its commitment for the people of
          Indonesia and the world.
        </Text>
        <Button iconRight={<IconArrowUpRight size={24} />}>
          See More About
        </Button>
      </Box>

      <Box
        padding="24px"
        background="tertiary50"
        className={styles.telkomInYearsBoxImageInfo}
      >
        <Text as="h5">May 2023</Text>
        <Text as="p" size="16px" mt="16px" mb="44px">
          Telkom completed the construction High-speed Data Center (HDC) in
          Cikarang and Batam.
        </Text>

        <NextPrev />
      </Box>

      <Box radius="20px" className={styles.telkomInYearsBoxImage}>
        <Image src="/tiy-illustration.svg" width="auto" height="510px" />
        <Box className={styles.telkomInYearsBoxImageMeta}>
          <Text as="p" color="#fff" weight="400" size="16px">NeutraDC</Text>
          <Text as="p" color="#fff" weight="400" size="16px">Batam, 2022</Text>
        </Box>
        <Flex className={styles.telkomInYearsBoxImageThumbs}>
          <Image
            className={styles.active}
            src="/tiy-illustration.svg"
            width="88px"
            height="88px"
          />
          <Image src="/tiy-illustration.svg" width="88px" height="88px" />
          <Image src="/tiy-illustration.svg" width="88px" height="88px" />
        </Flex>
      </Box>

      <Flex
        direction="column"
        mt="auto"
        className={styles.telkomInYearsBoxYears}
      >
        <Text color="tertiary400" size="18px">2018</Text>
        <Text color="tertiary400" size="18px">2019</Text>
        <Text color="tertiary400" size="18px">2020</Text>
        <Text color="tertiary400" size="18px">2021</Text>
        <Text color="tertiary400" size="18px">2022</Text>
        <Text size="18px" color="#1d1d1b">2023</Text>
      </Flex>

      <Flex className={styles.telkomInYearsBoxStats}>
        <Box background="#000" width="100%" height="2px"></Box>

        <Box className={styles.telkomInYearsBoxStatsStart}>
          <Box
            mr="auto"
            ml="auto"
            background="#000"
            radius="50%"
            width="8px"
            height="8px"
          />
        </Box>

        <Box className={styles.telkomInYearsBoxStatsEnd}>
          <Box
            mr="auto"
            ml="auto"
            background="#000"
            radius="50%"
            width="8px"
            height="8px"
          />
        </Box>

        <Box className={styles.telkomInYearsBoxStatsOne}>
          <Flex
            width="24px"
            height="24px"
            radius="50%"
            mr="auto"
            ml="auto"
            alignX="center"
            alignY="center"
          >
            <Box
              background="#000"
              radius="50%"
              width="16px"
              height="16px"
            />
          </Flex>
          <Text as="p" size="18px" weight="700">Jan 2023</Text>
        </Box>

        <Box className={styles.telkomInYearsBoxStatsTwo}>
          <Flex
            width="24px"
            height="24px"
            radius="50%"
            mr="auto"
            ml="auto"
            alignX="center"
            alignY="center"
          >
            <Box
              background="#000"
              radius="50%"
              width="16px"
              height="16px"
            />
          </Flex>
          <Text as="p" size="18px" weight="700">Feb 2023</Text>
        </Box>

        <Box className={styles.telkomInYearsBoxStatsThree}>
          <Flex
            width="24px"
            height="24px"
            radius="50%"
            mr="auto"
            ml="auto"
            alignX="center"
            alignY="center"
          >
            <Box
              background="#000"
              radius="50%"
              width="16px"
              height="16px"
            />
          </Flex>
          <Text as="p" size="18px" weight="700">Apr 2023</Text>
        </Box>

        <Box className={styles.telkomInYearsBoxStatsFour}>
          <Flex
            width="24px"
            height="24px"
            border="2px solid #e42313"
            radius="50%"
            mr="auto"
            ml="auto"
            alignX="center"
            alignY="center"
          >
            <Box
              background="primary500"
              radius="50%"
              width="16px"
              height="16px"
            />
          </Flex>
          <Text as="p" size="18px" weight="700">Jan 2023</Text>
        </Box>

        <Box className={styles.telkomInYearsBoxStatsFive}>
          <Flex
            width="24px"
            height="24px"
            radius="50%"
            mr="auto"
            ml="auto"
            alignX="center"
            alignY="center"
          >
            <Box
              background="#1D1D1B"
              radius="50%"
              width="16px"
              height="16px"
            />
          </Flex>
          <Text as="p" size="18px" weight="700">Feb 2023</Text>
        </Box>

        <Box className={styles.telkomInYearsBoxStatsSix}>
          <Flex
            width="24px"
            height="24px"
            radius="50%"
            mr="auto"
            ml="auto"
            alignX="center"
            alignY="center"
          >
            <Box
              background="#1D1D1B"
              radius="50%"
              width="16px"
              height="16px"
            />
          </Flex>
          <Text as="p" size="18px" weight="700">Apr 2023</Text>
        </Box>
      </Flex>
    </Box>
  );
};
