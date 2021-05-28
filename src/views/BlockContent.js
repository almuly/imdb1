import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import GridRow from "./utils/GridRow";
import ItemCard from "./ItemCard";

const useStyles = makeStyles((theme) => ({

	root: {
		display: "inherit",
		justifyContent: "center",
		alignItems: "center",
		height: "80vh",
		color: theme.palette.grey[300],
	},
}));

function BlockContent({data}) {
	console.log(data, "Block Content")

	const classes = useStyles();
	return (
		<GridRow>
			{data ? <ItemCard data={data}/>
				: <Grid item={true} className={classes.root} xs={12}>
					<Typography variant="h3"> Start search imdb...</Typography>
				</Grid>
			}
		</GridRow>
	)
}

export default BlockContent;
