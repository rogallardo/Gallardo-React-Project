//@ts-check
import React from 'react'
import './CartWidget.css'
import { useState } from 'react'


export default function CartWidget( {cant} ) {
  const  [count, setCount] = useState(cant)
  

  return (
    <div className='cartwidget-container'>
        <div onClick={()=>{ alert("clickeaste Cart")}} className='cart-img'></div>
        <div onClick={()=>{setCount(count + 1)}} className='cart-cant'>{count}</div>
    </div>
  )
}
