import Sidebar from "@/components/layout/sidebar/Sidebar";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-80 w-full">{children}</main>
    </div>
  );
}
