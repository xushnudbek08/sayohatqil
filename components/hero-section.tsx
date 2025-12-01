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
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty">{t.hero.subtitle}</p>
          <Link href="/tours">
            <Button size="lg" className="gap-2 text-base">
              {t.hero.cta}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
