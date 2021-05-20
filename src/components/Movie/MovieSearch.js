import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        marginTop:25,
        display: 'flex',
        alignItems: 'center',
        width: 890,
        height: 40,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    closeIcon: {
        width: 10,
        height: 10,
        opacity: 0.2,
        color: "#000000",
    }
}));

export default function MovieSearch() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputLabel>All</InputLabel>
            <Divider className={classes.divider} orientation="vertical"/>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon/>
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search Imdb"

            />
            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                <CloseIcon className={classes.closeIcon}/>
            </IconButton>
        </Paper>
    );
}