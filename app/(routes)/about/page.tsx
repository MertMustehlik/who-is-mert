import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mert MÜSTEHLİK",
  description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
};

export default function About() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button>Welcome to About Page</Button>
    </div>
  );
}
