"use client";

interface FooterProps {
  variant?: "default" | "primary";
}

export default function Footer({ variant = "default" }: FooterProps) {
  const variants = {
    default: "w-full bg-gray-100 py-5 text-center text-xs text-gray-400 border-t",
    primary:
      "w-full py-5 bg-primary text-center text-xs text-gray-400 border-t border-t-gray-700",
  };

  return (
    <footer className={`w-full py-5 text-center text-xs ${variants[variant]}`}>
      Developed by{" "}
      <a
        href="https://www.linkedin.com/in/mert-müstehlik-778233222/"
        target="_blank"
        className="font-semibold"
      >
        Mert Müstehlik
      </a>
      <span className="mx-1">•</span>© {new Date().getFullYear()}
    </footer>
  );
}
