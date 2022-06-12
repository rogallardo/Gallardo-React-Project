//@ts-check
import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar-container">
    	<div onClick={()=>{alert("clickeaste Logo")}} className='brand-container' >Logo</div>
    	<ul className='menu-container'>
        	<li onClick={()=>{ alert("clickeaste Main")}}  className='menu-btn' >Main</li>
      		<li onClick={()=>{ alert("clickeaste Products")}} className='menu-btn'>Products</li>
      		<li onClick={()=>{ alert("clickeaste Us")}} className='menu-btn' >Us</li>
		</ul>
		<CartWidget cant= "5"/>
  </div>
  )
}



