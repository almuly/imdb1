import React from "react";
import {Typography, Card} from "@material-ui/core";
import GridRow from "./utils/GridRow";


export default function ItemCard({data}) {
    return (
        <GridRow item xs={3}>
            <Card>
                <Typography>
                    {data.title || data.name}
                </Typography>
            </Card>
        </GridRow>
    );
}
