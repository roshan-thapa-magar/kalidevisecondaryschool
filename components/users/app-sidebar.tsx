import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ChevronDown,
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";
import { ModeToggle } from "../theme-toggle";


const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    icon: Users,
  },
  {
    title: "Teachers",
    icon: GraduationCap,
  },
  {
    title: "Academics",
    icon: BookOpen,
  },
  {
    title: "Notifications",
    icon: Bell,
  },
];


export function AppSidebar() {
  return (
    <Sidebar className="border-r">

      {/* Content */}
      <SidebarContent>

        <SidebarGroup>

          <SidebarGroupLabel>
            MENU
          </SidebarGroupLabel>


          <SidebarGroupContent>

            <SidebarMenu>

              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>

                  <SidebarMenuButton
                    className="
                    h-11
                    rounded-xl
                    hover:bg-muted
                    transition
                    "
                  >

                    <item.icon className="h-5 w-5" />

                    <span>
                      {item.title}
                    </span>

                  </SidebarMenuButton>

                </SidebarMenuItem>
              ))}


            </SidebarMenu>

          </SidebarGroupContent>

        </SidebarGroup>


      </SidebarContent>




<SidebarFooter>
  <SidebarMenu>
    <SidebarMenuItem>
      <div className="flex items-center justify-between rounded-xl border p-2">
        <div className="flex flex-col">
          <span className="text-sm font-medium">Theme</span>
          <span className="text-xs text-muted-foreground">
            Appearance
          </span>
        </div>

        <ModeToggle />
      </div>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarFooter>

    </Sidebar>
  );
} 