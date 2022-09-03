import React from "react";
import NavBar from './components/navbar/Navbar'
import ItemsListContainer from './components/ItemsListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () =>{

  return (
    <>
   <NavBar />
   <ItemsListContainer greeting="Mensaje"/>
   </>
  )
}

export default App

