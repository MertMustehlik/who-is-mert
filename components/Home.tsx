"use client";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Typewriter } from "react-simple-typewriter";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { IconFileCv } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const profile = {
    name: "Mert Müstehlik",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQGSf_QA-ie4iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693833276878?e=1766016000&v=beta&t=UxhoMBRCG1LVJySWG8h3sw1bqMmOV2tAGJAxoYVfRjM",
    titles: ["Software Developer", "Laravel Developer", "Full Stack Developer"],
    bio: `Modern web uygulamaları geliştiriyorum.

      Laravel ile yüksek performanslı RESTful ve GraphQL API’ler kuruyor; MySQL, PostgreSQL ve MongoDB gibi veritabanlarını birlikte kullanarak ölçeklenebilir mimariler tasarlıyorum.

      Gerçek zamanlı projelerde WebSocket teknolojileri (Laravel Reverb) ile anlık iletişim sistemleri geliştiriyorum. Kullanıcı deneyimini ön planda tutan, güvenli, hızlı ve temiz kod yapısına sahip projeler üretmeyi hedefliyorum.`,
    social: {
      linkedin: "https://www.linkedin.com/in/mert-müstehlik-778233222/",
      github: "https://github.com/MertMustehlik",
      email: "mailto:mertmustehlik@hotmail.com",
    },
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-primary">
      <InteractiveBackground />

      <Container>
        <div className="flex justify-center items-center gap-4 flex-col">
          <img
            className="w-32 h-32 rounded-full"
            src={profile.avatar}
            alt="Avatar"
          />
          <div>
            <h1 className="text-white text-4xl font-bold">{profile.name} 👋</h1>
            <p className="text-white text-1xl text-center">
              <Typewriter
                words={profile.titles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href={profile.social.linkedin}
              className="hover:text-orange-300 text-white px-2 py-2 rounded flex items-center gap-2"
              target="_blank"
            >
              <IconBrandLinkedin />
            </Link>
            <Link
              href={profile.social.github}
              className="hover:text-orange-300 text-white px-2 py-2 rounded flex items-center gap-2"
              target="_blank"
            >
              <IconBrandGithub />
            </Link>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <IconFileCv /> Özgeçmişi İndir
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Henüz indirme aktif değil, yakında eklenecek.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Container>

      <div className="relative z-10 flex items-center justify-center hidden">
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-10 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm bg-primary">
          <img
            className="w-32 h-32 rounded-full"
            src={profile.avatar}
            alt="Avatar"
          />
          <div>
            <h1 className="text-white text-4xl font-bold">{profile.name} 👋</h1>
            <p className="text-white text-1xl text-center">
              <Typewriter
                words={profile.titles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
          </div>
          <p className="text-white text-1xl max-w-xl whitespace-pre-line">
            {profile.bio}
          </p>
          <div className="flex gap-2">
            <Link
              href={profile.social.linkedin}
              className="hover:text-orange-300 text-white px-2 py-2 rounded flex items-center gap-2"
              target="_blank"
            >
              <IconBrandLinkedin />
            </Link>
            <Link
              href={profile.social.github}
              className="hover:text-orange-300 text-white px-2 py-2 rounded flex items-center gap-2"
              target="_blank"
            >
              <IconBrandGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
