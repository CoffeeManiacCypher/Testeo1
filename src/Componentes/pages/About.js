import { useState } from 'react';
import './About.css';

const About = () => {
    const [clientes, setClientes] = useState([
      {
        _id: 1,
        nombre: 'John Doe',
        correo: 'john@example.com',
        telefono: '123-456-7890',
      },
      {
        _id: 2,
        nombre: 'Jane Doe',
        correo: 'jane@example.com',
        telefono: '987-654-3210',
      },
      // Add more client objects as needed
    ]);
  
    
  
    const [nuevoCliente, setNuevoCliente] = useState({
      _id: '',
      nombre: '',
      correo: '',
      telefono: '',
    });
  
    
  
   
  
    
  const handleAgregarCliente = () => {
    const { _id, ...rest } = nuevoCliente; // Extract _id from nuevoCliente
      const nuevoClienteConID = {
        _id: _id || Date.now(), // Use existing _id or generate a new one
          ...rest,
          };
  
          if (_id) {
            // If _id exists, it means we are editing an existing entry
            setClientes((prevClientes) =>
              prevClientes.map((cliente) =>
                cliente._id === _id ? { ...nuevoClienteConID } : cliente
              )
            );
          } else {
            // If _id doesn't exist, it means we are adding a new entry
            setClientes((prevClientes) => [...prevClientes, nuevoClienteConID]);
          }
        
          setNuevoCliente({
            _id: '', // Reset the ID field
            nombre: '',
            correo: '',
            telefono: '',
          });
        };
  
  const handleEditarCliente = (id) => {
      const clienteEditar = clientes.find((cliente) => cliente._id === id);
      setNuevoCliente({ ...clienteEditar });
    };
  
  
  
    const handleEliminarCliente = (id) => {
      setClientes((prevClientes) =>
        prevClientes.filter((cliente) => cliente._id !== id)
      );
  
      if (nuevoCliente._id === id) {
        setNuevoCliente({
          _id: '',
          nombre: '',
          correo: '',
          telefono: '',
        });
      }
    };  
    return (
        <div>
          <div className="celu">
            {/* Display any additional content related to the table if needed */}
          </div>
          <div>
            <h3>Tabla de clientes</h3>
            <div className="celu">
              <label htmlFor="nombre">Nombre Completo:</label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nuevoCliente.nombre}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })}
              />
            </div>
            <div className="celu">
              <label htmlFor="correo">Correo Electrónico:</label>
              <input
                type="text"
                name="correo"
                placeholder="Correo Electrónico"
                value={nuevoCliente.correo}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, correo: e.target.value })}
              />
            </div>
            <div className="celu">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                value={nuevoCliente.telefono}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })}
              />
            </div>
            <button onClick={handleAgregarCliente}>
              {nuevoCliente._id ? 'Actualizar Cliente' : 'Agregar Cliente'}
            </button>
          </div>
        
          <div className="clientes-table">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo Electrónico</th>
                  <th>Teléfono</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente._id}>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.correo}</td>
                    <td>{cliente.telefono}</td>
                    <td>
                      <button
                        className="editar-button"
                        onClick={() => handleEditarCliente(cliente._id)}
                      >
                        Editar
                      </button>
                      <button
                        className="eliminar-button"
                        onClick={() => handleEliminarCliente(cliente._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

export default About;