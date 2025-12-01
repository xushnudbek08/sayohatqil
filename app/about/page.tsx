"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, MapPin, Calendar, Target, Heart } from "lucide-react"

export default function AboutPage() {
  const { language, t } = useLanguage()

  const stats = [
    { icon: Calendar, value: "10+", label: t.about.experienceYears },
    { icon: Users, value: "5000+", label: t.about.clientsCount },
    { icon: MapPin, value: "50+", label: t.about.toursCount },
    { icon: Award, value: "15+", label: language === "uz" ? "Mukofotlar" : language === "ru" ? "Наград" : "Awards" },
  ]

  const team = [
    {
      name: { uz: "Aziz Karimov", ru: "Азиз Каримов", en: "Aziz Karimov" },
      role: { uz: "Bosh direktor", ru: "Генеральный директор", en: "CEO" },
      image: "/professional-uzbek-man-ceo-portrait.jpg",
    },
    {
      name: { uz: "Malika Rahimova", ru: "Малика Рахимова", en: "Malika Rahimova" },
      role: { uz: "Tur menejeri", ru: "Менеджер туров", en: "Tour Manager" },
      image: "/professional-uzbek-woman-manager-portrait.jpg",
    },
    {
      name: { uz: "Bobur Aliyev", ru: "Бобур Алиев", en: "Bobur Aliyev" },
      role: { uz: "Bosh gid", ru: "Главный гид", en: "Lead Guide" },
      image: "/professional-uzbek-man-tour-guide-portrait.jpg",
    },
  ]

  const values = [
    {
      icon: Target,
      title: { uz: "Sifat", ru: "Качество", en: "Quality" },
      description: {
        uz: "Har bir sayohatda eng yuqori sifatni ta'minlaymiz",
        ru: "Мы обеспечиваем высочайшее качество в каждом путешествии",
        en: "We ensure the highest quality in every journey",
      },
    },
    {
      icon: Heart,
      title: { uz: "Sadoqat", ru: "Преданность", en: "Dedication" },
      description: {
        uz: "Mijozlarimiz qoniqishiga sadoqat bilan xizmat qilamiz",
        ru: "Мы преданно служим удовлетворению наших клиентов",
        en: "We serve with dedication to customer satisfaction",
      },
    },
    {
      icon: Users,
      title: { uz: "Jamoaviylik", ru: "Командная работа", en: "Teamwork" },
      description: {
        uz: "Professional jamoamiz bilan birga ishlaymiz",
        ru: "Мы работаем вместе с нашей профессиональной командой",
        en: "We work together with our professional team",
      },
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/silk-road-caravan-camels-desert-uzbekistan-sunset.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.about.title}</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">{t.about.subtitle}</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {language === "uz" ? "Bizning tarixmiz" : language === "ru" ? "Наша история" : "Our Story"}
              </h2>
              <p className="text-muted-foreground mb-4">{t.about.description}</p>
              <p className="text-muted-foreground mb-6">
                {language === "uz"
                  ? "Biz har bir sayohatchining individual ehtiyojlarini hisobga olib, maxsus tur dasturlarini tuzamiz. Bizning jamoamiz O'zbekistonning barcha go'zal joylarini yaxshi biladi va sizga unutilmas tajriba taqdim etishga tayyor."
                  : language === "ru"
                    ? "Мы составляем специальные туристические программы, учитывая индивидуальные потребности каждого путешественника. Наша команда хорошо знает все красивые места Узбекистана и готова подарить вам незабываемые впечатления."
                    : "We create special tour programs considering individual needs of each traveler. Our team knows all the beautiful places of Uzbekistan well and is ready to provide you with unforgettable experiences."}
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">{t.about.mission}</h3>
              <p className="text-muted-foreground">{t.about.missionText}</p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/khiva-itchan-kala-ancient-walled-city-uzbekistan.jpg"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {language === "uz" ? "Bizning qadriyatlarimiz" : language === "ru" ? "Наши ценности" : "Our Values"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{value.title[language]}</h3>
                    <p className="text-muted-foreground">{value.description[language]}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {language === "uz" ? "Bizning jamoa" : language === "ru" ? "Наша команда" : "Our Team"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name[language]}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-foreground">{member.name[language]}</h3>
                  <p className="text-muted-foreground text-sm">{member.role[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
