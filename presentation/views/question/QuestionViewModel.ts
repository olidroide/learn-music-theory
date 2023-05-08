import {useContext} from "react";
import {GetQuestionUseCase} from "../../../domain/GetQuestion";
import {QuestionRepositoryImpl} from "../../../data/repository/QuestionRepositoryImpl";
import QuestionApiDataSourceImpl from "../../../data/dataSource/QuestionApiDataSourceImpl";
import {QuestionContext} from "./QuestionStoreProvider";

export default function QuestionViewModel() {
    const {setQuestion} = useContext(QuestionContext);
    const UseCase = new GetQuestionUseCase(new QuestionRepositoryImpl(new QuestionApiDataSourceImpl()));

    async function getQuestion(id: number) {
        setQuestion(await UseCase.invoke(id));
    }


    return {
        getQuestion,
    }
}