import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="App-nav">

        <h1>Agua Purificada Cristalina</h1>

        <url class="nav-links">
            <a class="btn" href="#"><button>Inicio</button></a>
            <a class="btn" href="#"><button class="bi bi-bag-check"> Catálogo</button></a>
            <a class="btn" href="#"><button class="bi bi-info-square-fill"> Quienes somos</button></a>
            <Link class="btn" href="#s5" to={"/Login"}><button class="bi bi-telephone-fill"> Contactos</button></Link >
        </url>

    </nav>
  )
}
export default Navbar