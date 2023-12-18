import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <h2>Panel de control</h2>
        <ul>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PClientes">Clientes</Link>
          </li>
          <li>
            <Link to="/Recursos">Recursos</Link>
          </li>
          <li>
            <Link to="/PCVentas">ventas realizadas</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;


