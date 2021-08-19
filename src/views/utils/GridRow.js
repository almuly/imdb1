import React from "react";
import Grid from '@material-ui/core/Grid';

export default function GridRow ({ children, ...props }) {

    return (
        <Grid container={true} direction={"row"}  {...props}>
            {children}
        </Grid>
    )
}

