
import React from 'react'
import { useLottie } from 'lottie-react';
import Animation from './full-page-loading-spinner.json';
export default function FullPageLoadingSpinner() {
  const options = {
    animationData:Animation,
    loop:true
  }
  const {View} =useLottie(options);
  return (
    <div>{View}</div>
    )
}