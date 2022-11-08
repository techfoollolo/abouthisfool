import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
export default function CardText({header,content}) {


  return (
    <>
    <div class="cardAreaContainer">
      <div class="cardArea HandyCoderBorder">
        <div className='cardText'>

          <h1>{header}</h1>
          <div>
            {content}
          </div>
        </div>
      </div>
      <canvas className='cardArea-space'>

    </canvas>
    </div>

    </>
    
  )
}
