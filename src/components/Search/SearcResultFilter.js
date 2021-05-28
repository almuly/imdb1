import React from "react";
import Link from '@material-ui/core/Link';

const typeData = [
	{
		"type": "tv",
		"type_title": "TV",
	},
	{
		"type": "movie",
		"type_title": "Movies",
	},
	{
		"type": "person",
		"type_title": "Names",
	}
]
export default function SearchResultFilter({data, setResultData}) {

	const filtered = (type) => {
		return data.filter(item => type === item.media_type)
	}

	const handleClick = (type, data) => () => {
		let result = []
		data.forEach((item) => {
			if (item.media_type === type) {
				result.push(item)
			}
		})
		return setResultData(result)
	}
	// useEffect(() => {
	// 	const result = typeData.map(item=>filtered(item.type))
	// 	setFilterData({...filterData,result})
	// 	console.log(result)
	// 	}
	// , [])

	return (
		<>
			{data ?
				typeData.map(item => <Link
				onClick={handleClick(item.type, data)}>{item.type_title} ({(filtered(item.type).length)})</Link>)
				: null}
		</>


	);
}
