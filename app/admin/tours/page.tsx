"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import { getTours, saveTours, type Tour, defaultTours } from "@/lib/data"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Pencil, Trash2, Star, Clock, DollarSign } from "lucide-react"

const tourImages: Record<string, string> = {
  "samarkand-classic": "/registan-samarkand-uzbekistan-ancient-architecture.jpg",
  "bukhara-adventure": "/bukhara-uzbekistan-kalyan-minaret-ancient-city.jpg",
  "khiva-mystery": "/khiva-itchan-kala-ancient-walled-city-uzbekistan.jpg",
  "silk-road-grand": "/silk-road-caravan-camels-desert-uzbekistan-sunset.jpg",
  "fergana-valley": "/fergana-valley-uzbekistan-mountains-green-landscap.jpg",
  "aral-sea-expedition": "/aral-sea-ship-graveyard-desert-uzbekistan-dramatic.jpg",
}

export default function AdminToursPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { language } = useLanguage()
  const [tours, setTours] = useState<Tour[]>([])
  const [editingTour, setEditingTour] = useState<Tour | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin")
      return
    }
    setTours(getTours())
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const content = {
    uz: {
      title: "Turlarni boshqarish",
      addTour: "Tur qo'shish",
      editTour: "Turni tahrirlash",
      save: "Saqlash",
      cancel: "Bekor qilish",
      delete: "O'chirish",
      titleLabel: "Nomi",
      description: "Tavsif",
      duration: "Davomiyligi (kun)",
      price: "Narxi ($)",
      featured: "Mashhur",
      confirmDelete: "Haqiqatan ham o'chirmoqchimisiz?",
      reset: "Boshlang'ich holatga qaytarish",
    },
    ru: {
      title: "Управление турами",
      addTour: "Добавить тур",
      editTour: "Редактировать тур",
      save: "Сохранить",
      cancel: "Отмена",
      delete: "Удалить",
      titleLabel: "Название",
      description: "Описание",
      duration: "Продолжительность (дни)",
      price: "Цена ($)",
      featured: "Популярный",
      confirmDelete: "Вы уверены, что хотите удалить?",
      reset: "Сбросить к начальным",
    },
    en: {
      title: "Manage Tours",
      addTour: "Add Tour",
      editTour: "Edit Tour",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      titleLabel: "Title",
      description: "Description",
      duration: "Duration (days)",
      price: "Price ($)",
      featured: "Featured",
      confirmDelete: "Are you sure you want to delete?",
      reset: "Reset to default",
    },
  }

  const t = content[language]

  const handleSave = (tour: Tour) => {
    let updatedTours: Tour[]
    if (editingTour) {
      updatedTours = tours.map((t) => (t.id === tour.id ? tour : t))
    } else {
      tour.id = Date.now().toString()
      tour.slug = tour.title.en.toLowerCase().replace(/\s+/g, "-")
      updatedTours = [...tours, tour]
    }
    setTours(updatedTours)
    saveTours(updatedTours)
    setIsDialogOpen(false)
    setEditingTour(null)
  }

  const handleDelete = (id: string) => {
    if (confirm(t.confirmDelete)) {
      const updatedTours = tours.filter((t) => t.id !== id)
      setTours(updatedTours)
      saveTours(updatedTours)
    }
  }

  const handleReset = () => {
    setTours(defaultTours)
    saveTours(defaultTours)
  }

  const openEditDialog = (tour: Tour) => {
    setEditingTour(tour)
    setIsDialogOpen(true)
  }

  const openNewDialog = () => {
    setEditingTour(null)
    setIsDialogOpen(true)
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
                  {t.addTour}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingTour ? t.editTour : t.addTour}</DialogTitle>
                </DialogHeader>
                <TourForm tour={editingTour} onSave={handleSave} onCancel={() => setIsDialogOpen(false)} labels={t} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={tourImages[tour.slug] || tour.image}
                  alt={tour.title[language]}
                  fill
                  className="object-cover"
                />
                {tour.featured && (
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {language === "uz" ? "Mashhur" : language === "ru" ? "Популярный" : "Featured"}
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{tour.title[language]}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{tour.description[language]}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {tour.duration} {language === "uz" ? "kun" : language === "ru" ? "дней" : "days"}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <DollarSign className="w-4 h-4" />
                    {tour.price}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-1 bg-transparent"
                    onClick={() => openEditDialog(tour)}
                  >
                    <Pencil className="w-4 h-4" />
                    {language === "uz" ? "Tahrirlash" : language === "ru" ? "Изменить" : "Edit"}
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(tour.id)}>
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

function TourForm({
  tour,
  onSave,
  onCancel,
  labels,
}: {
  tour: Tour | null
  onSave: (tour: Tour) => void
  onCancel: () => void
  labels: Record<string, string>
}) {
  const [formData, setFormData] = useState<Tour>(
    tour || {
      id: "",
      slug: "",
      image: "/placeholder.svg?height=300&width=400",
      duration: 3,
      price: 350,
      featured: false,
      title: { uz: "", ru: "", en: "" },
      description: { uz: "", ru: "", en: "" },
      highlights: { uz: [], ru: [], en: [] },
    },
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          <Label>{labels.description} (UZ)</Label>
          <Textarea
            value={formData.description.uz}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: { ...formData.description, uz: e.target.value },
              })
            }
            rows={3}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.description} (RU)</Label>
          <Textarea
            value={formData.description.ru}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: { ...formData.description, ru: e.target.value },
              })
            }
            rows={3}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.description} (EN)</Label>
          <Textarea
            value={formData.description.en}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: { ...formData.description, en: e.target.value },
              })
            }
            rows={3}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>{labels.duration}</Label>
          <Input
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: Number.parseInt(e.target.value) })}
            min={1}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>{labels.price}</Label>
          <Input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number.parseInt(e.target.value) })}
            min={0}
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between py-2">
        <Label>{labels.featured}</Label>
        <Switch
          checked={formData.featured}
          onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
        />
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
