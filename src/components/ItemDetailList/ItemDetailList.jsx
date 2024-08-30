import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailList = ( {products} ) => {
  return (
    <div>
      {products && Object.keys(products).length > 0 ? (
        <ItemDetail key={products.id} product={products} />
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default ItemDetailList