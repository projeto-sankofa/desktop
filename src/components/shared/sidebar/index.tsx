"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
  User,
  University,
  House,
  ChartLine
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { title } from "process"
import { LoginSideBar } from "@/components/login-sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive: false,
      items: [
        {
            title: "Dashboard",
            url: "/"
        }
      ],
    },
    {
      title: "Analíses",
      url: "/analises",
      icon: ChartLine,
      items: [
        {
          title: "Nova Analíse",
          url: "/nova-analise",
        },
        {
          title: "Minhas Analíses",
          url: "#",
        },
        {
          title: "Dashboard",
          url: "#",
        },
      ],
    },
    {
      title: "Modelo",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Especificações",
          url: "#",
        },
        {
          title: "Matriz de confusão",
          url: "#",
        },
        {
          title: "Acurácia",
          url: "#",
        },
      ],
    },
    {
      title: "Documentação",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "IFSP",
      url: "https://portal.cmp.ifsp.edu.br/",
      icon: University,
    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const conectado :Boolean = data.user != null ? true : false
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/*<TeamSwitcher teams={data.teams} />*/}
        {conectado ? (
            <NavUser user={data.user} />
        ) : (
            <LoginSideBar />
        )}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger className="-ml-1 h-10 w-10" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
