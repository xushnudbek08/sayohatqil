"use client"

import { useLanguage } from "@/lib/language-context"
import { Shield, Users, Globe, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: { uz: "Xavfsiz sayohat", ru: "Безопасные путешествия", en: "Safe Travel" },
    description: {
      uz: "Barcha turlarimiz sug'urta bilan ta'minlangan",
      ru: "Все наши туры застрахованы",
      en: "All our tours are insured",
    },
  },
  {
    icon: Users,
    title: { uz: "Tajribali gidlar", ru: "Опытные гиды", en: "Expert Guides" },
    description: {
      uz: "Professional va tajribali gidlar jamoasi",
      ru: "Команда профессиональных и опытных гидов",
      en: "Team of professional and experienced guides",
    },
  },
  {
    icon: Globe,
    title: { uz: "Xalqaro standart", ru: "Международный стандарт", en: "International Standard" },
    description: {
      uz: "Xalqaro sifat standartlariga mos xizmat",
      ru: "Сервис, соответствующий международным стандартам",
      en: "Service meeting international quality standards",
    },
  },
  {
    icon: HeadphonesIcon,
    title: { uz: "24/7 qo'llab-quvvatlash", ru: "Поддержка 24/7", en: "24/7 Support" },
    description: {
      uz: "Istalgan vaqtda yordam olishingiz mumkin",
      ru: "Вы можете получить помощь в любое время",
      en: "You can get help at any time",
    },
  },
]

export function FeaturesSection() {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title[language]}</h3>
                <p className="text-muted-foreground text-sm">{feature.description[language]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
