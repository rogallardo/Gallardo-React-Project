import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
export const myContext = createContext(null)
export default function CardContext({ children }) {
 
    const [cart, setCart] = useState([])
   
   
    useEffect(() => {
      console.log(cart)

      
     }, [cart])
     
   
    const isInCart = (id) => {
    return cart.find((productInCart)=>
    productInCart.id === id 
)}


    const addItem = (item, quantity) => {
      if (isInCart(item.id)) {
        const productUpdate = cart.map(product => ( {...product, quantity:  product.quantity + quantity, total: item.price * quantity}))
        setCart([...productUpdate])
      } else {
        setCart([...cart, { ...item, quantity: quantity, total: item.price * quantity}])     
      }
     
    }
    const removeItem = (id) => {
      setCart(cart.filter((el)=> el.id !== id))
    }

    const clear = () => {
      setCart([])
    }
    
    
  return (
    <>
      <myContext.Provider value={{cart, addItem, removeItem, clear}}>
        {children}
    </myContext.Provider>
   
    </>
  )
}
