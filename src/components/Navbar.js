import React from 'react'
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid text-center d-block mx-auto">
          <a className="navbar-brand " href="#">
            <img src={logo} alt="Tienda-de-comics" width="140" height="auto" class="img-fluid" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">INICIO</a>
              <a className="nav-link" href="#">MARVEL COMICS</a>
              <a className="nav-link" href="#">DC COMICS</a>
              <a className="nav-link" href="#">NOSOTROS</a>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar