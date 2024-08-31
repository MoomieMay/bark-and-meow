import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/dbConnection.js'
import { collection, getDocs, query, where } from "firebase/firestore"
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { Spinner }  from "../spinner/Spinner.jsx"

const ItemListContainer = ({ title, welcome }) => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let productsCollection = collection(db, "productos")

    if(categoryId){
      productsCollection = query(productsCollection, where("category", "==", categoryId))
    }
      getDocs(productsCollection).then(({docs}) => {
        const prodFromDocs = docs.map((doc)=>({
          id: doc.id,
          ...doc.data()
        }))
        setProducts(prodFromDocs)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error: ", error)
      }) 
  }, [categoryId]);

  return (
    <>
      <div className="card cardContainer text-center">
        <div className="card-body">
          <h1 className="card-title mb-3">{title}</h1>
          <p className="card-text fs-4 mb-3">{welcome}</p>
        </div>
      </div>
      {loading ? <Spinner />
    :<ItemList products = {products} listTitle={categoryId}/>}

    </>
  )
}

export default ItemListContainer