import { cn } from "@/lib/utils";
import { Barrio } from "next/font/google";

interface LogoProps {
  className?: string;
}

const barrio = Barrio({
  weight: "400",
  subsets: ["latin"],
});

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn(barrio.className, className)}>
      sankofa<span className="text-primary">.</span>ai
    </span>
  );
}
