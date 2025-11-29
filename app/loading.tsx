import { IconLoader } from "@tabler/icons-react";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center bg-primary h-screen text-white px-4">
      <span className="animate-pulse me-1">Yükleniyor</span>
      <IconLoader className="text-white animate-spin" />
    </div>
  );
}
