import React from 'react';
import ScatterPlot from '../components/ScatterPlot.js'
import Info from '../components/Info.js'

export default () => (
    <div style={{ minHeight: '100vh'}}>
        { <ScatterPlot />}
         <Info/> 
    </div>
)