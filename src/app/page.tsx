"use client";

// templates
import {
  Hero,
  News,
  Reports,
  Subsidiaries,
  TelkomForIndonesia,
  TelkomInYears,
} from "./_components/templates";

export default function Home() {
  return (
    <main>
      <Hero />
      <TelkomForIndonesia />
      <TelkomInYears />
      <Subsidiaries />
      <Reports />
      <News />
    </main>
  );
}
