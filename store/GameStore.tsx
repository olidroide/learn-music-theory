import {createContext, useContext} from "react";


interface IGameStoreContext {
    playerPoints: number;
    addPlayerPoints: (add: number) => void;
    lastPlayerResponse: any;
    setPlayerResponse: (playerResponse: any) => void;
}

export const GameStoreContext = createContext<IGameStoreContext>({
    playerPoints: 0,
    addPlayerPoints(add) {
    },
    lastPlayerResponse: null,
    setPlayerResponse(playerResponse) {
    },
});

export const useGameStoreContext = () => useContext(GameStoreContext);