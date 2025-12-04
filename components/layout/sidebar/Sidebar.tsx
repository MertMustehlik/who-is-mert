"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navlinks } from "@/constants/navlinks";
import { socialLinks } from "@/constants/socialLinks";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { isMobile } from "@/lib/utils";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "@/components/LanguageToggle";
import Image from "next/image";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<null | boolean>(null);

  useEffect(() => {
    setSidebarOpen(isMobile() ? false : true);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -220 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="fixed lg:relative z-100 left-0 top-0 h-screen bg-sidebar w-75 py-8 text-white border-r border-r-gray-700"
          >
            <SidebarContent setSidebarOpen={setSidebarOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-40 right-5 h-12 w-12 rounded-full z-50 cursor-pointer"
        onClick={() => toggleSidebar()}
      >
        <IconLayoutSidebarRightCollapse className="h-6 w-6 text-secondary-foreground" />
      </Button>
      <ModeToggle />
      <LanguageToggle />
    </>
  );
};

export const SidebarContent = ({
  setSidebarOpen,
}: {
  setSidebarOpen: React.Dispatch<React.SetStateAction<null | boolean>>;
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center gap-2.5 px-10">
        <Image
          className="w-14 h-14 rounded-full"
          src="images/avatar.jpeg"
          alt="Avatar"
          width={100}
          height={100}
        />
        <div className="font-medium text-heading">
          <div>Mert MÜSTEHLİK</div>
          <div className="text-sm font-normal text-body">
            Software Developer
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-gray-700" />

      <div className="flex flex-col space-y-1 relative px-10">
        {navlinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={twMerge(
              "text-sidebar-foreground hover:text-sidebar-primary transition duration-200 flex items-center space-x-4 py-2 px-2 rounded-md text-base font-bold",
              isActive(link.href) && "text-sidebar-primary"
            )}
            onClick={() => isMobile() && setSidebarOpen(false)}
          >
            <link.icon className={twMerge("h-5 w-5")} />
            <span>{t(`sidebar.${link.label}`)}</span>
          </Link>
        ))}
      </div>

      <div className="flex flex-col space-y-1 relative px-10 mt-4">
        <div className="text-white font-bold text-sm p-2">
          {t("sidebar.links")}
        </div>

        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={twMerge(
              "text-white hover:text-sidebar-primary transition duration-200 flex items-center space-x-4 py-2 px-2 rounded-md text-base font-bold",
              isActive(link.href) && "text-sidebar-primary"
            )}
            target="_blank"
          >
            <link.icon className={twMerge("h-5 w-5")} />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
