import React, {useEffect} from "react";
import {Typography, Link, Grid} from "@material-ui/core";
import GridRow from "../../views/utils/GridRow";
import {makeStyles} from "@material-ui/core/styles";


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
const useStyles = makeStyles((theme) => ({
    root: {
        paddingRight: "40px",
        paddingLeft: "40px",
        paddingTop: "17px",
        paddingBottom: "20px",
        alignItems: "center",
        height: "10vh",
    },
    block__links: {
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        paddingLeft: "15px"
    },
    block: {
        alignItems: "center",
        justifyContent: "flex-end",
        display: "flex",
        color: theme.palette.grey[300],
    },
}));
export default function SearchResultFilter({data, setResultData}) {
    const classes = useStyles()
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
                <Grid xs={3} className={classes.block__links} style={{cursor: 'pointer'}}><Link
                    underline={'always'}
                    onClick={handleAllClick}>
                    All ({(data?.length)})
                </Link>
                    {data ?
                        typeData.map(item =>
                            <Link
                                style={{cursor: 'pointer'}}
                                underline={'always'}
                                onClick={handleClick(item.type, data)}>
                                {item.type_title} ({(filtered(item.type).length)})
                            </Link>)
                        : null}
                </Grid>
                <Grid xs className={classes.block}>
                    <Typography color="textSecondary">founded: {(data?.length)}</Typography>
                </Grid>
            </GridRow>
        </>
    );
}
