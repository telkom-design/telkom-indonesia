"use client";

import { Lato } from "next/font/google";
import "./globals.css";

// providers
import { LegionProvider } from "./_libs/providers";

// organisms
import { Footer, Navigation } from "./_components/organisms";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin-ext"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <LegionProvider>
          <Navigation />
          {children}
          {/* <Footer /> */}
        </LegionProvider>
      </body>
    </html>
  );
}
