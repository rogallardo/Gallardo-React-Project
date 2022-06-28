import React, { useState, useEffect } from 'react'
import { getArray } from '../helpers/getArray'
import { productsArray } from '../../data/data'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [products, setProducts] = useState ({})
    const [loading, setLoading] = useState (true)
    
    useEffect(() => {
        getArray(productsArray)
        .then((res)=>{
            const item = res.find((item)=> item.id===1)
            setProducts(item)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])
    
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
