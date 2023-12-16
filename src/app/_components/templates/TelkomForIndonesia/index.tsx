// atoms
import { Box, Flex, Image, Text } from "../../atoms";

export const TelkomForIndonesia = () => {
  return (
    <Flex
      direction="row"
      style={{ rowGap: "56px", overflow: "hidden" }}
      radius="32px"
      background="tertiary50"
      margin="56px 0"
    >
      <Box width="50%">
        <Image fit="cover" src="/tfi-one.svg" width="100%" height="auto" />
      </Box>

      <Box width="50%" padding="48px 56px">
        <Text as="h2" mb="16px">
          Telkom for Indonesia
        </Text>
        <Text as="p" mb="32px" color="tertiary500">
          Advancing technology further beyond. We build advanced digital world
          where everyone can be reachable and grow.
        </Text>

        <Box style={{ borderLeft: "1px solid #d0d5dd" }}>
          <Box padding="16px 24px" style={{ borderLeft: "3px solid #e42313" }}>
            <Text as="h4" color="primary400">
              200.000+ Tower Across Indonesia
            </Text>
            <Text as="p">
              Telkom provide your business the most extensive way to reach more
              than 120 million users.
            </Text>
          </Box>

          <Box padding="16px 24px">
            <Text as="h4" color="tertiary400">
              170.000+ km Optic Fibre in Indonesia and Abroad
            </Text>
            {/*
            <Text as="p">
              Telkom provide your business the most extensive way to reach more
              than 120 million users.
            </Text>
            */}
          </Box>

          <Box padding="16px 24px">
            <Text as="h4" color="tertiary400">
              100+ Data Center Around The World
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
    </Flex>
  );
};
