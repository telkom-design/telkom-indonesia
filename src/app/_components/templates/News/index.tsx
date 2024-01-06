import styles from "./News.module.scss";
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

// atoms
import { Anchor, Box, Button, Divider, Flex, Image, Text } from "../../atoms";

// organisms
import { NextPrev } from "../../organisms";

export const News = ({ news }: { news: any }) => {
  return (
    <Box id="news-and-events" className={`${styles.newsBox}`} margin="56px 0">
      <Flex
        direction="column"
        radius="24px"
        background="tertiary50"
        className={styles.newsBoxCopy}
      >
        <Flex direction="column" padding="2rem" style={{ flexGrow: 1 }}>
          <Text as="h2" color="tertiary800" weight="800">
            News
          </Text>
          <Text as="p" color="tertiary500" size="18px" mt="1rem">
            See the full detail of news and activities of Telkom Group.
          </Text>

          <Divider padding="82px" />

          <Flex alignX="space-between" className={styles.newsBoxCopyAnchors}>
            <Anchor iconRight={<IconArrowUpRight size={24} />}>See More</Anchor>

            <NextPrev />
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
        {news?.map((news: any) => (
          <Box key={`news_${news.id_news}`} width="268px" height="auto" className={styles.newsBoxNewsCard}>
            <Box className={styles.newsBoxNewsCardImage} mb="24px">
              <Image style={{borderRadius: "20px"}} src={`https://telkom.co.id${news.news_thumbnail}`} width="267px" height="184px" alt={news.news_title} />
              <Image
                src="/news-card-mask.svg"
                width="183px"
                height="64px"
                className={styles.newsBoxNewsCardImageMask}
                alt="mask"
              />
              <Text
                className={styles.newsBoxNewsCardImageDate}
                as="p"
                weight="400"
                color="tertiary500"
              >
                {new Date(news.created_at).toLocaleDateString()}
              </Text>
            </Box>

            <Box style={{ whiteSpace: "break-spaces" }}>
              <Text
                as="h4"
                size="22px"
                height="32px"
                mb="1rem"
                className={styles.newsBoxNewsCardTitle}
              >
                {news.news_title}
              </Text>

              <Text
                as="p"
                mb="1rem"
                color="tertiary500"
                className={styles.newsBoxNewsCardDescription}
              >
                {news.news_summary}
              </Text>
            </Box>
          </Box>
        ))}

        {/* <Box width="268px" height="auto" className={styles.newsBoxNewsCard}>
          <Box className={styles.newsBoxNewsCardImage} mb="24px">
            <Image src="/news-image.svg" width="267px" height="184px" />
            <Image
              src="/news-card-mask.svg"
              width="183px"
              height="64px"
              className={styles.newsBoxNewsCardImageMask}
            />
            <Text
              className={styles.newsBoxNewsCardImageDate}
              as="p"
              weight="400"
              color="tertiary500"
            >
              25 December 2023
            </Text>
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
            <Image
              src="/news-card-mask.svg"
              width="183px"
              height="64px"
              className={styles.newsBoxNewsCardImageMask}
            />
            <Text
              className={styles.newsBoxNewsCardImageDate}
              as="p"
              weight="400"
              color="tertiary500"
            >
              25 December 2023
            </Text>
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
            <Image
              src="/news-card-mask.svg"
              width="183px"
              height="64px"
              className={styles.newsBoxNewsCardImageMask}
            />
            <Text
              className={styles.newsBoxNewsCardImageDate}
              as="p"
              weight="400"
              color="tertiary500"
            >
              25 December 2023
            </Text>
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
            <Image
              src="/news-card-mask.svg"
              width="183px"
              height="64px"
              className={styles.newsBoxNewsCardImageMask}
            />
            <Text
              className={styles.newsBoxNewsCardImageDate}
              as="p"
              weight="400"
              color="tertiary500"
            >
              25 December 2023
            </Text>
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
        </Box> */}
      </Flex>
    </Box>
  );
};
