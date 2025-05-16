"use client"

import { useState } from "react"
import { Github, Loader2, Chrome } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState<{
    google: boolean
    github: boolean
  }>({ google: false, github: false })

  const handleGoogleLogin = async () => {
    setIsLoading({ ...isLoading, google: true })
    // Implementar autenticação com Google
    setTimeout(() => setIsLoading({ ...isLoading, google: false }), 2000)
  }

  const handleGithubLogin = async () => {
    setIsLoading({ ...isLoading, github: true })
    // Implementar autenticação com GitHub
    setTimeout(() => setIsLoading({ ...isLoading, github: false }), 2000)
  }

  return (
    <Card className="w-full max-w-lg mx-auto bg-card shadow">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-7xl font-bold tracking-tight py-4">Sankofa<span className="text-primary">.</span>AI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 px-6 pb-8">
        <Button
          variant="default"
          className="w-full  hover:opacity-95 text-white text-xl py-8"
          onClick={handleGoogleLogin}
          disabled={isLoading.google || isLoading.github}
        >
          {isLoading.google ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Chrome className="mr-2 h-5 w-5" />
          )}
          Google
        </Button>
        <Button
          variant="default"
          className="w-full  hover:opacity-95 text-white  text-xl py-8"
          onClick={handleGithubLogin}
          disabled={isLoading.google || isLoading.github}
        >
          {isLoading.github ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Github className="mr-2 h-5 w-5" />}
          GitHub
        </Button>
      </CardContent>
    </Card>
  )
}
