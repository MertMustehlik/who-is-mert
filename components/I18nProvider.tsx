"use client";

import { ReactNode, useEffect, useState } from "react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

import en from "@/locales/en/common.json";
import tr from "@/locales/tr/common.json";
import { default as nextI18NextConfig } from "@/next-i18next.config";

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const locale =
      localStorage.getItem("locale") || nextI18NextConfig.i18n.defaultLocale;

    i18next.use(initReactI18next).init({
      lng: locale,
      fallbackLng: nextI18NextConfig.fallbackLng,
      resources: {
        en: { translation: en },
        tr: { translation: tr },
      },
      interpolation: { escapeValue: false },
    });

    setLoaded(true);
  }, []);

  if (!loaded) return null;
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
