"use client";

import Sidebar from "@/components/layout/sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100">{children}</main>
    </div>
  );
}
