
import React from 'react'
import './CartWidget.css'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { myContext } from '../CartContext/CartContext'


export default function CartWidget( ) {
  const  [count, setCount] = useState()
  const {cantItems } = useContext(myContext)
  
  useEffect(() => {
 setCount(cantItems)

  }, [cantItems])
  
  

  return (
    <div className='cartwidget-container'>
        <div onClick={()=>{ alert("clickeaste Cart")}} className='cart-img'></div>
        <div> {count}</div>
    </div>
  )
}
