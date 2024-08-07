import React from 'react'
import './Item.css'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <>
            <div className='col-sm-12 col-md-6 col-lg-3 pe-0 ps-0 '>
                <div className="card cardItem mb-3">
                    <img src={product.image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <Link to={`/Detalle/${product.id}`}>
                            <h5 className="card-title">{product.name}</h5>
                        </Link>
                        <p className="card-text"><small className="text-muted">${product.price}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item