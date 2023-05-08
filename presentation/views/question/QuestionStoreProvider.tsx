import {createContext, ReactNode, useMemo} from "react";
import {useImmerReducer} from "use-immer";
import {immerable} from "immer";

import {IQuestion} from "../../../domain/models/Question";

export enum ACTION_TYPE {
    SELECT_RESPONSE,
    ON_USER_CLICK_NEXT_QUESTION,
    SET_QUESTION,
}

export const setResponse = (playerResponse: string | null): {
    type: ACTION_TYPE.SELECT_RESPONSE,
    payload: {
        playerResponse: string | null
    }
} => ({
    type: ACTION_TYPE.SELECT_RESPONSE,
    payload: {
        playerResponse
    }
})

export const setQuestion = (question: IQuestion): {
    type: ACTION_TYPE.SET_QUESTION,
    payload: {
        question: IQuestion
    }
} => ({
    type: ACTION_TYPE.SET_QUESTION,
    payload: {
        question
    }
})


export const onUserClickNextQuestion = (): {
    type: ACTION_TYPE.ON_USER_CLICK_NEXT_QUESTION,
} => ({
    type: ACTION_TYPE.ON_USER_CLICK_NEXT_QUESTION,
})

type IAction =
    | ReturnType<typeof setResponse>
    | ReturnType<typeof setQuestion>
    | ReturnType<typeof onUserClickNextQuestion>;


class PlayerResponse {
    [immerable] = true
    _userResponse?: string | null;

    constructor(userResponse?: string | null) {
        this._userResponse = userResponse
    }

    get userResponse() {
        return this._userResponse;
    }

    set userResponse(value) {
        this._userResponse = value;
    }
}


class QuestionState {
    [immerable] = true
    playerResponse: PlayerResponse;
    question?: IQuestion | null;

    constructor() {
        this.playerResponse = new PlayerResponse()
    }

    isValidResponse(): boolean {
        return this.playerResponse.userResponse === this.question?.valid_response;
    }
}


type IQuestionContext = {
    questionState: QuestionState,
    // dispatch: Dispatch<IAction>
    setResponse: any, //Dispatch<typeof setResponse>,
    onUserClickNextQuestion: any,
    setQuestion: any,
}

export const reducer = (state: QuestionState, action: IAction) => {
    switch (action.type) {
        case ACTION_TYPE.SELECT_RESPONSE:
            console.log(action.payload.playerResponse)
            state.playerResponse.userResponse = action.payload.playerResponse;
            break;
        case ACTION_TYPE.ON_USER_CLICK_NEXT_QUESTION:
            return new QuestionState()
        case ACTION_TYPE.SET_QUESTION:
            state.question = action.payload.question
            break;
        default:
            return state;
    }
}


export const QuestionContext = createContext<IQuestionContext>({
    questionState: new QuestionState(),
    setResponse: null,
    onUserClickNextQuestion: null,
    setQuestion: null
});

interface IProps {
    children: ReactNode;
}

export function QuestionProvider({children}: IProps) {
    const [questionState, dispatcher] = useImmerReducer(reducer, new QuestionState())

    const handlers = useMemo(
        () => ({
            questionState,
            setResponse: (playerResponse: string | null) => dispatcher(setResponse(playerResponse)),
            onUserClickNextQuestion: () => dispatcher(onUserClickNextQuestion()),
            setQuestion: (question: IQuestion) => dispatcher(setQuestion(question)),
        }),
        [questionState, dispatcher]
    );

    return <QuestionContext.Provider value={handlers}>{children}</QuestionContext.Provider>
}