import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="App-nav">

        <h1>Agua Purificada Cristalina</h1>

        <url className="nav-links">
            <a className="btn" href="#"><button>Inicio</button></a>
            <a className="btn" href="#"><button className="bi bi-bag-check"> Catálogo</button></a>
            <a className="btn" href="#"><button className="bi bi-info-square-fill"> Quienes somos</button></a>
            <Link className="btn" href="#s5" to={"/PControl"}><button className="bi bi-telephone-fill"> Contactos</button></Link >
        </url>

    </nav>
  )
}
export default Navbar