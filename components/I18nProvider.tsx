"use client";

import React, { ReactNode } from "react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

import en from "@/locales/en/common.json";
import tr from "@/locales/tr/common.json";
import { default as nextI18NextConfig } from "@/next-i18next.config";

i18next.use(initReactI18next).init({
  lng: nextI18NextConfig.i18n.defaultLocale,
  fallbackLng: nextI18NextConfig.fallbackLng,
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  interpolation: { escapeValue: false },
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
