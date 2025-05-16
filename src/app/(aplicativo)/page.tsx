import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-between mx-2">
      <div>
        HomePage (dashboard público)
      </div>
      <Link href={'/entrar'} className="">
        <Button>Entrar</Button>
      </Link>
    </div>
  )
}