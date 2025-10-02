import { cookies } from "next/headers"
import { SidebarInset, SidebarProvider } from "@repo/ui/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <main>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
