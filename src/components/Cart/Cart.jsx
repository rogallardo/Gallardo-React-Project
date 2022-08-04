import React from 'react'
import { myContext } from '../CartContext/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'


export default function Cart() {
    const { cart, removeItem, clear } = useContext(myContext)
    console.log(cart)
    return (

        <div>
            {cart.length ?
                <>
                    <div>
                    <h2>Carrito de compras</h2>
                        <ul >
                            {cart.length && cart.map((item) => 
                              
                                    
                                    <li key={item.id} className='itemoncart-container' >
                                        <div><img className='imgoncart-container' src={item.image} alt={item.title} /></div>
                                        <div><span>Producto: {item.title}</span></div>
                                        <div><span>Cantidad: {item.quantity}</span></div>
                                        <div><span>Total: ${item.total} </span></div>
                                        <button className='eliminar-btn' onClick={() => { removeItem(item.id) }}>Eliminar</button>
                                    </li>
                             
                            )}
                        </ul>
                        <div className='total-container'>
                        <span>Total: ${cart.reduce((p, c) => p + c.total, 0)},00</span>
                            </div>
                            <div className='btncart-container'>
                                 <div>
                               <button className='finalizarcompra-btn'> <Link style={{ textDecoration: 'none' }} to='/checkout' > Finalizar compra</Link></button> 
                            </div>
                            <div>
                            <button className='vaciar-btn' onClick={() => { clear() }}>Vaciar carrito</button>
                            </div>
                            </div>
                           
                        
                        

                    </div>

                </>

                : <div className='msg-container'><Link style={{ textDecoration: 'none' }} to="/"><span className=''>No hay productos aún, click aqui para volver al inicio</span></Link></div>

            }
        </div>



    )
}
