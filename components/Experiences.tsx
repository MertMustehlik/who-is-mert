"use client";
import { useTranslation } from "react-i18next";
import { experiences } from "@/constants/experiences";
import { Separator } from "@/components/ui/separator";

export default function Experiences() {
  return (
    <>
      <ol className="relative border-s border-default">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            title={experience.title}
            date={experience.date}
            company={experience.company}
            location={experience.location}
            type={experience.type}
            description={experience.description}
          />
        ))}
      </ol>
    </>
  );
}

interface ExperienceItemProps {
  title: string;
  date: string;
  company: string;
  location: string;
  type: string;
  description: string[];
}

export function ExperienceItem({
  title,
  date,
  company,
  location,
  type,
  description,
}: ExperienceItemProps) {
  const { t } = useTranslation();

  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
      <time className="text-sm font-normal leading-none text-body">{date}</time>
      <h3 className="text-md font-semibold text-heading mt-2">{company}</h3>
      <div className="text-md font-medium text-heading">{title}</div>
      <div className="text-sm font-normal text-body">{location}, {type}</div>
      {description.length > 0 && (
        <Separator className="my-2" />
      )}
      <div className="mb-4 text-base font-normal text-body">
        {description.map((desc, index) => (
          <p key={index} className="mb-2 whitespace-pre-line">
            {t(desc)}
          </p>
        ))}
      </div>
    </li>
  );
}
