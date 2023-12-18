import PropTypes from 'prop-types';
import { useState } from 'react';
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
        <th className="bi bi-info-circle-fill"> Descripción</th>
        <th className="bi bi-clipboard2-data"> Acciones</th>
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
            <a className="btnEdit"><button className="bi bi-pencil" onClick={() => handleEdit(item.id)}> Editar</button></a>
            <a className="btnDel"><button className="bi bi-x-lg" onClick={() => handleDelete(item.id)}>  Eliminar</button></a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

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

DataManagement.propTypes = {
  newData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nombre: PropTypes.string,
    Valor: PropTypes.number,
    Descripcion: PropTypes.string,
  }).isRequired,
  setNewData: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Table;
