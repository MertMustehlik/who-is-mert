"use client";

import { Container } from "./Container";
import { PageTitle } from "./PageTitle";
import { IconMessage2, IconBriefcase } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Experiences from "@/components/Experiences";
import Image from "next/image";

export default function About() {
  const { t } = useTranslation();

  const skills = [
    {
      name: "Laravel",
      icon: "images/skills/laravel.png",
    },
    {
      name: "PHP",
      icon: "images/skills/php.png",
    },
    {
      name: "JavaScript",
      icon: "images/skills/js.png",
    },

    {
      name: "Next.js",
      icon: "images/skills/next-js.png",
    },

    {
      name: "JQuery",
      icon: "images/skills/jquery.png",
    },
    {
      name: "PostgreSQL",
      icon: "images/skills/postgresql.png",
    },
  ];

  return (
    <Container>
      <PageTitle
        title={t("about_page.about_me")}
        icon={<IconMessage2 size="32" />}
      />
      <div className="mt-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 my-10">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={skill.name}
              className="rounded-lg bg-secondary text-secondary-foreground shadow-md w-full p-4 flex flex-col items-center justify-between gap-2"
            >
              <div className="flex-1 flex items-center justify-center p-1">
                <Image src={skill.icon} alt={skill.name} width={100} height={100} />
              </div>
              <div className="w-full h-5 text-xs font-mono flex justify-center">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <p className="mb-4">{t("about_page.intro")}</p>
          <p className="mb-4">{t("about_page.projects")}</p>
          <p className="mb-4">{t("about_page.approach")}</p>
          <p className="mb-4">{t("about_page.motivation")}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-[22px] font-semibold mb-4 flex items-center gap-2">
          <IconBriefcase size="24" /> {t("experience")}
        </h2>
        <Experiences />
      </div>
    </Container>
  );
}
