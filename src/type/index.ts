export interface DataType {
    answers?: Answer[];
    academ_levels?: AcademLevel[];
    answer_sections?: AnswerSection[];
    main_answers?: MainAnswer[];
    main_questions?: MainQuestion[];
    napravleniya?: Napravleniya[];
    complete?: boolean
}

export interface SearhType {
    answer?: string
    question?: string
}

export interface Answer {
    0: string;
    napravleniya_id: string;
    1: string;
    section_answer_id: string;
    2: string;
    answer: string;
}

export interface AcademLevel {
    0: string;
    stepen_id: string;
    1: string;
    academ_level: string;
}

export interface AnswerSection {
    0: string;
    section_answer_id: string;
    1: string;
    section_answer: string;
}

export interface MainAnswer {
    0: string;
    question_id: string;
    1: string;
    answers: string;
}

export interface MainQuestion {
    0: string;
    question_id: string;
    1: string;
    questions: string;
}

export interface Napravleniya {
    0: string;
    napravleniya_id: string;
    1: string;
    stepen_id: string;
    2: string;
    napravleniya: string;
}



