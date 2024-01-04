"use client";

import Link from "next/link";
import "./style.scss";

// atoms
import { Box, Image, Text, Flex } from "@/app/_components/atoms";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Box mt="32px" className="about-us--banner">
        <Image
          src="/about-us/about-us-profile-and-brief-history.webp"
          width="100%"
          height="auto"
          radius="24px 24px 0px 0px"
        />
        <Box
          background="#fff"
          width="720px"
          height="280px"
          className="about-us--banner-mask"
        />
        <Box className="about-us--banner-text">
          <Text as="h3">About Us</Text>
          <Text as="p" color="tertiary500">
            The world in your hand.
          </Text>
        </Box>
      </Box>

      <Box className="about-us--tabs" background="tertiary300">
        <Flex className="about-us--tabs-items">
          <Link href="/about-us/profile-and-brief-history">
            <Text as="p" color="tertiary600">
              Profile & Brief History
            </Text>
          </Link>
          <Link href="/about-us/58-tahun-telkom">
            <Text as="p" color="tertiary600">
              58 Tahun Telkom
            </Text>
          </Link>
          <Link href="#">
            <Text as="p" color="tertiary600">
              Leadership
            </Text>
          </Link>
          <Link href="#">
            <Text as="p" color="tertiary600">
              Company Structure
            </Text>
          </Link>
          <Link href="#">
            <Text as="p" color="tertiary600">
              Governance (GCG)
            </Text>
          </Link>
          <Link href="#">
            <Text as="p" color="tertiary600">
              Awards
            </Text>
          </Link>
        </Flex>
      </Box>
      {children}
    </main>
  );
}