"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import { getNews, saveNews, type NewsItem, defaultNews } from "@/lib/data"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Pencil, Trash2, Calendar } from "lucide-react"

const newsImages: Record<string, string> = {
  "uzbekistan-visa-free": "/uzbekistan-airport-travel-visa-passport.jpg",
  "samarkand-unesco": "/samarkand-registan-unesco-world-heritage-site.jpg",
  "high-speed-train": "/high-speed-train-uzbekistan-modern-railway-afrosiy.jpg",
}

export default function AdminNewsPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { language } = useLanguage()
  const [news, setNews] = useState<NewsItem[]>([])
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin")
      return
    }
    setNews(getNews())
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const content = {
    uz: {
      title: "Yangiliklar boshqaruvi",
      addNews: "Yangilik qo'shish",
      editNews: "Yangilikni tahrirlash",
      save: "Saqlash",
      cancel: "Bekor qilish",
      delete: "O'chirish",
      titleLabel: "Sarlavha",
      excerpt: "Qisqa ma'lumot",
      contentLabel: "To'liq matn",
      date: "Sana",
      confirmDelete: "Haqiqatan ham o'chirmoqchimisiz?",
      reset: "Boshlang'ich holatga qaytarish",
    },
    ru: {
      title: "Управление новостями",
      addNews: "Добавить новость",
      editNews: "Редактировать новость",
      save: "Сохранить",
      cancel: "Отмена",
      delete: "Удалить",
      titleLabel: "Заголовок",
      excerpt: "Краткое описание",
      contentLabel: "Полный текст",
      date: "Дата",
      confirmDelete: "Вы уверены, что хотите удалить?",
      reset: "Сбросить к начальным",
    },
    en: {
      title: "Manage News",
      addNews: "Add News",
      editNews: "Edit News",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      titleLabel: "Title",
      excerpt: "Excerpt",
      contentLabel: "Content",
      date: "Date",
      confirmDelete: "Are you sure you want to delete?",
      reset: "Reset to default",
    },
  }

  const t = content[language]

  const handleSave = (newsItem: NewsItem) => {
    let updatedNews: NewsItem[]
    if (editingNews) {
      updatedNews = news.map((n) => (n.id === newsItem.id ? newsItem : n))
    } else {
      newsItem.id = Date.now().toString()
      newsItem.slug = newsItem.title.en.toLowerCase().replace(/\s+/g, "-")
      updatedNews = [...news, newsItem]
    }
    setNews(updatedNews)
    saveNews(updatedNews)
    setIsDialogOpen(false)
    setEditingNews(null)
  }

  const handleDelete = (id: string) => {
    if (confirm(t.confirmDelete)) {
      const updatedNews = news.filter((n) => n.id !== id)
      setNews(updatedNews)
      saveNews(updatedNews)
    }
  }

  const handleReset = () => {
    setNews(defaultNews)
    saveNews(defaultNews)
  }

  const openEditDialog = (newsItem: NewsItem) => {
    setEditingNews(newsItem)
    setIsDialogOpen(true)
  }

  const openNewDialog = () => {
    setEditingNews(null)
    setIsDialogOpen(true)
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReset}>
              {t.reset}
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openNewDialog} className="gap-2">
                  <Plus className="w-4 h-4" />
                  {t.addNews}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingNews ? t.editNews : t.addNews}</DialogTitle>
                </DialogHeader>
                <NewsForm
                  newsItem={editingNews}
                  onSave={handleSave}
                  onCancel={() => setIsDialogOpen(false)}
                  labels={t}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={newsImages[item.slug] || item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                  <Calendar className="w-3 h-3" />
                  {formatDate(item.date)}
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{item.title[language]}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.excerpt[language]}</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-1 bg-transparent"
                    onClick={() => openEditDialog(item)}
                  >
                    <Pencil className="w-4 h-4" />
                    {language === "uz" ? "Tahrirlash" : language === "ru" ? "Изменить" : "Edit"}
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

function NewsForm({
  newsItem,
  onSave,
  onCancel,
  labels,
}: {
  newsItem: NewsItem | null
  onSave: (news: NewsItem) => void
  onCancel: () => void
  labels: Record<string, string>
}) {
  const [formData, setFormData] = useState<NewsItem>(
    newsItem || {
      id: "",
      slug: "",
      image: "/placeholder.svg?height=300&width=400",
      date: new Date().toISOString().split("T")[0],
      title: { uz: "", ru: "", en: "" },
      excerpt: { uz: "", ru: "", en: "" },
      content: { uz: "", ru: "", en: "" },
    },
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label>{labels.date}</Label>
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>{labels.titleLabel} (UZ)</Label>
          <Input
            value={formData.title.uz}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: { ...formData.title, uz: e.target.value },
              })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.titleLabel} (RU)</Label>
          <Input
            value={formData.title.ru}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: { ...formData.title, ru: e.target.value },
              })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.titleLabel} (EN)</Label>
          <Input
            value={formData.title.en}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: { ...formData.title, en: e.target.value },
              })
            }
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>{labels.excerpt} (UZ)</Label>
          <Textarea
            value={formData.excerpt.uz}
            onChange={(e) =>
              setFormData({
                ...formData,
                excerpt: { ...formData.excerpt, uz: e.target.value },
              })
            }
            rows={2}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.excerpt} (RU)</Label>
          <Textarea
            value={formData.excerpt.ru}
            onChange={(e) =>
              setFormData({
                ...formData,
                excerpt: { ...formData.excerpt, ru: e.target.value },
              })
            }
            rows={2}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.excerpt} (EN)</Label>
          <Textarea
            value={formData.excerpt.en}
            onChange={(e) =>
              setFormData({
                ...formData,
                excerpt: { ...formData.excerpt, en: e.target.value },
              })
            }
            rows={2}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>{labels.contentLabel} (UZ)</Label>
          <Textarea
            value={formData.content.uz}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: { ...formData.content, uz: e.target.value },
              })
            }
            rows={4}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.contentLabel} (RU)</Label>
          <Textarea
            value={formData.content.ru}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: { ...formData.content, ru: e.target.value },
              })
            }
            rows={4}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.contentLabel} (EN)</Label>
          <Textarea
            value={formData.content.en}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: { ...formData.content, en: e.target.value },
              })
            }
            rows={4}
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          {labels.cancel}
        </Button>
        <Button type="submit">{labels.save}</Button>
      </div>
    </form>
  )
}
