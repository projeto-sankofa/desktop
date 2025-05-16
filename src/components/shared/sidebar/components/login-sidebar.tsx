"use client"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { User } from "lucide-react"
import Link from "next/link"

export function LoginSideBar() {


  return (
    <SidebarMenu>
      <SidebarMenuItem className="">
        <Link href={'/entrar'}>
            <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                <User className="w-10 h-10"/>
                Login
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
