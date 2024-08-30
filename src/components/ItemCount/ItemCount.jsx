import React from 'react'
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ stock, initial, handleOnBuy }) => {
    const [cant, setCant] = useState(initial);

    const handleClic = (op) => {
        op === "+" ? ClicMas() : ClicMenos();
    }

    const ClicMenos = () => {
        if (cant === 1) {
            alert("El mínimo es 1 producto")
            return
        }
        setCant(cant - 1);
    }

    const ClicMas = () => {
        if (cant == stock) {
            alert('No hay más stock');
            return;
        }
        setCant(cant + 1);
    }

    const handleAddToCart =() =>{
        handleOnBuy(cant);
    }
    return (
        <>
            <div>
                <button className="btn btn-carrito" onClick={() => handleClic("-")}>-</button>
                <span className='cant-carrito'>{cant}</span>
                <button className="btn btn-carrito" onClick={() => handleClic("+")}>+</button>
            </div>
            <button className='btn btn-carrito' onClick={handleAddToCart}> Agregar <FaShoppingCart /></button>
        </>
    )
}

export default ItemCount
