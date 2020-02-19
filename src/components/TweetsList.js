import React, { useContext } from 'react';
import { 
    Grid, 
    Typography, 
    ExpansionPanel, 
    ExpansionPanelSummary, 
    ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import { TwitterContext } from '../contexts/TwitterContext';
import Tweets from './Tweets';

const TweetList = () => {

    const { data, loading } = useContext(TwitterContext);
    

    return (
        
        <ExpansionPanel 
            TransitionProps={{ unmountOnExit: true }}
            style={{ 
                boxShadow: 'none', 
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                marginTop: '-5px',
                overflow: 'hidden',
                borderTop: '1px solid rgba(0, 0, 0, 0.12)'
            }}
        >
                <ExpansionPanelSummary 
                style={{ 
                    fontWeight: 900, 
                    backgroundColor: 'white'
                }}
                expandIcon={<ExpandMoreSharpIcon  />}
                >
                    <Typography 
                        gutterBottom 
                        variant="subtitle2"
                        style={{
                            padding: '10px'
                        }}
                    >
                        Tweets
                    </Typography>
                </ExpansionPanelSummary>
            
                <Grid 
                    container 
                    spacing={1} 
                    style={{ 
                        paddingTop: '35px',
                        backgroundColor: '#eceff1'
                    }}
                >
                {
                    data.map((tweet) => 
                        <Grid 
                            item xs={12}
                            key={tweet.id}>
                            <ExpansionPanelDetails>
                            <Tweets 
                                tweet={tweet}
                        
                            />
                            </ExpansionPanelDetails>
                        </Grid>
                    )
                        }
                </Grid>
        </ExpansionPanel>
    )
}

export default TweetList;