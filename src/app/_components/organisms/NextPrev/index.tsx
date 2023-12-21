import styles from "./NextPrev.module.scss";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

// atoms
import { Box, Button, Flex } from "../../atoms";

export const NextPrev = () => {
  return (
    <Flex
      border="1px solid #d0d5dd"
      radius="12px"
      className={styles.nextPrevBox}
    >
      <Button
        color="tertiary"
        variant="transparent"
        iconLeft={<IconChevronLeft size={24} />}
        className={styles.nextPrevBoxPrevPrev}
      />

      <Box width="1px" height="auto" background="#d0d5dd" />

      <Button
        color="tertiary"
        variant="transparent"
        iconLeft={<IconChevronRight size={24} />}
        className={styles.nextPrevBoxPrevNext}
      />
    </Flex>
  );
};
