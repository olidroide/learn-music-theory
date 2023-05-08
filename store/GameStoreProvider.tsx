import {ReactNode, useState} from "react";
import {GameStoreContext} from "./GameStore";


interface IProps {
    children: ReactNode;
}

const GameStoreProvider = ({children}: IProps) => {
    const [lastPlayerResponse, addPlayerResponse] = useState<any>(null);
    const [playerPoints, setPoints] = useState<number>(0);
    const setPlayerResponse = (playerResponse: any) => {
        addPlayerResponse(playerResponse);
    };

    const addPlayerPoints = (points: number) => {
        setPoints(playerPoints + points);
    }

    return <GameStoreContext.Provider
        value={{
            lastPlayerResponse, setPlayerResponse, playerPoints, addPlayerPoints,
        }}>
        {children}
    </GameStoreContext.Provider>

};
export default GameStoreProvider;