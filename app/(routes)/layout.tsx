"use client";

import Footer from "@/components/layout/footer/Footer";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background flex flex-col justify-between">
        {children}
        <Footer variant={pathname === "/home" ? "primary" : "default"} />
      </main>
    </div>
  );
}
