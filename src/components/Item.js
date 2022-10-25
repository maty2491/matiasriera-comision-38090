import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import React from 'react'


const Item = ({ product }) => {
    
    return (
        <>
            <div className="col-md-3 m-3 shadow-lg border-light card text-center align-items-center">
                <img src={product.image} alt="Imagen de comic" className="img-fluid mt-2" width="220" height="auto" />
                <div className="card-body">
                    <h3 className="card-text">{product.product}</h3>
                </div>
                <div className="card-footer bg-transparent">
                    <Link to={`/item/${product.id}`}><button className='btn btn-danger'>Ver detalles</button></Link>
                </div>
            </div>
        </>
    )
}

export { Item }