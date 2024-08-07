import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import ItemDetail from '../Item/ItemDetail'
import { getProducts } from '../../utils/fetchData'

const ItemListContainer = ({ title, welcome }) => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    getProducts(categoryId)  
    .then((response)=>{
      setProducts(response)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      console.log('Success')
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
      <ItemList products = {products} listTitle={categoryId}/>

    </>
  )
}

export default ItemListContainer