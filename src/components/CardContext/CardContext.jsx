import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'


export const myContext = createContext(null)

export default function CardContext({ children }) {
    const pepe =()=>{
        console.log("hola")
    }
    const [cart, setCart] = useState([])
  
    const addItem=(item, quantity)=>{
        
    }
 
  return (
    <myContext.Provider value={{pepe}}>
        {children}
    </myContext.Provider>
  )
}
