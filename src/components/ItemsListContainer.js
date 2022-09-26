import React from "react"
import { ItemList } from '../components/ItemList'
import { useState, useEffect } from "react"
import { products } from "../assets/products"
import { customFetch } from "../components/utils/CustomFetch"
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemsListContainer = ({ greeting }) => {
  const [listProducts, setListProducts] = useState([]);
  const { idCat } = useParams()
  
  useEffect(() => {
    customFetch(products, 100, idCat, 'category').then((res) => setListProducts(res))
  }, [idCat])

  function onAdd(count) {
    console.log(count);
    if (count !== 1) {
      alert("Se agregaron " + count + " productos al carro")

    } 
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">{greeting}</h1>
        <div className="container-fluid mt-4">
          <div className="row d-flex justify-content-evenly">
            <ItemList listProducts={listProducts}/>
          </div>
        </div>
      </div>
    </>
  )
}



export default ItemsListContainer


