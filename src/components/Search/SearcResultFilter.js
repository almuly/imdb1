import React from "react";
import {Typography, Link, Grid} from "@material-ui/core";
import GridRow from "../../views/utils/GridRow";
import {makeStyles} from "@material-ui/core/styles";

/* 
*  это вынеси в /constants и переименуй в DataTypes 
* и используй также в DropdownFilter  
* 
* Далее, если бы мы хранили в контексте выбранный фильтр - стоило бы дорефакторить: 
*     - создать enum DataType = { tv: 'tv', movie: 'movie' ,,,} 
*     - и в DataTypes было бы уже  { title: TV', type: DataType.tv } 
*   
* */
const typeData = [ 
	{
		type: "tv",       // имена полей можно без кавычек 
		type_title: "TV", // тут просто title: и обычно title/name/id - такие поля идут первыми: [{title: '', type: ''}, ...] 
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
const useStyles = makeStyles((theme) => ({
	root: { // для размеров/отступов можно методы space-методы theme использовать
		paddingRight:"40px",
		paddingLeft:"40px",
		paddingTop:"17px",
		paddingBottom:"20px",
		alignItems: "center",
		height: "10vh",
	},
	block__links: {
		alignItems: "center",
		justifyContent:"space-between",
		display:"inherit",
		paddingLeft:"15px"
	},
	block: {
		alignItems: "center",
		justifyContent:"flex-end",
		display:"inherit",
		color: theme.palette.grey[300], // вот здесь хорошо 
	},
}));
export default function SearchResultFilter({data, setResultData}) {
	const classes = useStyles()
 
  /* 
   минус этого подхода в том, что при любом рефреше компонента, ты пересчитваешь items по их media_type 
   по идее это должен быть useEffect(...,[data]) который выставляет массив счетчиков  
  * */
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
	const handleAllClick = () => {
		setResultData(data)
	}
	/*не хватает еще выставления по дефолту первого непустого фильтра*/
  
	//
	// useEffect(() => {
	// 	const result = typeData.map(item=>filtered(item.type))
	// 	setFilterData({...filterData,result})
	// 	console.log(result)
	// 	}
	// , [])
	return (
		<>
			<GridRow className={classes.root} xs={12}>
				<Typography>See:</Typography>
				<Grid xs={3} className={classes.block__links} style={{ cursor: 'pointer' }}><Link
					underline={'always'}
					onClick={handleAllClick}>
					All ({(data.length)})
				</Link>
					{data ?
						typeData.map(item =>
							<Link
								style={{ cursor: 'pointer' }}
								underline={'always'}
								onClick={handleClick(item.type, data)}>
								{item.type_title} ({(filtered(item.type).length)})
							</Link>)
						: null}
				</Grid>
				<Grid xs className={classes.block}>
				<Typography color="textSecondary">founded: {(data.length)}</Typography>
				</Grid>
			</GridRow>
		</>
	);
}
