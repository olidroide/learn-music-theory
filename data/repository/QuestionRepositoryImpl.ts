import {QuestionRepository} from "./QuestionRepository";
import QuestionDataSource from "../dataSource/QuestionDataSource";

import {IQuestion} from "../../domain/models/Question";

export class QuestionRepositoryImpl implements QuestionRepository{
    private _dataSource: QuestionDataSource;
    constructor(_dataSource: QuestionDataSource) {
        this._dataSource = _dataSource
    }
    async getQuestion(id: number): Promise<IQuestion> {
        return this._dataSource.getQuestion(id);
    }

    async getQuestions(): Promise<IQuestion[]> {
        return this._dataSource.getQuestions();
    }

}