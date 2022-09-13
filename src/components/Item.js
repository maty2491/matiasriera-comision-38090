import 'bootstrap/dist/css/bootstrap.min.css'

const Item = ({product}) => {
    console.log(product)
    return(
        <>
                    <div className="col-md-3 m-3 shadow-lg border-light card text-center align-items-center">
                        <img src={product.image} className="img-fluid mt-2" width="220" height="auto" />
                        <div className="card-body">
                            <h2 className="card-text">{product.product}</h2>
                            <div className="btn-group m-2">
                                <button type="button"  className="btn btn-secondary mb-3 ">-</button>
                                <button type="button" className="btn btn-light mb-3" disabled>{product.stock}</button>
                                <button type="button"  className="btn btn-secondary mb-3 ">+</button>
                            </div>
                            <h4 className=''>${product.price}</h4>
                        </div>
                        <div className="card-footer bg-transparent">
                            <button className="btn btn-success me-3">Agregar al carro</button>
                            <button className='btn btn-danger'>Ver detalles</button>
                        </div>
                    </div>
        </>
    )
}
export { Item }