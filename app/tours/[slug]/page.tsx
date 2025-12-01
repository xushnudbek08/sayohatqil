"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getTours, type Tour } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, MapPin, Check, ArrowLeft, Phone } from "lucide-react"

const tourImages: Record<string, string> = {
  "samarkand-classic": "/registan-samarkand-uzbekistan-ancient-architecture.jpg",
  "bukhara-adventure": "/bukhara-uzbekistan-kalyan-minaret-ancient-city.jpg",
  "khiva-mystery": "/khiva-itchan-kala-ancient-walled-city-uzbekistan.jpg",
  "silk-road-grand": "/silk-road-caravan-camels-desert-uzbekistan-sunset.jpg",
  "fergana-valley": "/fergana-valley-uzbekistan-mountains-green-landscap.jpg",
  "aral-sea-expedition": "/aral-sea-ship-graveyard-desert-uzbekistan-dramatic.jpg",
}

export default function TourDetailPage() {
  const params = useParams()
  const { language, t } = useLanguage()
  const [tour, setTour] = useState<Tour | null>(null)

  useEffect(() => {
    const tours = getTours()
    const found = tours.find((t) => t.slug === params.slug)
    setTour(found || null)
  }, [params.slug])

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">{t.common.loading}</p>
      </div>
    )
  }

  const includes = {
    uz: ["Mehmonxona", "Nonushta", "Transport", "Gid xizmati", "Kirish chiptalari"],
    ru: ["Отель", "Завтрак", "Транспорт", "Услуги гида", "Входные билеты"],
    en: ["Hotel", "Breakfast", "Transport", "Guide service", "Entrance tickets"],
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[450px] overflow-hidden">
        <Image src={tourImages[tour.slug] || tour.image} alt={tour.title[language]} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
          <div>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.tours.title}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{tour.title[language]}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>
                  {tour.duration} {t.tours.days}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-2xl font-bold">${tour.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "uz" ? "Tur haqida" : language === "ru" ? "О туре" : "About Tour"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description[language]}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "uz"
                    ? "Asosiy manzillar"
                    : language === "ru"
                      ? "Основные направления"
                      : "Key Destinations"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights[language].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {language === "uz" ? "Turga kiritilgan" : language === "ru" ? "Включено в тур" : "Tour Includes"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {includes[language].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground text-sm mb-1">{t.tours.from}</p>
                    <p className="text-4xl font-bold text-primary">${tour.price}</p>
                    <p className="text-muted-foreground text-sm">
                      / {language === "uz" ? "kishi" : language === "ru" ? "человек" : "person"}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{t.tours.duration}</span>
                      <span className="font-semibold text-foreground">
                        {tour.duration} {t.tours.days}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">
                        {language === "uz" ? "Guruh hajmi" : language === "ru" ? "Размер группы" : "Group Size"}
                      </span>
                      <span className="font-semibold text-foreground">2-15</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="w-full gap-2">
                      <Phone className="w-5 h-5" />
                      {t.tours.bookNow}
                    </Button>
                  </Link>

                  <p className="text-center text-muted-foreground text-sm mt-4">
                    {language === "uz"
                      ? "Bepul konsultatsiya olish uchun bog'laning"
                      : language === "ru"
                        ? "Свяжитесь с нами для бесплатной консультации"
                        : "Contact us for free consultation"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
