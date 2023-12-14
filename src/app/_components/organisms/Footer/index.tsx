import base from "../../../_styles/Base.module.scss";
import styles from "./Footer.module.scss";

// atoms
import { Box, Image, Text } from "../../atoms";

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

        <div style={{ marginTop: "4rem" }}>
          <Text>
            Kawasan The Telkom Hub, Gedung Telkom Landmark Tower II, lantai.39,
            Jl. Jenderal Gatot Subroto Kav. 52, Kuningan Barat, Mampang
            Prapatan, Jakarta Selatan, Jakarta, Indonesia 12710
          </Text>
        </div>
      </Box>
    </footer>
  );
};
