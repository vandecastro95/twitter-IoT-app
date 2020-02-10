import React from 'react';
import { Paper, Grid, Box, makeStyles, Typography  } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
      background: '#F7F6F3',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgb(55,63,80, .3)',
      color: 'black',
      padding: '30px',
      maxWidth: '1200px',
      margin: '40px auto'
    },
    header: {
        fontWeight: 700
    }
  });

const Info = () => {

    const classes = useStyles();
    return ( 
        <Box style={{ marginTop: '-130px', zIndex: 9999}}>
            <Paper className={classes.container}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                        Internet of Things
                        </Typography>
                        <Typography variant="h3" className={classes.header} gutterBottom>
                            Buzzwords
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Typography variant="body2" gutterBottom>
                            Buzzwords gathered from 100 tweets #hashtag IoT were gathered and, after filtering
                            for Stopwords, were visualized with Semiotic.js. The application is build
                            with React.js, on an Express.js backend and designed with Material UI.
                            All data were pulled using the Twitter API.
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={12}>
                    
                    </Grid>
                </Grid>
            </Paper>
        </Box>
     );
}
 
export default Info;