import React from "react"
import { Text } from "@chakra-ui/react"
import ItemCount from "./ItemCount"
import { useState, useEffect } from "react"
import { products } from "../assets/products"
import { customFetch } from "./ItemList"

const ItemsListContainer = ({ greeting }) => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    customFetch(products).then((res) => setListProducts(res))
  }, [])

  return (
    <>
      <h1 className="text-center mt-5">{greeting}</h1>
      <ItemCount initial={1} stock={10} onAdd={(onAdd) => {}} />
    </>
  )
}

export default ItemsListContainer
