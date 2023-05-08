import QuestionDataSource from "./QuestionDataSource";

import {IQuestion, MusicNotesEn, MusicNotesEs} from "../../domain/models/Question";

// export COLLECTION = "QUESTIONS"



// export interface DataSourceResponse {
//     error: string | null;
//     result: Question|Array<Question>|null;
// }

// export function getAll() {
//     try {
//         const response: DataSourceResponse = {error: null, result: data.question_list}
//         return Promise.resolve(response)
//     } catch (e: any) {
//         return Promise.resolve({error: e.message, result: null})
//     }
// }

// export function getOne(id:number){
//     try {
//         let filteredData = data.question_list.filter(item => item.id === id)
//         const response: DataSourceResponse = {error: null, result: filteredData.length > 0 ? filteredData[0]:null}
//         return Promise.resolve(response)
//     } catch (e: any) {
//         return Promise.resolve({error: e.message, result: null})
//     }
// }

function between(min:number, max:number) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

export default class QuestionLocalStorageDataSourceImpl implements QuestionDataSource{
    private _data: { question_list: IQuestion[] };

    constructor() {
        let numberOfNotes = Object.keys(MusicNotesEs).length;
        let random = between(0,numberOfNotes)

        let valid_response_key = Object.values(MusicNotesEn)[random]
        let valid_response = MusicNotesEs[valid_response_key]
        let question_note =  MusicNotesEn[valid_response_key]


        // let responses = [MusicNotesEs.D, MusicNotesEs.C, MusicNotesEs.E, MusicNotesEs.F]
        let responses = []
        responses[between(0,4)] = valid_response
        for (let i = 0; i < 4; i++) {
            if (responses[i]) continue;
            while (!responses[i]){
                let subRandom = between(0,numberOfNotes)
                let randomKey = Object.values(MusicNotesEn)[subRandom]
                let randomEnum = MusicNotesEs[randomKey]
                let randomEnumEn = MusicNotesEn[randomKey]
                console.log(`${randomEnum} -> ${responses}`)
                if (responses.includes(randomEnum)) continue;
                responses[i] = randomEnum
            }

        }


        const question: IQuestion = {
            id: 1,
            question: `${question_note} in spanish?`,
            responses: responses,
            valid_response: valid_response,
        }
        this._data = {question_list: [question]}

    }
    async getQuestion(id: number): Promise<IQuestion> {
        let filteredData = this._data.question_list.filter(item => item.id === id)
        // const response: Question = filteredData.length > 0 ? filteredData[0]:null}
        return filteredData[0];
    }

    async getQuestions(): Promise<IQuestion[]> {
        return this._data.question_list;
    }

}