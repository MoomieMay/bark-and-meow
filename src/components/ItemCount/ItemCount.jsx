import React from 'react'
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ stock, initial, handleOnBuy }) => {
    const navigate = useNavigate();
    const [cant, setCant] = useState(initial);
    const [itemAdded, setItemAdded] = useState(false);

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

    const handleAddToCart = () => {
        handleOnBuy(cant);
        setItemAdded(true);
    }

    const handleGoToCheckout = () => {
        navigate("/Carrito");
        setItemAdded(false);

    }

    return (
        <>
            {itemAdded ? (
                <button className='btn btn-carrito' onClick={handleGoToCheckout}> Ver Carrito <FaShoppingCart /></button>
            ) : (
                <>
                    <div>
                        <button className="btn btn-carrito" onClick={() => handleClic("-")}>-</button>
                        <span className='cant-carrito'>{cant}</span>
                        <button className="btn btn-carrito" onClick={() => handleClic("+")}>+</button>
                    </div>
                    <button className='btn btn-carrito' onClick={handleAddToCart}> Agregar <FaShoppingCart /></button >
                </>
            )}
        </>
    )
}

export default ItemCount
