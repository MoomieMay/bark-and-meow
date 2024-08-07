import React from 'react'
import styles from './cartWidget.module.css'
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = () => {
  return (
    <div className={styles.cartWidget}>
      <FaShoppingCart />
      <span className={styles.cartCount}>0</span>
    </div>
  )
}

export default CartWidget