import React from 'react';
import Semiotic from '../components/Semiotic'
import XYFrame from '../components/XYFrame.js'
import Info from '../components/Info'

export default () => (
    <div style={{ minHeight: '100vh'}}>
        { <XYFrame />}
         <Info/> 
    </div>
)