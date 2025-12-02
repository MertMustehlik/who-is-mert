"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setLocale } from "@/lib/locale";
import { GB, TR } from "country-flag-icons/react/3x2";
import { useLocale } from "next-intl";

export function LanguageToggle() {
  const changeLocale = async (locale: string) => {
    await setLocale(locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-25 right-5 h-12 w-12 rounded-full z-50 cursor-pointer"
        >
          {useLocale() === "tr" ? <TR /> : <GB />}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLocale("tr")}
          className={
            useLocale() === "tr" ? "bg-accent text-accent-foreground" : ""
          }
        >
          <TR /> Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLocale("en")}
          className={
            useLocale() === "en" ? "bg-accent text-accent-foreground" : ""
          }
        >
          <GB /> English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
