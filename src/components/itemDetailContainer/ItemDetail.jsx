
import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { useState } from 'react'
import { myContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'




export default function ItemDetail({products}) {
    const [cambiarBtn, setCambiarBtn] =  useState(false)
    const {addItem} = useContext(myContext)
   

    
    const onAdd = (quantity) => {

        alert(`Agregaste ${quantity} unidad/es de ${products.title} al carrito `)
        setCambiarBtn(true)
        addItem({...products}, quantity)
       
    }

  return (
<div className='detail-container'>
    <div className='img-container'>
        <img src={products.pictureURL} alt={products.title} />
    </div>
    <div className='data-container'>
        <h1>{products.title}</h1>
        <h2>Precio: ARS$ {products.price}</h2>
        <p>Stock: {products.stock}</p>
        <div>
            <h3>
                Detalle del producto:
             </h3>
            <p>{products.description}</p>
        </div>
        <div>
            {
                 cambiarBtn ?
                 <div>
                     <button ><Link className='btn-finishBuy'to={`/cart`}>Finalizar compra</Link></button>
                 </div>
           
                : <ItemCount    stock = {products.stock}
                                initial ={1}
                                onAdd={onAdd}/>  
            }
        </div>
       
            
    </div>
</div>
  )
}
