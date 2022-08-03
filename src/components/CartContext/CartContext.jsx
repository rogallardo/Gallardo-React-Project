import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
export const myContext = createContext(null)
export default function CardContext({ children }) {

  const [cart, setCart] = useState([])
  const KEY_CODER_PRODUCTS = 'KEY_CODER_PRODUCTS';

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem(KEY_CODER_PRODUCTS));
    if (products) {
      setCart(products);
    } else {
      setCart([])
    }
  }, []);


  const isInCart = (id) => {
    return cart.find((productInCart) =>
      productInCart.id === id
    )
  }


  const addItem = (item, quantity) => {
    let productUpdate
    if (isInCart(item.id)) {
      
      productUpdate = cart.map((product) => product.id === item.id ? ({ ...product, quantity: product.quantity + quantity, total: item.price * quantity }) : product)
      setCart([...productUpdate])
      localStorage.setItem(KEY_CODER_PRODUCTS, JSON.stringify(productUpdate))

    } else {
      productUpdate = [...cart, { ...item, quantity: quantity, total: item.price * quantity }]
      setCart([...productUpdate])
      localStorage.setItem(KEY_CODER_PRODUCTS, JSON.stringify(productUpdate))
    }
  }


  const removeItem = (id) => {
    let resp = cart.filter((el) => el.id !== id)
    setCart(resp)
    localStorage.setItem(KEY_CODER_PRODUCTS, JSON.stringify(resp))
  }

  const clear = () => {
    setCart([])
    localStorage.removeItem(KEY_CODER_PRODUCTS);
  }


  return (
    <>
      <myContext.Provider value={{ cart, addItem, removeItem, clear }}>
        {children}
      </myContext.Provider>

    </>
  )
}
