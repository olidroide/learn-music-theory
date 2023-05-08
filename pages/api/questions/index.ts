// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'


import {GetQuestions, IQuestion, MusicNotesEn, MusicNotesEs} from "../../../domain/models/Question";


function between(min:number, max:number) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetQuestions>
) {
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


    let question: IQuestion = {
        id: 1,
        question: `${question_note} in spanish?`,
        responses: responses,
        valid_response: valid_response,
    }
    // return {question_list: [question]}
    res.status(200).json({question_list: [question]})
}
