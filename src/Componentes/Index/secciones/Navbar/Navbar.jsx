import "./navbar.css";
import { Link } from 'react-router-dom';
import logo from '../../img/LogoCompleto.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to={"/"}><img src={logo} width="150px" height="auto" /></Link>
      <ul className="links">
        <li><a className="bi-bag-fill" href="#s-productos">&nbsp;&nbsp;&nbsp;Catálogo</a></li>
        <li><a className="bi-info-square-fill" href="#s-quienes-somos">&nbsp;&nbsp;&nbsp;¿Quiénes somos?</a></li>
        <li><a className="fa-solid fa-truck"><a href='#s-reparto'>&nbsp;&nbsp;&nbsp;Reparto</a></a></li>
      </ul>
      <Link className="action_btn" to={"/Login"}><i className="fa-solid fa-right-to-bracket"></i></Link>
      <div className='toggle_btn'><i className="fa-solid fa-bars"></i></div>
    </div>
  )
}
export default Navbar