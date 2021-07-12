import React from "react";
import {Typography, Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {CardMedia} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        position: 'relative',
        width: '15%',
        minWidth: 200,
        display: 'flex',
        flexDirection: 'column',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(2),
        transition: `all 0.2s ease-in-out`,
        backgroundColor: (theme.palette.type === 'dark') ? '#333' : '#333',
    },
    cardMedia: {
        minHeight: 400,
        transition: `all 0.5s ease-in-out`,
        '&:hover': {
            transform: `scale(1.1)`,
        }
    },
    cardContent: {
        position: 'absolute',
        width: '90%',
        bottom: 0,
        zIndex: theme.zIndex.drawer - 1,
        backgroundColor: 'rgba(20,20,20,0.75)',
        color: '#ccc',
        fontSize: 14,
        fontFamily: 'Verdana, Arial, sans-serif',
        maxHeight: '20%',
        padding: '10% 5%',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        transition: `all 0.5s ease-in-out`,
    },
    cardDivider: {
        display: 'block',
        height: '1px',
        border: 0,
        borderTop: '1px solid #666',
    },
    cardLink: {
        textDecoration: 'none',
        color: (theme.palette.common.white),
        '&:hover': {
            color: (theme.palette.common.white),
        }
    },
    ratingCount: {
        color: (theme.palette.common.white),
    }
}))
export default function ItemCard({data}) {
    const classes = useStyles()
    const imgLink = `https://image.tmdb.org/t/p/w500${data.poster_path || data.profile_path}`

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={imgLink}/>
            <div className={classes.cardContent}>
                <Typography>{data.vote_average}/10</Typography>
                <small className={classes.ratingCount}>{data.popularity}</small>
                <hr className={classes.cardDivider}/>
                <p>{`${data.title || data.name} ${data.release_date || ""} `}</p>
            </div>
        </Card>
    )
}
