import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
import { getArray } from '../helpers/getArray'
import { productsArray } from '../../data/data'
import { useParams } from "react-router-dom"

export default function ItemListContainer() {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
        getArray(productsArray)
        .then((res)=>{
          categoryId?
          setProductList(res.filter((item)=> item.category === categoryId))
          :
          setProductList(res)
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          setLoading(false)
        })
    }, [categoryId])
  
 
  
  return (
    <>
 
    <div className='itemlist-container'>
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
