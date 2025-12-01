"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getNews, type NewsItem } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react"

const newsImages: Record<string, string> = {
  "uzbekistan-visa-free": "/uzbekistan-airport-travel-visa-passport.jpg",
  "samarkand-unesco": "/samarkand-registan-unesco-world-heritage-site.jpg",
  "high-speed-train": "/high-speed-train-uzbekistan-modern-railway-afrosiy.jpg",
}

export default function NewsDetailPage() {
  const params = useParams()
  const { language, t } = useLanguage()
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null)
  const [otherNews, setOtherNews] = useState<NewsItem[]>([])

  useEffect(() => {
    const allNews = getNews()
    const found = allNews.find((n) => n.slug === params.slug)
    setNewsItem(found || null)
    setOtherNews(allNews.filter((n) => n.slug !== params.slug).slice(0, 2))
  }, [params.slug])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">{t.common.loading}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={newsImages[newsItem.slug] || newsItem.image}
          alt={newsItem.title[language]}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
          <div className="max-w-3xl">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.news.title}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              {newsItem.title[language]}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(newsItem.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">{newsItem.excerpt[language]}</p>
                <p className="text-muted-foreground leading-relaxed">{newsItem.content[language]}</p>
              </article>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    {language === "uz" ? "Ulashish:" : language === "ru" ? "Поделиться:" : "Share:"}
                  </span>
                  <Button variant="outline" size="icon">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {language === "uz" ? "Boshqa yangiliklar" : language === "ru" ? "Другие новости" : "Other News"}
              </h3>
              <div className="space-y-4">
                {otherNews.map((item) => (
                  <Link key={item.id} href={`/news/${item.slug}`}>
                    <div className="flex gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={newsImages[item.slug] || item.image}
                          alt={item.title[language]}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm line-clamp-2 mb-1">
                          {item.title[language]}
                        </h4>
                        <p className="text-muted-foreground text-xs">{formatDate(item.date)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
