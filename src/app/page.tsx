"use client";

// templates
import { News, Reports } from "./_components/templates";

export default function Home() {
  return (
    <main>
      <Reports />
      <News />
    </main>
  );
}
