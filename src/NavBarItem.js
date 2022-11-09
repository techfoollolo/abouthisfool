import React from 'react'
import { Link } from 'react-router-dom'

function navBarItem({props,link}) {
  return (
    <button className="navBarItem HandyCoderBorder"><Link className='navBarItemText' to={link}>{props}</Link></button>
  )
}

export default navBarItem