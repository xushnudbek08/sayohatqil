"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react"
import EcoSayohatLogo from "@/components/eco-sayohat-logo"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <EcoSayohatLogo width={220} height={60} className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm">{t.about.subtitle}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.nav.home}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.nav.tours}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.nav.news}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.nav.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +998 99 588 48 84
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                info@ecosayohat.uz
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                {t.contact.addressText}
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.followUs}</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/RasulbekKochkarbayUgli"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ecosayohat. {t.footer.rights}.
          </p>
          <p className="text-muted-foreground text-xs">
            Powered by <span className="font-semibold">Xushnudbek</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
