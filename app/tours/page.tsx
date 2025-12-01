"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getTours, type Tour } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, ArrowRight, MapPin } from "lucide-react"

const tourImages: Record<string, string> = {
  "samarkand-classic": "/registan-samarkand-uzbekistan-ancient-architecture.jpg",
  "bukhara-adventure": "/bukhara-uzbekistan-kalyan-minaret-ancient-city.jpg",
  "khiva-mystery": "/khiva-itchan-kala-ancient-walled-city-uzbekistan.jpg",
  "silk-road-grand": "/silk-road-caravan-camels-desert-uzbekistan-sunset.jpg",
  "fergana-valley": "/fergana-valley-uzbekistan-mountains-green-landscap.jpg",
  "aral-sea-expedition": "/aral-sea-ship-graveyard-desert-uzbekistan-dramatic.jpg",
}

export default function ToursPage() {
  const { language, t } = useLanguage()
  const [tours, setTours] = useState<Tour[]>([])

  useEffect(() => {
    setTours(getTours())
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[350px] overflow-hidden">
        <Image src="/silk-road-caravan-camels-desert-uzbekistan-sunset.jpg" alt="Tours" fill className="object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.tours.title}</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">{t.tours.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tourImages[tour.slug] || tour.image}
                    alt={tour.title[language]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {tour.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {language === "uz" ? "Mashhur" : language === "ru" ? "Популярный" : "Popular"}
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground text-lg mb-2">{tour.title[language]}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{tour.description[language]}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights[language].slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        <MapPin className="w-3 h-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>
                        {tour.duration} {t.tours.days}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-primary font-bold text-lg">
                      <DollarSign className="w-4 h-4" />
                      <span>${tour.price}</span>
                    </div>
                  </div>

                  <Link href={`/tours/${tour.slug}`} className="block mt-4">
                    <Button className="w-full gap-2">
                      {t.tours.viewDetails}
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
