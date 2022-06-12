//@ts-check
import React from 'react'
import './CartWidget.css'

export default function CartWidget( {cant} ) {
  return (
    <div className='cartwidget-container'>
        <div onClick={()=>{ alert("clickeaste Cart")}} className='cart-img'></div>
        <div className='cart-cant'>{cant}</div>
    </div>
  )
}
