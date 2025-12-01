"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CTASection() {
  const { language } = useLanguage()

  const content = {
    uz: {
      title: "O'zbekiston sehrini kashf qilishga tayyormisiz?",
      subtitle: "Biz bilan bog'laning va sayohatingizni rejalashtirishni boshlang!",
      cta: "Bog'lanish",
    },
    ru: {
      title: "Готовы открыть магию Узбекистана?",
      subtitle: "Свяжитесь с нами и начните планировать свое путешествие!",
      cta: "Связаться",
    },
    en: {
      title: "Ready to discover the magic of Uzbekistan?",
      subtitle: "Contact us and start planning your journey!",
      cta: "Contact Us",
    },
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Image src="/bukhara-uzbekistan-kalyan-minaret-ancient-city.jpg" alt="Bukhara" fill className="object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{content[language].title}</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{content[language].subtitle}</p>
        <Link href="/contact">
          <Button size="lg" className="gap-2">
            <Phone className="w-5 h-5" />
            {content[language].cta}
          </Button>
        </Link>
      </div>
    </section>
  )
}
