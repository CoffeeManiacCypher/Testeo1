import React, { useState } from 'react';
import './Table.css';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, nombre: 'Botella de agua Flamenco', Valor: 1000, Descripcion: 'Botella de  250cc, agua purificada' },
    { id: 2, nombre: 'Bidon de agua Cristalina', Valor: 5000, Descripcion: 'Bidon de  10 Lts, agua purificada' },
    
  ]);

  const [newData, setNewData] = useState({ id: null, nombre: '', Valor: 0, Descripcion: '' });
  const [editing, setEditing] = useState(false);

  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find(item => item.id === id);
    setNewData(itemToEdit);
    setEditing(true);
  };

  const handleSave = () => {
    if (editing) {
      const updatedData = data.map(item =>
        item.id === newData.id ? newData : item
      );
      setData(updatedData);
      setEditing(false);
    } else {
      setData([...data, { ...newData, id: data.length + 1 }]);
    }
    setNewData({ id: null, nombre: '', Valor: 0, Descripcion: '' });
  };

  return (
    <div>
      <DataTable data={data} handleEdit={handleEdit} handleDelete={handleDelete} />

      <DataManagement
        newData={newData}
        setNewData={setNewData}
        editing={editing}
        handleSave={handleSave}
      />
    </div>
  );
};

const DataTable = ({ data, handleEdit, handleDelete }) => (
  <table id="container">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre Artículos</th>
        <th>Valor</th>
        <th>Descripción</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.nombre}</td>
          <td>{item.Valor}</td>
          <td>{item.Descripcion}</td>
          <td>
            <button onClick={() => handleEdit(item.id)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const DataManagement = ({ newData, setNewData, editing, handleSave }) => (
  <div>
    <h3>{editing ? 'Editar Registro' : 'Registrar Artículo'}</h3>
    <label>ID:</label>
    <input
      type="text"
      value={newData.id || ''}
      readOnly={editing}
      onChange={(e) => setNewData({ ...newData, id: e.target.value })}
    />
    <br/>
    <label>Artículos:</label>
    <input
      type="text"
      value={newData.nombre}
      onChange={(e) => setNewData({ ...newData, nombre: e.target.value })}
    />
    <br/>
    <label>Valor:</label>
    <input
      type="number"
      value={newData.Valor}
      onChange={(e) => setNewData({ ...newData, Valor: e.target.value })}
    />
    <br/>
    <label>Descripción:</label>
    <input
      type="text"
      value={newData.Descripcion}
      onChange={(e) => setNewData({ ...newData, Descripcion: e.target.value })}
    />
    <br/>
    <button onClick={handleSave}>{editing ? 'Guardar' : 'Agregar'}</button>
  </div>
);

export default Table;