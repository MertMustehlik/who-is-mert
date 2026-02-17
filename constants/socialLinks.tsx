import { IconBrandLinkedin, IconBrandGithub, IconBuilding } from "@tabler/icons-react";

interface SocialLink {
  type: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    type: "linkedin",
    label: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/mert-müstehlik-778233222/",
  },
  {
    type: "github",
    label: "GitHub",
    icon: IconBrandGithub,
    href: "https://github.com/MertMustehlik",
  },
  {
    type: "Vize CRM",
    label: "Vize CRM",
    icon: IconBuilding,
    href: "https://mustevo.com",
  },
  {
    type: "Koltukdolu",
    label: "Koltukdolu",
    icon: IconBuilding,
    href: "https://koltukdolu.mustevo.com",
  }
];
