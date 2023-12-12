"use client";

import { Lato } from "next/font/google";
import "./globals.css";

// providers
import { LegionProvider } from "./_libs/providers";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <LegionProvider>
          {children}
        </LegionProvider>
      </body>
    </html>
  );
}
