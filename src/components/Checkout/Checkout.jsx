import React from 'react'
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/dbConnection";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, total, clearCart } = useCartContext();
    const [formData, setFormData] = useState()
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSaveCart = () => {
        const orderCollection = collection(db, "orders")
        const newOrder = {
            buyer: formData,
            items: cart,
            date: new Date(),
            total: total
        }

        addDoc(orderCollection, newOrder)
            .then((doc) => {
                alert("Orden guardada con el ID: " + doc.id)
                clearCart()
                setFormData({ name: "", tel: "", email: "" })
                navigate('/')
            })
            .catch((error) => {
                console.error("Error al realizar la compra: ", error)
            })

    }
    return (
        <div className='formContainer'>
            <div className='formTitle'>Finaliza tu compra</div>

            <div className="form-floating mb-3">
                <input className="form-control" placeholder="Nombre Completo" name="name" id="floatingTextareaDisabled" onChange={(e) => handleOnChange(e)}></input>
                <label for="floatingTextareaDisabled">Nombre Completo</label>
            </div>

            <div className="form-floating mb-3">
                <input type="number" className="form-control" name="tel" id="floatingInputDisabled" placeholder="Telefono" onChange={(e) => handleOnChange(e)}></input>
                <label for="floatingInputDisabled">Teléfono</label>
            </div>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" name="email" id="floatingInputDisabled" placeholder="Email" onChange={(e) => handleOnChange(e)}></input>
                <label for="floatingInputDisabled">Correo Electrónico</label>
            </div>

            <button className='btn btn-lg btnForm' onClick={handleSaveCart}> Finalizar Compra </button>
        </div>
    )
}

export default Checkout