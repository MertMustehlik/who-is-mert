"use client";

import React from "react";
import Link from "next/link";
import { navlinks } from "@/constants/navlinks";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

interface Navlink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="fixed left-0 top-0 h-screen w-80 bg-primary py-8 text-white border-r border-r-gray-700">
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

      <Separator className="my-8 bg-gray-700"/>

      <div className="flex flex-col space-y-1 relative px-10">
        {navlinks.map((link: Navlink) => (
          <Link
            key={link.href}
            href={link.href}
            className={twMerge(
              "text-white hover:text-orange-300 transition duration-200 flex items-center space-x-4 py-2 px-2 rounded-md text-base font-bold",
              isActive(link.href) && "text-orange-300"
            )}
          >
            <link.icon className={twMerge("h-5 w-5")} />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
