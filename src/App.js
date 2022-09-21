import React from "react"
import NavBar from './components/Navbar'
import ItemsListContainer from './components/ItemsListContainer'
import ItemCount from './components/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

const App = () =>{

  

  return (
    <>
      <BrowserRouter>
         <NavBar />
         <ItemsListContainer greeting="¡Bienvenido a la tienda de COMICS online BOOM!"/>
      </BrowserRouter>
   </>
  )
}

export default App

