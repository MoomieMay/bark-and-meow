import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
  const { cart, total, removeItem, clearCart } = useCartContext();
  const navigate = useNavigate()

  const handleRemoveItem = (id, price, cant) => {
    removeItem(id, price, cant);
  }

  const handleClearCart = () => {
    clearCart();
  }

  const handleCheckout = () => {
    navigate("/Checkout");
  }

  return (
    <>
      <h3 className='cartTitle'>Carrito de Compras</h3>
      <div className='cartCard'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio Unitario</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map(({ id, name, price, cant }, index) => {
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{cant}</td>
                  <td>{name}</td>
                  <td>${price}</td>
                  <td>${price * cant}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => handleRemoveItem(id, price, cant)}> Remover </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className='text-end fw-bold' colSpan={5}> TOTAL</td>
              <td className='fw-bold'> ${total}</td>
            </tr>
          </tbody>
        </table>
        <div className='btns'>
          <button className='btn btn-cart' onClick={handleClearCart}> Vaciar carrito</button>
          <button className='btn btn-cart' onClick={handleCheckout}> Finalizar Compra</button>
        </div>
      </div>
    </>
  )
}

export default Cart