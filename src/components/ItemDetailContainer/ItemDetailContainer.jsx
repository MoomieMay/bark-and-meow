import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/dbConnection"
import { collection, getDoc, doc } from "firebase/firestore"
import ItemDetailList from '../ItemDetailList/ItemDetailList'
import { Spinner } from '../spinner/Spinner'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productCollection = collection(db, "productos")
    const refDoc = doc(productCollection, categoryId)

    getDoc(refDoc)
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() })
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error: ", error)
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