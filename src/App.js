import logo from './logo.svg';
import './App.css';
import Component from './Component';
  
function App() {
  return (
    <div className="App">

      <nav className="App-nav">

        <url class="nav-links">
            <a class="btn" href="#"><button>Inicio</button></a>
            <a class="btn" href="#"><button class="bi bi-bag-check"> Catálogo</button></a>
            <a class="btn" href="#"><button class="bi bi-info-square-fill"> Quienes somos</button></a>
            <a class="btn" href="#"><button class="bi bi-telephone-fill"> Contactos</button></a>
        </url>

      </nav>

      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Preparativos de la plataforma.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        />
        
      </header>

      <body className="App-body">

        Cuerpo de pagina
        <Component />

      </body>

      <footer className="App-footer">

        Pie de pagina

      </footer>
    </div>

  );
}

export default App;

