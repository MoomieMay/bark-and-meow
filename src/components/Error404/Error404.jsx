import React from 'react'
import './Error404.css'

const Error404 = () => {
    return (
        <div className="card errorCard text-center">
            <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1722981480/Error_divhhi.jpg" className="img-fluid"></img>
            <div className="card-body">
                <h4 className="card-title">Parece que no encontramos nada</h4>
            </div>
        </div>
    )
}

export default Error404