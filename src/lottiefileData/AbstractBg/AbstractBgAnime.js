import React from 'react'
import { useLottie } from 'lottie-react';
import Animation from './abstracttechfoollolo.json';
export default function AbstractBgAnime() {
  const options = {
    animationData:Animation,
    loop:true
  }
  const {View} =useLottie(options);
  return (
    <div className='abstract-bg'>{View}</div>
    )
}