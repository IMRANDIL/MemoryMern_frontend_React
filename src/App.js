import useStyles from './styles';
import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import MemoryImg from '../src/image/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';



const App = () => {

    const classes = useStyles();

    return (
        <Container maxWidth='lg' >
            <AppBar className={classes.appBar} position='static' color='inherit' style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography className={classes.heading} variant='h2' align='center'>
                    Memories
                </Typography>
                <img className={classes.image} src={MemoryImg} alt="memoryimg" height='60' draggable='false' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App