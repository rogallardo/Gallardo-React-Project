//@ts-check
import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'


export default function NavBar() {

	
  return (
    <div className="navbar-container">
    	<div ><Link className='brand-container' to={"/"}>Xports</Link></div>
    	<div className='menu-container'>
        	<li><Link to={"/"}>Products</Link>
			  	<ul>
					<li > <Link to={"/category/remeras"}>Remeras</Link></li>
					<li > <Link to={"/category/pantalones"}>Pantalones</Link></li>
					<li > <Link to={"/category/camperas"}>Camperas</Link></li>
			  	</ul>
			</li>
		</div>
		<CartWidget cant={0}/>
  </div>
  
  
  )
}



