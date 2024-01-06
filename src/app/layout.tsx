"use client";

import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
