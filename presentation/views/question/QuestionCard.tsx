import {Card, CardContent, Grid, Typography} from "@mui/material";
import React from "react";
import ResponseButton from "./ResponseButton";

import {IQuestion} from "../../../domain/models/Question";

type Props = {
    question?: IQuestion | null,
}

const QuestionCard = (
    {question}: Props
) => {
    if (!question) {
        return <p>Loading...</p>
    }

    return (
        <Card sx={{display: 'flex', width: '100%'}}>
            <CardContent sx={{width: 1}}>
                <Typography align={"center"} variant={"h5"}>
                    {question.question}
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    {question.responses.map((possibleResponse) => (
                        <ResponseButton
                            response={possibleResponse}
                            key={possibleResponse}
                        />
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}
export default QuestionCard