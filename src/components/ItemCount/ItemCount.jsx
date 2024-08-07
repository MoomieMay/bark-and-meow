import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [cant, setCant] = useState(1);

    const handleClic = (op) =>{
        op === "+" ? ClicMas() : ClicMenos();
    }
    
    const ClicMenos = () => {
        if (cant === 1){
            alert("El mínimo es 1 producto")
            return
        }
        setCant(cant - 1);
    }

    const ClicMas = () => {
        setCant(cant + 1);
    }
    return (
        <div>
            <button className="btn btn-carrito" onClick={() => handleClic("-")}>-</button>
            <span className='cant-carrito'>{cant}</span>
            <button className="btn btn-carrito" onClick={() => handleClic("+")}>+</button>
        </div>
    )
}

export default ItemCount
