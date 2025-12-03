"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Compass, Lock, User, AlertCircle } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const { isAuthenticated, login } = useAuth()
  const { language } = useLanguage()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    router.push("/admin/dashboard")
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)

    if (login(username, password)) {
      router.push("/admin/dashboard")
    } else {
      setError(true)
    }
  }

  const content = {
    uz: {
      title: "Admin Panel",
      subtitle: "Tizimga kirish",
      username: "Foydalanuvchi nomi",
      password: "Parol",
      login: "Kirish",
      error: "Noto'g'ri foydalanuvchi nomi yoki parol",
      demo: "Login: ecotravel_admin / eco2025",
    },
    ru: {
      title: "Админ Панель",
      subtitle: "Вход в систему",
      username: "Имя пользователя",
      password: "Пароль",
      login: "Войти",
      error: "Неверное имя пользователя или пароль",
      demo: "Логин: ecotravel_admin / eco2025",
    },
    en: {
      title: "Admin Panel",
      subtitle: "Login to system",
      username: "Username",
      password: "Password",
      login: "Login",
      error: "Invalid username or password",
      demo: "Login: ecotravel_admin / eco2025",
    },
  }

  const t = content[language]

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Compass className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">{t.title}</CardTitle>
          <CardDescription>{t.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                <AlertCircle className="w-4 h-4" />
                {t.error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="username">{t.username}</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t.password}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              {t.login}
            </Button>

            <p className="text-center text-muted-foreground text-sm">{t.demo}</p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
