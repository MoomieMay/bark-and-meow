import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../utils/fetchData'
import { Spinner }  from "../spinner/Spinner.jsx"

const ItemListContainer = ({ title, welcome }) => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)  
    .then((response)=>{
      setProducts(response)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      setLoading(false);
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
      {loading ? <Spinner />
    :<ItemList products = {products} listTitle={categoryId}/>}

    </>
  )
}

export default ItemListContainer