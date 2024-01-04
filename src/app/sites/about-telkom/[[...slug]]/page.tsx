"use client";

import "../style.scss";

// atoms
import { Box, Image, Text, Flex } from "@/app/_components/atoms";

// organisms
import { Newsletter } from "@/app/_components/organisms";

const ProfileAndBriefHistory = ({params}:   {params: {slug: string}}) => {
  return (
    <>
      <Box mt="56px" mb="56px" className="about-us--content">
        <Box className="about-us--content-wrapper">
          <Image
            src="/about-us/58-tahun-telkom.webp"
            width="100%"
            height="500px"
            fit="cover"
            radius="10px"
          />
        </Box>

        <Box className="about-us--content-wrapper">
          <Text mb="24px" as="h3">
            58 Journey to Contribute - Telkom Indonesia
          </Text>

          <Text as="p" color="tertiary500" size="16px" mb="16px">
            A 58-year journey to contribute to the nation is embodied through
            consistency in providing diverse digital solutions for the
            advancement of the country. Telkom Indonesia is committed to making
            innovations come true and continuously evolving. Thank you for your
            unwavering trust and support.
            <br />
            <br />
            #TelkomSinergiUntukIndonesia
            <br />
            #ElevatingYourFuture
          </Text>
        </Box>
      </Box>

      <Newsletter />
    </>
  );
};

export default ProfileAndBriefHistory;
