"use client";

import "./style.scss";

// atoms
import { Box, Image, Text, Flex } from "@/app/_components/atoms";

// organisms
import { Newsletter } from "@/app/_components/organisms";

const ProfileAndBriefHistory = () => {
  return (
    <>
      <Box mt="56px" mb="56px" className="about-us--content">
        <Box className="about-us--content-wrapper">
          <Text mb="24px" as="h2">
            Telkom at a Glance
          </Text>

          <Text as="p" color="tertiary500" size="16px" mb="16px">
            PT Telkom Indonesia (Persero) Tbk (Telkom) is a state-owned
            information and communications technology enterprise and
            telecommunications network in Indonesia. The Government of Indonesia
            is the majority shareholder with 52.09 percent shares while the
            remaining 47.91 percent shares belong to public shareholders.
            Telkom’s shares are traded on the Indonesian Stock Exchange (IDX)
            where it is listed as “TLKM” and on the New York Stock Exchange
            (NYSE), which lists it as “TLK”.
          </Text>

          <Text as="p" color="tertiary500" size="16px" mb="16px">
            As it transforms to become a digital telecommunication company,
            TelkomGroup implements a customer-oriented business and company
            operational strategy. The transformation aims to trim down
            TelkomGroup’s organization to be leaner and more agile in adapting
            the fast-changing nature of telecommunications industry. The new
            organization is expected to be able to improve efficiency and be
            more effective in producing a quality customer experience.
          </Text>

          <Text as="p" color="tertiary500" size="16px">
            TelkomGroup’s activities grow and change in accordance to the
            development of new technology, information and digitalization, but
            still within the corridor of telecommunications and information
            technology. This is evident in the newly developed business lines,
            which complements the company’s existing legacy business.
          </Text>
        </Box>

        <Box className="about-us--content-wrapper">
          <Text mb="24px" as="h3">
            Culture & Values
          </Text>

          <Flex className="about-us--content-flex-row">
            <Box width="50%">
              <Text as="p" color="tertiary500" size="16px" mb="16px">
                Respond the industry shift to Digital, to support National
                Digitization and to internalize the transformation agenda Telkom
                has redefined its Purpose, Vision, and Missions.
              </Text>

              <ul className="about-us--content-list">
                <li>
                  <Text as="h5">Amanah</Text>
                  <Text as="p" size="16px" color="tertiary600">
                    To build a more prosperous and competitive nation as well
                  </Text>
                </li>
                <li>
                  <Text as="h5">Kompeten</Text>
                  <Text as="p" size="16px" color="tertiary600">
                    To build a more prosperous and competitive nation as well
                  </Text>
                </li>
                <li>
                  <Text as="h5">Harmonis</Text>
                  <Text as="p" size="16px" color="tertiary600">
                    To build a more prosperous and competitive nation as well
                  </Text>
                </li>
                <li>
                  <Text as="h5">Loyal</Text>
                  <Text as="p" size="16px" color="tertiary600">
                    To build a more prosperous and competitive nation as well
                  </Text>
                </li>
                <li>
                  <Text as="h5">Adaptif</Text>
                  <Text as="p" size="16px" color="tertiary600">
                    To build a more prosperous and competitive nation as well
                  </Text>
                </li>
                <li>
                  <Text as="h5">Kolaboratif</Text>
                  <Text as="p" size="16px" color="tertiary600">
                    To build a more prosperous and competitive nation as well
                  </Text>
                </li>
              </ul>
            </Box>

            <Box width="auto">
              <Image
                src="/about-us/akhlak.webp"
                width="100%"
                height="auto"
                alt=""
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Newsletter />
    </>
  );
};

export default ProfileAndBriefHistory;
