import { QuestionRepository} from "../data/repository/QuestionRepository";


import {IQuestion} from "./models/Question";


export interface GetQuestion{
    invoke(id: number): Promise<IQuestion>;
}
export class GetQuestionUseCase implements GetQuestion{
    private questionRepository: QuestionRepository;
    constructor(_questionRepository:QuestionRepository) {
        this.questionRepository = _questionRepository;
    }

    async invoke(id: number): Promise<IQuestion> {
        return this.questionRepository.getQuestion(id)
    }
}