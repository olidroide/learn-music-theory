import useQuestionViewModel from "./question/QuestionViewModel";
import QuestionCard from "./question/QuestionCard";
import React, {useContext} from "react";
import {Button, Stack} from "@mui/material";
import {QuestionContext} from "./question/QuestionStoreProvider";
import {GameStoreContext} from "../../store/GameStore";


const GameBoard = () => {
    const {getQuestion} = useQuestionViewModel();
    const {questionState, onUserClickNextQuestion} = useContext(QuestionContext);
    const {addPlayerPoints} = useContext(GameStoreContext);


    if (!questionState.question) {
        getQuestion(1);
    }

    const isUserValidResponse = questionState.isValidResponse()


    const onUserClickNext = (() => {
        if (!isUserValidResponse) return
        addPlayerPoints(1)
        onUserClickNextQuestion()
    })


    return (
        <>
            <Stack
                direction="column"
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
            >
                <QuestionCard
                    question={questionState.question}
                />
                <Button
                    variant={"contained"}
                    size={"large"}
                    onClick={onUserClickNext}
                    disabled={!isUserValidResponse}
                >
                    Next
                </Button>
            </Stack>
        </>
    )
}

export default GameBoard