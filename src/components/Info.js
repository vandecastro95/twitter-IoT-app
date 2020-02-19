import React from 'react';
import Nightingale from './Nightingale';
import TweetList from './TweetsList'
import { Paper, Grid, Box, makeStyles, Typography  } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
    //   background: '#F7F6F3',
      border: 0,
      borderRadius: 3,
    //   boxShadow: '0 3px 5px 2px rgb(55,63,80, .3)',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      color: 'black',
      maxWidth: '1200px',
      margin: '40px auto',
      height: 'fit-content'
    },
    infoContainer: {
      padding: '28px',
    },
    header: {
    },
    nightingaleHeader: {
        fontWeight: 700, 
        marginTop: '10px'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700
    },
    infoBox: {
        margin: 'auto'
    },
    nightingale: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    infoBuzzword: {
        fontWeight: '700', 
        marginBottom: '-2px',
        fontSize: '14px'
    },
    infoIot: {
        fontWeight: '900',
        textShadow: '.5px 0px 1px gray'
    },
    infoText: {
        fontWeight: '500', 
        marginTop: '-12px',
        fontSize: '14px'
    }
  });

const Info = () => {

    const classes = useStyles();
    return ( 
        <Box style={{ marginTop: '-160px', zIndex: 9999}}>
            <Paper square elevation={10} className={classes.container}>
                <Grid container spacing={2} className={classes.infoContainer}>
                    <Grid item md={6} sm={12} className={classes.info}>
                        <Box className={classes.infoBox}>
                            <Typography variant="subtitle2" className={classes.infoBuzzword} gutterBottom>
                            Buzzwords on the
                            </Typography>
                            <Typography variant="h3" className={classes.infoIot} gutterBottom>
                            Internet of Things
                            </Typography>
                            <Typography variant="body2" className={classes.infoText} gutterBottom><br></br>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}The Internet of Things is the process of putting a computer
                            processor and a wi-fi connection into everyday items so that we can
                            use computer programing to control those devices. This allows us to create solutions
                            where the devices communicate and work together. Buzzwords were gathered from 100 tweets with #IoT and filtered for stop words. These
                            buzzwords were then visualized using Semiotic.js, which is a data visualization 
                            framework for React.js. The App is built with Node.js, a Express.js server and a 
                            React.js frontend designed with Material UI. All data were pulled from the 
                            Twitter API.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} className={classes.nightingale}>
                        {/* <Typography variant="h6" className={classes.nightingaleHeader} gutterBottom>
                            Top Buzzwords
                        </Typography> */}
                        <Nightingale />
                    </Grid>
                    {/*<Grid item xs={12} style={{ margin: '0 auto' }}>
                        
                    </Grid>*/}
                </Grid>
                <TweetList/> 
            </Paper>
        </Box>
     );
}
 
export default Info;