import React from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount';

export default function ItemListContainer({greeting}) {

  const onAdd =(count)=>{
   
        alert(`Agregaste ${count} unidad/es al carrito `)
    }
  return (
    <>
    <div className='itemlist-container'>{greeting}
    <ItemCount
              stock = {5}
              initial ={1}
              onAdd={onAdd}
    
    />
    </div>
   
    </>

  )
}
