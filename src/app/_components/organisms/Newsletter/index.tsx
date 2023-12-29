"use client";

import "./style.scss";
import { IconPhoneFilled, IconMailFilled } from "@tabler/icons-react";

// atoms
import {
  Box,
  Button,
  Text,
  Flex,
  Select,
  Textfield,
  Checkbox,
} from "../../atoms";

export const Newsletter = () => {
  return (
    <Box
      background="secondary500"
      padding="48px 80px"
      radius="24px"
      className="newsletter-wrapper"
    >
      <Box className="newsletter-wrapper--divider"></Box>

      <Flex alignX="space-between">
        <Box width="480px">
          <Text color="#fff" as="p" weight="600" size="30px" mb="16px">
            Newsletter
          </Text>
          <Text color="#fff" as="p" size="20px" weight="400">
            Follow our journey in elevating the future of Indonesian Digital
            World through subscription to our newsletter.
          </Text>
        </Box>

        <Box width="480px">
          <Select
            options={[
              {
                label: "Green",
                value: "green",
              },
              {
                label: "Blue",
                value: "blue",
              },
            ]}
            placeholder="Choose newsletter topic"
          />
          <br />
          <br />
          <Textfield block iconLeft={<IconPhoneFilled size={24} />} />

          <br />
          <br />
          <Textfield block iconLeft={<IconMailFilled size={24} />} />

          <Box margin="24px 0" color="#fff">
            <Checkbox
              className="legion-checkbox"
              label="I accept the Term & Condition Policy"
              variant="check"
            />
          </Box>

          <Button block center>
            Subscribe
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
