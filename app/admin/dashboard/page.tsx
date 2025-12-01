"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import { getTours, getNews } from "@/lib/data"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Newspaper, Users, DollarSign } from "lucide-react"

export default function AdminDashboardPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { language } = useLanguage()
  const [stats, setStats] = useState({
    tours: 0,
    news: 0,
    featured: 0,
  })

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin")
      return
    }

    const tours = getTours()
    const news = getNews()
    setStats({
      tours: tours.length,
      news: news.length,
      featured: tours.filter((t) => t.featured).length,
    })
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const content = {
    uz: {
      title: "Dashboard",
      welcome: "Xush kelibsiz!",
      totalTours: "Jami turlar",
      featuredTours: "Mashhur turlar",
      totalNews: "Yangiliklar",
      revenue: "Daromad (demo)",
    },
    ru: {
      title: "Панель управления",
      welcome: "Добро пожаловать!",
      totalTours: "Всего туров",
      featuredTours: "Популярные туры",
      totalNews: "Новости",
      revenue: "Доход (демо)",
    },
    en: {
      title: "Dashboard",
      welcome: "Welcome!",
      totalTours: "Total Tours",
      featuredTours: "Featured Tours",
      totalNews: "News Articles",
      revenue: "Revenue (demo)",
    },
  }

  const t = content[language]

  const statCards = [
    { icon: MapPin, label: t.totalTours, value: stats.tours, color: "text-blue-500" },
    { icon: Users, label: t.featuredTours, value: stats.featured, color: "text-green-500" },
    { icon: Newspaper, label: t.totalNews, value: stats.news, color: "text-orange-500" },
    { icon: DollarSign, label: t.revenue, value: "$12,450", color: "text-primary" },
  ]

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
          <p className="text-muted-foreground">{t.welcome}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
