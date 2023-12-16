"use client";

// templates
import {
  News,
  Reports,
  Subsidiaries,
  TelkomForIndonesia,
} from "./_components/templates";

export default function Home() {
  return (
    <main>
      <TelkomForIndonesia />
      <Subsidiaries />
      <Reports />
      <News />
    </main>
  );
}
