import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { myContext } from '../CardContext/CardContext'

export default function ItemDetail({title, price, pictureURL, description, stock}) {
    const {pepe} = useContext(myContext)
    const onAdd =(count)=>{
        alert(`Agregaste ${count} unidad/es de ${title} al carrito `)
    }
    
  return (
<div className='detail-container'>
    <div className='img-container'>
        <img src={pictureURL} alt={title} />
    </div>
    <div className='data-container'>
        <h1>{title}</h1>
        <h2>Precio: ARS$ {price}</h2>
        <p>Stock: {stock}</p>
        <div>
            <h3>
                Detalle del producto:
             </h3>
            <p>{description}</p>
        </div>

        <ItemCount  stock = {stock}
                    initial ={1}
                    onAdd={onAdd}/>      
    </div>
</div>
  )
}
