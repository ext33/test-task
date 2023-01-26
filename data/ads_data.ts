import { IAdsItem } from "@/types/ads"

// Mock test data
export const ads_data: IAdsItem[] = [
    {
        id: "1",
        title: "Тумбочка",
        images: [
            "https://56.img.avito.st/image/1/1.kS82C7a6PcYAov_DGHn6HvyoO8KCKDUEh6g5zoqgPw.HZh7d_PUKreB-SsmfJBEySyGUSoqvJYrY5kIuwfgGak",
            "https://26.img.avito.st/image/1/1.r-kVIba6AwAjiMEFR3PG2N-CBQShAgvCpIIHCKmKAQ.pflc0LLfisXzGqpsjBVgJOJAB_tDfWpMVXzhPA1WA5k",
        ],
        description: "Тумба под ТВ Сканди\n" +
            "\n" +
            "Длина – 2130 мм\n" +
            "\n" +
            "Высота - 502 мм\n" +
            "\n" +
            "Глубина - 350 мм\n" +
            "\n" +
            "Цветовой вариант №1 – Корпус - Белый (Гладкий) / Фасад МДФ - глянцевая Белый\n" +
            "\n" +
            "Цветовой вариант №2 – Корпус - Серый Шифер / Фасад МДФ - матовая Грин Грей Софт\n" +
            "\n" +
            "Гарантийный срок – 36 месяцев\n" +
            "\n" +
            "Огромный ассортимент мебели, собственный склад!! Приезжай и забирай!\n" +
            "\n" +
            "Мебель в наличии и под заказ",
        price: "4000 Р",
        create_at: new Date("10/01/2023")
    },

    {
        id: "2",
        title: "Комод",
        images: [
            "https://36.img.avito.st/image/1/1.zeNA27a6YQp2cqMPVrDc1op4Zw70-GnI8XhlAvxwYw.AoKW4EN_mYm32nhNy5pxdMtMrDDcq0I7VfUH1nHeMWQ",
            "https://68.img.avito.st/image/1/1.heO-Vba6KQqI_OsPuAeU1nT2Lw4KdiHID_YtAgL-Kw.PAjUaEhJl8qlHCte_pIsMVGcfgqbVKAmvcSBKn38KRs",
            "https://26.img.avito.st/image/1/1.J3e0nra6i56CN0mb9vI2Qn49jZoAvYNcBT2Plgg1iQ.cz37vHT-xvuctqqgoGWUhvUEx-G3fJ_2N983fMXndSI",
        ],
        description: "Компания по изготовлению корпусной мебели предлагает комод: цвет Сонома\n" +
            "размер: высота 810\n" +
            "длина 790\n" +
            "глубина 410\n" +
            "Цвет и размер можно изменить. Срок изготовления 2-3 дня. Так же можно заказать любую корпусную мебель.",
        price: "5000 Р",
        create_at: new Date("11/01/2023")
    },

    {
        id: "3",
        title: "Кофта",
        images: [
            "https://01.img.avito.st/image/1/1.ZE7Cp7a6yKf0DgqihoZJeAgEzqN2hMBlcwTMr34Myg.AjEL_vt-umnXBRL5asPWyvK3H14R2uCKE2S2Tbk5jtU",
            "https://65.img.avito.st/image/1/1.JJ-yBra6iHaEr0pz9iYJqXiljnIGJYC0A6WMfg6tig.lFRFXjdoQoeDDgSeHUqwFKSSxDoYAUrv2pGVIivawTg",
            "https://85.img.avito.st/image/1/1.0KHho7a6fEjXCr5NzYT9lysAekxVgHSKUAB4QF0Ifg.cZ-q9314R9bw0gEtuQhn35d3eBJsdEp3KqRkTdnD9WY"
        ],
        description: "Не носил, не подошел размер, на бирке М, по факту S. Состояние 10/10",
        price: "2000 Р",
        create_at: new Date("05/01/2023")
    },
]
