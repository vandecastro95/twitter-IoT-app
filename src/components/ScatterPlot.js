import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame"
import React, {useContext} from 'react';
import { TwitterContext } from '../contexts/TwitterContext';

export default () => {

  const { buzzWords } = useContext(TwitterContext);

  //get most mentioned word

  const frameProps = { 
      /* --- Data --- */
        points: buzzWords,
      
      /* --- Size --- */
        size: [700,400],
        margin: { left: 40, bottom: 90, right: 40, top: 30 },
        responsiveWidth: true,
      
      /* --- Process --- */
        xAccessor: (d) => Math.floor(Math.random() * (90 - 0 + .5)),
        yAccessor: (d) => Math.floor(Math.random() * (90 - 0   + .5)),
        yExtent: [-10, 100],
        xExtent: [-10, 100],
      
      /* --- Customize --- */
        pointStyle: d => {
          return {
            //radius shouldn't be greater than 55
            r: Math.pow(d.count + 2, 1.5) >= 55 ? 55 : Math.pow(d.count + 1, 1.5),
            fill: d.count >= 18 ? "rgb(40,142,157, .2)" : 
                  d.count >= 10 ? "rgb(137,194,224, .4)" :
                  d.count >= 2 ? "rgb(40,142,157, .6)" : 
                  "rgba(0, 86, 98, .6)",
            stroke: d.count >= 13 && "rgb(55,63,80)"
          }
        },

      //   axes: [{orient: 'left', tickFormat: () => ''}, {orient: 'top',  tickFormat: () => ''}],
        lineStyle: {
            stroke: 'red'
        }
      }
    return <ResponsiveXYFrame
              style={{ zIndex: -1}}

              //tooltip
              hoverAnnotation={true}
              tooltipContent={d => (
                  <div style={{background: 'white', border: '1px solid gray', padding: '10px', minWidth: '45px'}}>
                      <h5 style={{fontSize: '12px', fontWeight: '500', marginBottom: '-3px'}}>{d.word}</h5>
                      <p style={{fontSize: '11px'}}>{d.count} mentions</p>
                    
                  </div>
              )}
              {...frameProps} 
            />
} 