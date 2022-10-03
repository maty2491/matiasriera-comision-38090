import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const ItemDetail = ({ producto }) => {
    const [goCart, setGoCart] = useState(false)
    const { addItem } = useCartContext()
    const onAdd = (count) => {
        setGoCart(true)
        addItem(producto, count)
    }
    return (
        <>
            <div className='container'>
                <div className='row mt-5 '>
                    <div className='col-lg-6  col-md-6 text-center'>
                        <img src={producto.image} alt="Imagen de comic" className="img-fluid mt-2" width="320" height="auto" />
                    </div>
                    <div className='col-lg-6 col-md-6 text-lg-start text-center mt-3'>
                        <h4>{producto.product}</h4>
                        <p>{producto.description}</p>
                        <h5> Precio ${producto.price}</h5>
                        {
                            goCart
                                ? <Link to='/cart'><button className='btn btn-success'>Finalizar compra</button></Link>
                                : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemDetail