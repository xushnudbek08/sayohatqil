import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ecosayohat - O'zbekiston bo'ylab eco sayohatlar",
  description:
    "Ecosayohat bilan O'zbekistonda ekologik va mas'uliyatli sayohatlar: Samarqand, Buxoro, Xiva va boshqa tarixiy shaharlarga qulay va xavfsiz turlar.",
  generator: "Ecosayohat",
  icons: {
    icon: "/icon-eco.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className={`${inter.className} font-sans antialiased`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
