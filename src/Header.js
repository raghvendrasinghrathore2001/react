import React, { useLayoutEffect } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <ul>
        <Link to='/'><li>Home</li></Link>
       <Link to='/About' ><li>About</li></Link>
       <Link to='/Contact' ><li>Contact</li></Link>
    </ul>
  )
}
