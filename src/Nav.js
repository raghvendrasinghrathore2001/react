import React from 'react'
import {BrowserRouter, Routes, Route}from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
export default function Nav() {
  return (
    
<BrowserRouter>
<Routes>

<Route path='/' element={<Home />} />
<Route path='/About' element={<About />} />
<Route path='/Contact' element={<Contact />}/>


</Routes>
</BrowserRouter>
  )
}
