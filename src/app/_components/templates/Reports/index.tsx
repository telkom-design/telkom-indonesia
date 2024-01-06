import Link from "next/link";
import {
  IconArrowUpRight,
  IconCalendarEvent,
  IconChartBar,
  IconChartHistogram,
  IconSocial,
} from "@tabler/icons-react";
import styles from "./Reports.module.scss";

// atoms
import { Anchor, Box, Flex, Image, Text } from "../../atoms";

export const Reports = () => {
  return (
    <Box id="reports" className={styles.reportsBox} margin="56px 0">
      <Flex direction="column" radius="24px" background="tertiary50">
        <Flex direction="column" padding="2rem" style={{ flexGrow: 1 }}>
          <Text as="h2" color="tertiary800" weight="800">
            Reports
          </Text>
          <Text as="p" color="tertiary500" size="18px" mt="1rem" mb="1rem">
            All of our link information and report ranging throughout the years.
          </Text>
          <Anchor iconRight={<IconArrowUpRight size={24} />}>See More</Anchor>
        </Flex>

        <Box width="100%" height="auto">
          <Image src="/reports.svg" width="100%" height="auto" />
        </Box>
      </Flex>

      <Box className={styles.reportsBoxCards}>
        <Link href="#" className={styles.reportsBoxCardsLink}>
          <Box
            radius="24px"
            padding="1.5rem"
            background="tertiary50"
            className={styles.reportsBoxCardsCard}
            height="min-content"
          >
            <Flex alignY="center" className={styles.reportsBoxCardsCardCopy}>
              <Box
                mr="24px"
                padding="14px"
                background="primary50"
                radius="12px"
              >
                <IconChartBar color="#e42313" size={28} />
              </Box>

              <Text as="h4" className={styles.reportsBoxCardsCardTitle}>
                Sustainability Report
              </Text>
            </Flex>

            <Flex
              alignX="space-between"
              alignY="end"
              mt="40px"
              className={styles.reportsBoxCardsCardStats}
            >
              <Flex alignY="start">
                <Text
                  color="tertiary400"
                  weight="900"
                  size="60px"
                  height="72px"
                >
                  10B
                </Text>
                <Text
                  color="tertiary400"
                  weight="900"
                  size="30px"
                  height="40px"
                  as="span"
                >
                  +
                </Text>
              </Flex>

              <IconArrowUpRight
                className={styles.reportsBoxCardsStatsArrowUpRight}
                size={45}
              />
            </Flex>

            <Image
              src="/report-mask.svg"
              width="105px"
              height="94px"
              className={styles.reportsBoxCardsCardMask}
            />
          </Box>
        </Link>

        <Link href="#" className={styles.reportsBoxCardsLink}>
          <Box
            radius="24px"
            padding="1.5rem"
            background="tertiary50"
            className={styles.reportsBoxCardsCard}
            height="min-content"
          >
            <Flex alignY="center">
              <Box
                mr="24px"
                padding="14px"
                background="primary50"
                radius="12px"
              >
                <IconChartHistogram color="#e42313" size={28} />
              </Box>

              <Text as="h4" className={styles.reportsBoxCardsCardTitle}>
                Financial Report
              </Text>
            </Flex>

            <Flex
              alignX="space-between"
              alignY="end"
              mt="40px"
              className={styles.reportsBoxCardsCardStats}
            >
              <Flex alignY="start">
                <Text
                  color="tertiary400"
                  weight="900"
                  size="60px"
                  height="72px"
                >
                  Q4
                </Text>
              </Flex>

              <IconArrowUpRight
                className={styles.reportsBoxCardsStatsArrowUpRight}
                size={45}
              />
            </Flex>

            <Image
              src="/report-mask.svg"
              width="105px"
              height="94px"
              className={styles.reportsBoxCardsCardMask}
            />
          </Box>
        </Link>

        <Link href="#" className={styles.reportsBoxCardsLink}>
          <Box
            radius="24px"
            padding="1.5rem"
            background="tertiary50"
            className={styles.reportsBoxCardsCard}
            height="min-content"
          >
            <Flex alignY="center">
              <Box
                mr="24px"
                padding="14px"
                background="primary50"
                radius="12px"
              >
                <IconSocial color="#e42313" size={28} />
              </Box>

              <Text as="h4" className={styles.reportsBoxCardsCardTitle}>
                CSR Report
              </Text>
            </Flex>

            <Flex
              alignX="space-between"
              alignY="end"
              mt="40px"
              className={styles.reportsBoxCardsCardStats}
            >
              <Flex alignY="start">
                <Text
                  color="tertiary400"
                  weight="900"
                  size="60px"
                  height="72px"
                >
                  90
                </Text>
                <Text
                  color="tertiary400"
                  weight="900"
                  size="30px"
                  height="40px"
                  as="span"
                >
                  +
                </Text>
              </Flex>

              <IconArrowUpRight
                className={styles.reportsBoxCardsStatsArrowUpRight}
                size={45}
              />
            </Flex>

            <Image
              src="/report-mask.svg"
              width="105px"
              height="94px"
              className={styles.reportsBoxCardsCardMask}
            />
          </Box>
        </Link>

        <Link href="#" className={styles.reportsBoxCardsLink}>
          <Box
            radius="24px"
            padding="1.5rem"
            background="tertiary50"
            className={styles.reportsBoxCardsCard}
            height="min-content"
          >
            <Flex alignY="center">
              <Box
                mr="24px"
                padding="14px"
                background="primary50"
                radius="12px"
              >
                <IconCalendarEvent color="#e42313" size={28} />
              </Box>

              <Text as="h4" className={styles.reportsBoxCardsCardTitle}>
                Annual Report
              </Text>
            </Flex>

            <Flex
              alignX="space-between"
              alignY="end"
              mt="40px"
              className={styles.reportsBoxCardsCardStats}
            >
              <Flex alignY="start">
                <Text
                  color="tertiary400"
                  weight="900"
                  size="60px"
                  height="72px"
                >
                  2023
                </Text>
              </Flex>

              <IconArrowUpRight
                className={styles.reportsBoxCardsStatsArrowUpRight}
                size={45}
              />
            </Flex>

            <Image
              src="/report-mask.svg"
              width="105px"
              height="94px"
              className={styles.reportsBoxCardsCardMask}
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
