import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect, useState} from "react";
import LearnMusicAppBar from "../components/LearnMusicAppBar";
import GameStoreProvider from "../store/GameStoreProvider";

function MyApp({Component, pageProps}: AppProps) {
    // Server Side Rendering
    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []); // Only at start time

    if (isSSR) return null;

    return (
        <GameStoreProvider>
            <div>
                <LearnMusicAppBar/>
                <Component {...pageProps} />
            </div>
        </GameStoreProvider>
    );
}

export default MyApp
