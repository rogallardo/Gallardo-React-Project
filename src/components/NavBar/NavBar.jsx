//@ts-check
import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'


export default function NavBar() {

	
  return (
    <div className="navbar-container">
    	<div onClick={()=>{alert("clickeaste Logo")}} className='brand-container'>Logos</div>
    	<div className='menu-container'>
        	<li onClick={()=>{ alert("clickeaste Main")}} ><a href=''>Main</a></li>
      		<li><a href=''>Products</a>
			  	<ul>
					<li onClick={()=>{ alert("clickeaste Producto 1")}}><a href=''>Producto 1</a></li>
					<li onClick={()=>{ alert("clickeaste Producto 2")}}><a href=''>Producto 2</a></li>
					<li onClick={()=>{ alert("clickeaste Producto 3")}}><a href=''>Producto 3</a></li>
					<li onClick={()=>{ alert("clickeaste Producto 4")}}><a href=''>Producto 4</a></li>
			  	</ul>
			</li>
      		<li onClick={()=>{ alert("clickeaste Us")}} ><a href=''>Us</a></li>
		</div>
		<CartWidget cant={0}/>
  </div>
  
  
  )
}



