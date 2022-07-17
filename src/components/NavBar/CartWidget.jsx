
import React from 'react'
import './CartWidget.css'

import { useContext } from 'react'
import { myContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'


export default function CartWidget( ) {
  
  const { cart } = useContext(myContext)


  return (

    <div className='cartwidget-container'>
      <Link to="/cart"><div  className='cart-img'></div> </Link>
      <div>       
       {cart.length > 0 && <span>{cart.reduce((p, c)=> p + c.quantity, 0)}</span>}
      </div>
    </div>
  )
}
