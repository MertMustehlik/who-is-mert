import { Locale } from "next-intl";

export async function setLocale(locale: Locale) {
  document.cookie = `locale=${locale}; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/`;
}
