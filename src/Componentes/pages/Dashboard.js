import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    _id: '',
    name: '',
    category: '',
    price: '',
  });

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    setFilteredProducts(storedProducts);
  }, []);

  // Update localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    filterProducts(filter);
  }, [products, filter]);

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    filterProducts(e.target.value);
  };

  const filterProducts = (searchTerm) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddProduct = () => {
    const { _id, ...rest } = newProduct;
    const newProductWithID = {
      _id: _id || Date.now(),
      ...rest,
    };

    if (_id) {
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product._id === _id ? { ...newProductWithID } : product))
      );
    } else {
      setProducts((prevProducts) => [...prevProducts, newProductWithID]);
    }

    setNewProduct({
      _id: '',
      name: '',
      category: '',
      price: '',
    });
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product._id === id);
    setNewProduct({ ...productToEdit });
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));

    if (newProduct._id === id) {
      setNewProduct({
        _id: '',
        name: '',
        category: '',
        price: '',
      });
    }
  };

  return (
    <div>
      <div className="celu">
        <h3>Buscar Producto</h3>
        <input
          type="text"
          name="search"
          placeholder="Buscar por nombre o categoría"
          value={filter}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h3>Tabla Productos</h3>
        <div className="celu">
          <label htmlFor="name">Producto:</label>
          <input
            type="text"
            name="name"
            placeholder="Agregar nombre de articulo"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
        </div>
        <div className="celu">
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            name="category"
            placeholder="Categoría"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          />
        </div>
        <div className="celu">
          <label htmlFor="price">Precio:</label>
          <input
            type="text"
            name="price"
            placeholder="Precio"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
        </div>
        <button onClick={handleAddProduct}>
          {newProduct._id ? 'Actualizar Producto' : 'Agregar Producto'}
        </button>
      </div>

      <div className="clientes-table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <button className="editar-button" onClick={() => handleEditProduct(product._id)}>
                    Editar
                  </button>
                 

                    <button
                      className="eliminar-button"
                      onClick={() => handleDeleteProduct(product._id)}
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
  
 

export default Dashboard;