import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridRow from "./utils/GridRow";
import ItemCard from "./ItemCard";

const useStyles = makeStyles((theme) => ({

	root: {
		display: "inherit",
		paddingRight:"40px",
		paddingLeft:"40px",
		justifyContent: "space-between",
		alignItems: "center",
		height: "20vh",
		color: theme.palette.grey[300],
	},
}));

function ItemList({data}) {
	const classes =useStyles()
	console.log(data)
	return (
		<GridRow xs={12} className={classes.root}>
			{data.map(item =>
				<ItemCard data={item}/>
			)}
		</GridRow>
	)
}
export default ItemList;
