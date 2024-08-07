import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import {getProduct} from '../../utils/fetchData'

const ItemDetail = () => {
  const [product, setProduct] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    getProduct(categoryId)  
    .then((response)=>{
      setProduct(response)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      console.log('Success')
    })
  }, [categoryId]);

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
          <ItemCount />
          <button className='btn btn-carrito'> Agregar <FaShoppingCart /></button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail