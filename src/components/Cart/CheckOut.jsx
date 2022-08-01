import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react'
import { myContext } from '../CartContext/CartContext'
import './CheckOut.css'
import swal from 'sweetalert'


export default function CheckOut() {

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const { cart } = useContext(myContext)

    function handleClickBuy() {
        const orders = {
            buyer: { name, tel, email },
            cart: cart
        };
        const db = getFirestore();
        const collectionRef = collection(db, 'orders');
        addDoc(collectionRef, orders).then(({ id }) =>
            swal({
                title: "Compra confirmada",
                text: `El id de su compra es: ${id}`,
                icon: "success",
            })
        )

        console.log(cart)

    }

    return (
        <div className='checkout-container'>

            <div className='resumendecompra-container'>
                <h2 >Resumen de compra</h2>
                <div>
                    <ul>
                        {cart.map((item) =>
                            <div >
                                <li key={item.id} className='itemoncheckout-container' >
                                    <div><img className='imgoncart-container' src={item.image} alt={item.title} /></div>
                                    <div><span>Product: {item.title}</span></div>
                                    <div><span>Quantity: {item.quantity}</span></div>
                                    <div><span>Total: ${item.total},00 </span></div>

                                </li>
                            </div>
                        )}

                    </ul>
                </div>

                <h2>Total: ${cart.reduce((p, c) => p + c.total, 0)},00</h2>
            </div>
            <div className='form-container'>
                <h2 className='completar-title'>Completar para finalizar compra</h2>
                <div>
                    <div>
                        <p>Ingrese su nombre:</p>
                        <input onChange={(e) => setName(e.target.value)} type={'text'} placeholder={'ingrese nombre'} className='input'></input>
                    </div>

                    <div>
                        <p>Ingrese su telefono:</p>
                        <input onChange={(e) => setTel(e.target.value)} type={'text'} placeholder={'ingrese tel'} className='input'></input>
                    </div>
                    <div>
                        <p>Ingrese su email:</p>
                        <input onChange={(e) => setEmail(e.target.value)} type={'text'} placeholder={'ingrese email'} className='input'></input>
                    </div>
                </div>


                <button onClick={handleClickBuy} className='comprar-btn'>Comprar</button>

            </div>

        </div>
    )
}
