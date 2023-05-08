import {IQuestion} from "../../domain/models/Question";

export interface QuestionRepository {
    getQuestion(id: number): Promise<IQuestion>;

    getQuestions(): Promise<IQuestion[]>
}
