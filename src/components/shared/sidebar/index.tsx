"use client";

import * as React from "react";
import {University, House, ChartLine } from "lucide-react";

import { NavMain } from "@/components/shared/sidebar/components/nav-main";
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
} from "@/components/ui/sidebar";

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
        /*{
          title: "Analíses",
          url: "/historico-de-analises",
        },*/
        {
          title: "Gerar Relátorio",
          url: "/gerar-relatorio",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  //const conectado :Boolean = data.user != null ? true : false
  const conectado = false;
  return (
    <Sidebar collapsible="icon" {...props} className="bg-sidebar">
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Parceiros</SidebarGroupLabel>
          <SidebarMenu key="parceiros">
            <SidebarMenuItem>
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
  );
}
