import React, { useEffect } from 'react'
import BgAnimation from './student-bg.json';
import Box from '@mui/material/Box';
import { useLottie } from 'lottie-react';
export default function CardText({header,content}) {
  const options = {
    animationData:BgAnimation,
    loop:true,
    play:true
  }
  const {View} =useLottie(options);

  return (
    <div class="cardAreaContainer">
      <div class="cardArea HandyCoderBorder">
        <div className='cardText'>
        <Box    sx={{
        width: 100,
        height: 100,
        display:'flex',
        top:0,
        left:0,
        zIndex:-1
      }}>
                {View}
        </Box>
          <h1>{header}</h1>
          <div>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}
