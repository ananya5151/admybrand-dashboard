"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
// Removed unused CardHeader import
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/orders", label: "Orders", icon: ShoppingCart },
    { href: "/products", label: "Products", icon: Package },
    { href: "/customers", label: "Customers", icon: Users },
    { href: "/analytics", label: "Analytics", icon: LineChart },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="hidden md:block border-r bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg shadow-lg transition-all duration-300">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2 font-semibold text-primary text-lg tracking-tight">
            <Package2 className="h-7 w-7 text-indigo-600 dark:text-indigo-400 drop-shadow" />
            <span className="font-extrabold">ADmyBRAND</span>
          </Link>
          <div className="flex-1" />
          <Link href="/notifications">
            <Button variant="outline" size="icon" className="ml-4 h-8 w-8 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors">
              <Bell className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
              <span className="sr-only">View notifications</span>
            </Button>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all duration-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 focus-visible:ring-2 focus-visible:ring-indigo-400 outline-none",
                  pathname === link.href && "bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 shadow"
                )}
                tabIndex={0}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Removed separate settings nav at bottom */}
      </div>
    </div>
  );
}
