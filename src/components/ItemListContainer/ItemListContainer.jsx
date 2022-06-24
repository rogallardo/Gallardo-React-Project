import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'

export default function ItemListContainer({greeting}) {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    let products = [
      {key: "fgdgdfggfjhfsdfsd145", id: 1, title: "Remera", price: 500, pictureURL: "Aqui va la imagen"},
      {key: "dsfdsfdsvrsrvs12", id: 2, title: "Pantalón", price: 400, pictureURL: "Aqui va la imagen"}
    
    ]
    new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(products)
      }, 2000);
    }).then((res)=>{
      setProductList(res)
    })
  
    }, [])
  
 
  
  return (
    <>
    <div className='itemlist-container'>{greeting}
    <ItemList productList={productList}/> 
    
    
    
    </div>
   
   
   
    </>

  )
}
