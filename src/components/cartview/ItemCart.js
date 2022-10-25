import React from "react"
import { useCartContext } from "../../context/CartContext"

const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext()
    return (
        <>
            <tr>
                <td><img src={product.image} alt="Imagen de comic" className="rounded mx-auto d-block" width="70" height="auto" /></td>
                <td>{product.product}</td>
                <td>{product.count}</td>
                <td>{product.price}</td>
                <td>${product.count * product.price}</td>
                <td><button className='btn btn-warning' onClick={() => removeItem(product.id)}>Eliminar</button></td>
            </tr>
        </>
    )
}

export default ItemCart

