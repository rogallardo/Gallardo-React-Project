import React, { useEffect } from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export default function TestConColect() {
    useEffect(() => {
        const db = getFirestore()
        /*const collectionRef = collection(db, 'products')*/
        const collectionRef = query(collection(db, 'products'), where('category', '==', 'remeras'))
        getDocs(collectionRef).then((res) => {
        const auxArray = res.docs.map((item) => ({...item.data(), id: item.id}))
        console.log(auxArray)
        })

        
    }, [])
    
  return (
    <div>TestConColect</div>
  )
}
