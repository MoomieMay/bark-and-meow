import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [cant, setCant] = useState(1)
    const handleClicMenos = () => {
        if (cant === 1){
            alert("El mínimo es 1 producto")
            return
        }
        setCant(cant - 1)
    }
    const handleClicMas = () => {
        setCant(cant + 1)
    }
    return (
        <div>
            <button onClick={handleClicMenos}>-</button>
            <span>{cant}</span>
            <button onClick={handleClicMas}>+</button>
        </div>
    )
}

export default ItemCount
