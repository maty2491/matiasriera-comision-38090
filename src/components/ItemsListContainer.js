import React from "react"
import { ItemList } from '../components/ItemList'
import { useState, useEffect } from "react"
import { products } from "../assets/products"
import { customFetch } from "../components/utils/CustomFetch"

const ItemsListContainer = ({ greeting }) => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    customFetch(products).then((res) => setListProducts(res))
  }, [])

  return (
    <>
      <h1 className="text-center mt-5">{greeting}</h1>
       <div className="container-fluid mt-4">
       <div className="row d-flex justify-content-evenly">
          <ItemList listProducts={listProducts} />
        </div>
      </div>
       
    </>
  )
}

export default ItemsListContainer
