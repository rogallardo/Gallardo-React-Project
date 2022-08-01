import React from 'react'
import {Link} from 'react-router-dom'

import './Item.css' 

export default function Item({ id, price, title, image, stock}) {
    
  return (
    <div className='item-card'>
       <div className='item-img-container'>
            <img className='item-img'src={image} alt={title} />
        </div>
      <div className='item-data-container'>
          <h3 >{title}</h3>
          <h4>Precio: {price}</h4>
          <p>Stock: {stock}</p>
          <button><Link className='btn-verdetalle'to={`/item/${id}`}>Ver detalle</Link></button>
      </div>  
    </div>
  )
}
