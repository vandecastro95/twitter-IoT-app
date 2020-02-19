import React from 'react';
import { Paper, Grid, Typography, makeStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
   root: {
       width: '100%',
       padding: '5px 0',
       fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
       lineHeight: '1.3125', backgroundColor: 'white',
       transition: 'all .5s',
       boxShadow: '-12px -12px 12px - rgba(255,255,255,1), 12px 12px 12px - rgba(0,0,0,1)',
       '&:hover' : {
        backgroundColor: 'rgb(208,231,243)'
      }
   },
   container: {
       margin: '0 auto',
       display: 'flex',
       flexDirection: 'row',
       maxWidth: '488px'
   },
   heroContainer: {
       whiteSpace: 'pre',
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
   },
   avatar: {
    '&:hover' : {
        cursor: 'pointer'
      }
   },
   heroName: {
       fontWeight: '900',
       '&:hover' : {
        textDecoration: 'underline',
        cursor: 'pointer'
      }
   },
   avatarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
   }
  });

const Tweets = (props) => {

    const { 
        user: {
            name,
            screen_name,
            profile_image_url,
        },
        source,
        text,
        created_at
     } = props.tweet;

     const handleOnClick = (url) => {
        window.location.href = 'https://twitter.com/' + url;
     }

    const classes = useStyles();
    
    return (
        <Paper 
            className={classes.root}
            square
            >
            <Grid container className={classes.container} spacing={1} >
                <Grid item xs={2} className={classes.avatarContainer}>
                    <Avatar 
                        alt={name} 
                        src={profile_image_url} 
                        onClick={() => handleOnClick(screen_name)}
                        className={classes.avatar}
                        /> 
                </Grid>
                <Grid item xs={10} spacing={1}>
                    <Grid container>
                        <Grid item xs={12} className={classes.heroContainer}>
                            <Typography
                            variant="subtitle2" 
                            gutterBottom> 
                                <span className={classes.heroName} onClick={() => handleOnClick(screen_name)}>
                                    {name}
                                </span>
                            {` @${screen_name} · ${created_at.split(' ')[1]} ${created_at.split(' ')[1]}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {text}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Tweets;