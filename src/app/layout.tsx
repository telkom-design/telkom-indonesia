"use client";

import { Lato } from "next/font/google";
import "./globals.scss";

// providers
import { LegionProvider } from "./_libs/providers";

// organisms
import { Footer, Navigation } from "./_components/organisms";

const lato = Lato({ weight: ["300", "400", "700", "900"], subsets: ["latin-ext"] });

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
          <Footer />
        </LegionProvider>
      </body>
    </html>
  );
}
