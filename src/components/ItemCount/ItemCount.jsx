import React, { useState } from 'react'
import './ItemCount.css'


export default function ItemCount({stock, initial, onAdd}) {

  const [quantity, setQuantity] = useState(initial) 
  const plusCount =()=>{ 
      setQuantity(quantity+1)    
  }

  const minCount =()=>{
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }

  const addToCart =()=>{
    
    onAdd(quantity)
  }


  return (
    <div className = 'itemcount-container'>
        <div className='btns-container'>
        <button onClick={()=>{
             minCount()
            }}className='btn-container'>-</button>
        
        <div className='count-container'> {quantity} </div>
            
            <button onClick={()=>{
             plusCount()
            }}className='btn-container'>+</button>
          
        </div>
        <div className='btn-addtocart-container'>
            <button onClick={()=>{
              stock>1 ? addToCart() : alert("No hay stock")  }} 
              className='btn-addtocart' disabled={quantity> stock}>Agregar al carrito</button>
        </div>  
    </div>
  )
}
