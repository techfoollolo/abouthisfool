import React from 'react'
import { useLottie } from 'lottie-react';
import Animation from './file-searching.json';
export default function FileSearchingAnime() {
  const options = {
    animationData:Animation,
    loop:true
  }
  const {View} =useLottie(options);
  return (
    <div className='animeForLeftDrawer'>{View}</div>
    )
}
