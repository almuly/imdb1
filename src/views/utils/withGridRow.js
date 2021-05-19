import React from "react";
import Grid from '@material-ui/core/Grid';


const withGridRow = WrappedComponent => (props) => {

    return (
        <Grid container={true} direction={"row"}  alignItems={"center"} >
            <WrappedComponent {...props}/>
        </Grid>
    )
}

export default withGridRow