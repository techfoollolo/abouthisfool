import React from 'react'
import { useLottie } from 'lottie-react';
import BgAnimation from '../../student-bg.json';
import AbstractBgAnime from '../AbstractBg/AbstractBgAnime';
function BgComponent() {
    const options = {
        animationData:BgAnimation,
        loop:true,
        play:true
      }
      const {View} =useLottie(options);
  return (
    <div id="bgpng-container">
    <div id="the-lottiefile">{View}</div>
    <AbstractBgAnime />
</div>
  )
}

export default BgComponent