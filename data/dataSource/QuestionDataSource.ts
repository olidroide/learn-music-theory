import {IQuestion} from "../../domain/models/Question";

export default interface QuestionDataSource{
    getQuestion(id: number):Promise<IQuestion>;
    getQuestions():Promise<IQuestion[]>;
}