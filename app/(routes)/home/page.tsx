import HomePage from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana Sayfa | Mert MÜSTEHLİK",
};

export const footerVariant = "dark";

export default function Home() {
  return <HomePage />;
}
