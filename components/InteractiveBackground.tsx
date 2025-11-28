"use client";

import { useEffect, useRef } from "react";
import {
  IconTriangle,
  IconBorderCornerSquare,
  IconBackslash,
  IconCode,
  IconBorderCornerRounded,
  IconBrandSupabase,
  IconArrowMergeAltLeft,
  IconRadiusTopRight,
} from "@tabler/icons-react";

const InteractiveBackground = () => {
  const ICONS = [
    {
      Component: IconTriangle,
      className: "left-[12%] top-[10%] w-10 h-10 text-blue-300",
    },
    {
      Component: IconBorderCornerSquare,
      className: "left-[45%] top-[15%] w-8 h-8 text-blue-200",
    },
    {
      Component: IconBackslash,
      className: "left-[75%] top-[8%] w-12 h-12 text-blue-400",
    },
    {
      Component: IconCode,
      className: "left-[13%] top-[60%] w-10 h-10 text-blue-300",
    },
    {
      Component: IconBorderCornerRounded,
      className: "right-[12%] bottom-[60%] w-10 h-10 text-blue-300",
    },
    {
      Component: IconBrandSupabase,
      className: "left-[12%] bottom-[12%] w-10 h-10 text-blue-300",
    },
    {
      Component: IconArrowMergeAltLeft,
      className: "left-[45%] bottom-[15%] w-8 h-8 text-blue-500",
    },
    {
      Component: IconRadiusTopRight,
      className: "left-[90%] bottom-[8%] w-12 h-12 text-blue-300",
    },
  ];

  const iconsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = iconsRef.current;
    if (!container) return;

    const icons = Array.from(container.querySelectorAll(".floating-icon"));

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      icons.forEach((icon, index) => {
        const speed = 10 + index * 5;
        const x = (window.innerWidth / 2 - clientX) / speed;
        const y = (window.innerHeight / 2 - clientY) / speed;

        (icon as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={iconsRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {ICONS.map((icon, i) => {
        const Icon = icon.Component;
        return (
          <Icon
            key={i}
            className={`floating-icon absolute ${icon.className}`}
          />
        );
      })}
    </div>
  );
};

export default InteractiveBackground;
