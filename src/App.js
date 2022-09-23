import React from "react"
import NavBar from './components/Navbar'
import ItemsListContainer from './components/ItemsListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'


const App = () =>{

  

  return (
    <>
      <BrowserRouter>
         <NavBar />
         <ItemsListContainer greeting="¡Bienvenido a la tienda de COMICS online BOOM!"/>
         <ItemDetailContainer />
      </BrowserRouter>
   </>
  )
}

export default App

