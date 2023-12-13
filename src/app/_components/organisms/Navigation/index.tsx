import dynamic from "next/dynamic";
import base from "../../../_styles/Base.module.css";
import styles from "./Header.module.css";

// icons
import { IconSearch } from "@tabler/icons-react";

// atoms
import { Box, Button, Image, Select } from "../../atoms";

const Navbar = dynamic(
  () => import("@legion-ui/core").then((component) => component.Navbar),
  { ssr: false }
);

export const Navigation = () => {
  return (
    <Box padding="16px" className={`${base.flex} ${styles.navigationBox}`}>
      <Image src="/telkom-logo.svg" width="140px" height="32px" />

      <Navbar
        items={[
          {
            childrens: [
              {
                title: <span>Home</span>,
              },
              {
                title: <span>About</span>,
              },
              {
                title: <span>Contact</span>,
              },
              {
                title: <span>FAQ</span>,
              },
            ],
            title: <span>About Us</span>,
          },
          {
            active: false,
            childrens: [
              {
                title: <span>Login</span>,
              },
              {
                title: <span>Register</span>,
              },
              {
                title: <span>Forgot Password</span>,
              },
              {
                title: <span>Reset Password</span>,
              },
            ],
            title: <span>Solutions</span>,
          },
          {
            active: false,
            childrens: [
              {
                title: <span>Login</span>,
              },
              {
                title: <span>Register</span>,
              },
              {
                title: <span>Forgot Password</span>,
              },
              {
                title: <span>Reset Password</span>,
              },
            ],
            title: <span>Investor Relations</span>,
          },
          {
            active: false,
            childrens: [
              {
                title: <span>Login</span>,
              },
              {
                title: <span>Register</span>,
              },
              {
                title: <span>Forgot Password</span>,
              },
              {
                title: <span>Reset Password</span>,
              },
            ],
            title: <span>News & Resources</span>,
          },
          {
            active: false,
            childrens: [
              {
                title: <span>Login</span>,
              },
              {
                title: <span>Register</span>,
              },
              {
                title: <span>Forgot Password</span>,
              },
              {
                title: <span>Reset Password</span>,
              },
            ],
            title: <span>ESG</span>,
          },
          {
            active: false,
            title: <span>Careers</span>,
          },
        ]}
        className={`${base.flex} ${base.flex_grow} ${base.justify_center}`}
      />

      <Box className={`${base.flex} ${base.gap_3}`}>
        <Button
          iconLeft={<IconSearch size={20} />}
          variant="soft"
          color="tertiary"
        />

        <Select
          onChange={function noRefCheck() {}}
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
          placeholder="Language"
          variant="inline"
        />
      </Box>
    </Box>
  );
};
