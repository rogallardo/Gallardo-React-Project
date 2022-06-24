import React from 'react'
import ItemCount from './ItemCount'
import './Item.css' 

export default function Item({ id, price, title, pictureURL}) {
    const onAdd =()=>{
        alert(`Agregaste unidad/es al carrito `)
    }
  return (
    <div className='card'>
        <h1 >{pictureURL}</h1>
        <h2>{title}</h2>
        <h2>{price}</h2>
        <ItemCount  stock = {5}
                    initial ={1}
                    onAdd={onAdd}/>
    </div>
  )
}
