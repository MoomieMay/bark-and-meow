import React from 'react'
import './itemListContainer.css'

const ItemListContainer = ({ title, welcome }) => {
  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title mb-3">{title}</h1>
          <p className="card-text fs-4 mb-3">{welcome}</p>
          <a href="#" className="btn btn-lg btn-explore my-3">Explorar la Tienda</a>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer