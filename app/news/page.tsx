"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getNews, type NewsItem } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const newsImages: Record<string, string> = {
  "uzbekistan-visa-free": "/uzbekistan-airport-travel-visa-passport.jpg",
  "samarkand-unesco": "/samarkand-registan-unesco-world-heritage-site.jpg",
  "high-speed-train": "/high-speed-train-uzbekistan-modern-railway-afrosiy.jpg",
}

export default function NewsPage() {
  const { language, t } = useLanguage()
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    setNews(getNews())
  }, [])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[350px] overflow-hidden">
        <Image src="/samarkand-registan-unesco-world-heritage-site.jpg" alt="News" fill className="object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.news.title}</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">{t.news.subtitle}</p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={newsImages[item.slug] || item.image}
                    alt={item.title[language]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3 line-clamp-2">{item.title[language]}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.excerpt[language]}</p>
                  <Link href={`/news/${item.slug}`}>
                    <Button variant="outline" className="w-full gap-2 bg-transparent">
                      {t.news.readMore}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
