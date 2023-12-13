import base from "../../../_styles/Base.module.css";
import styles from "./Footer.module.css";

// atoms
import { Box, Image, Text } from "../../atoms";

export const Footer = () => {
  return (
    <Box className={styles.footerBox}>
      <Box className={styles.footerLogoBox}>
        <Image src="/telkom-logo.svg" width="246px" height="54px" />
      </Box>

      <div style={{ marginTop: "4rem" }}>
        <Text>
          Kawasan The Telkom Hub, Gedung Telkom Landmark Tower II, lantai.39,
          Jl. Jenderal Gatot Subroto Kav. 52, Kuningan Barat, Mampang Prapatan,
          Jakarta Selatan, Jakarta, Indonesia 12710
        </Text>
      </div>
    </Box>
  );
};
