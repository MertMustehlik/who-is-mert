"use client";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { IconBriefcase } from "@tabler/icons-react";
import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/constants/projects";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Container>
      <PageTitle
        title={t("projects_page.projects")}
        icon={<IconBriefcase size="32" />}
      />
      <div className="mt-8 grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            title={project.title}
            slug={project.slug}
            technologies={project.technologies}
          />
        ))}
      </div>
    </Container>
  );
}
