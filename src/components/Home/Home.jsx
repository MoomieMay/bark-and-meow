import React from 'react'

const Home = ({ title, welcome }) => {
    return (
        <div>
            <div className="card cardContainer text-center mt-4">
                <div className="card-body">
                    <h1 className="card-title mb-3">{title}</h1>
                    <p className="card-text fs-4 mb-3">{welcome}</p>
                </div>
            </div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1722991214/carrusel1_xaa24s.png" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="https://res.cloudinary.com/dkwlpigxv/image/upload/v1722991309/carrusel2_xaxtfp.png" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home