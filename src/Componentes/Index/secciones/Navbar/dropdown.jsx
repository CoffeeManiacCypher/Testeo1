import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="dropdown_menu">
            <li><a className="bi-bag-fill" href="#s-productos">&nbsp;&nbsp;&nbsp;Productos</a></li>
            <li><a className="bi-info-square-fill" href="#s-quienes-somos">&nbsp;&nbsp;&nbsp;¿Quiénes somos?</a></li>
            <li><a className="fa-solid fa-truck"><a href="#s-reparto">&nbsp;&nbsp;&nbsp;Reparto</a></a></li>
            <li><Link className="action_btn" to={"/Login"}><i className="fa-solid fa-right-to-bracket"></i></Link></li>
        </div>
    )
}
export default Navbar