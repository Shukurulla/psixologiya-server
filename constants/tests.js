// Barcha psixologik testlar
export const PSYCHOLOGICAL_TESTS = [
  {
    code: "LONELINESS_KORCHAGIN",
    name: "Yolg'izlik so'rovnomasi (S.G. Korchagin)",
    description: "Yolg'izlik kechinmalarini diagnostika qilish",
    instruction:
      "Sizga 12 ta savol va 4 ta javoblar varianti taqdim etiladi. O'zingiz haqingizdagi tasavvuringizga mosini tanlang.",
    estimatedTime: 10,
    isSensitive: false,
    order: 1,
    scoringMethod: "sum",
    questions: [
      {
        id: 1,
        text: "Shunday bo'lishi ham mumkinki, yaqinlaringiz (do'stlaringiz) xayrihohlik qilmaydi.",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 2,
        text: "Sizda haqiqatan ham hech kimga kerak emassan, degan fikr tug'iladimi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 3,
        text: "Sizda dunyoda hamma unutib tashlab ketgandek hissiyot bo'ladimi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 4,
        text: "Do'stona muloqotda kamchiliklar sezasizmi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 5,
        text: "Sizda qaytib kelmas bo'lgan, butunlay yo'qotilgan narsalarni sog'inish hissi bo'ladimi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 6,
        text: "Siz haqiqiy insoniy muloqotlarga imkoniyat bermaydigan yuqori ijtimoiy aloqalar yuklatilganligini his qilasizmi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 7,
        text: "Sizda boshqa odamlarga tobelik hissi bormi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 8,
        text: "Siz boshqalarning g'amiga sherik bo'la olasizmi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 9,
        text: "Siz o'z hamdardligingizni, qayg'udoshligingizni, nuqtayi nazaringizni ifodalay olasizmi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 10,
        text: "Bir odamning omadi chopishi Sizning sha'ningizga tekkan paytlar bo'ladimi, o'zingizning omadsizligingizdan afsulanasizmi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 11,
        text: "Og'ir hayotiy vaziyatlarda o'zingizning mustaqil qaroringizni ayta olasizmi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
      {
        id: 12,
        text: "Hayotiy masalalarni mustaqil hal qilish uchun Sizda yetarli imkoniyatlar zahirasi borligini his qilasizmi?",
        options: [
          { value: "a", label: "Har doim", score: 4 },
          { value: "b", label: "Tez-tez", score: 3 },
          { value: "c", label: "Ba'zida", score: 2 },
          { value: "d", label: "Hech qachon", score: 1 },
        ],
      },
    ],
    interpretation: [
      {
        min: 12,
        max: 16,
        level: "Normal",
        description: "Hozir yolg'izlikdan tashvishlanmayotgan odam",
        severity: "normal",
      },
      {
        min: 17,
        max: 27,
        level: "Yengil",
        description: "Mumkin bo'lgan yolg'izlikning yengil tashvishlari",
        severity: "mild",
      },
      {
        min: 28,
        max: 38,
        level: "O'rta",
        description: "Yolg'izlikning og'ir tashvishlari",
        severity: "moderate",
      },
      {
        min: 39,
        max: 48,
        level: "Og'ir",
        description: "Yolg'izlikning juda og'ir tashvishlari",
        severity: "severe",
      },
    ],
  },

  {
    code: "LONELINESS_RUSSELL",
    name: "Yolg'izlikni subjektiv his qilish darajasi (Russell-Ferguson)",
    description:
      "D.Russell va M.Fergusonning yolg'izlikni subjektiv his qilish darajasi diagnostikasi",
    instruction:
      "Har bir fikrni ko'rib chiqing va ularning Sizning hayotingizga muvofiq ravishda paydo bo'lish tezligi nuqtai nazaridan 4 xil variant yordamida baholang.",
    estimatedTime: 15,
    isSensitive: false,
    order: 2,
    scoringMethod: "custom",
    questions: [
      {
        id: 1,
        text: "Men baxtsizman, shuncha narsalar bilan bir o'zim shug'ullanyapman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 2,
        text: "Bironta gaplashadigan odamim yo'q.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 3,
        text: "Yolg'izligimga chiday olmayapman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 4,
        text: "Menga muloqot yetishmaydi.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 5,
        text: "Meni huddi hech kim tushunmayotgandek his qilaman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 6,
        text: "Odamlar menga qo'ng'iroq qiladi, xat yozadi, deb o'zimni kutishga majburlayapman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 7,
        text: "Murojaat qilishim mumkin bo'lgan bironta odam yo'q.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 8,
        text: "Men hozir hech kim bilan yaqin emasman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 9,
        text: "Atrofimdagilar mening qiziqishlarim va fikrlarim bilan o'rtoqlashmaydilar.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 10,
        text: "Men o'zimni tashlab ketilgandek his qilaman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 11,
        text: "Men asoratlardan qutulib, atrofimdagilar bilan muloqotda bo'lolmayman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 12,
        text: "Men o'zimni juda yolg'iz his qilaman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 13,
        text: "Mening ijtimoiy ahvolim va yuzaki aloqalarim.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 14,
        text: "Menga o'rtoqlar yetishmaydi.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 15,
        text: "Haqiqatdan hech kim meni yetarlicha bilmaydi.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 16,
        text: "Men o'zimni boshqalardan yakkalanib qolgandek his qilaman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 17,
        text: "Men baxtsizman, huddi xo'rlangandek.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 18,
        text: "Do'st orttirishim qiyin.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 19,
        text: "Men o'zimni boshqalardan yakkalanib qolgandek his qilaman.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
      {
        id: 20,
        text: "Atrofimda odamlar bor, lekin ular men bilan emas.",
        options: [
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "ba'zida", label: "Ba'zida", score: 2 },
          { value: "kamdan-kam", label: "Kamdan-kam", score: 1 },
          { value: "hech-qachon", label: "Hech qachon", score: 0 },
        ],
      },
    ],
    interpretation: [
      {
        min: 0,
        max: 20,
        level: "Past",
        description: "Yolg'izlikning past darajasi",
        severity: "normal",
      },
      {
        min: 21,
        max: 40,
        level: "O'rtacha",
        description: "Yolg'izlikning o'rtacha darajasi",
        severity: "mild",
      },
      {
        min: 41,
        max: 60,
        level: "Yuqori",
        description: "Yolg'izlikning yuqori darajasi",
        severity: "severe",
      },
    ],
  },
  {
    code: "NEURASTHENIA",
    name: "Nevrasteniyani aniqlash (Ibodullayev shkalasi)",
    description: "Nevrasteniyani aniqlashning ekspress shkalasi",
    instruction:
      "Quyidagi belgilar sizda kuzatiladimi? Ha yoki Yo'q deb javob bering.",
    estimatedTime: 5,
    isSensitive: false,
    order: 3,
    scoringMethod: "sum",
    questions: [
      {
        id: 1,
        text: "Tez asabiylashish va jahldorlik",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 2,
        text: "Ruhiy, aqliy va jismoniy toliqishlar",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 3,
        text: "Diqqat tarqoqligi va eslab qolish qiyinligi",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 4,
        text: "Fikrini bir joyga jamlay olmaslik",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 5,
        text: "Uyquga ketish qiyinligi, yomon tushlar ko'rish",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 6,
        text: "Kunduzgi uyquchanlik, tungi uyqusizlik",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 7,
        text: "Tez xafa bo'lish, darrov ko'zi yoshlanishi",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 8,
        text: "Jismoniy mehnatga ishtiyoq yo'qligi",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 9,
        text: "Tushkun kayfiyat va hissiy portlashlar",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 10,
        text: "Qo'rquv, xavotir, vahima kuzatilishi",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 11,
        text: "Bosh og'rishi, bosh aylanishi, yurak bezovtaligi, ishtaha yo'qolishi yoki kuchayishi, tanada turli og'riqlar",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 12,
        text: "Shovqin-suronli joylarni yoqtirmaslik, yolg'izlikka moyillik, chidamsizlik",
        options: [
          { value: "ha", label: "Ha", score: 1 },
          { value: "yoq", label: "Yo'q", score: 0 },
        ],
      },
    ],
    interpretation: [
      {
        min: 0,
        max: 4,
        level: "Normal",
        description: "Odatiy holat (norma)",
        severity: "normal",
      },
      {
        min: 5,
        max: 8,
        level: "Yengil",
        description: "Yengil nevrasteniya",
        severity: "mild",
      },
      {
        min: 9,
        max: 12,
        level: "Yaqqol",
        description: "Yaqqol nevrasteniya",
        severity: "severe",
      },
    ],
  },

  {
    code: "SUNG_DEPRESSION",
    name: "Sung depressiya shkalasi",
    description: "Depressiyani baholash uchun Sung so'rovnomasi",
    instruction:
      "Har bir savolni diqqat bilan o'qing va aynan hozirgi paytda o'zingizni qanday his qilayotgan bo'lsangiz, shunga mos javobni belgilang.",
    estimatedTime: 10,
    isSensitive: true,
    order: 4,
    scoringMethod: "custom",
    reversedScoreQuestions: [2, 5, 6, 11, 12, 14, 16, 17, 18, 20],
    questions: [
      {
        id: 1,
        text: "Men tushkunlikni his qilyapman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 2,
        text: "Ertalab o'zimni juda yaxshi his qilaman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 3,
        text: "Men yig'lab turaman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 4,
        text: "Men tunda yomon uxlayman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 5,
        text: "Ishtaham yomon emas, ya'ni odatiy",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 6,
        text: "Menga yoqqan odamlar bilan suhbatlashgim, ularning yonida bo'lgim keladi",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 7,
        text: "Men vaznimni yo'qotayotganimni sezyapman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 8,
        text: "Meni qabziyat bezovta qiladi",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 9,
        text: "Yuragim odatdagidan tezroq uradi",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 10,
        text: "Men hech qanday sababsiz charchayman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 11,
        text: "Fikrlarim har doimgidek aniq va ravshan",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 12,
        text: "Qo'limdan keladigan ishlarni osonlikcha bajaraman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 13,
        text: "Bezovtalikni his qilyapman va bir joyda o'tira olmayapman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 14,
        text: "Menda kelajakka ishonch bor",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 15,
        text: "Jahlim odatdagidan tezroq chiqyapti",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 16,
        text: "Bir qarorga kelishim juda oson",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 17,
        text: "Men foydali va zarur ekanligimni his qilaman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 18,
        text: "Men to'laqonli hayot kechiryapman",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
      {
        id: 19,
        text: "Mensiz boshqalarga yengil bo'ladigandek tuyuladi",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 1 },
          { value: "ba'zan", label: "Ba'zan", score: 2 },
          { value: "tez-tez", label: "Tez-tez", score: 3 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 4 },
        ],
      },
      {
        id: 20,
        text: "Meni avvallari xursand qiladigan narsalar hozir ham xursand qiladi",
        options: [
          { value: "hech-qachon", label: "Hech qachon", score: 4 },
          { value: "ba'zan", label: "Ba'zan", score: 3 },
          { value: "tez-tez", label: "Tez-tez", score: 2 },
          { value: "deyarli-har-doim", label: "Deyarli har doim", score: 1 },
        ],
      },
    ],
    interpretation: [
      {
        min: 25,
        max: 49,
        level: "Normal",
        description: "Depressiya yo'q",
        severity: "normal",
      },
      {
        min: 50,
        max: 59,
        level: "Yengil",
        description: "Yengil depressiya",
        severity: "mild",
      },
      {
        min: 60,
        max: 69,
        level: "O'rta",
        description: "O'rta darajali depressiya",
        severity: "moderate",
      },
      {
        min: 70,
        max: 100,
        level: "Og'ir",
        description: "Og'ir depressiya",
        severity: "severe",
      },
    ],
  },

  {
    code: "HADS",
    name: "Xavotir va Depressiyaning Gospital Shkalasi (HADS)",
    description:
      "Hospital Anxiety and Depression Scale - xavotir va depressiyani aniqlash",
    instruction:
      "Har bir savolni diqqat bilan o'qib chiqing va xayolingizga kelgan javobning raqamini belgilang.",
    estimatedTime: 15,
    isSensitive: true,
    order: 5,
    scoringMethod: "category",
    categories: [
      { name: "anxiety", questionIds: [1, 3, 5, 7, 9, 11, 13] },
      { name: "depression", questionIds: [2, 4, 6, 8, 10, 12, 14] },
    ],
    questions: [
      {
        id: 1,
        text: "Mening asablarim taranglashgan. O'zimni qo'yishga joy topa olmayapman",
        category: "anxiety",
        options: [
          { value: "0", label: "Aslo unday emas", score: 0 },
          { value: "1", label: "Ba'zida", score: 1 },
          { value: "2", label: "Tez-tez", score: 2 },
          { value: "3", label: "Har doim", score: 3 },
        ],
      },
      {
        id: 2,
        text: "Menda katta qoniqish hissini uyg'otgan holatlar, hozir ham shunday his-tuyg'ularni uyg'otadi",
        category: "depression",
        options: [
          { value: "0", label: "Xuddi shunday", score: 0 },
          { value: "1", label: "Shunday bo'lsa kerak", score: 1 },
          { value: "2", label: "Juda kam holatlarda", score: 2 },
          { value: "3", label: "Aslo bunday emas", score: 3 },
        ],
      },
      {
        id: 3,
        text: "Meni qo'rquv va xavotir bosyapti. Hozir men bilan dahshatli voqea sodir bo'ladigandek tuyulyapti",
        category: "anxiety",
        options: [
          { value: "0", label: "Aslo bunday emas", score: 0 },
          {
            value: "1",
            label: "Ba'zan, biroq bundan men bezovta emasman",
            score: 1,
          },
          {
            value: "2",
            label: "Ha, shunday, biroq qo'rquv uncha kuchli emas",
            score: 2,
          },
          {
            value: "3",
            label: "Xuddi shunday va qo'rquv o'ta kuchli",
            score: 3,
          },
        ],
      },
      {
        id: 4,
        text: "Men u yoki bu voqealarda kulgili vaziyatlarni topa olish va xoxolab kulish qobiliyatiga egaman",
        category: "depression",
        options: [
          { value: "0", label: "Xuddi shunday", score: 0 },
          { value: "1", label: "Shunday bo'lsa kerak", score: 1 },
          { value: "2", label: "Juda kam holatlarda", score: 2 },
          { value: "3", label: "Aslo bunday emas", score: 3 },
        ],
      },
      {
        id: 5,
        text: "Menga tinchlik bermaydigan fikrlar miyamni chulg'ab olgan",
        category: "anxiety",
        options: [
          { value: "0", label: "Deyarli kuzatilmaydi", score: 0 },
          { value: "1", label: "Kam holatlarda", score: 1 },
          { value: "2", label: "Ba'zi-ba'zida", score: 2 },
          { value: "3", label: "Deyarli har doim", score: 3 },
        ],
      },
      {
        id: 6,
        text: "Men o'zimni tetik his qilaman",
        category: "depression",
        options: [
          { value: "0", label: "Deyarli har doim", score: 0 },
          { value: "1", label: "Ko'p holatlarda", score: 1 },
          { value: "2", label: "Juda kam holatlarda", score: 2 },
          { value: "3", label: "Aslo bunday emas", score: 3 },
        ],
      },
      {
        id: 7,
        text: "Men bemalol o'tirib tinchlana olaman",
        category: "anxiety",
        options: [
          { value: "0", label: "Xuddi shunday", score: 0 },
          { value: "1", label: "Shunday bo'lsa kerak", score: 1 },
          { value: "2", label: "Ba'zida", score: 2 },
          { value: "3", label: "Aslo bunday emas", score: 3 },
        ],
      },
      {
        id: 8,
        text: "Go'yoki hamma ishlarni sekin qilayotgandekman",
        category: "depression",
        options: [
          { value: "0", label: "Aslo unday emas", score: 0 },
          { value: "1", label: "Ba'zan", score: 1 },
          { value: "2", label: "Tez-tez", score: 2 },
          { value: "3", label: "Deyarli har doim", score: 3 },
        ],
      },
      {
        id: 9,
        text: "Men ichki taranglikni va titroqni his qilaman",
        category: "anxiety",
        options: [
          { value: "0", label: "Aslo his qilmayman", score: 0 },
          { value: "1", label: "Ba'zida", score: 1 },
          { value: "2", label: "Tez-tez", score: 2 },
          { value: "3", label: "Deyarli har doim", score: 3 },
        ],
      },
      {
        id: 10,
        text: "Men tashqi ko'rinishimga e'tibor qilmay qo'ydim",
        category: "depression",
        options: [
          {
            value: "0",
            label: "Men o'zimga alohida e'tibor qilaman",
            score: 0,
          },
          {
            value: "1",
            label: "Balki bunga kam e'tibor qaratayotgandirman",
            score: 1,
          },
          { value: "2", label: "Bunga vaqt topa olmayapman", score: 2 },
          { value: "3", label: "Ha, xuddi shunday", score: 3 },
        ],
      },
      {
        id: 11,
        text: "Men bir joyda tinch o'tira olmayman, doim behalovatman",
        category: "anxiety",
        options: [
          { value: "0", label: "Unday emas", score: 0 },
          { value: "1", label: "Ba'zida", score: 1 },
          { value: "2", label: "Shunday bo'lsa kerak", score: 2 },
          { value: "3", label: "Xuddi shunday", score: 3 },
        ],
      },
      {
        id: 12,
        text: "Qilayotgan ishlarim menda qoniqish hissini hosil qiladi",
        category: "depression",
        options: [
          { value: "0", label: "Xuddi shunday", score: 0 },
          { value: "1", label: "Ha, biroq avvalgidek emas", score: 1 },
          { value: "2", label: "Juda kam holatlarda", score: 2 },
          { value: "3", label: "Aslo sezmayman", score: 3 },
        ],
      },
      {
        id: 13,
        text: "Meni birdan vahima bosadi",
        category: "anxiety",
        options: [
          { value: "0", label: "Aslo unday emas", score: 0 },
          { value: "1", label: "Ba'zida", score: 1 },
          { value: "2", label: "Tez-tez", score: 2 },
          { value: "3", label: "Haqiqatan ham, juda ko'p", score: 3 },
        ],
      },
      {
        id: 14,
        text: "Menda yaxshi kitob, film, radio va teleko'rsatuvlar qoniqish hissini uyg'otadi",
        category: "depression",
        options: [
          { value: "0", label: "Tez-tez", score: 0 },
          { value: "1", label: "Ba'zida", score: 1 },
          { value: "2", label: "Kam hollarda", score: 2 },
          { value: "3", label: "Juda kam", score: 3 },
        ],
      },
    ],
    interpretation: [
      {
        min: 0,
        max: 7,
        level: "Normal",
        description: "Me'yor (xavotir va depressiya yo'q)",
        severity: "normal",
        categories: {
          anxiety: { min: 0, max: 7 },
          depression: { min: 0, max: 7 },
        },
      },
      {
        min: 8,
        max: 10,
        level: "Subklinik",
        description: "Subklinik xavotir va depressiya",
        severity: "mild",
        categories: {
          anxiety: { min: 8, max: 10 },
          depression: { min: 8, max: 10 },
        },
      },
      {
        min: 11,
        max: 21,
        level: "Klinik",
        description: "Klinik darajadagi xavotir va depressiya",
        severity: "severe",
        categories: {
          anxiety: { min: 11, max: 21 },
          depression: { min: 11, max: 21 },
        },
      },
    ],
  },
  {
    code: "TEMPERAMENT",
    name: "Temperament tipini aniqlash",
    description:
      "Xolerik, Sangvinik, Flegmatik, Melanxolik temperament tiplarini aniqlash",
    instruction:
      'Berilgan fikrga qo\'shilsangiz "Ha" (1 ball), qo\'shilmasangiz "Yo\'q" (0 ball) deb javob bering.',
    estimatedTime: 20,
    isSensitive: false,
    order: 6,
    scoringMethod: "category",
    categories: [
      {
        name: "choleric",
        questionIds: Array.from({ length: 20 }, (_, i) => i + 1),
      },
      {
        name: "sanguine",
        questionIds: Array.from({ length: 20 }, (_, i) => i + 21),
      },
      {
        name: "phlegmatic",
        questionIds: Array.from({ length: 20 }, (_, i) => i + 41),
      },
      {
        name: "melancholic",
        questionIds: Array.from({ length: 20 }, (_, i) => i + 61),
      },
    ],
    questions: [
      // Xolerik savollar (1-20)
      {
        id: 1,
        text: "Siz saramjon va bexalovatmisiz?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 2,
        text: "O'zingizni tuta olmaydigan, tez jahli chiqadiganmisiz?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 3,
        text: "Siz betoqatmisiz?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 4,
        text: "Odamlar bilan munosabatingiz keskinmi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 5,
        text: "Qat'iyatli va tashabbuskormisiz?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 6,
        text: "O'jar va qaysarmisiz?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 7,
        text: "Tortishuv va bahslarda topqirmisiz?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 8,
        text: "Bir xil tempda ishlamaysizmi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 9,
        text: "Tavakkalchilikka moyilligingiz bormi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 10,
        text: "Yomon narsalarni eslab yurmaysizmi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 11,
        text: "Nutqingiz tez, bo'linuvchi ohangga egami?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 12,
        text: "Muvozanatsiz, tez qizishib ketishga moyilligingiz bormi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 13,
        text: "Tez urishib ketadigan janjalkashmisiz?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 14,
        text: "Kamchiliklarga murosasizsizmi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 15,
        text: "Ifodali mimika egasimisiz?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 16,
        text: "Tez harakat qilasiz, qaronga kelasizmi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 17,
        text: "Yangilikka muntasil intilasizmi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 18,
        text: "Harakatlaringiz keskin va uzilishlimi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 19,
        text: "O'z oldingizga qo'ygan maqsadni albatta amalga oshirasizmi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 20,
        text: "Kayfiyatingiz tez o'zgarishga moyilmi?",
        category: "choleric",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },

      // Sangvinik savollar (21-40)
      {
        id: 21,
        text: "Dilkash va quvnoqmisiz?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 22,
        text: "Tirishqoq va ishbilarmonmisiz?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 23,
        text: "Ko'p hollarda boshlagan ishingizni oxiriga yetkazmaysizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 24,
        text: "O'zingizni yuqori baholaysizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 25,
        text: "Yangilikni tez o'zlashtirib olasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 26,
        text: "Qiziqish va intilishlaringiz beqarormi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 27,
        text: "Muvaffaqiyatsizlikni tez unutasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 28,
        text: "Turli sharoitga tez moslashasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 29,
        text: "Har qanday yangi ishga qiziqish bilan kirishasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 30,
        text: "Yangi ishga tez kirishasiz va tez birdan ikkinchisiga o'ta olasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 31,
        text: "Agar ish sizni qiziqtirmay qolsa tez soviyasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 32,
        text: "Bir xil tempdagi ishlarda tez toliqasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 33,
        text: "Muomalaga tez kirishasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 34,
        text: "Chidamli va mehnatsevarmimsiz?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 35,
        text: "Nutqingiz baland, tez, mimika va imo-ishoralarga boymi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 36,
        text: "Qiyin vaziyatda o'zingizni tuta bilasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 37,
        text: "Doimo tetik kayfiyatda yurasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 38,
        text: "Tez qaronga kelib, undan voz kechasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 39,
        text: "Tez chalg'iysizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 40,
        text: "Behuda shoshilasizmi?",
        category: "sanguine",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },

      // Flegmatik savollar (41-60)
      {
        id: 41,
        text: "Osoyishta va sovuqqonmisiz?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 42,
        text: "Ishda tartibli, izchilmisiz?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 43,
        text: "Ehtiyotkor va aql bilan ish tutasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 44,
        text: "Sabr-toqat bilan kuta olasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 45,
        text: "Bo'lar-bo'lmas narsalar haqida gapirmay sukut saqlay bilasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 46,
        text: "Nutqingiz osoyishta, bir xil tempda va hech qanday ifodali harakatlarga ega emasmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 47,
        text: "Chidamli va o'zingizni tuta bilasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 48,
        text: "Boshlagan ishni oxiriga yetkaza olasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 49,
        text: "Behudaga kuch sarflamaysizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 50,
        text: "Ish rejimi va kun tartibiga qat'iy rioya qilasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 51,
        text: "Ehtirosni, hayajonni osongina yengasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 52,
        text: "Tanqid va maqtovga e'tibor qilmaysizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 53,
        text: "Yuvosh va ko'ngilchansizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 54,
        text: "Qiziqish va munosabatlaringiz barqarormi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 55,
        text: "Ishga sekin moslashib, boshqa ishga o'tishga qiynalasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 56,
        text: "Munosabatlaringiz turli-tumanmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 57,
        text: "Har bir narsada tartib va intizom bo'lishini xohlaysizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 58,
        text: "Yangi sharoitga qiyinchilik bilan moslashasizmi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 59,
        text: "Kayfiyatingiz barqarormi?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 60,
        text: "Vazmin tabiatli, og'ir-bosiqmisiz?",
        category: "phlegmatic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },

      // Melanxolik savollar (61-80)
      {
        id: 61,
        text: "Uyatchan va tortinchoqmisiz?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 62,
        text: "Yangi sharoitda o'zingizni yo'qotib qo'yasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 63,
        text: "Notanish kishilar bilan aloqa o'rnatishga qiynalasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 64,
        text: "O'z kuchingizga ishonmaysizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 65,
        text: "Yolg'izlikni yoqtirasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 66,
        text: "Muvaffaqiyatsizlikda tez tushkunlikka berilasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 67,
        text: "Tez charchaysizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 68,
        text: "Nutqingiz sekin, kuchsizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 69,
        text: "Boshqalar ta'siriga tez berilasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 70,
        text: "Ta'sirlanuvhan, tez yig'laysizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 71,
        text: "Tanqid va maqtovni tez qabul qilasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 72,
        text: "O'zingiz va boshqalarga nisbatan talabchansizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 73,
        text: "Shubha va gumonga tez berilasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 74,
        text: "Tez xafa bo'lasiz va arazlaysizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 75,
        text: "Har bir narsani o'zingizga tez qabul qilasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 76,
        text: "Muloqotga kirishishga qiynalasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 77,
        text: "Boshqalarga fikringizni aytishni yoqtirmaysizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 78,
        text: "Sust va kam faollik bilan ajralib turasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 79,
        text: "Tez buysunasiz, itoatkormisiz?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
      {
        id: 80,
        text: "Boshqalardan yordam hissini uyg'otishga harakat qilasizmi?",
        category: "melancholic",
        options: [
          { value: "yes", label: "Ha", score: 1 },
          { value: "no", label: "Yo'q", score: 0 },
        ],
      },
    ],
    interpretation: [
      {
        min: 0,
        max: 20,
        level: "Dominant",
        description: "Temperament tipi aniqlandi",
        severity: "normal",
        note: "Qaysi temperament tipida eng ko'p ball to'plangan bo'lsa, shu tip dominant hisoblanadi",
      },
    ],
  },
  {
    code: "PSYCHOGEOMETRIC",
    name: "Psixogeometrik test (Xarakter)",
    description: "Geometrik shakllar orqali xarakterni aniqlash",
    instruction:
      "Quyidagi 5 ta geometrik shaklni (kvadrat, to'g'ri to'rtburchak, uchburchak, aylana, zigzag) eng yoqtirganingizdan boshlab 1 dan 5 gacha raqamlang.",
    estimatedTime: 5,
    isSensitive: false,
    order: 7,
    scoringMethod: "custom",
    questions: [
      {
        id: 1,
        text: "Kvadrat shaklini qaysi o'rinda tanladingiz?",
        options: [
          { value: "1", label: "1-o'rin", score: 5 },
          { value: "2", label: "2-o'rin", score: 4 },
          { value: "3", label: "3-o'rin", score: 3 },
          { value: "4", label: "4-o'rin", score: 2 },
          { value: "5", label: "5-o'rin", score: 1 },
        ],
      },
      {
        id: 2,
        text: "To'g'ri to'rtburchak shaklini qaysi o'rinda tanladingiz?",
        options: [
          { value: "1", label: "1-o'rin", score: 5 },
          { value: "2", label: "2-o'rin", score: 4 },
          { value: "3", label: "3-o'rin", score: 3 },
          { value: "4", label: "4-o'rin", score: 2 },
          { value: "5", label: "5-o'rin", score: 1 },
        ],
      },
      {
        id: 3,
        text: "Uchburchak shaklini qaysi o'rinda tanladingiz?",
        options: [
          { value: "1", label: "1-o'rin", score: 5 },
          { value: "2", label: "2-o'rin", score: 4 },
          { value: "3", label: "3-o'rin", score: 3 },
          { value: "4", label: "4-o'rin", score: 2 },
          { value: "5", label: "5-o'rin", score: 1 },
        ],
      },
      {
        id: 4,
        text: "Aylana shaklini qaysi o'rinda tanladingiz?",
        options: [
          { value: "1", label: "1-o'rin", score: 5 },
          { value: "2", label: "2-o'rin", score: 4 },
          { value: "3", label: "3-o'rin", score: 3 },
          { value: "4", label: "4-o'rin", score: 2 },
          { value: "5", label: "5-o'rin", score: 1 },
        ],
      },
      {
        id: 5,
        text: "Zigzag shaklini qaysi o'rinda tanladingiz?",
        options: [
          { value: "1", label: "1-o'rin", score: 5 },
          { value: "2", label: "2-o'rin", score: 4 },
          { value: "3", label: "3-o'rin", score: 3 },
          { value: "4", label: "4-o'rin", score: 2 },
          { value: "5", label: "5-o'rin", score: 1 },
        ],
      },
    ],
    interpretation: [
      {
        shape: "kvadrat",
        description:
          "Mehnatsevar, tashkilotchi, mantiqiy fikrlovchi, tartib-intizomni yoqtiruvchi, aniq rejalar bilan ishlovchi shaxs",
      },
      {
        shape: "to'g'ri_to'rtburchak",
        description:
          "O'zgaruvchan, o'tish davri, yangilikka intiluvchi, moslashuvchan shaxs",
      },
      {
        shape: "uchburchak",
        description:
          "Lider, maqsadga intiluvchi, tez qaror qabul qiluvchi, raqobatbardosh shaxs",
      },
      {
        shape: "aylana",
        description:
          "Do'stona, hamdard, muloqotchan, tinchliksevar, guruhda ishlashni yoqtiruvchi shaxs",
      },
      {
        shape: "zigzag",
        description:
          "Ijodkor, g'ayrioddiy fikrlovchi, yangilikka moyil, erkin fikrli shaxs",
      },
    ],
  },

  {
    code: "PERSONAL_ORIENTATION",
    name: "Shaxs yo'nalganligini aniqlash (Smekal-Kuchera)",
    description:
      "Shaxsning o'ziga, odamlarga yoki faoliyatga yo'nalganligini aniqlash",
    instruction:
      "Har bir savolda sizga eng mos keladigan javobni \"to'g'ri keladi\" va eng kam mos keladigan javobni \"to'g'ri kelmaydi\" deb belgilang.",
    estimatedTime: 20,
    isSensitive: false,
    order: 8,
    scoringMethod: "category",
    categories: [
      { name: "self", questionIds: [] },
      { name: "others", questionIds: [] },
      { name: "activity", questionIds: [] },
    ],
    questions: [
      {
        id: 1,
        text: "Men qachonki o'zimda katta qanoatlanish hosil qilaman:",
        options: [
          {
            value: "a",
            label: "Qilayotgan ishimni atrofdagilar qo'llab-quvvatlashsa",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "Biror ishni o'zimga ma'qul, ko'nglimdagidek qilib bajarsam",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Atrofimda yaxshi do'stlarim borligini his etsam",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 2,
        text: "Kelajakda sportchi (futbolchi, voleybolchi) bo'lganimda:",
        options: [
          {
            value: "a",
            label:
              "O'yin taktikasiga ishlov beruvchi - trener bo'lishni istardim",
            score: 0,
            category: "activity",
          },
          {
            value: "b",
            label: "Mashhur o'yinchi bo'lishni istardim",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label: "Komanda kapitani etib tayinlanishimni istardim",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 3,
        text: "Haqiqiy pedagog quyidagi xususiyatga ega bo'lishi kerak:",
        options: [
          {
            value: "a",
            label: "O'quvchilarga alohida yondashib, har biri bilan qiziqishi",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "O'quvchilarda predmetga nisbatan qiziqish uyg'otsin",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Sinf jamoasida shunday muhit yaratsin",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 4,
        text: "Men:",
        options: [
          {
            value: "a",
            label:
              "O'zlari bajargan ishdan zavq oladigan kishilarni juda yoqtiraman",
            score: 0,
            category: "activity",
          },
          {
            value: "b",
            label: "Jamoada ko'pchilik mehnat qilishni yoqtiraman",
            score: 0,
            category: "others",
          },
          {
            value: "c",
            label:
              "Ishni boshqamalumotlaridan yaxshiroq bajarishga intilgan kishilarni yoqtiraman",
            score: 0,
            category: "self",
          },
        ],
      },
      {
        id: 5,
        text: "Agar mening do'stim:",
        options: [
          {
            value: "a",
            label: "Odamlarni tushunadigan, yordam beradigan bo'lsa",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label:
              "Har doim so'zining ustidan chiqa oladigan, sadoqatli bo'lsa",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label: "Aqlli va har narsaga qiziqadigan inson bo'lsa",
            score: 0,
            category: "activity",
          },
        ],
      },
      {
        id: 6,
        text: "Eng yaqin do'st shunday kishiki, u:",
        options: [
          {
            value: "a",
            label: "Men bilan yaxshi munosabatda bo'lsa",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Eng qiyin paytda ham ishonchni oqlaydigan bo'lsa",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label: "Katta hayotiy tajriba va yutuqlarga erishgan bo'lsa",
            score: 0,
            category: "activity",
          },
        ],
      },
      {
        id: 7,
        text: "Men juda istagan bo'lardim:",
        options: [
          {
            value: "a",
            label: "Ishimni o'ngidan kelmasligini",
            score: 0,
            category: "activity",
          },
          {
            value: "b",
            label: "O'rtoqlarim bilan munosabatim buzilishini",
            score: 0,
            category: "others",
          },
          {
            value: "c",
            label: "Atrofdagilarning meni tanqid qilishlarini",
            score: 0,
            category: "self",
          },
        ],
      },
      {
        id: 8,
        text: "Eng ayanchli ahvol shundaki, agar o'qituvchi:",
        options: [
          {
            value: "a",
            label: "Ba'zi o'quvchilarni yoqtirmasligini yavoqa olmasa",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "Jamoada raqobatchilik kayfiyatini yaratsa",
            score: 0,
            category: "others",
          },
          {
            value: "c",
            label: "O'zi dars bergan fanni bilmasa",
            score: 0,
            category: "activity",
          },
        ],
      },
      {
        id: 9,
        text: "Bolaligimda eng yaxshi ko'rganim:",
        options: [
          {
            value: "a",
            label: "Ko'proq o'rtoqlarim bilan o'ynash edi",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Qum to'dosidan uylar yasab zavqlanish edi",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Biron narsa uchun meni maqtashlari edi",
            score: 0,
            category: "self",
          },
        ],
      },
      {
        id: 10,
        text: "Quyida ta'rifi berilgan kishilarga o'xshashni juda xohlardim:",
        options: [
          {
            value: "a",
            label: "Hayotda katta lavozimlarda ishlagan kishi",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "O'z ishiga chinakam berilgan kishi",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Do'stonaligi va oqko'ngilligi bilan ajralib turgan kishi",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 11,
        text: "Menimcha, maktabning birinchi navbatdagi vazifasi:",
        options: [
          {
            value: "a",
            label: "Hayotdagi to'siqlar, muammolarni hal qilishni o'rgatish",
            score: 0,
            category: "activity",
          },
          {
            value: "b",
            label: "O'quvchining shaxsiy qobiliyatlarini rivojlantirish",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label: "Odamlar bilan o'zaro hamkorlik qilishga yordam berish",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 12,
        text: "Bo'sh vaqtim ko'proq bo'lganida:",
        options: [
          {
            value: "a",
            label: "Do'stlarim bilan suhbatlashardim",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Ko'proq dam olib, hordiq chiqargan bo'lardim",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label: "O'zim sevgan ishlar bilan mashg'ul bo'lardim",
            score: 0,
            category: "activity",
          },
        ],
      },
      {
        id: 13,
        text: "Katta yutuqlarni qo'lga kiritishim mumkin, agar:",
        options: [
          {
            value: "a",
            label: "Chehrasi iliq bo'lgan kishilar bilan ishlasam",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Bajarayotgan ishim menga qiziqarli bo'lsa",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Qilgan ishim yaxshi rag'batlantirilishi mumkin bo'lsa",
            score: 0,
            category: "self",
          },
        ],
      },
      {
        id: 14,
        text: "Menga juda yoqadi, agar:",
        options: [
          {
            value: "a",
            label: "Odamlar meni qadrlashsa",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "Biror ishni yaxshilab, oxiriga yetkazib bajarsam",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Vaqtimni do'stlar orasida qiziqarli o'tkazsam",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 15,
        text: "Agar men haqimda gazetaga yozishga qaror qilishsa:",
        options: [
          {
            value: "a",
            label: "Biror sohada erishgan yutuqlarimni maqtab yozishsin",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "Men bajargan ishlar haqida gapirilsin",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Men o'qiyotgan yoki ishlaydigan jamoa haqida bayon etilsin",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 16,
        text: "Men juda yaxshi o'qigan bo'lar edim, agar o'qituvchi:",
        options: [
          {
            value: "a",
            label: "Meni tushunsa va to'g'ri munosabat qila olsa",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "Predmetlarga nisbatan qiziqish uyg'ota olsa",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Dars mavzularini bahs-munozarali qilib yorita olsa",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 17,
        text: "Men uchun eng yomoni:",
        options: [
          {
            value: "a",
            label: "G'ururimning poymol qilinishi",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "Zarur ishimning o'ngidan kelmasligi",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Do'stlarimdan ajrab qolishim",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 18,
        text: "Menimcha, hayotda eng qadrli narsa:",
        options: [
          { value: "a", label: "Muvaffaqiyat", score: 0, category: "self" },
          {
            value: "b",
            label: "O'zaro kelishuvda, hamkorlikda ishlash imkoniyati",
            score: 0,
            category: "others",
          },
          {
            value: "c",
            label: "Kundalik hayotda ijodkorlik, hur fikrlilik",
            score: 0,
            category: "activity",
          },
        ],
      },
      {
        id: 19,
        text: "Men yoqtirmaydigan kishilar:",
        options: [
          {
            value: "a",
            label: "O'zini boshqalardan past ko'ruvchilar",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "Badjahl, tez-tez janjal chiqaruvchi kishilar",
            score: 0,
            category: "others",
          },
          {
            value: "c",
            label: "Har qanday yangilikka qarshi chiqadigan odamlar",
            score: 0,
            category: "activity",
          },
        ],
      },
      {
        id: 20,
        text: "Men uchun quvonch bag'ishlaydi:",
        options: [
          {
            value: "a",
            label: "Hamma uchun muhim bo'lgan ish bilan shug'ullanish",
            score: 0,
            category: "activity",
          },
          {
            value: "b",
            label: "Yor-do'stlarimning ko'p bo'lishi",
            score: 0,
            category: "others",
          },
          {
            value: "c",
            label: "Odamlarni hayratda qoldirish, hammaga yoqish",
            score: 0,
            category: "self",
          },
        ],
      },
      {
        id: 21,
        text: "Menimcha, rahbar kishi quyidagi xususiyatga ega bo'lishi shart:",
        options: [
          {
            value: "a",
            label: "Qo'l ostidagilarga juda yaqin bo'lishi",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Obro'-e'tiborli, viqor-salobatli bo'lishi",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label: "O'ziga va boshqalarga talabchan bo'lishi",
            score: 0,
            category: "activity",
          },
        ],
      },
      {
        id: 22,
        text: "Bo'sh vaqtimda havas bilan shunday kitoblar o'qigan bo'lardimki:",
        options: [
          {
            value: "a",
            label: "Do'st orttirish, odamlar bilan yaxshi munosabat haqida",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Mashhur va ko'pqirrali insonlarning hayoti to'g'risida",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label:
              "Fan-texnika taraqqiyotining eng yangi yutuqlari to'g'risida",
            score: 0,
            category: "activity",
          },
        ],
      },
      {
        id: 23,
        text: "Musiqa sohasida qobiliyatim bo'lganida edi:",
        options: [
          {
            value: "a",
            label: "Drijoyor bo'lgan bo'lar edim",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Bastakor bo'lardim",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Qo'shiqchi bo'lardim",
            score: 0,
            category: "self",
          },
        ],
      },
      {
        id: 24,
        text: "Istardimki:",
        options: [
          {
            value: "a",
            label: "Qiziqarli konkurs o'ylab topib, rejasini tuzsam",
            score: 0,
            category: "activity",
          },
          {
            value: "b",
            label: "Biror bir konkursda g'olib chiqsam",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label: "O'zim konkurs tashkil etib, uni olib borsam",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 25,
        text: "Birinchi navbatda bilishim zarur:",
        options: [
          {
            value: "a",
            label: "Nima ish bajarishim kerakligini",
            score: 0,
            category: "self",
          },
          {
            value: "b",
            label: "Maqsadga erishish yo'llarini",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Odamlardan qanday foydalanish kerakligini",
            score: 0,
            category: "others",
          },
        ],
      },
      {
        id: 26,
        text: "Inson shunarsaga intilishi kerakki:",
        options: [
          {
            value: "a",
            label: "Boshqalar undan xursand bo'lsinlar",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Buyu gan ish vijdonan bajarilsin",
            score: 0,
            category: "activity",
          },
          {
            value: "c",
            label: "Qilgan ishi uchun hech kimdan gap eshitmasin",
            score: 0,
            category: "self",
          },
        ],
      },
      {
        id: 27,
        text: "Bo'sh vaqtimda yaxshi dam olaman:",
        options: [
          {
            value: "a",
            label: "Do'stlarim bilan suhbatlashganim",
            score: 0,
            category: "others",
          },
          {
            value: "b",
            label: "Qiziqarli filmlar tomosha qilib, hordiq chiqarganda",
            score: 0,
            category: "self",
          },
          {
            value: "c",
            label: "O'zim sevgan ish bilan mashg'ul bo'lganda",
            score: 0,
            category: "activity",
          },
        ],
      },
    ],
    interpretation: [
      {
        category: "self",
        min: -27,
        max: 54,
        description:
          "O'ziga yo'nalganlik - shaxsiy muvaffaqiyat, tan olinish, shaxsiy rivojlanishga e'tibor",
      },
      {
        category: "others",
        min: -27,
        max: 54,
        description:
          "Odamlarga yo'nalganlik - muloqot, do'stlik, hamkorlik, boshqalarga yordam berishga e'tibor",
      },
      {
        category: "activity",
        min: -27,
        max: 54,
        description:
          "Faoliyatga yo'nalganlik - ish natijasi, vazifa bajarish, maqsadga erishishga e'tibor",
      },
    ],
  },
];

// Sensitive testlarni aniqlash
export const SENSITIVE_TEST_CODES = ["SUNG_DEPRESSION", "HADS"];

// Test sensitive ekanligini tekshirish
export const isSensitiveTest = (testCode) => {
  return SENSITIVE_TEST_CODES.includes(testCode);
};

// Test kategoriyalari
export const TEST_CATEGORIES = {
  EMOTIONAL: [
    "LONELINESS_KORCHAGIN",
    "LONELINESS_RUSSELL",
    "SUNG_DEPRESSION",
    "HADS",
  ],
  PERSONALITY: ["TEMPERAMENT", "PSYCHOGEOMETRIC", "PERSONAL_ORIENTATION"],
  CLINICAL: ["NEURASTHENIA", "SUNG_DEPRESSION", "HADS"],
};

export default PSYCHOLOGICAL_TESTS;
