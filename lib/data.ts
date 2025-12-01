export type Tour = {
  id: string
  slug: string
  image: string
  duration: number
  price: number
  featured: boolean
  title: {
    uz: string
    ru: string
    en: string
  }
  description: {
    uz: string
    ru: string
    en: string
  }
  highlights: {
    uz: string[]
    ru: string[]
    en: string[]
  }
}

export type NewsItem = {
  id: string
  slug: string
  image: string
  date: string
  title: {
    uz: string
    ru: string
    en: string
  }
  excerpt: {
    uz: string
    ru: string
    en: string
  }
  content: {
    uz: string
    ru: string
    en: string
  }
}

export const defaultTours: Tour[] = [
  {
    id: "1",
    slug: "samarkand-classic",
    image: "/registan-samarkand-uzbekistan-ancient-architecture.jpg",
    duration: 3,
    price: 350,
    featured: true,
    title: {
      uz: "Samarqand klassik turi",
      ru: "Классический тур в Самарканд",
      en: "Samarkand Classic Tour",
    },
    description: {
      uz: "Registon maydoni, Shohizinda, Gur-Amir maqbarasi va boshqa tarixiy obidalarni ziyorat qiling.",
      ru: "Посетите площадь Регистан, Шахи-Зинда, мавзолей Гур-Эмир и другие исторические памятники.",
      en: "Visit Registan Square, Shah-i-Zinda, Gur-e-Amir Mausoleum and other historical monuments.",
    },
    highlights: {
      uz: ["Registon maydoni", "Shohizinda majmuasi", "Gur-Amir maqbarasi", "Bibihonim masjidi"],
      ru: ["Площадь Регистан", "Комплекс Шахи-Зинда", "Мавзолей Гур-Эмир", "Мечеть Биби-Ханым"],
      en: ["Registan Square", "Shah-i-Zinda Complex", "Gur-e-Amir Mausoleum", "Bibi-Khanym Mosque"],
    },
  },
  {
    id: "2",
    slug: "bukhara-adventure",
    image: "/bukhara-uzbekistan-kalyan-minaret-ancient-city.jpg",
    duration: 4,
    price: 450,
    featured: true,
    title: {
      uz: "Buxoro sarguzashti",
      ru: "Приключение в Бухаре",
      en: "Bukhara Adventure",
    },
    description: {
      uz: "Buxoroning qadimiy ko'chalari, Ark qal'asi, Kalon minorasi va boshqa diqqatga sazovor joylarni kashf eting.",
      ru: "Откройте древние улицы Бухары, крепость Арк, минарет Калян и другие достопримечательности.",
      en: "Discover the ancient streets of Bukhara, Ark Fortress, Kalyan Minaret and other attractions.",
    },
    highlights: {
      uz: ["Ark qal'asi", "Kalon minorasi", "Labi-hovuz majmuasi", "Chor-Minor"],
      ru: ["Крепость Арк", "Минарет Калян", "Комплекс Ляби-Хауз", "Чор-Минор"],
      en: ["Ark Fortress", "Kalyan Minaret", "Lyab-i Hauz Complex", "Chor-Minor"],
    },
  },
  {
    id: "3",
    slug: "khiva-mystery",
    image: "/khiva-itchan-kala-ancient-walled-city-uzbekistan.jpg",
    duration: 3,
    price: 380,
    featured: true,
    title: {
      uz: "Xiva sirlari",
      ru: "Тайны Хивы",
      en: "Mysteries of Khiva",
    },
    description: {
      uz: "Ichan-Qal'a - ochiq osmon ostidagi muzey. Qadimiy shahar devorlari ichidagi hayotni his eting.",
      ru: "Ичан-Кала - музей под открытым небом. Почувствуйте жизнь внутри древних городских стен.",
      en: "Itchan Kala - an open-air museum. Feel the life inside the ancient city walls.",
    },
    highlights: {
      uz: ["Ichan-Qal'a", "Kalta-Minor", "Tosh-Hovli saroyi", "Juma masjidi"],
      ru: ["Ичан-Кала", "Кальта-Минор", "Дворец Таш-Хаули", "Джума-мечеть"],
      en: ["Itchan Kala", "Kalta Minor", "Tash-Hauli Palace", "Juma Mosque"],
    },
  },
  {
    id: "4",
    slug: "silk-road-grand",
    image: "/silk-road-caravan-camels-desert-uzbekistan-sunset.jpg",
    duration: 10,
    price: 1200,
    featured: true,
    title: {
      uz: "Buyuk Ipak Yo'li",
      ru: "Великий Шелковый путь",
      en: "Grand Silk Road",
    },
    description: {
      uz: "Toshkent, Samarqand, Buxoro va Xivani o'z ichiga olgan keng qamrovli sayohat.",
      ru: "Масштабное путешествие, включающее Ташкент, Самарканд, Бухару и Хиву.",
      en: "A comprehensive journey including Tashkent, Samarkand, Bukhara and Khiva.",
    },
    highlights: {
      uz: ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Qizilqum cho'li"],
      ru: ["Ташкент", "Самарканд", "Бухара", "Хива", "Пустыня Кызылкум"],
      en: ["Tashkent", "Samarkand", "Bukhara", "Khiva", "Kyzylkum Desert"],
    },
  },
  {
    id: "5",
    slug: "fergana-valley",
    image: "/fergana-valley-uzbekistan-mountains-green-landscap.jpg",
    duration: 5,
    price: 520,
    featured: false,
    title: {
      uz: "Farg'ona vodiysi",
      ru: "Ферганская долина",
      en: "Fergana Valley",
    },
    description: {
      uz: "Farg'ona vodiysining go'zal tabiatini, hunarmandchilik an'analarini kashf eting.",
      ru: "Откройте красивую природу Ферганской долины и традиции ремесленничества.",
      en: "Discover the beautiful nature of Fergana Valley and craft traditions.",
    },
    highlights: {
      uz: ["Rishton kulolchiligi", "Marg'ilon ipagi", "Qo'qon xonligi", "Chust pichoqlari"],
      ru: ["Риштанская керамика", "Маргиланский шелк", "Кокандское ханство", "Чустские ножи"],
      en: ["Rishtan Ceramics", "Margilan Silk", "Kokand Khanate", "Chust Knives"],
    },
  },
  {
    id: "6",
    slug: "aral-sea-expedition",
    image: "/aral-sea-ship-graveyard-desert-uzbekistan-dramatic.jpg",
    duration: 4,
    price: 680,
    featured: false,
    title: {
      uz: "Orol dengizi ekspeditsiyasi",
      ru: "Экспедиция на Аральское море",
      en: "Aral Sea Expedition",
    },
    description: {
      uz: "Orol dengizi fojeasini ko'ring va Moynoq shahridagi kemalar qabristonini tashrif buyuring.",
      ru: "Увидьте трагедию Аральского моря и посетите кладбище кораблей в Муйнаке.",
      en: "Witness the Aral Sea tragedy and visit the ship graveyard in Moynaq.",
    },
    highlights: {
      uz: ["Moynoq", "Kemalar qabristoni", "Ustyurt platosi", "Nukus san'at muzeyi"],
      ru: ["Муйнак", "Кладбище кораблей", "Плато Устюрт", "Музей искусств Нукуса"],
      en: ["Moynaq", "Ship Graveyard", "Ustyurt Plateau", "Nukus Art Museum"],
    },
  },
]

