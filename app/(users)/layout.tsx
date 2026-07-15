import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/users/app-sidebar"
import { Header } from "@/components/users/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <Header />
        <div className="p-4 md:p-6">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}