import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../utils/fetchData'
import ItemDetailList from '../ItemDetailList/ItemDetailList'
import { Spinner } from '../spinner/Spinner'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProduct(categoryId)
      .then((response) => {
        setProduct(response)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('Success')
        setLoading(false);
      })
  }, [categoryId]);

  return (
    <>
      <div>
      {loading ? <Spinner /> :
        <ItemDetailList products={product} />
      }
      </div>
    </>
  )
}

export default ItemDetailContainer