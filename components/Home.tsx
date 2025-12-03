"use client";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Container } from "@/components/Container";
import { socialLinks } from "@/constants/socialLinks";
import { useTranslation } from "react-i18next";
import { DownloadResume } from "@/components/DownloadResume";

export default function Home() {
  const { t } = useTranslation();

  const profile = {
    name: "Mert Müstehlik",
    avatar: "images/avatar.jpeg",
    titles: ["Software Developer", "Laravel Developer", "Full Stack Developer"],
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-primary dark:bg-background">
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
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-orange-300 text-white px-2 py-2 rounded flex items-center gap-2"
                target="_blank"
              >
                <link.icon />
              </Link>
            ))}
          </div>
          <DownloadResume />
        </div>
      </Container>
    </div>
  );
}
