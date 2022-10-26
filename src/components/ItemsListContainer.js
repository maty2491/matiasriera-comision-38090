import React from "react"
import { ItemList } from '../components/ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemsListContainer = ({ greeting }) => {
  const [listProducts, setListProducts] = useState([]);
  const { idCat } = useParams()
  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'products')
    if (idCat) {
      const queryFilter = query(queryCollection, where('category', '==', idCat))
      getDocs(queryFilter)
        .then(res => setListProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => setListProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  }, [idCat])
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">{greeting}</h1>
        <div className="container-fluid mt-4">
          <div className="row d-flex justify-content-evenly">
            <ItemList listProducts={listProducts} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemsListContainer


