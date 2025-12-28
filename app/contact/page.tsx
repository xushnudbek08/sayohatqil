"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const { language, t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: { uz: "Telefon", ru: "Телефон", en: "Phone" },
      value: "+998 99 588 48 84",
      link: "tel:+998995884884",
    },
    {
      icon: Mail,
      title: { uz: "Email", ru: "Email", en: "Email" },
      value: "info@ecosayohat.uz",
      link: "mailto:info@ecosayohat.uz",
    },
    {
      icon: MapPin,
      title: t.contact.address,
      value: t.contact.addressText,
      link: "#",
    },
    {
      icon: Clock,
      title: { uz: "Ish vaqti", ru: "Рабочее время", en: "Working Hours" },
      value: { uz: "Dush-Jum: 9:00 - 18:00", ru: "Пн-Пт: 9:00 - 18:00", en: "Mon-Fri: 9:00 - 18:00" },
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[350px] overflow-hidden">
        <Image
          src="/registan-samarkand-uzbekistan-ancient-architecture.jpg"
          alt="Contact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.contact.title}</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {language === "uz"
                  ? "Bog'lanish ma'lumotlari"
                  : language === "ru"
                    ? "Контактная информация"
                    : "Contact Information"}
              </h2>

              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const value = typeof item.value === "object" ? item.value[language] : item.value
                const title = typeof item.title === "object" ? item.title[language] : item.title

                return (
                  <Card key={index}>
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                        {item.link !== "#" ? (
                          <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              {/* Map placeholder */}
              <div className="relative h-[200px] rounded-xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0254718847367!2d69.27937331541!3d41.31151787927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534e23c12d%3A0x3d7e0c3c3c3c3c3c!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {language === "uz"
                          ? "Xabaringiz yuborildi!"
                          : language === "ru"
                            ? "Ваше сообщение отправлено!"
                            : "Your message has been sent!"}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {language === "uz"
                          ? "Tez orada siz bilan bog'lanamiz."
                          : language === "ru"
                            ? "Мы свяжемся с вами в ближайшее время."
                            : "We will contact you soon."}
                      </p>
                      <Button onClick={() => setSubmitted(false)}>
                        {language === "uz"
                          ? "Yangi xabar yuborish"
                          : language === "ru"
                            ? "Отправить новое сообщение"
                            : "Send new message"}
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-foreground mb-6">
                        {language === "uz"
                          ? "Xabar yuborish"
                          : language === "ru"
                            ? "Отправить сообщение"
                            : "Send Message"}
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">{t.contact.name}</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder={
                                language === "uz"
                                  ? "Ismingizni kiriting"
                                  : language === "ru"
                                    ? "Введите ваше имя"
                                    : "Enter your name"
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">{t.contact.email}</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder={
                                language === "uz" ? "Email manzilingiz" : language === "ru" ? "Ваш email" : "Your email"
                              }
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t.contact.phone}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+998 XX XXX XX XX"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">{t.contact.message}</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={
                              language === "uz"
                                ? "Xabaringizni yozing..."
                                : language === "ru"
                                  ? "Напишите ваше сообщение..."
                                  : "Write your message..."
                            }
                            rows={6}
                            required
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full gap-2">
                          <Send className="w-5 h-5" />
                          {t.contact.send}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
