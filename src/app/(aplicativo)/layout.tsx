import { AppSidebar } from "@/components/shared/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
   
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>  
            {children}
        </SidebarInset>
    </SidebarProvider>
    
  );
}