import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'



export const myContext = createContext(null)

export default function CardContext({ children }) {
 
    const [cart, setCart] = useState([])
    const [cantItems, setCantItems] = useState(0)

    const isInCart = (id) => {
    return cart.find((productInCart)=>
    productInCart.id === id 
)}

    const addItem = (product, quantity) => {

        if(isInCart(product.id)){
          let nuevoCart = cart;
          let indexProducto = nuevoCart.findIndex(element => element.id === product.id)
          nuevoCart[indexProducto].quantity = Number(nuevoCart[indexProducto].quantity) + Number(quantity)
          setCart(nuevoCart)
        }else{
            setCart([...cart, {...product, quantity: quantity}])
        }
    }
    const removeItem = (itemId) => {
      setCart(cart.filter((el)=> el.id !== itemId))
    }

    const clear = () => {
      setCart([])
    }


    useEffect(() => {
     setCantItems(cart.reduce((acc, element)=> acc + element.quantity, 0))
    }, [cart, cantItems])
    console.log(cart)


 
  return (
    <>
      <myContext.Provider value={{addItem, removeItem, clear, cantItems}}>
        {children}
    </myContext.Provider>
   
    </>
  
   
  )
}
