import React from 'react'
import { products } from '../mock/mockData'
import { db } from "../../firebase/dbConnection"
import { collection, addDoc } from "firebase/firestore"
import './Error404.css'

const Error404 = () => {
    const addProd = () => {
        const productsCollection = collection(db, "productos")
    
        products.forEach((item)=>{
          addDoc(productsCollection, item)
          .then(doc => {
            console.log("Agregado con ID: ", doc.id)
          })
          .catch((error) => {
            console.error("Error: ",error)
          })
    
        })
      } 
    return (
        <>
        <div className="card errorCard text-center">
            <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1722981480/Error_divhhi.jpg" className="img-fluid"></img>
            <div className="card-body">
                <h4 className="card-title">Parece que no encontramos nada</h4>
            </div>
        </div>
        <button hidden className='btn' onClick={addProd}>Agregar items</button>
        </>
    )
}

export default Error404