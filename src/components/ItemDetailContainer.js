import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = ({ mensaje }) => {
    const [producto, setListProducts] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'products', id)
        getDoc(queryDoc)
            .then(res => setListProducts({id: res.id, ...res.data()}))
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


