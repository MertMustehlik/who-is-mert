"use client";

import { useTranslation } from "react-i18next";
import { downloadResume } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GB, TR } from "country-flag-icons/react/3x2";

export function DownloadResume() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-white text-lg md:text-xl font-semibold">
        {t("download_resume")}
      </h2>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          variant="outline"
          onClick={() => downloadResume("tr")}
          className="flex items-center gap-2 justify-center w-40"
        >
          <TR className="w-5 h-5" /> Özgeçmiş TR
        </Button>

        <Button
          variant="outline"
          onClick={() => downloadResume("en")}
          className="flex items-center gap-2 justify-center w-40"
        >
          <GB className="w-5 h-5" /> Resume EN
        </Button>
      </div>
    </div>
  );
}

