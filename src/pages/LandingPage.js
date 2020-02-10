import React, { useContext } from 'react';
import ScatterPlot from '../components/ScatterPlot.js'
import Info from '../components/Info.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import { TwitterContext } from '../contexts/TwitterContext';

export default () => { 
    const { loading } = useContext(TwitterContext)
    return (
    <div style={{ minHeight: '100vh', width: '100%'}}>
        {
          loading ?  
            <CircularProgress 
              color={"rgb(40,142,157, 1)"} 
              style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%, -50%)' }} 
              /> 
            : <div> <ScatterPlot /> <Info/> </div>
        }
            
    </div>
)}