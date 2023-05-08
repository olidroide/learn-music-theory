import {Grid, ToggleButton} from "@mui/material";
import React, {useContext} from "react";
import {QuestionContext} from "./QuestionStoreProvider";

type Props = {
    response: string
}

const ResponseButton = (
    {response}: Props
) => {
    const {questionState, setResponse} = useContext(QuestionContext);
    const isSelected = questionState.playerResponse?.userResponse === response;

    const handleOnChange = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string,
    ) => {
        setResponse(newValue)
    }


    return (
        <Grid
            item
            xs={6}
            key={response}
        >
            <ToggleButton
                fullWidth={true}
                size={"large"}
                value={response}
                selected={isSelected}
                onChange={handleOnChange}
            >
                {response}
            </ToggleButton>
        </Grid>
    )
}
export default ResponseButton