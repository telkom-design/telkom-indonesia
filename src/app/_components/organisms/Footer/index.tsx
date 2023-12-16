import styles from "./Footer.module.scss";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

// atoms
import { Anchor, Box, Flex, Image, Text } from "../../atoms";

export const Footer = () => {
  return (
    <footer className={styles.footerGrid}>
      <Box className={styles.footerBox}>
        <Image
          src="/footer-logo.svg"
          width="350px"
          height="auto"
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        <Box
          margin="56px 0 56px 56px"
          className={styles.footerBoxSocialDetails}
        >
          <Box
            style={{
              position: "absolute",
              width: "50%",
              top: 0,
              right: 0,
              backgroundColor: "#d0d5dd",
              height: "1px",
            }}
          />

          <Box width="490px">
            <Text>
              Kawasan The Telkom Hub, Gedung Telkom Landmark Tower II,
              lantai.39, Jl. Jenderal Gatot Subroto Kav. 52, Kuningan Barat,
              Mampang Prapatan, Jakarta Selatan, Jakarta, Indonesia 12710
            </Text>

            <Flex margin="36px 0" className={styles.footerBoxSocialMediaBox}>
              <Anchor
                className={styles.footerBoxSocialMedia}
                iconLeft={<IconBrandFacebookFilled size={18} />}
              ></Anchor>
              <Anchor
                className={styles.footerBoxSocialMedia}
                iconLeft={<IconBrandInstagram size={18} />}
              ></Anchor>
              <Anchor
                className={styles.footerBoxSocialMedia}
                iconLeft={<IconBrandTwitterFilled size={18} />}
              ></Anchor>
              <Anchor
                className={styles.footerBoxSocialMedia}
                iconLeft={<IconBrandLinkedin size={18} />}
              ></Anchor>
              <Anchor
                className={styles.footerBoxSocialMedia}
                iconLeft={<IconBrandYoutubeFilled size={18} />}
              ></Anchor>
            </Flex>

            <Text as="p">
              © 2023 PT Telkom Indonesia. All Rights Reserved.
            </Text>
          </Box>
        </Box>

        <Flex
          mt="56px"
          padding="66px 0 66px 56px"
          direction="column"
          className={styles.footerBoxLinkBox}
        >
          <Box
            style={{
              position: "absolute",
              width: "1px",
              top: 0,
              left: 0,
              backgroundColor: "#d0d5dd",
              height: "100%",
            }}
          />
          <Box
            style={{
              position: "absolute",
              width: "100%",
              top: 0,
              right: 0,
              backgroundColor: "#d0d5dd",
              height: "1px",
            }}
          />

          <Anchor className={styles.footerBoxLink}>About Us</Anchor>
          <Anchor className={styles.footerBoxLink}>Solutions</Anchor>
          <Anchor className={styles.footerBoxLink}>Investor Relations</Anchor>
          <Anchor className={styles.footerBoxLink}>News & Resources</Anchor>
          <Anchor className={styles.footerBoxLink}>ESG</Anchor>
          <Anchor className={styles.footerBoxLink}>Careers</Anchor>
          <Anchor className={styles.footerBoxLink}>Contact Us</Anchor>
        </Flex>
      </Box>
    </footer>
  );
};
