import React from "react";
import {Paper, Typography, Card} from "@material-ui/core";


export default function ItemCard({data}) {

	return (
		<Paper>
			<Card>
				{data.map(item =>
					<Typography>
						{item.title || item.name}
					</Typography>
				)}

			</Card>
		</Paper>
	);
}
