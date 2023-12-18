import { useState, useEffect } from 'react';

const Ventas = () => {
  const [sales, setSales] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredSales, setFilteredSales] = useState([]);
  const [newSale, setNewSale] = useState({
    _id: '',
    amount: '',
    year: '',
    month: '',
    day: '',
    description: '', // New field
  });

  // Load sales from localStorage on component mount
  useEffect(() => {
    const storedSales = JSON.parse(localStorage.getItem('sales')) || [];
    setSales(storedSales);
    setFilteredSales(storedSales);
  }, []);

  // Update localStorage whenever sales change
  useEffect(() => {
    localStorage.setItem('sales', JSON.stringify(sales));
    filterSales(filter);
  }, [sales, filter]);

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    filterSales(e.target.value);
  };

  const filterSales = (searchTerm) => {
    const filtered = sales.filter(
      (sale) =>
        sale.amount.toString().includes(searchTerm) ||
        sale.year.toString().includes(searchTerm) ||
        sale.month.toString().includes(searchTerm) ||
        sale.day.toString().includes(searchTerm) ||
        sale.description.toLowerCase().includes(searchTerm.toLowerCase()) // New field
    );
    setFilteredSales(filtered);
  };

  const handleAddSale = () => {
    const { _id, ...rest } = newSale;
    const newSaleWithID = {
      _id: _id || Date.now(),
      ...rest,
    };

    setSales((prevSales) => [...prevSales, newSaleWithID]);
    setNewSale({
      _id: '',
      amount: '',
      year: '',
      month: '',
      day: '',
      description: '', // New field
    });
  };

  const handleDeleteSale = (id) => {
    setSales((prevSales) => prevSales.filter((sale) => sale._id !== id));

    if (newSale._id === id) {
      setNewSale({
        _id: '',
        amount: '',
        year: '',
        month: '',
        day: '',
        description: '', // New field
      });
    }
  };

  return (
    <div>
      <div className="celu">
        <h3>Buscar Venta</h3>
        <input
          type="text"
          name="search"
          placeholder="Buscar por monto, año, mes, día o descripción"
          value={filter}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h3>Registro de Ventas</h3>
        <div className="celu">
          <label htmlFor="amount">Monto:</label>
          <input
            type="text"
            name="amount"
            placeholder="Agregar monto de la venta"
            value={newSale.amount}
            onChange={(e) => setNewSale({ ...newSale, amount: e.target.value })}
          />
        </div>
        <div className="celu">
          <label htmlFor="year">Año:</label>
          <input
            type="text"
            name="year"
            placeholder="Año"
            value={newSale.year}
            onChange={(e) => setNewSale({ ...newSale, year: e.target.value })}
          />
        </div>
        <div className="celu">
          <label htmlFor="month">Mes:</label>
          <input
            type="text"
            name="month"
            placeholder="Mes"
            value={newSale.month}
            onChange={(e) => setNewSale({ ...newSale, month: e.target.value })}
          />
        </div>
        <div className="celu">
          <label htmlFor="day">Día:</label>
          <input
            type="text"
            name="day"
            placeholder="Día"
            value={newSale.day}
            onChange={(e) => setNewSale({ ...newSale, day: e.target.value })}
          />
        </div>
        <div className="celu">
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            name="description"
            placeholder="Agregar descripción de la venta"
            value={newSale.description}
            onChange={(e) => setNewSale({ ...newSale, description: e.target.value })}
          />
        </div>
        <button onClick={handleAddSale}>Agregar Venta</button>
      </div>

      <div className="clientes-table">
        <table>
          <thead>
            <tr>
              <th>Monto</th>
              <th>Año</th>
              <th>Mes</th>
              <th>Día</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.map((sale) => (
              <tr key={sale._id}>
                <td>{sale.amount}</td>
                <td>{sale.year}</td>
                <td>{sale.month}</td>
                <td>{sale.day}</td>
                <td>{sale.description}</td>
                <td>
                  <button className="eliminar-button" onClick={() => handleDeleteSale(sale._id)}>
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

export default Ventas;

