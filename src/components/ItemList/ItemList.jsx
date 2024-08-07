import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({ products, listTitle }) => {
    return (
        <div>
            <div className='ItemListTitle'>{listTitle}</div>
            <div className='row itemListRow'> 
                {products.map((product) => {
                    return <Item key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default ItemList