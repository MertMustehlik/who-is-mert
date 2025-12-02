"use server";

import { cookies } from "next/headers";
import { Locale } from "next-intl";

export async function setLocale(locale: Locale) {
  const store = await cookies();
  store.set("locale", locale);
}
