import React, { useState } from 'react'
import './ItemCount.css'


export default function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial) 
  const plusCount =()=>{ 
      setCount(count+1)    
  }

  const minCount =()=>{
    if(count>1){
      setCount(count-1)
    }
  }

  const addToCart =()=>{  
    onAdd(count)
  }


  return (
    <div className = 'itemcount-container'>
        <div className='btns-container'>
        <button onClick={()=>{
             minCount()
            }}className='btn-container'>-</button>
        
        <div className='count-container'> {count} </div>
            
            <button onClick={()=>{
             plusCount()
            }}className='btn-container'>+</button>
          
        </div>
        <div className='btn-addtocart-container'>
            <button onClick={()=>{
              stock>1 ? addToCart() : alert("No hay stock")  }} 
              className='btn-addtocart' disabled={count> stock}>Agregar al carrito</button>
        </div>  
    </div>
  )
}
