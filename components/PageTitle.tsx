import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  icon?: ReactNode;
}

export default function PageTitle({ title, icon }: PageTitleProps) {
  return (
    <div className="flex items-center gap-2">
      {icon && icon}
      <div className="text-4xl font-bold">{title}</div>
    </div>
  );
}
