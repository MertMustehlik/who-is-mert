import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GB, TR } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLocale = async (locale: string) => {
    i18n.changeLanguage(locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-10 right-5 h-12 w-12 rounded-full z-50 cursor-pointer"
        >
          {i18n.language === "tr" ? <TR /> : <GB />}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLocale("tr")}
          className={
            i18n.language === "tr" ? "bg-accent text-accent-foreground" : ""
          }
        >
          <TR /> Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLocale("en")}
          className={
            i18n.language === "en" ? "bg-accent text-accent-foreground" : ""
          }
        >
          <GB /> English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
