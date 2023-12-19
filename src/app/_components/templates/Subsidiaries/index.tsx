import styles from "./Subsidiaries.module.scss";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// atoms
import { Box, Flex, Image, Text } from "../../atoms";

export const Subsidiaries = () => {
  const [duplicatedScrollerInnerContent, setDuplicatedScrollerInnerContent] =
    useState<Node[]>([]);

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollerRef.current?.setAttribute("data-animated", "true");
    }
  }, []);

  return (
    <>
      <Box
        background="tertiary50"
        className={`${styles.subsidiariesBox} full-width`}
      >
        <Box className={styles.content}>
          <Box width="44%" padding="48px 56px 48px 0">
            <Text as="h2" mb="16px">
              Subsidiaries
            </Text>
            <Text as="p" mb="32px" color="tertiary500">
              With our capabilities and support from subsidiaries, we create
              better digital world and provide the best solution for you.
            </Text>

            <Box style={{ borderLeft: "1px solid #d0d5dd" }}>
              <Box
                padding="16px 24px"
                style={{ borderLeft: "3px solid #e42313" }}
              >
                <Text as="h4" color="primary400">
                  200.000+ Office Across Indonesia
                </Text>
                <Text as="p">
                  Our extensive representatives across Indonesia empower to
                  build the most far-reaching telecommunication network and
                  digital world.
                </Text>
              </Box>

              <Box padding="16px 24px">
                <Text as="h4" color="tertiary400">
                  100+ Partners & branch worldwide
                </Text>
                {/*
            <Text as="p">
              Telkom provide your business the most extensive way to reach more
              than 120 million users.
            </Text>
            */}
              </Box>
            </Box>
          </Box>
        </Box>

        <Image
          src="/subsidiaries-bg.svg"
          width="56%"
          height="100%"
          fit="cover"
          style={{ position: "absolute", right: 0, top: 0, bottom: 0 }}
        />
      </Box>

      <div
        ref={scrollerRef}
        // background="tertiary50"
        // padding="8px 0 96px 0"
        className={`full-width ${styles.subsidiariesCompanyBox}`}
      >
        <div className={styles.subsidiariesCompanyBoxScrollInner}>
          <Box
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            aria-hidden="true"
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          {/* Hidden */}
          <Box
            aria-hidden="true"
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            aria-hidden="true"
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            aria-hidden="true"
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            aria-hidden="true"
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            aria-hidden="true"
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>

          <Box
            aria-hidden="true"
            padding="48px 24px"
            background="#fff"
            radius="24px"
            width="314px"
            className={styles.subsidiariesCompanyBoxCard}
          >
            <Image
              src="/telkom-subsidiaries.svg"
              width="194px"
              height="auto"
              margin="0 0 72px 0"
            />

            <Text as="p" color="tertiary500">
              All these have made us as a nation to rise together—not only to
              deliver economic recovery, but beyond that.
            </Text>
          </Box>
        </div>
      </div>
    </>
  );
};
