import React from 'react';
import './PNavbar.css'; // Asegúrate de tener el archivo CSS importado
import { Link } from 'react-router-dom';

const PNavbar = () => {
  return (
    <div className="navbar">
      <button>Gestionar clientes</button>
      <button class="bi bi-shop"> Gestionar Productos</button>
      <button>Gestionar Ofertas</button>
      <Link to={"/Index"}><button class="bi bi-box-arrow-in-right"> Regresar a la plataforma</button></Link>
    </div>
  );
};

export default PNavbar;