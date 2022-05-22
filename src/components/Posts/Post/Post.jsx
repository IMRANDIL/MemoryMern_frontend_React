import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons//MoreHoriz';
import moment from 'moment'


const Post = ({ post: { title, selectedFile, creator, createdAt, tags, message, likedCount, _id }, setCurrentId }) => {


    const classes = useStyles();



    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={selectedFile} title={title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{creator}</Typography>
                <Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'whitesmoke' }} size='small' onClick={() => { setCurrentId(_id) }}>
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{
                    tags.map((tag) => (
                        `#${tag}`
                    ))
                }</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{title}</Typography>
            <CardContent>
                <Typography variant='h5' gutterBottom>{message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => { }}>
                    <ThumbUpAltIcon fontSize='small' />
                    Like
                    {likedCount}
                </Button>
                <Button size='small' color='primary' onClick={() => { }}>
                    <DeleteIcon fontSize='small' />
                    Delete

                </Button>
            </CardActions>

        </Card>
    )
}

export default Post