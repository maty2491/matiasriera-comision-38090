import React from "react"
import NavBar from './components/Navbar'
import ItemsListContainer from './components/ItemsListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Cart } from './components/cartview/Cart'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from "./context/CartContext"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={< ItemsListContainer greeting="¡Bienvenido a la tienda de COMICS online BOOM!" />} />
            <Route path="/category/:idCat" element={< ItemsListContainer greeting="¡Bienvenido a la tienda de COMICS online BOOM!" />} />
            <Route path="/item/:id" element={<ItemDetailContainer mensaje="Detalles del producto" initial="1" stock="10" />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App

