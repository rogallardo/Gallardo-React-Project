import React from 'react'
import ItemCount from './ItemCount'
import './Item.css' 

export default function Item({ id, price, title, pictureURL, stock}) {
    const onAdd =()=>{
        alert(`Agregaste unidad/es al carrito `)
    }
  return (
    <div className='card'>
        <h1>{pictureURL}</h1>
        <h2>{title}</h2>
        <h2>Precio: {price}</h2>
        <ItemCount  stock = {stock}
                    initial ={1}
                    onAdd={onAdd}/>
    </div>
  )
}
