"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface ProjectItemProps {
  image: string;
  title: string;
  slug: string;
  technologies: string[];
}

export default function ProjectItem({
  image,
  title,
  slug,
  technologies,
}: ProjectItemProps) {
  const { t, i18n } = useTranslation();
  const [descriptions, setDescriptions] = useState<string[]>([]);

  useEffect(() => {
    const data = t(`projects_page.${slug}.description`, {
      returnObjects: true,
    }) as string[];
    setDescriptions(data);
  }, [slug, i18n.language]);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        whileTap={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <Card className="py-0 lg:flex-row">
          <CardContent className="border-r flex justify-center p-10 rounded-l-xl">
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <Image
                  src={image}
                  alt="Project Image"
                  className="rounded-xl"
                  width={150}
                  height={150}
                />
              </motion.div>
            </div>
          </CardContent>
          <CardHeader className="pb-3 w-full py-6">
            <CardTitle>{title}</CardTitle>
            {Array.isArray(descriptions) &&
              descriptions?.map((item, index) => (
                <CardDescription key={index}>{item}</CardDescription>
              ))}
            <CardDescription className="mt-2 flex gap-1 flex-wrap">
              {technologies.map((technology, index) => (
                <Badge key={index} className="rounded-md">
                  {technology}
                </Badge>
              ))}
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </>
  );
}
