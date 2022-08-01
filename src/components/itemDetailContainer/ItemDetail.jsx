
import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useContext } from 'react'
import { myContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

/*
  const addItem = (product, quantity) => {

    if (isInCart(product.id)) {
      const pepe = cart.map(product => product.id === id) ? {...product, quantity: product.quantity + quantity} : product
      setCart([...pepe])
    } else {
      setCart([...cart, { ...product, quantity: quantity }])
    }
  } */


export default function ItemDetail({products}) {

    const [cambiarBtn, setCambiarBtn] =  useState(false)
    const {addItem} = useContext(myContext)
    const onAdd = (count) => {
        alert(`Agregaste ${count} unidad/es de ${products.title} al carrito `)
        setCambiarBtn(true)
        addItem({...products}, count)     
    }

  return (
<div className='detail-container'>
    <div className='img-container'>
        <img src={products.image} alt={products.title} />
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