export const defaultNews: NewsItem[] = [
  {
    id: "1",
    slug: "uzbekistan-visa-free",
    image: "/uzbekistan-airport-travel-visa-passport.jpg",
    date: "2024-01-15",
    title: {
      uz: "O'zbekiston 90 dan ortiq davlat uchun vizasiz rejimni joriy qildi",
      ru: "Узбекистан ввел безвизовый режим для более чем 90 стран",
      en: "Uzbekistan introduces visa-free regime for over 90 countries",
    },
    excerpt: {
      uz: "2024-yildan boshlab ko'plab davlatlar fuqarolari O'zbekistonga vizasiz kirishlari mumkin.",
      ru: "С 2024 года граждане многих стран могут въезжать в Узбекистан без визы.",
      en: "From 2024, citizens of many countries can enter Uzbekistan without a visa.",
    },
    content: {
      uz: "O'zbekiston hukumati turizmni rivojlantirish maqsadida 90 dan ortiq davlat fuqarolari uchun vizasiz rejimni joriy qildi. Bu qaror mamlakatimizga tashrif buyuruvchi sayyohlar sonini sezilarli darajada oshirishi kutilmoqda.",
      ru: "Правительство Узбекистана ввело безвизовый режим для граждан более чем 90 стран с целью развития туризма. Ожидается, что это решение значительно увеличит количество туристов, посещающих нашу страну.",
      en: "The Government of Uzbekistan has introduced a visa-free regime for citizens of more than 90 countries to develop tourism. This decision is expected to significantly increase the number of tourists visiting our country.",
    },
  },
  {
    id: "2",
    slug: "samarkand-unesco",
    image: "/samarkand-registan-unesco-world-heritage-site.jpg",
    date: "2024-01-10",
    title: {
      uz: "Samarqand YUNESKO ro'yxatiga yangi obyekt qo'shdi",
      ru: "Самарканд добавил новый объект в список ЮНЕСКО",
      en: "Samarkand adds new site to UNESCO list",
    },
    excerpt: {
      uz: "Samarqanddagi yana bir tarixiy obyekt YUNESKO jahon merosi ro'yxatiga kiritildi.",
      ru: "Еще один исторический объект в Самарканде включен в список Всемирного наследия ЮНЕСКО.",
      en: "Another historical site in Samarkand has been added to the UNESCO World Heritage List.",
    },
    content: {
      uz: "Samarqand shahridagi yana bir tarixiy-madaniy obyekt YUNESKO jahon merosi ro'yxatiga kiritildi. Bu qaror shaharning jahon miqyosidagi ahamiyatini yana bir bor tasdiqlaydi.",
      ru: "Еще один историко-культурный объект в Самарканде включен в список Всемирного наследия ЮНЕСКО. Это решение еще раз подтверждает мировое значение города.",
      en: "Another historical and cultural site in Samarkand has been added to the UNESCO World Heritage List. This decision once again confirms the global significance of the city.",
    },
  },
  {
    id: "3",
    slug: "high-speed-train",
    image: "/high-speed-train-uzbekistan-modern-railway-afrosiy.jpg",
    date: "2024-01-05",
    title: {
      uz: "Toshkent-Buxoro tezkor poyezd yo'nalishi kengaytirildi",
      ru: "Расширен маршрут скоростного поезда Ташкент-Бухара",
      en: "Tashkent-Bukhara high-speed train route expanded",
    },
    excerpt: {
      uz: "Afrosiyob tezkor poyezdi endi Xivagacha qatnavni boshladi.",
      ru: "Скоростной поезд Афросиаб теперь курсирует до Хивы.",
      en: "The Afrosiyob high-speed train now runs to Khiva.",
    },
    content: {
      uz: "Afrosiyob tezkor poyezdi marshrutlari kengaytirildi va endi poyezd Xiva shahrigacha qatnamoqda. Bu o'zgarish sayyohlar uchun qulayliklarni oshiradi.",
      ru: "Маршруты скоростного поезда Афросиаб расширены, и теперь поезд курсирует до Хивы. Это изменение повышает удобство для туристов.",
      en: "The Afrosiyob high-speed train routes have been expanded and now the train runs to Khiva. This change increases convenience for tourists.",
    },
  },
]

// Helper functions for localStorage
export function getTours(): Tour[] {
  if (typeof window === "undefined") return defaultTours
  const stored = localStorage.getItem("tours")
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return defaultTours
    }
  }
  return defaultTours
}

export function saveTours(tours: Tour[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("tours", JSON.stringify(tours))
  }
}

export function getNews(): NewsItem[] {
  if (typeof window === "undefined") return defaultNews
  const stored = localStorage.getItem("news")
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return defaultNews
    }
  }
  return defaultNews
}

export function saveNews(news: NewsItem[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("news", JSON.stringify(news))
  }
}
