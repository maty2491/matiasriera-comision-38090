import React from 'react'
import logo from "../assets/logo.png"
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid text-center d-block mx-auto">
          <Link to="/" className="navbar-brand" >
            <img src={logo} alt="Tienda-de-comics" width="140" height="auto" className="img-fluid" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to={`/category/comic-marvel`}>MARVEL COMICS</Link>
              <Link className="nav-link" to={`/category/comic-dc`}>DC COMICS</Link>
              <Link className="nav-link" to="">NOSOTROS</Link>
              <Link to="/cart" ><CartWidget /></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar

