import './App.css';
import Index from './Componentes/Index/Index';
import WebContent from './Componentes/WebContent/Content'
import Navbar from './Componentes/Navbar/Navbar';
import Login from './Componentes/Login/Login'
import Panel from './Componentes/Panel/Panel';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

