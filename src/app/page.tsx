"use client";

// templates
import {
  Hero,
  News,
  Reports,
  Subsidiaries,
  TelkomForIndonesia,
} from "./_components/templates";

export default function Home() {
  return (
    <main>
      <Hero />
      <TelkomForIndonesia />
      <Subsidiaries />
      <Reports />
      <News />
    </main>
  );
}
