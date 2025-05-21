import { cn } from "@/lib/utils";
import { Barrio } from "next/font/google";

const barrio = Barrio({
  weight: "400",
  subsets: ["latin"],
});

export function Logo() {
  return <span className={cn(barrio.className, "")}>sankofa<span className="text-primary">.</span>ai</span>;
}
