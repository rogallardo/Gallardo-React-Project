import React from 'react'
import { myContext } from '../CartContext/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

export default function Cart() {
    const { cart, removeItem } = useContext(myContext)
    return (

        <div>
            {cart.length ?
                <>
                    <div>
                        <ul>
                            {cart.length && cart.map((item) =>
                                <div >
                                    <li key={item.id}className='itemoncart-container' >
                                        <div><img className='imgoncart-container' src={item.pictureURL} alt={item.title} /></div>
                                        <div><span>Product: {item.title}</span></div>
                                        <div><span>Quantity: {item.quantity}</span></div>
                                        <div><span>Total: ${item.total},00 </span></div>
                                        <button className='eliminar-btn' onClick={() => { removeItem(item.id) }}>Eliminar</button>
                                    </li>
                                </div>
                            )}
                        </ul>
                        <span>Total: ${cart.reduce((p, c) => p + c.total, 0)},00</span>
                    </div>

                </>

                : <Link to="/"><span>No hay productos aún</span></Link>

            }
        </div>



    )
}
