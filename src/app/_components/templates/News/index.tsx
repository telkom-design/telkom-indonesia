import styles from "./News.module.scss";
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

// atoms
import { Box, Flex, Text, Anchor, Image, Divider, Button } from "../../atoms";

export const News = () => {
  return (
    <Box className={`${styles.newsBox}`} padding="56px 0">
      <Flex
        direction="column"
        radius="24px"
        background="tertiary50"
        className={styles.newsBoxCopy}
      >
        <Flex direction="column" padding="2rem" style={{ flexGrow: 1 }}>
          <Text as="h2" color="tertiary800" weight="800">
            Reports
          </Text>
          <Text as="p" color="tertiary500" size="18px" mt="1rem">
            All of our link information and report ranging throughout the years.
          </Text>

          <Divider padding="82px" />

          <Flex alignX="space-between" className={styles.newsBoxCopyAnchors}>
            <Anchor iconRight={<IconArrowUpRight size={24} />}>See More</Anchor>

            <Flex>
              <Button
                color="tertiary"
                variant="outline"
                iconLeft={<IconChevronLeft size={24} />}
                className={styles.newsBoxCopyAnchorsButtonPrevious}
              />

              <Button
                color="tertiary"
                variant="outline"
                iconLeft={<IconChevronRight size={24} />}
                className={styles.newsBoxCopyAnchorsButtonNext}
              />
            </Flex>
          </Flex>
        </Flex>

        <Image
          src="/news-mask.svg"
          width="190px"
          height="124px"
          className={styles.newsBoxMask}
        />
      </Flex>

      <Flex className={styles.newsBoxNews}>
        <Box width="268px" height="auto" className={styles.newsBoxNewsCard}>
          <Box className={styles.newsBoxNewsCardImage} mb="24px">
            <Image src="/news-image.svg" width="267px" height="184px" />
          </Box>

          <Box style={{ whiteSpace: "break-spaces" }}>
            <Text
              as="h4"
              size="22px"
              height="32px"
              mb="1rem"
              className={styles.newsBoxNewsCardTitle}
            >
              TelkomGroup Kembali Gelar Event Internasional BATIC 2023
            </Text>

            <Text
              as="p"
              mb="1rem"
              color="tertiary500"
              className={styles.newsBoxNewsCardDescription}
            >
              Through our most advanced technology, brings the best of the world
              for you and your company. Through our most advanced technology,
              brings the best of the world for you and your company.
            </Text>
          </Box>
        </Box>

        <Box width="268px" height="auto" className={styles.newsBoxNewsCard}>
          <Box className={styles.newsBoxNewsCardImage} mb="24px">
            <Image src="/news-image.svg" width="267px" height="184px" />
          </Box>

          <Box style={{ whiteSpace: "break-spaces" }}>
            <Text
              as="h4"
              size="22px"
              height="32px"
              mb="1rem"
              className={styles.newsBoxNewsCardTitle}
            >
              Gandeng Telkom Akses, Digiserve Perkuat Layanan Instalasi SD-WAN
              untuk Pelanggan
            </Text>

            <Text
              as="p"
              mb="1rem"
              color="tertiary500"
              className={styles.newsBoxNewsCardDescription}
            >
              Digiserve mengumumkan telah menjalin kerja sama dengan Telkom
              Akses untuk perkuat layanan instalasi SD-WAN yang disebut sebagai
              product connectivity masa depan.
            </Text>
          </Box>
        </Box>

        <Box width="268px" height="auto" className={styles.newsBoxNewsCard}>
          <Box className={styles.newsBoxNewsCardImage} mb="24px">
            <Image src="/news-image.svg" width="267px" height="184px" />
          </Box>

          <Box style={{ whiteSpace: "break-spaces" }}>
            <Text
              as="h4"
              size="22px"
              height="32px"
              mb="1rem"
              className={styles.newsBoxNewsCardTitle}
            >
              Telkom Indonesia Hadirkan Solusi Digital Indibiz untuk Pelaku
              Usaha di Berbagai Bidang
            </Text>

            <Text
              as="p"
              mb="1rem"
              color="tertiary500"
              className={styles.newsBoxNewsCardDescription}
            >
              Telkom Indonesia telah mengumumkan kehadiran solusi digital
              Indibiz untuk mendukung kebutuhan digital pelaku usah di berbagai
              bidang.
            </Text>
          </Box>
        </Box>

        <Box width="268px" height="auto" className={styles.newsBoxNewsCard}>
          <Box className={styles.newsBoxNewsCardImage} mb="24px">
            <Image src="/news-image.svg" width="267px" height="184px" />
          </Box>

          <Box style={{ whiteSpace: "break-spaces" }}>
            <Text
              as="h4"
              size="22px"
              height="32px"
              mb="1rem"
              className={styles.newsBoxNewsCardTitle}
            >
              TelkomGroup Kembali Gelar Event Internasional BATIC 2023
            </Text>

            <Text
              as="p"
              mb="1rem"
              color="tertiary500"
              className={styles.newsBoxNewsCardDescription}
            >
              Through our most advanced technology, brings the best of the world
              for you and your company. Through our most advanced technology,
              brings the best of the world for you and your company.
            </Text>
          </Box>
        </Box>

        <Box width="268px" height="auto" className={styles.newsBoxNewsCard}>
          <Box className={styles.newsBoxNewsCardImage} mb="24px">
            <Image src="/news-image.svg" width="267px" height="184px" />
          </Box>

          <Box style={{ whiteSpace: "break-spaces" }}>
            <Text
              as="h4"
              size="22px"
              height="32px"
              mb="1rem"
              className={styles.newsBoxNewsCardTitle}
            >
              TelkomGroup Kembali Gelar Event Internasional BATIC 2023
            </Text>

            <Text
              as="p"
              mb="1rem"
              color="tertiary500"
              className={styles.newsBoxNewsCardDescription}
            >
              Through our most advanced technology, brings the best of the world
              for you and your company. Through our most advanced technology,
              brings the best of the world for you and your company.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
