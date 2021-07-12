import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridRow from "../../views/utils/GridRow";
import ItemCard from "./ItemCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        paddingRight: "40px",
        paddingLeft: "40px",
        alignItems:'flex-start',
        height: "20vh",
        color: theme.palette.grey[300],
    },

}));

function ItemList({data}) {
    const classes = useStyles()
    const value = data.results ? data.results : Object.values(data)[0]
    return (
        <GridRow item xs={12} className={classes.root}>
            {value?.map((item, index) =>
                <ItemCard key={index} data={item}/>
            )}
        </GridRow>
    )
}

export default ItemList;
