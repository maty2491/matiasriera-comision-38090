import React from "react"
import NavBar from './components/Navbar'
import ItemsListContainer from './components/ItemsListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Cart } from './components/cartview/Cart'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={< ItemsListContainer greeting="¡Bienvenido a la tienda de COMICS online BOOM!" />} />
          <Route path="/category/:idCat" element={< ItemsListContainer greeting="¡Bienvenido a la tienda de COMICS online BOOM!" />} />
          <Route path="/item/:id" element={<ItemDetailContainer mensaje="Detalles del producto" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

