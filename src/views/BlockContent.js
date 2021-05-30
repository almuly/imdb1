import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import GridRow from "./utils/GridRow";
import ItemList from "./ItemList";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "inherit",
		justifyContent: "center",
		alignItems: "center",
		color: theme.palette.grey[300],
	},
}));

function BlockContent({data}) {
	const classes = useStyles();
	return (
		<GridRow>
			{data ?
				<GridRow xs className={classes.root}>
					<ItemList data={data} />
				</GridRow>
				: <Grid item={true} className={classes.root} xs={12}>
					<Typography variant="h3"> Start search imdb...</Typography>
				</Grid>
			}
		</GridRow>
	)
}

export default BlockContent;
