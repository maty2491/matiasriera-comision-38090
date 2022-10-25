import React, { useState, useEffect } from "react"
import "./App.css"
import NavBar from './components/Navbar'
import ItemsListContainer from './components/ItemsListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/cartview/Cart'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from "./context/CartContext"
import './firebase/firebase'
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <>
      <BrowserRouter >
        <CartProvider>
          <NavBar />
          <div className="App">
          {
            loading ?
                <RingLoader className="App" height={"100hv"} color={"#f29f11"} loading={loading} size={120}/>
              :
              <>
                <Routes>
                  <Route path="/" element={< ItemsListContainer greeting="¡Bienvenido a la tienda de COMICS online BOOM!" />} />
                  <Route path="/category/:idCat" element={< ItemsListContainer greeting="¡Bienvenido a la tienda de COMICS online BOOM!" />} />
                  <Route path="/item/:id" element={<ItemDetailContainer mensaje="Detalles del producto" initial="1" stock="10" />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </>
          }
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App

