import { IconBolt, IconMail, IconMessage2 } from "@tabler/icons-react";

export interface Navlink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const navlinks: Navlink[] = [
  {
    href: "/home",
    label: "Ana Sayfa",
    icon: IconBolt,
  },
  {
    href: "/about",
    label: "Hakkımda",
    icon: IconMessage2,
  },
  {
    href: "/contact",
    label: "İletişim",
    icon: IconMail,
  },
];
