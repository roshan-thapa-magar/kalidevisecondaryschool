"use client";

import {
    Menu,
    Bell,
    Search,
    ChevronDown,
    User,
    Settings,
    LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";


export function Header() {
    return (
        <header
            className="
      sticky
      top-0
      z-40
      h-16
      border-b
      bg-background/95
      backdrop-blur
      flex
      items-center
      justify-between
      px-2
      md:px-4
      "
        >


            {/* Left Side */}
            <div className="flex items-center gap-4">


                {/* Mobile Sidebar */}
                <SidebarTrigger />


                <div>
                    <h1 className="text-lg font-semibold">
                        Dashboard
                    </h1>

                    <p className="text-xs text-muted-foreground">
                        Welcome back, Roshan
                    </p>
                </div>


            </div>



            {/* Right Side */}
            <div className="flex items-center gap-3">


                {/* Search */}
                <div
                    className="
          hidden
          md:flex
          items-center
          gap-2
          h-10
          px-3
          rounded-xl
          border
          bg-muted/30
          "
                >

                    <Search className="h-4 w-4 text-muted-foreground" />

                    <input
                        placeholder="Search..."
                        className="
            bg-transparent
            outline-none
            text-sm
            w-40
            "
                    />

                </div>


                {/* Notification */}
                <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-xl relative"
                >

                    <Bell className="h-5 w-5" />


                    <span
                        className="
            absolute
            top-2
            right-2
            h-2
            w-2
            rounded-full
            bg-destructive
            "
                    />

                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        className="w-48 rounded-xl"
                    >
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            Profile
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </DropdownMenuItem>

                        <Link href="/">
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>



            </div>


        </header>
    );
}