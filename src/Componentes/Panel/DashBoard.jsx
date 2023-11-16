import React from 'react';
import './DashBoard.css';
import Table from './Table'; // Asegúrate de importar el componente de la tabla

const Dashboard = () => {
  return (
    <div className="dashboard-panel">
      <h2>Gestor de productos</h2>
      <p>Administra los productos del catálogo.</p>
      <Table />
    </div>
  );
};


export default Dashboard;