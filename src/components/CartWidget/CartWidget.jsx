import React from 'react'
import './cartWidget.css'
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="cart-count">0</span>
    </div>
  )
}

export default CartWidget