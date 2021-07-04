import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridRow from "./utils/GridRow";
import ItemCard from "./ItemCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "inherit",
        paddingRight: "40px",
        paddingLeft: "40px",
        justifyContent: "space-between",
        alignItems: "center",
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
