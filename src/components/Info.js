import React from 'react';
import Nightingale from './Nightingale';
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
    },
    nightingaleHeader: {
        fontWeight: 700, 
        marginTop: '10px'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoBox: {
        margin: 'auto'
    },
    nightingale: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

const Info = () => {

    const classes = useStyles();
    return ( 
        <Box style={{ marginTop: '-130px', zIndex: 9999}}>
            <Paper className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={12} className={classes.info}>
                        <Box className={classes.infoBox}>
                            <Typography variant="subtitle2" gutterBottom>
                            Buzzwords on the
                            </Typography>
                            <Typography variant="h3" className={classes.header} gutterBottom>
                            Internet of Things
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                            Buzzwords gathered from 100 tweets #hashtag IoT were gathered and, after filtering
                            for Stopwords, were visualized with Semiotic.js. The application is build
                            with React.js, on an Express.js backend and designed with Material UI.
                            All data were pulled using the Twitter API.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} className={classes.nightingale}>
                        {/* <Typography variant="h6" className={classes.nightingaleHeader} gutterBottom>
                            Top Buzzwords
                        </Typography> */}
                        <Nightingale />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
     );
}
 
export default Info;