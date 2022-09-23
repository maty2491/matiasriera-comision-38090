import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"

const ItemsListContainer = ({ greeting }) => {

    const [producto, setProducto] = useState([])
    
    useEffect(() => {
        
        const getItem = async() => {
            try {                
                const respuesta = await fetch('http://localhost:5000/marvel/1')
                const data = await respuesta.json() 
                setProducto(data)
            } catch(err) {
                console.log("Error: ".err);
            }
        }
    
    getItem()
        
    }, [])

    return (
        <>
          <ItemDetail producto={producto}/>
        </>
    )
}

export default ItemsListContainer


