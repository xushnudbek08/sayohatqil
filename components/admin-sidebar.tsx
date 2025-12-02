"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, MapPin, Newspaper, LogOut, Compass, ChevronLeft } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()
  const { language } = useLanguage()

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: { uz: "Dashboard", ru: "Панель", en: "Dashboard" },
      href: "/admin/dashboard",
    },
    {
      icon: MapPin,
      label: { uz: "Turlar", ru: "Туры", en: "Tours" },
      href: "/admin/tours",
    },
    {
      icon: Newspaper,
      label: { uz: "Yangiliklar", ru: "Новости", en: "News" },
      href: "/admin/news",
    },
  ]

  return (
    <aside className="w-64 bg-card border-r border-border min-h-[calc(100vh-64px)] p-4">
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">
            {language === "uz" ? "Saytga qaytish" : language === "ru" ? "Вернуться на сайт" : "Back to site"}
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Compass className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">Admin Panel</p>
          <p className="text-muted-foreground text-xs">Ecosayohat</p>
        </div>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label[language]}</span>
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <Button
          variant="outline"
          className="w-full gap-2 bg-transparent"
          onClick={() => {
            logout()
            window.location.href = "/admin"
          }}
        >
          <LogOut className="w-4 h-4" />
          {language === "uz" ? "Chiqish" : language === "ru" ? "Выйти" : "Logout"}
        </Button>
      </div>
    </aside>
  )
}
