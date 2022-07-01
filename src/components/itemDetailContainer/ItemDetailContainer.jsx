import React, { useState, useEffect } from 'react'
import { getArray } from '../helpers/getArray'
import { productsArray } from '../../data/data'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"

export default function ItemDetailContainer() {
    const [products, setProducts] = useState ({})
    const [loading, setLoading] = useState (true)
    const { itemId } = useParams()
    
    useEffect(() => {
        getArray(productsArray)
        .then((res)=>{
            const item = res.find((item)=> item.id===Number(itemId))
            setProducts(item)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [itemId])
    
  return (
    <div>
        {
            loading?
            <div>
                Cargando...
            </div>
            : 
            <ItemDetail {...products}/>
        }
    </div>
  )
}
