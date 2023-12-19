import { ReactNode } from "react";
import styles from "./DesktopDropdownNavigation.module.scss";
import * as TablerIcon from "@tabler/icons-react";

// atoms
import { Box, Anchor, Text, Flex } from "@/app/_components/atoms";

type DesktopDropdownNavigation = {
  icon: string;
  title: string;
  description: string;
};

const DropdownMenuIcon = ({ icon }: { icon: string }) => {
  const SelectedIcon = (TablerIcon as any)[icon];

  return <SelectedIcon color="#D92D20" size={24} />;
};

export const DesktopDropdownNavigation = (props: {
  items: DesktopDropdownNavigation[];
}) => {
  return (
    <Box
      width="20rem"
      height="auto"
      style={{}}
      className={styles.DesktopDropdownNavigation}
    >
      <Box
        shadow="0px 4px 6px -2px rgba(16, 24, 40, .40)"
        radius="24px"
        padding="24px"
        width="20rem"
        background="#fff"
        mt="24px"
      >
        {props.items.map(({ icon, title, description }) => (
          <Anchor key={title}>
            <Flex padding="12px">
              <DropdownMenuIcon icon={icon} />

              <Box width="80%" ml="1rem">
                <Text size="16px" color="#101828" as="p" mb="4px">
                  {title}
                </Text>
                <Text size="14px" color="#475467" as="sub">
                  {description}
                </Text>
              </Box>
            </Flex>
          </Anchor>
        ))}
      </Box>
    </Box>
  );
};
