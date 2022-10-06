import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from './ItemCart'

const Cart = () => {
  const { cart } = useCartContext()

  if (cart.length === 0) {
    return (
      <>
        <div className="container">
          <div className='row'>
            <div className='col text-center mt-5'>
              <h1>No hay elementos en el carrito</h1>
              <Link to='/'>Empezar compras</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1 className="text-center mb-5">Carrito de compras</h1>
            <table className="table table-striped table-bordered align-middle text-center">
              <thead>
                <tr className="table-secondary">
                  <th scope="col">Imagen</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Total</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map(product => <ItemCart key={product.id} product={product} />)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

