import React, { useContext } from 'react';
import ScatterPlot from '../components/ScatterPlot.js'
import Info from '../components/Info.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import { TwitterContext } from '../contexts/TwitterContext';
import { Grid } from '@material-ui/core'

export default () => { 
    const { loading, errorMessage } = useContext(TwitterContext)
    return (
      <div>{
          loading ?  
            <CircularProgress 
              color={"rgb(40,142,157, 1)"} 
              style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%, -50%)' }} 
              /> 
            : 
            errorMessage.length > 0 ?
                <div style={{ 
                  border: '1px solid rgb(55,63,80)', 
                  background: 'rgb(40,142,157, .2)', 
                  color: 'black', 
                  fontSize: '12px',
                  maxWidth: '200px',
                  height: 'fit-content',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  '-webkit-transform': 'translate(-50%, -50%)',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px'
              }}>
              <h1>404</h1>
              {errorMessage}. Please try again later.
            </div>
            :
            <Grid container spacing={0} style={{ width: '100%'}}>
                <Grid item md={11} xs={12} style={{ margin: '0 auto' }}> 
                  <ScatterPlot />
                </Grid>
                <Grid item md={10} xs={11} style={{ margin: '0 auto' }}>
                 <Info/> 
                </Grid>
            </Grid>
        }
      </div>
        )}