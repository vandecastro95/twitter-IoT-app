import React, { useContext } from 'react';
import { ORFrame, XYFrame, NetworkFrame, OrdinalFrame  } from 'semiotic'
import { scaleSqrt } from "d3-scale"
import { TwitterContext } from '../contexts/TwitterContext'

const Semiotic = () => {

  const {buzzWords} = useContext(TwitterContext)
  console.log(buzzWords)

  const frameProps = { 
    // /* --- Data --- */
      data: buzzWords,
    
    // /* --- Size --- */
      size: [400,400],
      margin: 70,
    
    // /* --- Layout --- */
      type: "bar",
      projection: "radial",
    
    
    // /* --- Process --- */
      rScaleType: scaleSqrt(),
      oAccessor: "word",
      rAccessor: ["count" ],
    
    // /* --- Customize --- */
      style: d => {
        return {
          fill: "#9FD0CB",
          stroke: "white"
        }
      },
      title: "Tweets",
      axes: true,
    
    // /* --- Annotate --- */
      oLabel: true
    }
  
  return(
    <div>
        {buzzWords.length > 0 && <OrdinalFrame
            {...frameProps}
        />}
    </div>
)}

export default Semiotic;