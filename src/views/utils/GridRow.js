import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        height: "80vh"
    },



}));

function GridRow() {
    const classes = useStyles();
    return (


        <Grid container className={classes.root} alignItems={"center"}>
            <Grid item xs={12}>
                <Typography variant="h3" color="textSecondary"> Start search imdb...</Typography>
            </Grid>

        </Grid>


    )
}

export default GridRow