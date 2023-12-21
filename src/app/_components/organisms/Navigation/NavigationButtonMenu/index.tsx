import { IconArrowUpRight, IconSearch, IconX } from "@tabler/icons-react";
import styles from "./NavigationButtonMenu.module.scss";

// atoms
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  TextField,
} from "@/app/_components/atoms";

export const NavigationButtonMenu = (
  { toggleSearch }: { toggleSearch: any },
) => {
  return (
    <Box
      background="#fff"
      radius="24px"
      shadow="Elevation-4"
      width="1033px"
      padding="24px"
      className={styles.NavigationButtonMenuBox}
    >
      <Flex mb="8px">
        <TextField
          iconLeft={<IconSearch size={24} />}
          className={styles.NavigationButtonMenuBoxSearchField}
        />
        <Button margin="0 16px">Search</Button>
        <Button
          color="tertiary"
          variant="soft"
          iconLeft={<IconX size={24} />}
          onClick={() => toggleSearch()}
        />
      </Flex>

      <Text as="p" size="14px" mb="8px">
        Type minimum 3 characters keyword and click search to find of your
        information
      </Text>

      <Divider padding="16px" />

      <Text as="p" mb="16px" color="#101828">Reccomendations</Text>

      <Box>
        <ul>
          <li>
            <Flex
              alignX="space-between"
              width="100%"
              padding="12px 0"
              className={`${styles.NavigationButtonMenuBoxRecommendations} ${styles.NavigationButtonMenuBoxRecommendationsTopBorder}`}
            >
              <Text as="p" color="tertiary500">Board of directors</Text>
              <IconArrowUpRight size={24} />
            </Flex>
          </li>
          <li>
            <Flex
              alignX="space-between"
              width="100%"
              padding="12px 0"
              className={styles.NavigationButtonMenuBoxRecommendations}
            >
              <Text as="p" color="tertiary500">Financial report</Text>
              <IconArrowUpRight size={24} />
            </Flex>
          </li>
          <li>
            <Flex
              alignX="space-between"
              width="100%"
              padding="12px 0"
              className={styles.NavigationButtonMenuBoxRecommendations}
            >
              <Text as="p" color="tertiary500">Annual report</Text>
              <IconArrowUpRight size={24} />
            </Flex>
          </li>
        </ul>
      </Box>
    </Box>
  );
};
