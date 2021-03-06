import React, { useContext } from 'react';
import { OrdinalFrame } from 'semiotic'
import { scaleSqrt } from "d3-scale"
import { TwitterContext } from '../contexts/TwitterContext'

const Nightingale = () => {

  //Component displays the top 20 buzzwords in a Nightingale chart

  const {buzzWords} = useContext(TwitterContext)

  const frameProps = { 
    // /* --- Data --- */
      data: buzzWords.slice(0, 20),
    
    // /* --- Size --- */
      size: [400,400],
      margin: 60,
    
    // /* --- Layout --- */
      type: "bar",
      projection: "radial",
    
    
    // /* --- Process --- */
      rScaleType: scaleSqrt(),
      oAccessor: "word",
      rAccessor: "count" ,
    
    // /* --- Customize --- */
      style: d => {
        return {
          fill: "#9FD0CB",
          stroke: "white",
        }
      },
      // axes: true  
      labelSettings: {
        label: true,
        orient: 'stem'
      }
    }
  
  return(
    <div>
        {
          buzzWords.length > 0 && 
            <OrdinalFrame
              baseMarkProps={{ transitionDuration: { default: 500, fill: 2500 } }}
              oLabel={d => <text 
                fontSize={12}
                textAnchor = "start"
                style={{ maxWidth: '20px'}}
                >
                {d}
              </text> }
              hoverAnnotation={true}
              tooltipContent={d => (
                  <div style={{background: 'white', border: '1px solid gray', padding: '10px', minWidth: '45px'}}>
                      <h5 style={{fontSize: '13px', fontWeight: '500', marginBottom: '-3px', wordBreak: 'keep-all'}}>
                       {d.pieces[0].word}
                      </h5>
                      <p style={{fontSize: '11px'}}>
                        {d.pieces[0].count}  mentions
                      </p>
                  </div>
              )}
              {...frameProps}
            />
          }
    </div>
)}

export default Nightingale;