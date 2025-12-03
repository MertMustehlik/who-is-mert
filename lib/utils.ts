import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 1024;
}

export function downloadResume(locale: "tr" | "en" = "tr") {
  const fileName =
    locale === "tr" ? "mert_mustehlik_cv_tr.pdf" : "mert_mustehlik_cv_en.pdf";
  const link = document.createElement("a");
  link.href = `/resumes/${fileName}`;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
