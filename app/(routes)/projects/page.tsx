import { Metadata } from "next";
import ProjectsPage from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projeler | Mert MÜSTEHLİK",
};

export default function Projects() {
  return <ProjectsPage />;
}
