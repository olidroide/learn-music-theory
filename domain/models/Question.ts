export interface GetQuestions {
    question_list: IQuestion[],
}

export interface IQuestion {
    id: number;
    question: string;
    valid_response: any;
    responses: Array<any>;
}

export enum MusicNotesEn {
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    A = "A",
    B = "B",
}

export enum MusicNotesEs {
    C = "DO",
    D = "RE",
    E = "MI",
    F = "FA",
    G = "SOL",
    A = "LA",
    B = "SI",
}