(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultNews",
    ()=>defaultNews,
    "defaultTours",
    ()=>defaultTours,
    "getNews",
    ()=>getNews,
    "getTours",
    ()=>getTours,
    "saveNews",
    ()=>saveNews,
    "saveTours",
    ()=>saveTours
]);
const defaultTours = [
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
            en: "Samarkand Classic Tour"
        },
        description: {
            uz: "Registon maydoni, Shohizinda, Gur-Amir maqbarasi va boshqa tarixiy obidalarni ziyorat qiling.",
            ru: "Посетите площадь Регистан, Шахи-Зинда, мавзолей Гур-Эмир и другие исторические памятники.",
            en: "Visit Registan Square, Shah-i-Zinda, Gur-e-Amir Mausoleum and other historical monuments."
        },
        highlights: {
            uz: [
                "Registon maydoni",
                "Shohizinda majmuasi",
                "Gur-Amir maqbarasi",
                "Bibihonim masjidi"
            ],
            ru: [
                "Площадь Регистан",
                "Комплекс Шахи-Зинда",
                "Мавзолей Гур-Эмир",
                "Мечеть Биби-Ханым"
            ],
            en: [
                "Registan Square",
                "Shah-i-Zinda Complex",
                "Gur-e-Amir Mausoleum",
                "Bibi-Khanym Mosque"
            ]
        }
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
            en: "Bukhara Adventure"
        },
        description: {
            uz: "Buxoroning qadimiy ko'chalari, Ark qal'asi, Kalon minorasi va boshqa diqqatga sazovor joylarni kashf eting.",
            ru: "Откройте древние улицы Бухары, крепость Арк, минарет Калян и другие достопримечательности.",
            en: "Discover the ancient streets of Bukhara, Ark Fortress, Kalyan Minaret and other attractions."
        },
        highlights: {
            uz: [
                "Ark qal'asi",
                "Kalon minorasi",
                "Labi-hovuz majmuasi",
                "Chor-Minor"
            ],
            ru: [
                "Крепость Арк",
                "Минарет Калян",
                "Комплекс Ляби-Хауз",
                "Чор-Минор"
            ],
            en: [
                "Ark Fortress",
                "Kalyan Minaret",
                "Lyab-i Hauz Complex",
                "Chor-Minor"
            ]
        }
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
            en: "Mysteries of Khiva"
        },
        description: {
            uz: "Ichan-Qal'a - ochiq osmon ostidagi muzey. Qadimiy shahar devorlari ichidagi hayotni his eting.",
            ru: "Ичан-Кала - музей под открытым небом. Почувствуйте жизнь внутри древних городских стен.",
            en: "Itchan Kala - an open-air museum. Feel the life inside the ancient city walls."
        },
        highlights: {
            uz: [
                "Ichan-Qal'a",
                "Kalta-Minor",
                "Tosh-Hovli saroyi",
                "Juma masjidi"
            ],
            ru: [
                "Ичан-Кала",
                "Кальта-Минор",
                "Дворец Таш-Хаули",
                "Джума-мечеть"
            ],
            en: [
                "Itchan Kala",
                "Kalta Minor",
                "Tash-Hauli Palace",
                "Juma Mosque"
            ]
        }
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
            en: "Grand Silk Road"
        },
        description: {
            uz: "Toshkent, Samarqand, Buxoro va Xivani o'z ichiga olgan keng qamrovli sayohat.",
            ru: "Масштабное путешествие, включающее Ташкент, Самарканд, Бухару и Хиву.",
            en: "A comprehensive journey including Tashkent, Samarkand, Bukhara and Khiva."
        },
        highlights: {
            uz: [
                "Toshkent",
                "Samarqand",
                "Buxoro",
                "Xiva",
                "Qizilqum cho'li"
            ],
            ru: [
                "Ташкент",
                "Самарканд",
                "Бухара",
                "Хива",
                "Пустыня Кызылкум"
            ],
            en: [
                "Tashkent",
                "Samarkand",
                "Bukhara",
                "Khiva",
                "Kyzylkum Desert"
            ]
        }
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
            en: "Fergana Valley"
        },
        description: {
            uz: "Farg'ona vodiysining go'zal tabiatini, hunarmandchilik an'analarini kashf eting.",
            ru: "Откройте красивую природу Ферганской долины и традиции ремесленничества.",
            en: "Discover the beautiful nature of Fergana Valley and craft traditions."
        },
        highlights: {
            uz: [
                "Rishton kulolchiligi",
                "Marg'ilon ipagi",
                "Qo'qon xonligi",
                "Chust pichoqlari"
            ],
            ru: [
                "Риштанская керамика",
                "Маргиланский шелк",
                "Кокандское ханство",
                "Чустские ножи"
            ],
            en: [
                "Rishtan Ceramics",
                "Margilan Silk",
                "Kokand Khanate",
                "Chust Knives"
            ]
        }
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
            en: "Aral Sea Expedition"
        },
        description: {
            uz: "Orol dengizi fojeasini ko'ring va Moynoq shahridagi kemalar qabristonini tashrif buyuring.",
            ru: "Увидьте трагедию Аральского моря и посетите кладбище кораблей в Муйнаке.",
            en: "Witness the Aral Sea tragedy and visit the ship graveyard in Moynaq."
        },
        highlights: {
            uz: [
                "Moynoq",
                "Kemalar qabristoni",
                "Ustyurt platosi",
                "Nukus san'at muzeyi"
            ],
            ru: [
                "Муйнак",
                "Кладбище кораблей",
                "Плато Устюрт",
                "Музей искусств Нукуса"
            ],
            en: [
                "Moynaq",
                "Ship Graveyard",
                "Ustyurt Plateau",
                "Nukus Art Museum"
            ]
        }
    }
];
const defaultNews = [
    {
        id: "1",
        slug: "uzbekistan-visa-free",
        image: "/uzbekistan-airport-travel-visa-passport.jpg",
        date: "2024-01-15",
        title: {
            uz: "O'zbekiston 90 dan ortiq davlat uchun vizasiz rejimni joriy qildi",
            ru: "Узбекистан ввел безвизовый режим для более чем 90 стран",
            en: "Uzbekistan introduces visa-free regime for over 90 countries"
        },
        excerpt: {
            uz: "2024-yildan boshlab ko'plab davlatlar fuqarolari O'zbekistonga vizasiz kirishlari mumkin.",
            ru: "С 2024 года граждане многих стран могут въезжать в Узбекистан без визы.",
            en: "From 2024, citizens of many countries can enter Uzbekistan without a visa."
        },
        content: {
            uz: "O'zbekiston hukumati turizmni rivojlantirish maqsadida 90 dan ortiq davlat fuqarolari uchun vizasiz rejimni joriy qildi. Bu qaror mamlakatimizga tashrif buyuruvchi sayyohlar sonini sezilarli darajada oshirishi kutilmoqda.",
            ru: "Правительство Узбекистана ввело безвизовый режим для граждан более чем 90 стран с целью развития туризма. Ожидается, что это решение значительно увеличит количество туристов, посещающих нашу страну.",
            en: "The Government of Uzbekistan has introduced a visa-free regime for citizens of more than 90 countries to develop tourism. This decision is expected to significantly increase the number of tourists visiting our country."
        }
    },
    {
        id: "2",
        slug: "samarkand-unesco",
        image: "/samarkand-registan-unesco-world-heritage-site.jpg",
        date: "2024-01-10",
        title: {
            uz: "Samarqand YUNESKO ro'yxatiga yangi obyekt qo'shdi",
            ru: "Самарканд добавил новый объект в список ЮНЕСКО",
            en: "Samarkand adds new site to UNESCO list"
        },
        excerpt: {
            uz: "Samarqanddagi yana bir tarixiy obyekt YUNESKO jahon merosi ro'yxatiga kiritildi.",
            ru: "Еще один исторический объект в Самарканде включен в список Всемирного наследия ЮНЕСКО.",
            en: "Another historical site in Samarkand has been added to the UNESCO World Heritage List."
        },
        content: {
            uz: "Samarqand shahridagi yana bir tarixiy-madaniy obyekt YUNESKO jahon merosi ro'yxatiga kiritildi. Bu qaror shaharning jahon miqyosidagi ahamiyatini yana bir bor tasdiqlaydi.",
            ru: "Еще один историко-культурный объект в Самарканде включен в список Всемирного наследия ЮНЕСКО. Это решение еще раз подтверждает мировое значение города.",
            en: "Another historical and cultural site in Samarkand has been added to the UNESCO World Heritage List. This decision once again confirms the global significance of the city."
        }
    },
    {
        id: "3",
        slug: "high-speed-train",
        image: "/high-speed-train-uzbekistan-modern-railway-afrosiy.jpg",
        date: "2024-01-05",
        title: {
            uz: "Toshkent-Buxoro tezkor poyezd yo'nalishi kengaytirildi",
            ru: "Расширен маршрут скоростного поезда Ташкент-Бухара",
            en: "Tashkent-Bukhara high-speed train route expanded"
        },
        excerpt: {
            uz: "Afrosiyob tezkor poyezdi endi Xivagacha qatnavni boshladi.",
            ru: "Скоростной поезд Афросиаб теперь курсирует до Хивы.",
            en: "The Afrosiyob high-speed train now runs to Khiva."
        },
        content: {
            uz: "Afrosiyob tezkor poyezdi marshrutlari kengaytirildi va endi poyezd Xiva shahrigacha qatnamoqda. Bu o'zgarish sayyohlar uchun qulayliklarni oshiradi.",
            ru: "Маршруты скоростного поезда Афросиаб расширены, и теперь поезд курсирует до Хивы. Это изменение повышает удобство для туристов.",
            en: "The Afrosiyob high-speed train routes have been expanded and now the train runs to Khiva. This change increases convenience for tourists."
        }
    }
];
function getTours() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem("tours");
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch  {
            return defaultTours;
        }
    }
    return defaultTours;
}
function saveTours(tours) {
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem("tours", JSON.stringify(tours));
    }
}
function getNews() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem("news");
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch  {
            return defaultNews;
        }
    }
    return defaultNews;
}
function saveNews(news) {
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem("news", JSON.stringify(news));
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/news/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const newsImages = {
    "uzbekistan-visa-free": "/uzbekistan-airport-travel-visa-passport.jpg",
    "samarkand-unesco": "/samarkand-registan-unesco-world-heritage-site.jpg",
    "high-speed-train": "/high-speed-train-uzbekistan-modern-railway-afrosiy.jpg"
};
function NewsPage() {
    _s();
    const { language, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsPage.useEffect": ()=>{
            setNews((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNews"])());
        }
    }["NewsPage.useEffect"], []);
    const formatDate = (dateStr)=>{
        const date = new Date(dateStr);
        return date.toLocaleDateString(language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-[350px] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/samarkand-registan-unesco-world-heritage-site.jpg",
                        alt: "News",
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/news/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-foreground/60"
                    }, void 0, false, {
                        fileName: "[project]/app/news/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative container mx-auto px-4 h-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold text-white mb-4",
                                    children: t.news.title
                                }, void 0, false, {
                                    fileName: "[project]/app/news/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/90 text-lg max-w-2xl mx-auto",
                                    children: t.news.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/news/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/news/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/news/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/news/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 md:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: news.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "overflow-hidden group hover:shadow-xl transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-52 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: newsImages[item.slug] || item.image,
                                            alt: item.title[language],
                                            fill: true,
                                            className: "object-cover group-hover:scale-110 transition-transform duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/news/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/news/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-muted-foreground text-sm mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/news/page.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: formatDate(item.date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/news/page.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/news/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-foreground text-lg mb-3 line-clamp-2",
                                                children: item.title[language]
                                            }, void 0, false, {
                                                fileName: "[project]/app/news/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-sm mb-4 line-clamp-3",
                                                children: item.excerpt[language]
                                            }, void 0, false, {
                                                fileName: "[project]/app/news/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/news/${item.slug}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "w-full gap-2 bg-transparent",
                                                    children: [
                                                        t.news.readMore,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/news/page.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/news/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/news/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/news/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/app/news/page.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/news/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/news/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/news/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/news/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(NewsPage, "P2MOgPLGBJfYGhwtKic0LWMxGpg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = NewsPage;
var _c;
__turbopack_context__.k.register(_c, "NewsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_05153106._.js.map