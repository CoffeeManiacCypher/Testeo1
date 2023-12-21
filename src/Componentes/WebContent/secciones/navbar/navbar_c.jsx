import { useEffect } from 'react';
import "./navbar_c.css";
import { Link } from 'react-router-dom';
import logo from '../../../Index/img/LogoCompleto.png';

const Navbar_c = () => {
  // Efecto de abrir/cerrar el DropDown
  useEffect(() => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    if (toggleBtn && toggleBtnIcon && dropDownMenu) {
      toggleBtn.onclick = function () {
        const isOpen = dropDownMenu.classList.toggle('open');

        toggleBtnIcon.className = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-solid fa-bars';
      };
    }
  }, []);
  return (
    <div className="navbar">
      <Link className="logo" to={"/"}><img src={logo} width="150px" height="auto" /></Link>
      <ul className="links">
        <li><a className="bi-bag-fill" href="#s-cristalina">&nbsp;&nbsp;&nbsp;Productos Cristalina</a></li>
        <li><a className="bi-info-square-fill" href="#s-flamenco">&nbsp;&nbsp;&nbsp;Productos Flamenco</a></li>
      </ul>
      <div className='toggle_btn'><i className="fa-solid fa-bars"></i></div>
    </div>
  )
}
export default Navbar_c 