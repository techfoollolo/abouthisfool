import React from 'react'
import { useLottie } from 'lottie-react';
import Animation from './rocket.json';
function RocketAnime() {
  const options = {
    animationData:Animation,
    loop:true
  }
  const {View} =useLottie(options);
  return (
    <div className='animeForNav'>{View}</div>
    )
}

export default RocketAnime