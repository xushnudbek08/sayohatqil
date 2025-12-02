"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { getTours, type Tour } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, ArrowRight } from "lucide-react"

export function FeaturedTours() {
  const { language, t } = useLanguage()
  const [tours, setTours] = useState<Tour[]>([])

  useEffect(() => {
    const allTours = getTours()
    setTours(allTours.filter((tour) => tour.featured).slice(0, 4))
  }, [])

  const tourImages = [
    "/registan-samarkand-uzbekistan-ancient-architecture.jpg",
    "/bukhara-uzbekistan-kalyan-minaret-ancient-city.jpg",
    "/khiva-itchan-kala-ancient-walled-city-uzbekistan.jpg",
    "/silk-road-caravan-camels-desert-uzbekistan-sunset.jpg",
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.tours.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.tours.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <Card
              key={tour.id}
              className="overflow-hidden group hover:shadow-xl transition-all border-border/70 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tourImages[index] || tour.image}
                  alt={tour.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{tour.title[language]}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{tour.description[language]}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>
                      {tour.duration} {t.tours.days}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>
                      {t.tours.from} ${tour.price}
                    </span>
                  </div>
                </div>
                <Link href={`/tours/${tour.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 bg-transparent group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  >
                    {t.tours.viewDetails}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/tours">
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              {t.common.learnMore}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
