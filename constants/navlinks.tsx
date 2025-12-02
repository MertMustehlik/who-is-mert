import { IconBolt, IconMail, IconMessage2 } from "@tabler/icons-react";

export interface Navlink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const navlinks: Navlink[] = [
  {
    href: "/home",
    label: "home",
    icon: IconBolt,
  },
  {
    href: "/about",
    label: "about",
    icon: IconMessage2,
  },
  {
    href: "/contact",
    label: "contact",
    icon: IconMail,
  },
];
