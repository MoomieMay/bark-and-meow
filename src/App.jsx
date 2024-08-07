import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contact from './components/Contact/Contact'
import ItemDetail from './components/Item/ItemDetail'
import Layout from './components/pages/Layout'
import Home from './components/Home/Home'
import './App.css'
import Error404 from './components/Error404/Error404'


function App() {
  const title = "Pet Shop Bark&Meow"
  const welcome = "Preparate para una nueva experiencia para tus mascotas"
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={ <Home title={title} welcome={welcome} /> }/>
            <Route path='/Inicio' element={<Home title={title} welcome={welcome} />}/>
            <Route path='/Contacto' element={<Contact />}/>
            <Route path='/Productos/:categoryId' element={<ItemListContainer title={title}/>}/>
            <Route path='/Detalle/:categoryId' element={<ItemDetail/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App