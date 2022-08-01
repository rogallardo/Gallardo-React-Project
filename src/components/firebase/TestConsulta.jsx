import React, { useEffect } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

export default function TestConsulta() {
    useEffect(() => {
        const db = getFirestore()
        const cp1Ref = doc(db, 'products', 'HCvTrHx9pWzuiKQ9X1sq')
        getDoc(cp1Ref).then((res) => {
        const item = {...res.data(), id: res.id}  
        console.log(item)
        })

        
    }, [])
    
  return (
    <div>TestConsulta</div>
  )
}
