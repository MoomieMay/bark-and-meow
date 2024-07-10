import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import {secciones} from './mock/mockData'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  const title = "Pet Shop Bark&Meow"
  const welcome = "Preparate para una nueva experiencia para tus mascotas"
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar secciones={secciones}/>
      <ItemListContainer title={title} welcome={welcome}/>
    </>
  )
}

export default App