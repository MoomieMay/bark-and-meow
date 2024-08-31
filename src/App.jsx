import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contact from './components/Contact/Contact'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Layout from './components/pages/Layout'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import './App.css'
import Error404 from './components/Error404/Error404'
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  const title = "Pet Shop Bark&Meow"
  const welcome = "Preparate para una nueva experiencia para tus mascotas"
  const [count, setCount] = useState(0)

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home title={title} welcome={welcome} />} />
              <Route path='/Inicio' element={<Home title={title} welcome={welcome} />} />
              <Route path='/Contacto' element={<Contact />} />
              <Route path='/Productos/:categoryId' element={<ItemListContainer title={title} />} />
              <Route path='/Detalle/:categoryId' element={<ItemDetailContainer />} />
              <Route path='/Carrito' element={<Cart />} />
              <Route path='/Checkout' element={<Checkout />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App