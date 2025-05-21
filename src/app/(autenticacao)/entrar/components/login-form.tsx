"use client";

import { GitHubIcon } from "@/components/icons/github";
import { GoogleIcon } from "@/components/icons/google";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  function handleGoogleLogin() {}
  function handleGithubLogin() {}

  return (
    <form className="max-w-lg mx-auto w-full flex flex-col gap-4">
      <div>
        <h2 className="text-3xl text-center font-medium">
          Bem vindo(a) ao <Logo />
        </h2>
        <span className="text-muted-foreground text-sm text-center">
          Por favor, entre em sua conta para ter acesso a plataforma.
        </span>
      </div>

      <Button variant="outline" size="lg" onClick={handleGoogleLogin}>
        <GoogleIcon />
        Entrar com Google
      </Button>
      <Button variant="outline" size="lg" onClick={handleGithubLogin}>
        <GitHubIcon />
        Entrar com Github
      </Button>
    </form>
  );
}
