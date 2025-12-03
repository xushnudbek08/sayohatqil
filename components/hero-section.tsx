"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/registan-samarkand-uzbekistan-ancient-architecture.jpg"
        alt="Registan, Samarkand"
        fill
        className="object-cover scale-105 md:scale-100"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-background/10" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl space-y-6 bg-background/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg shadow-black/20">
          <p className="inline-flex items-center rounded-full bg-emerald-500/20 text-emerald-100 px-3 py-1 text-xs md:text-sm font-medium border border-emerald-300/40">
            ECO TRAVEL · O'zbekiston bo'ylab qulay va xavfsiz turlar
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-balance leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-base md:text-lg text-white/90 text-pretty">{t.hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link href="/tours">
              <Button
                size="lg"
                className="gap-2 text-base bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/40"
              >
              {t.hero.cta}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-base border-white/60 text-white/90 bg-background/10 hover:bg-background/20"
              >
                Batafsil ma'lumot
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
