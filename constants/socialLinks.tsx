import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/mert-müstehlik-778233222/",
  },
  {
    label: "GitHub",
    icon: IconBrandGithub,
    href: "https://github.com/MertMustehlik",
  },
];
