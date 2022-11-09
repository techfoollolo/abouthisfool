import React from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei';
function Box(){
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

export default function Techfoollolo3dWorld() {
 
  return (
    <div id="threed">

    <Canvas flat linear>
      <Stars />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight />
      <Box /></Canvas>
    </div>
    )
}

