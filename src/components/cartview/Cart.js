import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from './ItemCart'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from 'react'
import swal from 'sweetalert'

const Cart = () => {
  const viewAlert = () => {
    swal({
      title: "Compra finalizada",
      text: "Gracias por confiar en nosotros, su compra ha sido ingresada",
      icon: "success",
      timer: "4000"
    })
  }
  const { cart, totalPrice, clear } = useCartContext()
  const [datos, setDatos] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    zip: '',
    items: cart.map(product => ({ id: product.id, product: product.product, price: product.price, count: product.count })),
    total: totalPrice(),
  })
  const handleClick = (e) => {
    setDatos({
      ...datos, [e.target.name]: e.target.value
    })
  }
  const sendData = (e) => {
    e.preventDefault()
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, datos)
    clear()
  }
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
      <div className="container mt-5" tabIndex="0">
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
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                  <th>$ {totalPrice()}</th>
                  <th><button type='button' className='btn btn-success' data-bs-toggle="modal" data-bs-target="#myModal">Comprar</button></th>
                </tr>
              </tbody>
            </table>
            <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="myModal" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5">Detalles del usuario</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form onSubmit={sendData}>
                    <div className="modal-body">
                      <div className="col mb-3">
                        <input type="text" className='form-control' placeholder="Nombre" name="name" onChange={handleClick} required />
                      </div>
                      <div className="col mb-3">
                        <input type="text" className='form-control' placeholder="Apellido" name="lastname" onChange={handleClick} required />
                      </div>
                      <div className="col mb-3">
                        <input type="email" className='form-control' placeholder="Email" name='email' onChange={handleClick} required />
                      </div>
                      <div className="col mb-3">
                        <input type="number" className='form-control' placeholder="Teléfono" name='phone' onChange={handleClick} required />
                      </div>
                      <div className="col mb-3">
                        <input type="text" className='form-control' placeholder="Domicilio" name='address' onChange={handleClick} required />
                      </div>
                      <div className="col mb-3">
                        <input type="text" className='form-control' placeholder="País" name='country' onChange={handleClick} required />
                      </div>
                      <div className="col-md-4 mb-3">
                        <input type="number" className='form-control' placeholder="Código Postal" name='zip' onChange={handleClick} required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="submit" onClick={() => viewAlert()} className="btn btn-success" data-bs-dismiss="modal">Finalizar Compra</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

