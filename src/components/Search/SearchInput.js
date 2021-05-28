import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress'
import {Grid, TextField} from "@material-ui/core";
import SearchDropdownFilter from "./SearchDropdownFilter";
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		marginTop: 25,
		display: 'flex',
		alignItems: 'center',
		width: 890,
		height: 40,
	},
	form: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
	closeIcon: {
		width: 10,
		height: 10,
		opacity: 0.2,
		color: "#000000",
	}
}));

export default function SearchInput() {
	const classes = useStyles();
	const [load, setLoad] = useState(false)
	const [query, setQuery] = useState('')
	const [storeItem, setStoreItem] = useState([])

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoad(false)
			console.log(query);
		}, 300);
		return () => {
			clearTimeout(timer)
			setLoad(true)
		};
	}, [query]);

	const handleInput = (e) => {
		let inputValue = e.target.value
		setQuery(inputValue);

	};

	const handleBlur = (e) => {
		setStoreItem([...storeItem, query])
		localStorage.setItem('searchRequest', JSON.stringify(storeItem))
	}
	const items = JSON.parse(window.localStorage.getItem('searchRequest')) || [];

	return (
		<Grid>
			<Paper component="form" className={classes.root}>
				<SearchDropdownFilter/>
				<Divider className={classes.divider} orientation="vertical"/>
				{load ? <CircularProgress size='20px'/> : <SearchIcon/>}
				<Autocomplete
					freeSolo
					options={items.map((option) => option)}
					className={classes.form}
					renderInput={(params) => (
						<TextField
							{...params}
							placeholder="Search Imdb"
							margin="normal"
							value={query}
							onChange={handleInput}
							onBlur={handleBlur}
						/>
					)}
				/>
			</Paper>
		</Grid>

	);
}