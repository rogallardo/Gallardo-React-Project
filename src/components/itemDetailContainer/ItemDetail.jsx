import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { useState } from 'react'
import { myContext } from '../CardContext/CardContext'
import { Link } from 'react-router-dom'

export default function ItemDetail({title, price, pictureURL, description, stock,}) {
    const [cambiarBtn, setCambiarBtn] =  useState(false)
    
    const onAdd =(count)=>{
        alert(`Agregaste ${count} unidad/es de ${title} al carrito `)
        setCambiarBtn(true)
    }
    const {addItem} = useContext(myContext)
  return (
<div className='detail-container'>
    <div className='img-container'>
        <img src={pictureURL} alt={title} />
    </div>
    <div className='data-container'>
        <h1>{title}</h1>
        <h2>Precio: ARS$ {price}</h2>
        <p onClick={()=>{
            addItem()
        }}>Stock: {stock}</p>
        <div>
            <h3>
                Detalle del producto:
             </h3>
            <p>{description}</p>
        </div>
        <div>
            {
                 cambiarBtn ?
                 <div>
                     <button ><Link className='btn-finishBuy'to={`/cart`}>Finalizar compra</Link></button>
                 </div>
           
                : <ItemCount  stock = {stock}
                                initial ={1}
                                onAdd={onAdd}/>  
            }
        </div>
       
            
    </div>
</div>
  )
}
