import React from 'react'
import logo from '../../Assets/logo.png'



const NavBar = () => {
    return(
    <>
       
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid text-center d-block mx-auto">
    <a class="navbar-brand " href="#">
    <img src={logo} alt="Tienda-de-comics" width="140" height="auto" class="img-fluid"/></a>
   <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">INICIO</a>
        <a class="nav-link" href="#">MARVEL COMICS</a>
        <a class="nav-link" href="#">DC COMICS</a>
        <a class="nav-link" href="#">NOSOTROS</a>
        
      </div>
    </div>
  </div>
</nav>

</>
     )
}

export default NavBar