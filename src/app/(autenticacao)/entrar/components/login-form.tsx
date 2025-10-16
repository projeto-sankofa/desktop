"use client";

import { GitHubIcon } from "@/components/icons/github";
import { GoogleIcon } from "@/components/icons/google";
import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";

export function LoginForm() {
  return (
    <form className="max-w-lg mx-auto w-full flex flex-col gap-4">
      <div className="flex flex-col items-center mb-4">
        <Logo className="text-7xl" />
        <h2 className="text-3xl text-center font-medium">
          Bem vindo(a) ao Sankofa.AI
        </h2>
        <span className="text-muted-foreground text-sm text-center">
          Por favor, entre em sua conta para ter acesso a plataforma.
        </span>
      </div>

      <a
        href="http://localhost:5000/auth/google"
        className={buttonVariants({ variant: "outline" })}
      >
        <GoogleIcon />
        Entrar com Google
      </a>
      <a
        href="http://localhost:5000/auth/github"
        className={buttonVariants({ variant: "outline" })}
      >
        <GitHubIcon />
        Entrar com GitHub
      </a>
    </form>
  );
}
