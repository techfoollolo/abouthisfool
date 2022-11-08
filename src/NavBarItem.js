import React from 'react'

function navBarItem({props}) {
  return (
    <button class="navBarItem HandyCoderBorder"><div className='navBarItemText'>{props}</div></button>
  )
}

export default navBarItem