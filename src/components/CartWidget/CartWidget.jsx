import React from 'react'
import styles from './cartWidget.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {qty} = useCartContext();
  return (
    <div className={styles.cartWidget}>
      <Link to={'/Carrito'}>
      <FaShoppingCart />
      <span className={styles.cartCount}>{qty}</span>
      </Link>
    </div>
  )
}

export default CartWidget