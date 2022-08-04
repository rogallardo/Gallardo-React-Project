import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react'
import { myContext } from '../CartContext/CartContext'
import './CheckOut.css'
import swal from 'sweetalert'


export default function CheckOut() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { cart } = useContext(myContext)
    function CamposValidados(){
        if(name===""){
            swal({
                title: "Error en el formulario",
                text: `Por favor revise el nombre`,
                icon: "warning",
            })
         }else if (phone===""){
            swal({
                title: "Error en el formulario",
                text: `Por favor revise el teléfono`,
                icon: "warning",
            })
        
        }else if(email===""){
            swal({
                title: "Error en el formulario",
                text: `Por favor revise el email`,
                icon: "warning",
            })

        }else{
            handleClickBuy();
        }
    }

    function validarEmail(valor){
        let re = /\S+@\S+\.\S+/;
        if(  re.test(valor)  && (valor!=="")){
            setEmail(valor)
            localStorage.setItem('email', JSON.stringify(valor))    
        }
      }
      function validarName(valor){            
        if( (/^[A-z ]+$/.test(valor)) && (valor!=="") ){
        setName(valor)
        localStorage.setItem('name', JSON.stringify(valor))    
        } 
      }

      function validarPhone(valor){
        let numTel = /^\d{8,12}$/;
        if( valor.match(numTel)  && (valor!=="") ){
            setPhone(valor)
            localStorage.setItem('phone', JSON.stringify(valor))    
        }
      }

    function handleClickBuy() {
        const orders = {
            buyer: { name, phone, email },
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
        clearForm()

    }
    function clearForm(){
        setName("");
        localStorage.setItem('name', JSON.stringify(""))    
        setEmail("");
        localStorage.setItem('email', JSON.stringify(""))    
        setPhone("")
        localStorage.setItem('phone', JSON.stringify(""))    
      }

    return (
        <div className='checkout-container'>

            <div className='resumendecompra-container'>
                <h2 >Resumen de compra</h2>
                <div>
                    <ul>
                        {cart.map((item) =>
                            
                                <li key={item.id} className='itemoncheckout-container' >
                                    <div><img className='imgoncart-container' src={item.image} alt={item.title} /></div>
                                    <div><span>Producto: {item.title}</span></div>
                                    <div><span>Cantidad: {item.quantity}</span></div>
                                    <div><span>Total: ${item.total},00 </span></div>

                                </li>
                            
                        )}

                    </ul>
                </div>

                <h2 >Total: ${cart.reduce((p, c) => p + c.total, 0)},00</h2>
            </div>
            <div className='form-container'>
                <h2 className='completar-title'>Completar para finalizar compra</h2>
                <div>
                    <div>
                        <p className='textform'>Ingrese su nombre:</p>
                        <input onChange={(e) => validarName(e.target.value)} type={'text'} placeholder={'Juan Perez'} className='input'></input>
                    </div>

                    <div>
                        <p className='textform'>Ingrese su telefono:</p>
                        <input onChange={(e) => validarPhone(e.target.value)} type={'text'} placeholder={'1500000000'} className='input'></input>
                    </div>
                    <div>
                        <p className='textform'>Ingrese su email:</p>
                        <input onChange={(e) => validarEmail(e.target.value)} type={'text'} placeholder={'ejemplo@ejemplo.com'} className='input'></input>
                    </div>
                </div>

                <div>
                <button onClick={CamposValidados} className='comprar-btn'>Confirmar compra</button>
                    </div>
                                
                

            </div>

        </div>
    )
}
