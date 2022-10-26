import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore";
import RingLoader from "react-spinners/RingLoader";

const ItemDetailContainer = ({ mensaje }) => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const [producto, setListProducts] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'products', id)
        getDoc(queryDoc)
            .then(res => setListProducts({ id: res.id, ...res.data() }))
    }, [id])
    return (
        <>
            <div className="container">
                <h1 className="text-center mt-4">{mensaje}</h1>
                <hr></hr>
                {
                    loading ? (
                        <div style={{ width: "100%", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <RingLoader color={"#f29f11"} loading={loading} size={120} />
                        </div>
                    ) : (
                        <ItemDetail producto={producto} />
                    )}
            </div>
        </>
    )
}

export default ItemDetailContainer


