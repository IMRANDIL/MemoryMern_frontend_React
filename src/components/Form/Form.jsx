import React, { useState } from 'react'
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';



const Form = () => {

    const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }



    const handleInput = (e) => {
        setPostData({ ...postData, creator: e.target.value })
    }



    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>
                    Creating a Memory
                </Typography>
                <TextField name="creator" variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={handleInput} />
                <TextField name="title" variant='outlined' label='Title' fullWidth value={postData.title} onChange={handleInput} />
                <TextField name="message" variant='outlined' label='Message' fullWidth value={postData.message} onChange={handleInput} />
                <TextField name="tags" variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={handleInput} />
            </form>
        </Paper>
    )
}

export default Form