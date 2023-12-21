import './App.css';
import Index from './Componentes/Index/Index';
import Navbar from '../src/Componentes/Index/secciones/Navbar/Navbar';
import Catalogo from './Componentes/WebContent/Catalogo';

import Login from './Componentes/Login/Login'
import PDC from './Componentes/Login/Home'

import PControl from './Componentes/pages/Layout'
import Panel from './Componentes/Panel/Panel';
import PClientes from './Componentes/pages/About'
import PCVentas from './Componentes/pages/ventas'
import Recursos from './Componentes/pages/Dashboard'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
  
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Index />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Index' element={<Index />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Panel' element={<Panel/>} />
        <Route path='/PControl' element={<PControl/>} />
        <Route path='/Catalogo' element={<Catalogo/>}/>

        <Route path='/PDC' element={<PDC/>}/>

        <Route path='/PClientes' element={<PClientes/>} />
        <Route path='/PCVentas' element={<PCVentas/>} />
        <Route path='/Recursos' element={<Recursos/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

