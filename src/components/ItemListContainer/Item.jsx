import React from 'react'
import {Link} from 'react-router-dom'

import './Item.css' 

export default function Item({ id, price, title, pictureURL, stock}) {
    
  return (
    <div className='item-card'>
       <div className='item-img-container'>
            <img className='item-img'src={pictureURL} alt={title} />
        </div>
      <div className='item-data-container'>
          <h3 >{title}</h3>
          <h4>Precio: {price}</h4>
          <a>Stock: {stock}</a>
          <button><Link className='btn-verdetalle'to={`/item/${id}`}>Ver detalle</Link></button>
      </div>  
    </div>
  )
}
