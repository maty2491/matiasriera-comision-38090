import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { customFetch } from "./utils/CustomFetch"
import { products } from '../assets/products'
import { useParams } from "react-router-dom"


const ItemDetailContainer = ({ mensaje }) => {
    const [producto, setListProducts] = useState({})
    const { id } = useParams()
    useEffect(() => {
        customFetch(products, 100, parseInt(id)).then((res) => setListProducts(res))
    }, [id])
    return (
        <>
            <div className="container">
                <h1 className="text-center mt-4">{mensaje}</h1>
                <hr></hr>
                <ItemDetail producto={producto} />
            </div>
        </>
    )
}

export default ItemDetailContainer


