import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import StarOutlineSharpIcon from '@material-ui/icons/StarOutlineSharp';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    typography: {

        fontSize: 15,
    },
    palette: {
        active: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.26)",
        primary: blue,
    },
});
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        height: 60,
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            IMDB App
                        </Typography>
                        <IconButton>
                            <StarOutlineSharpIcon color="disabled"/>
                        </IconButton>
                        <IconButton>
                            <SearchIcon color="action"/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>
    )
}

export default Header;




