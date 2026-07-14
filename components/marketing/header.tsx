"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "ABOUT", href: "/about" },
  { name: "ACADEMICS", href: "/academics" },
  { name: "NOTICES", href: "/notices" },
  { name: "ADMISSION", href: "/admission" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Kali Devi"
            width={42}
            height={42}
            priority
            className="rounded-full object-cover"
          />
          <span className="flex items-center gap-1 text-lg font-bold">
            Kali Devi<span className="hidden md:flex">Secondary School</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative text-sm font-medium transition-colors
                  ${isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {item.name}
                {isActive && (
                  <span
                    className="
                      absolute
                      -bottom-5
                      left-0
                      h-0.5
                      w-full
                      rounded-full
                      bg-foreground
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
        </div>

        {/* Mobile Section */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger >
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleNavigation}
                      className={`
                        rounded-lg px-3 py-2 text-sm font-medium transition-colors
                        ${isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="mt-4">
                  <Link href="/login" onClick={handleNavigation}>
                    <Button className="w-full">Login</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}