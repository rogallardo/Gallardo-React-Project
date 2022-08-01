import React, { useState, useEffect } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"

export default function ItemDetailContainer() {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {itemId} = useParams();

    useEffect( ()=>{
      const db = getFirestore();
      const itemConsultadoRef = doc(db, 'products', itemId);
      let promesaItem = new Promise((resolve, rej)=>{
          setTimeout(()=>{resolve(getDoc(itemConsultadoRef)) }, 1000)
      })
      
      promesaItem
      .then((snapshot)=>{
          setProducts({...snapshot.data(), id: snapshot.id});
      })
      .catch((error)=> {
          setError(true);
      })
      .finally(()=>{
          setLoading(false);
      })
    }, [itemId])
    
    
  return (
    <div>
        {
            loading?
            <div>
                Cargando..
            </div>
            : 
            <ItemDetail products={products}/>
        }
    </div>
  )
}
