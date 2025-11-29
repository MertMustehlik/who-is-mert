"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navlinks } from "@/constants/navlinks";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { isMobile } from "@/lib/utils";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";

interface Navlink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

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
            className="fixed lg:relative z-100 left-0 top-0 h-screen bg-primary w-75 py-8 text-white border-r border-r-gray-700"
          >
            <SidebarContent setSidebarOpen={setSidebarOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="fixed bottom-10 right-5 h-12 w-12 bg-gray-50 opacity-90 border border-neutral-800 rounded-full backdrop-blur-sm flex items-center justify-center z-100 cursor-pointer"
        onClick={() => toggleSidebar()}
      >
        <IconLayoutSidebarRightCollapse className="h-6 w-6 text-black" />
      </button>
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

  return (
    <>
      <div className="flex items-center gap-2.5 px-10">
        <img
          className="w-14 h-14 rounded-full"
          src="https://media.licdn.com/dms/image/v2/D4D03AQGSf_QA-ie4iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693833276878?e=1766016000&v=beta&t=UxhoMBRCG1LVJySWG8h3sw1bqMmOV2tAGJAxoYVfRjM"
          alt=""
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
        {navlinks.map((link: Navlink) => (
          <Link
            key={link.href}
            href={link.href}
            className={twMerge(
              "text-white hover:text-orange-300 transition duration-200 flex items-center space-x-4 py-2 px-2 rounded-md text-base font-bold",
              isActive(link.href) && "text-orange-300"
            )}
            onClick={() => isMobile() && setSidebarOpen(false)}
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
