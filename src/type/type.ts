
export interface BaseType {
    category: categoryType[]
    anq: {
        "Категория 1": anqType[]
        "Категория 2": anqType[]
        "Категория 3": anqType[]
    }
}

export interface categoryType {
    name: string
    id: string
    kategory_id: string
}

export interface anqType {
    answer: string
    question: string
    id: string
}