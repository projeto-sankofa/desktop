"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  University,
  House,
  ChartLine
} from "lucide-react"

import { NavMain } from "@/components/shared/sidebar/components/nav-main"
import { NavUser } from "@/components/shared/sidebar/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { LoginSideBar } from "@/components/shared/sidebar/components/login-sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: House,
      isActive: false,
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

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  //const conectado :Boolean = data.user != null ? true : false
  const conectado = false;
  return (
    <Sidebar collapsible="icon" {...props} className="bg-sidebar">
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
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Parceiros</SidebarGroupLabel>
          <SidebarMenu key="parceiros">
            <SidebarMenuItem >
              <SidebarMenuButton asChild>
                <a href="https://portal.cmp.ifsp.edu.br/" target="_blank">
                  <University />
                  <span>IFSP</span>
                </a>
              </SidebarMenuButton>
            
              </SidebarMenuItem>
       
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger className="-ml-1 h-10 w-10" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
