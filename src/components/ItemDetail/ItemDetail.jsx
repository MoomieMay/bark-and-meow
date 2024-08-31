import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({ product }) => {
  const { addToCart } = useCartContext();
  const handleOnBuy = (cant) => {
    addToCart(product, cant);
  }

  return (
    <div className="card cardDetail mb-3">
      <div className="row g-0">
        <div className="col-md-4" key={product.id}>
          <img src={product.image} className="img-fluid rounded-start img-detail" alt="..."></img>
        </div>
        <div className="col-md-8 details">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text"><small className="text-body-secondary">${product.price}</small></p>
          </div>
          <ItemCount stock={product.stock} initial={1} handleOnBuy={handleOnBuy} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail