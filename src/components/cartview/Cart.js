import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from './ItemCart'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from 'react'

const Cart = () => {
  const { cart, totalPrice } = useCartContext()
  const buyer =({    
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

  const [datos, setDatos] = useState(buyer)

  const handleClick1 = (e) => {
    setDatos({
      ...datos, [e.target.name]: e.target.value
    })
  }

  const sendData = (e) => {
    e.preventDefault()
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, buyer)
      .then(({ id }) => console.log(id));
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
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                  <th>$ {totalPrice()}</th>
                  <th><button type='button' className='btn btn-success' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Comprar</button></th>
                  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="staticBackdropLabel">Detalles del usuario</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={sendData}>
                          <div className="modal-body">
                            <div className="col mb-3">
                              <input type="text" className='form-control' placeholder="Nombre" name="name" onChange={handleClick1} />
                            </div>
                            <div className="col mb-3">
                              <input type="text" className='form-control' placeholder="Apellido" name="lastname" onChange={handleClick1} />
                            </div>
                            <div className="col mb-3">
                              <input type="email" className='form-control' placeholder="Email" name='email' onChange={handleClick1} />
                            </div>
                            <div className="col mb-3">
                              <input type="number" className='form-control' placeholder="Teléfono" name='phone' onChange={handleClick1} />
                            </div>
                            <div className="col mb-3">
                              <input type="text" className='form-control' placeholder="Domicilio" name='address' onChange={handleClick1} />
                            </div>
                            <div className="col mb-3">
                              <input type="text" className='form-control' placeholder="País" name='country' onChange={handleClick1} />
                            </div>
                            <div className="col-md-4 mb-3">
                              <input type="number" className='form-control' placeholder="Código Postal" name='zip' onChange={handleClick1} />
                            </div>
                          </div>
                        </form>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                          <button type="submit" onClick={sendData} className="btn btn-success" >Finalizar Compra</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

