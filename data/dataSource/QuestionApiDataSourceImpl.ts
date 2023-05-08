import QuestionDataSource from "./QuestionDataSource";
import axios from 'axios';

import {IQuestion} from "../../domain/models/Question";

export default class QuestionApiDataSourceImpl implements QuestionDataSource {

    async getQuestion(id: number): Promise<IQuestion> {
        const {data} = await axios.get(`http://localhost:3000/api/questions`);
        const questions: IQuestion[] = data.question_list
        let filteredData = questions.filter(item => item.id === id);
        return filteredData[0];
    }

    async getQuestions(): Promise<IQuestion[]> {
        // const {data} = await axios.get(`http://localhost:3000/api/questions`);
        // return data.question_list;
        return [];
    }
}