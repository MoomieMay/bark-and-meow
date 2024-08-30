import React from 'react'
import styles from './cartWidget.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';


const CartWidget = () => {
  const {qty} = useCartContext();
  return (
    <div className={styles.cartWidget}>
      <FaShoppingCart />
      <span className={styles.cartCount}>{qty}</span>
    </div>
  )
}

export default CartWidget