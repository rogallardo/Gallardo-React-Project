import React from 'react'
import Item from './Item'
import './ItemList.css'

export default function ItemList({productList}) {
  return (
    <div className='item-container'>
        {
            productList.map((item) =>(
                <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL} stock={item.stock}/>
        ))
        }
    </div>
  )
}
