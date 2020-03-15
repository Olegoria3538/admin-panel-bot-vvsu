
export interface BaseType {
    category: categoryType[]
    anq: {
        [s: string]: anqType[]
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