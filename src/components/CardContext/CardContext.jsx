import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'


export const myContext = createContext(null)

export default function CardContext({ children }) {
 
    const [cart, setCart] = useState([])
  
    const addItem =()=>{
       
    }
 
  return (
    <myContext.Provider value={{addItem}}>
        {children}
    </myContext.Provider>
  )
}