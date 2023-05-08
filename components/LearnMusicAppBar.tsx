import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {useContext} from "react";
import {GameStoreContext} from "../store/GameStore";

const LearnMusicAppBar = () => {
    const {playerPoints} = useContext(GameStoreContext);

    return (
        <AppBar position={"fixed"}>
            <Toolbar>
                <Typography variant={"h6"} component="div" sx={{flexGrow: 1}}>
                    Aprender notas
                </Typography>

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleMenu}
                    color="inherit"
                >

                    <AccountCircle/>
                </IconButton>
                <Typography variant={"h6"} component="div">
                    {playerPoints}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default LearnMusicAppBar