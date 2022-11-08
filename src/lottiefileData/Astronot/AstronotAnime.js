import React from 'react'
import { useLottie } from 'lottie-react';
import Animation from './astronot.json';
export default function AstronotAnime() {
  const options = {
    animationData:Animation,
    loop:true
  }
  const {View} =useLottie(options);
  return (
    <div className='animeForLeftDrawer'>{View}</div>
    )
}