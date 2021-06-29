import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {NativeSelect} from "@material-ui/core";
import {ArrowDropDownOutlined} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	formControl: {
		maxWidth: 120,
		padding: 0
	},
	selectControl: {
		padding: 0
	}
}));

export default function SearchDropdownFilter() {
	const classes = useStyles();
	const [state, setState] = useState('All');

	const handleChange = (event) => {
		setState(event.target.value);
		console.log(event.target.value)
	};
	return (
		<div>
			<FormControl className={classes.formControl}>
				<NativeSelect
					value={state.filter}
					onChange={handleChange}
					className={classes.selectControl}
					name="filter"
					variant="outlined"
					disableUnderline={true}
					IconComponent={ArrowDropDownOutlined}
				>
					<option value={"API1"}>All</option>
					<option value={"API2"}>Titles</option>
					<option value={"API3"}>Celebs</option>
					<option value={"API4"}>Companies</option>
				</NativeSelect>
			</FormControl>
		</div>
	);
}
