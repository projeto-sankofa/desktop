import Image from "next/image";
import { LoginForm } from "./components/login-form";

export default function Login() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Image
        src="/sankofa-art.jpg"
        className="hidden md:block h-screen w-2/3 object-cover"
        width={1920}
        height={1280}
        alt="Arte do movimento negro em vermelho"
      />
      <LoginForm /> 
    </main>
  );
}
