import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { getArray } from '../helpers/getArray'
import { productsArray } from '../../data/data'

export default function ItemListContainer({greeting}) {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
        getArray(productsArray)
        .then((res)=>{
          setProductList(res)
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          setLoading(false)
        })
    }, [])
  
 
  
  return (
    <>
 
    <div className='itemlist-container'>{greeting}
      {
        loading?

        <div> Cargando... </div>
        : <div>
           <ItemList productList={productList}/> 
        </div>
      }

    </div>
   
   
   
    </>

  )
}
